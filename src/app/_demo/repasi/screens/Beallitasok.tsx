"use client";

import { useState } from "react";
import { Check, CreditCard } from "lucide-react";
import {
  CSAPAT,
  INTEGRACIOK,
  TELEFONSZAMOK,
  agent,
  ugyfel,
  type Telefonszam,
} from "../lib/data";
import { datum, szam } from "../lib/format";
import {
  Badge,
  Fulek,
  Mono,
  Oldalfej,
  Panel,
  Tabla,
  type Oszlop,
} from "../ui/primitives";

type Ful = "szamok" | "integraciok" | "csapat" | "szamlazas";

const FULEK: readonly { id: Ful; cimke: string }[] = [
  { id: "szamok", cimke: "Telefonszámok" },
  { id: "integraciok", cimke: "Integrációk" },
  { id: "csapat", cimke: "Csapat" },
  { id: "szamlazas", cimke: "Számlázás" },
];

const SZAM_OSZLOPOK: readonly Oszlop<Telefonszam>[] = [
  { kulcs: "szam", fej: "Telefonszám", szelesseg: "180px", cella: (t) => <Mono>{t.szam}</Mono> },
  { kulcs: "tipus", fej: "Típus", szelesseg: "120px", cella: (t) => t.tipus },
  { kulcs: "varos", fej: "Körzet", szelesseg: "160px", cella: (t) => t.varos },
  {
    kulcs: "agent",
    fej: "Hozzárendelt agent",
    cella: (t) => {
      const a = t.agentId ? agent(t.agentId) : undefined;
      return a ? (
        <div className="min-w-0">
          <div className="truncate">{a.nev}</div>
          <div className="truncate text-[12px] text-(--a-muted)">{ugyfel(a.ugyfelId)?.nev}</div>
        </div>
      ) : (
        <span className="text-(--a-muted)">Nincs hozzárendelve</span>
      );
    },
  },
  {
    kulcs: "statusz",
    fej: "Státusz",
    szelesseg: "116px",
    cella: (t) =>
      t.agentId ? <Badge tonus="success">Aktív</Badge> : <Badge tonus="neutral">Szabad</Badge>,
  },
];

export default function Beallitasok() {
  const [ful, setFul] = useState<Ful>("szamok");
  const hasznalt = TELEFONSZAMOK.filter((t) => t.agentId).length;

  return (
    <>
      <Oldalfej cim="Beállítások" alcim="Számok, integrációk és hozzáférések" />

      <Fulek fulek={FULEK} aktiv={ful} valaszt={setFul} />

      <div className="mt-4">
        {ful === "szamok" && (
          <Panel
            cim={
              <span className="text-(--a-muted)">
                <Mono>{szam(TELEFONSZAMOK.length)}</Mono> szám, ebből{" "}
                <Mono>{szam(hasznalt)}</Mono> agenthez rendelve
              </span>
            }
            jobb={
              <button type="button" className="a-btn a-btn-sm">
                Új szám igénylése
              </button>
            }
            belso={false}
          >
            <Tabla oszlopok={SZAM_OSZLOPOK} sorok={TELEFONSZAMOK} sorKulcs={(t) => t.szam} />
          </Panel>
        )}

        {ful === "integraciok" && (
          <div className="grid grid-cols-2 gap-3">
            {INTEGRACIOK.map((i) => (
              <div key={i.nev} className="a-card flex items-start justify-between gap-4 p-4">
                <div className="min-w-0">
                  <div className="text-[13px] font-medium">{i.nev}</div>
                  <div className="mt-1 text-[12px] text-(--a-muted)">{i.reszlet}</div>
                </div>
                <span className="flex flex-none items-center gap-1.5 text-[12px] text-(--a-success)">
                  <Check size={14} strokeWidth={2} aria-hidden="true" />
                  {i.allapot}
                </span>
              </div>
            ))}
          </div>
        )}

        {ful === "csapat" && (
          <Panel cim="Hozzáférések" belso={false}>
            <ul>
              {CSAPAT.map((t) => (
                <li
                  key={t.email}
                  className="flex items-center gap-4 border-b border-(--a-border) px-4 py-3 last:border-b-0"
                >
                  <span className="a-mono flex h-8 w-8 flex-none items-center justify-center rounded-full bg-(--a-accent-soft) text-[11px] text-(--a-accent)">
                    {t.nev
                      .split(/[\s.]+/)
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((s) => s[0])
                      .join("")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13px]">{t.nev}</div>
                    <Mono className="block text-[12px] text-(--a-muted)">{t.email}</Mono>
                  </div>
                  <span className="flex-none text-[13px] text-(--a-muted)">{t.szerep}</span>
                  <span className="w-[132px] flex-none text-right text-[12px] text-(--a-muted)">
                    Utolsó belépés <Mono>{datum(t.utolsoBelepes)}</Mono>
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-(--a-border) px-4 py-3">
              <button type="button" className="a-btn a-btn-sm">
                Felhasználó meghívása
              </button>
            </div>
          </Panel>
        )}

        {ful === "szamlazas" && (
          <div className="a-card flex flex-col items-center px-6 py-16 text-center">
            <CreditCard
              size={22}
              strokeWidth={1.5}
              className="text-(--a-muted)"
              aria-hidden="true"
            />
            <p className="mt-3 text-[13px]">A számlázási adatok a teljes verzióban érhetők el.</p>
            <p className="mt-1 max-w-[380px] text-[12px] leading-[18px] text-(--a-muted)">
              Ez a felület demó környezetben fut, ezért számlázási adatokat nem jelenít meg.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
