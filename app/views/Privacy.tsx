import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import PageHero from "../components/PageHero";
import { pageMetadata, pageNames, routes, type Lang } from "../lib/i18n";
import { site } from "../lib/site";

type Section = { id?: string; title: string; text?: string[]; list?: string[] };

const { address } = site;

const sr = {
  description:
    "Kako QuinceLogistics prikuplja, koristi i čuva podatke iz forme za ponudu i prijave za posao, i kada koristi kolačiće.",
  heroTitle: "Kako postupamo sa vašim podacima.",
  heroLead:
    "Sajt prikuplja samo podatke koje sami pošaljete — preko forme za ponudu ili prijave za posao. Analitiku koristimo samo ako je dozvolite.",
  updated: "Poslednja izmena: 9. oktobar 2026.",
  sections: [
    {
      title: "Ko obrađuje podatke",
      text: [
        `${site.name}, ${address.street}, ${address.postalCode} ${address.city.sr}, ${address.country.sr}. PIB ${site.pib}, matični broj ${site.mb}.`,
        `Za sva pitanja o podacima pišite nam na ${site.email}.`,
      ],
    },
    {
      title: "Koje podatke prikupljamo",
      list: [
        "Upit za ponudu: ime i prezime, firma, e-mail, telefon, podaci o relaciji i robi i napomena koju unesete.",
        "Prijava za posao: ime i prezime, telefon, e-mail, mesto stanovanja, pozicija, dokumenta, iskustvo i napomena koju unesete.",
        "Kada nas kontaktirate telefonom, e-mailom ili preko WhatsApp-a: podaci koje nam tom prilikom pošaljete.",
        "Ako dozvolite analitiku: podaci o tome kako koristite sajt (posećene strane, vrsta uređaja i pregledača, približna lokacija), u zbirnom obliku.",
      ],
    },
    {
      title: "Zašto i na osnovu čega",
      text: [
        "Podatke iz upita koristimo da pripremimo ponudu i dogovorimo prevoz, a podatke iz prijave da sprovedemo postupak zapošljavanja. U oba slučaja reč je o radnjama koje preduzimamo na vaš zahtev pre zaključenja ugovora (član 12. stav 1. tačka 2) Zakona o zaštiti podataka o ličnosti, odnosno član 6. stav 1. tačka (b) GDPR-a).",
        "Analitiku koristimo samo na osnovu vašeg pristanka (član 12. stav 1. tačka 1) Zakona o zaštiti podataka o ličnosti, odnosno član 6. stav 1. tačka (a) GDPR-a), koji možete povući bilo kada.",
        "Podatke ne koristimo za reklame i ne prodajemo ih.",
      ],
    },
    {
      title: "Koliko dugo ih čuvamo",
      list: [
        "Upite čuvamo dok traje dogovor o ponudi, a najduže 12 meseci od poslednjeg kontakta. Ako zaključimo ugovor, podatke čuvamo onoliko koliko propisi o računovodstvu i prevozu nalažu.",
        "Prijave za posao čuvamo do završetka konkursa, a najduže 6 meseci. Duže ih čuvamo samo ako nam to dozvolite, radi budućih konkursa.",
      ],
    },
    {
      title: "Ko ima pristup podacima",
      text: [
        "Samo zaposleni koji pripremaju ponudu ili vode zapošljavanje, pružaoci usluga hostinga i e-pošte koji podatke obrađuju po našem nalogu i — ako dozvolite analitiku — pružalac alata za analitiku. Ako se podaci pri tome obrađuju van Srbije, to je moguće samo uz mere zaštite koje propisuje zakon.",
      ],
    },
    {
      id: "cookies",
      title: "Kolačići i podaci u pregledaču",
      text: [
        "U vašem pregledaču uvek čuvamo samo ono što je neophodno: izabrani jezik i vaš izbor o kolačićima. Analitičke kolačiće postavljamo samo ako ih dozvolite. Spisak, svrhu i trajanje navodimo u politici kolačića, a izbor možete promeniti bilo kada preko „Podešavanja kolačića“ u dnu strane.",
      ],
    },
    {
      title: "Vaša prava",
      text: [
        `Možete tražiti pristup svojim podacima, njihovu ispravku ili brisanje, ograničenje obrade i prenos podataka, kao i uložiti prigovor na obradu. Dovoljno je da nam pišete na ${site.email}.`,
        "Ako smatrate da podatke obrađujemo suprotno propisima, možete podneti pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti (www.poverenik.rs), a ako živite u Evropskoj uniji i nadzornom organu u svojoj zemlji.",
      ],
    },
  ] as Section[],
};

const en: typeof sr = {
  description:
    "How QuinceLogistics collects, uses and stores data from the quote and job application forms, and when it uses cookies.",
  heroTitle: "How we handle your data.",
  heroLead:
    "This site only collects the data you send us yourself — through the quote form or a job application. We use analytics only if you allow it.",
  updated: "Last updated: 9 October 2026.",
  sections: [
    {
      title: "Who processes the data",
      text: [
        `${site.name}, ${address.street}, ${address.postalCode} ${address.city.en}, ${address.country.en}. Tax ID (PIB) ${site.pib}, registration number (MB) ${site.mb}.`,
        `For any questions about your data, email us at ${site.email}.`,
      ],
    },
    {
      title: "What we collect",
      list: [
        "Quote requests: name, company, email, phone, route and cargo details, and any notes you add.",
        "Job applications: name, phone, email, town or city, position, documents, experience and any notes you add.",
        "When you contact us by phone, email or WhatsApp: the information you send us.",
        "If you allow analytics: how you use the site (pages visited, device and browser type, approximate location), in aggregated form.",
      ],
    },
    {
      title: "Why, and on what legal basis",
      text: [
        "We use quote request data to prepare a quote and arrange transport, and application data to run the recruitment process. In both cases these are steps taken at your request before entering into a contract (Article 12(1)(2) of the Serbian Personal Data Protection Act and Article 6(1)(b) GDPR).",
        "We use analytics only on the basis of your consent (Article 12(1)(1) of the Serbian Personal Data Protection Act and Article 6(1)(a) GDPR), which you can withdraw at any time.",
        "We do not use your data for advertising and we do not sell it.",
      ],
    },
    {
      title: "How long we keep it",
      list: [
        "Quote requests are kept while the quote is being discussed, and for no longer than 12 months after the last contact. If we sign a contract, we keep the data for as long as accounting and transport regulations require.",
        "Job applications are kept until the vacancy is filled, and for no longer than 6 months. We keep them longer only with your permission, for future vacancies.",
      ],
    },
    {
      title: "Who can access it",
      text: [
        "Only the staff who prepare quotes or handle recruitment, the hosting and email providers that process data on our behalf and — if you allow analytics — the analytics provider. Where data is processed outside Serbia, this happens only with the safeguards required by law.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and browser storage",
      text: [
        "Your browser always stores only what is necessary: your chosen language and your cookie choice. Analytics cookies are set only if you allow them. The full list, purpose and duration are in our cookie policy, and you can change your choice at any time via “Cookie settings” at the bottom of the page.",
      ],
    },
    {
      title: "Your rights",
      text: [
        `You can ask for access to your data, its correction or deletion, restriction of processing and data portability, and you can object to processing. Just email us at ${site.email}.`,
        "If you believe we process your data unlawfully, you can lodge a complaint with the Serbian Commissioner for Information of Public Importance and Personal Data Protection (www.poverenik.rs) or, if you live in the European Union, with the supervisory authority in your country.",
      ],
    },
  ],
};

const de: typeof sr = {
  description:
    "Wie QuinceLogistics Daten aus dem Anfrage- und Bewerbungsformular erhebt, nutzt und speichert – und wann Cookies verwendet werden.",
  heroTitle: "Wie wir mit Ihren Daten umgehen.",
  heroLead:
    "Diese Website erhebt nur Daten, die Sie uns selbst senden – über das Anfrageformular oder eine Bewerbung. Analyse-Tools nutzen wir nur mit Ihrer Einwilligung.",
  updated: "Stand: 9. Oktober 2026.",
  sections: [
    {
      title: "Verantwortlicher",
      text: [
        `${site.name}, ${address.street}, ${address.postalCode} ${address.city.de}, ${address.country.de}. Steuernummer (PIB) ${site.pib}, Registernummer (MB) ${site.mb}.`,
        `Bei Fragen zu Ihren Daten schreiben Sie uns an ${site.email}.`,
      ],
    },
    {
      title: "Welche Daten wir erheben",
      list: [
        "Anfragen: Name, Firma, E-Mail, Telefon, Angaben zu Strecke und Ware sowie Ihre Anmerkungen.",
        "Bewerbungen: Name, Telefon, E-Mail, Wohnort, Stelle, Dokumente, Erfahrung sowie Ihre Anmerkungen.",
        "Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren: die Angaben, die Sie uns dabei senden.",
        "Wenn Sie der Analyse zustimmen: wie Sie die Website nutzen (besuchte Seiten, Geräte- und Browsertyp, ungefährer Standort), in zusammengefasster Form.",
      ],
    },
    {
      title: "Zweck und Rechtsgrundlage",
      text: [
        "Daten aus Anfragen nutzen wir, um ein Angebot zu erstellen und den Transport zu vereinbaren, Daten aus Bewerbungen für das Auswahlverfahren. In beiden Fällen handelt es sich um Maßnahmen auf Ihre Anfrage vor Abschluss eines Vertrags (Art. 12 Abs. 1 Nr. 2 des serbischen Datenschutzgesetzes und Art. 6 Abs. 1 lit. b DSGVO).",
        "Analyse-Tools nutzen wir nur auf Grundlage Ihrer Einwilligung (Art. 12 Abs. 1 Nr. 1 des serbischen Datenschutzgesetzes und Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit widerrufen können.",
        "Wir nutzen Ihre Daten nicht für Werbung und verkaufen sie nicht.",
      ],
    },
    {
      title: "Speicherdauer",
      list: [
        "Anfragen speichern wir, solange das Angebot besprochen wird, höchstens jedoch 12 Monate nach dem letzten Kontakt. Kommt ein Vertrag zustande, bewahren wir die Daten so lange auf, wie es buchhalterische und transportrechtliche Vorschriften verlangen.",
        "Bewerbungen speichern wir bis zum Abschluss des Auswahlverfahrens, höchstens 6 Monate. Länger nur mit Ihrer Einwilligung, für künftige Stellen.",
      ],
    },
    {
      title: "Empfänger",
      text: [
        "Nur die Mitarbeiter, die Angebote erstellen oder Bewerbungen bearbeiten, Hosting- und E-Mail-Dienstleister, die Daten in unserem Auftrag verarbeiten, sowie – wenn Sie der Analyse zustimmen – der Anbieter des Analyse-Tools. Werden Daten dabei außerhalb Serbiens verarbeitet, geschieht das nur mit den gesetzlich vorgeschriebenen Garantien.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies und Speicherung im Browser",
      text: [
        "In Ihrem Browser speichern wir immer nur das Notwendige: die gewählte Sprache und Ihre Cookie-Auswahl. Analyse-Cookies setzen wir nur, wenn Sie zustimmen. Liste, Zweck und Dauer finden Sie in unserer Cookie-Richtlinie; Ihre Auswahl können Sie jederzeit über „Cookie-Einstellungen“ am Ende der Seite ändern.",
      ],
    },
    {
      title: "Ihre Rechte",
      text: [
        `Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit sowie das Recht, der Verarbeitung zu widersprechen. Schreiben Sie uns einfach an ${site.email}.`,
        "Wenn Sie der Meinung sind, dass wir Ihre Daten rechtswidrig verarbeiten, können Sie sich beim serbischen Beauftragten für Informationen von öffentlicher Bedeutung und Datenschutz (www.poverenik.rs) beschweren – oder, wenn Sie in der Europäischen Union leben, bei der Aufsichtsbehörde in Ihrem Land.",
      ],
    },
  ],
};

const copy = { sr, en, de };

export const meta = (lang: Lang): Metadata =>
  pageMetadata("privacy", lang, copy[lang].description);

export default function Privacy({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <>
      <PageHero
        lang={lang}
        label={pageNames.privacy[lang]}
        title={t.heroTitle}
        lead={t.heroLead}
      />

      <section className="section section-flush">
        <div className="wrap">
          <div className="legal">
            {t.sections.map((s) => (
              <section key={s.title}>
                <h2>{s.title}</h2>
                {s.text?.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {s.id === "cookies" && (
                  <p>
                    <Link href={routes.cookies[lang]} className="link-arrow">
                      {pageNames.cookies[lang]}
                      <FiArrowRight size={16} aria-hidden="true" />
                    </Link>
                  </p>
                )}
              </section>
            ))}
            <p className="legal-updated">{t.updated}</p>
          </div>
        </div>
      </section>
    </>
  );
}
