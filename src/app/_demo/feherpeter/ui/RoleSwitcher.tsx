"use client";

import { useState } from "react";
import { ChevronUp, RotateCcw } from "lucide-react";
import type { Role } from "../data/types";
import { useStore } from "../lib/store";
import { ROLE_LABEL } from "../lib/access";

const ROLES: Role[] = ["vendeg", "alap", "halado", "belso", "admin"];

/* The demo's steering wheel: a slim floating bar, bottom-right, always
   visible. Switching a role re-gates the whole app instantly. */
export function RoleSwitcher() {
  const { role, setRole, reset, me, tiers } = useStore();
  const [open, setOpen] = useState(true);

  const label = (r: Role) => (r === "alap" || r === "halado" || r === "belso" ? (tiers.find((t) => t.id === r)?.name ?? ROLE_LABEL[r]) : ROLE_LABEL[r]);

  return (
    <div className="fixed right-3 bottom-3 z-[60] flex flex-col items-end gap-1.5 sm:right-5 sm:bottom-5" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      {open && (
        <div className="fp-card fp-enter flex max-w-[calc(100vw-1.5rem)] flex-wrap items-center gap-1 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.5)]" role="group" aria-label="Demó szerepkör">
          <span className="hidden px-2 text-[10px] uppercase tracking-[0.15em] text-(--fp-muted-fg) sm:inline">Nézet</span>
          {ROLES.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRole(r)}
              aria-pressed={role === r}
              className={`rounded-(--fp-radius-md) px-2.5 py-1.5 text-[12px] font-medium transition-colors ${
                role === r ? "bg-(--fp-gold) text-(--fp-gold-fg)" : "text-(--fp-muted-fg) hover:bg-(--fp-secondary) hover:text-(--fp-fg)"
              }`}
            >
              {label(r)}
            </button>
          ))}
          <span className="mx-1 hidden h-4 w-px bg-(--fp-border) sm:inline" />
          <button
            type="button"
            onClick={() => {
              if (confirm("Visszaállítod a demót az alapállapotra? Minden munkamenetbeli változás elvész.")) reset();
            }}
            className="rounded-(--fp-radius-md) p-1.5 text-(--fp-muted-fg) hover:bg-(--fp-secondary) hover:text-(--fp-fg)"
            aria-label="Demó visszaállítása"
            title="Demó visszaállítása"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fp-card flex items-center gap-2 px-3 py-1.5 text-[11px] text-(--fp-muted-fg) hover:text-(--fp-fg)"
        aria-expanded={open}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-(--fp-gold)" aria-hidden="true" />
        Demó · {label(role)}
        {me && <span className="hidden sm:inline">· {me.name}</span>}
        <ChevronUp size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
    </div>
  );
}
