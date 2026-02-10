import { SlidingWindowRateLimiter } from "@/lib/rate-limiter";

const WEBHOOK_RATE_LIMIT_MAX = 10;
const WEBHOOK_RATE_LIMIT_WINDOW_MS = 60_000;

const WEBHOOK_AUTH_RATE_LIMIT_MAX = 30;
const WEBHOOK_AUTH_RATE_LIMIT_WINDOW_MS = 60_000;

export const contactWebhookRateLimiter = new SlidingWindowRateLimiter({
  maxEvents: WEBHOOK_RATE_LIMIT_MAX,
  windowMs: WEBHOOK_RATE_LIMIT_WINDOW_MS,
});

export const contactWebhookAuthRateLimiter = new SlidingWindowRateLimiter({
  maxEvents: WEBHOOK_AUTH_RATE_LIMIT_MAX,
  windowMs: WEBHOOK_AUTH_RATE_LIMIT_WINDOW_MS,
});

export function resetContactWebhookRateLimiterForTests() {
  if (process.env.NODE_ENV === "test") {
    contactWebhookRateLimiter.clear();
    contactWebhookAuthRateLimiter.clear();
  }
}
