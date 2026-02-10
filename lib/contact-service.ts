import { logger } from "@/lib/logger";
import { WebhookContactInput } from "@/lib/contact";

export type ContactProcessResult =
  | { ok: true; requestId: string }
  | { ok: false; reason: "bot_detected" };

export function processContactInquiry(inquiry: WebhookContactInput): ContactProcessResult {
  if (inquiry.website) {
    logger.warn({ requestId: inquiry.requestId }, "Blocked contact form bot submission");
    return { ok: false, reason: "bot_detected" };
  }

  logger.info(
    {
      requestId: inquiry.requestId,
      source: inquiry.source,
      timeline: inquiry.timeline,
      budget: inquiry.budget,
      company: inquiry.company,
      name: inquiry.name,
    },
    "Received contact inquiry",
  );

  return { ok: true, requestId: inquiry.requestId };
}
