import type { Metadata } from "next";
import Link from "next/link";
import {
  FiShoppingBag,
  FiTool,
  FiThermometer,
  FiTruck,
  FiPackage,
  FiActivity,
  FiArrowRight,
} from "react-icons/fi";
import Faq from "../components/Faq";

export const metadata: Metadata = {
  title: "Rešenja — Karapandžić d.o.o.",
  description:
    "Logistička rešenja prilagođena vašoj industriji — e-trgovina, građevina, hrana i piće, automobilska industrija i farmacija.",
};

export default function ResenjaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-inner">
          <span className="eyebrow hero-anim" style={{ animationDelay: "0ms" }}>
            Rešenja
          </span>
          <h1 className="hero-anim" style={{ animationDelay: "80ms" }}>
            Rešenja prilagođena vašoj industriji
          </h1>
          <p className="hero-anim" style={{ animationDelay: "160ms" }}>
            Svaka industrija ima svoje zahteve za rokove, temperaturni režim
            i dokumentaciju. Kreiramo logistička rešenja koja se uklapaju u
            vaš lanac snabdevanja.
          </p>
        </div>
        <div className="wrap">
          <div className="hero-image hero-anim" style={{ animationDelay: "280ms" }}>
            <img
              src="/images/trust-loading.jpg"
              alt="Utovar kontejnera na kamion"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="reliability-heading" data-reveal>
            Rešenja po industrijama
          </h2>

          <div className="values-grid">
            <div className="value-card" data-reveal>
              <div className="value-icon">
                <FiShoppingBag size={20} color="#ffffff" />
              </div>
              <h3>E-trgovina i maloprodaja</h3>
              <p>
                Brza distribucija poslednje milje i fleksibilno
                skladištenje za sezonske vrhunce prodaje.
              </p>
            </div>
            <div className="value-card" data-reveal style={{ transitionDelay: "70ms" }}>
              <div className="value-icon">
                <FiTool size={20} color="#ffffff" />
              </div>
              <h3>Građevina i industrija</h3>
              <p>
                Prevoz teške i vangabaritne robe uz posebnu dozvolu i
                planiranje rute.
              </p>
            </div>
            <div className="value-card" data-reveal style={{ transitionDelay: "140ms" }}>
              <div className="value-icon">
                <FiThermometer size={20} color="#ffffff" />
              </div>
              <h3>Hrana i piće</h3>
              <p>
                Rashladni transport sa kontrolom temperature od utovara do
                isporuke, u skladu sa HACCP standardima.
              </p>
            </div>
            <div className="value-card" data-reveal style={{ transitionDelay: "210ms" }}>
              <div className="value-icon">
                <FiTruck size={20} color="#ffffff" />
              </div>
              <h3>Automobilska industrija</h3>
              <p>
                Just-in-time isporuke delova i komponenti direktno na
                proizvodnu liniju.
              </p>
            </div>
            <div className="value-card" data-reveal style={{ transitionDelay: "280ms" }}>
              <div className="value-icon">
                <FiActivity size={20} color="#ffffff" />
              </div>
              <h3>Farmacija i zdravstvo</h3>
              <p>
                Bezbedan transport osetljivih pošiljki uz punu
                sledljivost i dokumentaciju.
              </p>
            </div>
            <div className="value-card" data-reveal style={{ transitionDelay: "350ms" }}>
              <div className="value-icon">
                <FiPackage size={20} color="#ffffff" />
              </div>
              <h3>Opšta roba</h3>
              <p>
                Univerzalna rešenja za paletizovanu i komadnu robu, bez
                obzira na veličinu pošiljke.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap">
          <div className="faq-top" data-reveal>
            <h2>Često postavljana pitanja</h2>
            <p>
              Pronađite jasne odgovore na najčešća pitanja o našim uslugama
              transporta, praćenja i dostave.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-image" data-reveal>
              <img src="/images/faq-truck.jpg" alt="Kamion na putu" />
            </div>

            <Faq />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta" data-reveal>
          <div className="cta-body">
            <h2>Ne vidite svoju industriju na listi?</h2>
            <p>
              Nema veze — javite nam se i zajedno ćemo osmisliti logističko
              rešenje prilagođeno vašem poslovanju.
            </p>
            <Link href="/kontakt" className="btn btn-primary">
              Razgovarajmo o vašim potrebama
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
