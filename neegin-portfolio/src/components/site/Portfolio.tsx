import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Code2, ExternalLink, Image as ImageIcon, Maximize2, Play, Video, X } from "lucide-react";
import { works, type Work, type WorkCategory } from "@/lib/site-content";
import { useReveal, useSite } from "./SiteProvider";

type Filter = "all" | WorkCategory;
const filterKeys: Filter[] = ["all", "graphic", "web", "video"];

function WorkMedia({ work, alt, inModal }: { work: Work; alt: string; inModal?: boolean }) {
  if (work.kind === "video") {
    return inModal ? (
      <video src={work.src} poster={work.poster} controls autoPlay playsInline aria-label={alt} />
    ) : (
      <video src={work.src} poster={work.poster} muted loop playsInline autoPlay preload="metadata" aria-label={alt} />
    );
  }
  if (work.kind === "code") {
    return (
      <div className="work__code" role="img" aria-label={alt}>
        <div className="work__code-inner">
          <Code2 />
          <code>&lt;FacultyManagement /&gt;</code>
        </div>
      </div>
    );
  }
  return <img src={work.src} alt={alt} loading={inModal ? "eager" : "lazy"} />;
}

export function Portfolio() {
  const { t, pick } = useSite();
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useReveal<HTMLDivElement>();

  const visible = useMemo(
    () => (filter === "all" ? works : works.filter((w) => w.category.includes(filter))),
    [filter],
  );
  const counts = useMemo(
    () =>
      Object.fromEntries(
        filterKeys.map((k) => [k, k === "all" ? works.length : works.filter((w) => w.category.includes(k)).length]),
      ) as Record<Filter, number>,
    [],
  );

  return (
    <section id="portfolio" className="section section--muted" aria-labelledby="portfolio-title">
      <div ref={ref} className="container-site reveal">
        <div className="section-head">
          <span className="eyebrow">{t.portfolioEyebrow}</span>
          <h2 id="portfolio-title" className="section-title">
            {t.portfolioTitle}
          </h2>
          <p className="section-lead">{t.portfolioLead}</p>
        </div>

        <div className="filters" role="group" aria-label="Filter projects">
          {filterKeys.map((k) => (
            <button key={k} type="button" className="filter-btn" aria-pressed={filter === k} onClick={() => setFilter(k)}>
              {t.filters[k]} <span className="count">{counts[k]}</span>
            </button>
          ))}
        </div>

        <div className="works">
          {visible.map((w, i) => {
            const alt = pick(w.alt);
            const TypeIcon = w.kind === "video" ? Video : w.kind === "code" ? Code2 : ImageIcon;
            return (
              <button
                key={`${filter}-${w.id}`}
                type="button"
                className={`work${w.layout ? ` work--${w.layout}` : ""}`}
                style={{ animationDelay: `${i * 60}ms` }}
                onClick={() => setOpenIndex(i)}
                aria-label={`${t.view}: ${pick(w.title)}`}
              >
                <span className="work__type">
                  <TypeIcon /> {w.kind === "video" ? t.filters.video : w.category.includes("web") ? t.filters.web : t.filters.graphic}
                </span>
                <div className="work__media">
                  <WorkMedia work={w} alt={alt} />
                  <div className="work__overlay">
                    <span>
                      {w.kind === "video" ? <Play className="size-4" /> : <Maximize2 className="size-4" />}
                      {w.kind === "video" ? t.play : t.view}
                    </span>
                  </div>
                </div>
                <div className="work__body">
                  <h3>{pick(w.title)}</h3>
                  <p>{pick(w.client)}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <WorkModal items={visible} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
      )}
    </section>
  );
}

function WorkModal({
  items,
  index,
  onChange,
  onClose,
}: {
  items: Work[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const { t, pick, lang } = useSite();
  const work = items[index] ?? items[0]!;
  const closeRef = useRef<HTMLButtonElement>(null);
  const go = useCallback((d: number) => onChange((index + d + items.length) % items.length), [index, items.length, onChange]);

  // Keyboard: Esc closes, arrows navigate (mirrored in Dari/RTL). Locks page scroll while open.
  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const rtl = lang === "fa";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") go(rtl ? 1 : -1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus();
    };
  }, [go, onClose, lang]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="work-modal-title" onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="icon-btn modal__close" onClick={onClose} aria-label={t.close}>
          <X />
        </button>
        <div className="modal__media" key={work.id}>
          <WorkMedia work={work} alt={pick(work.alt)} inModal />
        </div>
        <div className="modal__info">
          <span className="eyebrow">{pick(work.client)}</span>
          <h3 id="work-modal-title">{pick(work.title)}</h3>
          <p>{pick(work.text)}</p>
          <ul className="modal__meta">
            {work.tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
          {work.link && (
            <a href={work.link} target="_blank" rel="noreferrer" className="btn btn--primary" style={{ width: "fit-content" }}>
              {t.visit} <ExternalLink />
            </a>
          )}
          <div className="modal__nav">
            <button type="button" className="btn btn--outline" onClick={() => go(-1)}>
              <ChevronLeft className="flip-rtl" /> {t.prev}
            </button>
            <span>
              {index + 1} {t.of} {items.length}
            </span>
            <button type="button" className="btn btn--outline" onClick={() => go(1)}>
              {t.next} <ChevronRight className="flip-rtl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
