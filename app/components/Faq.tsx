"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const items = [
  {
    q: "Koje vrste transportnih usluga nudite?",
    a: "Nudimo kompletan spektar logističkih usluga — vazdušni, pomorski i drumski transport, prilagođen potrebama vašeg poslovanja.",
  },
  {
    q: "Kako mogu da pratim svoju pošiljku?",
    a: "Svaka pošiljka se prati u realnom vremenu putem našeg sistema, a status možete proveriti online u bilo kom trenutku.",
  },
  {
    q: "Koliko traje isporuka?",
    a: "Vreme isporuke zavisi od vrste transporta i destinacije — naš tim vam daje precizan rok prilikom kreiranja ponude.",
  },
  {
    q: "Da li se bavite carinom i dokumentacijom?",
    a: "Da, naš tim vodi računa o kompletnoj carinskoj obradi i pratećoj dokumentaciji, kako bi vaša roba stigla bez komplikacija.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-body" data-reveal>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={item.q}>
            <button
              type="button"
              className="faq-summary"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {item.q}
              <span className="icon">
                <FiChevronDown size={16} />
              </span>
            </button>
            <div className="faq-panel">
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
