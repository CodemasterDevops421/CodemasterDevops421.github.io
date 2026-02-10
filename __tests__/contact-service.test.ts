import { processContactInquiry } from "@/lib/contact-service";

describe("contact service", () => {
  const basePayload = {
    name: "Chaitanya",
    email: "devops@example.com",
    company: "Northwind",
    budget: "25k-50k" as const,
    timeline: "30-days" as const,
    message: "Need help hardening our multi-cloud kubernetes platform this quarter.",
    website: "",
    requestId: "0be8f60d-537d-4f1a-a3de-7de370f9ea3b",
    source: "portfolio-contact-form" as const,
    submittedAt: new Date().toISOString(),
  };

  it("accepts valid inquiry", () => {
    const result = processContactInquiry(basePayload);

    expect(result).toEqual({ ok: true, requestId: basePayload.requestId });
  });

  it("blocks honeypot bots", () => {
    const result = processContactInquiry({ ...basePayload, website: "spam" });

    expect(result).toEqual({ ok: false, reason: "bot_detected" });
  });
});
