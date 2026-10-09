import type { Metadata } from "next";
import highwayImg from "@/public/images/cta-truck.jpg";
import CtaBand from "../components/CtaBand";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import { services } from "../lib/content";

export const metadata: Metadata = {
  title: "Usluge",
  description:
    "Kompletni (FTL) i zbirni (LTL) utovari, međunarodni i domaći drumski transport robe — uz dispečera, GPS praćenje i kompletnu prevoznu dokumentaciju.",
};

const included = [
  "Dispečer dostupan tokom cele ture",
  "GPS praćenje vozila",
  "CMR osiguranje robe",
  "CMR i prateća dokumentacija",
  "Obaveštenje o utovaru i istovaru",
  "Potpisan CMR odmah posle istovara",
];

export default function UslugePage() {
  return (
    <>
      <PageHero
        label="Usluge"
        title="Od jedne palete do punog kamiona."
        lead="Četiri vrste drumskog prevoza — po Srbiji i preko granice. Uz svaku turu dobijate dispečera, GPS praćenje i kompletnu prevoznu dokumentaciju."
        image={{
          src: highwayImg,
          alt: "Kamion na autoputu u zalazak sunca",
        }}
      />

      <section className="section">
        <div className="wrap">
          {services.map((s) => (
            <article id={s.id} className="svc-detail" key={s.id}>
              <div className="svc-detail-head" data-reveal>
                <p className="label">
                  {s.tag}
                </p>
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
          <SectionHead
            label="Uz svaku turu"
            title="Šta dobijate, bez obzira na relaciju."
          />
          <ul className="included">
            {included.map((item, i) => (
              <li key={item} data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Niste sigurni <em>šta vam treba?</em>
          </>
        }
        text="Opišite robu i relaciju — predložićemo najisplativiju vrstu prevoza i rok."
      />
    </>
  );
}
