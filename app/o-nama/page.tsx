import type { Metadata } from "next";
import Link from "next/link";
import {
  FiCompass,
  FiShield,
  FiUsers,
  FiTrendingUp,
  FiArrowRight,
} from "react-icons/fi";

export const metadata: Metadata = {
  title: "O nama — Karapandžić d.o.o.",
  description:
    "Upoznajte Karapandžić d.o.o. — porodičnu logističku kompaniju sa preko 10 godina iskustva u drumskom, pomorskom i vazdušnom transportu.",
};

export default function ONamaPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-inner">
          <span className="eyebrow hero-anim" style={{ animationDelay: "0ms" }}>
            O nama
          </span>
          <h1 className="hero-anim" style={{ animationDelay: "80ms" }}>
            Gradimo pouzdanost, kilometar po kilometar
          </h1>
          <p className="hero-anim" style={{ animationDelay: "160ms" }}>
            Karapandžić d.o.o. je porodična logistička kompanija koja već
            deceniju povezuje klijente sa svetom — brzo, sigurno i bez
            komplikacija.
          </p>
        </div>
        <div className="wrap">
          <div className="hero-image hero-anim" style={{ animationDelay: "280ms" }}>
            <img src="/images/about-team.jpg" alt="Tim kompanije Karapandžić" />
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
              <strong>120+</strong>
              <span>Vozila i partnera u floti</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap">
          <div className="split">
            <div className="split-image" data-reveal>
              <img
                src="/images/about-handshake.jpg"
                alt="Rukovanje sa poslovnim partnerom u magacinu"
              />
            </div>
            <div className="split-content" data-reveal style={{ transitionDelay: "90ms" }}>
              <h2>Od malog vozila do regionalne mreže</h2>
              <p>
                Karapandžić je osnovan sa jednim kamionom i jasnom idejom —
                da isporuka robe ne mora da bude nepredvidiva. Danas
                upravljamo kombinovanom flotom vozila i pouzdanom mrežom
                pomorskih i vazdušnih partnera, ali princip je ostao isti:
                svaka pošiljka se tretira kao da je naša.
              </p>
              <p>
                Kombinacijom iskustva, savremene tehnologije za praćenje
                pošiljki i pažljivo biranih partnera, izgradili smo repuaciju
                kompanije na koju se klijenti oslanjaju kada je vreme
                isporuke kritično.
              </p>
              <Link href="/usluge" className="btn btn-dark" style={{ marginTop: 8 }}>
                Pogledaj naše usluge
                <FiArrowRight className="btn-arrow" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="reliability-heading" data-reveal>
            Vrednosti koje nas vode
          </h2>

          <div className="values-grid">
            <div className="value-card" data-reveal>
              <div className="value-icon">
                <FiShield size={20} color="#ffffff" />
              </div>
              <h3>Pouzdanost</h3>
              <p>
                Rokovi koje obećamo su rokovi koje ispunjavamo — bez izgovora
                i bez iznenađenja.
              </p>
            </div>
            <div className="value-card" data-reveal style={{ transitionDelay: "70ms" }}>
              <div className="value-icon">
                <FiCompass size={20} color="#ffffff" />
              </div>
              <h3>Transparentnost</h3>
              <p>
                Jasne cene, jasna dokumentacija i praćenje pošiljke u realnom
                vremenu, u svakom trenutku.
              </p>
            </div>
            <div className="value-card" data-reveal style={{ transitionDelay: "140ms" }}>
              <div className="value-icon">
                <FiUsers size={20} color="#ffffff" />
              </div>
              <h3>Partnerstvo</h3>
              <p>
                Ne tražimo jednokratne poslove — gradimo dugoročne odnose sa
                klijentima i vozačima.
              </p>
            </div>
            <div className="value-card" data-reveal style={{ transitionDelay: "210ms" }}>
              <div className="value-icon">
                <FiTrendingUp size={20} color="#ffffff" />
              </div>
              <h3>Stalan razvoj</h3>
              <p>
                Ulažemo u tehnologiju i ljude kako bismo svake godine bili
                brži i efikasniji.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap">
          <h2 className="reliability-heading" data-reveal>
            Naš put do danas
          </h2>

          <div className="timeline" style={{ maxWidth: 640, margin: "0 auto" }}>
            <div className="timeline-item" data-reveal>
              <span className="timeline-year">2014.</span>
              <h3>Osnivanje kompanije</h3>
              <p>
                Karapandžić počinje sa radom sa jednim kamionom i fokusom na
                regionalni drumski transport.
              </p>
            </div>
            <div className="timeline-item" data-reveal style={{ transitionDelay: "80ms" }}>
              <span className="timeline-year">2017.</span>
              <h3>Proširenje flote</h3>
              <p>
                Flota raste na desetine vozila, a usluge se šire na
                međunarodni drumski transport širom Evrope.
              </p>
            </div>
            <div className="timeline-item" data-reveal style={{ transitionDelay: "160ms" }}>
              <span className="timeline-year">2020.</span>
              <h3>Pomorski i vazdušni transport</h3>
              <p>
                Uspostavljamo partnerstva sa pomorskim i avio prevoznicima i
                nudimo kompletna logistička rešenja.
              </p>
            </div>
            <div className="timeline-item" data-reveal style={{ transitionDelay: "240ms" }}>
              <span className="timeline-year">2023.</span>
              <h3>Digitalno praćenje pošiljki</h3>
              <p>
                Uvodimo sistem za praćenje pošiljki u realnom vremenu i
                korisnički portal za klijente.
              </p>
            </div>
            <div className="timeline-item" data-reveal style={{ transitionDelay: "320ms" }}>
              <span className="timeline-year">2026.</span>
              <h3>45.000+ isporučenih pošiljki</h3>
              <p>
                Danas smo pouzdan partner za preko 45.000 zadovoljnih
                klijenata širom regiona i sveta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta" data-reveal>
          <div className="cta-body">
            <h2>Postanite deo naše priče</h2>
            <p>
              Bilo da šaljete prvu pošiljku ili tražite dugoročnog logističkog
              partnera, tu smo da pomognemo.
            </p>
            <Link href="/kontakt" className="btn btn-primary">
              Kontaktirajte nas
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
