"use client";

import { IRANY_CIMKE, agent, kontakt, ugyfel, type Hivas } from "../lib/data";
import { datum, hossz } from "../lib/format";
import { Mono, Tabla, type Oszlop } from "./primitives";
import { KimenetelJelzo } from "./jelzesek";
import { BASE } from "./nav";

/* Shared by the call-log screen and the client detail's Hívások tab, so both
   render identical rows. The client column is dropped when the surrounding
   screen already scopes everything to one client. */
export function HivasTabla({
  hivasok,
  mutatUgyfel = true,
  ures,
}: {
  hivasok: readonly Hivas[];
  mutatUgyfel?: boolean;
  ures?: string;
}) {
  const oszlopok: Oszlop<Hivas>[] = [
    {
      kulcs: "idopont",
      fej: "Időpont",
      // Wide enough that "2026. 08. 03. 16:14" never wraps at mono widths.
      szelesseg: "176px",
      cella: (h) => (
        <Mono className="whitespace-nowrap">
          {datum(h.datum)} {h.ido}
        </Mono>
      ),
    },
    ...(mutatUgyfel
      ? [
          {
            kulcs: "ugyfel",
            fej: "Ügyfél",
            cella: (h: Hivas) => ugyfel(h.ugyfelId)?.nev ?? "",
          } satisfies Oszlop<Hivas>,
        ]
      : []),
    { kulcs: "agent", fej: "Agent", cella: (h) => agent(h.agentId)?.nev ?? "" },
    {
      kulcs: "irany",
      fej: "Irány",
      szelesseg: "84px",
      cella: (h) => <span className="text-(--a-muted)">{IRANY_CIMKE[h.irany]}</span>,
    },
    {
      kulcs: "kontakt",
      fej: "Kontakt",
      cella: (h) => {
        const k = kontakt(h.kontaktId);
        return (
          <div className="min-w-0">
            <div className="truncate">{k?.nev}</div>
            <div className="truncate text-[12px] text-(--a-muted)">{k?.ceg}</div>
          </div>
        );
      },
    },
    {
      kulcs: "hossz",
      fej: "Hossz",
      szam: true,
      szelesseg: "72px",
      cella: (h) => <Mono>{hossz(h.hosszMp)}</Mono>,
    },
    {
      kulcs: "kimenetel",
      fej: "Kimenetel",
      szelesseg: "156px",
      cella: (h) => <KimenetelJelzo kimenetel={h.kimenetel} />,
    },
  ];

  return (
    <Tabla
      oszlopok={oszlopok}
      sorok={hivasok}
      sorKulcs={(h) => h.id}
      href={(h) => `${BASE}/hivasok/${h.id}`}
      ures={ures ?? "Nincs a szűrésnek megfelelő hívás."}
    />
  );
}
