/* Atlas — demo data. Every company, person, phone number and conversation here
   is invented.

   Two rules hold this file together:

   1. Nothing is computed from the wall clock. `DEMO_TODAY` is the only "now",
      and every date is either a literal string or derived from it by UTC day
      arithmetic. The server render and the client render therefore agree.
   2. Aggregates are derived, never re-typed. Per-client daily series are the
      source of truth for call volume; minute usage, outcome breakdowns, weekly
      agent counts and every dashboard KPI fall out of them. Editing a series
      moves the whole console consistently.

   The numeric series were produced once by an offline generator with a fixed
   seed and pasted in as literals — there is no randomness at render time. */

export const APP_NAME = "Atlas";
export const DEMO_TODAY = "2026-08-03";

/** The signed-in operator. Shown in the topbar chip. */
export const OPERATOR = { nev: "R. Norbert", szerep: "Operátor" } as const;

// ---------------------------------------------------------------------------
// Dates
// ---------------------------------------------------------------------------

function napokkalKorabban(iso: string, n: number): string {
  const t = Date.parse(`${iso}T00:00:00Z`) - n * 86_400_000;
  return new Date(t).toISOString().slice(0, 10);
}

/** Full window the data covers: 2026-07-01 … 2026-08-03 (34 days). */
export const NAPOK: readonly string[] = Array.from({ length: 34 }, (_, i) =>
  napokkalKorabban(DEMO_TODAY, 33 - i),
);

/** Index of the first day of the trailing 30-day window. */
const UTOLSO_30_KEZDET = NAPOK.length - 30;
/** Index of the first day of the trailing 7-day window. */
const UTOLSO_7_KEZDET = NAPOK.length - 7;

/** The reporting month the Riportok screen is pinned to. */
export const RIPORT_HONAP = "2026-07-01";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type UgyfelStatusz = "aktiv" | "szunetel";
export type AgentTipus = "hang" | "email";
export type AgentNyelv = "magyar" | "lengyel" | "angol";
export type AgentStatusz = "elo" | "szunetel";
export type Irany = "be" | "ki";
export type Kimenetel =
  | "foglalva"
  | "visszahivas"
  | "nem_vette_fel"
  | "elutasitotta"
  | "hangposta";
export type Szakasz = "uj" | "megkeresve" | "erdeklodik" | "idopont" | "lezarva";
export type KampanyStatusz = "fut" | "szunetel" | "lezarva";
export type AktivitasTipus =
  | "foglalas"
  | "visszahivas"
  | "email"
  | "elutasitas"
  | "kontakt"
  | "rendszer";

export interface Ugyfel {
  id: string;
  nev: string;
  /** Compact label for tight card layouts. Unique across clients. */
  rovidNev: string;
  iparag: string;
  varos: string;
  kezelo: string;
  perckeret: number;
  /** Average call length in minutes. Minute usage is derived from this. */
  atlagPercPerHivas: number;
  statusz: UgyfelStatusz;
  /** Daily call counts, aligned to `NAPOK`. */
  hivasSor: readonly number[];
  /** Daily booked-appointment counts, aligned to `NAPOK`. */
  foglalasSor: readonly number[];
  /** Outcome mix. Sums to 1. `foglalva` is taken from `foglalasSor` instead. */
  kimenetelArany: Readonly<Record<Kimenetel, number>>;
}

export interface EszkalaciosSzabaly {
  feltetel: string;
  akcio: string;
}

export interface Agent {
  id: string;
  nev: string;
  ugyfelId: string;
  tipus: AgentTipus;
  nyelv: AgentNyelv;
  statusz: AgentStatusz;
  /** Voice agents only. */
  telefonszam?: string;
  hangprofil?: string;
  beszedtempo?: number;
  nyitoMondat?: string;
  /** E-mail agents only. */
  feladoNev?: string;
  feladoCim?: string;
  targySablon?: string;
  cel: "Időpontfoglalás" | "Árajánlat-utánkövetés" | "Reaktiválás";
  munkaidoTol: string;
  munkaidoIg: string;
  hangpostaKezeles: boolean;
  eszkalacio: readonly EszkalaciosSzabaly[];
  /** Share of the client's call volume this agent handles. Voice agents only. */
  volumenArany?: number;
  /** E-mail agents: messages sent in the last 7 days. */
  hetiEmail?: number;
}

export interface Kontakt {
  id: string;
  nev: string;
  ceg: string;
  pozicio: string;
  telefon: string;
  ugyfelId: string;
  szakasz: Szakasz;
  ertek: number;
  utolsoEsemeny: string;
  utolsoKapcsolat: string;
}

export interface Hivas {
  id: string;
  datum: string;
  ido: string;
  ugyfelId: string;
  agentId: string;
  kontaktId: string;
  irany: Irany;
  hosszMp: number;
  kimenetel: Kimenetel;
  /** Set on the two calls that carry a full transcript. */
  atiratId?: string;
}

export interface AtiratSor {
  ki: "agent" | "ugyfel";
  idopont: string;
  szoveg: string;
  /** Hungarian rendering, for the non-Hungarian transcript. */
  forditas?: string;
}

export interface Atirat {
  id: string;
  nyelv: AgentNyelv;
  /** True when the bubbles need a translation toggle. */
  fordithato: boolean;
  sorok: readonly AtiratSor[];
}

export interface KampanyLepes {
  sorszam: number;
  /** Days waited before this step. 0 for the first. */
  varakozasNap: number;
  targy: string;
  elonezet: string;
}

export interface Kampany {
  id: string;
  nev: string;
  ugyfelId: string;
  agentId: string;
  statusz: KampanyStatusz;
  elkuldve: number;
  megnyitva: number;
  valasz: number;
  lepesek: readonly KampanyLepes[];
}

export interface Aktivitas {
  id: string;
  tipus: AktivitasTipus;
  szoveg: string;
  ugyfelId: string;
  ido: string;
}

export interface Idopont {
  id: string;
  ugyfelId: string;
  datum: string;
  ido: string;
  kontaktNev: string;
  ceg: string;
  targy: string;
}

export interface Telefonszam {
  szam: string;
  agentId: string | null;
  tipus: "Mobil" | "Vezetékes";
  varos: string;
}

export interface CsapatTag {
  nev: string;
  szerep: string;
  email: string;
  utolsoBelepes: string;
}

// ---------------------------------------------------------------------------
// Label maps
// ---------------------------------------------------------------------------

export const UGYFEL_STATUSZ_CIMKE: Record<UgyfelStatusz, string> = {
  aktiv: "Aktív",
  szunetel: "Szünetel",
};

export const AGENT_TIPUS_CIMKE: Record<AgentTipus, string> = {
  hang: "Hang",
  email: "E-mail",
};

export const AGENT_NYELV_CIMKE: Record<AgentNyelv, string> = {
  magyar: "magyar",
  lengyel: "lengyel",
  angol: "angol",
};

export const AGENT_STATUSZ_CIMKE: Record<AgentStatusz, string> = {
  elo: "Élő",
  szunetel: "Szünetel",
};

export const IRANY_CIMKE: Record<Irany, string> = {
  be: "Bejövő",
  ki: "Kimenő",
};

export const KIMENETEL_CIMKE: Record<Kimenetel, string> = {
  foglalva: "Időpont foglalva",
  visszahivas: "Visszahívást kér",
  nem_vette_fel: "Nem vette fel",
  elutasitotta: "Elutasította",
  hangposta: "Hangposta",
};

export const KIMENETEL_SORREND: readonly Kimenetel[] = [
  "foglalva",
  "visszahivas",
  "nem_vette_fel",
  "hangposta",
  "elutasitotta",
];

export const SZAKASZ_CIMKE: Record<Szakasz, string> = {
  uj: "Új",
  megkeresve: "Megkeresve",
  erdeklodik: "Érdeklődik",
  idopont: "Időpont egyeztetve",
  lezarva: "Lezárva",
};

export const SZAKASZ_SORREND: readonly Szakasz[] = [
  "uj",
  "megkeresve",
  "erdeklodik",
  "idopont",
  "lezarva",
];

export const KAMPANY_STATUSZ_CIMKE: Record<KampanyStatusz, string> = {
  fut: "Fut",
  szunetel: "Szünetel",
  lezarva: "Lezárva",
};

/** Named voice options per language. All fictional. */
export const HANGPROFILOK: Record<AgentNyelv, readonly string[]> = {
  magyar: ["Réka — semleges", "Zsófia — meleg", "Bence — mély"],
  lengyel: ["Kasia — semleges", "Ola — meleg", "Marek — mély"],
  angol: ["Nora — semleges", "Iris — meleg", "Owen — mély"],
};

export const CELOK = ["Időpontfoglalás", "Árajánlat-utánkövetés", "Reaktiválás"] as const;

// ---------------------------------------------------------------------------
// Clients
// ---------------------------------------------------------------------------

/* The four leading days (07-01 … 07-04) extend each series so the July report
   covers a whole month; the dashboard reads only the trailing 30 days. */

export const UGYFELEK: readonly Ugyfel[] = [
  {
    id: "c1",
    nev: "Fémtech-Precíz Kft.",
    rovidNev: "Fémtech-Precíz",
    iparag: "Gépipari alkatrészgyártás",
    varos: "Székesfehérvár",
    kezelo: "R. Norbert",
    perckeret: 2000,
    atlagPercPerHivas: 2.0,
    statusz: "aktiv",
    hivasSor: [
      29, 26, 22, 2, 1, 30, 31, 31, 27, 24, 2, 1, 26, 27, 30, 33, 24, 2, 1, 27,
      29, 32, 26, 23, 2, 1, 28, 38, 29, 35, 23, 2, 1, 34,
    ],
    foglalasSor: [
      4, 3, 3, 0, 0, 4, 6, 4, 3, 4, 0, 0, 3, 5, 5, 5, 3, 0, 0, 3, 3, 5, 5, 3, 0,
      0, 5, 6, 4, 4, 3, 0, 0, 4,
    ],
    kimenetelArany: {
      foglalva: 0.14,
      visszahivas: 0.17,
      nem_vette_fel: 0.35,
      hangposta: 0.2,
      elutasitotta: 0.14,
    },
  },
  {
    id: "c2",
    nev: "Pannon Csomagolóanyag Zrt.",
    rovidNev: "Pannon",
    iparag: "Csomagolóanyag-gyártás",
    varos: "Győr",
    kezelo: "Kovács Dániel",
    perckeret: 1500,
    atlagPercPerHivas: 3.26,
    statusz: "aktiv",
    hivasSor: [
      15, 14, 11, 1, 0, 18, 15, 16, 15, 12, 1, 0, 14, 15, 15, 17, 14, 1, 0, 16,
      15, 20, 16, 12, 1, 0, 17, 18, 19, 15, 16, 1, 1, 20,
    ],
    foglalasSor: [
      2, 2, 1, 0, 0, 3, 2, 2, 2, 1, 0, 0, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 1, 0,
      0, 2, 3, 3, 2, 2, 0, 0, 3,
    ],
    kimenetelArany: {
      foglalva: 0.13,
      visszahivas: 0.18,
      nem_vette_fel: 0.34,
      hangposta: 0.21,
      elutasitotta: 0.14,
    },
  },
  {
    id: "c3",
    nev: "Alföldi Baromfi Kft.",
    rovidNev: "Alföldi",
    iparag: "Baromfifeldolgozás",
    varos: "Kecskemét",
    kezelo: "Szabó Réka",
    perckeret: 1200,
    atlagPercPerHivas: 1.5,
    statusz: "aktiv",
    hivasSor: [
      12, 12, 9, 1, 0, 13, 13, 13, 12, 10, 1, 0, 11, 13, 13, 13, 11, 1, 0, 15,
      12, 14, 13, 10, 1, 0, 13, 17, 13, 12, 12, 1, 0, 11,
    ],
    foglalasSor: [
      1, 1, 1, 0, 0, 1, 1, 1, 2, 1, 0, 0, 1, 1, 1, 2, 1, 0, 0, 1, 1, 1, 2, 1, 0,
      0, 2, 2, 2, 1, 1, 0, 0, 1,
    ],
    kimenetelArany: {
      foglalva: 0.1,
      visszahivas: 0.14,
      nem_vette_fel: 0.4,
      hangposta: 0.22,
      elutasitotta: 0.14,
    },
  },
  {
    id: "c4",
    nev: "Vasvár Szerkezet Kft.",
    rovidNev: "Vasvár",
    iparag: "Fémszerkezet-gyártás",
    varos: "Debrecen",
    kezelo: "R. Norbert",
    perckeret: 2500,
    atlagPercPerHivas: 2.5,
    statusz: "aktiv",
    hivasSor: [
      31, 33, 28, 2, 1, 39, 33, 32, 35, 30, 2, 1, 34, 38, 47, 32, 36, 2, 1, 45,
      49, 45, 45, 38, 3, 1, 46, 46, 44, 46, 43, 3, 1, 54,
    ],
    foglalasSor: [
      3, 3, 3, 0, 0, 3, 4, 3, 3, 3, 0, 0, 3, 4, 6, 3, 4, 0, 0, 5, 6, 4, 5, 4, 0,
      0, 4, 4, 4, 5, 5, 0, 0, 5,
    ],
    kimenetelArany: {
      foglalva: 0.1,
      visszahivas: 0.15,
      nem_vette_fel: 0.41,
      hangposta: 0.2,
      elutasitotta: 0.14,
    },
  },
  {
    id: "c5",
    nev: "Polimer Forma Kft.",
    rovidNev: "Polimer",
    iparag: "Műanyagfröccsöntés",
    varos: "Szeged",
    kezelo: "Tóth Márk",
    perckeret: 1000,
    atlagPercPerHivas: 2.99,
    statusz: "szunetel",
    hivasSor: [
      16, 15, 10, 1, 0, 17, 17, 13, 17, 11, 1, 0, 14, 17, 13, 14, 13, 1, 0, 12,
      16, 12, 15, 10, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    foglalasSor: [
      2, 2, 1, 0, 0, 2, 2, 1, 2, 1, 0, 0, 2, 2, 2, 2, 1, 0, 0, 1, 2, 1, 2, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    kimenetelArany: {
      foglalva: 0.11,
      visszahivas: 0.16,
      nem_vette_fel: 0.39,
      hangposta: 0.2,
      elutasitotta: 0.14,
    },
  },
  {
    id: "c6",
    nev: "Bükkfa Manufaktúra Kft.",
    rovidNev: "Bükkfa",
    iparag: "Faipari gyártás",
    varos: "Miskolc",
    kezelo: "Szabó Réka",
    perckeret: 800,
    atlagPercPerHivas: 2.0,
    statusz: "aktiv",
    hivasSor: [
      3, 3, 2, 0, 0, 3, 4, 3, 3, 3, 0, 0, 4, 5, 3, 5, 3, 0, 0, 5, 5, 5, 4, 3, 0,
      0, 5, 6, 6, 5, 3, 0, 0, 5,
    ],
    foglalasSor: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0,
      0, 1, 1, 1, 1, 0, 0, 0, 1,
    ],
    kimenetelArany: {
      foglalva: 0.13,
      visszahivas: 0.15,
      nem_vette_fel: 0.38,
      hangposta: 0.2,
      elutasitotta: 0.14,
    },
  },
];

// ---------------------------------------------------------------------------
// Agents
// ---------------------------------------------------------------------------

const ESZK_FEMTECH: readonly EszkalaciosSzabaly[] = [
  { feltetel: "Ha az ügyfél embert kér", akcio: "Átirányítás: +36 30 447 1200" },
  { feltetel: "Ha panasz hangzik el", akcio: "Azonnali átirányítás: +36 30 447 1205" },
  { feltetel: "Ha a hívás meghaladja a 8 percet", akcio: "Átirányítás: +36 30 447 1200" },
  { feltetel: "Ha árat kérdeznek", akcio: "Ajánlatkérés rögzítése, átadás a műszaki kollégának" },
];

export const AGENTEK: readonly Agent[] = [
  {
    id: "a1",
    nev: "Bejövő recepció",
    ugyfelId: "c1",
    tipus: "hang",
    nyelv: "magyar",
    statusz: "elo",
    telefonszam: "+36 30 214 8870",
    hangprofil: "Réka — semleges",
    beszedtempo: 1.0,
    nyitoMondat:
      "Fémtech-Precíz Kft., jó napot kívánok. Az iroda digitális asszisztense vagyok, a kollégák helyett veszem fel a hívást. Miben segíthetek?",
    cel: "Időpontfoglalás",
    munkaidoTol: "07:30",
    munkaidoIg: "17:00",
    hangpostaKezeles: true,
    eszkalacio: ESZK_FEMTECH,
    volumenArany: 0.32,
  },
  {
    id: "a2",
    nev: "Árajánlat-utánkövetés",
    ugyfelId: "c1",
    tipus: "hang",
    nyelv: "magyar",
    statusz: "elo",
    telefonszam: "+36 30 214 8871",
    hangprofil: "Bence — mély",
    beszedtempo: 0.95,
    nyitoMondat:
      "Jó napot kívánok, a Fémtech-Precíz Kft. digitális asszisztense vagyok. A múlt héten kiküldött árajánlatunk kapcsán keresem Önt. Van most két perce?",
    cel: "Árajánlat-utánkövetés",
    munkaidoTol: "08:00",
    munkaidoIg: "16:30",
    hangpostaKezeles: false,
    eszkalacio: ESZK_FEMTECH,
    volumenArany: 0.68,
  },
  {
    id: "a3",
    nev: "Export utánkövetés",
    ugyfelId: "c2",
    tipus: "hang",
    nyelv: "lengyel",
    statusz: "elo",
    telefonszam: "+36 30 512 4409",
    hangprofil: "Kasia — semleges",
    beszedtempo: 1.0,
    nyitoMondat:
      "Dzień dobry, dzwonię z firmy Pannon Csomagolóanyag. Jestem asystentem cyfrowym działu eksportu. Dzwonię w sprawie oferty, którą wysłaliśmy w zeszłym tygodniu. Ma Pan chwilę?",
    cel: "Árajánlat-utánkövetés",
    munkaidoTol: "08:00",
    munkaidoIg: "16:00",
    hangpostaKezeles: true,
    eszkalacio: [
      { feltetel: "Ha az ügyfél embert kér", akcio: "Átirányítás: +36 96 512 4400" },
      { feltetel: "Ha az ügyfél nem beszél lengyelül", akcio: "Váltás angol nyelvre" },
      { feltetel: "Ha a hívás meghaladja a 10 percet", akcio: "Átirányítás: +36 96 512 4400" },
    ],
    volumenArany: 1,
  },
  {
    id: "a4",
    nev: "Export e-mail sorozat",
    ugyfelId: "c2",
    tipus: "email",
    nyelv: "lengyel",
    statusz: "elo",
    feladoNev: "Pannon Csomagolóanyag — Eksport",
    feladoCim: "eksport@pannon-csomagolo.example",
    targySablon: "{{ceg}} — oferta na opakowania",
    cel: "Árajánlat-utánkövetés",
    munkaidoTol: "08:00",
    munkaidoIg: "16:00",
    hangpostaKezeles: false,
    eszkalacio: [
      { feltetel: "Ha válasz érkezik", akcio: "Sorozat leállítása, átadás: Kovács Dániel" },
      { feltetel: "Ha leiratkozást kérnek", akcio: "Kontakt kizárása minden sorozatból" },
    ],
    hetiEmail: 310,
  },
  {
    id: "a5",
    nev: "Rendelésfelvétel",
    ugyfelId: "c3",
    tipus: "hang",
    nyelv: "magyar",
    statusz: "elo",
    telefonszam: "+36 20 776 3118",
    hangprofil: "Zsófia — meleg",
    beszedtempo: 1.05,
    nyitoMondat:
      "Alföldi Baromfi Kft., jó napot kívánok. A rendelésfelvétel digitális asszisztense vagyok. Megadja, melyik partnerkódról rendel?",
    cel: "Időpontfoglalás",
    munkaidoTol: "06:00",
    munkaidoIg: "14:00",
    hangpostaKezeles: true,
    eszkalacio: [
      { feltetel: "Ha az ügyfél embert kér", akcio: "Átirányítás: +36 76 331 2010" },
      { feltetel: "Ha reklamáció hangzik el", akcio: "Azonnali átirányítás: +36 76 331 2044" },
      { feltetel: "Ha a partnerkód nem azonosítható", akcio: "Átirányítás: +36 76 331 2010" },
    ],
    volumenArany: 1,
  },
  {
    id: "a6",
    nev: "Kiajánlás — csarnoképítés",
    ugyfelId: "c4",
    tipus: "hang",
    nyelv: "magyar",
    statusz: "elo",
    telefonszam: "+36 30 884 2251",
    hangprofil: "Bence — mély",
    beszedtempo: 0.95,
    nyitoMondat:
      "Jó napot kívánok, a Vasvár Szerkezet Kft. képviseletében keresem Önt, digitális asszisztens vagyok. Csarnok- és fémszerkezet-gyártással foglalkozunk. Kérdezhetek két dolgot a tervezett beruházásról?",
    cel: "Időpontfoglalás",
    munkaidoTol: "08:00",
    munkaidoIg: "17:00",
    hangpostaKezeles: true,
    eszkalacio: [
      { feltetel: "Ha az ügyfél embert kér", akcio: "Átirányítás: +36 52 884 2200" },
      { feltetel: "Ha most nem alkalmas", akcio: "Visszahívás egyeztetése, kontakt zárolása 14 napra" },
      { feltetel: "Ha leiratkozást kérnek", akcio: "Kontakt kizárása minden listából" },
    ],
    volumenArany: 1,
  },
  {
    id: "a7",
    nev: "Beruházói e-mail sorozat",
    ugyfelId: "c4",
    tipus: "email",
    nyelv: "magyar",
    statusz: "elo",
    feladoNev: "Vasvár Szerkezet — Ajánlatok",
    feladoCim: "ajanlat@vasvar-szerkezet.example",
    targySablon: "{{ceg}} — nyári gyártási kapacitás",
    cel: "Időpontfoglalás",
    munkaidoTol: "08:00",
    munkaidoIg: "17:00",
    hangpostaKezeles: false,
    eszkalacio: [
      { feltetel: "Ha válasz érkezik", akcio: "Sorozat leállítása, átadás: R. Norbert" },
      { feltetel: "Ha automatikus válasz érkezik", akcio: "Sorozat felfüggesztése 7 napra" },
      { feltetel: "Ha leiratkozást kérnek", akcio: "Kontakt kizárása minden sorozatból" },
    ],
    hetiEmail: 420,
  },
  {
    id: "a8",
    nev: "Reaktiválás — régi partnerek",
    ugyfelId: "c5",
    tipus: "hang",
    nyelv: "magyar",
    statusz: "szunetel",
    telefonszam: "+36 70 331 6042",
    hangprofil: "Réka — semleges",
    beszedtempo: 1.0,
    nyitoMondat:
      "Jó napot kívánok, a Polimer Forma Kft. digitális asszisztense vagyok. Tavaly egy fröccsöntött alkatrészen dolgoztunk együtt, ezért keresem Önt. Alkalmas most az idő?",
    cel: "Reaktiválás",
    munkaidoTol: "09:00",
    munkaidoIg: "16:00",
    hangpostaKezeles: false,
    eszkalacio: [
      { feltetel: "Ha az ügyfél embert kér", akcio: "Átirányítás: +36 62 331 6000" },
      { feltetel: "Ha a kontakt már nem ott dolgozik", akcio: "Kontakt megjelölése, kivétel a listából" },
    ],
    volumenArany: 1,
  },
  {
    id: "a9",
    nev: "Bejövő recepció",
    ugyfelId: "c6",
    tipus: "hang",
    nyelv: "magyar",
    statusz: "elo",
    telefonszam: "+36 30 176 9905",
    hangprofil: "Zsófia — meleg",
    beszedtempo: 1.0,
    nyitoMondat:
      "Bükkfa Manufaktúra Kft., jó napot kívánok. Az üzem digitális asszisztense vagyok. Elmondja, milyen termékről szeretne érdeklődni?",
    cel: "Időpontfoglalás",
    munkaidoTol: "08:00",
    munkaidoIg: "16:00",
    hangpostaKezeles: true,
    eszkalacio: [
      { feltetel: "Ha az ügyfél embert kér", akcio: "Átirányítás: +36 46 176 9900" },
      { feltetel: "Ha egyedi méretet kérnek", akcio: "Ajánlatkérés rögzítése, átadás: Szabó Réka" },
    ],
    volumenArany: 1,
  },
  {
    id: "a10",
    nev: "Export e-mail sorozat",
    ugyfelId: "c6",
    tipus: "email",
    nyelv: "angol",
    statusz: "szunetel",
    feladoNev: "Bükkfa Manufaktúra — Export",
    feladoCim: "export@bukkfa-manufaktura.example",
    targySablon: "{{ceg}} — solid oak components from Hungary",
    cel: "Árajánlat-utánkövetés",
    munkaidoTol: "09:00",
    munkaidoIg: "17:00",
    hangpostaKezeles: false,
    eszkalacio: [
      { feltetel: "Ha válasz érkezik", akcio: "Sorozat leállítása, átadás: Szabó Réka" },
      { feltetel: "Ha leiratkozást kérnek", akcio: "Kontakt kizárása minden sorozatból" },
    ],
    hetiEmail: 0,
  },
];

// ---------------------------------------------------------------------------
// Contacts
// ---------------------------------------------------------------------------

export const KONTAKTOK: readonly Kontakt[] = [
  // c1 — Fémtech-Precíz
  { id: "k01", nev: "Bogdán Tamás", ceg: "Hidrotech Szerelvény Kft.", pozicio: "Beszerzési vezető", telefon: "+36 30 447 1290", ugyfelId: "c1", szakasz: "megkeresve", ertek: 1_850_000, utolsoEsemeny: "Hangpostára került, második kísérlet ütemezve", utolsoKapcsolat: "2026-07-16" },
  { id: "k02", nev: "Halász Enikő", ceg: "Vértes Gépgyártó Kft.", pozicio: "Projektmérnök", telefon: "+36 20 318 5566", ugyfelId: "c1", szakasz: "erdeklodik", ertek: 3_200_000, utolsoEsemeny: "Rajzot küldött, ajánlat készül", utolsoKapcsolat: "2026-08-03" },
  { id: "k03", nev: "Sipos Gergely", ceg: "Duna Automatika Zrt.", pozicio: "Üzemvezető", telefon: "+36 30 902 4471", ugyfelId: "c1", szakasz: "uj", ertek: 740_000, utolsoEsemeny: "Listába került, első hívás ütemezve", utolsoKapcsolat: "2026-07-22" },
  { id: "k04", nev: "Márton Krisztián", ceg: "Kelenföld Hidraulika Kft.", pozicio: "Műszaki vezető", telefon: "+36 70 225 8134", ugyfelId: "c1", szakasz: "idopont", ertek: 4_600_000, utolsoEsemeny: "Időpont egyeztetve: augusztus 4., 10:00", utolsoKapcsolat: "2026-08-03" },
  { id: "k05", nev: "Vass Ildikó", ceg: "Alba Présgép Kft.", pozicio: "Beszerzés", telefon: "+36 30 661 7723", ugyfelId: "c1", szakasz: "lezarva", ertek: 1_240_000, utolsoEsemeny: "Megrendelés visszaigazolva", utolsoKapcsolat: "2026-07-29" },
  { id: "k06", nev: "Deák Balázs", ceg: "Rábamenti Szerszám Kft.", pozicio: "Ügyvezető", telefon: "+36 20 884 3016", ugyfelId: "c1", szakasz: "lezarva", ertek: 620_000, utolsoEsemeny: "Nem tartja aktuálisnak, lezárva", utolsoKapcsolat: "2026-07-16" },
  { id: "k07", nev: "Nagy-Kiss Péter", ceg: "Fehérvár Kompresszor Kft.", pozicio: "Karbantartási vezető", telefon: "+36 30 176 9948", ugyfelId: "c1", szakasz: "uj", ertek: 980_000, utolsoEsemeny: "Hangpostára került", utolsoKapcsolat: "2026-08-03" },

  // c2 — Pannon Csomagolóanyag
  { id: "k08", nev: "Marek Zieliński", ceg: "Opakowania Wisła Sp. z o.o.", pozicio: "Beszerzési vezető", telefon: "+48 61 220 4471", ugyfelId: "c2", szakasz: "erdeklodik", ertek: 5_400_000, utolsoEsemeny: "Ajánlatot kért öt tételre", utolsoKapcsolat: "2026-08-03" },
  { id: "k09", nev: "Agnieszka Nowicka", ceg: "Foliapak Śląsk Sp. z o.o.", pozicio: "Operatív igazgató", telefon: "+48 32 471 9930", ugyfelId: "c2", szakasz: "megkeresve", ertek: 2_900_000, utolsoEsemeny: "Nem vette fel, új kísérlet holnap", utolsoKapcsolat: "2026-08-03" },
  { id: "k10", nev: "Tomasz Wróblewski", ceg: "Karton-Plus Poznań Sp. z o.o.", pozicio: "Ügyvezető", telefon: "+48 61 884 2205", ugyfelId: "c2", szakasz: "idopont", ertek: 6_800_000, utolsoEsemeny: "Időpont egyeztetve: augusztus 6., 10:00", utolsoKapcsolat: "2026-08-03" },
  { id: "k11", nev: "Bódis Márta", ceg: "Tisza Konzervgyár Kft.", pozicio: "Beszerzési vezető", telefon: "+36 30 552 1187", ugyfelId: "c2", szakasz: "lezarva", ertek: 3_400_000, utolsoEsemeny: "Éves keretszerződés aláírva", utolsoKapcsolat: "2026-07-21" },
  { id: "k12", nev: "Fodor Zsolt", ceg: "Balaton Töltőüzem Kft.", pozicio: "Üzemvezető", telefon: "+36 20 447 3390", ugyfelId: "c2", szakasz: "megkeresve", ertek: 1_600_000, utolsoEsemeny: "Hangpostára került", utolsoKapcsolat: "2026-07-15" },
  { id: "k13", nev: "Piotr Lewandowski", ceg: "Ekopak Kraków Sp. z o.o.", pozicio: "Logisztikai vezető", telefon: "+48 12 336 7714", ugyfelId: "c2", szakasz: "uj", ertek: 2_100_000, utolsoEsemeny: "Listába került az export sorozatból", utolsoKapcsolat: "2026-07-21" },

  // c3 — Alföldi Baromfi
  { id: "k14", nev: "Rácz Levente", ceg: "Hídfő Húsnagyker Kft.", pozicio: "Beszerzési vezető", telefon: "+36 30 224 8801", ugyfelId: "c3", szakasz: "idopont", ertek: 4_100_000, utolsoEsemeny: "Visszahívást kért csütörtökre", utolsoKapcsolat: "2026-08-03" },
  { id: "k15", nev: "Somogyi Bea", ceg: "Kiskun Vendéglátás Kft.", pozicio: "Beszerzés", telefon: "+36 20 551 9042", ugyfelId: "c3", szakasz: "erdeklodik", ertek: 1_450_000, utolsoEsemeny: "Heti rendelés rögzítve, mintát kért", utolsoKapcsolat: "2026-07-28" },
  { id: "k16", nev: "Torma András", ceg: "Alföld Élelmiszer Zrt.", pozicio: "Kategóriamenedzser", telefon: "+36 30 663 2217", ugyfelId: "c3", szakasz: "megkeresve", ertek: 7_200_000, utolsoEsemeny: "Elutasította, szeptemberben újra", utolsoKapcsolat: "2026-07-29" },
  { id: "k17", nev: "Gulyás Réka", ceg: "Tiszakert Étterem Kft.", pozicio: "Ügyvezető", telefon: "+36 70 882 4415", ugyfelId: "c3", szakasz: "lezarva", ertek: 380_000, utolsoEsemeny: "Első rendelés leadva", utolsoKapcsolat: "2026-08-03" },
  { id: "k18", nev: "Béres Norbert", ceg: "Homokhát Hűtőház Kft.", pozicio: "Logisztikai vezető", telefon: "+36 30 118 7726", ugyfelId: "c3", szakasz: "uj", ertek: 2_600_000, utolsoEsemeny: "Időpontot egyeztetett a raktárbejárásra", utolsoKapcsolat: "2026-07-29" },

  // c4 — Vasvár Szerkezet
  { id: "k19", nev: "Faragó Zsombor", ceg: "Hajdú Építőipari Zrt.", pozicio: "Projektvezető", telefon: "+36 30 445 2018", ugyfelId: "c4", szakasz: "megkeresve", ertek: 7_900_000, utolsoEsemeny: "Nem vette fel, e-mail sorozatba került", utolsoKapcsolat: "2026-08-03" },
  { id: "k20", nev: "Erdélyi Katalin", ceg: "Nyírség Logisztikai Park Kft.", pozicio: "Fejlesztési vezető", telefon: "+36 20 336 4470", ugyfelId: "c4", szakasz: "erdeklodik", ertek: 6_300_000, utolsoEsemeny: "Terveket küldött, felmérés szükséges", utolsoKapcsolat: "2026-08-03" },
  { id: "k21", nev: "Pintér Ákos", ceg: "Debrecen Ipari Csarnok Kft.", pozicio: "Beruházási vezető", telefon: "+36 30 771 9925", ugyfelId: "c4", szakasz: "megkeresve", ertek: 5_100_000, utolsoEsemeny: "Hangpostára került, második kísérlet", utolsoKapcsolat: "2026-07-30" },
  { id: "k22", nev: "Kelemen Dóra", ceg: "Tisza Agrár Holding Zrt.", pozicio: "Műszaki vezető", telefon: "+36 70 224 6613", ugyfelId: "c4", szakasz: "erdeklodik", ertek: 4_800_000, utolsoEsemeny: "Visszahívást kért a héten", utolsoKapcsolat: "2026-08-03" },
  { id: "k23", nev: "Solymosi Bence", ceg: "Északi Raktárpark Kft.", pozicio: "Ügyvezető", telefon: "+36 30 559 3308", ugyfelId: "c4", szakasz: "idopont", ertek: 8_000_000, utolsoEsemeny: "Visszahívást kért augusztus 5-re", utolsoKapcsolat: "2026-08-03" },
  { id: "k24", nev: "Ambrus Tibor", ceg: "Bihar Malom Kft.", pozicio: "Üzemvezető", telefon: "+36 20 662 1174", ugyfelId: "c4", szakasz: "uj", ertek: 1_900_000, utolsoEsemeny: "Nem vette fel", utolsoKapcsolat: "2026-08-03" },
  { id: "k25", nev: "Székely Villő", ceg: "Hortobágy Gépállomás Kft.", pozicio: "Beszerzés", telefon: "+36 30 884 7752", ugyfelId: "c4", szakasz: "uj", ertek: 1_100_000, utolsoEsemeny: "Listába került", utolsoKapcsolat: "2026-07-31" },

  // c5 — Polimer Forma
  { id: "k26", nev: "Barna Levente", ceg: "Szegedi Elektronika Kft.", pozicio: "Fejlesztési vezető", telefon: "+36 30 227 4418", ugyfelId: "c5", szakasz: "erdeklodik", ertek: 2_750_000, utolsoEsemeny: "Hangpostára került, agent szünetel", utolsoKapcsolat: "2026-07-24" },
  { id: "k27", nev: "Kubinyi Anna", ceg: "Maros Háztartási Kft.", pozicio: "Termékmenedzser", telefon: "+36 20 551 3367", ugyfelId: "c5", szakasz: "megkeresve", ertek: 1_350_000, utolsoEsemeny: "Nem vette fel", utolsoKapcsolat: "2026-07-13" },
  { id: "k28", nev: "Jászai Kornél", ceg: "Dél-Alföld Autóalkatrész Kft.", pozicio: "Beszerzési vezető", telefon: "+36 30 663 8840", ugyfelId: "c5", szakasz: "lezarva", ertek: 4_400_000, utolsoEsemeny: "Szerszámfelújítás megrendelve", utolsoKapcsolat: "2026-07-09" },
  { id: "k29", nev: "Veres Csilla", ceg: "Csongrád Medtech Kft.", pozicio: "Minőségvezető", telefon: "+36 70 118 2294", ugyfelId: "c5", szakasz: "idopont", ertek: 3_600_000, utolsoEsemeny: "Elutasította, tavaszi újranyitás", utolsoKapcsolat: "2026-07-06" },
  { id: "k30", nev: "Oláh Bendegúz", ceg: "Tisza Játék Kft.", pozicio: "Ügyvezető", telefon: "+36 30 447 6620", ugyfelId: "c5", szakasz: "uj", ertek: 300_000, utolsoEsemeny: "Listába került a reaktiválási körből", utolsoKapcsolat: "2026-07-20" },

  // c6 — Bükkfa Manufaktúra
  { id: "k31", nev: "Papp Villő", ceg: "Borsod Bútorház Kft.", pozicio: "Beszerzés", telefon: "+36 30 552 8817", ugyfelId: "c6", szakasz: "megkeresve", ertek: 1_700_000, utolsoEsemeny: "Elutasította, jelenleg más beszállítóval", utolsoKapcsolat: "2026-07-21" },
  { id: "k32", nev: "Kertész Álmos", ceg: "Zemplén Konyhastúdió Kft.", pozicio: "Ügyvezető", telefon: "+36 20 336 9905", ugyfelId: "c6", szakasz: "erdeklodik", ertek: 2_300_000, utolsoEsemeny: "Visszahívást kért, mintadarabot vár", utolsoKapcsolat: "2026-07-13" },
  { id: "k33", nev: "Farkas Emese", ceg: "Miskolci Belsőépítész Stúdió Kft.", pozicio: "Projektvezető", telefon: "+36 70 771 4426", ugyfelId: "c6", szakasz: "idopont", ertek: 1_050_000, utolsoEsemeny: "Elutasította a mai megkeresést", utolsoKapcsolat: "2026-08-03" },
  { id: "k34", nev: "Simon Zalán", ceg: "Északi Faáru Kft.", pozicio: "Kereskedelmi vezető", telefon: "+36 30 224 3391", ugyfelId: "c6", szakasz: "uj", ertek: 890_000, utolsoEsemeny: "Angol nyelvű sorozatba került", utolsoKapcsolat: "2026-07-27" },
];

// ---------------------------------------------------------------------------
// Transcripts
// ---------------------------------------------------------------------------

const ATIRAT_HU: Atirat = {
  id: "at-hu",
  nyelv: "magyar",
  fordithato: false,
  sorok: [
    { ki: "agent", idopont: "0:00", szoveg: "Fémtech-Precíz Kft., jó napot kívánok. Az iroda digitális asszisztense vagyok, a kollégák helyett veszem fel a hívást. Miben segíthetek?" },
    { ki: "ugyfel", idopont: "0:09", szoveg: "Jó napot. Márton Krisztián vagyok a Kelenföld Hidraulikától. Egy forgácsolt alkatrészre szeretnék árajánlatot kérni. Jó helyen járok?" },
    { ki: "agent", idopont: "0:21", szoveg: "Igen, a forgácsolás a fő tevékenységünk. Ha megengedi, felteszek néhány rövid kérdést, utána időpontot egyeztetek a műszaki kollégával. Milyen alkatrészről van szó?" },
    { ki: "ugyfel", idopont: "0:36", szoveg: "Hidraulikahenger-véglezárásról. Van rá rajzunk, egy meglévő típus módosítása. Eddig más gyártotta, de nem tudják tartani a határidőt." },
    { ki: "agent", idopont: "0:53", szoveg: "Értem. Mekkora darabszámról beszélünk?" },
    { ki: "ugyfel", idopont: "0:59", szoveg: "Első körben kétszáz darab, aztán negyedévente hasonló. Ha jól megy, évi nyolcszáz körül." },
    { ki: "agent", idopont: "1:12", szoveg: "Köszönöm. És milyen anyagból kérik?" },
    { ki: "ugyfel", idopont: "1:18", szoveg: "Negyvenkettő CrMo négyből, nemesített állapotban. A tömítésfelületnek finom felületi minőség kell, Ra hat alatt." },
    { ki: "agent", idopont: "1:34", szoveg: "Rögzítettem: 42CrMo4 nemesítve, Ra hat alatti tömítésfelület. Ez a gépparkunkkal megoldható. Mi a tervezett határidő?" },
    { ki: "ugyfel", idopont: "1:49", szoveg: "Az első kétszáz darabot szeptember közepére szeretnénk. Szoros, tudom." },
    { ki: "agent", idopont: "1:58", szoveg: "Hat hét, a mostani terhelés mellett nem kizárt, de a szerszámozást a kollégának kell megnéznie. Kell valamilyen minőségi dokumentum az ajánlathoz?" },
    { ki: "ugyfel", idopont: "2:16", szoveg: "Igen, 3.1-es anyagbizonylat, és első mintadarab-jóváhagyás." },
    { ki: "agent", idopont: "2:28", szoveg: "Rendben. Szabó Gergely kollégám készíti a műszaki ajánlatokat, ő tudja a szerszámköltséget és a határidőt megmondani. Holnap délelőtt vagy holnapután délután alkalmas?" },
    { ki: "ugyfel", idopont: "2:47", szoveg: "Holnap délelőtt jó. Tíz óra körül." },
    { ki: "agent", idopont: "2:54", szoveg: "Holnap, augusztus negyedike, tíz óra — bejegyeztem. A +36 70 225 8134 számot látom, erre küldjem a visszaigazolást? Az SMS-ben egy feltöltési linket is küldök a rajzhoz. Összefoglalva: kétszáz darab véglezárás, 42CrMo4 nemesítve, Ra hat alatt, szeptember közepi határidő, 3.1-es bizonylat és mintadarab-jóváhagyás." },
    { ki: "ugyfel", idopont: "3:29", szoveg: "Így van. Egy kérés: ha a szeptember közepe nem megy, azt inkább holnap mondják meg, mint két hét múlva." },
    { ki: "agent", idopont: "3:41", szoveg: "Feljegyeztem, és kiemelten átadom a kollégának. Az SMS néhány percen belül megérkezik erre a számra. Van még kérdése?" },
    { ki: "ugyfel", idopont: "4:02", szoveg: "Nem, ez így rendben van. Köszönöm, viszonthallásra." },
    { ki: "agent", idopont: "4:14", szoveg: "Én köszönöm a hívást. További jó napot kívánok." },
  ],
};

const ATIRAT_PL: Atirat = {
  id: "at-pl",
  nyelv: "lengyel",
  fordithato: true,
  sorok: [
    {
      ki: "agent",
      idopont: "0:00",
      szoveg: "Dzień dobry, dzwonię z firmy Pannon Csomagolóanyag. Jestem asystentem cyfrowym działu eksportu. Dzwonię w sprawie oferty, którą wysłaliśmy w zeszłym tygodniu. Rozmawiam z panem Wróblewskim?",
      forditas: "Jó napot kívánok, a Pannon Csomagolóanyag Zrt.-től telefonálok. Az exportosztály digitális asszisztense vagyok. A múlt héten kiküldött árajánlatunk kapcsán keresem. Wróblewski úrral beszélek?",
    },
    { ki: "ugyfel", idopont: "0:12", szoveg: "Tak, to ja. Dzień dobry.", forditas: "Igen, én vagyok. Jó napot." },
    {
      ki: "agent",
      idopont: "0:16",
      szoveg: "Dziękuję. Chciałem sprawdzić, czy oferta na karton falisty pięciowarstwowy do państwa dotarła. Wysłaliśmy ją w czwartek.",
      forditas: "Köszönöm. Azt szeretném megtudni, hogy az ötrétegű hullámkartonra szóló ajánlatunk megérkezett-e. Csütörtökön küldtük ki.",
    },
    {
      ki: "ugyfel",
      idopont: "0:29",
      szoveg: "Dotarła, przeglądałem ją w poniedziałek. Cena jest do przyjęcia, ale mam pytanie o ilości. W ofercie są palety po tysiąc dwieście arkuszy, a my potrzebujemy mniejszych partii.",
      forditas: "Megérkezett, hétfőn átnéztem. Az ár elfogadható, de a mennyiséggel kapcsolatban van kérdésem. Az ajánlatban ezerkétszáz lemezes paletták vannak, nekünk viszont kisebb tételek kellenek.",
    },
    {
      ki: "agent",
      idopont: "0:49",
      szoveg: "Rozumiem. Jakiej wielkości partie byłyby dla państwa odpowiednie?",
      forditas: "Értem. Milyen tételnagyság lenne Önöknek megfelelő?",
    },
    {
      ki: "ugyfel",
      idopont: "0:56",
      szoveg: "Sześćset arkuszy, ale częściej — powiedzmy co dwa tygodnie. Magazyn mamy mały.",
      forditas: "Hatszáz lemez, de gyakrabban — mondjuk kéthetente. Kicsi a raktárunk.",
    },
    {
      ki: "agent",
      idopont: "1:08",
      szoveg: "Zanotowałem: sześćset arkuszy co dwa tygodnie. To zmienia kalkulację transportu, więc kolega musi przeliczyć ofertę. Czy termin pierwszej dostawy nadal jest na wrzesień?",
      forditas: "Feljegyeztem: hatszáz lemez kéthetente. Ez a szállítási kalkulációt megváltoztatja, ezért a kollégának újra kell számolnia az ajánlatot. Az első szállítás határideje továbbra is szeptember?",
    },
    {
      ki: "ugyfel",
      idopont: "1:26",
      szoveg: "Wrzesień, pierwszy tydzień. I jeszcze jedno — potrzebujemy nadruku fleksograficznego, dwa kolory. W ofercie tego nie widziałem.",
      forditas: "Szeptember, az első hét. És még valami — flexónyomás kell, két színben. Ezt nem láttam az ajánlatban.",
    },
    {
      ki: "agent",
      idopont: "1:44",
      szoveg: "Nadruk dwukolorowy — dopiszę do zapytania. Proponuję tak: kolega Bartosz Kowalczyk przygotuje poprawioną ofertę z mniejszymi partiami i nadrukiem, i zadzwoni do pana, żeby ją omówić. Czwartek przed południem czy piątek po południu?",
      forditas: "Kétszínű nyomás — hozzáírom a kérdéshez. A következőt javaslom: Bartosz Kowalczyk kollégám elkészíti a módosított ajánlatot a kisebb tételekkel és a nyomással, és felhívja Önt, hogy átbeszéljék. Csütörtök délelőtt vagy péntek délután alkalmasabb?",
    },
    {
      ki: "ugyfel",
      idopont: "2:06",
      szoveg: "Czwartek przed południem. O dziesiątej?",
      forditas: "Csütörtök délelőtt. Tíz órakor?",
    },
    {
      ki: "agent",
      idopont: "2:13",
      szoveg: "Czwartek, szósty sierpnia, godzina dziesiąta — zapisane. Wyślę potwierdzenie SMS-em na ten numer i mailem na adres z zapytania. Podsumowuję: sześćset arkuszy co dwa tygodnie, nadruk fleksograficzny dwukolorowy, pierwsza dostawa w pierwszym tygodniu września.",
      forditas: "Csütörtök, augusztus hatodika, tíz óra — rögzítettem. Visszaigazolást küldök SMS-ben erre a számra, és e-mailben az ajánlatkérésben megadott címre. Összefoglalom: hatszáz lemez kéthetente, kétszínű flexónyomás, első szállítás szeptember első hetében.",
    },
    {
      ki: "ugyfel",
      idopont: "2:44",
      szoveg: "Zgadza się. Proszę tylko, żeby w nowej ofercie był osobno koszt transportu.",
      forditas: "Így van. Csak azt kérem, hogy az új ajánlatban a szállítási költség külön szerepeljen.",
    },
    {
      ki: "agent",
      idopont: "2:56",
      szoveg: "Zanotowałem — transport wyszczególniony osobno. Dziękuję za rozmowę i do czwartku.",
      forditas: "Feljegyeztem — a szállítás külön tételként. Köszönöm a beszélgetést, csütörtökön beszélünk.",
    },
    {
      ki: "ugyfel",
      idopont: "3:08",
      szoveg: "Dziękuję, do widzenia.",
      forditas: "Köszönöm, viszonthallásra.",
    },
  ],
};

export const ATIRATOK: readonly Atirat[] = [ATIRAT_HU, ATIRAT_PL];

// ---------------------------------------------------------------------------
// Call log — the 55 most recent calls
// ---------------------------------------------------------------------------

export const HIVASOK: readonly Hivas[] = [
  { id: "h01", datum: "2026-08-03", ido: "16:37", ugyfelId: "c6", agentId: "a9", kontaktId: "k33", irany: "be", hosszMp: 65, kimenetel: "elutasitotta" },
  { id: "h02", datum: "2026-08-03", ido: "16:14", ugyfelId: "c4", agentId: "a6", kontaktId: "k22", irany: "ki", hosszMp: 125, kimenetel: "visszahivas" },
  { id: "h03", datum: "2026-08-03", ido: "15:43", ugyfelId: "c2", agentId: "a3", kontaktId: "k09", irany: "ki", hosszMp: 23, kimenetel: "nem_vette_fel" },
  { id: "h04", datum: "2026-08-03", ido: "15:30", ugyfelId: "c4", agentId: "a6", kontaktId: "k20", irany: "ki", hosszMp: 24, kimenetel: "hangposta" },
  { id: "h05", datum: "2026-08-03", ido: "15:28", ugyfelId: "c3", agentId: "a5", kontaktId: "k17", irany: "be", hosszMp: 316, kimenetel: "foglalva" },
  { id: "h06", datum: "2026-08-03", ido: "14:30", ugyfelId: "c2", agentId: "a3", kontaktId: "k08", irany: "ki", hosszMp: 22, kimenetel: "nem_vette_fel" },
  { id: "h07", datum: "2026-08-03", ido: "13:13", ugyfelId: "c1", agentId: "a2", kontaktId: "k07", irany: "ki", hosszMp: 48, kimenetel: "hangposta" },
  { id: "h08", datum: "2026-08-03", ido: "12:55", ugyfelId: "c1", agentId: "a1", kontaktId: "k04", irany: "be", hosszMp: 272, kimenetel: "foglalva", atiratId: "at-hu" },
  { id: "h09", datum: "2026-08-03", ido: "12:44", ugyfelId: "c3", agentId: "a5", kontaktId: "k14", irany: "be", hosszMp: 136, kimenetel: "visszahivas" },
  { id: "h10", datum: "2026-08-03", ido: "10:37", ugyfelId: "c2", agentId: "a3", kontaktId: "k08", irany: "ki", hosszMp: 38, kimenetel: "elutasitotta" },
  { id: "h11", datum: "2026-08-03", ido: "10:35", ugyfelId: "c2", agentId: "a3", kontaktId: "k10", irany: "ki", hosszMp: 198, kimenetel: "foglalva", atiratId: "at-pl" },
  { id: "h12", datum: "2026-08-03", ido: "09:57", ugyfelId: "c4", agentId: "a6", kontaktId: "k19", irany: "ki", hosszMp: 24, kimenetel: "nem_vette_fel" },
  { id: "h13", datum: "2026-08-03", ido: "09:37", ugyfelId: "c4", agentId: "a6", kontaktId: "k23", irany: "ki", hosszMp: 131, kimenetel: "visszahivas" },
  { id: "h14", datum: "2026-08-03", ido: "09:27", ugyfelId: "c4", agentId: "a6", kontaktId: "k24", irany: "ki", hosszMp: 29, kimenetel: "nem_vette_fel" },
  { id: "h15", datum: "2026-08-03", ido: "08:16", ugyfelId: "c1", agentId: "a2", kontaktId: "k02", irany: "ki", hosszMp: 27, kimenetel: "nem_vette_fel" },
  { id: "h16", datum: "2026-07-31", ido: "11:18", ugyfelId: "c4", agentId: "a6", kontaktId: "k24", irany: "ki", hosszMp: 100, kimenetel: "visszahivas" },
  { id: "h17", datum: "2026-07-31", ido: "10:06", ugyfelId: "c4", agentId: "a6", kontaktId: "k25", irany: "ki", hosszMp: 34, kimenetel: "nem_vette_fel" },
  { id: "h18", datum: "2026-07-30", ido: "15:45", ugyfelId: "c4", agentId: "a6", kontaktId: "k21", irany: "ki", hosszMp: 23, kimenetel: "hangposta" },
  { id: "h19", datum: "2026-07-29", ido: "15:52", ugyfelId: "c3", agentId: "a5", kontaktId: "k18", irany: "be", hosszMp: 186, kimenetel: "foglalva" },
  { id: "h20", datum: "2026-07-29", ido: "13:08", ugyfelId: "c1", agentId: "a2", kontaktId: "k05", irany: "ki", hosszMp: 34, kimenetel: "nem_vette_fel" },
  { id: "h21", datum: "2026-07-29", ido: "12:17", ugyfelId: "c3", agentId: "a5", kontaktId: "k16", irany: "be", hosszMp: 61, kimenetel: "elutasitotta" },
  { id: "h22", datum: "2026-07-28", ido: "13:05", ugyfelId: "c3", agentId: "a5", kontaktId: "k15", irany: "be", hosszMp: 353, kimenetel: "foglalva" },
  { id: "h23", datum: "2026-07-28", ido: "10:26", ugyfelId: "c4", agentId: "a6", kontaktId: "k21", irany: "ki", hosszMp: 23, kimenetel: "nem_vette_fel" },
  { id: "h24", datum: "2026-07-28", ido: "09:38", ugyfelId: "c4", agentId: "a6", kontaktId: "k23", irany: "ki", hosszMp: 18, kimenetel: "nem_vette_fel" },
  { id: "h25", datum: "2026-07-28", ido: "08:09", ugyfelId: "c4", agentId: "a6", kontaktId: "k20", irany: "ki", hosszMp: 107, kimenetel: "visszahivas" },
  { id: "h26", datum: "2026-07-27", ido: "16:43", ugyfelId: "c1", agentId: "a1", kontaktId: "k05", irany: "be", hosszMp: 77, kimenetel: "visszahivas" },
  { id: "h27", datum: "2026-07-27", ido: "13:06", ugyfelId: "c4", agentId: "a6", kontaktId: "k20", irany: "ki", hosszMp: 40, kimenetel: "elutasitotta" },
  { id: "h28", datum: "2026-07-27", ido: "09:29", ugyfelId: "c2", agentId: "a3", kontaktId: "k09", irany: "ki", hosszMp: 33, kimenetel: "nem_vette_fel" },
  { id: "h29", datum: "2026-07-27", ido: "08:16", ugyfelId: "c4", agentId: "a6", kontaktId: "k22", irany: "ki", hosszMp: 18, kimenetel: "nem_vette_fel" },
  { id: "h30", datum: "2026-07-24", ido: "16:32", ugyfelId: "c4", agentId: "a6", kontaktId: "k25", irany: "ki", hosszMp: 21, kimenetel: "nem_vette_fel" },
  { id: "h31", datum: "2026-07-24", ido: "14:25", ugyfelId: "c5", agentId: "a8", kontaktId: "k26", irany: "ki", hosszMp: 47, kimenetel: "hangposta" },
  { id: "h32", datum: "2026-07-23", ido: "10:21", ugyfelId: "c4", agentId: "a6", kontaktId: "k19", irany: "ki", hosszMp: 24, kimenetel: "nem_vette_fel" },
  { id: "h33", datum: "2026-07-22", ido: "14:50", ugyfelId: "c1", agentId: "a1", kontaktId: "k03", irany: "be", hosszMp: 140, kimenetel: "visszahivas" },
  { id: "h34", datum: "2026-07-22", ido: "10:44", ugyfelId: "c1", agentId: "a1", kontaktId: "k02", irany: "be", hosszMp: 244, kimenetel: "foglalva" },
  { id: "h35", datum: "2026-07-21", ido: "15:33", ugyfelId: "c2", agentId: "a3", kontaktId: "k13", irany: "ki", hosszMp: 43, kimenetel: "hangposta" },
  { id: "h36", datum: "2026-07-21", ido: "14:26", ugyfelId: "c1", agentId: "a2", kontaktId: "k04", irany: "ki", hosszMp: 24, kimenetel: "nem_vette_fel" },
  { id: "h37", datum: "2026-07-21", ido: "13:44", ugyfelId: "c2", agentId: "a3", kontaktId: "k11", irany: "ki", hosszMp: 32, kimenetel: "hangposta" },
  { id: "h38", datum: "2026-07-21", ido: "12:33", ugyfelId: "c6", agentId: "a9", kontaktId: "k31", irany: "be", hosszMp: 49, kimenetel: "elutasitotta" },
  { id: "h39", datum: "2026-07-21", ido: "09:07", ugyfelId: "c1", agentId: "a1", kontaktId: "k01", irany: "be", hosszMp: 73, kimenetel: "visszahivas" },
  { id: "h40", datum: "2026-07-21", ido: "08:03", ugyfelId: "c1", agentId: "a2", kontaktId: "k03", irany: "ki", hosszMp: 26, kimenetel: "nem_vette_fel" },
  { id: "h41", datum: "2026-07-16", ido: "15:57", ugyfelId: "c1", agentId: "a2", kontaktId: "k06", irany: "ki", hosszMp: 35, kimenetel: "nem_vette_fel" },
  { id: "h42", datum: "2026-07-16", ido: "13:43", ugyfelId: "c1", agentId: "a2", kontaktId: "k01", irany: "ki", hosszMp: 37, kimenetel: "hangposta" },
  { id: "h43", datum: "2026-07-15", ido: "16:13", ugyfelId: "c4", agentId: "a6", kontaktId: "k24", irany: "ki", hosszMp: 26, kimenetel: "nem_vette_fel" },
  { id: "h44", datum: "2026-07-15", ido: "14:36", ugyfelId: "c2", agentId: "a3", kontaktId: "k12", irany: "ki", hosszMp: 47, kimenetel: "hangposta" },
  { id: "h45", datum: "2026-07-15", ido: "13:18", ugyfelId: "c3", agentId: "a5", kontaktId: "k14", irany: "be", hosszMp: 180, kimenetel: "foglalva" },
  { id: "h46", datum: "2026-07-14", ido: "15:34", ugyfelId: "c4", agentId: "a6", kontaktId: "k21", irany: "ki", hosszMp: 25, kimenetel: "hangposta" },
  { id: "h47", datum: "2026-07-13", ido: "14:50", ugyfelId: "c1", agentId: "a2", kontaktId: "k01", irany: "ki", hosszMp: 23, kimenetel: "nem_vette_fel" },
  { id: "h48", datum: "2026-07-13", ido: "11:30", ugyfelId: "c5", agentId: "a8", kontaktId: "k27", irany: "ki", hosszMp: 32, kimenetel: "nem_vette_fel" },
  { id: "h49", datum: "2026-07-13", ido: "09:19", ugyfelId: "c6", agentId: "a9", kontaktId: "k32", irany: "be", hosszMp: 98, kimenetel: "visszahivas" },
  { id: "h50", datum: "2026-07-09", ido: "11:31", ugyfelId: "c5", agentId: "a8", kontaktId: "k28", irany: "ki", hosszMp: 23, kimenetel: "hangposta" },
  { id: "h51", datum: "2026-07-08", ido: "12:55", ugyfelId: "c4", agentId: "a6", kontaktId: "k22", irany: "ki", hosszMp: 25, kimenetel: "nem_vette_fel" },
  { id: "h52", datum: "2026-07-07", ido: "13:40", ugyfelId: "c4", agentId: "a6", kontaktId: "k19", irany: "ki", hosszMp: 24, kimenetel: "hangposta" },
  { id: "h53", datum: "2026-07-06", ido: "16:19", ugyfelId: "c5", agentId: "a8", kontaktId: "k29", irany: "ki", hosszMp: 35, kimenetel: "elutasitotta" },
  { id: "h54", datum: "2026-07-06", ido: "11:02", ugyfelId: "c1", agentId: "a1", kontaktId: "k06", irany: "be", hosszMp: 30, kimenetel: "elutasitotta" },
  { id: "h55", datum: "2026-07-06", ido: "08:18", ugyfelId: "c4", agentId: "a6", kontaktId: "k23", irany: "ki", hosszMp: 29, kimenetel: "nem_vette_fel" },
];

// ---------------------------------------------------------------------------
// E-mail campaigns
// ---------------------------------------------------------------------------

export const KAMPANYOK: readonly Kampany[] = [
  {
    id: "e1",
    nev: "Fémszerkezet — nyári kapacitás",
    ugyfelId: "c4",
    agentId: "a7",
    statusz: "fut",
    elkuldve: 1240,
    megnyitva: 511,
    valasz: 79,
    lepesek: [
      {
        sorszam: 1,
        varakozasNap: 0,
        targy: "Nyári gyártási kapacitás — Vasvár Szerkezet",
        elonezet:
          "Jó napot kívánok. A Vasvár Szerkezet Kft. augusztusi gyártási kapacitásának egy része felszabadult, ezért keresem Önöket. Csarnokszerkezetet és acélvázas bővítéseket gyártunk Debrecenben, saját hegesztőüzemmel. Ha van folyamatban lévő beruházásuk, egy rövid egyeztetésen átnézzük a terveket.",
      },
      {
        sorszam: 2,
        varakozasNap: 3,
        targy: "Kérdés a tervezett bővítéshez",
        elonezet:
          "A múlt heti levelemre nem érkezett válasz, ezért egy konkrét kérdéssel keresem: a tervezett csarnok alapterülete meghaladja a nyolcszáz négyzetmétert? Efölött érdemes a szerkezetet két ütemben gyártani, mert az a szállítási költségen is látszik.",
      },
      {
        sorszam: 3,
        varakozasNap: 5,
        targy: "Lezárjuk a nyári ütemezést",
        elonezet:
          "Az augusztusi szabad kapacitást a hónap közepén lekötjük. Ha a beruházás idén indul, most érdemes egy felmérést egyeztetni; ha később, akkor jelezze, és ősszel keresem újra. Mindkét válasz segít.",
      },
    ],
  },
  {
    id: "e2",
    nev: "Csarnokbővítés — utánkövetés",
    ugyfelId: "c4",
    agentId: "a7",
    statusz: "fut",
    elkuldve: 860,
    megnyitva: 323,
    valasz: 44,
    lepesek: [
      {
        sorszam: 1,
        varakozasNap: 0,
        targy: "Árajánlatunk — Vasvár Szerkezet",
        elonezet:
          "A múlt héten megküldött árajánlatunkkal kapcsolatban keresem. Ha bármelyik tétel pontosításra szorul, elég egy soros válasz, és a műszaki kollégám átszámolja.",
      },
      {
        sorszam: 2,
        varakozasNap: 3,
        targy: "Az ajánlat érvényessége",
        elonezet:
          "Az acélárak miatt az ajánlat két hétig érvényes. Jelzem, hogy a megadott határidő tartható, ha a megrendelés a hónap végéig megérkezik.",
      },
      {
        sorszam: 3,
        varakozasNap: 5,
        targy: "Zárjuk vagy tartsuk nyitva?",
        elonezet:
          "Ha a projekt csúszik, nyitva tartjuk az ajánlatot, és ősszel újraszámoljuk. Ha másik beszállítót választottak, azt is jó tudni — akkor nem keresem többet ezzel.",
      },
    ],
  },
  {
    id: "e3",
    nev: "Eksport — opakowania (PL)",
    ugyfelId: "c2",
    agentId: "a4",
    statusz: "fut",
    elkuldve: 1480,
    megnyitva: 515,
    valasz: 62,
    lepesek: [
      {
        sorszam: 1,
        varakozasNap: 0,
        targy: "Hullámkarton Magyarországról — bemutatkozás",
        elonezet:
          "Lengyel nyelvű bemutatkozó levél: ötrétegű hullámkarton és flexónyomás, győri üzem, heti szállítás Lengyelországba. A levél a címzett iparágához igazított mintatételt ajánl.",
      },
      {
        sorszam: 2,
        varakozasNap: 3,
        targy: "Mintatétel és szállítási idő",
        elonezet:
          "Konkrét mintaajánlat: hatszáz vagy ezerkétszáz lemezes tétel, tíz munkanapos szállítási idő. A levél a raktárkapacitásra kérdez rá, mert ez határozza meg a tételnagyságot.",
      },
      {
        sorszam: 3,
        varakozasNap: 5,
        targy: "Lezárás vagy őszi újranyitás",
        elonezet:
          "Rövid záró levél: ha most nem aktuális, ősszel keresi újra a kollégánk. Válasz esetén a sorozat leáll, és Kovács Dániel veszi át a szálat.",
      },
    ],
  },
  {
    id: "e4",
    nev: "Árajánlat-emlékeztető",
    ugyfelId: "c2",
    agentId: "a4",
    statusz: "szunetel",
    elkuldve: 520,
    megnyitva: 253,
    valasz: 43,
    lepesek: [
      {
        sorszam: 1,
        varakozasNap: 0,
        targy: "Emlékeztető a kiküldött ajánlatra",
        elonezet:
          "Csak azoknak megy, akiknek már van nyitott ajánlatuk. Egy bekezdés, egy kérdés: van-e olyan tétel, amit át kell számolni.",
      },
      {
        sorszam: 2,
        varakozasNap: 3,
        targy: "Mennyiség vagy nyomás módosítása",
        elonezet:
          "A leggyakoribb két módosítást ajánlja fel: kisebb tételnagyság, illetve kétszínű flexónyomás. Ez a levél hozza a legtöbb választ a sorozatban.",
      },
      {
        sorszam: 3,
        varakozasNap: 5,
        targy: "Ajánlat lezárása",
        elonezet:
          "A sorozat jelenleg szünetel, ezért ez a lépés nem megy ki. Az újraindításig a kontaktok az ajánlati listán maradnak.",
      },
    ],
  },
  {
    id: "e5",
    nev: "Oak components — UK buyers",
    ugyfelId: "c6",
    agentId: "a10",
    statusz: "lezarva",
    elkuldve: 640,
    megnyitva: 188,
    valasz: 23,
    lepesek: [
      {
        sorszam: 1,
        varakozasNap: 0,
        targy: "Solid oak components from Hungary",
        elonezet:
          "Angol nyelvű bemutatkozás bútoripari beszerzőknek: tömör bükk és tölgy alkatrészek, miskolci üzem, FSC-tanúsítvánnyal.",
      },
      {
        sorszam: 2,
        varakozasNap: 3,
        targy: "Lead times and sample box",
        elonezet:
          "Mintacsomagot ajánl fel, és a szállítási időt konkretizálja. A sorozat lezárult, a válaszadókat Szabó Réka vette át.",
      },
      {
        sorszam: 3,
        varakozasNap: 5,
        targy: "Closing the loop",
        elonezet:
          "Záró levél, amely az őszi bútoripari szezonra tesz javaslatot. A kampány lezárva, új címzett nem kerül bele.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Activity feed
// ---------------------------------------------------------------------------

export const AKTIVITAS: readonly Aktivitas[] = [
  { id: "f01", tipus: "elutasitas", szoveg: "A kontakt elutasította a megkeresést — Bükkfa Manufaktúra Kft.", ugyfelId: "c6", ido: "16:37" },
  { id: "f02", tipus: "visszahivas", szoveg: "Visszahívást kért egy kontakt — Vasvár Szerkezet Kft.", ugyfelId: "c4", ido: "16:14" },
  { id: "f03", tipus: "kontakt", szoveg: "Négy új kontakt került a listába — Bükkfa Manufaktúra Kft.", ugyfelId: "c6", ido: "15:52" },
  { id: "f04", tipus: "foglalas", szoveg: "Az agent időpontot foglalt — Alföldi Baromfi Kft.", ugyfelId: "c3", ido: "15:28" },
  { id: "f05", tipus: "email", szoveg: "Az e-mail sorozat második lépése elindult — Vasvár Szerkezet Kft.", ugyfelId: "c4", ido: "14:30" },
  { id: "f06", tipus: "email", szoveg: "Válasz érkezett egy e-mail kampányra — Pannon Csomagolóanyag Zrt.", ugyfelId: "c2", ido: "13:13" },
  { id: "f07", tipus: "foglalas", szoveg: "Az agent időpontot foglalt — Fémtech-Precíz Kft.", ugyfelId: "c1", ido: "12:55" },
  { id: "f08", tipus: "visszahivas", szoveg: "Visszahívást kért egy kontakt — Alföldi Baromfi Kft.", ugyfelId: "c3", ido: "12:44" },
  { id: "f09", tipus: "rendszer", szoveg: "A perckeret 87 százalékát elérte — Vasvár Szerkezet Kft.", ugyfelId: "c4", ido: "11:20" },
  { id: "f10", tipus: "foglalas", szoveg: "Az agent időpontot foglalt — Pannon Csomagolóanyag Zrt.", ugyfelId: "c2", ido: "10:35" },
  { id: "f11", tipus: "visszahivas", szoveg: "Visszahívást kért egy kontakt — Vasvár Szerkezet Kft.", ugyfelId: "c4", ido: "09:37" },
  { id: "f12", tipus: "rendszer", szoveg: "Az agent szüneteltetve — Polimer Forma Kft.", ugyfelId: "c5", ido: "08:16" },
];

// ---------------------------------------------------------------------------
// Upcoming appointments
// ---------------------------------------------------------------------------

export const IDOPONTOK: readonly Idopont[] = [
  { id: "i01", ugyfelId: "c1", datum: "2026-08-04", ido: "10:00", kontaktNev: "Márton Krisztián", ceg: "Kelenföld Hidraulika Kft.", targy: "Műszaki ajánlat egyeztetése" },
  { id: "i02", ugyfelId: "c4", datum: "2026-08-04", ido: "13:30", kontaktNev: "Erdélyi Katalin", ceg: "Nyírség Logisztikai Park Kft.", targy: "Helyszíni felmérés előkészítése" },
  { id: "i03", ugyfelId: "c3", datum: "2026-08-04", ido: "15:00", kontaktNev: "Gulyás Réka", ceg: "Tiszakert Étterem Kft.", targy: "Heti rendelés véglegesítése" },
  { id: "i04", ugyfelId: "c4", datum: "2026-08-05", ido: "09:00", kontaktNev: "Solymosi Bence", ceg: "Északi Raktárpark Kft.", targy: "Visszahívás — csarnokbővítés" },
  { id: "i05", ugyfelId: "c1", datum: "2026-08-05", ido: "11:00", kontaktNev: "Halász Enikő", ceg: "Vértes Gépgyártó Kft.", targy: "Rajzegyeztetés, ajánlatkérés" },
  { id: "i06", ugyfelId: "c2", datum: "2026-08-06", ido: "10:00", kontaktNev: "Tomasz Wróblewski", ceg: "Karton-Plus Poznań Sp. z o.o.", targy: "Módosított ajánlat egyeztetése" },
  { id: "i07", ugyfelId: "c3", datum: "2026-08-06", ido: "14:00", kontaktNev: "Rácz Levente", ceg: "Hídfő Húsnagyker Kft.", targy: "Éves keretmennyiség áttekintése" },
  { id: "i08", ugyfelId: "c6", datum: "2026-08-07", ido: "09:30", kontaktNev: "Kertész Álmos", ceg: "Zemplén Konyhastúdió Kft.", targy: "Mintadarab átadása" },
  { id: "i09", ugyfelId: "c4", datum: "2026-08-07", ido: "11:30", kontaktNev: "Kelemen Dóra", ceg: "Tisza Agrár Holding Zrt.", targy: "Szerkezeti terv áttekintése" },
  { id: "i10", ugyfelId: "c2", datum: "2026-08-10", ido: "10:30", kontaktNev: "Marek Zieliński", ceg: "Opakowania Wisła Sp. z o.o.", targy: "Ötsoros ajánlat átbeszélése" },
  { id: "i11", ugyfelId: "c1", datum: "2026-08-11", ido: "14:00", kontaktNev: "Bogdán Tamás", ceg: "Hidrotech Szerelvény Kft.", targy: "Beszállítói auditra felkészülés" },
  { id: "i12", ugyfelId: "c3", datum: "2026-08-12", ido: "08:30", kontaktNev: "Béres Norbert", ceg: "Homokhát Hűtőház Kft.", targy: "Raktárbejárás" },
];

// ---------------------------------------------------------------------------
// Settings
// ---------------------------------------------------------------------------

export const TELEFONSZAMOK: readonly Telefonszam[] = [
  { szam: "+36 30 214 8870", agentId: "a1", tipus: "Mobil", varos: "Székesfehérvár" },
  { szam: "+36 30 214 8871", agentId: "a2", tipus: "Mobil", varos: "Székesfehérvár" },
  { szam: "+36 30 512 4409", agentId: "a3", tipus: "Mobil", varos: "Győr" },
  { szam: "+36 20 776 3118", agentId: "a5", tipus: "Mobil", varos: "Kecskemét" },
  { szam: "+36 30 884 2251", agentId: "a6", tipus: "Mobil", varos: "Debrecen" },
  { szam: "+36 70 331 6042", agentId: "a8", tipus: "Mobil", varos: "Szeged" },
  { szam: "+36 30 176 9905", agentId: "a9", tipus: "Mobil", varos: "Miskolc" },
  { szam: "+36 1 445 2290", agentId: null, tipus: "Vezetékes", varos: "Budapest" },
  { szam: "+36 30 118 4407", agentId: null, tipus: "Mobil", varos: "Budapest" },
];

export const CSAPAT: readonly CsapatTag[] = [
  { nev: "R. Norbert", szerep: "Operátor — teljes hozzáférés", email: "norbert@atlas.example", utolsoBelepes: "2026-08-03" },
  { nev: "Szabó Réka", szerep: "Ügyfélkezelő — két ügyfél", email: "reka@atlas.example", utolsoBelepes: "2026-08-03" },
  { nev: "Kovács Dániel", szerep: "Ügyfélkezelő — egy ügyfél", email: "daniel@atlas.example", utolsoBelepes: "2026-07-31" },
];

export const INTEGRACIOK: readonly { nev: string; allapot: string; reszlet: string }[] = [
  { nev: "Hangszolgáltató", allapot: "Kapcsolódva", reszlet: "9 szám, 7 agenthez rendelve" },
  { nev: "E-mail integráció", allapot: "Kapcsolódva", reszlet: "3 feladó cím hitelesítve" },
  { nev: "Naptár", allapot: "Kapcsolódva", reszlet: "6 naptár, kétirányú szinkron" },
  { nev: "CRM-kimenet", allapot: "Kapcsolódva", reszlet: "Kontaktok és események továbbítása" },
];

// ---------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------

export function ugyfel(id: string): Ugyfel | undefined {
  return UGYFELEK.find((u) => u.id === id);
}

export function agent(id: string): Agent | undefined {
  return AGENTEK.find((a) => a.id === id);
}

export function kontakt(id: string): Kontakt | undefined {
  return KONTAKTOK.find((k) => k.id === id);
}

export function hivas(id: string): Hivas | undefined {
  return HIVASOK.find((h) => h.id === id);
}

export function atirat(id: string): Atirat | undefined {
  return ATIRATOK.find((a) => a.id === id);
}

export function ugyfelAgentjei(ugyfelId: string): Agent[] {
  return AGENTEK.filter((a) => a.ugyfelId === ugyfelId);
}

export function ugyfelKontaktjai(ugyfelId: string): Kontakt[] {
  return KONTAKTOK.filter((k) => k.ugyfelId === ugyfelId);
}

export function ugyfelHivasai(ugyfelId: string): Hivas[] {
  return HIVASOK.filter((h) => h.ugyfelId === ugyfelId);
}

export function agentHivasai(agentId: string): Hivas[] {
  return HIVASOK.filter((h) => h.agentId === agentId);
}

export function ugyfelIdopontjai(ugyfelId: string): Idopont[] {
  return IDOPONTOK.filter((i) => i.ugyfelId === ugyfelId);
}

export function ugyfelKampanyai(ugyfelId: string): Kampany[] {
  return KAMPANYOK.filter((k) => k.ugyfelId === ugyfelId);
}

// ---------------------------------------------------------------------------
// Derived aggregates
//
// Everything below is computed from the series above, so the dashboard, the
// client cards, the per-client reports and the portal can never disagree.
// ---------------------------------------------------------------------------

function osszeg(xs: readonly number[]): number {
  return xs.reduce((a, b) => a + b, 0);
}

/** Inclusive-start, exclusive-end slice of a daily series. */
function szelet(sor: readonly number[], tol: number, ig?: number): readonly number[] {
  return sor.slice(tol, ig);
}

export type Ablak = "30nap" | "julius";

/** Index range into `NAPOK` for a named window. */
export function ablakRange(ablak: Ablak): [number, number] {
  // July is days 0…30 of NAPOK (2026-07-01 … 2026-07-31).
  return ablak === "julius" ? [0, 31] : [UTOLSO_30_KEZDET, NAPOK.length];
}

export function ablakNapok(ablak: Ablak): readonly string[] {
  const [a, b] = ablakRange(ablak);
  return NAPOK.slice(a, b);
}

/** Daily call counts for one client (or all clients) over a window. */
export function hivasSor(ablak: Ablak, ugyfelId?: string): number[] {
  const [a, b] = ablakRange(ablak);
  const lista = ugyfelId ? UGYFELEK.filter((u) => u.id === ugyfelId) : UGYFELEK;
  const napok = b - a;
  return Array.from({ length: napok }, (_, i) =>
    osszeg(lista.map((u) => u.hivasSor[a + i] ?? 0)),
  );
}

/** Daily booked-appointment counts for one client (or all) over a window. */
export function foglalasSor(ablak: Ablak, ugyfelId?: string): number[] {
  const [a, b] = ablakRange(ablak);
  const lista = ugyfelId ? UGYFELEK.filter((u) => u.id === ugyfelId) : UGYFELEK;
  const napok = b - a;
  return Array.from({ length: napok }, (_, i) =>
    osszeg(lista.map((u) => u.foglalasSor[a + i] ?? 0)),
  );
}

/** Minutes consumed in the trailing 30 days. Drives the quota progress bars. */
export function felhasznaltPerc(u: Ugyfel): number {
  const hivas = osszeg(szelet(u.hivasSor, UTOLSO_30_KEZDET));
  return Math.round(hivas * u.atlagPercPerHivas);
}

export function keretArany(u: Ugyfel): number {
  return felhasznaltPerc(u) / u.perckeret;
}

/** Calls in the trailing 30 days. */
export function hivas30(u: Ugyfel): number {
  return osszeg(szelet(u.hivasSor, UTOLSO_30_KEZDET));
}

/** Calls placed or received today. */
export function hivasMa(u?: Ugyfel): number {
  const last = NAPOK.length - 1;
  const lista = u ? [u] : UGYFELEK;
  return osszeg(lista.map((x) => x.hivasSor[last] ?? 0));
}

/** Appointments booked in the trailing 7 days. */
export function foglalas7(u?: Ugyfel): number {
  const lista = u ? [u] : UGYFELEK;
  return osszeg(lista.map((x) => osszeg(szelet(x.foglalasSor, UTOLSO_7_KEZDET))));
}

export function aktivAgentek(ugyfelId?: string): Agent[] {
  return AGENTEK.filter(
    (a) => a.statusz === "elo" && (ugyfelId ? a.ugyfelId === ugyfelId : true),
  );
}

/**
 * Outcome counts over a window. `foglalva` comes from the bookings series so it
 * matches the KPI and the weekly bar chart exactly; the remaining four are
 * split by the client's ratios using largest-remainder, so the parts always add
 * up to the total.
 */
export function kimenetelMegoszlas(
  ablak: Ablak,
  ugyfelId?: string,
): Record<Kimenetel, number> {
  const [a, b] = ablakRange(ablak);
  const lista = ugyfelId ? UGYFELEK.filter((u) => u.id === ugyfelId) : UGYFELEK;
  const eredmeny: Record<Kimenetel, number> = {
    foglalva: 0,
    visszahivas: 0,
    nem_vette_fel: 0,
    hangposta: 0,
    elutasitotta: 0,
  };

  for (const u of lista) {
    const hivas = osszeg(u.hivasSor.slice(a, b));
    const foglalva = osszeg(u.foglalasSor.slice(a, b));
    eredmeny.foglalva += foglalva;

    const marad = hivas - foglalva;
    const kulcsok: Kimenetel[] = ["visszahivas", "nem_vette_fel", "hangposta", "elutasitotta"];
    const sulyOsszeg = osszeg(kulcsok.map((k) => u.kimenetelArany[k]));
    const nyers = kulcsok.map((k) => (u.kimenetelArany[k] / sulyOsszeg) * marad);
    const egesz = nyers.map(Math.floor);
    let rest = marad - osszeg(egesz);
    const sorrend = nyers
      .map((v, i) => ({ i, frac: v - Math.floor(v) }))
      .sort((x, y) => y.frac - x.frac || x.i - y.i);
    for (let n = 0; rest > 0; n++, rest--) egesz[sorrend[n % sorrend.length]!.i]!++;
    kulcsok.forEach((k, i) => {
      eredmeny[k] += egesz[i]!;
    });
  }
  return eredmeny;
}

/** Weekly booked-appointment totals, for the report bar chart. */
export function foglalasHetente(
  ablak: Ablak,
  ugyfelId?: string,
): { cimke: string; ertek: number }[] {
  const sor = foglalasSor(ablak, ugyfelId);
  const napok = ablakNapok(ablak);
  const out: { cimke: string; ertek: number }[] = [];
  for (let i = 0; i < sor.length; i += 7) {
    const vege = Math.min(i + 7, sor.length);
    out.push({
      cimke: `${napok[i]!.slice(8)}—${napok[vege - 1]!.slice(8)}.`,
      ertek: osszeg(sor.slice(i, vege)),
    });
  }
  return out;
}

/** Calls handled by one agent in the trailing 7 days. */
export function agentHetiDarab(a: Agent): number {
  if (a.tipus === "email") return a.hetiEmail ?? 0;
  const u = ugyfel(a.ugyfelId);
  if (!u) return 0;
  const ossz = osszeg(szelet(u.hivasSor, UTOLSO_7_KEZDET));
  const testverek = ugyfelAgentjei(u.id).filter((x) => x.tipus === "hang");
  // Give the last voice agent the remainder so the parts sum to the client total.
  if (testverek.length > 1 && testverek[testverek.length - 1]!.id === a.id) {
    const mas = testverek
      .slice(0, -1)
      .reduce((acc, x) => acc + Math.round(ossz * (x.volumenArany ?? 0)), 0);
    return ossz - mas;
  }
  return Math.round(ossz * (a.volumenArany ?? 1));
}

/** Aggregate e-mail reply rate across every campaign. Drives the KPI card. */
export function emailValaszarany(ugyfelId?: string): number {
  const lista = ugyfelId ? KAMPANYOK.filter((k) => k.ugyfelId === ugyfelId) : KAMPANYOK;
  const elkuldve = osszeg(lista.map((k) => k.elkuldve));
  if (elkuldve === 0) return 0;
  return osszeg(lista.map((k) => k.valasz)) / elkuldve;
}

export function emailMegnyitasarany(ugyfelId?: string): number {
  const lista = ugyfelId ? KAMPANYOK.filter((k) => k.ugyfelId === ugyfelId) : KAMPANYOK;
  const elkuldve = osszeg(lista.map((k) => k.elkuldve));
  if (elkuldve === 0) return 0;
  return osszeg(lista.map((k) => k.megnyitva)) / elkuldve;
}

/** Sum of open deal values (everything not yet closed). */
export function nyitottErtek(ugyfelId?: string): number {
  return osszeg(
    KONTAKTOK.filter(
      (k) => k.szakasz !== "lezarva" && (ugyfelId ? k.ugyfelId === ugyfelId : true),
    ).map((k) => k.ertek),
  );
}

export function szakaszKontaktjai(szakasz: Szakasz, ugyfelId?: string): Kontakt[] {
  return KONTAKTOK.filter(
    (k) => k.szakasz === szakasz && (ugyfelId ? k.ugyfelId === ugyfelId : true),
  );
}
