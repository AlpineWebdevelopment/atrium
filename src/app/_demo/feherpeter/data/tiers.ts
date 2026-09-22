import type { Tier } from "./types";

/* Tier names are placeholders Péter will rename; prices are illustrative and
   display-only. Both are editable in /admin/szintek, and everything that shows
   a tier name (badges, role switcher, upgrade modal) reads it from the store. */
export const TIERS: Tier[] = [
  {
    id: "alap",
    level: 1,
    name: "Alap",
    priceLabel: "9 900 Ft / hó",
    tagline: "Az alapok, egy közösséggel, amely számon tart.",
    inclusions: [
      "Az alapozó kurzusok teljes anyaga",
      "Közösség: olvasás, kérdés, hozzászólás",
      "Heti feladat Pétertől",
      "Nyitó estek és nyílt workshopok",
    ],
    adds: [
      "Az alapozó kurzusok hétről hétre megnyíló leckéi",
      "Hozzáférés a közösséghez és a heti feladatokhoz",
    ],
  },
  {
    id: "halado",
    level: 2,
    name: "Haladó",
    priceLabel: "24 900 Ft / hó",
    tagline: "Mélyebb anyag, és havonta egy óra Péterrel élőben.",
    inclusions: [
      "Minden, ami az Alap szinten",
      "A haladó kurzusok: értékesítés, networking, delegálás",
      "Havi élő Q&A Péterrel",
      "Az élő adások felvételei a tárban",
    ],
    adds: [
      "A haladó kurzusok: értékesítés, networking, delegálás",
      "Havonta élő Q&A, ahol Péter a tagok kérdéseire válaszol",
      "Minden élő adás felvétele visszanézhető a tárban",
    ],
  },
  {
    id: "belso",
    level: 3,
    name: "Belső kör",
    priceLabel: "79 900 Ft / hó",
    tagline: "Kiscsoportos munka Péterrel, korlátozott létszámmal.",
    inclusions: [
      "Minden, ami a Haladó szinten",
      "Havi kiscsoportos alkalom Péterrel",
      "Közvetlen üzenet Péternek",
      "Kiemelt kérdés az asszisztensen keresztül",
      "A Belső kör saját kurzusa és felvételei",
    ],
    adds: [
      "Havonta kiscsoportos alkalom, ahol a saját helyzeteden dolgozunk",
      "Közvetlen üzenet Péternek két alkalom között",
      "Kiemelt kérdés: amit az asszisztens nem tud, Péter elé kerül",
    ],
  },
];
