/* Dates in the demo never come from the system clock. "Today" is the Monday of
   the academy's current week, so moving the week in the admin panel moves
   everything together: drip releases, which events are past, comment ages.
   Formatting is done by hand rather than through Intl, so the server render
   and the client render cannot disagree. */

const MONTHS = [
  "január",
  "február",
  "március",
  "április",
  "május",
  "június",
  "július",
  "augusztus",
  "szeptember",
  "október",
  "november",
  "december",
];
const MONTHS_SHORT = ["jan.", "febr.", "márc.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."];
const DAYS = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];

const DAY_MS = 86_400_000;

export function parseISO(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`);
}

export function toISO(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function addDays(iso: string, days: number): string {
  return toISO(new Date(parseISO(iso).getTime() + days * DAY_MS));
}

export function diffDays(aISO: string, bISO: string): number {
  return Math.round((parseISO(aISO).getTime() - parseISO(bISO).getTime()) / DAY_MS);
}

/** Monday of the given academy week. */
export function weekStart(academyStart: string, week: number): string {
  return addDays(academyStart, (week - 1) * 7);
}

export function todayISO(academyStart: string, currentWeek: number): string {
  return weekStart(academyStart, currentWeek);
}

/** "2026. november 2." */
export function formatDate(iso: string): string {
  const d = parseISO(iso);
  return `${d.getUTCFullYear()}. ${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}.`;
}

/** "nov. 2." */
export function formatShort(iso: string): string {
  const d = parseISO(iso);
  return `${MONTHS_SHORT[d.getUTCMonth()]} ${d.getUTCDate()}.`;
}

/** "2026. november" */
export function formatMonth(iso: string): string {
  const d = parseISO(iso);
  return `${d.getUTCFullYear()}. ${MONTHS[d.getUTCMonth()]}`;
}

export function dayName(iso: string): string {
  return DAYS[parseISO(iso).getUTCDay()]!;
}

export function relativeDays(daysAgo: number): string {
  if (daysAgo <= 0) return "ma";
  if (daysAgo === 1) return "tegnap";
  if (daysAgo < 7) return `${daysAgo} napja`;
  if (daysAgo < 14) return "egy hete";
  if (daysAgo < 31) return `${Math.floor(daysAgo / 7)} hete`;
  return `${Math.floor(daysAgo / 30)} hónapja`;
}

export function formatDuration(min: number): string {
  if (min < 60) return `${min} perc`;
  const h = Math.floor(min / 60);
  const m = min % 60;
  return m === 0 ? `${h} óra` : `${h} óra ${m} perc`;
}

/** Hungarian definite article for a number: "az 5. szint", "a 3. hét". */
export function article(n: number): "a" | "az" {
  const s = String(n);
  if (s.startsWith("5") || n === 1 || (s.startsWith("1") && (s.length === 4 || s.length === 7))) return "az";
  return "a";
}
