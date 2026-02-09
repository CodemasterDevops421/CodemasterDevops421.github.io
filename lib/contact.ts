import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(120).optional(),
  budget: z.enum(["under-25k", "25k-50k", "50k-plus", "discuss"]),
  timeline: z.enum(["asap", "30-days", "90-days", "exploration"]),
  message: z.string().trim().min(20).max(3000),
  website: z.string().trim().max(0).optional(),
});

export const webhookContactSchema = contactFormSchema.extend({
  submittedAt: z.string().datetime(),
  source: z.literal("portfolio-contact-form"),
  requestId: z.string().uuid(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type WebhookContactInput = z.infer<typeof webhookContactSchema>;

export function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
