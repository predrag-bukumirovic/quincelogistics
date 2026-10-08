import type { Metadata } from "next";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import duskImg from "@/public/images/service-road.jpg";
import JobForm from "../components/JobForm";
import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import SectionHead from "../components/SectionHead";
import Steps from "../components/Steps";
import { site } from "../lib/site";

export const metadata: Metadata = {
  title: "Karijera",
  description:
    "QuinceLogistics zapošljava vozače C+E kategorije za domaći i međunarodni drumski transport. Prijava od prvog dana, ispravna vozila i plata na vreme.",
};

const jobs = [
  {
    title: "Vozač C+E — međunarodni transport",
    text: "Ture između Srbije, zemalja regiona i Evropske unije, tegljačem sa poluprikolicom.",
    meta: [
      ["Ture", "Srbija ⇄ EU i region"],
      ["Turnus", "po dogovoru"],
      ["Angažman", "puno radno vreme"],
    ],
  },
  {
    title: "Vozač C+E — domaći transport",
    text: "Ture po Srbiji, sa češćim dolaskom kući. Dobar početak za vozače bez međunarodnog iskustva.",
    meta: [
      ["Ture", "cela Srbija"],
      ["Kući", "češće, po rasporedu"],
      ["Angažman", "puno radno vreme"],
    ],
  },
  {
    title: "Otvorena prijava",
    text: "Ne vidite poziciju za sebe? Pošaljite prijavu — javljamo se čim se otvori mesto.",
    meta: [["Za", "vozače C i C+E kategorije"]],
  },
];

const offer = [
  {
    title: "Plata na vreme",
    text: "Plata i dnevnice stižu na vreme, svakog meseca. Bez kašnjenja i bez izgovora.",
  },
  {
    title: "Prijava od prvog dana",
    text: "Ugovor o radu i puno zdravstveno i penzijsko osiguranje od prvog radnog dana.",
  },
  {
    title: "Ispravna vozila",
    text: "Redovan servis i provera pre svake ture. Ne šaljemo vas na put kamionom u koji ne bismo seli.",
  },
  {
    title: "Realno planirane ture",
    text: "Dispečer planira turu unapred, sa realnim rokovima i vremenom za odmor po propisima.",
  },
  {
    title: "Dogovoren dolazak kući",
    text: "Turnusi i povratak kući dogovaraju se unapred, a ne u poslednjem trenutku.",
  },
  {
    title: "Dispečer koji se javlja",
    text: "Na putu niste sami — dispečer je tu tokom cele ture, i kada nešto krene po zlu.",
  },
];

const requirements = [
  ["Dozvola", "C+E kategorija"],
  ["Kod 95", "važeće periodično osposobljavanje"],
  ["Tahograf", "kartica vozača za digitalni tahograf"],
  ["Pasoš", "važeći, za međunarodne ture"],
  ["Iskustvo", "poželjno, nije uslov za domaće ture"],
  ["Jezik", "osnovni engleski ili nemački je prednost"],
];

const hiringSteps = [
  {
    title: "Prijava",
    text: "Popunite formu ispod ili nas pozovite. CV nije obavezan.",
  },
  {
    title: "Razgovor",
    text: "Javljamo se u roku od dva radna dana i dogovaramo kratak razgovor.",
  },
  {
    title: "Probna vožnja",
    text: "Upoznajete vozilo i način rada, uz nekog iz naše ekipe.",
  },
  {
    title: "Prva tura",
    text: "Potpisujemo ugovor, prijavljujemo vas i krećete na prvu turu.",
  },
];

export default function KarijeraPage() {
  return (
    <>
      <PageHero
        label="Karijera"
        title="Tražimo vozače C+E kategorije."
        lead="Domaće i međunarodne ture, ispravna vozila i plata koja stiže na vreme. Prijava traje par minuta — CV nije obavezan."
      >
        <div className="hero-actions">
          <a href="#prijava" className="btn btn-primary">
            Prijavite se
            <FiArrowDown size={18} aria-hidden="true" />
          </a>
          <a href={site.phone.href} className="btn btn-line">
            {site.phone.display}
          </a>
        </div>
      </PageHero>

      <section className="section section-flush">
        <div className="wrap">
          <SectionHead
            label="Otvorene pozicije"
            title="Trenutno zapošljavamo."
          />
          <ul className="job-list">
            {jobs.map((job) => (
              <li className="job" key={job.title} data-reveal>
                <div className="job-main">
                  <h3>{job.title}</h3>
                  <p>{job.text}</p>
                </div>
                <dl className="job-meta">
                  {job.meta.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <a href="#prijava" className="link-arrow job-apply">
                  Prijavite se
                  <FiArrowRight size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap why-grid">
          <Photo
            src={duskImg}
            alt="Kamion u vožnji u sumrak"
            ratio="4 / 5"
            sizes="(min-width: 1000px) 50vw, 100vw"
            className="why-photo"
          />
          <div className="why-body" data-reveal>
            <p className="label">
              Šta nudimo
            </p>
            <h2 className="title">Firma koja poštuje vozače.</h2>
            <ul className="reasons">
              {offer.map((o) => (
                <li key={o.title}>
                  <div>
                    <h3>{o.title}</h3>
                    <p>{o.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            label="Šta tražimo"
            title="Dokumenta i iskustvo."
          />
          <div className="facts-grid">
            <dl className="specs facts" data-reveal>
              {requirements.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="facts-copy" data-reveal>
              <p>
                Nemate iskustva u međunarodnom transportu? Počnite sa domaćim
                turama — u posao vas uvodimo postepeno, uz podršku dispečera i
                iskusnijih kolega.
              </p>
              <p>
                Ističe vam Kod 95 ili kartica za tahograf? Javite se svejedno —
                dogovorićemo se oko obnove.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <SectionHead
            label="Postupak"
            title="Od prijave do prve ture."
          />
          <Steps items={hiringSteps} />
        </div>
      </section>

      <section className="section" id="prijava">
        <div className="wrap">
          <SectionHead
            label="Prijava"
            title="Prijavite se za par minuta."
          />
          <div className="contact-grid">
            <aside className="contact-info" data-reveal>
              <div className="contact-block">
                <p className="label">Radije zovete?</p>
                <a href={site.phone.href} className="contact-phone">
                  {site.phone.display}
                </a>
              </div>
              <div className="contact-block">
                <p className="label">Email</p>
                <a href={`mailto:${site.email}`} className="contact-link">
                  {site.email}
                </a>
              </div>
              <div className="contact-block">
                <p className="label">Pripremite</p>
                <p>
                  Koje kategorije imate, gde ste do sada vozili i od kada
                  možete da počnete.
                </p>
              </div>
            </aside>
            <JobForm positions={jobs.map((job) => job.title)} />
          </div>
        </div>
      </section>
    </>
  );
}
