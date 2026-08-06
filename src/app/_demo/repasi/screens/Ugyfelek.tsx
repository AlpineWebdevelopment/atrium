"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  UGYFELEK,
  aktivAgentek,
  felhasznaltPerc,
  type Ugyfel,
} from "../lib/data";
import { szam, szazalek } from "../lib/format";
import { Folyamatsav, Mono, Oldalfej, Panel, Tabla, type Oszlop } from "../ui/primitives";
import { UgyfelStatuszJelzo } from "../ui/jelzesek";
import { BASE } from "../ui/nav";

const OSZLOPOK: readonly Oszlop<Ugyfel>[] = [
  {
    kulcs: "nev",
    fej: "Cégnév",
    cella: (u) => <span className="font-medium">{u.nev}</span>,
  },
  { kulcs: "iparag", fej: "Iparág", cella: (u) => u.iparag },
  { kulcs: "varos", fej: "Város", cella: (u) => u.varos },
  {
    kulcs: "agentek",
    fej: "Aktív agentek",
    szam: true,
    szelesseg: "108px",
    cella: (u) => <Mono>{szam(aktivAgentek(u.id).length)}</Mono>,
  },
  {
    kulcs: "keret",
    fej: "Havi keret",
    szelesseg: "184px",
    cella: (u) => {
      const perc = felhasznaltPerc(u);
      return (
        <div>
          <div className="mb-1 flex items-baseline justify-between gap-2 text-[12px]">
            <Mono>
              {szam(perc)} / {szam(u.perckeret)}
            </Mono>
            <Mono className="text-(--a-muted)">{szazalek((perc / u.perckeret) * 100, 0)}</Mono>
          </div>
          <Folyamatsav ertek={perc} max={u.perckeret} kompakt />
        </div>
      );
    },
  },
  {
    kulcs: "statusz",
    fej: "Státusz",
    szelesseg: "104px",
    cella: (u) => <UgyfelStatuszJelzo statusz={u.statusz} />,
  },
  { kulcs: "kezelo", fej: "Kezelő", szelesseg: "132px", cella: (u) => u.kezelo },
];

export default function Ugyfelek() {
  const [kereses, setKereses] = useState("");

  const szurt = useMemo(() => {
    const q = kereses.trim().toLowerCase();
    if (!q) return UGYFELEK;
    return UGYFELEK.filter((u) =>
      [u.nev, u.iparag, u.varos, u.kezelo].some((m) => m.toLowerCase().includes(q)),
    );
  }, [kereses]);

  return (
    <>
      <Oldalfej
        cim="Ügyfelek"
        alcim={`${szam(UGYFELEK.length)} cég, ${szam(aktivAgentek().length)} aktív agenttel`}
        jobb={<button type="button" className="a-btn a-btn-primary">Új ügyfél felvétele</button>}
      />

      <Panel
        cim={
          <span className="text-(--a-muted)">
            <Mono>{szam(szurt.length)}</Mono> találat
          </span>
        }
        jobb={
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
              placeholder="Keresés cégnév, iparág vagy város szerint"
              value={kereses}
              onChange={(e) => setKereses(e.target.value)}
            />
          </div>
        }
        belso={false}
      >
        <Tabla
          oszlopok={OSZLOPOK}
          sorok={szurt}
          sorKulcs={(u) => u.id}
          href={(u) => `${BASE}/ugyfelek/${u.id}`}
          ures="Nincs a keresésnek megfelelő ügyfél."
        />
      </Panel>
    </>
  );
}
