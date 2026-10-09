"use client";

import { usePathname } from "next/navigation";
import type { CSSProperties, MouseEvent } from "react";
import { FiArrowRight } from "react-icons/fi";
import Logo from "./Logo";
import {
  langs,
  languageNames,
  saveLang,
  translatePath,
  type Lang,
} from "../lib/i18n";

// Naslov i napomena postoje na svakom jeziku; vidi se onaj koji odgovara
// jeziku pregledača (skripta u <head> postavlja data-gate na <html>).
const copy: Record<Lang, { title: string; note: string; suggested: string }> = {
  sr: {
    title: "Izaberite jezik.",
    note: "Jezik možete promeniti bilo kada u zaglavlju sajta.",
    suggested: "Predloženo",
  },
  en: {
    title: "Choose your language.",
    note: "You can change the language at any time in the site header.",
    suggested: "Suggested",
  },
  de: {
    title: "Sprache wählen.",
    note: "Sie können die Sprache jederzeit oben auf der Seite ändern.",
    suggested: "Empfohlen",
  },
};

// Pravila koja zavise od jezika pregledača, za svaki jezik iz liste.
const gateCss = langs
  .map(
    (l) =>
      `html[data-gate="${l}"] .lang-gate-copy[lang="${l}"]{display:block}` +
      `html[data-suggest="${l}"] .lang-gate-item[data-lang="${l}"]{order:-1}` +
      `html[data-suggest="${l}"] .lang-gate-item[data-lang="${l}"] .lang-gate-tag{display:inline-flex}`
  )
  .join("");

/**
 * Ekran za izbor jezika pri prvoj poseti — cela strana, ne prozor preko sajta.
 * Prikazuje ga skripta iz Shell-a pre prvog iscrtavanja; izbor se pamti u localStorage.
 */
export default function LanguageGate({ lang }: { lang: Lang }) {
  const pathname = usePathname();

  const choose = (e: MouseEvent<HTMLAnchorElement>, to: Lang) => {
    saveLang(to);
    // Drugi jezik: link vodi na istu stranu na tom jeziku.
    if (to !== lang) return;
    e.preventDefault();
    const root = document.documentElement;
    root.classList.add("gate-closing");
    root.classList.remove("gate-open");
    window.setTimeout(() => root.classList.remove("gate-closing"), 500);
  };

  return (
    <div className="lang-gate">
      <style>{gateCss}</style>
      <div className="wrap lang-gate-inner">
        <div className="lang-gate-logo">
          <Logo />
        </div>
        <div className="lang-gate-body">
          <div className="lang-gate-head">
            {langs.map((l) => (
              <div className="lang-gate-copy" lang={l} key={l}>
                <h1 className="lang-gate-title">{copy[l].title}</h1>
                <p className="lang-gate-note">{copy[l].note}</p>
              </div>
            ))}
          </div>
          <ul className="lang-gate-list">
            {langs.map((l, i) => (
              <li
                className="lang-gate-item"
                data-lang={l}
                key={l}
                style={{ "--i": i } as CSSProperties}
              >
                <a
                  href={translatePath(pathname, l)}
                  hrefLang={l}
                  lang={l}
                  onClick={(e) => choose(e, l)}
                >
                  <span className="lang-gate-name">
                    {languageNames[l]}
                    <small className="lang-gate-tag">{copy[l].suggested}</small>
                  </span>
                  <span className="lang-gate-code">{l.toUpperCase()}</span>
                  <FiArrowRight size={22} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
