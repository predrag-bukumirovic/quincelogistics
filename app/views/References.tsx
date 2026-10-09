import type { Metadata } from "next";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "Reference",
  description:
    "Primeri drumskih tura koje QuinceLogistics vozi za proizvodne i trgovinske firme — redovne linije ka EU, dopuna stovarišta i isporuke u zakazanim terminima.",
};

const cases = [
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
];

export default function ReferencePage() {
  return (
    <>
      <PageHero
        label="Reference"
        title="Ture koje vozimo iz nedelje u nedelju."
        lead="Imena klijenata ne objavljujemo bez njihove dozvole — ali posao koji radimo za njih rado opisujemo."
      />

      <section className="section section-flush">
        <div className="wrap">
          <SectionHead
            label="Iz prakse"
            title="Tri klijenta, tri vrste prevoza."
          />
          {cases.map((c) => (
            <article className="case" key={c.title}>
              <dl className="specs case-meta" data-reveal>
                <div>
                  <dt>Klijent</dt>
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
          <SectionHead
            label="Iskustva"
            title="Šta kažu oni čiju robu vozimo."
          />
          <Testimonials />
        </div>
      </section>

      <CtaBand
        title={
          <>
            Sledeća tura <em>može biti vaša.</em>
          </>
        }
      />
    </>
  );
}
