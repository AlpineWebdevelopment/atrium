/* Hungarian formatting + label maps.
   Numbers use the Hungarian convention: space-grouped, "45 000 000 Ft".
   Non-breaking spaces keep amounts from wrapping mid-number. */

import type {
  Allapot,
  Channel,
  Finanszirozas,
  IngatlanTipus,
  Idozites,
  Role,
  Source,
  Status,
  Surgosseg,
  MatchStatus,
} from "./types";

const NBSP = " ";

/** 45000000 → "45 000 000 Ft" */
export function ft(value: number | null | undefined): string {
  if (value == null) return "—";
  return `${groupDigits(value)}${NBSP}Ft`;
}

/** Short form for dense tables: 45000000 → "45,0 M Ft" */
export function ftShort(value: number | null | undefined): string {
  if (value == null) return "—";
  const millions = value / 1_000_000;
  const text = millions.toLocaleString("hu-HU", {
    minimumFractionDigits: millions < 100 ? 1 : 0,
    maximumFractionDigits: millions < 100 ? 1 : 0,
  });
  return `${text}${NBSP}M${NBSP}Ft`;
}

export function groupDigits(value: number): string {
  return Math.round(value).toLocaleString("hu-HU").replace(/\s| /g, NBSP);
}

export function m2(value: number | null | undefined): string {
  return value == null ? "—" : `${groupDigits(value)}${NBSP}m²`;
}

export function szobak(value: number | null | undefined): string {
  if (value == null) return "—";
  const text = value.toLocaleString("hu-HU", { maximumFractionDigits: 1 });
  return `${text}${NBSP}szoba`;
}

/** ISO date → "2026. 07. 17." */
export function huDate(iso: string | null | undefined): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return new Intl.DateTimeFormat("hu-HU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: TZ,
  }).format(d);
}

/** ISO timestamp → "07. 17. 14:32" — for the conversation timeline. */
export function huDateTime(iso: string | null | undefined): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return new Intl.DateTimeFormat("hu-HU", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: TZ,
  }).format(d);
}

export const TZ = "Europe/Budapest";

/** Whole days from today to `iso`; negative means overdue. */
export function daysFromToday(iso: string, today: string): number {
  const a = Date.parse(`${iso}T00:00:00Z`);
  const b = Date.parse(`${today}T00:00:00Z`);
  if (Number.isNaN(a) || Number.isNaN(b)) return 0;
  return Math.round((a - b) / 86_400_000);
}

/** "Ma", "Holnap", "3 napja lejárt", "5 nap múlva" */
export function dueLabel(iso: string | null, today: string): string {
  if (!iso) return "—";
  const diff = daysFromToday(iso, today);
  if (diff === 0) return "Ma";
  if (diff === 1) return "Holnap";
  if (diff === -1) return "Tegnap járt le";
  if (diff < 0) return `${Math.abs(diff)} napja lejárt`;
  return `${diff} nap múlva`;
}

export const STATUS_LABEL: Record<Status, string> = {
  uj: "Új",
  minosites_folyamatban: "Minősítés folyamatban",
  minositett: "Minősített",
  idopont_kikuldve: "Időpont kiküldve",
  megtekintes_foglalva: "Megtekintés foglalva",
  nem_elerheto: "Nem elérhető",
  leiratkozott: "Leiratkozott",
};

export const ROLE_LABEL: Record<Role, string> = {
  elado: "Eladó",
  vevo: "Vevő",
  mindketto: "Eladó és vevő",
};

export const SOURCE_LABEL: Record<Source, string> = {
  hirdetes: "Hirdetés",
  webform: "Webűrlap",
  email: "E-mail",
  kezi: "Kézi felvitel",
  import: "Import",
};

export const TIPUS_LABEL: Record<IngatlanTipus, string> = {
  lakas: "Lakás",
  csaladi_haz: "Családi ház",
  ikerhaz: "Ikerház",
  telek: "Telek",
  egyeb: "Egyéb",
};

export const ALLAPOT_LABEL: Record<Allapot, string> = {
  uj: "Új építésű",
  felujitott: "Felújított",
  jo: "Jó állapotú",
  felujitando: "Felújítandó",
};

export const IDOZITES_LABEL: Record<Idozites, string> = {
  azonnal: "Azonnal",
  "1_3_ho": "1–3 hónap",
  "3_6_ho": "3–6 hónap",
  felmeres_alatt: "Felmérés alatt",
};

export const SURGOSSEG_LABEL: Record<Surgosseg, string> = {
  azonnal: "Azonnal",
  "1_3_ho": "1–3 hónap",
  "3_6_ho": "3–6 hónap",
  nezelodik: "Nézelődik",
};

export const FINANSZIROZAS_LABEL: Record<Finanszirozas, string> = {
  keszpenz: "Készpénz",
  hitel: "Hitel",
  vegyes: "Vegyes",
  meg_nem_tudja: "Még nem tudja",
};

export const CHANNEL_LABEL: Record<Channel, string> = {
  sms: "SMS",
  email: "E-mail",
  messenger: "Messenger",
  instagram: "Instagram",
  whatsapp: "WhatsApp",
};

export const MATCH_STATUS_LABEL: Record<MatchStatus, string> = {
  javasolt: "Javasolt",
  elfogadva: "Elfogadva",
  elutasitva: "Elutasítva",
  megtekintes_foglalva: "Megtekintés foglalva",
};

/** Formats a list the Hungarian way: "Miskolc, Nyíregyháza és Eger". */
export function joinHu(items: string[]): string {
  if (items.length === 0) return "—";
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(", ")} és ${items[items.length - 1]}`;
}
