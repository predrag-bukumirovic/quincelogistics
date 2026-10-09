import type { Metadata } from "next";
import CtaBand from "../components/CtaBand";
import FaqSection from "../components/FaqSection";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import Steps from "../components/Steps";
import { steps } from "../lib/content";
import { pageMetadata, type Lang } from "../lib/i18n";

const sr = {
  description:
    "Drumski transport prilagođen vrsti robe — građevinski materijal, industrija, trgovina, auto-delovi, mašine i poljoprivreda.",
  heroLabel: "Rešenja",
  heroTitle: "Prevoz prilagođen robi koju vozite.",
  heroLead:
    "Građevinski materijal se ne vozi kao auto-delovi. Turu planiramo prema vrsti robe, načinu utovara i rokovima vaše proizvodnje ili prodaje.",
  industriesLabel: "Po industrijama",
  industriesTitle: "Za koga najčešće vozimo.",
  cargoLabel: "Tipičan teret",
  industries: [
    {
      title: "Građevinski materijal",
      cargo: "Palete, džambo vreće, ploče, profili",
      text: "Isporuke na gradilišta i stovarišta po dogovorenom rasporedu. Cerade sa bočnim otvaranjem olakšavaju utovar viljuškarom.",
    },
    {
      title: "Industrija i proizvodnja",
      cargo: "Sirovine, poluproizvodi, gotova roba",
      text: "Redovne ture u fiksnim terminima — sirovine ka fabrici, gotovi proizvodi ka kupcima u zemlji i inostranstvu.",
    },
    {
      title: "Trgovina i distribucija",
      cargo: "Paletizovana roba široke potrošnje",
      text: "Dopuna distributivnih centara i zbirne ture ka više prodajnih mesta u jednom prolazu.",
    },
    {
      title: "Auto-delovi",
      cargo: "Komponente, delovi, povratna ambalaža",
      text: "Isporuke u tačno zakazanim terminima, jer zastoj proizvodne linije košta više od samog prevoza.",
    },
    {
      title: "Mašine i oprema",
      cargo: "Mašine, alati, rezervni delovi",
      text: "Planiranje utovara, obezbeđivanje tereta i dodatno osiguranje za opremu veće vrednosti.",
    },
    {
      title: "Poljoprivreda",
      cargo: "Đubrivo, seme, ambalaža, mehanizacija",
      text: "Sezonski vrhovi traže brzu reakciju — vozila obezbeđujemo i kada je potražnja najveća.",
    },
  ],
  stepsLabel: "Saradnja",
  stepsTitle: "Kako izgleda jedna tura sa nama.",
  ctaStart: "Ne vidite svoju",
  ctaEnd: "industriju?",
  ctaText:
    "Ako se roba vozi kamionom, verovatno smo je već vozili. Javite nam šta i kuda šaljete.",
};

const en: typeof sr = {
  description:
    "Road freight tailored to your goods — building materials, manufacturing, retail, automotive parts, machinery and agriculture.",
  heroLabel: "Solutions",
  heroTitle: "Transport that fits what you ship.",
  heroLead:
    "Building materials don't travel like car parts. We plan each load around the type of goods, how they're loaded and your production or sales deadlines.",
  industriesLabel: "By industry",
  industriesTitle: "Who we haul for most.",
  cargoLabel: "Typical cargo",
  industries: [
    {
      title: "Building materials",
      cargo: "Pallets, bulk bags, boards, profiles",
      text: "Deliveries to sites and builders' merchants on an agreed schedule. Side-opening curtainsiders make forklift loading easy.",
    },
    {
      title: "Manufacturing",
      cargo: "Raw materials, semi-finished and finished goods",
      text: "Regular runs on fixed slots — raw materials to the plant, finished products to customers at home and abroad.",
    },
    {
      title: "Retail and distribution",
      cargo: "Palletised consumer goods",
      text: "Replenishing distribution centres and multi-drop runs to several stores in one trip.",
    },
    {
      title: "Automotive parts",
      cargo: "Components, parts, returnable packaging",
      text: "Deliveries in precisely booked slots, because a stopped production line costs more than the transport itself.",
    },
    {
      title: "Machinery and equipment",
      cargo: "Machines, tools, spare parts",
      text: "Load planning, cargo securing and additional insurance for high-value equipment.",
    },
    {
      title: "Agriculture",
      cargo: "Fertiliser, seed, packaging, machinery",
      text: "Seasonal peaks call for a quick response — we find trucks even when demand is at its highest.",
    },
  ],
  stepsLabel: "Working together",
  stepsTitle: "What a load with us looks like.",
  ctaStart: "Don't see your",
  ctaEnd: "industry?",
  ctaText:
    "If it travels by truck, we've probably hauled it already. Tell us what you ship and where.",
};

const de: typeof sr = {
  description:
    "Straßentransport passend zur Ware – Baustoffe, Industrie, Handel, Autoteile, Maschinen und Landwirtschaft.",
  heroLabel: "Lösungen",
  heroTitle: "Transport, der zu Ihrer Ware passt.",
  heroLead:
    "Baustoffe fährt man nicht wie Autoteile. Wir planen jede Tour nach Warenart, Verladeart und den Terminen Ihrer Produktion oder Ihres Vertriebs.",
  industriesLabel: "Nach Branchen",
  industriesTitle: "Für wen wir am häufigsten fahren.",
  cargoLabel: "Typische Ladung",
  industries: [
    {
      title: "Baustoffe",
      cargo: "Paletten, Big Bags, Platten, Profile",
      text: "Lieferungen an Baustellen und Baustoffhändler nach vereinbartem Plan. Seitlich zu öffnende Planenauflieger erleichtern die Beladung mit dem Stapler.",
    },
    {
      title: "Industrie und Produktion",
      cargo: "Rohstoffe, Halbfabrikate, Fertigware",
      text: "Regelmäßige Touren zu festen Zeiten – Rohstoffe ins Werk, Fertigprodukte zu Kunden im In- und Ausland.",
    },
    {
      title: "Handel und Distribution",
      cargo: "Palettierte Konsumgüter",
      text: "Belieferung von Distributionszentren und Sammeltouren zu mehreren Verkaufsstellen in einem Durchgang.",
    },
    {
      title: "Autoteile",
      cargo: "Komponenten, Teile, Leergut",
      text: "Lieferungen in exakt gebuchten Zeitfenstern – denn ein Bandstillstand kostet mehr als der Transport selbst.",
    },
    {
      title: "Maschinen und Anlagen",
      cargo: "Maschinen, Werkzeuge, Ersatzteile",
      text: "Ladeplanung, Ladungssicherung und Zusatzversicherung für hochwertige Ausrüstung.",
    },
    {
      title: "Landwirtschaft",
      cargo: "Dünger, Saatgut, Verpackung, Landtechnik",
      text: "Saisonspitzen verlangen schnelle Reaktion – wir stellen Fahrzeuge auch dann, wenn die Nachfrage am höchsten ist.",
    },
  ],
  stepsLabel: "Zusammenarbeit",
  stepsTitle: "So läuft eine Tour mit uns ab.",
  ctaStart: "Ihre Branche",
  ctaEnd: "nicht dabei?",
  ctaText:
    "Was per Lkw transportiert wird, haben wir vermutlich schon gefahren. Sagen Sie uns, was Sie wohin versenden.",
};

const copy = { sr, en, de };

export const meta = (lang: Lang): Metadata =>
  pageMetadata("solutions", lang, copy[lang].description);

export default function Solutions({ lang }: { lang: Lang }) {
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
          <SectionHead label={t.industriesLabel} title={t.industriesTitle} />
          <div className="industry-grid">
            {t.industries.map((it, i) => (
              <article
                className="industry"
                key={it.title}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <h3>{it.title}</h3>
                <p>{it.text}</p>
                <p className="industry-cargo">
                  <span>{t.cargoLabel}</span>
                  {it.cargo}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <SectionHead label={t.stepsLabel} title={t.stepsTitle} />
          <Steps items={steps[lang]} />
        </div>
      </section>

      <FaqSection lang={lang} />

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
