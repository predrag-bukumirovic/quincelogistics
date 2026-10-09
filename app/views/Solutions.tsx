import type { Metadata } from "next";
import CtaBand from "../components/CtaBand";
import FaqSection from "../components/FaqSection";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import Steps from "../components/Steps";

export const metadata: Metadata = {
  title: "Rešenja",
  description:
    "Drumski transport prilagođen vrsti robe — građevinski materijal, industrija, trgovina, auto-delovi, mašine i poljoprivreda.",
};

const industries = [
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
];

export default function ResenjaPage() {
  return (
    <>
      <PageHero
        label="Rešenja"
        title="Prevoz prilagođen robi koju vozite."
        lead="Građevinski materijal se ne vozi kao auto-delovi. Turu planiramo prema vrsti robe, načinu utovara i rokovima vaše proizvodnje ili prodaje."
      />

      <section className="section section-flush">
        <div className="wrap">
          <SectionHead
            label="Po industrijama"
            title="Za koga najčešće vozimo."
          />
          <div className="industry-grid">
            {industries.map((it, i) => (
              <article
                className="industry"
                key={it.title}
                data-reveal
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <h3>{it.title}</h3>
                <p>{it.text}</p>
                <p className="industry-cargo">
                  <span>Tipičan teret</span>
                  {it.cargo}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <SectionHead
            label="Saradnja"
            title="Kako izgleda jedna tura sa nama."
          />
          <Steps />
        </div>
      </section>

      <FaqSection />

      <CtaBand
        title={
          <>
            Ne vidite svoju <em>industriju?</em>
          </>
        }
        text="Ako se roba vozi kamionom, verovatno smo je već vozili. Javite nam šta i kuda šaljete."
      />
    </>
  );
}
