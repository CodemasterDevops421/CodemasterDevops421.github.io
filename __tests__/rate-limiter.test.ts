import { SlidingWindowRateLimiter } from "@/lib/rate-limiter";

describe("SlidingWindowRateLimiter", () => {
  it("limits after max events within window", () => {
    const limiter = new SlidingWindowRateLimiter({ maxEvents: 2, windowMs: 1_000 });

    expect(limiter.isLimited("ip", 1_000)).toBe(false);
    expect(limiter.isLimited("ip", 1_100)).toBe(false);
    expect(limiter.isLimited("ip", 1_200)).toBe(true);
  });

  it("allows events after window passes", () => {
    const limiter = new SlidingWindowRateLimiter({ maxEvents: 1, windowMs: 100 });

    expect(limiter.isLimited("ip", 1_000)).toBe(false);
    expect(limiter.isLimited("ip", 1_050)).toBe(true);
    expect(limiter.isLimited("ip", 1_101)).toBe(false);
  });
});
