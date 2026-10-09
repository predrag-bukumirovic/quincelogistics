import Link from "next/link";
import type { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { routes, type Lang } from "../lib/i18n";
import { site } from "../lib/site";

const copy = {
  sr: {
    title: (
      <>
        Imate robu <em>za prevoz?</em>
      </>
    ),
    text: "Pošaljite relaciju i količinu robe — ponudu dobijate najčešće istog radnog dana.",
    cta: "Zatražite ponudu",
  },
  en: {
    title: (
      <>
        Got goods <em>to move?</em>
      </>
    ),
    text: "Send us the route and volume — you'll usually have a quote the same working day.",
    cta: "Request a quote",
  },
  de: {
    title: (
      <>
        Fracht <em>zu vergeben?</em>
      </>
    ),
    text: "Senden Sie uns Strecke und Menge – das Angebot erhalten Sie meist noch am selben Werktag.",
    cta: "Angebot anfordern",
  },
};

type Props = {
  lang: Lang;
  title?: ReactNode;
  text?: string;
};

export default function CtaBand({
  lang,
  title = copy[lang].title,
  text = copy[lang].text,
}: Props) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <h2 className="cta-title" data-reveal>
          {title}
        </h2>
        <div className="cta-row" data-reveal>
          <p>{text}</p>
          <div className="cta-actions">
            <Link href={routes.contact[lang]} className="btn btn-primary">
              {copy[lang].cta}
              <FiArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <a href={site.phone.href} className="btn btn-line-light">
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
