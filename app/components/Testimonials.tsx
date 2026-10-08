"use client";

import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { testimonials } from "../lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + total) % total);
  };

  return (
    <div className="testi" data-reveal>
      <div className="testi-stage" aria-live="polite">
        <figure className="testi-anim" key={index}>
          <blockquote className="testi-quote">„{t.quote}“</blockquote>
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
            aria-label="Prethodno iskustvo"
            onClick={() => go(-1)}
          >
            <FiArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Sledeće iskustvo"
            onClick={() => go(1)}
          >
            <FiArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
