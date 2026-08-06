"use client";

import { useMemo, useState } from "react";
import {
  AGENTEK,
  HIVASOK,
  IRANY_CIMKE,
  KIMENETEL_CIMKE,
  KIMENETEL_SORREND,
  UGYFELEK,
  type Irany,
  type Kimenetel,
} from "../lib/data";
import { szam } from "../lib/format";
import { Mono, Oldalfej, Panel } from "../ui/primitives";
import { HivasTabla } from "../ui/hivasTabla";

const MIND = "mind";

export default function Hivasok() {
  const [ugyfelId, setUgyfelId] = useState(MIND);
  const [agentId, setAgentId] = useState(MIND);
  const [irany, setIrany] = useState<string>(MIND);
  const [kimenetel, setKimenetel] = useState<string>(MIND);

  // Choosing a client narrows the agent list; an agent left over from another
  // client stops constraining the result instead of emptying the table.
  const agentValaszthato = useMemo(
    () => (ugyfelId === MIND ? AGENTEK : AGENTEK.filter((a) => a.ugyfelId === ugyfelId)),
    [ugyfelId],
  );
  const ervenyesAgent = agentValaszthato.some((a) => a.id === agentId) ? agentId : MIND;

  const szurt = useMemo(
    () =>
      HIVASOK.filter((h) => {
        if (ugyfelId !== MIND && h.ugyfelId !== ugyfelId) return false;
        if (ervenyesAgent !== MIND && h.agentId !== ervenyesAgent) return false;
        if (irany !== MIND && h.irany !== (irany as Irany)) return false;
        if (kimenetel !== MIND && h.kimenetel !== (kimenetel as Kimenetel)) return false;
        return true;
      }),
    [ugyfelId, ervenyesAgent, irany, kimenetel],
  );

  const szurve =
    ugyfelId !== MIND || ervenyesAgent !== MIND || irany !== MIND || kimenetel !== MIND;

  return (
    <>
      <Oldalfej
        cim="Hívások"
        alcim="A napló a legutóbbi 55 hívás részleteit tartalmazza."
      />

      <div className="a-card mb-3 flex flex-wrap items-end gap-3 p-3">
        <label className="block w-[220px]">
          <span className="mb-1.5 block text-[12px] text-(--a-muted)">Ügyfél</span>
          <select
            className="a-select"
            value={ugyfelId}
            onChange={(e) => setUgyfelId(e.target.value)}
          >
            <option value={MIND}>Minden ügyfél</option>
            {UGYFELEK.map((u) => (
              <option key={u.id} value={u.id}>
                {u.nev}
              </option>
            ))}
          </select>
        </label>

        <label className="block w-[220px]">
          <span className="mb-1.5 block text-[12px] text-(--a-muted)">Agent</span>
          <select
            className="a-select"
            value={ervenyesAgent}
            onChange={(e) => setAgentId(e.target.value)}
          >
            <option value={MIND}>Minden agent</option>
            {agentValaszthato.map((a) => (
              <option key={a.id} value={a.id}>
                {a.nev}
              </option>
            ))}
          </select>
        </label>

        <label className="block w-[160px]">
          <span className="mb-1.5 block text-[12px] text-(--a-muted)">Irány</span>
          <select className="a-select" value={irany} onChange={(e) => setIrany(e.target.value)}>
            <option value={MIND}>Mindkettő</option>
            <option value="be">{IRANY_CIMKE.be}</option>
            <option value="ki">{IRANY_CIMKE.ki}</option>
          </select>
        </label>

        <label className="block w-[200px]">
          <span className="mb-1.5 block text-[12px] text-(--a-muted)">Kimenetel</span>
          <select
            className="a-select"
            value={kimenetel}
            onChange={(e) => setKimenetel(e.target.value)}
          >
            <option value={MIND}>Minden kimenetel</option>
            {KIMENETEL_SORREND.map((k) => (
              <option key={k} value={k}>
                {KIMENETEL_CIMKE[k]}
              </option>
            ))}
          </select>
        </label>

        {szurve && (
          <button
            type="button"
            className="a-btn"
            onClick={() => {
              setUgyfelId(MIND);
              setAgentId(MIND);
              setIrany(MIND);
              setKimenetel(MIND);
            }}
          >
            Szűrők törlése
          </button>
        )}
      </div>

      <Panel
        cim={
          <span className="text-(--a-muted)">
            <Mono>{szam(szurt.length)}</Mono> hívás
          </span>
        }
        belso={false}
      >
        <HivasTabla hivasok={szurt} />
      </Panel>
    </>
  );
}
