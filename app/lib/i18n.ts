import type { Metadata } from "next";

export type Lang = "sr" | "en" | "de";

// Redosled je i redosled u prekidaču i na ekranu za izbor jezika.
export const langs: Lang[] = ["sr", "en", "de"];

// Adrese svih strana na svim jezicima. Srpski je na korenu sajta, ostali pod /en, /de…
export const routes = {
  home: { sr: "/", en: "/en", de: "/de" },
  about: { sr: "/o-nama", en: "/en/about", de: "/de/ueber-uns" },
  services: { sr: "/usluge", en: "/en/services", de: "/de/leistungen" },
  solutions: { sr: "/resenja", en: "/en/solutions", de: "/de/loesungen" },
  references: { sr: "/reference", en: "/en/references", de: "/de/referenzen" },
  careers: { sr: "/karijera", en: "/en/careers", de: "/de/karriere" },
  contact: { sr: "/kontakt", en: "/en/contact", de: "/de/kontakt" },
  privacy: {
    sr: "/politika-privatnosti",
    en: "/en/privacy-policy",
    de: "/de/datenschutz",
  },
  cookies: {
    sr: "/politika-kolacica",
    en: "/en/cookie-policy",
    de: "/de/cookie-richtlinie",
  },
} satisfies Record<string, Record<Lang, string>>;

export type Page = keyof typeof routes;

export const pageNames: Record<Page, Record<Lang, string>> = {
  home: { sr: "Početna", en: "Home", de: "Startseite" },
  about: { sr: "O nama", en: "About", de: "Über uns" },
  services: { sr: "Usluge", en: "Services", de: "Leistungen" },
  solutions: { sr: "Rešenja", en: "Solutions", de: "Lösungen" },
  references: { sr: "Reference", en: "References", de: "Referenzen" },
  careers: { sr: "Karijera", en: "Careers", de: "Karriere" },
  contact: { sr: "Kontakt", en: "Contact", de: "Kontakt" },
  privacy: { sr: "Politika privatnosti", en: "Privacy policy", de: "Datenschutz" },
  cookies: { sr: "Politika kolačića", en: "Cookie policy", de: "Cookie-Richtlinie" },
};

export const languageNames: Record<Lang, string> = {
  sr: "Srpski",
  en: "English",
  de: "Deutsch",
};

// Jezici pregledača koji se prepoznaju kao naši (hr, bs… → srpski).
export const langAliases: Record<string, Lang> = {
  sr: "sr",
  hr: "sr",
  bs: "sr",
  sh: "sr",
  cnr: "sr",
  en: "en",
  de: "de",
};

export const LANG_STORAGE_KEY = "ql-lang";

const NAV: Page[] = [
  "home",
  "about",
  "services",
  "solutions",
  "references",
  "careers",
];

export const navLinks = (lang: Lang) =>
  NAV.map((page) => ({ href: routes[page][lang], label: pageNames[page][lang] }));

export const contactLink = (lang: Lang) => ({
  href: routes.contact[lang],
  label: pageNames.contact[lang],
});

/** Ista strana na drugom jeziku — za prekidač jezika i ekran za izbor jezika. */
export function translatePath(pathname: string, to: Lang) {
  const page = (Object.keys(routes) as Page[]).find((p) =>
    langs.some((l) => routes[p][l] === pathname)
  );
  return routes[page ?? "home"][to];
}

export function saveLang(lang: Lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch {
    // Privatni režim ili blokirano skladište — izbor važi samo za ovu posetu.
  }
}

/**
 * Skripta u <head> koja se izvršava pre prvog iscrtavanja:
 * - posetilac koji je već birao jezik, a otvori početnu, ide na svoj jezik;
 * - posetilac koji još nije birao dobija ekran za izbor jezika
 *   (pretraživači i alati bez korisnika ga ne dobijaju).
 */
export function langGateScript() {
  const homes = Object.fromEntries(langs.map((l) => [l, routes.home[l]]));
  return `(function(){try{var d=document.documentElement,k=${JSON.stringify(
    LANG_STORAGE_KEY
  )},h=${JSON.stringify(homes)},a=${JSON.stringify(
    langAliases
  )},s=localStorage.getItem(k);if(s&&h[s]){if(location.pathname==="/"&&h[s]!=="/")location.replace(h[s]+location.search);return}if(/bot|crawl|spider|slurp|lighthouse|headless/i.test(navigator.userAgent))return;var l=navigator.languages||[navigator.language||""],p="";for(var i=0;i<l.length&&!p;i++)p=a[String(l[i]).toLowerCase().split("-")[0]]||"";d.setAttribute("data-gate",p||"en");if(p)d.setAttribute("data-suggest",p);d.classList.add("gate-open")}catch(e){}})();`;
}

export function pageMetadata(
  page: Page,
  lang: Lang,
  description: string
): Metadata {
  return {
    // Početna koristi podrazumevani naslov iz layout-a.
    ...(page !== "home" && { title: pageNames[page][lang] }),
    description,
    alternates: {
      canonical: routes[page][lang],
      languages: {
        ...Object.fromEntries(langs.map((l) => [l, routes[page][l]])),
        "x-default": routes[page].sr,
      },
    },
  };
}
