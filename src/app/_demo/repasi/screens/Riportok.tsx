"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { RIPORT_HONAP, UGYFELEK } from "../lib/data";
import { honap } from "../lib/format";
import { Oldalfej, Pirula } from "../ui/primitives";
import { RiportTest } from "./RiportTest";

const MIND = "mind";

export default function Riportok() {
  const [ugyfelId, setUgyfelId] = useState(MIND);

  return (
    <>
      <Oldalfej
        cim="Riportok"
        alcim={`Havi összesítés — ${honap(RIPORT_HONAP)}`}
        jobb={
          <>
            {/* The month picker is fixed to the demo's reporting month. */}
            <select className="a-select w-[168px]" defaultValue={RIPORT_HONAP}>
              <option value={RIPORT_HONAP}>{honap(RIPORT_HONAP)}</option>
            </select>
            <button type="button" className="a-btn">
              <Download size={14} strokeWidth={1.75} aria-hidden="true" />
              Riport letöltése (PDF)
            </button>
          </>
        }
      />

      <div className="mb-4 flex flex-wrap gap-1.5">
        <Pirula aktiv={ugyfelId === MIND} onClick={() => setUgyfelId(MIND)}>
          Minden ügyfél
        </Pirula>
        {UGYFELEK.map((u) => (
          <Pirula key={u.id} aktiv={ugyfelId === u.id} onClick={() => setUgyfelId(u.id)}>
            {u.nev}
          </Pirula>
        ))}
      </div>

      <RiportTest ugyfelId={ugyfelId === MIND ? undefined : ugyfelId} />
    </>
  );
}
