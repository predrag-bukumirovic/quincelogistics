"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { FiX } from "react-icons/fi";
import { useConsent } from "./useConsent";
import {
  GA_ID,
  OPEN_SETTINGS_EVENT,
  readConsent,
  removeAnalyticsCookies,
  saveConsent,
} from "../lib/consent";
import { routes, type Lang } from "../lib/i18n";

const copy = {
  sr: {
    title: "Kolačići",
    text: "Neophodni kolačići omogućavaju rad sajta. Uz vaš pristanak koristimo i analitičke, da vidimo kako se sajt koristi i da ga poboljšamo. Više u",
    policyLink: "politici kolačića",
    acceptAll: "Prihvati sve",
    necessaryOnly: "Samo neophodni",
    settings: "Podešavanja",
    settingsTitle: "Podešavanja kolačića",
    necessary: "Neophodni",
    necessaryText:
      "Pamte izabrani jezik i vaš izbor o kolačićima. Bez njih sajt ne radi kako treba.",
    always: "Uvek uključeni",
    analytics: "Analitika",
    analyticsText:
      "Zbirni podaci o posetama — koje strane se čitaju i sa kojih uređaja — da bismo sajt poboljšali.",
    save: "Sačuvaj izbor",
    close: "Zatvori",
  },
  en: {
    title: "Cookies",
    text: "Necessary cookies keep the site working. With your consent, we also use analytics cookies to see how the site is used and improve it. More in our",
    policyLink: "cookie policy",
    acceptAll: "Accept all",
    necessaryOnly: "Necessary only",
    settings: "Settings",
    settingsTitle: "Cookie settings",
    necessary: "Necessary",
    necessaryText:
      "Remember your language and your cookie choice. The site doesn't work properly without them.",
    always: "Always on",
    analytics: "Analytics",
    analyticsText:
      "Aggregated visit data — which pages are read and on which devices — so we can improve the site.",
    save: "Save choice",
    close: "Close",
  },
  de: {
    title: "Cookies",
    text: "Notwendige Cookies sorgen dafür, dass die Website funktioniert. Mit Ihrer Einwilligung verwenden wir zusätzlich Analyse-Cookies, um zu sehen, wie die Website genutzt wird, und sie zu verbessern. Mehr in unserer",
    policyLink: "Cookie-Richtlinie",
    acceptAll: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige",
    settings: "Einstellungen",
    settingsTitle: "Cookie-Einstellungen",
    necessary: "Notwendig",
    necessaryText:
      "Speichern Ihre Sprache und Ihre Cookie-Auswahl. Ohne sie funktioniert die Website nicht richtig.",
    always: "Immer aktiv",
    analytics: "Analyse",
    analyticsText:
      "Zusammengefasste Besuchsdaten – welche Seiten gelesen werden und auf welchen Geräten –, damit wir die Website verbessern können.",
    save: "Auswahl speichern",
    close: "Schließen",
  },
};

/**
 * Obaveštenje o kolačićima: kartica na dnu ekrana, ne prozor preko sajta.
 * Pojavljuje se dok posetilac ne izabere, a kasnije ga otvara
 * „Podešavanja kolačića“ u futeru. Odbijanje je jednako lako kao prihvatanje.
 */
export default function CookieConsent({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const consent = useConsent();
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const titleId = useId();
  const switchId = useId();

  useEffect(() => {
    const open = () => {
      setAnalytics(readConsent()?.analytics ?? false);
      setSettings(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  // Pre hidratacije ne znamo izbor; posle izbora kartica se ne prikazuje.
  if (consent === undefined || (consent && !settings)) return null;

  const decide = (allow: boolean) => {
    const hadAnalytics = readConsent()?.analytics;
    saveConsent(allow);
    setSettings(false);
    // Povučen pristanak: brišemo kolačiće i učitavamo stranu bez analitike.
    if (GA_ID && hadAnalytics && !allow) {
      removeAnalyticsCookies();
      window.location.reload();
    }
  };

  return (
    <section className="cookie-banner" aria-labelledby={titleId}>
      {settings ? (
        <>
          <div className="cookie-head">
            <h2 id={titleId} className="cookie-title">
              {t.settingsTitle}
            </h2>
            {consent && (
              <button
                type="button"
                className="cookie-close"
                aria-label={t.close}
                onClick={() => setSettings(false)}
              >
                <FiX size={20} />
              </button>
            )}
          </div>
          <ul className="cookie-cats">
            <li>
              <div className="cookie-cat-head">
                <strong>{t.necessary}</strong>
                <span className="cookie-always">{t.always}</span>
              </div>
              <p>{t.necessaryText}</p>
            </li>
            <li>
              <div className="cookie-cat-head">
                <label htmlFor={switchId}>
                  <strong>{t.analytics}</strong>
                </label>
                <input
                  id={switchId}
                  type="checkbox"
                  role="switch"
                  className="switch"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
              </div>
              <p>{t.analyticsText}</p>
            </li>
          </ul>
          <div className="cookie-actions">
            <button
              type="button"
              className="btn cookie-btn cookie-btn-dark"
              onClick={() => decide(analytics)}
            >
              {t.save}
            </button>
            <button
              type="button"
              className="btn cookie-btn cookie-btn-blue"
              onClick={() => decide(true)}
            >
              {t.acceptAll}
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 id={titleId} className="cookie-title">
            {t.title}
          </h2>
          <p className="cookie-text">
            {t.text} <Link href={routes.cookies[lang]}>{t.policyLink}</Link>.
          </p>
          <div className="cookie-actions">
            <button
              type="button"
              className="btn cookie-btn cookie-btn-blue"
              onClick={() => decide(true)}
            >
              {t.acceptAll}
            </button>
            <button
              type="button"
              className="btn cookie-btn cookie-btn-dark"
              onClick={() => decide(false)}
            >
              {t.necessaryOnly}
            </button>
          </div>
          <button
            type="button"
            className="cookie-more"
            onClick={() => {
              setAnalytics(false);
              setSettings(true);
            }}
          >
            {t.settings}
          </button>
        </>
      )}
    </section>
  );
}
