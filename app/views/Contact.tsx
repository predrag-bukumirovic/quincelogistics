import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import { countryOptions } from "../lib/countries";
import { pageMetadata, type Lang } from "../lib/i18n";
import { site } from "../lib/site";

const sr = {
  description:
    "Zatražite ponudu za drumski transport — pošaljite relaciju i količinu robe. QuinceLogistics odgovara najčešće istog radnog dana.",
  heroLabel: "Kontakt",
  heroTitle: "Pošaljite relaciju. Javljamo se sa cenom.",
  heroLead:
    "Za ponudu su nam dovoljna tri podatka: odakle, dokle i šta vozimo. Odgovaramo najčešće istog radnog dana.",
  dispatch: "Dispečerski centar · 24/7",
  whatsapp: "Pišite nam na WhatsApp",
  email: "Email",
  address: "Adresa",
  hours: "Kancelarija (CET)",
};

const en: typeof sr = {
  description:
    "Request a road freight quote — send us the route and volume. QuinceLogistics usually replies the same working day.",
  heroLabel: "Contact",
  heroTitle: "Send us the route. We'll reply with a price.",
  heroLead:
    "Three details are enough for a quote: from where, to where and what we're carrying. We usually reply the same working day.",
  dispatch: "Dispatch centre · 24/7",
  whatsapp: "Message us on WhatsApp",
  email: "Email",
  address: "Address",
  hours: "Office hours (CET)",
};

const de: typeof sr = {
  description:
    "Fordern Sie ein Angebot für Ihren Straßentransport an – senden Sie uns Strecke und Menge. QuinceLogistics antwortet meist noch am selben Werktag.",
  heroLabel: "Kontakt",
  heroTitle: "Senden Sie uns die Strecke. Wir melden uns mit dem Preis.",
  heroLead:
    "Für ein Angebot genügen uns drei Angaben: woher, wohin und was wir transportieren. Wir antworten meist noch am selben Werktag.",
  dispatch: "Disposition · 24/7",
  whatsapp: "Schreiben Sie uns auf WhatsApp",
  email: "E-Mail",
  address: "Adresse",
  hours: "Bürozeiten (MEZ)",
};

const copy = { sr, en, de };

export const meta = (lang: Lang): Metadata =>
  pageMetadata("contact", lang, copy[lang].description);

export default function Contact({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const { address } = site;

  return (
    <>
      <PageHero
        lang={lang}
        label={t.heroLabel}
        title={t.heroTitle}
        lead={t.heroLead}
      />

      <section className="section section-flush">
        <div className="wrap contact-grid">
          <aside className="contact-info" data-reveal>
            <div className="contact-block">
              <p className="label">{t.dispatch}</p>
              <a href={site.phone.href} className="contact-phone">
                {site.phone.display}
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                className="contact-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={18} aria-hidden="true" />
                {t.whatsapp}
              </a>
            </div>
            <div className="contact-block">
              <p className="label">{t.email}</p>
              <a href={`mailto:${site.email}`} className="contact-link">
                {site.email}
              </a>
            </div>
            <div className="contact-block">
              <p className="label">{t.address}</p>
              <address>
                {address.street}
                <br />
                {address.postalCode} {address.city[lang]},{" "}
                {address.country[lang]}
              </address>
            </div>
            <div className="contact-block">
              <p className="label">{t.hours}</p>
              <dl className="hours">
                {site.hours.map((h) => (
                  <div key={h.time}>
                    <dt>{h.days[lang]}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <ContactForm lang={lang} countries={countryOptions(lang)} />
        </div>
      </section>
    </>
  );
}
