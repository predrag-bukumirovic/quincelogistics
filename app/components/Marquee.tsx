import type { CSSProperties } from "react";
import { countries } from "../lib/content";
import type { Lang } from "../lib/i18n";

const copy = {
  sr: {
    label: "Zemlje u koje vozimo",
    title: "Gde vozimo",
    coverage: "Srbija · Cela Evropa",
  },
  en: {
    label: "Countries we serve",
    title: "Where we drive",
    coverage: "Serbia · All of Europe",
  },
  de: {
    label: "Länder, in die wir fahren",
    title: "Wohin wir fahren",
    coverage: "Serbien · Ganz Europa",
  },
};

export default function Marquee({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const list = countries[lang];
  const items = list.map((c) => (
    <span className="marquee-item" key={c}>
      {c}
    </span>
  ));

  return (
    <section className="marquee" aria-label={t.label}>
      <div className="wrap marquee-head">
        <span>{t.title}</span>
        <span>{t.coverage}</span>
      </div>
      {/* Trajanje raste sa brojem zemalja, pa brzina trake ostaje ista. */}
      <div
        className="marquee-track"
        style={{ "--count": list.length } as CSSProperties}
      >
        <div className="marquee-group">{items}</div>
        <div className="marquee-group" aria-hidden="true">
          {items}
        </div>
      </div>
    </section>
  );
}
