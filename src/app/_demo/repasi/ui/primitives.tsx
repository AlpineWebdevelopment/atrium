"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { szam, szazalek } from "../lib/format";

// ---------------------------------------------------------------------------
// Text
// ---------------------------------------------------------------------------

/** Every number, ID, phone number, duration and percentage goes through this. */
export function Mono({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`a-mono ${className}`}>{children}</span>;
}

export function Halvany({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`text-(--a-muted) ${className}`}>{children}</span>;
}

// ---------------------------------------------------------------------------
// Badge
// ---------------------------------------------------------------------------

export type Tonus = "success" | "warning" | "danger" | "neutral" | "accent";

const TONUS: Record<Tonus, string> = {
  success: "bg-[#F0FDF4] text-[#15803D] border-[#DCFCE7]",
  warning: "bg-[#FFFBEB] text-[#B45309] border-[#FDF0C8]",
  danger: "bg-[#FEF2F2] text-[#B91C1C] border-[#FCE3E3]",
  neutral: "bg-[#F5F5F4] text-[#6B7280] border-[#E7E5E4]",
  accent: "bg-(--a-accent-soft) text-(--a-accent) border-[#CCFBF1]",
};

export function Badge({
  children,
  tonus = "neutral",
  pont = false,
}: {
  children: ReactNode;
  tonus?: Tonus;
  /** Renders the pulsing live dot ahead of the label. */
  pont?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-0.5 text-[12px] leading-[18px] ${TONUS[tonus]}`}
    >
      {pont && <span className="a-pulse" aria-hidden="true" />}
      {children}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Surfaces
// ---------------------------------------------------------------------------

export function Kartya({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`a-card ${className}`}>{children}</div>;
}

export function Panel({
  cim,
  jobb,
  children,
  className = "",
  belso = true,
}: {
  cim?: ReactNode;
  jobb?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Turn off to let a table sit flush against the panel edges. */
  belso?: boolean;
}) {
  return (
    <section className={`a-card ${className}`}>
      {(cim || jobb) && (
        <header className="flex min-h-[46px] items-center justify-between gap-3 border-b border-(--a-border) px-4 py-2.5">
          <h2 className="text-[13px] font-medium">{cim}</h2>
          {jobb}
        </header>
      )}
      <div className={belso ? "p-4" : ""}>{children}</div>
    </section>
  );
}

export function Oldalfej({
  cim,
  alcim,
  jobb,
}: {
  cim: string;
  alcim?: ReactNode;
  jobb?: ReactNode;
}) {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <div>
        <h1 className="text-[19px] font-medium leading-tight">{cim}</h1>
        {alcim && <p className="mt-1 text-[13px] text-(--a-muted)">{alcim}</p>}
      </div>
      {jobb && <div className="flex flex-none items-center gap-2">{jobb}</div>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------

export function StatKartya({
  cimke,
  ertek,
  alatta,
  jelzes,
}: {
  cimke: string;
  ertek: ReactNode;
  alatta?: ReactNode;
  jelzes?: ReactNode;
}) {
  return (
    <div className="a-card px-4 py-3.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[12px] text-(--a-muted)">{cimke}</span>
        {jelzes}
      </div>
      <div className="a-mono mt-1.5 text-[26px] leading-8 tracking-[-0.02em]">{ertek}</div>
      {alatta && <div className="mt-0.5 text-[12px] text-(--a-muted)">{alatta}</div>}
    </div>
  );
}

export function KpiSor({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-4 gap-3">{children}</div>;
}

// ---------------------------------------------------------------------------
// Progress
// ---------------------------------------------------------------------------

export function Folyamatsav({
  ertek,
  max,
  egyseg = "perc",
  kompakt = false,
}: {
  ertek: number;
  max: number;
  egyseg?: string;
  kompakt?: boolean;
}) {
  const arany = max === 0 ? 0 : Math.min(1, ertek / max);
  // Only the quota bar earns a second colour, and only when it is nearly spent.
  const szin = arany >= 0.9 ? "var(--a-warning)" : "var(--a-accent)";
  return (
    <div className="w-full">
      {!kompakt && (
        <div className="mb-1.5 flex items-baseline justify-between gap-2 text-[12px]">
          <span className="a-mono text-(--a-text)">
            {szam(ertek)} / {szam(max)} {egyseg}
          </span>
          <span className="a-mono text-(--a-muted)">{szazalek(arany * 100, 0)}</span>
        </div>
      )}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#EFEDEB]">
        <div
          className="h-full rounded-full transition-[width] duration-200 ease-out"
          style={{ width: `${arany * 100}%`, background: szin }}
        />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Table
// ---------------------------------------------------------------------------

export interface Oszlop<T> {
  kulcs: string;
  fej: ReactNode;
  /** Right-aligns the column; use for every numeric field. */
  szam?: boolean;
  cella: (sor: T) => ReactNode;
  szelesseg?: string;
}

export function Tabla<T>({
  oszlopok,
  sorok,
  sorKulcs,
  href,
  ures = "Nincs megjeleníthető adat.",
}: {
  oszlopok: readonly Oszlop<T>[];
  sorok: readonly T[];
  sorKulcs: (sor: T) => string;
  /** When present the whole row becomes a link target. */
  href?: (sor: T) => string;
  ures?: string;
}) {
  if (sorok.length === 0) {
    return <div className="px-4 py-10 text-center text-[13px] text-(--a-muted)">{ures}</div>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="a-table">
        <thead>
          <tr>
            {oszlopok.map((o) => (
              <th key={o.kulcs} className={o.szam ? "a-num" : ""} style={o.szelesseg ? { width: o.szelesseg } : undefined}>
                {o.fej}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorok.map((sor) => {
            const cellak = oszlopok.map((o, i) => {
              const tartalom = o.cella(sor);
              return (
                <td key={o.kulcs} className={o.szam ? "a-num" : ""}>
                  {href && i === 0 ? (
                    <Link href={href(sor)} className="block hover:text-(--a-accent)">
                      {tartalom}
                    </Link>
                  ) : href ? (
                    <Link href={href(sor)} className="block">
                      {tartalom}
                    </Link>
                  ) : (
                    tartalom
                  )}
                </td>
              );
            });
            return (
              <tr key={sorKulcs(sor)} data-clickable={href ? "true" : undefined}>
                {cellak}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Controls
// ---------------------------------------------------------------------------

export function Pirula({
  aktiv,
  onClick,
  children,
}: {
  aktiv: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-7 whitespace-nowrap rounded-full border px-3 text-[12px] transition-colors duration-150 ${
        aktiv
          ? "border-(--a-accent) bg-(--a-accent) text-white"
          : "border-(--a-border) bg-white text-(--a-muted) hover:border-(--a-border-strong) hover:text-(--a-text)"
      }`}
    >
      {children}
    </button>
  );
}

export function Fulek<T extends string>({
  fulek,
  aktiv,
  valaszt,
}: {
  fulek: readonly { id: T; cimke: string }[];
  aktiv: T;
  valaszt: (id: T) => void;
}) {
  return (
    <div className="flex gap-5 border-b border-(--a-border)">
      {fulek.map((f) => (
        <button
          key={f.id}
          type="button"
          onClick={() => valaszt(f.id)}
          className={`-mb-px border-b-2 pb-2.5 pt-1 text-[13px] transition-colors duration-150 ${
            aktiv === f.id
              ? "border-(--a-accent) text-(--a-accent)"
              : "border-transparent text-(--a-muted) hover:text-(--a-text)"
          }`}
        >
          {f.cimke}
        </button>
      ))}
    </div>
  );
}

export function Kapcsolo({
  be,
  valt,
  cimke,
}: {
  be: boolean;
  valt: () => void;
  cimke?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={be}
      aria-label={cimke}
      onClick={valt}
      className={`relative h-[20px] w-[34px] flex-none rounded-full border transition-colors duration-150 ${
        be ? "border-(--a-accent) bg-(--a-accent)" : "border-(--a-border-strong) bg-[#EFEDEB]"
      }`}
    >
      <span
        className="absolute top-[2px] h-[14px] w-[14px] rounded-full bg-white transition-[left] duration-150 ease-out"
        style={{ left: be ? 17 : 2 }}
      />
    </button>
  );
}

export function Mezo({
  cimke,
  sugo,
  children,
}: {
  cimke: string;
  sugo?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[12px] text-(--a-muted)">{cimke}</span>
      {children}
      {sugo && <span className="mt-1.5 block text-[12px] text-(--a-muted)">{sugo}</span>}
    </label>
  );
}

/** Two-column definition row, used across the detail screens. */
export function AdatSor({ cimke, children }: { cimke: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-(--a-border) py-2 last:border-b-0">
      <span className="flex-none text-[12px] text-(--a-muted)">{cimke}</span>
      <span className="text-right text-[13px]">{children}</span>
    </div>
  );
}

export function Szakaszcim({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 text-[13px] font-medium">{children}</h3>;
}
