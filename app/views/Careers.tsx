import type { Metadata } from "next";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";
import duskImg from "@/public/images/service-road.jpg";
import JobForm from "../components/JobForm";
import PageHero from "../components/PageHero";
import Photo from "../components/Photo";
import SectionHead from "../components/SectionHead";
import Steps from "../components/Steps";
import { pageMetadata, type Lang } from "../lib/i18n";
import { site } from "../lib/site";

const sr = {
  description:
    "QuinceLogistics zapošljava vozače C+E kategorije za domaći i međunarodni drumski transport. Prijava od prvog dana, ispravna vozila i plata na vreme.",
  heroLabel: "Karijera",
  heroTitle: "Tražimo vozače C+E kategorije.",
  heroLead:
    "Domaće i međunarodne ture, ispravna vozila i plata koja stiže na vreme. Prijava traje par minuta — CV nije obavezan.",
  apply: "Prijavite se",
  jobsLabel: "Otvorene pozicije",
  jobsTitle: "Trenutno zapošljavamo.",
  jobs: [
    {
      title: "Vozač C+E — međunarodni transport",
      text: "Ture između Srbije i zemalja širom Evrope, tegljačem sa poluprikolicom.",
      meta: [
        ["Ture", "Srbija ⇄ cela Evropa"],
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
  ],
  photoAlt: "Kamion u vožnji u sumrak",
  offerLabel: "Šta nudimo",
  offerTitle: "Firma koja poštuje vozače.",
  offer: [
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
      text: "Na putu niste sami — naš dispečerski centar radi 24/7, i kada nešto krene po zlu.",
    },
  ],
  reqLabel: "Šta tražimo",
  reqTitle: "Dokumenta i iskustvo.",
  requirements: [
    ["Dozvola", "C+E kategorija"],
    ["Kod 95", "važeće periodično osposobljavanje"],
    ["Tahograf", "kartica vozača za digitalni tahograf"],
    ["Pasoš", "važeći, za međunarodne ture"],
    ["Iskustvo", "poželjno, nije uslov za domaće ture"],
    ["Jezik", "osnovni engleski ili nemački je prednost"],
  ],
  reqCopy: [
    "Nemate iskustva u međunarodnom transportu? Počnite sa domaćim turama — u posao vas uvodimo postepeno, uz podršku dispečera i iskusnijih kolega.",
    "Ističe vam Kod 95 ili kartica za tahograf? Javite se svejedno — dogovorićemo se oko obnove.",
  ],
  stepsLabel: "Postupak",
  stepsTitle: "Od prijave do prve ture.",
  steps: [
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
  ],
  formLabel: "Prijava",
  formTitle: "Prijavite se za par minuta.",
  callLabel: "Radije zovete?",
  emailLabel: "Email",
  prepareLabel: "Pripremite",
  prepareText:
    "Koje kategorije imate, gde ste do sada vozili i od kada možete da počnete.",
};

const en: typeof sr = {
  description:
    "QuinceLogistics is hiring C+E drivers for domestic and international road freight. Registered employment from day one, roadworthy trucks and pay on time.",
  heroLabel: "Careers",
  heroTitle: "We're hiring C+E drivers.",
  heroLead:
    "Domestic and international routes, well-maintained trucks and pay that arrives on time. Applying takes a few minutes — no CV needed.",
  apply: "Apply now",
  jobsLabel: "Open positions",
  jobsTitle: "Currently hiring.",
  jobs: [
    {
      title: "C+E driver — international transport",
      text: "Runs between Serbia and countries across Europe, driving a tractor unit with a semi-trailer.",
      meta: [
        ["Routes", "Serbia ⇄ all of Europe"],
        ["Rotation", "by agreement"],
        ["Contract", "full-time"],
      ],
    },
    {
      title: "C+E driver — domestic transport",
      text: "Runs within Serbia, with more time at home. A good start for drivers without international experience.",
      meta: [
        ["Routes", "all of Serbia"],
        ["Home time", "more often, by schedule"],
        ["Contract", "full-time"],
      ],
    },
    {
      title: "Open application",
      text: "Don't see a position for you? Send an application — we'll get in touch as soon as a place opens up.",
      meta: [["For", "category C and C+E drivers"]],
    },
  ],
  photoAlt: "Truck on the road at dusk",
  offerLabel: "What we offer",
  offerTitle: "A company that respects its drivers.",
  offer: [
    {
      title: "Paid on time",
      text: "Wages and daily allowances arrive on time, every month. No delays, no excuses.",
    },
    {
      title: "Registered from day one",
      text: "An employment contract with full health and pension insurance from your first working day.",
    },
    {
      title: "Roadworthy trucks",
      text: "Regular servicing and a check before every trip. We won't send you out in a truck we wouldn't drive ourselves.",
    },
    {
      title: "Realistic schedules",
      text: "Your dispatcher plans each trip in advance, with realistic deadlines and the rest time the rules require.",
    },
    {
      title: "Agreed home time",
      text: "Rotations and trips home are agreed in advance, not at the last minute.",
    },
    {
      title: "A dispatcher who answers",
      text: "You're not alone on the road — our dispatch centre works 24/7, including when things go wrong.",
    },
  ],
  reqLabel: "What we're looking for",
  reqTitle: "Documents and experience.",
  requirements: [
    ["Licence", "category C+E"],
    ["Code 95", "valid Driver CPC"],
    ["Tachograph", "driver card for a digital tachograph"],
    ["Passport", "valid, for international routes"],
    ["Experience", "preferred, not required for domestic routes"],
    ["Languages", "basic English or German is an advantage"],
  ],
  reqCopy: [
    "No international experience? Start with domestic routes — we'll bring you up to speed gradually, with support from your dispatcher and more experienced colleagues.",
    "Code 95 or tachograph card about to expire? Get in touch anyway — we'll sort out the renewal together.",
  ],
  stepsLabel: "The process",
  stepsTitle: "From application to your first trip.",
  steps: [
    {
      title: "Application",
      text: "Fill in the form below or give us a call. No CV needed.",
    },
    {
      title: "Interview",
      text: "We'll get back to you within two working days to arrange a short interview.",
    },
    {
      title: "Test drive",
      text: "Get to know the truck and how we work, alongside one of our team.",
    },
    {
      title: "First trip",
      text: "We sign the contract, register your employment and you set off on your first trip.",
    },
  ],
  formLabel: "Apply",
  formTitle: "Apply in a few minutes.",
  callLabel: "Prefer to call?",
  emailLabel: "Email",
  prepareLabel: "Have ready",
  prepareText:
    "Which licence categories you hold, where you've driven so far and when you can start.",
};

const de: typeof sr = {
  description:
    "QuinceLogistics sucht Berufskraftfahrer mit Führerschein CE für nationale und internationale Straßentransporte. Anmeldung ab dem ersten Tag, gepflegte Fahrzeuge und pünktlicher Lohn.",
  heroLabel: "Karriere",
  heroTitle: "Wir suchen Fahrer mit Führerschein CE.",
  heroLead:
    "Nationale und internationale Touren, gepflegte Fahrzeuge und ein Lohn, der pünktlich kommt. Die Bewerbung dauert nur wenige Minuten – ein Lebenslauf ist nicht nötig.",
  apply: "Jetzt bewerben",
  jobsLabel: "Offene Stellen",
  jobsTitle: "Aktuell stellen wir ein.",
  jobs: [
    {
      title: "Berufskraftfahrer CE (m/w/d) – international",
      text: "Touren zwischen Serbien und Ländern in ganz Europa, mit Sattelzugmaschine und Auflieger.",
      meta: [
        ["Touren", "Serbien ⇄ ganz Europa"],
        ["Turnus", "nach Absprache"],
        ["Anstellung", "Vollzeit"],
      ],
    },
    {
      title: "Berufskraftfahrer CE (m/w/d) – Serbien",
      text: "Touren innerhalb Serbiens, häufiger zu Hause. Ein guter Einstieg für Fahrer ohne internationale Erfahrung.",
      meta: [
        ["Touren", "ganz Serbien"],
        ["Zu Hause", "häufiger, nach Plan"],
        ["Anstellung", "Vollzeit"],
      ],
    },
    {
      title: "Initiativbewerbung",
      text: "Keine passende Stelle dabei? Senden Sie uns Ihre Bewerbung – wir melden uns, sobald eine Stelle frei wird.",
      meta: [["Für", "Fahrer mit Führerschein C oder CE"]],
    },
  ],
  photoAlt: "Lkw in der Abenddämmerung",
  offerLabel: "Was wir bieten",
  offerTitle: "Ein Unternehmen, das seine Fahrer respektiert.",
  offer: [
    {
      title: "Pünktlicher Lohn",
      text: "Lohn und Spesen kommen pünktlich, jeden Monat. Ohne Verzögerung und ohne Ausreden.",
    },
    {
      title: "Angemeldet ab dem ersten Tag",
      text: "Arbeitsvertrag mit voller Kranken- und Rentenversicherung ab dem ersten Arbeitstag.",
    },
    {
      title: "Einwandfreie Fahrzeuge",
      text: "Regelmäßige Wartung und eine Kontrolle vor jeder Tour. Wir schicken Sie mit keinem Lkw los, in den wir selbst nicht einsteigen würden.",
    },
    {
      title: "Realistisch geplante Touren",
      text: "Ihr Disponent plant jede Tour im Voraus – mit realistischen Terminen und den vorgeschriebenen Ruhezeiten.",
    },
    {
      title: "Vereinbarte Heimfahrten",
      text: "Turnus und Heimfahrten werden im Voraus vereinbart, nicht in letzter Minute.",
    },
    {
      title: "Ein Disponent, der erreichbar ist",
      text: "Unterwegs sind Sie nicht allein – unsere Disposition ist rund um die Uhr für Sie da, auch wenn etwas schiefläuft.",
    },
  ],
  reqLabel: "Was wir erwarten",
  reqTitle: "Papiere und Erfahrung.",
  requirements: [
    ["Führerschein", "Klasse CE"],
    ["Code 95", "gültige Berufskraftfahrer-Qualifikation"],
    ["Fahrerkarte", "für den digitalen Tachografen"],
    ["Reisepass", "gültig, für internationale Touren"],
    ["Erfahrung", "erwünscht, für Touren in Serbien keine Voraussetzung"],
    ["Sprachen", "Grundkenntnisse in Englisch oder Deutsch sind ein Plus"],
  ],
  reqCopy: [
    "Keine Erfahrung im internationalen Verkehr? Starten Sie mit Touren in Serbien – wir arbeiten Sie Schritt für Schritt ein, mit Unterstützung Ihres Disponenten und erfahrener Kollegen.",
    "Ihr Code 95 oder Ihre Fahrerkarte läuft bald ab? Melden Sie sich trotzdem – um die Verlängerung kümmern wir uns gemeinsam.",
  ],
  stepsLabel: "Ablauf",
  stepsTitle: "Von der Bewerbung bis zur ersten Tour.",
  steps: [
    {
      title: "Bewerbung",
      text: "Füllen Sie das Formular unten aus oder rufen Sie uns an. Ein Lebenslauf ist nicht nötig.",
    },
    {
      title: "Gespräch",
      text: "Wir melden uns innerhalb von zwei Werktagen und vereinbaren ein kurzes Gespräch.",
    },
    {
      title: "Probefahrt",
      text: "Sie lernen das Fahrzeug und unsere Arbeitsweise kennen – zusammen mit jemandem aus unserem Team.",
    },
    {
      title: "Erste Tour",
      text: "Wir unterschreiben den Vertrag, melden Sie an, und Sie starten Ihre erste Tour.",
    },
  ],
  formLabel: "Bewerbung",
  formTitle: "In wenigen Minuten bewerben.",
  callLabel: "Lieber telefonieren?",
  emailLabel: "E-Mail",
  prepareLabel: "Halten Sie bereit",
  prepareText:
    "Welche Führerscheinklassen Sie haben, wo Sie bisher gefahren sind und ab wann Sie anfangen können.",
};

const copy = { sr, en, de };

export const meta = (lang: Lang): Metadata =>
  pageMetadata("careers", lang, copy[lang].description);

export default function Careers({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <>
      <PageHero
        lang={lang}
        label={t.heroLabel}
        title={t.heroTitle}
        lead={t.heroLead}
      >
        <div className="hero-actions">
          <a href="#prijava" className="btn btn-primary">
            {t.apply}
            <FiArrowDown size={18} aria-hidden="true" />
          </a>
          <a href={site.phone.href} className="btn btn-line">
            {site.phone.display}
          </a>
        </div>
      </PageHero>

      <section className="section section-flush">
        <div className="wrap">
          <SectionHead label={t.jobsLabel} title={t.jobsTitle} />
          <ul className="job-list">
            {t.jobs.map((job) => (
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
                  {t.apply}
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
            alt={t.photoAlt}
            ratio="4 / 5"
            sizes="(min-width: 1000px) 50vw, 100vw"
            className="why-photo"
          />
          <div className="why-body" data-reveal>
            <p className="label">{t.offerLabel}</p>
            <h2 className="title">{t.offerTitle}</h2>
            <ul className="reasons">
              {t.offer.map((o) => (
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
          <SectionHead label={t.reqLabel} title={t.reqTitle} />
          <div className="facts-grid">
            <dl className="specs facts" data-reveal>
              {t.requirements.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="facts-copy" data-reveal>
              {t.reqCopy.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <SectionHead label={t.stepsLabel} title={t.stepsTitle} />
          <Steps items={t.steps} />
        </div>
      </section>

      <section className="section" id="prijava">
        <div className="wrap">
          <SectionHead label={t.formLabel} title={t.formTitle} />
          <div className="contact-grid">
            <aside className="contact-info" data-reveal>
              <div className="contact-block">
                <p className="label">{t.callLabel}</p>
                <a href={site.phone.href} className="contact-phone">
                  {site.phone.display}
                </a>
              </div>
              <div className="contact-block">
                <p className="label">{t.emailLabel}</p>
                <a href={`mailto:${site.email}`} className="contact-link">
                  {site.email}
                </a>
              </div>
              <div className="contact-block">
                <p className="label">{t.prepareLabel}</p>
                <p>{t.prepareText}</p>
              </div>
            </aside>
            <JobForm lang={lang} positions={t.jobs.map((job) => job.title)} />
          </div>
        </div>
      </section>
    </>
  );
}
