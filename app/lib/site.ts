// Telefon i WhatsApp su privremeni — zameniti pravim brojevima pre objave.
export const site = {
  name: "QuinceLogistics",
  url: "https://quincelogistics.com",
  phone: { display: "+381 11 123 4567", href: "tel:+381111234567" },
  // Broj u međunarodnom formatu, samo cifre (za wa.me link).
  whatsapp: "381111234567",
  email: "info@quincelogistics.com",
  address: {
    street: "Kovači 5",
    postalCode: "31300",
    city: { sr: "Prijepolje", en: "Prijepolje", de: "Prijepolje" },
    country: { sr: "Srbija", en: "Serbia", de: "Serbien" },
  },
  hours: [
    {
      days: {
        sr: "Ponedeljak – petak",
        en: "Monday – Friday",
        de: "Montag – Freitag",
      },
      time: "08:00 – 17:00",
    },
    {
      days: { sr: "Subota", en: "Saturday", de: "Samstag" },
      time: "08:00 – 13:00",
    },
  ],
  pib: "113090680",
  mb: "66570878",
  social: [] as { label: string; href: string }[],
};
