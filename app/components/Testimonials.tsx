"use client";

import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

const testimonials = [
  {
    text: "Saradnja sa kompanijom Karapandžić potpuno je promenila način na koji upravljamo pošiljkama. Njihov tim je pouzdan, brzo odgovara, a isporuke uvek stižu na vreme. Sistem za praćenje u realnom vremenu nas stalno drži informisanim, dok njihova globalna mreža čini međunarodne isporuke jednostavnim. Zaista partner kojem verujemo za celokupnu logistiku.",
    name: "Aleksandar Marković",
    role: "Menadžer, Global Trade Co.",
    avatar: "/images/avatar1.jpg",
    rating: "4.5",
  },
  {
    text: "Otkako radimo sa Karapandžić timom, kašnjenja u isporuci su gotovo nestala. Komunikacija je jasna, dokumentacija uvek na vreme, a podrška dostupna kad god nam zatreba. Preporučujemo ih svakoj firmi kojoj je bitna pouzdanost.",
    name: "Jovana Ilić",
    role: "Direktorka nabavke, Nordic Foods",
    avatar: "/images/avatar3.jpg",
    rating: "5.0",
  },
  {
    text: "Prevoz građevinskog materijala zna da bude izazovan, ali Karapandžić uvek isporučuje na vreme i bez oštećenja. Cene su korektne, a tim je uvek dostupan za dogovor oko hitnih pošiljki.",
    name: "Miloš Petrović",
    role: "Vlasnik, Petrović Gradnja",
    avatar: "/images/avatar2.jpg",
    rating: "4.8",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];

  const go = (delta: number) => {
    setIndex((i) => (i + delta + total) % total);
  };

  return (
    <>
      <div className="testi-top">
        <div>
          <p style={{ marginBottom: 12 }}>
            Pravi utisci kompanija koje nam veruju svoj lanac snabdevanja.
          </p>
          <h2>Utisci naših klijenata</h2>
        </div>
        <div className="testi-nav">
          <button aria-label="Prethodni utisak" onClick={() => go(-1)}>
            <FiArrowLeft size={16} />
          </button>
          <span>
            {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
          </span>
          <button aria-label="Sledeći utisak" className="active" onClick={() => go(1)}>
            <FiArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="testi-card">
        <div className="testi-anim" key={index}>
          <div className="testi-quote">
            <FaQuoteLeft size={22} />
          </div>
          <p className="testi-text">{t.text}</p>
          <div className="testi-author">
            <img src={t.avatar} alt={t.name} />
            <div>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
            <div className="testi-rating">
              <div className="testi-stars">
                {[0, 1, 2, 3, 4].map((i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <span>Ocena {t.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
