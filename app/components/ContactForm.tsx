"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import DatePicker from "./DatePicker";
import { Choices, Field } from "./FormParts";
import Select, { type SelectOption } from "./Select";
import { routes, type Lang } from "../lib/i18n";
import { site } from "../lib/site";

const copy = {
  sr: {
    sentTitle: "Hvala, upit je zabeležen.",
    sentStart:
      "Javljamo se sa ponudom u najkraćem roku. Za hitne ture pozovite dispečera na",
    sentOr: "ili pišite na",
    route: "Relacija",
    loading: "Utovar",
    unloading: "Istovar",
    country: "Država",
    choose: "Izaberite",
    searchCountry: "Potražite zemlju",
    noCountry: "Nema rezultata.",
    postal: "Poštanski broj",
    city: "Mesto",
    fromHint: "npr. Beograd",
    toHint: "npr. Minhen",
    date: "Datum utovara",
    goods: "Roba",
    type: "Vrsta prevoza",
    loadTypes: ["Ceo kamion (FTL)", "Zbirni transport (LTL)", "Još ne znam"],
    pallets: "Broj paleta",
    ldm: "Utovarni metri (LDM)",
    weight: "Težina (kg)",
    extras: "Posebni zahtevi",
    extraOptions: [
      "ADR (opasna roba)",
      "Kontrolisana temperatura",
      "Zamena paleta",
    ],
    contact: "Kontakt",
    name: "Ime i prezime",
    company: "Firma",
    email: "Email",
    emailHint: "vas@firma.rs",
    phone: "Telefon",
    phoneHint: "+381 6x xxx xxxx",
    note: "Napomena",
    noteHint: "Vrsta robe, dimenzije, način utovara, termini…",
    submit: "Pošaljite upit",
    privacy: "Podatke koristimo isključivo za pripremu ponude — više u",
    privacyLink: "politici privatnosti",
  },
  en: {
    sentTitle: "Thank you — your enquiry has been received.",
    sentStart:
      "We'll get back to you with a quote as soon as possible. For urgent loads, call dispatch on",
    sentOr: "or email",
    route: "Route",
    loading: "Loading",
    unloading: "Unloading",
    country: "Country",
    choose: "Select",
    searchCountry: "Search countries",
    noCountry: "No results.",
    postal: "Postcode",
    city: "Town / city",
    fromHint: "e.g. Belgrade",
    toHint: "e.g. Munich",
    date: "Loading date",
    goods: "Goods",
    type: "Type of transport",
    loadTypes: ["Full truckload (FTL)", "Groupage (LTL)", "Not sure yet"],
    pallets: "Pallets",
    ldm: "Loading metres (LDM)",
    weight: "Weight (kg)",
    extras: "Special requirements",
    extraOptions: [
      "ADR (dangerous goods)",
      "Temperature control",
      "Pallet exchange",
    ],
    contact: "Your details",
    name: "Full name",
    company: "Company",
    email: "Email",
    emailHint: "you@company.com",
    phone: "Phone",
    phoneHint: "Including country code",
    note: "Notes",
    noteHint: "Type of goods, dimensions, loading method, time slots…",
    submit: "Send enquiry",
    privacy: "We use your details only to prepare your quote — see our",
    privacyLink: "privacy policy",
  },
  de: {
    sentTitle: "Vielen Dank – Ihre Anfrage ist eingegangen.",
    sentStart:
      "Wir melden uns schnellstmöglich mit einem Angebot. Bei dringenden Touren erreichen Sie unsere Disposition unter",
    sentOr: "oder per E-Mail an",
    route: "Strecke",
    loading: "Beladung",
    unloading: "Entladung",
    country: "Land",
    choose: "Bitte wählen",
    searchCountry: "Land suchen",
    noCountry: "Keine Treffer.",
    postal: "PLZ",
    city: "Ort",
    fromHint: "z. B. Belgrad",
    toHint: "z. B. München",
    date: "Ladedatum",
    goods: "Ware",
    type: "Transportart",
    loadTypes: ["Komplettladung (FTL)", "Teilladung (LTL)", "Noch unklar"],
    pallets: "Anzahl Paletten",
    ldm: "Lademeter (LDM)",
    weight: "Gewicht (kg)",
    extras: "Besondere Anforderungen",
    extraOptions: ["ADR (Gefahrgut)", "Temperaturgeführt", "Palettentausch"],
    contact: "Ihre Kontaktdaten",
    name: "Vor- und Nachname",
    company: "Firma",
    email: "E-Mail",
    emailHint: "sie@firma.de",
    phone: "Telefon",
    phoneHint: "Mit Ländervorwahl",
    note: "Anmerkungen",
    noteHint: "Warenart, Maße, Verladeart, Zeitfenster …",
    submit: "Anfrage senden",
    privacy:
      "Wir verwenden Ihre Daten ausschließlich für die Erstellung des Angebots – mehr in unserer",
    privacyLink: "Datenschutzerklärung",
  },
};

type Props = {
  lang: Lang;
  countries: SelectOption[];
};

export default function ContactForm({ lang, countries }: Props) {
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
          {t.sentStart} <a href={site.phone.href}>{site.phone.display}</a>{" "}
          {t.sentOr} <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    );
  }

  // Mesto utovara i istovara u formatu evropskih berzi tereta: država, PB, mesto.
  const place = (prefix: string, legend: string, hint: string, home?: string) => (
    <fieldset className="form-place">
      <legend className="form-label">{legend}</legend>
      <div className="form-row form-row-place">
        <Select
          id={`${prefix}-drzava`}
          label={t.country}
          options={countries}
          defaultValue={home}
          placeholder={t.choose}
          search={{ label: t.searchCountry, empty: t.noCountry }}
          required
        />
        <Field id={`${prefix}-pb`} label={t.postal} autoComplete="off" />
        <Field id={prefix} label={t.city} placeholder={hint} required />
      </div>
    </fieldset>
  );

  return (
    <form className="quote-form" data-reveal onSubmit={handleSubmit}>
      <fieldset>
        <legend className="label">{t.route}</legend>
        {place("utovar", t.loading, t.fromHint, "RS")}
        {place("istovar", t.unloading, t.toHint)}
        <div className="form-row">
          <DatePicker id="datum" label={t.date} lang={lang} />
        </div>
      </fieldset>

      <fieldset>
        <legend className="label">{t.goods}</legend>
        <Choices
          name="vrsta"
          legend={t.type}
          options={t.loadTypes}
          defaultValue={t.loadTypes[0]}
        />
        <div className="form-row form-row-3">
          <Field
            id="palete"
            label={t.pallets}
            type="number"
            inputMode="numeric"
            min={1}
          />
          <Field
            id="ldm"
            label={t.ldm}
            type="number"
            inputMode="decimal"
            min={0}
            step="0.1"
          />
          <Field
            id="tezina"
            label={t.weight}
            type="number"
            inputMode="numeric"
            min={0}
          />
        </div>
        <Choices
          name="zahtevi"
          legend={t.extras}
          options={t.extraOptions}
          multiple
        />
      </fieldset>

      <fieldset>
        <legend className="label">{t.contact}</legend>
        <div className="form-row">
          <Field id="ime" label={t.name} autoComplete="name" required />
          <Field id="firma" label={t.company} autoComplete="organization" />
        </div>
        <div className="form-row">
          <Field
            id="email"
            label={t.email}
            type="email"
            placeholder={t.emailHint}
            autoComplete="email"
            required
          />
          <Field
            id="telefon"
            label={t.phone}
            type="tel"
            placeholder={t.phoneHint}
            autoComplete="tel"
          />
        </div>
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
