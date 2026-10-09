import type { Metadata } from "next";
import handshakeImg from "@/public/images/about-handshake.jpg";
import sunsetImg from "@/public/images/faq-truck.jpg";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import SectionHead from "../components/SectionHead";
import { pageMetadata, type Lang } from "../lib/i18n";
import { site } from "../lib/site";

const sr = {
  description:
    "QuinceLogistics je transportna firma iz Srbije koja radi isključivo drumski transport robe — po Srbiji i celoj Evropi, kompletne i zbirne utovare.",
  heroLabel: "O nama",
  heroTitle: "Radimo samo jednu stvar: drumski transport.",
  heroLead:
    "QuinceLogistics je transportna firma iz Srbije. Organizujemo i vozimo domaće i međunarodne ture po celoj Evropi za proizvodne, trgovinske i građevinske firme — od utovara do istovara.",
  heroAlt: "Dogovor sa klijentom pred utovar",
  factsLabel: "Ukratko",
  factsTitle: "Firma u šest redova.",
  facts: [
    ["Delatnost", "Drumski transport robe"],
    ["Sedište", `${site.address.city.sr}, ${site.address.country.sr}`],
    ["Pokrivenost", "Srbija i cela Evropa"],
    ["Vozni park", "Sopstveni kamioni i vozači"],
    ["Dispečerski centar", "24/7, svakog dana"],
    ["Vrste prevoza", "Kompletni (FTL) i zbirni (LTL) utovari"],
  ],
  factsCopy: [
    "Ne nudimo brodove, avione ni magacine. Kada je drumski transport jedino čime se bavite, poznajete svaku relaciju, svaki granični prelaz i svaki rok — i to se vidi u svakoj turi.",
    "Sa klijentima radimo dugoročno: redovne linije, stalni termini utovara i dispečer koji zna vašu robu, vaše rampe i vaše ljude.",
  ],
  principlesLabel: "Principi",
  principlesTitle: "Četiri pravila kojih se držimo.",
  principles: [
    {
      title: "Rok je obećanje",
      text: "Rok koji damo je rok koji vozimo. Ako na putu nešto krene po zlu, prvi zovemo mi vas — ne vi nas.",
    },
    {
      title: "Jedan kontakt",
      text: "Svaka tura ima svog dispečera. Ne prebacujemo vas sa službe na službu i ne tražimo da objašnjavate dva puta.",
    },
    {
      title: "Jasna cena",
      text: "Cena koju dogovorimo je cena koju plaćate. Bez naknadnih stavki koje se pojave posle istovara.",
    },
    {
      title: "Ispravna vozila",
      text: "Redovan servis i provera pre svake ture, jer kvar na putu košta i vas i nas.",
    },
  ],
  roadAlt: "Šleper sa ceradom u krivini u zalazak sunca",
  roadLabel: "Zašto samo drumski",
  roadTitle: "Jedna usluga, urađena kako treba.",
  roadText:
    "Mnoge firme nude sve — od kontejnera do magacina — a malo toga rade do kraja same. Mi smo izabrali suprotno: samo drumski transport, sa ljudima i procesima napravljenim baš za to.",
  roadPunch:
    "Zato vam ne možemo ponuditi brod za Kinu. Ali vam možemo reći tačno gde je vaš kamion u ovom trenutku.",
};

const en: typeof sr = {
  description:
    "QuinceLogistics is a Serbian haulier that does road freight only — across Serbia and all of Europe, full and part loads.",
  heroLabel: "About",
  heroTitle: "We do one thing: road freight.",
  heroLead:
    "QuinceLogistics is a road haulage company based in Serbia. We plan and run domestic and international loads across Europe for manufacturers, retailers and construction companies — from loading to unloading.",
  heroAlt: "Agreeing a job with a customer before loading",
  factsLabel: "At a glance",
  factsTitle: "The company in six lines.",
  facts: [
    ["What we do", "Road freight transport"],
    ["Based in", `${site.address.city.en}, ${site.address.country.en}`],
    ["Coverage", "Serbia and all of Europe"],
    ["Fleet", "Our own trucks and drivers"],
    ["Dispatch centre", "24/7, every day"],
    ["Load types", "Full (FTL) and part loads (LTL)"],
  ],
  factsCopy: [
    "We don't offer ships, planes or warehouses. When road freight is all you do, you know every route, every border crossing and every deadline — and it shows in every load.",
    "We work with customers for the long term: regular routes, fixed loading slots and a dispatcher who knows your goods, your docks and your people.",
  ],
  principlesLabel: "Principles",
  principlesTitle: "Four rules we stick to.",
  principles: [
    {
      title: "A deadline is a promise",
      text: "The deadline we give is the deadline we drive to. If something goes wrong on the road, we call you first — not the other way round.",
    },
    {
      title: "One point of contact",
      text: "Every load has its own dispatcher. We don't pass you from department to department or make you explain things twice.",
    },
    {
      title: "Clear pricing",
      text: "The price we agree is the price you pay. No extra items appearing after delivery.",
    },
    {
      title: "Roadworthy trucks",
      text: "Regular servicing and a check before every trip, because a breakdown on the road costs both of us.",
    },
  ],
  roadAlt: "Curtainsider semi-trailer on a bend at sunset",
  roadLabel: "Why road only",
  roadTitle: "One service, done properly.",
  roadText:
    "Many companies offer everything — from containers to warehouses — and see little of it through themselves. We chose the opposite: road freight only, with people and processes built for exactly that.",
  roadPunch:
    "So we can't offer you a ship to China. But we can tell you exactly where your truck is right now.",
};

const de: typeof sr = {
  description:
    "QuinceLogistics ist ein Transportunternehmen aus Serbien, das ausschließlich Straßentransporte durchführt – in Serbien und ganz Europa, als Komplett- und Teilladungen.",
  heroLabel: "Über uns",
  heroTitle: "Wir machen nur eines: Straßentransport.",
  heroLead:
    "QuinceLogistics ist ein Transportunternehmen aus Serbien. Wir planen und fahren nationale und internationale Touren in ganz Europa für Produktions-, Handels- und Bauunternehmen – von der Beladung bis zur Entladung.",
  heroAlt: "Absprache mit einem Kunden vor der Beladung",
  factsLabel: "Kurz gesagt",
  factsTitle: "Das Unternehmen in sechs Zeilen.",
  facts: [
    ["Tätigkeit", "Straßengütertransport"],
    ["Sitz", `${site.address.city.de}, ${site.address.country.de}`],
    ["Abdeckung", "Serbien und ganz Europa"],
    ["Fuhrpark", "Eigene Lkw und Fahrer"],
    ["Disposition", "rund um die Uhr, täglich"],
    ["Transportarten", "Komplett- (FTL) und Teilladungen (LTL)"],
  ],
  factsCopy: [
    "Wir bieten keine Schiffe, Flugzeuge oder Lager an. Wer nur Straßentransporte fährt, kennt jede Strecke, jeden Grenzübergang und jeden Termin – und das merkt man bei jeder Tour.",
    "Wir arbeiten langfristig mit unseren Kunden: feste Linien, feste Ladezeiten und ein Disponent, der Ihre Ware, Ihre Rampen und Ihre Leute kennt.",
  ],
  principlesLabel: "Grundsätze",
  principlesTitle: "Vier Regeln, an die wir uns halten.",
  principles: [
    {
      title: "Ein Termin ist ein Versprechen",
      text: "Der Termin, den wir nennen, ist der Termin, den wir fahren. Wenn unterwegs etwas schiefläuft, rufen wir Sie zuerst an – nicht umgekehrt.",
    },
    {
      title: "Ein Ansprechpartner",
      text: "Jede Tour hat ihren eigenen Disponenten. Wir reichen Sie nicht von Abteilung zu Abteilung weiter, und Sie müssen nichts zweimal erklären.",
    },
    {
      title: "Klare Preise",
      text: "Der vereinbarte Preis ist der Preis, den Sie zahlen. Ohne Zusatzposten, die nach der Entladung auftauchen.",
    },
    {
      title: "Einwandfreie Fahrzeuge",
      text: "Regelmäßige Wartung und eine Kontrolle vor jeder Tour – denn eine Panne unterwegs kostet Sie und uns.",
    },
  ],
  roadAlt: "Planensattelzug in einer Kurve bei Sonnenuntergang",
  roadLabel: "Warum nur Straße",
  roadTitle: "Eine Leistung, richtig gemacht.",
  roadText:
    "Viele Unternehmen bieten alles an – vom Container bis zum Lager – und erledigen davon wenig selbst von Anfang bis Ende. Wir haben uns für das Gegenteil entschieden: nur Straßentransport, mit Menschen und Abläufen, die genau dafür gemacht sind.",
  roadPunch:
    "Deshalb können wir Ihnen kein Schiff nach China anbieten. Aber wir können Ihnen genau sagen, wo Ihr Lkw gerade ist.",
};

const copy = { sr, en, de };

export const meta = (lang: Lang): Metadata =>
  pageMetadata("about", lang, copy[lang].description);

export default function About({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <>
      <PageHero
        lang={lang}
        label={t.heroLabel}
        title={t.heroTitle}
        lead={t.heroLead}
        image={{ src: handshakeImg, alt: t.heroAlt }}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead label={t.factsLabel} title={t.factsTitle} />
          <div className="facts-grid">
            <dl className="specs facts" data-reveal>
              {t.facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="facts-copy" data-reveal>
              {t.factsCopy.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <SectionHead label={t.principlesLabel} title={t.principlesTitle} />
          <ol className="principles">
            {t.principles.map((p, i) => (
              <li
                className="principle"
                key={p.title}
                data-reveal
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Photo
            src={sunsetImg}
            alt={t.roadAlt}
            ratio="3 / 2"
            sizes="(min-width: 1000px) 50vw, 100vw"
          />
          <div className="split-body" data-reveal>
            <p className="label">{t.roadLabel}</p>
            <h2 className="title">{t.roadTitle}</h2>
            <p>{t.roadText}</p>
            <p className="punch">{t.roadPunch}</p>
          </div>
        </div>
      </section>

      <CtaBand lang={lang} />
    </>
  );
}
