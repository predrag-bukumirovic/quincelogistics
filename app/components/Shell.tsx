import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import ScrollFx from "./ScrollFx";
import Header from "./Header";
import Footer from "./Footer";
import LanguageGate from "./LanguageGate";
import CookieConsent from "./CookieConsent";
import Analytics from "./Analytics";
import { barlow } from "../lib/fonts";
import { langGateScript, type Lang } from "../lib/i18n";
import { site } from "../lib/site";

const copy = {
  sr: {
    title: "QuinceLogistics — Drumski transport robe",
    description:
      "QuinceLogistics — domaći i međunarodni drumski transport sopstvenim kamionima. Kompletni (FTL) i zbirni (LTL) utovari po Srbiji i celoj Evropi, uz dispečerski centar 24/7.",
    skip: "Preskoči na sadržaj",
  },
  en: {
    title: "QuinceLogistics — Road freight transport",
    description:
      "QuinceLogistics — domestic and international road freight with our own trucks. Full (FTL) and part loads (LTL) across Serbia and all of Europe, with a 24/7 dispatch centre.",
    skip: "Skip to content",
  },
  de: {
    title: "QuinceLogistics — Straßengütertransport",
    description:
      "QuinceLogistics – nationale und internationale Straßentransporte mit eigenen Lkw. Komplett- (FTL) und Teilladungen (LTL) in Serbien und ganz Europa, mit Disposition rund um die Uhr.",
    skip: "Zum Inhalt springen",
  },
};

export function rootMetadata(lang: Lang): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: {
      default: copy[lang].title,
      template: "%s — QuinceLogistics",
    },
    description: copy[lang].description,
  };
}

// Zajednički <html> za sve jezike; svaki jezik ima svoj root layout.
export default function Shell({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return (
    // Skripta iz <head> dodaje klase na <html> pre hidratacije.
    <html
      lang={lang}
      className={barlow.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: langGateScript() }} />
      </head>
      <body>
        <LanguageGate lang={lang} />
        <CookieConsent lang={lang} />
        <a href="#sadrzaj" className="skip-link">
          {copy[lang].skip}
        </a>
        <ScrollFx />
        <Header lang={lang} />
        <main id="sadrzaj">{children}</main>
        <Footer lang={lang} />
        <Analytics />
      </body>
    </html>
  );
}
