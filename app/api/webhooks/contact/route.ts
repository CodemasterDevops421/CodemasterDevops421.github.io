import { NextRequest, NextResponse } from "next/server";

import { webhookContactSchema } from "@/lib/contact";
import { logger } from "@/lib/logger";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 10;

const requestLog = new Map<string, number[]>();

function isRateLimited(clientIp: string) {
  const now = Date.now();
  const existing = requestLog.get(clientIp) ?? [];
  const withinWindow = existing.filter((timestamp) => now - timestamp < WINDOW_MS);

  if (withinWindow.length >= MAX_REQUESTS) {
    requestLog.set(clientIp, withinWindow);
    return true;
  }

  withinWindow.push(now);
  requestLog.set(clientIp, withinWindow);
  return false;
}

export async function POST(request: NextRequest) {
  const configuredSecret = process.env.CONTACT_WEBHOOK_SECRET;
  if (configuredSecret) {
    const headerSecret = request.headers.get("x-webhook-secret");
    if (headerSecret !== configuredSecret) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
  }

  const forwarded = request.headers.get("x-forwarded-for") ?? "";
  const clientIp = forwarded.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(clientIp)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const payload = await request.json().catch(() => null);
  const parsed = webhookContactSchema.safeParse(payload);

  if (!parsed.success) {
    logger.warn({ issues: parsed.error.issues }, "Invalid contact webhook payload");
    return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
  }

  logger.info(
    {
      requestId: parsed.data.requestId,
      source: parsed.data.source,
      timeline: parsed.data.timeline,
      budget: parsed.data.budget,
      company: parsed.data.company,
      email: parsed.data.email,
      name: parsed.data.name,
    },
    "Received contact inquiry",
  );

  return NextResponse.json({ ok: true, requestId: parsed.data.requestId }, { status: 202 });
}
