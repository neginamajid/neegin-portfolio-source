import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact-schema";

const OWNER_EMAIL = "neginamajid@gmail.com";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Silently accept bots that filled the honeypot, but store nothing.
    if (data.website) return { ok: true as const };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error } = await supabaseAdmin
      .from("contact_submissions")
      .insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject || null,
        message: data.message,
        locale: data.locale,
      })
      .select("id")
      .single();

    if (error || !row) {
      console.error("contact insert failed", error);
      throw new Error("Could not save your message");
    }

    // Forward a copy to the owner's Gmail through the free FormSubmit relay.
    let forwarded = false;
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://neegin-portfolio.lovable.app",
          Referer: "https://neegin-portfolio.lovable.app/",
        },
        body: JSON.stringify({
          _subject: `New portfolio message from ${data.name}${data.subject ? ` — ${data.subject}` : ""}`,
          _template: "table",
          _captcha: "false",
          _replyto: data.email,
          Name: data.name,
          Email: data.email,
          Phone: data.phone || "-",
          Subject: data.subject || "-",
          Message: data.message,
          Language: data.locale === "fa" ? "Dari" : "English",
        }),
        signal: AbortSignal.timeout(8000),
      });
      const body = await res.text();
      forwarded = res.ok && !/"success"\s*:\s*"?false/.test(body);
      if (!forwarded) console.error(`email forward failed [${res.status}]: ${body}`);
    } catch (e) {
      console.error("email forward error", e);
    }

    if (forwarded) {
      await supabaseAdmin.from("contact_submissions").update({ email_forwarded: true }).eq("id", row.id);
    }

    return { ok: true as const };
  });
