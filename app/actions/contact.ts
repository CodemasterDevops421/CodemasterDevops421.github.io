"use server";

import { randomUUID } from "crypto";

import { contactFormSchema, webhookContactSchema } from "@/lib/contact";
import { processContactInquiry } from "@/lib/contact-service";
import { logger } from "@/lib/logger";

function summarizeValidationIssues(issues: { path: (string | number)[]; code: string }[]) {
  return issues.map((issue) => ({ field: issue.path.join(".") || "root", code: issue.code }));
}

export async function submitContactForm(formData: FormData): Promise<void> {
  const parsedContactForm = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    budget: formData.get("budget"),
    timeline: formData.get("timeline"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!parsedContactForm.success) {
    logger.warn({ issues: summarizeValidationIssues(parsedContactForm.error.issues) }, "Rejected contact form submission");
    return;
  }

  const parsedWebhookPayload = webhookContactSchema.safeParse({
    ...parsedContactForm.data,
    requestId: randomUUID(),
    source: "portfolio-contact-form",
    submittedAt: new Date().toISOString(),
  });

  if (!parsedWebhookPayload.success) {
    logger.error(
      { issues: summarizeValidationIssues(parsedWebhookPayload.error.issues) },
      "Generated contact payload failed schema validation",
    );
    return;
  }

  processContactInquiry(parsedWebhookPayload.data);
}
