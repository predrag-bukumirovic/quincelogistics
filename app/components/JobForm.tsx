"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Choices, Field } from "./FormParts";
import { routes, type Lang } from "../lib/i18n";
import { site } from "../lib/site";

const copy = {
  sr: {
    categories: ["B", "B+E", "C", "C+E"],
    documents: ["Kod 95", "Kartica za tahograf", "Važeći pasoš"],
    experience: ["Do 1 godine", "1–3 godine", "3–5 godina", "Više od 5 godina"],
    sentTitle: "Hvala, prijava je zabeležena.",
    sentText: "Javljamo se u roku od dva radna dana. Ako vam je hitno, pozovite nas na",
    about: "O vama",
    name: "Ime i prezime",
    phone: "Telefon",
    phoneHint: "+381 6x xxx xxxx",
    email: "Email",
    emailHint: "vas@email.com",
    city: "Mesto stanovanja",
    cityHint: "npr. Kragujevac",
    job: "Posao i iskustvo",
    position: "Pozicija",
    licence: "Kategorije u vozačkoj dozvoli",
    have: "Dokumenta",
    years: "Iskustvo u vožnji",
    note: "Napomena",
    noteHint: "Gde ste do sada vozili, sa kojim vozilima, od kada možete da počnete…",
    submit: "Pošaljite prijavu",
    privacy: "CV nije obavezan. Podatke koristimo samo za ovaj konkurs — više u",
    privacyLink: "politici privatnosti",
  },
  en: {
    categories: ["B", "B+E", "C", "C+E"],
    documents: ["Code 95", "Tachograph card", "Valid passport"],
    experience: ["Up to 1 year", "1–3 years", "3–5 years", "More than 5 years"],
    sentTitle: "Thank you — your application has been received.",
    sentText: "We'll be in touch within two working days. If it's urgent, call us on",
    about: "About you",
    name: "Full name",
    phone: "Phone",
    phoneHint: "Including country code",
    email: "Email",
    emailHint: "you@email.com",
    city: "Town or city",
    cityHint: "e.g. Kragujevac",
    job: "Job and experience",
    position: "Position",
    licence: "Licence categories",
    have: "Documents",
    years: "Driving experience",
    note: "Notes",
    noteHint: "Where you've driven so far, which vehicles, when you can start…",
    submit: "Send application",
    privacy: "No CV needed. We use your details only for this vacancy — see our",
    privacyLink: "privacy policy",
  },
  de: {
    categories: ["B", "BE", "C", "CE"],
    documents: ["Code 95", "Fahrerkarte", "Gültiger Reisepass"],
    experience: ["Bis 1 Jahr", "1–3 Jahre", "3–5 Jahre", "Über 5 Jahre"],
    sentTitle: "Vielen Dank – Ihre Bewerbung ist eingegangen.",
    sentText: "Wir melden uns innerhalb von zwei Werktagen. Wenn es eilt, rufen Sie uns an unter",
    about: "Über Sie",
    name: "Vor- und Nachname",
    phone: "Telefon",
    phoneHint: "Mit Ländervorwahl",
    email: "E-Mail",
    emailHint: "sie@email.de",
    city: "Wohnort",
    cityHint: "z. B. Kragujevac",
    job: "Stelle und Erfahrung",
    position: "Stelle",
    licence: "Führerscheinklassen",
    have: "Unterlagen",
    years: "Fahrerfahrung",
    note: "Anmerkungen",
    noteHint: "Wo Sie bisher gefahren sind, mit welchen Fahrzeugen, ab wann Sie anfangen können …",
    submit: "Bewerbung senden",
    privacy: "Kein Lebenslauf nötig. Ihre Daten verwenden wir nur für diese Stelle – mehr in unserer",
    privacyLink: "Datenschutzerklärung",
  },
};

export default function JobForm({
  lang,
  positions,
}: {
  lang: Lang;
  positions: string[];
}) {
  const t = copy[lang];
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
        <h2>{t.sentTitle}</h2>
        <p>
          {t.sentText} <a href={site.phone.href}>{site.phone.display}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="quote-form" data-reveal onSubmit={handleSubmit}>
      <fieldset>
        <legend className="label">{t.about}</legend>
        <div className="form-row">
          <Field id="ime" label={t.name} autoComplete="name" required />
          <Field
            id="telefon"
            label={t.phone}
            type="tel"
            placeholder={t.phoneHint}
            autoComplete="tel"
            required
          />
        </div>
        <div className="form-row">
          <Field
            id="email"
            label={t.email}
            type="email"
            placeholder={t.emailHint}
            autoComplete="email"
          />
          <Field
            id="mesto"
            label={t.city}
            placeholder={t.cityHint}
            autoComplete="address-level2"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend className="label">{t.job}</legend>
        <Choices
          name="pozicija"
          legend={t.position}
          options={positions}
          defaultValue={positions[0]}
        />
        <Choices
          name="kategorije"
          legend={t.licence}
          options={t.categories}
          multiple
        />
        <Choices name="dokumenta" legend={t.have} options={t.documents} multiple />
        <Choices name="iskustvo" legend={t.years} options={t.experience} />
        <div className="form-field">
          <label htmlFor="napomena">{t.note}</label>
          <textarea
            id="napomena"
            name="napomena"
            rows={4}
            placeholder={t.noteHint}
          />
        </div>
      </fieldset>

      <div className="form-submit">
        <button type="submit" className="btn btn-primary">
          {t.submit}
          <FiArrowUpRight size={18} aria-hidden="true" />
        </button>
        <p className="form-note">
          {t.privacy} <Link href={routes.privacy[lang]}>{t.privacyLink}</Link>.
        </p>
      </div>
    </form>
  );
}
