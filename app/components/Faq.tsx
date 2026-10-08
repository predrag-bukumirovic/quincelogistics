"use client";

import { useId, useState } from "react";
import { faq } from "../lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);
  const id = useId();

  return (
    <div className="faq-list" data-reveal>
      {faq.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
            <h3>
              <button
                type="button"
                className="faq-q"
                id={`${id}-q${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-a${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.q}
                <span className="faq-icon" aria-hidden="true" />
              </button>
            </h3>
            <div
              className="faq-panel"
              id={`${id}-a${i}`}
              role="region"
              aria-labelledby={`${id}-q${i}`}
              inert={!isOpen}
            >
              <div className="faq-panel-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
