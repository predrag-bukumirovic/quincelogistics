import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import PageHero from "../components/PageHero";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Zatražite ponudu za drumski transport — pošaljite relaciju i količinu robe. QuinceLogistics odgovara najčešće istog radnog dana.",
};

export default function KontaktPage() {
  const { address } = site;

  return (
    <>
      <PageHero
        label="Kontakt"
        title="Pošaljite relaciju. Javljamo se sa cenom."
        lead="Za ponudu su nam dovoljna tri podatka: odakle, dokle i šta vozimo. Odgovaramo najčešće istog radnog dana."
      />

      <section className="section section-flush">
        <div className="wrap contact-grid">
          <aside className="contact-info" data-reveal>
            <div className="contact-block">
              <p className="label">Dispečer</p>
              <a href={site.phone.href} className="contact-phone">
                {site.phone.display}
              </a>
            </div>
            <div className="contact-block">
              <p className="label">Email</p>
              <a href={`mailto:${site.email}`} className="contact-link">
                {site.email}
              </a>
            </div>
            <div className="contact-block">
              <p className="label">Adresa</p>
              <address>
                {address.street}
                <br />
                {address.postalCode} {address.city}, {address.country}
              </address>
            </div>
            <div className="contact-block">
              <p className="label">Radno vreme</p>
              <dl className="hours">
                {site.hours.map((h) => (
                  <div key={h.days}>
                    <dt>{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
