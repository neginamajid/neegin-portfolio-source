import { z } from "zod";

export type ContactErrorKey =
  | "nameRequired"
  | "nameShort"
  | "emailRequired"
  | "emailInvalid"
  | "phoneInvalid"
  | "messageRequired"
  | "messageShort"
  | "tooLong";

// Error messages are translation keys so the form can show them in English or Dari.
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "nameRequired")
    .min(2, "nameShort")
    .max(100, "tooLong"),
  email: z
    .string()
    .trim()
    .min(1, "emailRequired")
    .max(255, "tooLong")
    .email("emailInvalid"),
  phone: z
    .string()
    .trim()
    .max(30, "tooLong")
    .refine((v) => v === "" || /^\+?[0-9\s\-()]{7,20}$/.test(v), "phoneInvalid")
    .default(""),
  subject: z.string().trim().max(150, "tooLong").default(""),
  message: z
    .string()
    .trim()
    .min(1, "messageRequired")
    .min(10, "messageShort")
    .max(2000, "tooLong"),
  locale: z.enum(["en", "fa"]).default("en"),
  // Honeypot: real visitors never fill this hidden field.
  website: z.string().max(0).optional().default(""),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;

export type ContactErrors = Partial<Record<keyof ContactData, ContactErrorKey>>;

export function validateContact(input: ContactInput): { ok: boolean; data: ContactData | null; errors: ContactErrors } {
  const result = contactSchema.safeParse(input);
  if (result.success) return { ok: true, data: result.data, errors: {} };
  const errors: ContactErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof ContactData;
    if (!errors[key]) errors[key] = issue.message as ContactErrorKey;
  }
  return { ok: false as const, data: null, errors };
}
