export type SlidingWindowRateLimiterConfig = {
  maxEvents: number;
  windowMs: number;
};

export class SlidingWindowRateLimiter {
  private readonly maxEvents: number;
  private readonly windowMs: number;
  private readonly eventsByKey = new Map<string, number[]>();

  constructor(config: SlidingWindowRateLimiterConfig) {
    this.maxEvents = config.maxEvents;
    this.windowMs = config.windowMs;
  }

  isLimited(key: string, nowMs = Date.now()) {
    const recentEvents = (this.eventsByKey.get(key) ?? []).filter((eventMs) => nowMs - eventMs < this.windowMs);

    if (recentEvents.length >= this.maxEvents) {
      if (recentEvents.length === 0) {
        this.eventsByKey.delete(key);
      } else {
        this.eventsByKey.set(key, recentEvents);
      }
      return true;
    }

    recentEvents.push(nowMs);
    this.eventsByKey.set(key, recentEvents);
    return false;
  }

  clear() {
    this.eventsByKey.clear();
  }
}
