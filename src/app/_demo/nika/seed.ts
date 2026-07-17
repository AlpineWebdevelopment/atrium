/* Demo seed — entirely fictional.
   Names, numbers and addresses here are invented for demonstration. No real
   contact of NIKA Online Kft. appears in this file, and nothing in it leaves
   the browser.

   The demo is anchored to a fixed date (DEMO_TODAY) rather than the real clock:
   it keeps "Ma" deterministic, and it keeps server and client render identical. */

import type {
  BuyerBrief,
  Contact,
  Conversation,
  Message,
  Property,
  Task,
} from "./types";

/** The demo's "today". Everything dated in this file is relative to it. */
export const DEMO_TODAY = "2026-07-17";

const ANCHOR = Date.parse(`${DEMO_TODAY}T00:00:00+02:00`);

/** Days offset from DEMO_TODAY → ISO date ("2026-07-15"). */
function day(offset: number): string {
  return new Date(ANCHOR + offset * 86_400_000).toISOString().slice(0, 10);
}

/** Days/hours offset from DEMO_TODAY → ISO timestamp. */
function at(dayOffset: number, hour: number, minute = 0): string {
  return new Date(ANCHOR + dayOffset * 86_400_000 + hour * 3_600_000 + minute * 60_000).toISOString();
}

type SellerSpec = {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  status: Contact["status"];
  source: Contact["source"];
  outreach_allowed: boolean;
  consent_basis: string | null;
  next_step: string | null;
  next_step_due: string | null;
  created: number;
  property: Omit<Property, "id" | "contact_id" | "created_at" | "updated_at">;
};

const SELLERS: SellerSpec[] = [
  {
    id: "c_e01",
    name: "Kovács Ágnes",
    phone: "+36301110001",
    email: "kovacs.agnes@pelda.hu",
    status: "minositett",
    source: "hirdetes",
    outreach_allowed: true,
    consent_basis: "Hirdetésre jelentkezett, hozzájárulás rögzítve",
    next_step: "Fotózás egyeztetése",
    next_step_due: day(0),
    created: -6,
    property: {
      telepules: "Miskolc",
      varosresz: "Avas",
      ingatlan_tipus: "lakas",
      meret_m2: 62,
      szobak: 2,
      allapot: "felujitott",
      iranyar_ft: 38_500_000,
      ertekesitesi_idozites: "azonnal",
      notes: "Panel, 4. emelet, liftes. Erkély a déli oldalon.",
    },
  },
  {
    id: "c_e02",
    name: "Tóth Bálint",
    phone: "+36301110002",
    email: "toth.balint@pelda.hu",
    status: "idopont_kikuldve",
    source: "webform",
    outreach_allowed: true,
    consent_basis: "Webűrlapon hozzájárult",
    next_step: "Visszajelzés a foglalási linkre",
    next_step_due: day(1),
    created: -4,
    property: {
      telepules: "Miskolc",
      varosresz: "Diósgyőr",
      ingatlan_tipus: "csaladi_haz",
      meret_m2: 128,
      szobak: 4,
      allapot: "jo",
      iranyar_ft: 74_000_000,
      ertekesitesi_idozites: "1_3_ho",
      notes: "500 m² telek, kétállásos garázs.",
    },
  },
  {
    id: "c_e03",
    name: "Szabó Márta",
    phone: "+36301110003",
    email: null,
    status: "minosites_folyamatban",
    source: "hirdetes",
    outreach_allowed: true,
    consent_basis: "Hirdetésre jelentkezett",
    next_step: "Irányár egyeztetése",
    next_step_due: day(0),
    created: -2,
    property: {
      telepules: "Felsőzsolca",
      varosresz: null,
      ingatlan_tipus: "csaladi_haz",
      meret_m2: 96,
      szobak: 3,
      allapot: "felujitando",
      iranyar_ft: 42_000_000,
      ertekesitesi_idozites: "3_6_ho",
      notes: null,
    },
  },
  {
    id: "c_e04",
    name: "Nagy Péter",
    phone: "+36301110004",
    email: "nagy.peter@pelda.hu",
    status: "megtekintes_foglalva",
    source: "webform",
    outreach_allowed: true,
    consent_basis: "Webűrlapon hozzájárult",
    next_step: "Megtekintés levezetése",
    next_step_due: day(2),
    created: -11,
    property: {
      telepules: "Miskolc",
      varosresz: "Belváros",
      ingatlan_tipus: "lakas",
      meret_m2: 78,
      szobak: 3,
      allapot: "uj",
      iranyar_ft: 59_000_000,
      ertekesitesi_idozites: "azonnal",
      notes: "Új építésű társasház, tehermentes.",
    },
  },
  {
    id: "c_e05",
    name: "Varga Ildikó",
    phone: "+36301110005",
    email: "varga.ildiko@pelda.hu",
    status: "minositett",
    source: "email",
    outreach_allowed: true,
    consent_basis: "E-mailben kereste az irodát",
    next_step: "Értékbecslés időpontja",
    next_step_due: day(-1),
    created: -9,
    property: {
      telepules: "Miskolc",
      varosresz: "Tapolca",
      ingatlan_tipus: "csaladi_haz",
      meret_m2: 145,
      szobak: 5,
      allapot: "felujitott",
      iranyar_ft: 89_000_000,
      ertekesitesi_idozites: "1_3_ho",
      notes: "Medence, 800 m² telek.",
    },
  },
  {
    id: "c_e06",
    name: "Horváth Zsolt",
    phone: "+36301110006",
    email: null,
    status: "uj",
    source: "hirdetes",
    outreach_allowed: true,
    consent_basis: "Hirdetésre jelentkezett",
    next_step: "Első megkeresés kiküldése",
    next_step_due: day(0),
    created: 0,
    property: {
      telepules: "Nyékládháza",
      varosresz: null,
      ingatlan_tipus: "telek",
      meret_m2: 1200,
      szobak: null,
      allapot: null,
      iranyar_ft: 18_000_000,
      ertekesitesi_idozites: "felmeres_alatt",
      notes: "Építési telek, közművek a telekhatáron.",
    },
  },
  {
    id: "c_e07",
    name: "Kiss Erzsébet",
    phone: "+36301110007",
    email: "kiss.erzsebet@pelda.hu",
    status: "nem_elerheto",
    source: "import",
    outreach_allowed: false,
    consent_basis: null,
    next_step: "Jogalap tisztázása a megkeresés előtt",
    next_step_due: day(3),
    created: -21,
    property: {
      telepules: "Miskolc",
      varosresz: "Hejőcsaba",
      ingatlan_tipus: "lakas",
      meret_m2: 54,
      szobak: 2,
      allapot: "jo",
      iranyar_ft: 32_000_000,
      ertekesitesi_idozites: "3_6_ho",
      notes: "Korábbi listáról importálva, jogalap nincs rögzítve.",
    },
  },
  {
    id: "c_e08",
    name: "Molnár Gábor",
    phone: "+36301110008",
    email: "molnar.gabor@pelda.hu",
    status: "minositett",
    source: "webform",
    outreach_allowed: true,
    consent_basis: "Webűrlapon hozzájárult",
    next_step: "Hirdetés szövegének jóváhagyása",
    next_step_due: day(1),
    created: -7,
    property: {
      telepules: "Miskolc",
      varosresz: "Görömböly",
      ingatlan_tipus: "ikerhaz",
      meret_m2: 110,
      szobak: 4,
      allapot: "uj",
      iranyar_ft: 68_000_000,
      ertekesitesi_idozites: "azonnal",
      notes: null,
    },
  },
  {
    id: "c_e09",
    name: "Fekete Anna",
    phone: "+36301110009",
    email: "fekete.anna@pelda.hu",
    status: "leiratkozott",
    source: "import",
    outreach_allowed: false,
    consent_basis: null,
    next_step: null,
    next_step_due: null,
    created: -30,
    property: {
      telepules: "Sajószentpéter",
      varosresz: null,
      ingatlan_tipus: "csaladi_haz",
      meret_m2: 88,
      szobak: 3,
      allapot: "felujitando",
      iranyar_ft: 26_000_000,
      ertekesitesi_idozites: "felmeres_alatt",
      notes: "Leiratkozott, további megkeresés tiltva.",
    },
  },
  {
    id: "c_e10",
    name: "Balogh Tamás",
    phone: "+36301110010",
    email: "balogh.tamas@pelda.hu",
    status: "minosites_folyamatban",
    source: "hirdetes",
    outreach_allowed: true,
    consent_basis: "Hirdetésre jelentkezett",
    next_step: "Állapot és méret pontosítása",
    next_step_due: day(0),
    created: -1,
    property: {
      telepules: "Miskolc",
      varosresz: "Szirma",
      ingatlan_tipus: "lakas",
      meret_m2: 66,
      szobak: 3,
      allapot: "jo",
      iranyar_ft: 41_000_000,
      ertekesitesi_idozites: "azonnal",
      notes: null,
    },
  },
];

type BuyerSpec = {
  id: string;
  name: string;
  phone: string | null;
  email: string | null;
  status: Contact["status"];
  source: Contact["source"];
  outreach_allowed: boolean;
  consent_basis: string | null;
  next_step: string | null;
  next_step_due: string | null;
  created: number;
  brief: Omit<BuyerBrief, "id" | "contact_id" | "created_at" | "updated_at">;
};

const BUYERS: BuyerSpec[] = [
  {
    id: "c_v01",
    name: "Simon Réka",
    phone: "+36302220001",
    email: "simon.reka@pelda.hu",
    status: "minositett",
    source: "webform",
    outreach_allowed: true,
    consent_basis: "Webűrlapon hozzájárult",
    next_step: "Párosítások átnézése",
    next_step_due: day(0),
    created: -5,
    brief: {
      keresett_telepulesek: ["Miskolc"],
      ingatlan_tipus: ["lakas"],
      meret_min_m2: 60,
      szobak_min: 2,
      keret_max_ft: 42_000_000,
      finanszirozas: "keszpenz",
      surgosseg: "azonnal",
      notes: "Liftes ház előny, földszintet nem kér.",
    },
  },
  {
    id: "c_v02",
    name: "Papp Dániel",
    phone: "+36302220002",
    email: "papp.daniel@pelda.hu",
    status: "minositett",
    source: "hirdetes",
    outreach_allowed: true,
    consent_basis: "Hirdetésre jelentkezett",
    next_step: "Megtekintés egyeztetése",
    next_step_due: day(1),
    created: -8,
    brief: {
      keresett_telepulesek: ["Miskolc", "Felsőzsolca"],
      ingatlan_tipus: ["csaladi_haz", "ikerhaz"],
      meret_min_m2: 100,
      szobak_min: 3,
      keret_max_ft: 75_000_000,
      finanszirozas: "hitel",
      surgosseg: "1_3_ho",
      notes: "Kétgyerekes család, iskola közelsége számít.",
    },
  },
  {
    id: "c_v03",
    name: "Lakatos Krisztina",
    phone: "+36302220003",
    email: null,
    status: "minosites_folyamatban",
    source: "webform",
    outreach_allowed: true,
    consent_basis: "Webűrlapon hozzájárult",
    next_step: "Keret tisztázása",
    next_step_due: day(0),
    created: -1,
    brief: {
      keresett_telepulesek: ["Miskolc"],
      ingatlan_tipus: ["lakas"],
      meret_min_m2: 50,
      szobak_min: 2,
      keret_max_ft: 35_000_000,
      finanszirozas: "meg_nem_tudja",
      surgosseg: "3_6_ho",
      notes: null,
    },
  },
  {
    id: "c_v04",
    name: "Juhász Márk",
    phone: "+36302220004",
    email: "juhasz.mark@pelda.hu",
    status: "idopont_kikuldve",
    source: "hirdetes",
    outreach_allowed: true,
    consent_basis: "Hirdetésre jelentkezett",
    next_step: "Foglalási link követése",
    next_step_due: day(2),
    created: -3,
    brief: {
      keresett_telepulesek: ["Miskolc"],
      ingatlan_tipus: ["lakas", "ikerhaz"],
      meret_min_m2: 70,
      szobak_min: 3,
      keret_max_ft: 62_000_000,
      finanszirozas: "vegyes",
      surgosseg: "azonnal",
      notes: null,
    },
  },
  {
    id: "c_v05",
    name: "Fodor Bea",
    phone: "+36302220005",
    email: "fodor.bea@pelda.hu",
    status: "minositett",
    source: "email",
    outreach_allowed: true,
    consent_basis: "E-mailben kereste az irodát",
    next_step: "Tapolcai ház bemutatása",
    next_step_due: day(-2),
    created: -14,
    brief: {
      keresett_telepulesek: ["Miskolc"],
      ingatlan_tipus: ["csaladi_haz"],
      meret_min_m2: 130,
      szobak_min: 4,
      keret_max_ft: 95_000_000,
      finanszirozas: "keszpenz",
      surgosseg: "1_3_ho",
      notes: "Kertes ingatlant keres, medence előny.",
    },
  },
  {
    id: "c_v06",
    name: "Somogyi László",
    phone: "+36302220006",
    email: null,
    status: "uj",
    source: "webform",
    outreach_allowed: true,
    consent_basis: "Webűrlapon hozzájárult",
    next_step: "Első megkeresés kiküldése",
    next_step_due: day(0),
    created: 0,
    brief: {
      keresett_telepulesek: ["Nyékládháza", "Mályi"],
      ingatlan_tipus: ["telek"],
      meret_min_m2: 800,
      szobak_min: null,
      keret_max_ft: 20_000_000,
      finanszirozas: "keszpenz",
      surgosseg: "1_3_ho",
      notes: null,
    },
  },
  {
    id: "c_v07",
    name: "Bogdán Nóra",
    phone: "+36302220007",
    email: "bogdan.nora@pelda.hu",
    status: "megtekintes_foglalva",
    source: "hirdetes",
    outreach_allowed: true,
    consent_basis: "Hirdetésre jelentkezett",
    next_step: "Megtekintés levezetése",
    next_step_due: day(2),
    created: -12,
    brief: {
      keresett_telepulesek: ["Miskolc"],
      ingatlan_tipus: ["lakas"],
      meret_min_m2: 75,
      szobak_min: 3,
      keret_max_ft: 60_000_000,
      finanszirozas: "hitel",
      surgosseg: "azonnal",
      notes: null,
    },
  },
  {
    id: "c_v08",
    name: "Veres Attila",
    phone: "+36302220008",
    email: "veres.attila@pelda.hu",
    status: "minositett",
    source: "kezi",
    outreach_allowed: false,
    consent_basis: null,
    next_step: "Jogalap rögzítése a megkeresés előtt",
    next_step_due: day(1),
    created: -2,
    brief: {
      keresett_telepulesek: ["Miskolc", "Szirmabesenyő"],
      ingatlan_tipus: ["ikerhaz", "csaladi_haz"],
      meret_min_m2: 105,
      szobak_min: 4,
      keret_max_ft: 70_000_000,
      finanszirozas: "hitel",
      surgosseg: "azonnal",
      notes: "Telefonon jelentkezett, jogalap még nincs rögzítve.",
    },
  },
  {
    id: "c_v09",
    name: "Pintér Csaba",
    phone: "+36302220009",
    email: "pinter.csaba@pelda.hu",
    status: "nem_elerheto",
    source: "import",
    outreach_allowed: false,
    consent_basis: null,
    next_step: "Jogalap tisztázása",
    next_step_due: day(5),
    created: -25,
    brief: {
      keresett_telepulesek: ["Kazincbarcika"],
      ingatlan_tipus: ["lakas"],
      meret_min_m2: 55,
      szobak_min: 2,
      keret_max_ft: 28_000_000,
      finanszirozas: "meg_nem_tudja",
      surgosseg: "nezelodik",
      notes: null,
    },
  },
  {
    id: "c_v10",
    name: "Deák Júlia",
    phone: "+36302220010",
    email: "deak.julia@pelda.hu",
    status: "minosites_folyamatban",
    source: "webform",
    outreach_allowed: true,
    consent_basis: "Webűrlapon hozzájárult",
    next_step: "Típus pontosítása",
    next_step_due: day(0),
    created: -1,
    brief: {
      keresett_telepulesek: ["Miskolc"],
      ingatlan_tipus: ["lakas", "csaladi_haz"],
      meret_min_m2: 60,
      szobak_min: 2,
      keret_max_ft: 45_000_000,
      finanszirozas: "vegyes",
      surgosseg: "azonnal",
      notes: null,
    },
  },
];

export function seedContacts(): Contact[] {
  const fromSeller = SELLERS.map<Contact>((s) => ({
    id: s.id,
    name: s.name,
    phone: s.phone,
    email: s.email,
    role: "elado",
    source: s.source,
    status: s.status,
    consent_basis: s.consent_basis,
    consent_at: s.consent_basis ? at(s.created, 9) : null,
    outreach_allowed: s.outreach_allowed,
    notes: null,
    next_step: s.next_step,
    next_step_due: s.next_step_due,
    created_at: at(s.created, 9),
    updated_at: at(s.created, 9),
  }));

  const fromBuyer = BUYERS.map<Contact>((b) => ({
    id: b.id,
    name: b.name,
    phone: b.phone,
    email: b.email,
    role: "vevo",
    source: b.source,
    status: b.status,
    consent_basis: b.consent_basis,
    consent_at: b.consent_basis ? at(b.created, 10) : null,
    outreach_allowed: b.outreach_allowed,
    notes: null,
    next_step: b.next_step,
    next_step_due: b.next_step_due,
    created_at: at(b.created, 10),
    updated_at: at(b.created, 10),
  }));

  return [...fromSeller, ...fromBuyer];
}

export function seedProperties(): Property[] {
  return SELLERS.map<Property>((s) => ({
    id: `p_${s.id}`,
    contact_id: s.id,
    ...s.property,
    created_at: at(s.created, 9),
    updated_at: at(s.created, 9),
  }));
}

export function seedBriefs(): BuyerBrief[] {
  return BUYERS.map<BuyerBrief>((b) => ({
    id: `b_${b.id}`,
    contact_id: b.id,
    ...b.brief,
    created_at: at(b.created, 10),
    updated_at: at(b.created, 10),
  }));
}

/* ---- Conversations. Register: Ön-form, sentence case, no exclamation marks,
   no emojis, and the assistant says what it is in the first message. ---- */

export function seedConversations(): Conversation[] {
  return [
    { id: "conv_1", contact_id: "c_e01", channel: "sms", state: "completed", goal: "elado_minosites", created_at: at(-6, 9, 5), updated_at: at(-6, 9, 41) },
    { id: "conv_2", contact_id: "c_e03", channel: "sms", state: "active", goal: "elado_minosites", created_at: at(-2, 11, 5), updated_at: at(0, 8, 12) },
    { id: "conv_3", contact_id: "c_v01", channel: "email", state: "completed", goal: "vevo_minosites", created_at: at(-5, 14, 5), updated_at: at(-5, 15, 2) },
    { id: "conv_4", contact_id: "c_v10", channel: "sms", state: "active", goal: "vevo_minosites", created_at: at(-1, 16, 5), updated_at: at(0, 7, 48) },
  ];
}

export function seedMessages(): Message[] {
  return [
    /* c_e01 — eladó minősítés, completed. */
    { id: "m_1", conversation_id: "conv_1", direction: "out", body: "Jó napot kívánok. Beke Anikó irodájából keresem, a NIKA Online AI-asszisztense vagyok. Az ingatlanhirdetésére jelentkezett. Megkérdezhetem, melyik településen és városrészben található az ingatlan?", provider_message_id: "sm_1", sent_at: at(-6, 9, 5), delivery_status: "delivered" },
    { id: "m_2", conversation_id: "conv_1", direction: "in", body: "Miskolcon, az Avason", provider_message_id: "sm_2", sent_at: at(-6, 9, 12), delivery_status: null },
    { id: "m_3", conversation_id: "conv_1", direction: "out", body: "Köszönöm. Milyen típusú az ingatlan, és mekkora a mérete négyzetméterben?", provider_message_id: "sm_3", sent_at: at(-6, 9, 13), delivery_status: "delivered" },
    { id: "m_4", conversation_id: "conv_1", direction: "in", body: "62 nm-es panellakás, 2 szoba", provider_message_id: "sm_4", sent_at: at(-6, 9, 20), delivery_status: null },
    { id: "m_5", conversation_id: "conv_1", direction: "out", body: "Rögzítettem. Milyen állapotban van a lakás?", provider_message_id: "sm_5", sent_at: at(-6, 9, 21), delivery_status: "delivered" },
    { id: "m_6", conversation_id: "conv_1", direction: "in", body: "Tavaly lett felújítva, minden új benne", provider_message_id: "sm_6", sent_at: at(-6, 9, 28), delivery_status: null },
    { id: "m_7", conversation_id: "conv_1", direction: "out", body: "Köszönöm. Milyen irányáron gondolkodik, és mikorra tervezi az értékesítést?", provider_message_id: "sm_7", sent_at: at(-6, 9, 29), delivery_status: "delivered" },
    { id: "m_8", conversation_id: "conv_1", direction: "in", body: "38,5 millió, és minél előbb", provider_message_id: "sm_8", sent_at: at(-6, 9, 38), delivery_status: null },
    { id: "m_9", conversation_id: "conv_1", direction: "out", body: "Köszönöm, minden szükséges adatot rögzítettem. Anikó felveszi Önnel a kapcsolatot. Időpontot itt tud foglalni a személyes egyeztetésre: https://booked4.us/nika-online", provider_message_id: "sm_9", sent_at: at(-6, 9, 41), delivery_status: "delivered" },

    /* c_e03 — eladó minősítés, in progress; last inbound needs a human. */
    { id: "m_10", conversation_id: "conv_2", direction: "out", body: "Jó napot kívánok. Beke Anikó irodájából keresem, a NIKA Online AI-asszisztense vagyok. Megkérdezhetem, melyik településen található az eladó ingatlan?", provider_message_id: "sm_10", sent_at: at(-2, 11, 5), delivery_status: "delivered" },
    { id: "m_11", conversation_id: "conv_2", direction: "in", body: "Felsőzsolcán, családi ház, 96 nm", provider_message_id: "sm_11", sent_at: at(-2, 11, 22), delivery_status: null },
    { id: "m_12", conversation_id: "conv_2", direction: "out", body: "Köszönöm. Milyen állapotban van a ház, és milyen irányárat tervez?", provider_message_id: "sm_12", sent_at: at(-2, 11, 23), delivery_status: "delivered" },
    { id: "m_13", conversation_id: "conv_2", direction: "in", body: "Felújítandó. Az árban bizonytalan vagyok, a szomszéd háza 45-ért ment el tavaly, de az nagyobb. Mit javasol?", provider_message_id: "sm_13", sent_at: at(0, 8, 12), delivery_status: null },

    /* c_v01 — vevő minősítés, completed. */
    { id: "m_14", conversation_id: "conv_3", direction: "out", body: "Jó napot kívánok. Beke Anikó irodájából írok, a NIKA Online AI-asszisztense vagyok. Az érdeklődésére reagálok. Megkérdezhetem, mely településen keres ingatlant?", provider_message_id: "em_1", sent_at: at(-5, 14, 5), delivery_status: "delivered" },
    { id: "m_15", conversation_id: "conv_3", direction: "in", body: "Miskolcon keresek lakást, legalább 60 nm, 2 szoba.", provider_message_id: "em_2", sent_at: at(-5, 14, 34), delivery_status: null },
    { id: "m_16", conversation_id: "conv_3", direction: "out", body: "Köszönöm. Mekkora keretet szán rá, és hogyan tervezi a finanszírozást?", provider_message_id: "em_3", sent_at: at(-5, 14, 36), delivery_status: "delivered" },
    { id: "m_17", conversation_id: "conv_3", direction: "in", body: "Maximum 42 millió, készpénzes vagyok. Sürgős, augusztusra költöznék.", provider_message_id: "em_4", sent_at: at(-5, 14, 58), delivery_status: null },
    { id: "m_18", conversation_id: "conv_3", direction: "out", body: "Köszönöm, minden szükséges adatot rögzítettem. Időpontot itt tud foglalni a megtekintésre: https://booked4.us/nika-online", provider_message_id: "em_5", sent_at: at(-5, 15, 2), delivery_status: "delivered" },

    /* c_v10 — vevő minősítés, in progress. */
    { id: "m_19", conversation_id: "conv_4", direction: "out", body: "Jó napot kívánok. Beke Anikó irodájából keresem, a NIKA Online AI-asszisztense vagyok. Megkérdezhetem, mely településen keres ingatlant?", provider_message_id: "sm_14", sent_at: at(-1, 16, 5), delivery_status: "delivered" },
    { id: "m_20", conversation_id: "conv_4", direction: "in", body: "Miskolc, 45 millióig, minimum 60 nm", provider_message_id: "sm_15", sent_at: at(0, 7, 48), delivery_status: null },
  ];
}

export function seedTasks(): Task[] {
  return [
    { id: "t_1", contact_id: "c_e01", title: "Minősítés kész — fotózás egyeztetése", due_date: day(0), status: "nyitott", origin: "auto", created_at: at(-6, 9, 41) },
    { id: "t_2", contact_id: "c_e03", title: "Beérkező üzenet válaszra vár — irányár kérdés", due_date: day(0), status: "nyitott", origin: "auto", created_at: at(0, 8, 12) },
    { id: "t_3", contact_id: "c_v01", title: "Minősítés kész — párosítások átnézése", due_date: day(0), status: "nyitott", origin: "auto", created_at: at(-5, 15, 2) },
    { id: "t_4", contact_id: "c_v05", title: "Sorozat kifutott válasz nélkül — kézi megkeresés", due_date: day(-2), status: "nyitott", origin: "auto", created_at: at(-2, 8, 0) },
    { id: "t_5", contact_id: "c_e05", title: "Értékbecslés időpontjának egyeztetése", due_date: day(-1), status: "nyitott", origin: "kezi", created_at: at(-3, 12, 0) },
    { id: "t_6", contact_id: "c_v08", title: "Jogalap rögzítése — megkeresés csak utána", due_date: day(1), status: "nyitott", origin: "auto", created_at: at(-2, 10, 0) },
    { id: "t_7", contact_id: "c_e07", title: "Importált kapcsolat jogalapjának tisztázása", due_date: day(3), status: "nyitott", origin: "auto", created_at: at(-21, 9, 0) },
    { id: "t_8", contact_id: "c_e02", title: "Foglalási link kiküldve — visszajelzés követése", due_date: day(1), status: "nyitott", origin: "auto", created_at: at(-4, 11, 0) },
    { id: "t_9", contact_id: "c_e04", title: "Megtekintés előkészítése", due_date: day(2), status: "nyitott", origin: "kezi", created_at: at(-5, 9, 0) },
    { id: "t_10", contact_id: "c_v02", title: "Minősítés kész — párosítások átnézése", due_date: day(-3), status: "kesz", origin: "auto", created_at: at(-8, 10, 30) },
  ];
}
