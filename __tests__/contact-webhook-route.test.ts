import { NextRequest } from "next/server";

import { POST } from "@/app/api/webhooks/contact/route";
import { resetContactWebhookRateLimiterForTests } from "@/lib/contact-webhook-rate-limiter";

const validPayload = {
  name: "Chaitanya",
  email: "devops@example.com",
  company: "Northwind",
  budget: "25k-50k",
  timeline: "30-days",
  message: "Need help hardening our multi-cloud kubernetes platform this quarter.",
  website: "",
  requestId: "0be8f60d-537d-4f1a-a3de-7de370f9ea3b",
  source: "portfolio-contact-form",
  submittedAt: new Date().toISOString(),
};

describe("contact webhook route", () => {
  beforeEach(() => {
    process.env.CONTACT_WEBHOOK_SECRET = "test-secret";
    resetContactWebhookRateLimiterForTests();
  });

  afterAll(() => {
    delete process.env.CONTACT_WEBHOOK_SECRET;
  });

  it("rejects unauthorized requests", async () => {
    const request = new NextRequest("http://localhost:3000/api/webhooks/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-webhook-secret": "wrong",
      },
      body: JSON.stringify(validPayload),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(401);
    expect(body).toEqual({ error: "unauthorized" });
  });

  it("accepts valid request", async () => {
    const request = new NextRequest("http://localhost:3000/api/webhooks/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-webhook-secret": "test-secret",
        "x-forwarded-for": "1.1.1.1",
      },
      body: JSON.stringify(validPayload),
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(202);
    expect(response.headers.get("Cache-Control")).toBe("no-store");
    expect(body).toEqual({ ok: true, requestId: validPayload.requestId });
  });

  it("rate limits burst requests", async () => {
    for (let attempt = 0; attempt < 10; attempt += 1) {
      const request = new NextRequest("http://localhost:3000/api/webhooks/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-webhook-secret": "test-secret",
          "x-forwarded-for": "2.2.2.2",
        },
        body: JSON.stringify({ ...validPayload, requestId: `0be8f60d-537d-4f1a-a3de-7de370f9ea3${attempt}` }),
      });
      const response = await POST(request);
      expect(response.status).toBe(202);
    }

    const limitedRequest = new NextRequest("http://localhost:3000/api/webhooks/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-webhook-secret": "test-secret",
        "x-forwarded-for": "2.2.2.2",
      },
      body: JSON.stringify({ ...validPayload, requestId: "3be8f60d-537d-4f1a-a3de-7de370f9ea3b" }),
    });

    const limitedResponse = await POST(limitedRequest);
    const body = await limitedResponse.json();

    expect(limitedResponse.status).toBe(429);
    expect(limitedResponse.headers.get("Retry-After")).toBe("60");
    expect(body).toEqual({ error: "rate_limited" });
  });
});
