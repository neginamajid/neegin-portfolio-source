import { Briefcase, GraduationCap, Mail, MapPin } from "lucide-react";
import { contact, media, spokenLanguages } from "@/lib/site-content";
import { useReveal, useSite } from "./SiteProvider";

export function About() {
  const { t, pick } = useSite();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section section--muted" aria-labelledby="about-title">
      <div ref={ref} className="container-site about__grid reveal">
        <figure className="about__img">
          <img src={media.workspace} alt={t.workspaceAlt} width={1000} height={1000} loading="lazy" />
        </figure>
        <div className="about__text">
          <div className="section-head" style={{ marginBottom: "1.5rem" }}>
            <span className="eyebrow">{t.aboutEyebrow}</span>
            <h2 id="about-title" className="section-title">
              {t.aboutTitle}
            </h2>
          </div>
          <p>{t.aboutP1}</p>
          <p className="mt-4">{t.aboutP2}</p>

          <div className="about__facts">
            <div className="fact">
              <MapPin />
              <div>
                <span>{t.facts.location}</span>
                <strong>{pick(contact.location)}</strong>
              </div>
            </div>
            <div className="fact">
              <Mail />
              <div>
                <span>{t.facts.email}</span>
                <strong>{contact.email}</strong>
              </div>
            </div>
            <div className="fact">
              <GraduationCap />
              <div>
                <span>{t.facts.degree}</span>
                <strong>{t.facts.degreeVal}</strong>
              </div>
            </div>
            <div className="fact">
              <Briefcase />
              <div>
                <span>{t.facts.freelance}</span>
                <strong>{t.facts.freelanceVal}</strong>
              </div>
            </div>
          </div>

          <h3 className="mt-8 text-lg font-bold">{t.languagesTitle}</h3>
          <div className="langs">
            {spokenLanguages.map((l) => (
              <div key={l.name.en} className="lang-row">
                <span>{pick(l.name)}</span>
                <div className="bar" role="presentation">
                  <i style={{ ["--w" as string]: `${l.pct}%` }} />
                </div>
                <em>{pick(l.level)}</em>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
