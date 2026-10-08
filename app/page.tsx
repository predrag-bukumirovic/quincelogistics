import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import heroImg from "@/public/images/hero-main.jpg";
import duskImg from "@/public/images/service-road.jpg";
import highwayImg from "@/public/images/reliability-truck.jpg";
import CtaBand from "./components/CtaBand";
import FaqSection from "./components/FaqSection";
import Marquee from "./components/Marquee";
import Photo from "./components/Photo";
import SectionHead from "./components/SectionHead";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import { reasons, services } from "./lib/content";
import { site } from "./lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-kicker hero-anim">
            <span>Drumski transport robe</span>
            <span>Srbija · Region · EU</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-line">
              <span className="hero-line-inner">Od rampe</span>
              <span className="route" aria-hidden="true" />
            </span>
            <span className="hero-line hero-line-end">
              <span className="route" aria-hidden="true" />
              <span className="hero-line-inner">do rampe.</span>
            </span>
          </h1>
          <div className="hero-foot hero-anim" style={{ animationDelay: "260ms" }}>
            <p className="lead">
              Domaći i međunarodni drumski transport — kompletni i zbirni
              utovari za firme iz Srbije, regiona i EU. Jedan dispečer prati
              vašu turu od utovara do istovara.
            </p>
            <div className="hero-actions">
              <Link href="/kontakt" className="btn btn-primary">
                Zatražite ponudu
                <FiArrowUpRight size={18} aria-hidden="true" />
              </Link>
              <a href={site.phone.href} className="btn btn-line">
                {site.phone.display}
              </a>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-photo">
            <Image
              src={heroImg}
              alt="Šleper na otvorenom putu"
              fill
              preload
              placeholder="blur"
              sizes="100vw"
            />
          </div>
          <div className="wrap hero-strip-wrap">
            <ul className="hero-strip">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/usluge#${s.id}`}>
                    <span className="hero-strip-num">{s.tag}</span>
                    <strong>{s.title}</strong>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            label="Ko smo mi"
            title={
              <>
                <span className="muted">
                  Ne vozimo brodove, avione ni vozove.
                </span>{" "}
                Samo kamione — i zato svaku turu planiramo do poslednje palete.
              </>
            }
          />
          <div className="about-grid">
            <div className="about-copy" data-reveal>
              <p>
                QuinceLogistics je transportna firma iz Srbije specijalizovana
                za drumski prevoz robe. Radimo sa proizvodnim, trgovinskim i
                građevinskim firmama kojima je važno da roba stigne kada je
                dogovoreno — i da u svakom trenutku znaju gde je.
              </p>
              <Link href="/o-nama" className="link-arrow">
                Više o nama
                <FiArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <Photo
              src={duskImg}
              alt="Kamion u vožnji u sumrak"
              ratio="4 / 5"
              sizes="(min-width: 1000px) 34vw, 100vw"
              className="about-photo"
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <SectionHead
            label="Usluge"
            title="Četiri vrste prevoza. Sve kamionom."
            lead="Od jedne palete do punog šlepera, po Srbiji ili preko granice — birate prevoz prema količini robe i roku."
          />
          <ul className="svc-list">
            {services.map((s) => (
              <li key={s.id} data-reveal>
                <Link href={`/usluge#${s.id}`} className="svc-row">
                  <span className="svc-title">
                    <small>{s.tag}</small>
                    {s.title}
                  </span>
                  <span className="svc-text">{s.short}</span>
                  <span className="svc-arrow" aria-hidden="true">
                    <FiArrowUpRight size={20} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            label="Kako radimo"
            title="Od upita do potpisanog CMR-a."
          />
          <Steps />
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="wrap why-grid">
          <Photo
            src={highwayImg}
            alt="Šleper na autoputu pod oblačnim nebom"
            ratio="5 / 4"
            sizes="(min-width: 1000px) 50vw, 100vw"
            className="why-photo"
          />
          <div className="why-body" data-reveal>
            <p className="label">
              Zašto Quince
            </p>
            <h2 className="title">Manje poziva. Više isporuka na vreme.</h2>
            <ul className="reasons">
              {reasons.map((r) => (
                <li key={r.title}>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
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

      <FaqSection />

      <CtaBand />
    </>
  );
}
