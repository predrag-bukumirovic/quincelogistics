import type { Lang } from "./i18n";

type Service = {
  id: string;
  tag: string;
  title: string;
  short: string;
  text: string;
  specs: [string, string][];
};

type Item = { title: string; text: string };

export const services: Record<Lang, Service[]> = {
  sr: [
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
      tag: "Srbija ⇄ Evropa",
      title: "Međunarodni transport",
      short: "Uvoz i izvoz kamionom između Srbije i svih zemalja Evrope.",
      text: "Vozimo uvoz i izvoz između Srbije i cele Evrope — od Zapadnog Balkana do Skandinavije i Pirinejskog poluostrva, u EU i van nje. Pripremamo CMR i prateću dokumentaciju, a carinske formalnosti usklađujemo sa vašim špediterom — da kamion ne stoji na granici.",
      specs: [
        ["Pravci", "cela Evropa, u EU i van nje"],
        ["Dokumenta", "CMR i prateća transportna dokumentacija"],
        ["Praćenje", "GPS lokacija vozila tokom cele ture"],
      ],
    },
    {
      id: "domaci",
      tag: "Srbija",
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
  ],
  en: [
    {
      id: "ftl",
      tag: "FTL",
      title: "Full truckload",
      short:
        "A whole truck for your goods only — from loading to unloading, with no transhipment.",
      text: "The truck is reserved for your cargo alone. Loaded at one address, unloaded at another — no stops along the way, no transhipment and no waiting for other shipments. The fastest transit time with the least handling.",
      specs: [
        ["Capacity", "up to 33 EUR pallets or 24 t"],
        ["Best for", "larger volumes, sensitive and high-value goods"],
        ["Transit", "direct, with no intermediate drops"],
      ],
    },
    {
      id: "ltl",
      tag: "LTL",
      title: "Groupage",
      short:
        "For smaller volumes — share the truck and pay only for the space your goods take up.",
      text: "When you don't have enough for a full truck, your pallets travel on a groupage run with other shipments heading the same way. You pay only for the space they occupy, and delivery times stay predictable.",
      specs: [
        ["Volume", "from a single pallet"],
        ["Best for", "regular small deliveries, parts and samples"],
        ["Advantage", "lower price per pallet"],
      ],
    },
    {
      id: "international",
      tag: "Serbia ⇄ Europe",
      title: "International transport",
      short:
        "Import and export by truck between Serbia and every country in Europe.",
      text: "We haul imports and exports between Serbia and all of Europe — from the Western Balkans to Scandinavia and the Iberian Peninsula, inside and outside the EU. We prepare the CMR and accompanying documents and coordinate customs formalities with your forwarder, so the truck doesn't sit at the border.",
      specs: [
        ["Coverage", "all of Europe, inside and outside the EU"],
        ["Documents", "CMR and accompanying transport documents"],
        ["Tracking", "GPS vehicle location throughout the trip"],
      ],
    },
    {
      id: "domestic",
      tag: "Serbia",
      title: "Domestic transport",
      short:
        "Runs across Serbia — from a single delivery to regular replenishment of your distribution network.",
      text: "We drive all over Serbia: one-off deliveries, scheduled routes and replenishment of warehouses, stores and construction sites. On shorter routes, goods usually arrive the same or the next day.",
      specs: [
        ["Coverage", "all of Serbia"],
        ["Transit", "same or next day, depending on the route"],
        ["Best for", "warehouses, stores and construction sites"],
      ],
    },
  ],
  de: [
    {
      id: "ftl",
      tag: "FTL",
      title: "Komplettladungen",
      short:
        "Ein ganzer Lkw nur für Ihre Ware – von der Beladung bis zur Entladung, ohne Umladen.",
      text: "Der Lkw ist ausschließlich für Ihre Ware reserviert. Beladung an einer Adresse, Entladung an einer anderen – ohne Zwischenstopps, ohne Umladen und ohne Warten auf fremde Sendungen. Die kürzeste Laufzeit bei geringstem Handling.",
      specs: [
        ["Kapazität", "bis zu 33 Europaletten oder 24 t"],
        ["Geeignet für", "größere Mengen, empfindliche und hochwertige Ware"],
        ["Laufzeit", "Direktfahrt ohne Zwischenentladung"],
      ],
    },
    {
      id: "ltl",
      tag: "LTL",
      title: "Teilladungen",
      short:
        "Für kleinere Mengen – Sie teilen sich den Lkw und zahlen nur den Platz, den Ihre Ware belegt.",
      text: "Wenn Ihre Ware keinen ganzen Lkw füllt, fahren Ihre Paletten in einer Sammeltour mit anderen Sendungen in dieselbe Richtung. Sie zahlen nur den belegten Platz, und die Laufzeit bleibt planbar.",
      specs: [
        ["Menge", "ab einer Palette"],
        ["Geeignet für", "regelmäßige kleinere Lieferungen, Teile und Muster"],
        ["Vorteil", "günstigerer Preis pro Palette"],
      ],
    },
    {
      id: "international",
      tag: "Serbien ⇄ Europa",
      title: "Internationale Transporte",
      short:
        "Import und Export per Lkw zwischen Serbien und allen Ländern Europas.",
      text: "Wir fahren Import und Export zwischen Serbien und ganz Europa – vom Westbalkan bis nach Skandinavien und auf die Iberische Halbinsel, innerhalb und außerhalb der EU. Wir erstellen den CMR-Frachtbrief und die Begleitpapiere und stimmen die Zollformalitäten mit Ihrem Spediteur ab, damit der Lkw nicht an der Grenze steht.",
      specs: [
        ["Abdeckung", "ganz Europa, innerhalb und außerhalb der EU"],
        ["Dokumente", "CMR-Frachtbrief und Begleitpapiere"],
        ["Tracking", "GPS-Ortung während der gesamten Tour"],
      ],
    },
    {
      id: "serbien",
      tag: "Serbien",
      title: "Transporte in Serbien",
      short:
        "Touren in ganz Serbien – von der Einzellieferung bis zur regelmäßigen Belieferung Ihres Vertriebsnetzes.",
      text: "Wir fahren in ganz Serbien: Einzellieferungen, feste Linien und die Belieferung von Lagern, Verkaufsstellen und Baustellen. Auf kürzeren Strecken kommt die Ware meist am selben oder am nächsten Tag an.",
      specs: [
        ["Abdeckung", "ganz Serbien"],
        ["Laufzeit", "am selben oder nächsten Tag, je nach Strecke"],
        ["Geeignet für", "Lager, Verkaufsstellen und Baustellen"],
      ],
    },
  ],
};

export const steps: Record<Lang, Item[]> = {
  sr: [
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
  ],
  en: [
    {
      title: "Enquiry",
      text: "Send us the route, volume and preferred loading date — by phone, email or the form on this site.",
    },
    {
      title: "Quote",
      text: "You get a price and transit time, usually the same working day. Everything is included — no surprise charges after delivery.",
    },
    {
      title: "Loading and transit",
      text: "Your dispatcher books the loading slot and tracks the truck. You get a status update whenever you ask.",
    },
    {
      title: "Delivery",
      text: "The goods arrive, and the signed CMR and invoice come to you. Job closed.",
    },
  ],
  de: [
    {
      title: "Anfrage",
      text: "Sie senden uns Strecke, Menge und gewünschtes Ladedatum – per Telefon, E-Mail oder über das Formular auf der Website.",
    },
    {
      title: "Angebot",
      text: "Sie erhalten Preis und Laufzeit, meist noch am selben Werktag. Alles ist enthalten – ohne Zusatzkosten nach der Entladung.",
    },
    {
      title: "Beladung und Transport",
      text: "Ihr Disponent bucht das Ladefenster und verfolgt den Lkw. Den Status erhalten Sie jederzeit auf Anfrage.",
    },
    {
      title: "Entladung",
      text: "Die Ware kommt an, das unterschriebene CMR und die Rechnung gehen an Sie. Auftrag abgeschlossen.",
    },
  ],
};

export const reasons: Record<Lang, Item[]> = {
  sr: [
    {
      title: "Sopstveni kamioni",
      text: "Robu vozimo sopstvenim kamionima, sa svojim vozačima — za svako vozilo znamo u kakvom je stanju i gde je.",
    },
    {
      title: "Dispečerski centar 24/7",
      text: "Naš dispečerski centar radi danonoćno, svakog dana. Svaku turu vodi jedan dispečer — uvek znate koga zovete.",
    },
    {
      title: "Logistička podrška",
      text: "Pomažemo i pre utovara: oko planiranja tura, izbora vrste prevoza, dokumentacije i usklađivanja sa špediterom.",
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
  ],
  en: [
    {
      title: "Our own trucks",
      text: "We haul your goods with our own trucks and our own drivers — we know the condition and location of every vehicle.",
    },
    {
      title: "24/7 dispatch centre",
      text: "Our dispatch centre works around the clock, every day. Each load has one dispatcher — you always know who to call.",
    },
    {
      title: "Logistics support",
      text: "We help before loading too: route planning, choosing the right type of transport, paperwork and coordination with your forwarder.",
    },
    {
      title: "Vehicle tracking",
      text: "GPS location and an estimated arrival time are available throughout the journey.",
    },
    {
      title: "Insured cargo",
      text: "Every shipment is covered by CMR insurance, and we arrange additional cover for high-value goods.",
    },
    {
      title: "Price up front",
      text: "The quote you confirm is the amount you pay. No extra charges afterwards.",
    },
  ],
  de: [
    {
      title: "Eigene Lkw",
      text: "Wir transportieren Ihre Ware mit eigenen Lkw und eigenen Fahrern – wir kennen Zustand und Standort jedes Fahrzeugs.",
    },
    {
      title: "Disposition rund um die Uhr",
      text: "Unsere Dispositionszentrale arbeitet rund um die Uhr, jeden Tag. Jede Tour betreut ein Disponent – Sie wissen immer, wen Sie anrufen.",
    },
    {
      title: "Logistische Unterstützung",
      text: "Wir helfen schon vor der Beladung: bei der Tourenplanung, der Wahl der Transportart, den Papieren und der Abstimmung mit Ihrem Spediteur.",
    },
    {
      title: "Fahrzeugortung",
      text: "GPS-Position und voraussichtliche Ankunftszeit stehen Ihnen während der gesamten Fahrt zur Verfügung.",
    },
    {
      title: "Versicherte Ware",
      text: "Jeder Transport ist durch eine CMR-Versicherung abgedeckt, für hochwertige Ware vereinbaren wir zusätzlichen Schutz.",
    },
    {
      title: "Preis im Voraus",
      text: "Das bestätigte Angebot ist der Betrag, den Sie zahlen. Ohne nachträgliche Kosten.",
    },
  ],
};

export const faq: Record<Lang, { q: string; a: string }[]> = {
  sr: [
    {
      q: "Da li radite samo drumski transport?",
      a: "Da. Ne radimo pomorski, avio ni železnički prevoz, niti skladištenje — samo drumski transport robe, domaći i međunarodni. Zato ga dobro poznajemo.",
    },
    {
      q: "Da li vozite sopstvenim kamionima?",
      a: "Da. Robu vozimo sopstvenim kamionima i sa svojim vozačima, a svaku turu vodi naš dispečerski centar, koji radi 24/7.",
    },
    {
      q: "U koje zemlje vozite?",
      a: "Po celoj Srbiji i u sve zemlje Evrope — u Evropsku uniju, zemlje regiona i zemlje van Unije. Pošaljite relaciju i javljamo se sa cenom i rokom.",
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
      a: "Vozila su opremljena GPS uređajima, a naš dispečerski centar radi 24/7 — u svakom trenutku vam može javiti gde je kamion i kada se očekuje istovar.",
    },
    {
      q: "Da li je roba osigurana tokom prevoza?",
      a: "Svaki prevoz pokriven je CMR osiguranjem prevoznika. Za robu veće vrednosti možemo ugovoriti i dodatno osiguranje.",
    },
    {
      q: "Ko vodi računa o carinskoj dokumentaciji?",
      a: "Mi pripremamo CMR i prateću transportnu dokumentaciju, a carinske formalnosti usklađujemo sa vašim špediterom, kako bi kamion prošao granicu bez zadržavanja.",
    },
  ],
  en: [
    {
      q: "Do you only do road freight?",
      a: "Yes. We don't offer sea, air or rail freight, or warehousing — only road transport of goods, domestic and international. That's why we know it well.",
    },
    {
      q: "Do you use your own trucks?",
      a: "Yes. We haul with our own trucks and our own drivers, and every load is managed by our dispatch centre, which works 24/7.",
    },
    {
      q: "Which countries do you cover?",
      a: "All of Serbia and every country in Europe — the EU, the Western Balkans and countries outside the EU. Send us your route and we'll come back with a price and transit time.",
    },
    {
      q: "How is the price calculated?",
      a: "It depends on the route, the volume (number of pallets or weight), the type of goods and the delivery deadline. Send us those details and you'll get an exact quote, usually the same working day.",
    },
    {
      q: "Do you carry smaller shipments?",
      a: "Yes. With groupage we carry anything from a single pallet — you pay only for the space your goods take up in the truck.",
    },
    {
      q: "How can I track my shipment?",
      a: "Our trucks have GPS tracking, and our dispatch centre works 24/7 — it can tell you at any time where the truck is and when unloading is expected.",
    },
    {
      q: "Are goods insured in transit?",
      a: "Every shipment is covered by the carrier's CMR insurance. For high-value goods we can also arrange additional cover.",
    },
    {
      q: "Who handles the customs paperwork?",
      a: "We prepare the CMR and accompanying transport documents and coordinate customs formalities with your forwarder, so the truck crosses the border without delays.",
    },
  ],
  de: [
    {
      q: "Bieten Sie nur Straßentransporte an?",
      a: "Ja. Wir bieten weder See-, Luft- noch Bahnfracht oder Lagerung an – nur Straßentransporte, national und international. Deshalb kennen wir sie so gut.",
    },
    {
      q: "Fahren Sie mit eigenen Lkw?",
      a: "Ja. Wir fahren mit eigenen Lkw und eigenen Fahrern, und jede Tour wird von unserer Disposition betreut, die rund um die Uhr arbeitet.",
    },
    {
      q: "In welche Länder fahren Sie?",
      a: "In ganz Serbien und in alle Länder Europas – in die EU, in die Länder des Westbalkans und in Länder außerhalb der EU. Senden Sie uns Ihre Strecke, und wir melden uns mit Preis und Laufzeit.",
    },
    {
      q: "Wie wird der Preis berechnet?",
      a: "Der Preis hängt von der Strecke, der Menge (Anzahl der Paletten oder Gewicht), der Warenart und dem Liefertermin ab. Senden Sie uns diese Angaben, und Sie erhalten ein genaues Angebot, meist noch am selben Werktag.",
    },
    {
      q: "Transportieren Sie auch kleinere Mengen?",
      a: "Ja. Als Teilladung fahren wir bereits ab einer Palette – Sie zahlen nur den Platz, den Ihre Ware im Lkw belegt.",
    },
    {
      q: "Wie kann ich meine Sendung verfolgen?",
      a: "Unsere Fahrzeuge sind mit GPS ausgestattet, und unsere Disposition ist rund um die Uhr erreichbar – sie kann Ihnen jederzeit sagen, wo der Lkw ist und wann die Entladung erwartet wird.",
    },
    {
      q: "Ist die Ware während des Transports versichert?",
      a: "Jeder Transport ist durch die CMR-Versicherung des Frachtführers abgedeckt. Für Ware mit höherem Wert können wir eine Zusatzversicherung vereinbaren.",
    },
    {
      q: "Wer kümmert sich um die Zollpapiere?",
      a: "Wir erstellen den CMR-Frachtbrief und die Begleitpapiere und stimmen die Zollformalitäten mit Ihrem Spediteur ab, damit der Lkw die Grenze ohne Verzögerung passiert.",
    },
  ],
};

export const testimonials: Record<
  Lang,
  { quote: string; role: string; company: string }[]
> = {
  sr: [
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
  ],
  en: [
    {
      quote:
        "Before them we went through three carriers. Now, for the first time, we know who's driving, where the truck is and when it arrives — without five phone calls a day.",
      role: "Head of Logistics",
      company: "Furniture manufacturer, Čačak",
    },
    {
      quote:
        "When the truck got stuck at the border, they told us before we'd even noticed the delay. That's the difference between a carrier and a partner.",
      role: "Procurement Manager",
      company: "Building materials distributor, Novi Sad",
    },
    {
      quote:
        "Two or three pallets a week, always in the same slot. Nothing spectacular — it just works, every time.",
      role: "Owner",
      company: "Packaging manufacturer, Subotica",
    },
  ],
  de: [
    {
      quote:
        "Vor ihnen hatten wir drei Frachtführer. Jetzt wissen wir zum ersten Mal, wer fährt, wo der Lkw ist und wann er ankommt – ohne fünf Anrufe am Tag.",
      role: "Leitung Logistik",
      company: "Möbelhersteller, Čačak",
    },
    {
      quote:
        "Als der Lkw an der Grenze festhing, haben sie uns informiert, bevor wir die Verspätung überhaupt bemerkt hatten. Das ist der Unterschied zwischen einem Frachtführer und einem Partner.",
      role: "Leitung Einkauf",
      company: "Baustoffhändler, Novi Sad",
    },
    {
      quote:
        "Zwei, drei Paletten pro Woche, immer im selben Zeitfenster. Nichts Spektakuläres – es funktioniert einfach, jedes Mal.",
      role: "Inhaber",
      company: "Verpackungshersteller, Subotica",
    },
  ],
};

export const countries: Record<Lang, string[]> = {
  sr: [
    "Srbija",
    "Nemačka",
    "Austrija",
    "Italija",
    "Francuska",
    "Španija",
    "Holandija",
    "Belgija",
    "Švajcarska",
    "Danska",
    "Švedska",
    "Poljska",
    "Češka",
    "Slovačka",
    "Mađarska",
    "Slovenija",
    "Hrvatska",
    "Bosna i Hercegovina",
    "Crna Gora",
    "Severna Makedonija",
    "Rumunija",
    "Bugarska",
    "Grčka",
  ],
  en: [
    "Serbia",
    "Germany",
    "Austria",
    "Italy",
    "France",
    "Spain",
    "Netherlands",
    "Belgium",
    "Switzerland",
    "Denmark",
    "Sweden",
    "Poland",
    "Czechia",
    "Slovakia",
    "Hungary",
    "Slovenia",
    "Croatia",
    "Bosnia and Herzegovina",
    "Montenegro",
    "North Macedonia",
    "Romania",
    "Bulgaria",
    "Greece",
  ],
  de: [
    "Serbien",
    "Deutschland",
    "Österreich",
    "Italien",
    "Frankreich",
    "Spanien",
    "Niederlande",
    "Belgien",
    "Schweiz",
    "Dänemark",
    "Schweden",
    "Polen",
    "Tschechien",
    "Slowakei",
    "Ungarn",
    "Slowenien",
    "Kroatien",
    "Bosnien und Herzegowina",
    "Montenegro",
    "Nordmazedonien",
    "Rumänien",
    "Bulgarien",
    "Griechenland",
  ],
};
