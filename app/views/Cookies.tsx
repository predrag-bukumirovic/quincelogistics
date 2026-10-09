import type { Metadata } from "next";
import Link from "next/link";
import CookieSettingsButton from "../components/CookieSettingsButton";
import PageHero from "../components/PageHero";
import { analyticsItems, necessaryItems, type StoredItem } from "../lib/consent";
import { pageMetadata, pageNames, routes, type Lang } from "../lib/i18n";

const sr = {
  description:
    "Koje kolačiće i slične podatke koristi sajt QuinceLogistics, zašto, koliko dugo i kako možete promeniti svoj izbor.",
  heroTitle: "Kolačići na ovom sajtu.",
  heroLead:
    "Koristimo samo ono što je neophodno da sajt radi, a analitiku samo ako je dozvolite. Izbor možete promeniti bilo kada.",
  whatTitle: "Šta su kolačići",
  whatText:
    "Kolačići su male datoteke koje sajt čuva u vašem pregledaču. Slično rade i zapisi u lokalnom skladištu pregledača (localStorage), koje koristimo za neophodna podešavanja. Za oba važi isto: neophodne koristimo uvek, a sve ostale samo uz vaš pristanak.",
  necessaryTitle: "Neophodni — uvek uključeni",
  necessaryText:
    "Bez njih sajt ne može da zapamti jezik i vaš izbor o kolačićima. Ne koriste se za praćenje.",
  analyticsTitle: "Analitika — samo uz vaš pristanak",
  analyticsText:
    "Pomaže nam da vidimo koje strane se čitaju i sa kojih uređaja, u zbirnom obliku. Ovi kolačići se postavljaju tek kada ih dozvolite.",
  analyticsNone:
    "Trenutno nijedan alat za analitiku nije uključen. Kada ga uključimo, ovde ćemo navesti tačne kolačiće i ponovo vas pitati za pristanak.",
  labels: {
    name: "Naziv",
    provider: "Postavlja",
    purpose: "Svrha",
    duration: "Trajanje",
    type: "Vrsta",
  },
  types: { localStorage: "localStorage", cookie: "Kolačić" },
  changeTitle: "Kako da promenite izbor",
  changeText:
    "Izbor možete promeniti bilo kada — dugmetom ispod ili preko „Podešavanja kolačića“ u dnu svake strane. Kolačiće možete obrisati i u podešavanjima pregledača.",
  changeButton: "Podešavanja kolačića",
  moreTitle: "Više informacija",
  moreText: "Kako obrađujemo lične podatke, opisali smo u",
  moreLink: "politici privatnosti",
  updated: "Poslednja izmena: 9. oktobar 2026.",
};

const en: typeof sr = {
  description:
    "Which cookies and similar data the QuinceLogistics website uses, why, for how long and how you can change your choice.",
  heroTitle: "Cookies on this site.",
  heroLead:
    "We only use what the site needs to work, and analytics only if you allow it. You can change your choice at any time.",
  whatTitle: "What cookies are",
  whatText:
    "Cookies are small files a website stores in your browser. Entries in your browser's local storage (localStorage), which we use for necessary settings, work in a similar way. The same rule applies to both: necessary ones are always used, everything else only with your consent.",
  necessaryTitle: "Necessary — always on",
  necessaryText:
    "Without them the site can't remember your language and your cookie choice. They are not used for tracking.",
  analyticsTitle: "Analytics — only with your consent",
  analyticsText:
    "Helps us see which pages are read and on which devices, in aggregated form. These cookies are only set once you allow them.",
  analyticsNone:
    "No analytics tool is currently enabled. When we enable one, we'll list its exact cookies here and ask for your consent again.",
  labels: {
    name: "Name",
    provider: "Set by",
    purpose: "Purpose",
    duration: "Duration",
    type: "Type",
  },
  types: { localStorage: "localStorage", cookie: "Cookie" },
  changeTitle: "How to change your choice",
  changeText:
    "You can change your choice at any time — with the button below or via “Cookie settings” at the bottom of every page. You can also delete cookies in your browser settings.",
  changeButton: "Cookie settings",
  moreTitle: "More information",
  moreText: "How we process personal data is described in our",
  moreLink: "privacy policy",
  updated: "Last updated: 9 October 2026.",
};

const de: typeof sr = {
  description:
    "Welche Cookies und ähnlichen Daten die Website von QuinceLogistics verwendet, wozu, wie lange und wie Sie Ihre Auswahl ändern können.",
  heroTitle: "Cookies auf dieser Website.",
  heroLead:
    "Wir verwenden nur, was für den Betrieb nötig ist – Analyse nur, wenn Sie zustimmen. Ihre Auswahl können Sie jederzeit ändern.",
  whatTitle: "Was Cookies sind",
  whatText:
    "Cookies sind kleine Dateien, die eine Website in Ihrem Browser speichert. Ähnlich funktionieren Einträge im lokalen Speicher des Browsers (localStorage), die wir für notwendige Einstellungen nutzen. Für beides gilt: Notwendiges verwenden wir immer, alles andere nur mit Ihrer Einwilligung.",
  necessaryTitle: "Notwendig – immer aktiv",
  necessaryText:
    "Ohne sie kann sich die Website Ihre Sprache und Ihre Cookie-Auswahl nicht merken. Sie dienen nicht dem Tracking.",
  analyticsTitle: "Analyse – nur mit Ihrer Einwilligung",
  analyticsText:
    "Zeigt uns in zusammengefasster Form, welche Seiten gelesen werden und auf welchen Geräten. Diese Cookies werden erst gesetzt, wenn Sie zustimmen.",
  analyticsNone:
    "Derzeit ist kein Analyse-Tool aktiv. Sobald wir eines einsetzen, führen wir hier die genauen Cookies auf und bitten Sie erneut um Ihre Einwilligung.",
  labels: {
    name: "Name",
    provider: "Gesetzt von",
    purpose: "Zweck",
    duration: "Dauer",
    type: "Art",
  },
  types: { localStorage: "localStorage", cookie: "Cookie" },
  changeTitle: "So ändern Sie Ihre Auswahl",
  changeText:
    "Sie können Ihre Auswahl jederzeit ändern – über die Schaltfläche unten oder über „Cookie-Einstellungen“ am Ende jeder Seite. Cookies können Sie auch in den Einstellungen Ihres Browsers löschen.",
  changeButton: "Cookie-Einstellungen",
  moreTitle: "Weitere Informationen",
  moreText: "Wie wir personenbezogene Daten verarbeiten, beschreibt unsere",
  moreLink: "Datenschutzerklärung",
  updated: "Stand: 9. Oktober 2026.",
};

const copy = { sr, en, de };

export const meta = (lang: Lang): Metadata =>
  pageMetadata("cookies", lang, copy[lang].description);

function ItemTable({ items, lang }: { items: StoredItem[]; lang: Lang }) {
  const t = copy[lang];
  return (
    <div className="cookie-table">
      {items.map((item) => (
        <dl key={item.name}>
          <div>
            <dt>{t.labels.name}</dt>
            <dd>
              <code>{item.name}</code>
            </dd>
          </div>
          <div>
            <dt>{t.labels.provider}</dt>
            <dd>{item.provider}</dd>
          </div>
          <div>
            <dt>{t.labels.purpose}</dt>
            <dd>{item.purpose[lang]}</dd>
          </div>
          <div>
            <dt>{t.labels.duration}</dt>
            <dd>{item.duration[lang]}</dd>
          </div>
          <div>
            <dt>{t.labels.type}</dt>
            <dd>{t.types[item.type]}</dd>
          </div>
        </dl>
      ))}
    </div>
  );
}

export default function Cookies({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <>
      <PageHero
        lang={lang}
        label={pageNames.cookies[lang]}
        title={t.heroTitle}
        lead={t.heroLead}
      />

      <section className="section section-flush">
        <div className="wrap">
          <div className="legal">
            <section>
              <h2>{t.whatTitle}</h2>
              <p>{t.whatText}</p>
            </section>
            <section>
              <h2>{t.necessaryTitle}</h2>
              <p>{t.necessaryText}</p>
              <ItemTable items={necessaryItems} lang={lang} />
            </section>
            <section>
              <h2>{t.analyticsTitle}</h2>
              <p>{t.analyticsText}</p>
              {analyticsItems.length ? (
                <ItemTable items={analyticsItems} lang={lang} />
              ) : (
                <p>{t.analyticsNone}</p>
              )}
            </section>
            <section>
              <h2>{t.changeTitle}</h2>
              <p>{t.changeText}</p>
              <p>
                <CookieSettingsButton
                  label={t.changeButton}
                  className="btn btn-line legal-button"
                />
              </p>
            </section>
            <section>
              <h2>{t.moreTitle}</h2>
              <p>
                {t.moreText}{" "}
                <Link href={routes.privacy[lang]}>{t.moreLink}</Link>.
              </p>
            </section>
            <p className="legal-updated">{t.updated}</p>
          </div>
        </div>
      </section>
    </>
  );
}
