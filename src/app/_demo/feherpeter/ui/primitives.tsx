"use client";

import Link from "next/link";
import { useEffect, type ReactNode } from "react";
import { Lock, X } from "lucide-react";
import type { Member, TierId } from "../data/types";
import { useStore } from "../lib/store";
import { rankFor } from "../lib/access";

/* The one small set of reusable pieces. Everything visual that repeats — a
   button, a card, a badge, a modal — is here, so the screens stay consistent
   and the tokens stay the only source of colour. */

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`fp-eyebrow ${className}`}>{children}</p>;
}

type BtnProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: BtnProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`fp-btn fp-btn--${variant} ${size !== "md" ? `fp-btn--${size}` : ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: BtnProps & { href: string }) {
  return (
    <Link href={href} className={`fp-btn fp-btn--${variant} ${size !== "md" ? `fp-btn--${size}` : ""} ${className}`}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
  hover = false,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section" | "li";
}) {
  return <Tag className={`fp-card ${hover ? "fp-card--hover" : ""} ${className}`}>{children}</Tag>;
}

export function Badge({
  children,
  tone = "muted",
  className = "",
}: {
  children: ReactNode;
  tone?: "muted" | "gold" | "outline" | "danger";
  className?: string;
}) {
  const tones = {
    muted: "bg-(--fp-secondary) text-(--fp-fg)",
    gold: "bg-(--fp-gold-10) text-(--fp-gold)",
    outline: "border border-(--fp-border) text-(--fp-muted-fg)",
    danger: "bg-(--fp-danger)/10 text-(--fp-danger)",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-(--fp-radius-sm) px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function TierBadge({ tier, locked = false }: { tier: TierId; locked?: boolean }) {
  const { tiers } = useStore();
  const t = tiers.find((x) => x.id === tier);
  return (
    <Badge tone={locked ? "outline" : "gold"}>
      {locked && <Lock size={10} aria-hidden="true" />}
      {t?.name ?? tier}
    </Badge>
  );
}

export function RankBadge({ points, showLevel = true }: { points: number; showLevel?: boolean }) {
  const { ranks } = useStore();
  const r = rankFor(ranks, points);
  return (
    <span className="inline-flex items-center gap-1.5 text-[12px] text-(--fp-muted-fg)">
      <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-(--fp-gold-30) px-1 text-[10px] font-semibold text-(--fp-gold)">
        {showLevel ? r.level : ""}
      </span>
      {r.name}
    </span>
  );
}

const AVATAR_HUES = [220, 40, 30, 200, 150, 260, 15, 180];

export function Avatar({ member, size = 36 }: { member: Member | undefined; size?: number }) {
  const { members } = useStore();
  const peter = members.find((m) => m.isMentor);
  if (member && peter && member.id === peter.id) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/demo/feherpeter/peter-avatar.webp"
        alt=""
        width={size}
        height={size}
        className="flex-none rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  const name = member?.name ?? "?";
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
  const hue = AVATAR_HUES[(name.charCodeAt(0) + name.length) % AVATAR_HUES.length];
  return (
    <span
      aria-hidden="true"
      className="flex flex-none items-center justify-center rounded-full font-medium"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: `hsl(${hue} 18% 20%)`,
        color: `hsl(${hue} 30% 78%)`,
      }}
    >
      {initials}
    </span>
  );
}

export function ProgressRing({ value, size = 44, stroke = 3 }: { value: number; size?: number; stroke?: number }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(1, value));
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={`${Math.round(pct * 100)}% kész`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--fp-border)" strokeWidth={stroke} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--fp-gold)"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct)}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{ transition: "stroke-dashoffset 0.4s var(--fp-ease)" }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fill="var(--fp-fg)"
        fontSize={size * 0.26}
        fontWeight={600}
      >
        {Math.round(pct * 100)}
      </text>
    </svg>
  );
}

export function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`h-1.5 w-full overflow-hidden rounded-full bg-(--fp-border) ${className}`} role="progressbar" aria-valuenow={Math.round(value * 100)} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-(--fp-gold)" style={{ width: `${Math.round(value * 100)}%`, transition: "width 0.4s var(--fp-ease)" }} />
    </div>
  );
}

export function Modal({
  open,
  onClose,
  title,
  children,
  wide = false,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  wide?: boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fp-fade fixed inset-0 z-[70] flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-6" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="fp-modal-title"
        className={`fp-card fp-enter max-h-[92vh] w-full overflow-y-auto rounded-b-none p-6 sm:rounded-b-(--fp-radius-xl) sm:p-8 ${wide ? "sm:max-w-2xl" : "sm:max-w-lg"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <h2 id="fp-modal-title" className="text-xl">
            {title}
          </h2>
          <button type="button" onClick={onClose} aria-label="Bezárás" className="-m-1 rounded p-1 text-(--fp-muted-fg) hover:text-(--fp-fg)">
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead, actions }: { eyebrow?: string; title: string; lead?: string; actions?: ReactNode }) {
  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <Eyebrow className="mb-2">{eyebrow}</Eyebrow>}
        <h1 className="text-3xl md:text-4xl">{title}</h1>
        {lead && <p className="mt-2 max-w-2xl text-(--fp-muted-fg)">{lead}</p>}
      </div>
      {actions && <div className="flex flex-none gap-2">{actions}</div>}
    </header>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <p className="rounded-(--fp-radius) border border-dashed border-(--fp-border) px-4 py-8 text-center text-sm text-(--fp-muted-fg)">{children}</p>;
}

export function Field({ label, children, hint }: { label: string; children: ReactNode; hint?: string }) {
  return (
    <label className="block">
      <span className="fp-label">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-(--fp-muted-fg)">{hint}</span>}
    </label>
  );
}

export function Tabs<T extends string>({
  value,
  onChange,
  items,
}: {
  value: T;
  onChange: (v: T) => void;
  items: { id: T; label: string; count?: number }[];
}) {
  return (
    <div role="tablist" className="flex gap-1 overflow-x-auto border-b border-(--fp-border)">
      {items.map((it) => {
        const active = it.id === value;
        return (
          <button
            key={it.id}
            role="tab"
            type="button"
            aria-selected={active}
            onClick={() => onChange(it.id)}
            className={`-mb-px flex-none border-b-2 px-3 py-2.5 text-sm transition-colors ${
              active ? "border-(--fp-gold) text-(--fp-fg)" : "border-transparent text-(--fp-muted-fg) hover:text-(--fp-fg)"
            }`}
          >
            {it.label}
            {it.count !== undefined && <span className="ml-1.5 text-xs text-(--fp-muted-fg)">{it.count}</span>}
          </button>
        );
      })}
    </div>
  );
}

export function Stat({ label, value, sub }: { label: string; value: ReactNode; sub?: string }) {
  return (
    <Card className="p-4">
      <p className="text-[11px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">{label}</p>
      <p className="fp-display mt-1 text-2xl">{value}</p>
      {sub && <p className="mt-0.5 text-xs text-(--fp-muted-fg)">{sub}</p>}
    </Card>
  );
}

export function DemoNote({ children }: { children: ReactNode }) {
  return <p className="text-[11px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">{children}</p>;
}
