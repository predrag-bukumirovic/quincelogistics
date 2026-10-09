import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { pageNames, routes, type Lang } from "../lib/i18n";

const crumbsLabel = { sr: "Putanja", en: "Breadcrumb", de: "Navigationspfad" };

type Props = {
  lang: Lang;
  label: string;
  title: ReactNode;
  lead: ReactNode;
  image?: { src: StaticImageData; alt: string };
  children?: ReactNode;
};

export default function PageHero({
  lang,
  label,
  title,
  lead,
  image,
  children,
}: Props) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <nav className="crumbs hero-anim" aria-label={crumbsLabel[lang]}>
          <Link href={routes.home[lang]}>{pageNames.home[lang]}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{label}</span>
        </nav>
        <h1 className="page-title hero-anim" style={{ animationDelay: "80ms" }}>
          {title}
        </h1>
        <div
          className="page-hero-foot hero-anim"
          style={{ animationDelay: "180ms" }}
        >
          <div className="page-hero-copy">
            <p className="lead">{lead}</p>
            {children}
          </div>
        </div>
        {image && (
          <div className="page-hero-photo">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1360px) 1264px, 100vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
