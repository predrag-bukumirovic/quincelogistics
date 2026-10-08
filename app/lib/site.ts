// Kontakt podaci su privremeni — zameniti pravim podacima pre objave.
export const site = {
  name: "QuinceLogistics",
  phone: { display: "+381 11 123 4567", href: "tel:+381111234567" },
  email: "info@quincelogistics.rs",
  address: {
    street: "Industrijska zona bb",
    postalCode: "11000",
    city: "Beograd",
    country: "Srbija",
  },
  hours: [
    { days: "Ponedeljak – petak", time: "08:00 – 17:00" },
    { days: "Subota", time: "08:00 – 13:00" },
  ],
  // PIB i matični broj se prikazuju u futeru čim se upišu.
  pib: "",
  mb: "",
  social: [] as { label: string; href: string }[],
};

export const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/usluge", label: "Usluge" },
  { href: "/resenja", label: "Rešenja" },
  { href: "/reference", label: "Reference" },
  { href: "/karijera", label: "Karijera" },
];
