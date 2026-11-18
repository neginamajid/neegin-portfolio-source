import { useEffect, useState } from "react";
import { ArrowUp, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { contact, media, navItems, whatsappLink } from "@/lib/site-content";
import { useSite } from "./SiteProvider";

export function Footer() {
  const { t, pick } = useSite();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-site">
        <div className="footer__grid">
          <div>
            <a href="#home" className="brand">
              <img src={media.logo} alt="Neegin logo" width={40} height={40} />
              <span className="brand__text">
                <span className="brand__name">Neegin</span>
                <span className="brand__tag">{t.brandTag}</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm">{t.footerText}</p>
            <div className="socials">
              <a href={whatsappLink(t.waGreeting)} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle />
              </a>
              <a href={`tel:${contact.phoneTel}`} aria-label={t.callMe}>
                <Phone />
              </a>
              <a href={`mailto:${contact.email}`} aria-label={t.emailMe}>
                <Mail />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
          <nav aria-label={t.quickLinks}>
            <h4>{t.quickLinks}</h4>
            <ul>
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`}>{pick(n.label)}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h4>{t.getInTouch}</h4>
            <ul>
              <li>
                <a href={`tel:${contact.phoneTel}`} className="ltr">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={media.resume} target="_blank" rel="noreferrer">
                  {t.downloadResume}
                </a>
              </li>
              <li>
                <a href="#contact">{pick(contact.location)}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {year} Negina Majid. {t.rights}
          </span>
          <span>{t.madeWith}</span>
        </div>
      </div>
    </footer>
  );
}

export function FloatingButtons() {
  const { t } = useSite();
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fab-stack">
      <button
        type="button"
        className={`fab fab--top${showTop ? "" : " is-hidden"}`}
        aria-label={t.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp />
      </button>
      <a className="fab fab--wa" href={whatsappLink(t.waGreeting)} target="_blank" rel="noreferrer" aria-label={`${t.whatsapp} — ${t.chatNow}`}>
        <MessageCircle />
      </a>
    </div>
  );
}
