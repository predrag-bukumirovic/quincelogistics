import type { Metadata } from "next";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import Testimonials from "../components/Testimonials";
import { pageMetadata, type Lang } from "../lib/i18n";

const sr = {
  description:
    "Primeri drumskih tura koje QuinceLogistics vozi za proizvodne i trgovinske firme — redovne linije ka Evropi, dopuna stovarišta i isporuke u zakazanim terminima.",
  heroLabel: "Reference",
  heroTitle: "Ture koje vozimo iz nedelje u nedelju.",
  heroLead:
    "Imena klijenata ne objavljujemo bez njihove dozvole — ali posao koji radimo za njih rado opisujemo.",
  casesLabel: "Iz prakse",
  casesTitle: "Tri klijenta, tri vrste prevoza.",
  clientLabel: "Klijent",
  cases: [
    {
      client: "Proizvođač nameštaja",
      title: "Redovna linija Srbija – Nemačka",
      meta: [
        ["Relacija", "Čačak → Štutgart"],
        ["Učestalost", "dva puta nedeljno"],
        ["Usluga", "Kompletni utovari (FTL)"],
      ],
      text: [
        "Klijent izvozi tapacirani nameštaj u Nemačku i ranije je svaku turu ugovarao posebno — sa različitim prevoznicima i rokovima koji su se menjali iz nedelje u nedelju.",
        "Uveli smo fiksne termine utovara i stalnog dispečera za liniju. Kupci u Nemačkoj sada unapred znaju kada roba stiže, a klijent planira proizvodnju prema tim terminima.",
      ],
    },
    {
      client: "Distributer građevinskog materijala",
      title: "Dopuna stovarišta u sezoni gradnje",
      meta: [
        ["Relacija", "Novi Sad → Vojvodina i Beograd"],
        ["Učestalost", "svakodnevno, mart – novembar"],
        ["Usluga", "Domaći i zbirni transport"],
      ],
      text: [
        "U sezoni stovarišta ostaju bez robe brže nego što stigne nova narudžbina. Najveći problem nije bila cena prevoza, već kamion koji nije tu kada je potreban.",
        "Organizovali smo dnevne ture sa istovarom na više stovarišta u jednom prolazu. Narudžbina primljena do 14 časova vozi se sledećeg jutra.",
      ],
    },
    {
      client: "Proizvođač auto-delova",
      title: "Isporuke u zakazanim terminima",
      meta: [
        ["Relacija", "Kragujevac → Bratislava"],
        ["Učestalost", "tri puta nedeljno"],
        ["Usluga", "Međunarodni transport"],
      ],
      text: [
        "Kupac klijenta prima robu samo u zakazanom terminu na rampi — kašnjenje od sat vremena znači novo zakazivanje i zastoj na proizvodnoj liniji.",
        "Ture planiramo unazad od termina istovara, sa rezervom za granicu. Dokumentaciju usklađujemo sa špediterom klijenta dan ranije, da kamion ne čeka na carini.",
      ],
    },
  ],
  testiLabel: "Iskustva",
  testiTitle: "Šta kažu oni čiju robu vozimo.",
  ctaStart: "Sledeća tura",
  ctaEnd: "može biti vaša.",
};

const en: typeof sr = {
  description:
    "Examples of road freight QuinceLogistics runs for manufacturers and distributors — regular routes to Europe, merchant restocking and deliveries in booked slots.",
  heroLabel: "References",
  heroTitle: "Loads we run week in, week out.",
  heroLead:
    "We don't publish customer names without their permission — but we're happy to describe the work we do for them.",
  casesLabel: "In practice",
  casesTitle: "Three customers, three kinds of transport.",
  clientLabel: "Customer",
  cases: [
    {
      client: "Furniture manufacturer",
      title: "Regular route Serbia – Germany",
      meta: [
        ["Route", "Čačak → Stuttgart"],
        ["Frequency", "twice a week"],
        ["Service", "Full truckloads (FTL)"],
      ],
      text: [
        "The customer exports upholstered furniture to Germany and used to book every load separately — with different carriers and lead times that changed from week to week.",
        "We introduced fixed loading slots and a dedicated dispatcher for the route. Buyers in Germany now know in advance when goods will arrive, and the customer plans production around those slots.",
      ],
    },
    {
      client: "Building materials distributor",
      title: "Restocking merchants in the building season",
      meta: [
        ["Route", "Novi Sad → Vojvodina and Belgrade"],
        ["Frequency", "daily, March – November"],
        ["Service", "Domestic and groupage transport"],
      ],
      text: [
        "In season, builders' merchants run out of stock faster than new orders arrive. The biggest problem wasn't the price of transport, but a truck that wasn't there when needed.",
        "We set up daily runs with drops at several merchants in a single trip. Orders received by 2 pm go out the next morning.",
      ],
    },
    {
      client: "Automotive parts manufacturer",
      title: "Deliveries in booked slots",
      meta: [
        ["Route", "Kragujevac → Bratislava"],
        ["Frequency", "three times a week"],
        ["Service", "International transport"],
      ],
      text: [
        "The customer's buyer only accepts goods in a booked dock slot — an hour's delay means rebooking and a stoppage on the production line.",
        "We plan each run backwards from the unloading slot, with a buffer for the border. Documents are aligned with the customer's forwarder the day before, so the truck doesn't wait at customs.",
      ],
    },
  ],
  testiLabel: "Testimonials",
  testiTitle: "What shippers say about us.",
  ctaStart: "Your load",
  ctaEnd: "could be next.",
};

const de: typeof sr = {
  description:
    "Beispiele für Straßentransporte, die QuinceLogistics für Produktions- und Handelsunternehmen fährt – feste Linien nach Europa, Belieferung von Baustoffhändlern und Lieferungen in gebuchten Zeitfenstern.",
  heroLabel: "Referenzen",
  heroTitle: "Touren, die wir Woche für Woche fahren.",
  heroLead:
    "Kundennamen veröffentlichen wir nicht ohne Erlaubnis – aber die Arbeit, die wir für sie leisten, beschreiben wir gern.",
  casesLabel: "Aus der Praxis",
  casesTitle: "Drei Kunden, drei Transportarten.",
  clientLabel: "Kunde",
  cases: [
    {
      client: "Möbelhersteller",
      title: "Feste Linie Serbien – Deutschland",
      meta: [
        ["Strecke", "Čačak → Stuttgart"],
        ["Häufigkeit", "zweimal pro Woche"],
        ["Leistung", "Komplettladungen (FTL)"],
      ],
      text: [
        "Der Kunde exportiert Polstermöbel nach Deutschland und hat früher jede Tour einzeln vergeben – an verschiedene Frachtführer, mit Laufzeiten, die sich von Woche zu Woche änderten.",
        "Wir haben feste Ladezeiten und einen festen Disponenten für die Linie eingeführt. Die Abnehmer in Deutschland wissen jetzt im Voraus, wann die Ware ankommt, und der Kunde plant seine Produktion nach diesen Terminen.",
      ],
    },
    {
      client: "Baustoffhändler",
      title: "Belieferung in der Bausaison",
      meta: [
        ["Strecke", "Novi Sad → Vojvodina und Belgrad"],
        ["Häufigkeit", "täglich, März – November"],
        ["Leistung", "Transporte in Serbien und Teilladungen"],
      ],
      text: [
        "In der Saison gehen den Lagern die Waren schneller aus, als neue Bestellungen eintreffen. Das größte Problem war nicht der Frachtpreis, sondern ein Lkw, der nicht da war, wenn man ihn brauchte.",
        "Wir haben tägliche Touren mit Entladung an mehreren Lagern in einem Durchgang organisiert. Bestellungen, die bis 14 Uhr eingehen, fahren wir am nächsten Morgen.",
      ],
    },
    {
      client: "Hersteller von Autoteilen",
      title: "Lieferungen in gebuchten Zeitfenstern",
      meta: [
        ["Strecke", "Kragujevac → Bratislava"],
        ["Häufigkeit", "dreimal pro Woche"],
        ["Leistung", "Internationaler Transport"],
      ],
      text: [
        "Der Abnehmer des Kunden nimmt Ware nur im gebuchten Zeitfenster an der Rampe an – eine Stunde Verspätung bedeutet eine neue Buchung und Stillstand am Band.",
        "Wir planen jede Tour rückwärts vom Entladetermin, mit Puffer für die Grenze. Die Papiere stimmen wir am Vortag mit dem Spediteur des Kunden ab, damit der Lkw nicht am Zoll wartet.",
      ],
    },
  ],
  testiLabel: "Kundenstimmen",
  testiTitle: "Was unsere Kunden sagen.",
  ctaStart: "Die nächste Tour",
  ctaEnd: "könnte Ihre sein.",
};

const copy = { sr, en, de };

export const meta = (lang: Lang): Metadata =>
  pageMetadata("references", lang, copy[lang].description);

export default function References({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <>
      <PageHero
        lang={lang}
        label={t.heroLabel}
        title={t.heroTitle}
        lead={t.heroLead}
      />

      <section className="section section-flush">
        <div className="wrap">
          <SectionHead label={t.casesLabel} title={t.casesTitle} />
          {t.cases.map((c) => (
            <article className="case" key={c.title}>
              <dl className="specs case-meta" data-reveal>
                <div>
                  <dt>{t.clientLabel}</dt>
                  <dd>{c.client}</dd>
                </div>
                {c.meta.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="case-body" data-reveal>
                <h3 className="case-title">{c.title}</h3>
                {c.text.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <SectionHead label={t.testiLabel} title={t.testiTitle} />
          <Testimonials lang={lang} />
        </div>
      </section>

      <CtaBand
        lang={lang}
        title={
          <>
            {t.ctaStart} <em>{t.ctaEnd}</em>
          </>
        }
      />
    </>
  );
}
