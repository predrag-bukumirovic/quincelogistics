import type { Metadata } from "next";
import Link from "next/link";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Usluge — Karapandžić d.o.o.",
  description:
    "Drumski, pomorski, vazdušni transport i skladištenje — kompletna logistička rešenja prilagođena vašem poslovanju.",
};

export default function UslugePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap page-hero-inner">
          <span className="eyebrow hero-anim" style={{ animationDelay: "0ms" }}>
            Usluge
          </span>
          <h1 className="hero-anim" style={{ animationDelay: "80ms" }}>
            Logistička rešenja za svaki put
          </h1>
          <p className="hero-anim" style={{ animationDelay: "160ms" }}>
            Od lokalne dostave do međunarodnih pošiljki — biramo transport
            koji najbolje odgovara vašoj robi, roku i budžetu.
          </p>
        </div>
        <div className="wrap">
          <div className="hero-image hero-anim" style={{ animationDelay: "280ms" }}>
            <img src="/images/hero-main.jpg" alt="Kamion na putu u zalasku sunca" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="service-detail">
            <div className="split">
              <div className="split-image" data-reveal>
                <img src="/images/service-road.jpg" alt="Drumski transport" />
              </div>
              <div className="split-content" data-reveal style={{ transitionDelay: "90ms" }}>
                <h2>Drumski transport</h2>
                <p>
                  Naša flota pokriva regionalne i međunarodne rute, uz punu
                  fleksibilnost za celovoznu (FTL) i grupažnu (LTL) dostavu.
                  Svako vozilo je opremljeno GPS praćenjem, tako da uvek
                  znate gde se vaša roba nalazi.
                </p>
                <ul className="feature-list">
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    Celovozne (FTL) i grupažne (LTL) pošiljke
                  </li>
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    Praćenje vozila u realnom vremenu
                  </li>
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    Rashladni transport za osetljivu robu
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-detail">
            <div className="split split-reverse">
              <div className="split-image" data-reveal>
                <img src="/images/service-ocean.jpg" alt="Pomorski transport" />
              </div>
              <div className="split-content" data-reveal style={{ transitionDelay: "90ms" }}>
                <h2>Pomorski transport</h2>
                <p>
                  Za velike i teške pošiljke, pomorski transport nudi
                  najisplativije rešenje. Sarađujemo sa proverenim
                  brodarskim kompanijama na najprometnijim linijama i
                  vodimo kompletnu carinsku dokumentaciju umesto vas.
                </p>
                <ul className="feature-list">
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    FCL i LCL kontejnerske pošiljke
                  </li>
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    Carinsko posredovanje i dokumentacija
                  </li>
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    Pristup lukama širom sveta
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="service-detail">
            <div className="split">
              <div className="split-image" data-reveal>
                <img src="/images/service-air.jpg" alt="Vazdušni transport" />
              </div>
              <div className="split-content" data-reveal style={{ transitionDelay: "90ms" }}>
                <h2>Vazdušni transport</h2>
                <p>
                  Kada je brzina prioritet, vazdušni transport isporučuje
                  vašu robu na drugi kraj sveta za dan ili dva. Idealno za
                  hitne pošiljke, dokumenta i robu visoke vrednosti.
                </p>
                <ul className="feature-list">
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    Ekspresna dostava u roku od 24–48h
                  </li>
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    Osiguranje pošiljke po zahtevu
                  </li>
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    Globalna mreža avio partnera
                  </li>
                </ul>
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
              <div className="split-content" data-reveal style={{ transitionDelay: "90ms" }}>
                <h2>Skladištenje</h2>
                <p>
                  Naši magacini nude bezbedan prostor za kratkoročno i
                  dugoročno skladištenje robe, sa mogućnošću
                  komisioniranja i pripreme pošiljki za dalju distribuciju.
                </p>
                <ul className="feature-list">
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    Kratkoročno i dugoročno skladištenje
                  </li>
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    Komisioniranje i pakovanje pošiljki
                  </li>
                  <li>
                    <span className="check">
                      <FiCheck size={14} />
                    </span>
                    Video nadzor i kontrola pristupa 24/7
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta" data-reveal>
          <div className="cta-body">
            <h2>Niste sigurni koja usluga vam odgovara?</h2>
            <p>
              Naš tim analizira vašu pošiljku i predlaže najbrže i
              najisplativije rešenje — potpuno besplatno.
            </p>
            <Link href="/kontakt" className="btn btn-primary">
              Zatražite besplatnu ponudu
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
