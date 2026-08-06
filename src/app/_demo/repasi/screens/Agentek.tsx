"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  AGENTEK,
  AGENT_NYELV_CIMKE,
  UGYFELEK,
  aktivAgentek,
  ugyfel,
  type AgentTipus,
} from "../lib/data";
import { szam } from "../lib/format";
import { Mono, Oldalfej, Pirula } from "../ui/primitives";
import { AgentKartya } from "../ui/agentKartya";

type Szuro = "mind" | AgentTipus;

const SZUROK: readonly { id: Szuro; cimke: string }[] = [
  { id: "mind", cimke: "Mind" },
  { id: "hang", cimke: "Hang" },
  { id: "email", cimke: "E-mail" },
];

export default function Agentek() {
  const [szuro, setSzuro] = useState<Szuro>("mind");
  const [kereses, setKereses] = useState("");

  const szurt = useMemo(() => {
    const q = kereses.trim().toLowerCase();
    return AGENTEK.filter((a) => {
      if (szuro !== "mind" && a.tipus !== szuro) return false;
      if (!q) return true;
      const u = ugyfel(a.ugyfelId);
      return [a.nev, u?.nev ?? "", AGENT_NYELV_CIMKE[a.nyelv], a.telefonszam ?? ""].some((m) =>
        m.toLowerCase().includes(q),
      );
    });
  }, [szuro, kereses]);

  return (
    <>
      <Oldalfej
        cim="Agentek"
        alcim={`${szam(AGENTEK.length)} agent ${szam(UGYFELEK.length)} ügyfélnél, ebből ${szam(
          aktivAgentek().length,
        )} élő`}
        jobb={<button type="button" className="a-btn a-btn-primary">Új agent létrehozása</button>}
      />

      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex gap-1.5">
          {SZUROK.map((s) => (
            <Pirula key={s.id} aktiv={szuro === s.id} onClick={() => setSzuro(s.id)}>
              {s.cimke}
            </Pirula>
          ))}
        </div>

        <div className="relative w-[264px]">
          <Search
            size={14}
            strokeWidth={1.75}
            className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-(--a-muted)"
            aria-hidden="true"
          />
          <input
            type="search"
            className="a-input pl-8"
            placeholder="Keresés agent, ügyfél vagy szám szerint"
            value={kereses}
            onChange={(e) => setKereses(e.target.value)}
          />
        </div>
      </div>

      {szurt.length === 0 ? (
        <div className="a-card px-4 py-12 text-center text-[13px] text-(--a-muted)">
          Nincs a szűrésnek megfelelő agent.
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {szurt.map((a) => (
            <AgentKartya key={a.id} a={a} />
          ))}
        </div>
      )}

      <p className="mt-4 text-[12px] text-(--a-muted)">
        <Mono>{szam(szurt.length)}</Mono> agent megjelenítve.
      </p>
    </>
  );
}
