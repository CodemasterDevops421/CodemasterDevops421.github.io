"use server";

import { randomUUID } from "crypto";

import { contactFormSchema, getBaseUrl } from "@/lib/contact";
import { logger } from "@/lib/logger";

export async function submitContactForm(formData: FormData): Promise<void> {
  const candidate = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    budget: formData.get("budget"),
    timeline: formData.get("timeline"),
    message: formData.get("message"),
    website: formData.get("website"),
  };

  const parsed = contactFormSchema.safeParse(candidate);

  if (!parsed.success) {
    logger.warn({ issues: parsed.error.issues }, "Rejected contact form submission");
    return;
  }

  if (parsed.data.website) {
    logger.warn({ email: parsed.data.email }, "Blocked contact form bot submission");
    return;
  }

  try {
    const requestId = randomUUID();
    const webhookResponse = await fetch(`${getBaseUrl()}/api/webhooks/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-secret": process.env.CONTACT_WEBHOOK_SECRET ?? "",
      },
      body: JSON.stringify({
        ...parsed.data,
        requestId,
        source: "portfolio-contact-form",
        submittedAt: new Date().toISOString(),
      }),
      cache: "no-store",
    });

    if (!webhookResponse.ok) {
      const text = await webhookResponse.text();
      logger.error({ status: webhookResponse.status, body: text }, "Contact webhook failed");
      return;
    }

    logger.info({ requestId }, "Contact inquiry submitted");
  } catch (error) {
    logger.error({ error }, "Contact form submit failed");
  }
}
