import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import heroImg from "@/public/images/hero-main.jpg";
import duskImg from "@/public/images/service-road.jpg";
import highwayImg from "@/public/images/reliability-truck.jpg";
import CtaBand from "../components/CtaBand";
import FaqSection from "../components/FaqSection";
import Marquee from "../components/Marquee";
import Photo from "../components/Photo";
import RouteTruck from "../components/RouteTruck";
import SectionHead from "../components/SectionHead";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";
import { reasons, services, steps } from "../lib/content";
import { pageMetadata, routes, type Lang } from "../lib/i18n";
import { site } from "../lib/site";

const sr = {
  description:
    "QuinceLogistics — domaći i međunarodni drumski transport sopstvenim kamionima. Kompletni (FTL) i zbirni (LTL) utovari po Srbiji i celoj Evropi, uz dispečerski centar 24/7.",
  kicker: ["Domaći i međunarodni transport", "Sopstveni kamioni · 24/7"],
  titleStart: "Bilo gde",
  titleEnd: "u Evropi.",
  lead: "Domaći i međunarodni drumski transport sopstvenim kamionima — kompletni i zbirni utovari po Srbiji i celoj Evropi. Naš dispečerski centar prati vašu turu 24/7, od utovara do istovara.",
  cta: "Zatražite ponudu",
  heroAlt: "Šleper na otvorenom putu",
  aboutLabel: "Ko smo mi",
  aboutMuted: "Ne vozimo brodove, avione ni vozove.",
  aboutTitle: "Samo kamione — i zato svaku turu planiramo do poslednje palete.",
  aboutText:
    "QuinceLogistics je transportna firma iz Srbije specijalizovana za drumski prevoz robe, sa sopstvenim voznim parkom i dispečerskim centrom. Radimo sa proizvodnim, trgovinskim i građevinskim firmama kojima je važno da roba stigne kada je dogovoreno — i da u svakom trenutku znaju gde je.",
  aboutLink: "Više o nama",
  aboutAlt: "Kamion u vožnji u sumrak",
  servicesLabel: "Usluge",
  servicesTitle: "Četiri vrste prevoza. Sve kamionom.",
  servicesLead:
    "Od jedne palete do punog šlepera, po Srbiji ili bilo gde u Evropi — birate prevoz prema količini robe i roku.",
  stepsLabel: "Kako radimo",
  stepsTitle: "Od upita do potpisanog CMR-a.",
  whyAlt: "Šleper na autoputu pod oblačnim nebom",
  whyLabel: "Zašto Quince",
  whyTitle: "Manje poziva. Više isporuka na vreme.",
  testiLabel: "Iskustva",
  testiTitle: "Šta kažu oni čiju robu vozimo.",
};

const en: typeof sr = {
  description:
    "QuinceLogistics — domestic and international road freight with our own trucks. Full (FTL) and part loads (LTL) across Serbia and all of Europe, with a 24/7 dispatch centre.",
  kicker: ["Road freight from Serbia", "Own trucks · 24/7"],
  titleStart: "Anywhere",
  titleEnd: "in Europe.",
  lead: "Domestic and international road freight with our own trucks — full and part loads across Serbia and all of Europe. Our dispatch centre follows your load 24/7, from pickup to delivery.",
  cta: "Request a quote",
  heroAlt: "Semi-trailer truck on an open road",
  aboutLabel: "Who we are",
  aboutMuted: "We don't run ships, planes or trains.",
  aboutTitle: "Only trucks — so we plan every load down to the last pallet.",
  aboutText:
    "QuinceLogistics is a Serbian haulier specialising in road freight, with its own fleet and dispatch centre. We work with manufacturers, retailers and construction companies that need goods delivered when agreed — and want to know where they are at any moment.",
  aboutLink: "More about us",
  aboutAlt: "Truck on the road at dusk",
  servicesLabel: "Services",
  servicesTitle: "Four ways to ship. All by truck.",
  servicesLead:
    "From a single pallet to a full trailer, within Serbia or anywhere in Europe — choose the service that fits your volume and deadline.",
  stepsLabel: "How we work",
  stepsTitle: "From enquiry to signed CMR.",
  whyAlt: "Semi-trailer on a motorway under a cloudy sky",
  whyLabel: "Why Quince",
  whyTitle: "Fewer calls. More deliveries on time.",
  testiLabel: "Testimonials",
  testiTitle: "What shippers say about us.",
};

const de: typeof sr = {
  description:
    "QuinceLogistics – nationale und internationale Straßentransporte mit eigenen Lkw. Komplett- (FTL) und Teilladungen (LTL) in Serbien und ganz Europa, mit Disposition rund um die Uhr.",
  kicker: ["Straßentransport aus Serbien", "Eigene Lkw · 24/7"],
  titleStart: "Überall",
  titleEnd: "in Europa.",
  lead: "Nationale und internationale Straßentransporte mit eigenen Lkw – Komplett- und Teilladungen in Serbien und ganz Europa. Unsere Disposition begleitet Ihre Tour rund um die Uhr, von der Beladung bis zur Entladung.",
  cta: "Angebot anfordern",
  heroAlt: "Sattelzug auf einer offenen Landstraße",
  aboutLabel: "Wer wir sind",
  aboutMuted: "Wir fahren keine Schiffe, Flugzeuge oder Züge.",
  aboutTitle: "Nur Lkw – deshalb planen wir jede Tour bis zur letzten Palette.",
  aboutText:
    "QuinceLogistics ist ein Transportunternehmen aus Serbien, spezialisiert auf den Straßengüterverkehr, mit eigenem Fuhrpark und eigener Disposition. Wir arbeiten für Produktions-, Handels- und Bauunternehmen, denen wichtig ist, dass die Ware pünktlich ankommt – und die jederzeit wissen wollen, wo sie ist.",
  aboutLink: "Mehr über uns",
  aboutAlt: "Lkw in der Abenddämmerung",
  servicesLabel: "Leistungen",
  servicesTitle: "Vier Transportarten. Alle per Lkw.",
  servicesLead:
    "Von einer Palette bis zum vollen Sattelzug, innerhalb Serbiens oder überall in Europa – Sie wählen den Transport nach Menge und Termin.",
  stepsLabel: "So arbeiten wir",
  stepsTitle: "Von der Anfrage bis zum unterschriebenen CMR.",
  whyAlt: "Sattelzug auf der Autobahn unter bewölktem Himmel",
  whyLabel: "Warum Quince",
  whyTitle: "Weniger Anrufe. Mehr pünktliche Lieferungen.",
  testiLabel: "Kundenstimmen",
  testiTitle: "Was unsere Kunden sagen.",
};

const copy = { sr, en, de };

export const meta = (lang: Lang): Metadata =>
  pageMetadata("home", lang, copy[lang].description);

export default function Home({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const servicesHref = routes.services[lang];

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-kicker hero-anim">
            <span>{t.kicker[0]}</span>
            <span>{t.kicker[1]}</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-line">
              <span className="hero-line-inner">{t.titleStart}</span>
              <span className="route" aria-hidden="true">
                <RouteTruck />
              </span>
            </span>
            <span className="hero-line hero-line-end">
              <span className="route" aria-hidden="true">
                <RouteTruck />
              </span>
              <span className="hero-line-inner">{t.titleEnd}</span>
            </span>
          </h1>
          <div
            className="hero-foot hero-anim"
            style={{ animationDelay: "260ms" }}
          >
            <p className="lead">{t.lead}</p>
            <div className="hero-actions">
              <Link href={routes.contact[lang]} className="btn btn-primary">
                {t.cta}
                <FiArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <a href={site.phone.href} className="btn btn-line">
                {site.phone.display}
              </a>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo">
            <Image
              src={heroImg}
              alt={t.heroAlt}
              fill
              preload
              placeholder="blur"
              sizes="100vw"
            />
          </div>
          <div className="wrap hero-strip-wrap">
            <ul className="hero-strip">
              {services[lang].map((s) => (
                <li key={s.id}>
                  <Link href={`${servicesHref}#${s.id}`}>
                    <span className="hero-strip-num">{s.tag}</span>
                    <strong>{s.title}</strong>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            label={t.aboutLabel}
            title={
              <>
                <span className="muted">{t.aboutMuted}</span> {t.aboutTitle}
              </>
            }
          />
          <div className="about-grid">
            <div className="about-copy" data-reveal>
              <p>{t.aboutText}</p>
              <Link href={routes.about[lang]} className="link-arrow">
                {t.aboutLink}
                <FiArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <Photo
              src={duskImg}
              alt={t.aboutAlt}
              ratio="4 / 5"
              sizes="(min-width: 1000px) 34vw, 100vw"
              className="about-photo"
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <SectionHead
            label={t.servicesLabel}
            title={t.servicesTitle}
            lead={t.servicesLead}
          />
          <ul className="svc-list">
            {services[lang].map((s) => (
              <li key={s.id} data-reveal>
                <Link href={`${servicesHref}#${s.id}`} className="svc-row">
                  <span className="svc-title">
                    <small>{s.tag}</small>
                    {s.title}
                  </span>
                  <span className="svc-text">{s.short}</span>
                  <span className="svc-arrow" aria-hidden="true">
                    <FiArrowUpRight size={20} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label={t.stepsLabel} title={t.stepsTitle} />
          <Steps items={steps[lang]} />
        </div>
      </section>

      <Marquee lang={lang} />

      <section className="section">
        <div className="wrap why-grid">
          <Photo
            src={highwayImg}
            alt={t.whyAlt}
            ratio="5 / 4"
            sizes="(min-width: 1000px) 50vw, 100vw"
            className="why-photo"
          />
          <div className="why-body" data-reveal>
            <p className="label">{t.whyLabel}</p>
            <h2 className="title">{t.whyTitle}</h2>
            <ul className="reasons">
              {reasons[lang].map((r) => (
                <li key={r.title}>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <SectionHead label={t.testiLabel} title={t.testiTitle} />
          <Testimonials lang={lang} />
        </div>
      </section>

      <FaqSection lang={lang} />

      <CtaBand lang={lang} />
    </>
  );
}
