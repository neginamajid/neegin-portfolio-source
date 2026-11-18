import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { ui, type Lang, type UiStrings } from "@/lib/site-content";

type Theme = "light" | "dark";
type SiteCtx = {
  lang: Lang;
  t: UiStrings;
  pick: (v: { en: string; fa: string }) => string;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const Ctx = createContext<SiteCtx | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");

  // Read saved preferences after hydration.
  useEffect(() => {
    const savedLang = localStorage.getItem("neegin-lang");
    if (savedLang === "fa" || savedLang === "en") setLangState(savedLang);
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("neegin-lang", l);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("neegin-theme", next);
      return next;
    });
  }, []);

  const value = useMemo<SiteCtx>(
    () => ({ lang, t: ui[lang], pick: (v) => v[lang], setLang, theme, toggleTheme }),
    [lang, setLang, theme, toggleTheme],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSite() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useSite must be used inside SiteProvider");
  return v;
}

/** Adds .is-visible when an element scrolls into view. */
export function useReveal<T extends HTMLElement>() {
  const [el, setEl] = useState<T | null>(null);
  useEffect(() => {
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [el]);
  return setEl;
}
