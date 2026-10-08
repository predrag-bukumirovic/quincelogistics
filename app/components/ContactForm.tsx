"use client";

import { useState, type FormEvent } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Choices, Field } from "./FormParts";
import { site } from "../lib/site";

const LOAD_TYPES = ["Ceo kamion (FTL)", "Zbirni transport (LTL)", "Još ne znam"];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="quote-form quote-sent" role="status">
        <span className="quote-sent-icon">
          <FiCheck size={24} />
        </span>
        <h2>Hvala, upit je zabeležen.</h2>
        <p>
          Javljamo se sa ponudom u najkraćem roku. Za hitne ture pozovite
          dispečera na <a href={site.phone.href}>{site.phone.display}</a> ili
          pišite na <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="quote-form" data-reveal onSubmit={handleSubmit}>
      <fieldset>
        <legend className="label">
          Relacija i roba
        </legend>
        <div className="form-row">
          <Field
            id="utovar"
            label="Mesto utovara"
            placeholder="npr. Beograd, Srbija"
            required
          />
          <Field
            id="istovar"
            label="Mesto istovara"
            placeholder="npr. Minhen, Nemačka"
            required
          />
        </div>
        <div className="form-row">
          <Field
            id="kolicina"
            label="Količina robe"
            placeholder="npr. 12 paleta, 8 t"
          />
          <Field id="datum" label="Datum utovara" type="date" />
        </div>
        <Choices
          name="vrsta"
          legend="Vrsta prevoza"
          options={LOAD_TYPES}
          defaultValue={LOAD_TYPES[0]}
        />
      </fieldset>

      <fieldset>
        <legend className="label">
          Kontakt
        </legend>
        <div className="form-row">
          <Field id="ime" label="Ime i prezime" autoComplete="name" required />
          <Field id="firma" label="Firma" autoComplete="organization" />
        </div>
        <div className="form-row">
          <Field
            id="email"
            label="Email"
            type="email"
            placeholder="vas@firma.rs"
            autoComplete="email"
            required
          />
          <Field
            id="telefon"
            label="Telefon"
            type="tel"
            placeholder="+381 6x xxx xxxx"
            autoComplete="tel"
          />
        </div>
        <div className="form-field">
          <label htmlFor="napomena">Napomena</label>
          <textarea
            id="napomena"
            name="napomena"
            rows={4}
            placeholder="Vrsta robe, dimenzije, način utovara, posebni zahtevi…"
          />
        </div>
      </fieldset>

      <div className="form-submit">
        <button type="submit" className="btn btn-primary">
          Pošaljite upit
          <FiArrowUpRight size={18} aria-hidden="true" />
        </button>
        <p className="form-note">
          Podatke koristimo isključivo za pripremu ponude.
        </p>
      </div>
    </form>
  );
}
