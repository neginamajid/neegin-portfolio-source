import { useEffect, useRef, useState } from "react";
import { ArrowDown, Code2, Mail, MapPin, MessageCircle, Palette, Phone } from "lucide-react";
import { contact, media, stats, whatsappLink } from "@/lib/site-content";
import { useSite } from "./SiteProvider";

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const state = useRef({ word: 0, char: 0, deleting: false });

  useEffect(() => {
    state.current = { word: 0, char: 0, deleting: false };
    setText("");
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const s = state.current;
      const word = words[s.word % words.length] ?? "";
      s.char += s.deleting ? -1 : 1;
      setText(word.slice(0, s.char));
      let delay = s.deleting ? 40 : 85;
      if (!s.deleting && s.char === word.length) {
        s.deleting = true;
        delay = 1600;
      } else if (s.deleting && s.char === 0) {
        s.deleting = false;
        s.word += 1;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / 1200);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Hero() {
  const { t, pick, lang } = useSite();
  const typed = useTyping(t.roles);

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container-site">
        <div className="hero__grid">
          <div>
            <span className="hero__badge">
              <span className="pulse-dot" aria-hidden="true" />
              {t.available}
            </span>
            <h1 id="hero-title" className="hero__title">
              {t.hello} <span className="hl">{t.name}</span>
            </h1>
            <p className="hero__role" aria-live="polite">
              {lang === "en" && <span>{t.iAm}</span>}
              <span className="typed">{typed}</span>
              <span className="caret" aria-hidden="true" />
              {lang === "fa" && <span>{t.iAm}</span>}
            </p>
            <p className="hero__text">{t.heroText}</p>
            <div className="hero__cta">
              <a href="#portfolio" className="btn btn--primary">
                {t.seeWork} <ArrowDown />
              </a>
              <a href={whatsappLink(t.waGreeting)} target="_blank" rel="noreferrer" className="btn btn--whatsapp">
                <MessageCircle /> {t.whatsapp}
              </a>
              <a href="#contact" className="btn btn--outline">
                {t.hireMe}
              </a>
            </div>
            <div className="hero__contact">
              <a href={`tel:${contact.phoneTel}`}>
                <Phone /> <span className="ltr">{contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${contact.email}`}>
                <Mail /> {contact.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> {pick(contact.location)}
              </span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__ring" aria-hidden="true" />
            <div className="hero__photo">
              <img src={media.portrait} alt={t.portraitAlt} width={900} height={1350} fetchPriority="high" />
            </div>
            <div className="float-card float-card--a">
              <span className="float-card__icon">
                <Code2 />
              </span>
              <span>
                {t.floatA[0]}
                <small>{t.floatA[1]}</small>
              </span>
            </div>
            <div className="float-card float-card--b">
              <span className="float-card__icon">
                <Palette />
              </span>
              <span>
                {t.floatB[0]}
                <small>{t.floatB[1]}</small>
              </span>
            </div>
          </div>
        </div>

        <ul className="stats" aria-label="Highlights">
          {stats.map((s, i) => (
            <li key={i} className="stat">
              <div className="stat__num">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="stat__label">{t.stats[i]}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
