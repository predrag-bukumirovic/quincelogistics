"use client";

import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { testimonials } from "../lib/content";
import type { Lang } from "../lib/i18n";

const copy = {
  sr: { open: "„", close: "“", prev: "Prethodno iskustvo", next: "Sledeće iskustvo" },
  en: { open: "“", close: "”", prev: "Previous testimonial", next: "Next testimonial" },
  de: { open: "„", close: "“", prev: "Vorherige Kundenstimme", next: "Nächste Kundenstimme" },
};

export default function Testimonials({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const items = testimonials[lang];
  const [index, setIndex] = useState(0);
  const total = items.length;
  const t = items[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + total) % total);
  };

  return (
    <div className="testi" data-reveal>
      <div className="testi-stage" aria-live="polite">
        <figure className="testi-anim" key={index}>
          <blockquote className="testi-quote">
            {c.open}
            {t.quote}
            {c.close}
          </blockquote>
          <figcaption className="testi-foot">
            <span className="testi-who">
              <strong>{t.role}</strong>
              <span>{t.company}</span>
            </span>
          </figcaption>
        </figure>
        <div className="testi-controls">
          <button
            type="button"
            aria-label={c.prev}
            onClick={() => go(-1)}
          >
            <FiArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label={c.next}
            onClick={() => go(1)}
          >
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
