import type { Metadata } from "next";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — Karapandžić d.o.o.",
  description:
    "Kontaktirajte Karapandžić d.o.o. za ponudu za drumski, pomorski ili vazdušni transport. Odgovaramo u najkraćem roku.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-inner">
          <span className="eyebrow hero-anim" style={{ animationDelay: "0ms" }}>
            Kontakt
          </span>
          <h1 className="hero-anim" style={{ animationDelay: "80ms" }}>
            Razgovarajmo o vašoj sledećoj pošiljci
          </h1>
          <p className="hero-anim" style={{ animationDelay: "160ms" }}>
            Popunite formu ili nas kontaktirajte direktno — naš tim za
            podršku dostupan je 24/7 za sva pitanja i ponude.
          </p>
        </div>
        <div className="wrap">
          <div className="hero-image hero-anim" style={{ animationDelay: "280ms" }}>
            <img
              src="/images/kontakt-support.jpg"
              alt="Korisnička podrška na poziv"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-info-card" data-reveal>
                <div className="contact-info-icon">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h3>Adresa</h3>
                  <p>Industrijska zona bb, 11000 Beograd, Srbija</p>
                </div>
              </div>
              <div
                className="contact-info-card"
                data-reveal
                style={{ transitionDelay: "70ms" }}
              >
                <div className="contact-info-icon">
                  <FiPhone size={20} />
                </div>
                <div>
                  <h3>Telefon</h3>
                  <p>+381 11 123 4567</p>
                </div>
              </div>
              <div
                className="contact-info-card"
                data-reveal
                style={{ transitionDelay: "140ms" }}
              >
                <div className="contact-info-icon">
                  <FiMail size={20} />
                </div>
                <div>
                  <h3>Email</h3>
                  <p>info@karapandzic-logistika.rs</p>
                </div>
              </div>
              <div
                className="contact-info-card"
                data-reveal
                style={{ transitionDelay: "210ms" }}
              >
                <div className="contact-info-icon">
                  <FiClock size={20} />
                </div>
                <div>
                  <h3>Radno vreme</h3>
                  <p>Podrška za praćenje pošiljki dostupna 24/7</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
