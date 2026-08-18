import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Reference — Karapandžić d.o.o.",
  description:
    "Kompanije koje su poverile svoj lanac snabdevanja Karapandžić d.o.o. — od e-trgovine do teške industrije.",
};

const clients = [
  { name: "Global Trade Co.", tag: "Uvoz-izvoz" },
  { name: "Nordic Foods", tag: "Prehrambena industrija" },
  { name: "Petrović Gradnja", tag: "Građevinarstvo" },
  { name: "Butik Radovanović", tag: "E-trgovina" },
  { name: "AutoParts Plus", tag: "Auto industrija" },
  { name: "Fresh Market", tag: "Maloprodaja" },
  { name: "BalkanSteel", tag: "Metalna industrija" },
  { name: "Vinarija Sunčani Breg", tag: "Hrana i piće" },
];

export default function ReferencePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-inner">
          <span className="eyebrow hero-anim" style={{ animationDelay: "0ms" }}>
            Reference
          </span>
          <h1 className="hero-anim" style={{ animationDelay: "80ms" }}>
            Kompanije koje nam veruju
          </h1>
          <p className="hero-anim" style={{ animationDelay: "160ms" }}>
            Od malih porodičnih radnji do regionalnih industrijskih igrača —
            ovo su neki od klijenata čiji lanac snabdevanja svakodnevno
            pokrivamo.
          </p>
        </div>
        <div className="wrap">
          <div className="hero-image hero-anim" style={{ animationDelay: "280ms" }}>
            <img
              src="/images/reliability-truck.jpg"
              alt="Kamion na otvorenom putu"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="stats-row" data-reveal>
            <div className="stat-card">
              <strong>10+</strong>
              <span>Godina iskustva</span>
            </div>
            <div className="stat-card">
              <strong>45k+</strong>
              <span>Isporučenih pošiljki</span>
            </div>
            <div className="stat-card">
              <strong>30+</strong>
              <span>Zemalja pokrivenosti</span>
            </div>
            <div className="stat-card">
              <strong>50+</strong>
              <span>Aktivnih partnerstava</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap">
          <h2 className="reliability-heading" data-reveal>
            Neki od klijenata sa kojima sarađujemo
          </h2>

          <div className="client-grid">
            {clients.map((c, i) => (
              <div
                className="client-tile"
                data-reveal
                key={c.name}
                style={{ transitionDelay: `${(i % 4) * 60}ms` }}
              >
                <strong>{c.name}</strong>
                <span>{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="service-detail">
            <div className="split">
              <div className="split-image" data-reveal>
                <img
                  src="/images/reliability-truck.jpg"
                  alt="Kamion na putu u zalasku sunca"
                />
              </div>
              <div
                className="split-content"
                data-reveal
                style={{ transitionDelay: "90ms" }}
              >
                <h2>Nordic Foods — rashladni lanac bez prekida</h2>
                <p>
                  Za distributera prehrambenih proizvoda organizovali smo
                  redovan rashladni transport preko više graničnih prelaza,
                  uz kontinuiranu kontrolu temperature od utovara do
                  isporuke.
                </p>
                <p>
                  Rezultat je stabilan raspored isporuka koji im omogućava
                  da planiraju zalihe bez straha od kašnjenja ili
                  neusklađenog temperaturnog režima.
                </p>
              </div>
            </div>
          </div>

          <div className="service-detail">
            <div className="split split-reverse">
              <div className="split-image" data-reveal>
                <img
                  src="/images/warehouse-interior.jpg"
                  alt="Unutrašnjost magacina sa viljuškarom"
                />
              </div>
              <div
                className="split-content"
                data-reveal
                style={{ transitionDelay: "90ms" }}
              >
                <h2>AutoParts Plus — isporuke po JIT modelu</h2>
                <p>
                  Proizvođaču auto delova obezbeđujemo just-in-time dostavu
                  komponenti direktno na proizvodnu liniju, uz drumski
                  transport za redovne rute i vazdušni za hitne pošiljke.
                </p>
                <p>
                  Kombinacijom oba vida transporta klijent izbegava zastoje
                  u proizvodnji, bez obzira na obim ili hitnost narudžbine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="cta" data-reveal>
          <div className="cta-body">
            <h2>Želite da vaša kompanija bude sledeća?</h2>
            <p>
              Pridružite se klijentima koji su svoj lanac snabdevanja
              poverili Karapandžić timu — zatražite ponudu bez obaveze.
            </p>
            <Link href="/kontakt" className="btn btn-primary">
              Zatražite ponudu
              <FiArrowRight className="btn-arrow" size={16} />
            </Link>
          </div>
          <div className="cta-image">
            <img src="/images/cta-truck.jpg" alt="Narandžasti kamion" />
          </div>
        </div>
      </section>
    </>
  );
}
