import Link from "next/link";
import {
  FiClock,
  FiRadio,
  FiGlobe,
  FiMessageCircle,
  FiArrowRight,
  FiTruck,
} from "react-icons/fi";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-top">
            <h1
              className="hero-heading hero-anim"
              style={{ animationDelay: "0ms" }}
            >
              Transport & Logistika
            </h1>
            <div className="hero-row">
              <div
                className="hero-thumb hero-anim"
                style={{ animationDelay: "80ms" }}
              >
                <img
                  src="/images/hero-thumb.jpg"
                  alt="Kontejneri i teretno vozilo"
                />
              </div>
              <div
                className="hero-side hero-anim"
                style={{ animationDelay: "180ms" }}
              >
                <p>
                  Naša integrisana logistička rešenja obezbeđuju dosledne i
                  pouzdane performanse.
                </p>
                <Link href="/kontakt" className="btn btn-primary">
                  Zatražite ponudu
                  <FiArrowRight className="btn-arrow" size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="hero-meta hero-anim"
            style={{ animationDelay: "260ms" }}
          >
            <div className="avatar-stack">
              <img src="/images/avatar1.jpg" alt="Klijent" />
              <img src="/images/avatar2.jpg" alt="Klijent" />
              <img src="/images/avatar3.jpg" alt="Klijent" />
            </div>
            <div className="stat">
              <strong data-counter="45" data-counter-suffix="k+">
                0k+
              </strong>
              <span>Zadovoljnih klijenata</span>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div
            className="hero-image hero-anim"
            style={{ animationDelay: "340ms" }}
          >
            <img
              src="/images/hero-main.jpg"
              alt="Kamion na putu u zalasku sunca"
            />
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap trust">
          <div className="trust-grid">
            <h2 className="trust-heading" data-reveal>
              Izgrađeni na poverenju i pouzdanosti
            </h2>
            <div
              className="trust-copy"
              data-reveal
              style={{ transitionDelay: "80ms" }}
            >
              <div className="trust-copy-icon">
                <FiTruck size={22} color="#ffffff" />
              </div>
              <p>
                Sa dugogodišnjim iskustvom u logistici, pojednostavljujemo
                složene lance snabdevanja kombinujući pametno planiranje,
                savremenu tehnologiju i pouzdan transport.
              </p>
            </div>
          </div>

          <div className="trust-images">
            <div className="trust-img-small" data-reveal>
              <img src="/images/trust-ship.jpg" alt="Kontejnerski brod" />
            </div>
            <div
              className="trust-img-large"
              data-reveal
              style={{ transitionDelay: "120ms" }}
            >
              <img
                src="/images/trust-loading.jpg"
                alt="Utovar kontejnera na kamion"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="reliability-heading" data-reveal>
            Pouzdana logistika kakvu zaslužujete
          </h2>

          <div className="reliability-grid">
            <div className="rel-card rel-card-dark" data-reveal>
              <div className="rel-icon">
                <FiClock size={22} color="#ffffff" />
              </div>
              <div>
                <h3>10+ godina iskustva</h3>
                <p>
                  Sa dugogodišnjim iskustvom u logistici pružamo brzu, pouzdanu
                  i efikasnu dostavu.
                </p>
              </div>
            </div>

            <div
              className="rel-image"
              data-reveal
              style={{ transitionDelay: "90ms" }}
            >
              <img
                src="/images/reliability-truck.jpg"
                alt="Kamion na otvorenom putu"
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                className="rel-card rel-card-light"
                data-reveal
                style={{ transitionDelay: "60ms" }}
              >
                <div className="rel-icon alt">
                  <FiRadio size={20} color="#e2601f" />
                </div>
                <div>
                  <h3>Praćenje uživo</h3>
                  <p>
                    Naš napredni sistem obezbeđuje praćenje pošiljki u realnom
                    vremenu.
                  </p>
                </div>
              </div>
              <div
                className="rel-card rel-card-light"
                data-reveal
                style={{ transitionDelay: "140ms" }}
              >
                <div className="rel-icon alt">
                  <FiGlobe size={20} color="#e2601f" />
                </div>
                <div>
                  <h3>Globalni partner</h3>
                  <p>
                    Sarađujemo sa proverenim prevoznicima i logističkim
                    partnerima širom sveta.
                  </p>
                </div>
              </div>
              <div
                className="rel-card rel-card-light"
                data-reveal
                style={{ transitionDelay: "220ms" }}
              >
                <div className="rel-icon alt">
                  <FiMessageCircle size={20} color="#e2601f" />
                </div>
                <div>
                  <h3>Podrška korisnicima</h3>
                  <p>
                    Naš tim za podršku dostupan je 24/7 za sva pitanja i
                    praćenje pošiljki.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap">
          <div className="services-head" data-reveal>
            <h2>Pružamo najbolje logističke usluge</h2>
            <p>
              Doživite pouzdanu i efikasnu logistiku prilagođenu bezbednom
              prevozu vaše robe — vazdušnim, pomorskim ili drumskim putem.
            </p>
            <Link
              href="/usluge"
              className="btn btn-primary"
              style={{ alignSelf: "flex-start" }}
            >
              Pogledaj sve usluge
              <FiArrowRight className="btn-arrow" size={16} />
            </Link>
          </div>

          <div className="services-grid">
            <div className="service-card service-card-large" data-reveal>
              <img src="/images/service-air.jpg" alt="Vazdušni transport" />
              <div className="service-card-body">
                <h3>Vazdušni transport</h3>
                <p>
                  Pouzdane usluge vazdušnog transporta koje kombinuju brzinu,
                  sigurnost i praćenje pošiljki širom sveta.
                </p>
              </div>
            </div>
            <div
              className="service-card"
              data-reveal
              style={{ transitionDelay: "90ms" }}
            >
              <img src="/images/service-ocean.jpg" alt="Pomorski transport" />
              <div className="service-card-body">
                <h3>Pomorski transport</h3>
                <p>
                  Pouzdan i isplativ prevoz robe brodom širom sveta, uz bezbednu
                  i tačnu dostavu.
                </p>
              </div>
            </div>
            <div
              className="service-card"
              data-reveal
              style={{ transitionDelay: "180ms" }}
            >
              <img src="/images/service-road.jpg" alt="Drumski transport" />
              <div className="service-card-body">
                <h3>Drumski transport</h3>
                <p>
                  Efikasna i pouzdana drumska rešenja za prevoz robe sigurno
                  širom gradova i država.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Testimonials />
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
            <h2>Pridružite se hiljadama za prevoz robe</h2>
            <p>
              Uživajte u bržim isporukama, pametnijem rutiranju i potpunoj
              transparentnosti. Postanite naš partner i unapredite svoju
              logistiku već danas.
            </p>
            <Link href="/kontakt" className="btn btn-primary">
              Započnite odmah
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
