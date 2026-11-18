import { Code2, LayoutTemplate, Palette, Users } from "lucide-react";
import { services, skillGroups } from "@/lib/site-content";
import { useReveal, useSite } from "./SiteProvider";

const icons = { palette: Palette, code: Code2, layout: LayoutTemplate, users: Users };

export function Services() {
  const { t, pick } = useSite();
  const ref = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container-site">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <span className="eyebrow">{t.servicesEyebrow}</span>
            <h2 id="services-title" className="section-title">
              {t.servicesTitle}
            </h2>
            <p className="section-lead">{t.servicesLead}</p>
          </div>
          <div className="services">
            {services.map((s) => {
              const Icon = icons[s.icon as keyof typeof icons];
              return (
                <article key={s.icon} className="service">
                  <span className="service__icon">
                    <Icon />
                  </span>
                  <h3>{pick(s.title)}</h3>
                  <p>{pick(s.text)}</p>
                </article>
              );
            })}
          </div>
        </div>

        <div ref={ref2} className="reveal">
          <h3 className="mt-16 text-2xl font-extrabold">{t.skillsTitle}</h3>
          <div className="skills" style={{ marginTop: "1.5rem" }}>
            {skillGroups.map((g) => (
              <div key={g.title.en} className="skill-group">
                <h4>{pick(g.title)}</h4>
                <ul className="chips">
                  {g.items.map((i) => (
                    <li key={i} className="chip">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
