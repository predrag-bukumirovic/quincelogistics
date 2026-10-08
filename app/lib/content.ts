export const services = [
  {
    id: "ftl",
    tag: "FTL",
    title: "Kompletni utovari",
    short:
      "Ceo kamion samo za vašu robu — od utovara do istovara, bez pretovara.",
    text: "Kamion je rezervisan samo za vašu robu. Utovar na jednoj adresi, istovar na drugoj — bez usputnih stajanja, pretovara i čekanja na tuđe pošiljke. Najkraći rok i najmanje rukovanja robom.",
    specs: [
      ["Kapacitet", "do 33 EUR palete ili 24 t"],
      ["Pogodno za", "veće serije, osetljivu i vredniju robu"],
      ["Rok", "direktna vožnja, bez usputnih istovara"],
    ],
  },
  {
    id: "ltl",
    tag: "LTL",
    title: "Zbirni transport",
    short:
      "Za manje količine — delite kamion i plaćate samo prostor koji roba zauzima.",
    text: "Kada nemate robe za ceo kamion, vaše palete putuju u zbirnoj turi sa drugim pošiljkama na istom pravcu. Plaćate samo prostor koji zauzimaju, a rok ostaje predvidiv.",
    specs: [
      ["Količina", "već od jedne palete"],
      ["Pogodno za", "redovne manje isporuke, delove i uzorke"],
      ["Prednost", "niža cena po paleti"],
    ],
  },
  {
    id: "medjunarodni",
    tag: "SRB ⇄ EU",
    title: "Međunarodni transport",
    short:
      "Uvoz i izvoz kamionom između Srbije, zemalja regiona i Evropske unije.",
    text: "Vozimo uvoz i izvoz između Srbije, zemalja regiona i Evropske unije. Pripremamo CMR i prateću dokumentaciju, a carinske formalnosti usklađujemo sa vašim špediterom — da kamion ne stoji na granici.",
    specs: [
      ["Pravci", "Zapadni Balkan i Evropska unija"],
      ["Dokumenta", "CMR i prateća transportna dokumentacija"],
      ["Praćenje", "GPS lokacija vozila tokom cele ture"],
    ],
  },
  {
    id: "domaci",
    tag: "SRB",
    title: "Domaći transport",
    short:
      "Ture po celoj Srbiji — od jedne isporuke do redovne dopune distributivne mreže.",
    text: "Vozimo po celoj Srbiji: pojedinačne isporuke, redovne linije i dopunu magacina, prodajnih mesta i gradilišta. Na kraćim relacijama roba najčešće stiže isti ili sledeći dan.",
    specs: [
      ["Pokrivenost", "cela Srbija"],
      ["Rok", "isti ili sledeći dan, zavisno od relacije"],
      ["Pogodno za", "magacine, prodajna mesta i gradilišta"],
    ],
  },
];

export const steps = [
  {
    title: "Upit",
    text: "Pošaljete relaciju, količinu robe i željeni datum utovara — telefonom, mejlom ili preko forme na sajtu.",
  },
  {
    title: "Ponuda",
    text: "Dobijate cenu i rok, najčešće istog radnog dana. U ponudi je sve, bez stavki koje se pojave posle istovara.",
  },
  {
    title: "Utovar i vožnja",
    text: "Dispečer zakazuje utovar i prati vozilo. Status ture dobijate kad god ga zatražite.",
  },
  {
    title: "Istovar",
    text: "Roba stiže na adresu, a potpisan CMR i faktura stižu vama. Tura je zatvorena.",
  },
];

export const reasons = [
  {
    title: "Jedan dispečer za celu turu",
    text: "Znate koga zovete. Isti dispečer prati vašu robu od utovara do istovara.",
  },
  {
    title: "Praćenje vozila",
    text: "GPS lokacija i procena dolaska dostupni su vam tokom cele vožnje.",
  },
  {
    title: "Osigurana roba",
    text: "Svaki prevoz pokriven je CMR osiguranjem, a za vredniju robu ugovaramo i dodatno.",
  },
  {
    title: "Cena unapred",
    text: "Ponuda koju potvrdite je iznos koji plaćate. Bez naknadnih troškova.",
  },
];

export const faq = [
  {
    q: "Da li radite samo drumski transport?",
    a: "Da. Ne radimo pomorski, avio ni železnički prevoz, niti skladištenje — samo drumski transport robe, domaći i međunarodni. Zato ga dobro poznajemo.",
  },
  {
    q: "Kako se formira cena prevoza?",
    a: "Cena zavisi od relacije, količine robe (broja paleta ili težine), vrste robe i roka isporuke. Pošaljite nam te podatke i dobićete tačnu ponudu, najčešće istog radnog dana.",
  },
  {
    q: "Da li prevozite i manje količine?",
    a: "Da. U zbirnom transportu vozimo već od jedne palete — plaćate samo prostor koji vaša roba zauzima u kamionu.",
  },
  {
    q: "Kako mogu da pratim pošiljku?",
    a: "Vozila su opremljena GPS uređajima, a dispečer vam u svakom trenutku može javiti gde je kamion i kada se očekuje istovar.",
  },
  {
    q: "Da li je roba osigurana tokom prevoza?",
    a: "Svaki prevoz pokriven je CMR osiguranjem prevoznika. Za robu veće vrednosti možemo ugovoriti i dodatno osiguranje.",
  },
  {
    q: "Ko vodi računa o carinskoj dokumentaciji?",
    a: "Mi pripremamo CMR i prateću transportnu dokumentaciju, a carinske formalnosti usklađujemo sa vašim špediterom, kako bi kamion prošao granicu bez zadržavanja.",
  },
];

export const testimonials = [
  {
    quote:
      "Pre njih smo promenili tri prevoznika. Sada prvi put znamo ko vozi, gde je kamion i kada stiže — bez pet poziva dnevno.",
    role: "Šef logistike",
    company: "Proizvođač nameštaja, Čačak",
  },
  {
    quote:
      "Kada je kamion zapeo na granici, javili su nam pre nego što smo primetili kašnjenje. To je razlika između prevoznika i partnera.",
    role: "Rukovodilac nabavke",
    company: "Distributer građevinskog materijala, Novi Sad",
  },
  {
    quote:
      "Dve-tri palete nedeljno, uvek u istom terminu. Ništa spektakularno — jednostavno radi, svaki put.",
    role: "Vlasnik",
    company: "Proizvođač ambalaže, Subotica",
  },
];

export const countries = [
  "Srbija",
  "Bosna i Hercegovina",
  "Crna Gora",
  "Severna Makedonija",
  "Hrvatska",
  "Slovenija",
  "Mađarska",
  "Rumunija",
  "Bugarska",
  "Austrija",
  "Nemačka",
  "Italija",
];
