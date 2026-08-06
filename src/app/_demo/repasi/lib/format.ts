/* Hungarian formatting, hand-rolled on purpose.
   Intl.NumberFormat output can differ between the Node ICU used for the server
   render and the browser's, which shows up as a hydration mismatch. These
   helpers are pure string work, so server and client always agree. */

const NBSP = " ";

/** 12400 → "12 400" (non-breaking thin space, so numbers never wrap). */
export function szam(n: number): string {
  const neg = n < 0;
  const digits = Math.round(Math.abs(n)).toString();
  let out = "";
  for (let i = 0; i < digits.length; i++) {
    if (i > 0 && (digits.length - i) % 3 === 0) out += NBSP;
    out += digits[i];
  }
  return (neg ? "−" : "") + out;
}

/** 1850000 → "1 850 000 Ft". Only ever used for CRM deal values. */
export function ft(n: number): string {
  return `${szam(n)}${NBSP}Ft`;
}

/** 2400000 → "2,4 M Ft" — for tight CRM card layouts. Under a million the
    millions form reads badly ("0,74 M Ft"), so the full amount is shown. */
export function ftRovid(n: number): string {
  if (n < 1_000_000) return ft(n);
  const m = n / 1_000_000;
  const s = (m >= 10 ? m.toFixed(1) : m.toFixed(2)).replace(/\.?0+$/, "");
  return `${s.replace(".", ",")}${NBSP}M${NBSP}Ft`;
}

/** 272 → "4:32" */
export function hossz(mp: number): string {
  const m = Math.floor(mp / 60);
  const s = mp % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** 41.234 → "41,2%" (Hungarian decimal comma). */
export function szazalek(x: number, tizedes = 1): string {
  return `${x.toFixed(tizedes).replace(".", ",")}%`;
}

/** 0.412 → "41,2%" */
export function arany(x: number, tizedes = 1): string {
  return szazalek(x * 100, tizedes);
}

/** 1.05 → "1,05×" */
export function tempo(x: number): string {
  return `${x.toFixed(2).replace(".", ",")}×`;
}

const HONAPOK = [
  "január", "február", "március", "április", "május", "június",
  "július", "augusztus", "szeptember", "október", "november", "december",
];

/** "2026-08-03" → "2026. 08. 03." */
export function datum(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${y}. ${m}. ${d}.`;
}

/** "2026-08-03" → "08. 03." — chart axes and dense tables. */
export function datumRovid(iso: string): string {
  const [, m, d] = iso.split("-");
  return `${m}. ${d}.`;
}

/** "2026-08-03" → "2026. augusztus 3." */
export function datumSzoveg(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${y}. ${HONAPOK[Number(m) - 1]} ${Number(d)}.`;
}

/** "2026-07-01" → "2026. július" */
export function honap(iso: string): string {
  const [y, m] = iso.split("-");
  return `${y}. ${HONAPOK[Number(m) - 1]}`;
}

/** ("2026-08-03", "14:32") → "2026. 08. 03. 14:32" */
export function datumIdo(iso: string, ido: string): string {
  return `${datum(iso)} ${ido}`;
}

const NAPOK = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];

/** "2026-08-03" → "hétfő". UTC-based so the label never shifts by timezone. */
export function napNev(iso: string): string {
  return NAPOK[new Date(`${iso}T00:00:00Z`).getUTCDay()];
}

/** Initials for the avatar chip: "R. Norbert" → "RN". */
export function monogram(nev: string): string {
  return nev
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]!.toUpperCase())
    .join("");
}
