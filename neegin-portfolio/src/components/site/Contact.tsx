import { useState, type ChangeEvent, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { AlertCircle, CheckCircle2, Linkedin, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { contact, whatsappLink } from "@/lib/site-content";
import { validateContact, type ContactErrorKey } from "@/lib/contact-schema";
import { submitContact } from "@/lib/contact.functions";
import { useReveal, useSite } from "./SiteProvider";

type Fields = { name: string; email: string; phone: string; subject: string; message: string; website: string };
const empty: Fields = { name: "", email: "", phone: "", subject: "", message: "", website: "" };

export function Contact() {
  const { t, lang } = useSite();
  const send = useServerFn(submitContact);
  const ref = useReveal<HTMLDivElement>();
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, ContactErrorKey>>>({});
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (touched) setErrors(validateContact({ ...next, locale: lang }).errors);
    if (status !== "idle" && status !== "sending") setStatus("idle");
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    const result = validateContact({ ...values, locale: lang });
    setErrors(result.errors);
    if (!result.ok) {
      const first = Object.keys(result.errors)[0];
      document.getElementById(`cf-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      await send({ data: { ...values, locale: lang } });
      setStatus("ok");
      setValues(empty);
      setTouched(false);
    } catch {
      setStatus("error");
    }
  };

  const waText = values.message
    ? `${t.waGreeting}\n\n${values.name ? `${values.name}: ` : ""}${values.message}`
    : t.waGreeting;

  const field = (name: keyof Fields, label: string, ph: string, opts: { type?: string; textarea?: boolean; optional?: boolean; max?: number } = {}) => {
    const err = errors[name];
    const props = {
      id: `cf-${name}`,
      name,
      value: values[name],
      onChange,
      placeholder: ph,
      "aria-invalid": err ? true : undefined,
      "aria-describedby": err ? `cf-${name}-err` : undefined,
      maxLength: opts.max,
    };
    return (
      <div className={`field${err ? " has-error" : ""}`}>
        <label htmlFor={`cf-${name}`}>
          {label} {opts.optional && <span className="opt">{t.form.optional}</span>}
        </label>
        {opts.textarea ? <textarea {...props} rows={6} /> : <input {...props} type={opts.type ?? "text"} />}
        {err && (
          <span id={`cf-${name}-err`} className="field__error" role="alert">
            {t.form.errors[err]}
          </span>
        )}
        {opts.textarea && (
          <span className="field__hint">
            {values[name].length}/{opts.max}
          </span>
        )}
      </div>
    );
  };

  return (
    <section id="contact" className="section section--muted" aria-labelledby="contact-title">
      <div ref={ref} className="container-site reveal">
        <div className="section-head">
          <span className="eyebrow">{t.contactEyebrow}</span>
          <h2 id="contact-title" className="section-title">
            {t.contactTitle}
          </h2>
          <p className="section-lead">{t.contactLead}</p>
        </div>

        <div className="contact__grid">
          <address className="contact-cards not-italic">
            <a className="contact-card contact-card--wa" href={whatsappLink(t.waGreeting)} target="_blank" rel="noreferrer">
              <span className="contact-card__icon">
                <MessageCircle />
              </span>
              <span className="min-w-0">
                <small>{t.whatsapp} · {t.chatNow}</small>
                <strong className="ltr">{contact.phoneDisplay}</strong>
              </span>
            </a>
            <a className="contact-card" href={`tel:${contact.phoneTel}`}>
              <span className="contact-card__icon">
                <Phone />
              </span>
              <span className="min-w-0">
                <small>{t.callMe}</small>
                <strong className="ltr">{contact.phoneDisplay}</strong>
              </span>
            </a>
            <a className="contact-card" href={`mailto:${contact.email}`}>
              <span className="contact-card__icon">
                <Mail />
              </span>
              <span className="min-w-0">
                <small>{t.emailMe}</small>
                <strong>{contact.email}</strong>
              </span>
            </a>
            <a className="contact-card" href={contact.linkedin} target="_blank" rel="noreferrer">
              <span className="contact-card__icon">
                <Linkedin />
              </span>
              <span className="min-w-0">
                <small>LinkedIn</small>
                <strong>Negina Majid</strong>
              </span>
            </a>
          </address>

          <form className="form" onSubmit={onSubmit} noValidate aria-label={t.contactTitle}>
            {status === "ok" && (
              <div className="form-alert form-alert--ok" role="status">
                <CheckCircle2 /> {t.form.success}
              </div>
            )}
            {status === "error" && (
              <div className="form-alert form-alert--err" role="alert">
                <AlertCircle /> {t.form.error}
              </div>
            )}
            <div className="form__row">
              {field("name", t.form.name, t.form.namePh, { max: 100 })}
              {field("email", t.form.email, t.form.emailPh, { type: "email", max: 255 })}
            </div>
            <div className="form__row">
              {field("phone", t.form.phone, t.form.phonePh, { type: "tel", optional: true, max: 30 })}
              {field("subject", t.form.subject, t.form.subjectPh, { optional: true, max: 150 })}
            </div>
            {field("message", t.form.message, t.form.messagePh, { textarea: true, max: 2000 })}
            <div className="hp" aria-hidden="true">
              <label htmlFor="cf-website">Website</label>
              <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={onChange} />
            </div>
            <div className="form__actions">
              <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
                {status === "sending" ? <span className="spinner" aria-hidden="true" /> : <Send className="flip-rtl" />}
                {status === "sending" ? t.form.sending : t.form.send}
              </button>
              <a href={whatsappLink(waText)} target="_blank" rel="noreferrer" className="btn btn--whatsapp">
                <MessageCircle /> {t.form.sendWa}
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
