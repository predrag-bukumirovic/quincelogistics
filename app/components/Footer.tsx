import Link from "next/link";
import Logo from "./Logo";
import { navLinks, site } from "../lib/site";
import { services } from "../lib/content";

export default function Footer() {
  const { address } = site;

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <Logo />
          </Link>
          <p>
            Domaći i međunarodni drumski transport robe — kompletni i zbirni
            utovari za Srbiju, region i EU.
          </p>
        </div>

        <div className="footer-col">
          <h2>Navigacija</h2>
          <ul>
            {[...navLinks, { href: "/kontakt", label: "Kontakt" }].map(
              (link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="footer-col">
          <h2>Usluge</h2>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/usluge#${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2>Kontakt</h2>
          <ul>
            <li>
              <a href={site.phone.href}>{site.phone.display}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <address>
                {address.street}
                <br />
                {address.postalCode} {address.city}, {address.country}
              </address>
            </li>
            {site.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap">
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.name}. Sva prava zadržana.
          </span>
          {(site.pib || site.mb) && (
            <span>
              {site.pib && `PIB ${site.pib}`}
              {site.pib && site.mb && " · "}
              {site.mb && `MB ${site.mb}`}
            </span>
          )}
          <span>
            Izrada sajta:{" "}
            <a
              href="https://scaons.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCAONS
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
