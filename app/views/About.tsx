import type { Metadata } from "next";
import handshakeImg from "@/public/images/about-handshake.jpg";
import sunsetImg from "@/public/images/faq-truck.jpg";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import SectionHead from "../components/SectionHead";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "QuinceLogistics je transportna firma iz Srbije koja radi isključivo drumski transport robe — domaće i međunarodne ture, kompletne i zbirne utovare.",
};

const facts = [
  ["Delatnost", "Drumski transport robe"],
  ["Sedište", `${site.address.city}, ${site.address.country}`],
  ["Pokrivenost", "Srbija, Zapadni Balkan i EU"],
  ["Vrste prevoza", "Kompletni (FTL) i zbirni (LTL) utovari"],
  ["Dokumentacija", "CMR i prateća transportna dokumenta"],
];

const principles = [
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
];

export default function ONamaPage() {
  return (
    <>
      <PageHero
        label="O nama"
        title="Radimo samo jednu stvar: drumski transport."
        lead="QuinceLogistics je transportna firma iz Srbije. Organizujemo i vozimo domaće i međunarodne ture za proizvodne, trgovinske i građevinske firme — od utovara do istovara."
        image={{ src: handshakeImg, alt: "Dogovor sa klijentom pred utovar" }}
      />

      <section className="section">
        <div className="wrap">
          <SectionHead label="Ukratko" title="Firma u pet redova." />
          <div className="facts-grid">
            <dl className="specs facts" data-reveal>
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="facts-copy" data-reveal>
              <p>
                Ne nudimo brodove, avione ni magacine. Kada je drumski
                transport jedino čime se bavite, poznajete svaku relaciju,
                svaki granični prelaz i svaki rok — i to se vidi u svakoj turi.
              </p>
              <p>
                Sa klijentima radimo dugoročno: redovne linije, stalni termini
                utovara i dispečer koji zna vašu robu, vaše rampe i vaše ljude.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <SectionHead
            label="Principi"
            title="Četiri pravila kojih se držimo."
          />
          <ol className="principles">
            {principles.map((p, i) => (
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
            alt="Šleper sa ceradom u krivini u zalazak sunca"
            ratio="3 / 2"
            sizes="(min-width: 1000px) 50vw, 100vw"
          />
          <div className="split-body" data-reveal>
            <p className="label">
              Zašto samo drumski
            </p>
            <h2 className="title">Jedna usluga, urađena kako treba.</h2>
            <p>
              Mnoge firme nude sve — od kontejnera do magacina — a malo toga
              rade do kraja same. Mi smo izabrali suprotno: samo drumski
              transport, sa ljudima i procesima napravljenim baš za to.
            </p>
            <p className="punch">
              Zato vam ne možemo ponuditi brod za Kinu. Ali vam možemo reći
              tačno gde je vaš kamion u ovom trenutku.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
