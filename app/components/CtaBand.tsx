import Link from "next/link";
import type { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { site } from "../lib/site";

type Props = {
  title?: ReactNode;
  text?: string;
};

export default function CtaBand({
  title = (
    <>
      Imate robu <em>za prevoz?</em>
    </>
  ),
  text = "Pošaljite relaciju i količinu robe — ponudu dobijate najčešće istog radnog dana.",
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
            <Link href="/kontakt" className="btn btn-primary">
              Zatražite ponudu
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
