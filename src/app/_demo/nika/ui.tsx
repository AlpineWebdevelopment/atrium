/* Shared UI primitives for the demo.
   Calm, light, one accent (signal). Sentence case labels, no exclamation marks,
   no emojis — the register rules apply to the interface, not just the messages. */

"use client";

import type { ReactNode } from "react";
import type { Status } from "./types";
import { STATUS_LABEL } from "./format";

/** Status → tone. Only the three states that need attention carry colour. */
const STATUS_TONE: Record<Status, string> = {
  uj: "bg-signal/12 text-ink border-signal/35",
  minosites_folyamatban: "bg-panel text-ink/70 border-line",
  minositett: "bg-signal/12 text-ink border-signal/35",
  idopont_kikuldve: "bg-panel text-ink/70 border-line",
  megtekintes_foglalva: "bg-signal/22 text-ink border-signal/50",
  nem_elerheto: "bg-panel text-ink/45 border-line",
  leiratkozott: "bg-[#E05252]/10 text-[#8A2F2F] border-[#E05252]/30",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[12px] leading-5 ${STATUS_TONE[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

export function Panel({
  title,
  action,
  children,
  className = "",
}: {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-xl border border-line bg-white ${className}`}>
      {(title || action) && (
        <header className="flex items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          {title && <h2 className="font-onest text-[15px] font-medium">{title}</h2>}
          {action}
        </header>
      )}
      {children}
    </section>
  );
}

/** Empty states say what to do next — no marketing copy. */
export function Empty({ children }: { children: ReactNode }) {
  return <p className="px-5 py-8 text-center text-[14px] text-ink/50">{children}</p>;
}

export function Button({
  children,
  onClick,
  variant = "ghost",
  type = "button",
  disabled,
  title,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "danger";
  type?: "button" | "submit";
  disabled?: boolean;
  title?: string;
}) {
  const tone =
    variant === "primary"
      ? "bg-ink text-bone hover:bg-ink/90 border-ink"
      : variant === "danger"
        ? "bg-white text-[#8A2F2F] border-[#E05252]/40 hover:bg-[#E05252]/8"
        : "bg-white text-ink/75 border-line hover:bg-panel/60";
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`inline-flex items-center justify-center rounded-lg border px-3 py-1.5 text-[13px] transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${tone}`}
    >
      {children}
    </button>
  );
}

/** A read/edit field on the adatlap. Inline-editable, saves on blur. */
export function Field({
  label,
  value,
  onSave,
  placeholder = "Nincs megadva",
  type = "text",
}: {
  label: string;
  value: string;
  onSave?: (next: string) => void;
  placeholder?: string;
  type?: "text" | "number";
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] text-ink/50">{label}</span>
      {onSave ? (
        <input
          type={type}
          defaultValue={value}
          placeholder={placeholder}
          onBlur={(e) => {
            if (e.target.value !== value) onSave(e.target.value);
          }}
          className="w-full rounded-lg border border-line bg-white px-2.5 py-1.5 text-[14px] outline-none focus:border-signal/60 focus:ring-2 focus:ring-signal/15"
        />
      ) : (
        <span className="block px-0.5 py-1.5 text-[14px]">{value || <span className="text-ink/35">{placeholder}</span>}</span>
      )}
    </label>
  );
}

export function Select<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T | "";
  options: { value: T; label: string }[];
  onChange: (next: T) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[12px] text-ink/50">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full rounded-lg border border-line bg-white px-2.5 py-1.5 text-[14px] outline-none focus:border-signal/60 focus:ring-2 focus:ring-signal/15"
      >
        <option value="">Nincs megadva</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

/** A quiet notice — used for the jogalap gate and demo-boundary notes. */
export function Notice({ tone = "neutral", children }: { tone?: "neutral" | "warn"; children: ReactNode }) {
  const cls =
    tone === "warn"
      ? "border-[#E05252]/30 bg-[#E05252]/6 text-[#8A2F2F]"
      : "border-line bg-panel/60 text-ink/60";
  return <p className={`rounded-lg border px-3 py-2 text-[13px] ${cls}`}>{children}</p>;
}

/** Score bar for the pontozás breakdown. Proportion of points earned. */
export function ScoreBar({ points, max }: { points: number; max: number }) {
  const pct = max === 0 ? 0 : Math.round((points / max) * 100);
  return (
    <span className="inline-block h-1.5 w-16 overflow-hidden rounded-full bg-line align-middle">
      <span className="block h-full rounded-full bg-signal" style={{ width: `${pct}%` }} />
    </span>
  );
}
