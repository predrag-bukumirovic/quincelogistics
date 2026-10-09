import type { Metadata } from "next";
import highwayImg from "@/public/images/cta-truck.jpg";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import { services } from "../lib/content";
import { pageMetadata, type Lang } from "../lib/i18n";

const sr = {
  description:
    "Kompletni (FTL) i zbirni (LTL) utovari, međunarodni transport po celoj Evropi i domaći drumski transport — uz dispečera, GPS praćenje i kompletnu prevoznu dokumentaciju.",
  heroLabel: "Usluge",
  heroTitle: "Od jedne palete do punog kamiona.",
  heroLead:
    "Četiri vrste drumskog prevoza — po Srbiji i širom Evrope, sopstvenim kamionima. Svaku turu prati naš dispečerski centar 24/7, uz GPS praćenje i kompletnu dokumentaciju.",
  heroAlt: "Kamion na autoputu u zalazak sunca",
  includedLabel: "Uz svaku turu",
  includedTitle: "Šta dobijate, bez obzira na relaciju.",
  included: [
    "Dispečerski centar 24/7",
    "Sopstveni kamioni i vozači",
    "GPS praćenje vozila",
    "CMR osiguranje robe",
    "Logistička podrška i dokumentacija",
    "Potpisan CMR odmah posle istovara",
  ],
  ctaStart: "Niste sigurni",
  ctaEnd: "šta vam treba?",
  ctaText:
    "Opišite robu i relaciju — predložićemo najisplativiju vrstu prevoza i rok.",
};

const en: typeof sr = {
  description:
    "Full (FTL) and part loads (LTL), international transport across Europe and domestic road freight — with a dispatcher, GPS tracking and full transport documentation.",
  heroLabel: "Services",
  heroTitle: "From a single pallet to a full truck.",
  heroLead:
    "Four types of road freight — within Serbia and across Europe, with our own trucks. Our 24/7 dispatch centre follows every load, with GPS tracking and complete paperwork.",
  heroAlt: "Truck on a motorway at sunset",
  includedLabel: "With every load",
  includedTitle: "What you get, whatever the route.",
  included: [
    "24/7 dispatch centre",
    "Our own trucks and drivers",
    "GPS vehicle tracking",
    "CMR cargo insurance",
    "Logistics support and paperwork",
    "Signed CMR right after delivery",
  ],
  ctaStart: "Not sure",
  ctaEnd: "what you need?",
  ctaText:
    "Describe the goods and the route — we'll suggest the most cost-effective option and transit time.",
};

const de: typeof sr = {
  description:
    "Komplett- (FTL) und Teilladungen (LTL), internationale Transporte in ganz Europa und Transporte innerhalb Serbiens – mit Disponent, GPS-Ortung und vollständigen Transportpapieren.",
  heroLabel: "Leistungen",
  heroTitle: "Von einer Palette bis zum vollen Lkw.",
  heroLead:
    "Vier Arten von Straßentransporten – innerhalb Serbiens und quer durch Europa, mit eigenen Lkw. Unsere Disposition begleitet jede Tour rund um die Uhr, mit GPS-Ortung und vollständigen Papieren.",
  heroAlt: "Lkw auf der Autobahn bei Sonnenuntergang",
  includedLabel: "Bei jeder Tour",
  includedTitle: "Was Sie bekommen – unabhängig von der Strecke.",
  included: [
    "Disposition rund um die Uhr",
    "Eigene Lkw und Fahrer",
    "GPS-Ortung des Fahrzeugs",
    "CMR-Versicherung der Ware",
    "Logistische Unterstützung und Papiere",
    "Unterschriebenes CMR direkt nach der Entladung",
  ],
  ctaStart: "Nicht sicher,",
  ctaEnd: "was Sie brauchen?",
  ctaText:
    "Beschreiben Sie Ware und Strecke – wir schlagen Ihnen die wirtschaftlichste Transportart und Laufzeit vor.",
};

const copy = { sr, en, de };

export const meta = (lang: Lang): Metadata =>
  pageMetadata("services", lang, copy[lang].description);

export default function Services({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <>
      <PageHero
        lang={lang}
        label={t.heroLabel}
        title={t.heroTitle}
        lead={t.heroLead}
        image={{ src: highwayImg, alt: t.heroAlt }}
      />

      <section className="section">
        <div className="wrap">
          {services[lang].map((s) => (
            <article id={s.id} className="svc-detail" key={s.id}>
              <div className="svc-detail-head" data-reveal>
                <p className="label">{s.tag}</p>
                <h2 className="title">{s.title}</h2>
              </div>
              <div className="svc-detail-body" data-reveal>
                <p className="svc-detail-text">{s.text}</p>
                <dl className="specs">
                  {s.specs.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <SectionHead label={t.includedLabel} title={t.includedTitle} />
          <ul className="included">
            {t.included.map((item, i) => (
              <li
                key={item}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        lang={lang}
        title={
          <>
            {t.ctaStart} <em>{t.ctaEnd}</em>
          </>
        }
        text={t.ctaText}
      />
    </>
  );
}
