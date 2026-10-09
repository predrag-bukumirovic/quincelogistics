import type { SelectOption } from "../components/Select";
import type { Lang } from "./i18n";

// Zemlje u formi za ponudu (ISO 3166). Srbija je prva, ostale po abecedi.
const CODES = [
  "AL", "AT", "BA", "BE", "BG", "CH", "CZ", "DE", "DK", "EE", "ES", "FI",
  "FR", "GB", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MD", "ME",
  "MK", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK", "TR",
];

const LOCALES: Record<Lang, string> = { sr: "sr-Latn", en: "en", de: "de" };

const OTHER: Record<Lang, string> = {
  sr: "Druga zemlja",
  en: "Other country",
  de: "Anderes Land",
};

/**
 * Nazivi zemalja na jeziku strane. Poziva se na serveru, a gotova lista ide
 * formi kao prop — tako su nazivi isti pri renderovanju i u pregledaču.
 */
export function countryOptions(lang: Lang): SelectOption[] {
  const locale = LOCALES[lang];
  const names = new Intl.DisplayNames([locale], { type: "region" });
  const collator = new Intl.Collator(locale);
  const country = (code: string) => ({
    value: code,
    label: names.of(code) ?? code,
    hint: code,
  });
  const rest = CODES.map(country).sort((a, b) =>
    collator.compare(a.label, b.label)
  );
  // „Druga zemlja“ ostaje na dnu liste i kad pretraga ništa ne nađe.
  return [
    country("RS"),
    ...rest,
    { value: "other", label: OTHER[lang], pinned: true },
  ];
}
