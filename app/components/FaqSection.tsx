import Faq from "./Faq";
import { faq } from "../lib/content";
import type { Lang } from "../lib/i18n";
import { site } from "../lib/site";

const copy = {
  sr: {
    label: "Pitanja",
    title: "Česta pitanja",
    lead: "Niste našli odgovor? Pozovite dispečera ili nam pišite na",
  },
  en: {
    label: "Questions",
    title: "Frequently asked questions",
    lead: "Didn't find your answer? Call our dispatch or email us at",
  },
  de: {
    label: "Fragen",
    title: "Häufige Fragen",
    lead: "Keine Antwort gefunden? Rufen Sie unsere Disposition an oder schreiben Sie uns an",
  },
};

export default function FaqSection({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <section className="section">
      <div className="wrap faq-grid">
        <div className="faq-aside" data-reveal>
          <p className="label">{t.label}</p>
          <h2 className="title">{t.title}</h2>
          <p className="lead">
            {t.lead} <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <a href={site.phone.href} className="faq-phone">
            {site.phone.display}
          </a>
        </div>
        <Faq items={faq[lang]} />
      </div>
    </section>
  );
}
