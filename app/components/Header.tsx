"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Logo from "./Logo";
import { navLinks, site } from "../lib/site";

const MOBILE_LINKS = [...navLinks, { href: "/kontakt", label: "Kontakt" }];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
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

      <header className="site-header">
        <div className="wrap header-inner">
          <Link href="/" className="logo">
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
            type="button"
            className="burger"
            aria-label="Otvori meni"
            aria-expanded={open}
            aria-controls="mobilni-meni"
            onClick={() => setOpen(true)}
          >
            <FiMenu size={22} />
          </button>
        </div>
      </header>

      <div
        id="mobilni-meni"
        className={`mobile-nav${open ? " open" : ""}`}
        inert={!open}
      >
        <div className="wrap mobile-nav-top">
          <Link href="/" className="logo" onClick={close}>
            <Logo onDark />
          </Link>
          <button
            type="button"
            className="burger"
            aria-label="Zatvori meni"
            onClick={close}
          >
            <FiX size={22} />
          </button>
        </div>
        <nav className="wrap mobile-nav-links" aria-label="Mobilna navigacija">
          {MOBILE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="wrap mobile-nav-foot">
          <a href={site.phone.href}>{site.phone.display}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </>
  );
}
