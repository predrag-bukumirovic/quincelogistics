"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/usluge", label: "Usluge" },
  { href: "/resenja", label: "Rešenja" },
  { href: "/reference", label: "Reference" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="logo">
          <Logo />
        </Link>
        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/kontakt" className="btn btn-outline header-cta">
          Kontaktirajte nas
        </Link>
        <button
          className="burger"
          aria-label={open ? "Zatvori meni" : "Otvori meni"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
        </button>
      </div>

      <div
        className={`mobile-nav-backdrop${open ? " open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className={`mobile-nav${open ? " open" : ""}`}>
        <div className="mobile-nav-top">
          <span className="logo">
            <Logo />
          </span>
          <button
            className="burger"
            aria-label="Zatvori meni"
            onClick={() => setOpen(false)}
          >
            <HiOutlineX size={20} />
          </button>
        </div>
        <nav className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/kontakt" className="btn btn-primary">
          Kontaktirajte nas
        </Link>
      </div>
    </header>
  );
}
