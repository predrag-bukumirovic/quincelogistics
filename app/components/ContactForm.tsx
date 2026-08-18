"use client";

import { useState, FormEvent } from "react";
import { FiCheck } from "react-icons/fi";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="contact-form">
        <div className="form-success">
          <FiCheck size={18} />
          Hvala! Vaša poruka je zabeležena — javićemo se u najkraćem roku.
        </div>
        <p className="form-note">
          Za hitne upite možete nas kontaktirati direktno na
          info@karapandzic-logistika.rs ili putem telefona.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" data-reveal onSubmit={handleSubmit}>
      <div className="form-row two">
        <div className="form-field">
          <label htmlFor="ime">Ime i prezime</label>
          <input
            id="ime"
            name="ime"
            type="text"
            placeholder="Vaše ime"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email adresa</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="vas@email.com"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="telefon">Telefon</label>
        <input
          id="telefon"
          name="telefon"
          type="tel"
          placeholder="+381 6x xxx xxxx"
        />
      </div>

      <div className="form-field">
        <label htmlFor="poruka">Poruka</label>
        <textarea
          id="poruka"
          name="poruka"
          placeholder="Opišite vašu pošiljku ili upit..."
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ alignSelf: "flex-start" }}
      >
        Pošalji upit
      </button>
      <p className="form-note">
        Popunjavanjem forme prihvatate da vas kontaktiramo povodom vašeg upita.
      </p>
    </form>
  );
}
