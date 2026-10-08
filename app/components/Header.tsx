"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { FiArrowRight, FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import { navLinks, site } from "../lib/site";

const MOBILE_LINKS = [...navLinks, { href: "/kontakt", label: "Kontakt" }];

const bottomOf = (el: HTMLElement | null) =>
  el?.getBoundingClientRect().bottom ?? 0;

export default function Header() {
  const pathname = usePathname();
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
          <Link href="/karijera" className="topbar-hiring">
            Zapošljavamo vozače
            <span className="topbar-hiring-more"> C+E kategorije</span>
            <FiArrowRight size={14} aria-hidden="true" />
          </Link>
          <div className="topbar-links">
            <a href={site.phone.href}>{site.phone.display}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>

      <header className="site-header" ref={headerRef}>
        <div className="wrap header-inner">
          <Link href="/" className="logo" onClick={close}>
            <Logo eager />
          </Link>
          <nav className="nav-links" aria-label="Glavna navigacija">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/kontakt" className="btn btn-primary header-cta">
            Zatražite ponudu
            <FiArrowUpRight size={18} aria-hidden="true" />
          </Link>
          <button
            ref={burgerRef}
            type="button"
            className="burger"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
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
        <nav className="wrap mobile-nav-links" aria-label="Mobilna navigacija">
          {MOBILE_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={pathname === link.href ? "page" : undefined}
              style={{ "--i": i } as CSSProperties}
            >
              <span>
                {link.label}
                {link.href === "/karijera" && (
                  <small className="mobile-nav-tag">Zapošljavamo</small>
                )}
              </span>
              <FiArrowRight size={22} aria-hidden="true" />
            </Link>
          ))}
        </nav>
        <div className="wrap mobile-nav-foot">
          <dl className="mobile-nav-contact">
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href={site.phone.href}>{site.phone.display}</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
          </dl>
          <Link
            href="/kontakt"
            className="btn btn-primary mobile-nav-cta"
            onClick={close}
          >
            Zatražite ponudu
            <FiArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </>
  );
}
