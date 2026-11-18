import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { media, navItems } from "@/lib/site-content";
import { useSite } from "./SiteProvider";

export function Header() {
  const { t, pick, lang, setLang, theme, toggleTheme } = useSite();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Shadow on scroll + highlight the section currently on screen.
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      let current = "home";
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= 120) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape or when resizing to desktop.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const links = navItems.map((item) => (
    <li key={item.id}>
      <a
        href={`#${item.id}`}
        className={`nav-link${active === item.id ? " is-active" : ""}`}
        aria-current={active === item.id ? "true" : undefined}
        onClick={() => setOpen(false)}
      >
        {pick(item.label)}
      </a>
    </li>
  ));

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container-site site-header__bar">
        <a href="#home" className="brand" aria-label="Neegin — home">
          <img src={media.logo} alt="Neegin logo" width={40} height={40} />
          <span className="brand__text">
            <span className="brand__name">Neegin</span>
            <span className="brand__tag">{t.brandTag}</span>
          </span>
        </a>

        <nav aria-label="Main">
          <ul className="nav-links">{links}</ul>
        </nav>

        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              EN
            </button>
            <button type="button" aria-pressed={lang === "fa"} onClick={() => setLang("fa")}>
              دری
            </button>
          </div>
          <button
            type="button"
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.toLight : t.toDark}
            title={theme === "dark" ? t.toLight : t.toDark}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <a href={media.resume} target="_blank" rel="noreferrer" className="btn btn--primary resume-btn">
            <Download /> {t.resume}
          </a>
          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Mobile">
        <ul>{links}</ul>
      </nav>
    </header>
  );
}
