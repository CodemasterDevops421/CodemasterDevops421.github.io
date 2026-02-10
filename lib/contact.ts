import { z } from "zod";

export const CONTACT_BUDGET_OPTIONS = ["under-25k", "25k-50k", "50k-plus", "discuss"] as const;
export const CONTACT_TIMELINE_OPTIONS = ["asap", "30-days", "90-days", "exploration"] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(120).optional(),
  budget: z.enum(CONTACT_BUDGET_OPTIONS),
  timeline: z.enum(CONTACT_TIMELINE_OPTIONS),
  message: z.string().trim().min(20).max(3000),
  website: z.string().trim().optional(),
});

export const webhookContactSchema = contactFormSchema.extend({
  submittedAt: z.string().datetime(),
  source: z.literal("portfolio-contact-form"),
  requestId: z.string().uuid(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
export type WebhookContactInput = z.infer<typeof webhookContactSchema>;
