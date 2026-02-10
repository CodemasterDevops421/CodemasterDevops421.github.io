import { createHash, timingSafeEqual } from "crypto";

import { NextRequest, NextResponse } from "next/server";

import { webhookContactSchema } from "@/lib/contact";
import { processContactInquiry } from "@/lib/contact-service";
import { contactWebhookRateLimiter } from "@/lib/contact-webhook-rate-limiter";
import { logger } from "@/lib/logger";

function summarizeValidationIssues(issues: { path: (string | number)[]; code: string }[]) {
  return issues.map((issue) => ({ field: issue.path.join(".") || "root", code: issue.code }));
}

function getClientIpAddress(request: NextRequest) {
  const requestIp = request.ip?.trim();
  if (requestIp) {
    return requestIp;
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const firstForwardedIp = forwardedFor?.split(",")[0]?.trim();
  if (firstForwardedIp) {
    return firstForwardedIp;
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) {
    return realIp;
  }

  const fallbackFingerprint = [
    request.headers.get("user-agent") ?? "",
    request.headers.get("accept-language") ?? "",
    request.headers.get("sec-ch-ua-platform") ?? "",
  ].join("|");

  if (fallbackFingerprint.length === 0) {
    logger.warn("Unable to determine client IP for contact webhook request");
    return "unknown-client";
  }

  return `unknown-client-${createHash("sha256").update(fallbackFingerprint).digest("hex").slice(0, 16)}`;
}

function secretsMatch(providedSecret: string, configuredSecret: string) {
  const provided = Buffer.from(providedSecret);
  const configured = Buffer.from(configuredSecret);

  if (provided.length !== configured.length) {
    return false;
  }

  return timingSafeEqual(provided, configured);
}

export async function POST(request: NextRequest) {
  const clientIdentifier = getClientIpAddress(request);
  if (contactWebhookRateLimiter.isLimited(clientIdentifier)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429, headers: { "Retry-After": "60" } });
  }

  const webhookSecret = process.env.CONTACT_WEBHOOK_SECRET;

  if (!webhookSecret && process.env.NODE_ENV === "production") {
    logger.error("CONTACT_WEBHOOK_SECRET is required in production");
    return NextResponse.json({ error: "server_misconfigured" }, { status: 500 });
  }

  if (webhookSecret) {
    const providedSecret = request.headers.get("x-webhook-secret") ?? "";
    if (!secretsMatch(providedSecret, webhookSecret)) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
  }

  const rawPayload = await request.json().catch(() => null);
  const validatedPayload = webhookContactSchema.safeParse(rawPayload);

  if (!validatedPayload.success) {
    logger.warn({ issues: summarizeValidationIssues(validatedPayload.error.issues) }, "Invalid contact webhook payload");
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  const processingOutcome = processContactInquiry(validatedPayload.data);

  if (!processingOutcome.ok) {
    return NextResponse.json({ error: processingOutcome.reason }, { status: 400 });
  }

  return NextResponse.json(
    { ok: true, requestId: processingOutcome.requestId },
    { status: 202, headers: { "Cache-Control": "no-store" } },
  );
}
