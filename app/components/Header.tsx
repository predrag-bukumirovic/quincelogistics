"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { FiArrowRight, FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import {
  contactLink,
  langs,
  languageNames,
  navLinks,
  routes,
  saveLang,
  translatePath,
  type Lang,
} from "../lib/i18n";
import { site } from "../lib/site";

const copy = {
  sr: {
    hiring: "Zapošljavamo vozače",
    hiringMore: " B, B+E, C i C+E kategorije",
    cta: "Zatražite ponudu",
    mainNav: "Glavna navigacija",
    mobileNav: "Mobilna navigacija",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
    hiringTag: "Zapošljavamo",
    language: "Jezik",
  },
  en: {
    hiring: "We're hiring drivers",
    hiringMore: " with B, B+E, C or C+E licences",
    cta: "Request a quote",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    hiringTag: "Hiring",
    language: "Language",
  },
  de: {
    hiring: "Wir stellen Fahrer ein",
    hiringMore: " – Klassen B, BE, C und CE",
    cta: "Angebot anfordern",
    mainNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    hiringTag: "Wir stellen ein",
    language: "Sprache",
  },
};

const bottomOf = (el: HTMLElement | null) =>
  el?.getBoundingClientRect().bottom ?? 0;

// Prelazak na drugi jezik je obična navigacija (svaki jezik ima svoj root layout),
// a izbor se pamti za sledeću posetu.
function LangSwitch({
  lang,
  pathname,
  label,
}: {
  lang: Lang;
  pathname: string;
  label: string;
}) {
  return (
    <nav className="lang-switch" aria-label={label}>
      {langs.map((l) => (
        <a
          key={l}
          href={translatePath(pathname, l)}
          hrefLang={l}
          lang={l}
          aria-label={languageNames[l]}
          aria-current={l === lang ? "true" : undefined}
          onClick={() => saveLang(l)}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}

export default function Header({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const pathname = usePathname();
  const links = navLinks(lang);
  const mobileLinks = [...links, contactLink(lang)];
  const [open, setOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const [menuPath, setMenuPath] = useState(pathname);
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);

  // Meni se zatvara pri svakoj promeni strane, bez obzira na to koji je link kliknut.
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  const toggle = () => {
    if (!open) setMenuTop(bottomOf(headerRef.current));
    setOpen(!open);
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    // Sadržaj ispod otvorenog menija ne sme da primi fokus.
    document.querySelectorAll<HTMLElement>("#sadrzaj, .footer").forEach((el) => {
      el.inert = open;
    });
    if (!open) return;

    const desktop = window.matchMedia("(min-width: 1100px)");
    const place = () => {
      if (desktop.matches) setOpen(false);
      else setMenuTop(bottomOf(headerRef.current));
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      burgerRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, { passive: true });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place);
    };
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <Link href={routes.careers[lang]} className="topbar-hiring">
            {t.hiring}
            <span className="topbar-hiring-more">{t.hiringMore}</span>
            <FiArrowRight size={14} aria-hidden="true" />
          </Link>
          <div className="topbar-end">
            <div className="topbar-links">
              <a href={site.phone.href}>{site.phone.display}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <LangSwitch lang={lang} pathname={pathname} label={t.language} />
          </div>
        </div>
      </div>

      <header className="site-header" ref={headerRef}>
        <div className="wrap header-inner">
          <Link href={routes.home[lang]} className="logo" onClick={close}>
            <Logo />
          </Link>
          <nav className="nav-links" aria-label={t.mainNav}>
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href={routes.contact[lang]} className="btn btn-primary header-cta">
            {t.cta}
            <FiArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <button
            ref={burgerRef}
            type="button"
            className="burger"
            aria-label={open ? t.closeMenu : t.openMenu}
            aria-expanded={open}
            aria-controls="mobilni-meni"
            onClick={toggle}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </header>

      <div
        id="mobilni-meni"
        className={`mobile-nav${open ? " open" : ""}`}
        style={{ top: menuTop }}
        inert={!open}
      >
        <nav className="wrap mobile-nav-links" aria-label={t.mobileNav}>
          {mobileLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={pathname === link.href ? "page" : undefined}
              style={{ "--i": i } as CSSProperties}
            >
              <span>
                {link.label}
                {link.href === routes.careers[lang] && (
                  <small className="mobile-nav-tag">{t.hiringTag}</small>
                )}
              </span>
            </Link>
          ))}
        </nav>
        <div className="wrap mobile-nav-foot">
          <div className="mobile-nav-meta">
            <div className="mobile-nav-contact">
              <a href={site.phone.href}>{site.phone.display}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <LangSwitch lang={lang} pathname={pathname} label={t.language} />
          </div>
          <Link
            href={routes.contact[lang]}
            className="btn btn-primary mobile-nav-cta"
            onClick={close}
          >
            {t.cta}
            <FiArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
