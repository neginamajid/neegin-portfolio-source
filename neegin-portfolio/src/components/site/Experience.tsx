import { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, GraduationCap } from "lucide-react";
import { education, experience } from "@/lib/site-content";
import { useReveal, useSite } from "./SiteProvider";

export function Experience() {
  const { t, pick } = useSite();
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllEdu, setShowAllEdu] = useState(false);
  const ref = useReveal<HTMLDivElement>();
  const jobs = showAllJobs ? experience : experience.slice(0, 4);
  const edu = showAllEdu ? education : education.slice(0, 6);

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div ref={ref} className="container-site reveal">
        <div className="section-head">
          <span className="eyebrow">{t.experienceEyebrow}</span>
          <h2 id="experience-title" className="section-title">
            {t.experienceTitle}
          </h2>
        </div>

        <div className="timeline-wrap">
          <div>
            <h3 className="timeline-title">
              <Briefcase /> {t.workTitle}
            </h3>
            <ol className="timeline">
              {jobs.map((job) => (
                <li key={job.title.en + job.year} className="tl-item">
                  <article className="tl-card">
                    <div className="tl-head">
                      <div>
                        <h4>{pick(job.title)}</h4>
                        <div className="tl-org">{pick(job.org)}</div>
                      </div>
                      <span className="tl-year ltr">{job.year}</span>
                    </div>
                    <p>{pick(job.text)}</p>
                  </article>
                </li>
              ))}
            </ol>
            <button
              type="button"
              className="btn btn--outline toggle-more"
              aria-expanded={showAllJobs}
              onClick={() => setShowAllJobs((s) => !s)}
            >
              {showAllJobs ? t.showLess : t.showMore} {showAllJobs ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>

          <div>
            <h3 className="timeline-title">
              <GraduationCap /> {t.eduTitle}
            </h3>
            <ul className="courses">
              {edu.map((c) => (
                <li key={c.title.en + c.year} className="course">
                  <b className="ltr">{c.year}</b>
                  <span>
                    <strong>{pick(c.title)}</strong>
                    <small>{pick(c.org)}</small>
                  </span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--outline toggle-more"
              aria-expanded={showAllEdu}
              onClick={() => setShowAllEdu((s) => !s)}
            >
              {showAllEdu ? t.showLess : t.showMore} {showAllEdu ? <ChevronUp /> : <ChevronDown />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
