import Link from "next/link";
import CookieSettingsButton from "./CookieSettingsButton";
import Logo from "./Logo";
import { services } from "../lib/content";
import {
  contactLink,
  navLinks,
  pageNames,
  routes,
  type Lang,
} from "../lib/i18n";
import { site } from "../lib/site";

const copy = {
  sr: {
    about:
      "Domaći i međunarodni drumski transport robe — kompletni i zbirni utovari po Srbiji i celoj Evropi.",
    nav: "Navigacija",
    services: "Usluge",
    contact: "Kontakt",
    rights: "Sva prava zadržana.",
    pib: "PIB",
    mb: "MB",
    madeBy: "Izrada sajta:",
    cookieSettings: "Podešavanja kolačića",
  },
  en: {
    about:
      "Domestic and international road freight — full and part loads across Serbia and all of Europe.",
    nav: "Navigation",
    services: "Services",
    contact: "Contact",
    rights: "All rights reserved.",
    pib: "Tax ID",
    mb: "Reg. no.",
    madeBy: "Website by",
    cookieSettings: "Cookie settings",
  },
  de: {
    about:
      "Nationale und internationale Straßentransporte – Komplett- und Teilladungen in Serbien und ganz Europa.",
    nav: "Navigation",
    services: "Leistungen",
    contact: "Kontakt",
    rights: "Alle Rechte vorbehalten.",
    pib: "Steuer-Nr.",
    mb: "Reg.-Nr.",
    madeBy: "Website von",
    cookieSettings: "Cookie-Einstellungen",
  },
};

export default function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { address } = site;

  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link href={routes.home[lang]} className="logo">
            <Logo />
          </Link>
          <p>{t.about}</p>
          {(site.pib || site.mb) && (
            <dl className="footer-ids">
              {site.pib && (
                <div>
                  <dt>{t.pib}</dt>
                  <dd>{site.pib}</dd>
                </div>
              )}
              {site.mb && (
                <div>
                  <dt>{t.mb}</dt>
                  <dd>{site.mb}</dd>
                </div>
              )}
            </dl>
          )}
        </div>

        <div className="footer-col">
          <h2>{t.nav}</h2>
          <ul>
            {[...navLinks(lang), contactLink(lang)].map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2>{t.services}</h2>
          <ul>
            {services[lang].map((s) => (
              <li key={s.id}>
                <Link href={`${routes.services[lang]}#${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h2>{t.contact}</h2>
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
                {address.postalCode} {address.city[lang]},{" "}
                {address.country[lang]}
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
            © {new Date().getFullYear()} {site.name}. {t.rights}
          </span>
          <span className="footer-legal">
            <Link href={routes.privacy[lang]}>{pageNames.privacy[lang]}</Link>
            <Link href={routes.cookies[lang]}>{pageNames.cookies[lang]}</Link>
            <CookieSettingsButton
              label={t.cookieSettings}
              className="footer-link-button"
            />
          </span>
          <span>
            {t.madeBy}{" "}
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
