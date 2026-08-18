import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/usluge", label: "Usluge" },
  { href: "/resenja", label: "Rešenja" },
  { href: "/reference", label: "Reference" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <Link href="/" className="logo">
          <Logo />
        </Link>
        <div className="footer-links">
          <a href="#" aria-label="Facebook">
            <FaFacebookF size={15} />
          </a>
          <a href="#" aria-label="Twitter">
            <FaXTwitter size={15} />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube size={16} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn size={15} />
          </a>
        </div>
      </div>

      <div className="wrap footer-nav">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className="wrap footer-bottom">
        <span>
          Karapandžić Logistika i Transport © 2026. Sva prava zadržana. ·
          Izrada sajta:{" "}
          <a
            href="https://scaons.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit-link"
          >
            SCAONS
          </a>
        </span>
        <span>info@karapandzic-logistika.rs</span>
      </div>
    </footer>
  );
}
