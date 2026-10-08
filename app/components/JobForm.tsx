"use client";

import { useState, type FormEvent } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Choices, Field } from "./FormParts";
import { site } from "../lib/site";

const DOCUMENTS = ["C+E dozvola", "Kod 95", "Kartica za tahograf", "Važeći pasoš"];
const EXPERIENCE = ["Do 1 godine", "1–3 godine", "3–5 godina", "Više od 5 godina"];

export default function JobForm({ positions }: { positions: string[] }) {
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
        <h2>Hvala, prijava je zabeležena.</h2>
        <p>
          Javljamo se u roku od dva radna dana. Ako vam je hitno, pozovite nas
          na <a href={site.phone.href}>{site.phone.display}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="quote-form" data-reveal onSubmit={handleSubmit}>
      <fieldset>
        <legend className="label">
          O vama
        </legend>
        <div className="form-row">
          <Field id="ime" label="Ime i prezime" autoComplete="name" required />
          <Field
            id="telefon"
            label="Telefon"
            type="tel"
            placeholder="+381 6x xxx xxxx"
            autoComplete="tel"
            required
          />
        </div>
        <div className="form-row">
          <Field
            id="email"
            label="Email"
            type="email"
            placeholder="vas@email.com"
            autoComplete="email"
          />
          <Field
            id="mesto"
            label="Mesto stanovanja"
            placeholder="npr. Kragujevac"
            autoComplete="address-level2"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend className="label">
          Posao i iskustvo
        </legend>
        <Choices
          name="pozicija"
          legend="Pozicija"
          options={positions}
          defaultValue={positions[0]}
        />
        <Choices name="dokumenta" legend="Šta imate" options={DOCUMENTS} multiple />
        <Choices name="iskustvo" legend="Iskustvo u vožnji" options={EXPERIENCE} />
        <div className="form-field">
          <label htmlFor="napomena">Napomena</label>
          <textarea
            id="napomena"
            name="napomena"
            rows={4}
            placeholder="Gde ste do sada vozili, sa kojim vozilima, od kada možete da počnete…"
          />
        </div>
      </fieldset>

      <div className="form-submit">
        <button type="submit" className="btn btn-primary">
          Pošaljite prijavu
          <FiArrowUpRight size={18} aria-hidden="true" />
        </button>
        <p className="form-note">
          CV nije obavezan. Podatke koristimo samo za ovaj konkurs.
        </p>
      </div>
    </form>
  );
}
