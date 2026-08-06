"use client";

import { useState } from "react";
import { ArrowRight, Clock, Mail } from "lucide-react";
import {
  KAMPANYOK,
  agent,
  emailValaszarany,
  ugyfel,
  type Kampany,
} from "../lib/data";
import { arany, szam } from "../lib/format";
import { Mono, Oldalfej, Panel, type Oszlop } from "../ui/primitives";
import { KampanyStatuszJelzo } from "../ui/jelzesek";

function Lepes({ l }: { l: Kampany["lepesek"][number] }) {
  return (
    <div className="a-card flex min-w-0 flex-1 flex-col p-3.5">
      <div className="flex items-center gap-2 text-[12px] text-(--a-muted)">
        <Mail size={13} strokeWidth={1.75} aria-hidden="true" />
        <Mono>{l.sorszam}.</Mono> e-mail
      </div>
      <div className="mt-2 text-[13px] font-medium leading-[19px]">{l.targy}</div>
      <p className="mt-1.5 text-[12px] leading-[18px] text-(--a-muted)">{l.elonezet}</p>
    </div>
  );
}

function Varakozas({ nap }: { nap: number }) {
  return (
    <div className="flex flex-none flex-col items-center justify-center gap-1.5 px-1 text-(--a-muted)">
      <ArrowRight size={14} strokeWidth={1.75} aria-hidden="true" />
      <span className="flex items-center gap-1 whitespace-nowrap text-[12px]">
        <Clock size={12} strokeWidth={1.75} aria-hidden="true" />
        <Mono>{szam(nap)}</Mono> nap
      </span>
      <span className="whitespace-nowrap text-[12px]">ha nincs válasz</span>
    </div>
  );
}

export default function Uzenetek() {
  const [kivalasztott, setKivalasztott] = useState(KAMPANYOK[0]!.id);
  const k = KAMPANYOK.find((x) => x.id === kivalasztott) ?? KAMPANYOK[0]!;

  const oszlopok: readonly Oszlop<Kampany>[] = [
    {
      kulcs: "nev",
      fej: "Kampány",
      cella: (x) => (
        <div className="min-w-0">
          <div className={`truncate ${x.id === k.id ? "font-medium text-(--a-accent)" : "font-medium"}`}>
            {x.nev}
          </div>
          <div className="truncate text-[12px] text-(--a-muted)">{agent(x.agentId)?.nev}</div>
        </div>
      ),
    },
    { kulcs: "ugyfel", fej: "Ügyfél", cella: (x) => ugyfel(x.ugyfelId)?.nev ?? "" },
    {
      kulcs: "statusz",
      fej: "Státusz",
      szelesseg: "104px",
      cella: (x) => <KampanyStatuszJelzo statusz={x.statusz} />,
    },
    {
      kulcs: "elkuldve",
      fej: "Elküldve",
      szam: true,
      szelesseg: "96px",
      cella: (x) => <Mono>{szam(x.elkuldve)}</Mono>,
    },
    {
      kulcs: "megnyitas",
      fej: "Megnyitás",
      szam: true,
      szelesseg: "104px",
      cella: (x) => <Mono>{arany(x.megnyitva / x.elkuldve)}</Mono>,
    },
    {
      kulcs: "valasz",
      fej: "Válasz",
      szam: true,
      szelesseg: "88px",
      cella: (x) => <Mono>{arany(x.valasz / x.elkuldve)}</Mono>,
    },
  ];

  const osszElkuldve = KAMPANYOK.reduce((a, x) => a + x.elkuldve, 0);

  return (
    <>
      <Oldalfej
        cim="Üzenetek"
        alcim={`${szam(KAMPANYOK.length)} kampány, ${szam(
          osszElkuldve,
        )} elküldött levél, ${arany(emailValaszarany())} válaszarány`}
        jobb={<button type="button" className="a-btn a-btn-primary">Új kampány létrehozása</button>}
      />

      <Panel cim="Kampányok" belso={false}>
        <div className="overflow-x-auto">
          <table className="a-table">
            <thead>
              <tr>
                {oszlopok.map((o) => (
                  <th
                    key={o.kulcs}
                    className={o.szam ? "a-num" : ""}
                    style={o.szelesseg ? { width: o.szelesseg } : undefined}
                  >
                    {o.fej}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {KAMPANYOK.map((x) => (
                <tr
                  key={x.id}
                  data-clickable="true"
                  onClick={() => setKivalasztott(x.id)}
                  style={x.id === k.id ? { background: "var(--a-accent-soft)" } : undefined}
                >
                  {oszlopok.map((o) => (
                    <td key={o.kulcs} className={o.szam ? "a-num" : ""}>
                      {o.cella(x)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <Panel
        className="mt-3"
        cim={`Sorozat — ${k.nev}`}
        jobb={
          <span className="text-[12px] text-(--a-muted)">
            {ugyfel(k.ugyfelId)?.nev} · <Mono>{szam(k.elkuldve)}</Mono> címzett
          </span>
        }
      >
        {/* Flat row so every step card gets the same width; the wait markers
            sit between them and take only the space they need. */}
        <div className="flex items-stretch gap-2">
          {k.lepesek.flatMap((l, i) => [
            ...(i > 0 ? [<Varakozas key={`v${l.sorszam}`} nap={l.varakozasNap} />] : []),
            <Lepes key={`l${l.sorszam}`} l={l} />,
          ])}
        </div>

        <p className="mt-4 border-t border-(--a-border) pt-3 text-[12px] text-(--a-muted)">
          A sorozat leáll, amint válasz érkezik: a kontakt átkerül a kezelőhöz, és több levelet nem
          kap.
        </p>
      </Panel>
    </>
  );
}
