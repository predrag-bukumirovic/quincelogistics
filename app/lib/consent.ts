import type { Lang } from "./i18n";

/*
 * Saglasnost za kolačiće.
 *
 * Google Analytics se uključuje promenljivom okruženja NEXT_PUBLIC_GA_ID
 * (npr. G-XXXXXXX) u podešavanjima hostinga — bez nje se ništa ne učitava.
 * Skripta se učitava tek kada posetilac dozvoli analitiku.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const CONSENT_KEY = "ql-consent";
export const CONSENT_EVENT = "ql-consent";
export const OPEN_SETTINGS_EVENT = "ql-cookie-settings";

// Verzija zavisi od uključenih alata: kada se doda novi, svi se pitaju ponovo.
export const CONSENT_VERSION = ["1", GA_ID && "ga"].filter(Boolean).join("|");

// Pristanak važi godinu dana, posle toga se traži ponovo.
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export type Consent = { v: string; at: string; analytics: boolean };

export function parseConsent(raw: string | null): Consent | null {
  if (!raw) return null;
  try {
    const c = JSON.parse(raw) as Consent;
    const age = Date.now() - new Date(c.at).getTime();
    return c.v === CONSENT_VERSION && age < MAX_AGE_MS ? c : null;
  } catch {
    return null;
  }
}

export function readConsent(): Consent | null {
  try {
    return parseConsent(localStorage.getItem(CONSENT_KEY));
  } catch {
    return null;
  }
}

export function saveConsent(analytics: boolean) {
  const c: Consent = {
    v: CONSENT_VERSION,
    at: new Date().toISOString(),
    analytics,
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
  } catch {
    // Blokirano skladište — izbor važi samo za ovu posetu.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

/** Briše kolačiće Google Analytics-a kada posetilac povuče pristanak. */
export function removeAnalyticsCookies() {
  const host = location.hostname;
  const base = host.split(".").slice(-2).join(".");
  document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => /^(_ga|_gid|_gat)/.test(name))
    .forEach((name) => {
      for (const domain of ["", host, `.${base}`]) {
        document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
      }
    });
}

// Spisak za Politiku kolačića — prikazuje samo ono što je stvarno uključeno.
type Text = Record<Lang, string>;

export type StoredItem = {
  name: string;
  provider: string;
  type: "localStorage" | "cookie";
  purpose: Text;
  duration: Text;
};

export const necessaryItems: StoredItem[] = [
  {
    name: "ql-lang",
    provider: "QuinceLogistics",
    type: "localStorage",
    purpose: {
      sr: "Pamti jezik koji ste izabrali.",
      en: "Remembers the language you chose.",
      de: "Speichert die gewählte Sprache.",
    },
    duration: {
      sr: "Dok ga ne obrišete",
      en: "Until you delete it",
      de: "Bis Sie ihn löschen",
    },
  },
  {
    name: CONSENT_KEY,
    provider: "QuinceLogistics",
    type: "localStorage",
    purpose: {
      sr: "Pamti vaš izbor o kolačićima.",
      en: "Remembers your cookie choice.",
      de: "Speichert Ihre Cookie-Auswahl.",
    },
    duration: { sr: "12 meseci", en: "12 months", de: "12 Monate" },
  },
];

const twoYears = { sr: "2 godine", en: "2 years", de: "2 Jahre" };

export const analyticsItems: StoredItem[] = GA_ID
  ? [
      {
        name: "_ga",
        provider: "Google Analytics",
        type: "cookie",
        purpose: {
          sr: "Razlikuje posetioce, za zbirnu statistiku poseta.",
          en: "Distinguishes visitors, for aggregated visit statistics.",
          de: "Unterscheidet Besucher für zusammengefasste Besuchsstatistiken.",
        },
        duration: twoYears,
      },
      {
        name: `_ga_${GA_ID.replace(/^G-/, "")}`,
        provider: "Google Analytics",
        type: "cookie",
        purpose: {
          sr: "Čuva stanje posete (sesije).",
          en: "Keeps the state of the visit (session).",
          de: "Speichert den Status des Besuchs (Sitzung).",
        },
        duration: twoYears,
      },
    ]
  : [];
