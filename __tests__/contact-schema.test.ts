import { contactFormSchema, webhookContactSchema } from "@/lib/contact";

describe("contact schemas", () => {
  it("accepts valid contact payload", () => {
    expect(() =>
      contactFormSchema.parse({
        name: "Chaitanya",
        email: "devops@example.com",
        company: "Northwind",
        budget: "25k-50k",
        timeline: "30-days",
        message: "Need help hardening our multi-cloud kubernetes platform this quarter.",
        website: "",
      }),
    ).not.toThrow();
  });

  it("rejects short messages", () => {
    expect(() =>
      contactFormSchema.parse({
        name: "Chaitanya",
        email: "devops@example.com",
        budget: "discuss",
        timeline: "exploration",
        message: "too short",
      }),
    ).toThrow();
  });

  it("validates webhook payload", () => {
    expect(() =>
      webhookContactSchema.parse({
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
      }),
    ).not.toThrow();
  });
});
