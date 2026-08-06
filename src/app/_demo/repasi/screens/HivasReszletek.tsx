"use client";

import { useState } from "react";
import Link from "next/link";
import { Play } from "lucide-react";
import {
  AGENT_NYELV_CIMKE,
  IRANY_CIMKE,
  agent,
  atirat,
  hivas,
  kontakt,
  ugyfel,
} from "../lib/data";
import { datum, hossz } from "../lib/format";
import { Mono, Oldalfej, Panel } from "../ui/primitives";
import { KimenetelJelzo } from "../ui/jelzesek";
import { Kapcsolo } from "../ui/primitives";
import { BASE } from "../ui/nav";

/* Deterministic waveform. A hash of the call id drives the bar heights, so the
   same call always draws the same shape and the server and client renders
   agree — no Math.random anywhere near the render path. */
function savok(mag: string, db: number): number[] {
  const ki: number[] = [];
  for (let i = 0; i < db; i++) {
    let h = 2166136261;
    const s = `${mag}:${i}`;
    for (let j = 0; j < s.length; j++) {
      h ^= s.charCodeAt(j);
      h = Math.imul(h, 16777619);
    }
    ki.push(0.2 + ((h >>> 0) % 1000) / 1000 * 0.8);
  }
  return ki;
}

function MetaElem({ cimke, children }: { cimke: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[12px] text-(--a-muted)">{cimke}</div>
      <div className="mt-0.5 text-[13px]">{children}</div>
    </div>
  );
}

export default function HivasReszletek({ hivasId }: { hivasId: string }) {
  const [forditas, setForditas] = useState(false);

  const h = hivas(hivasId);
  if (!h) return null;

  const a = agent(h.agentId);
  const u = ugyfel(h.ugyfelId);
  const k = kontakt(h.kontaktId);
  const at = h.atiratId ? atirat(h.atiratId) : undefined;
  const vanFelvetel = h.kimenetel !== "nem_vette_fel";
  const bars = savok(h.id, 96);

  return (
    <>
      <Oldalfej
        cim={`${k?.nev ?? "Ismeretlen kontakt"} — ${k?.ceg ?? ""}`}
        alcim={
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <Mono>
              {datum(h.datum)} {h.ido}
            </Mono>
            <span className="text-(--a-border-strong)">·</span>
            <span>{IRANY_CIMKE[h.irany]} hívás</span>
            <KimenetelJelzo kimenetel={h.kimenetel} />
          </span>
        }
        jobb={
          <Link href={`${BASE}/hivasok`} className="a-btn">
            Vissza a naplóhoz
          </Link>
        }
      />

      <div className="a-card mb-3 grid grid-cols-5 gap-4 p-4">
        <MetaElem cimke="Ügyfél">
          <Link
            href={`${BASE}/ugyfelek/${h.ugyfelId}`}
            className="transition-colors duration-150 hover:text-(--a-accent)"
          >
            {u?.nev}
          </Link>
        </MetaElem>
        <MetaElem cimke="Agent">
          <Link
            href={`${BASE}/agentek/${h.agentId}`}
            className="transition-colors duration-150 hover:text-(--a-accent)"
          >
            {a?.nev}
          </Link>
        </MetaElem>
        <MetaElem cimke="Kontakt telefonszáma">
          <Mono>{k?.telefon}</Mono>
        </MetaElem>
        <MetaElem cimke="Hossz">
          <Mono>{hossz(h.hosszMp)}</Mono>
        </MetaElem>
        <MetaElem cimke="Nyelv">{a ? AGENT_NYELV_CIMKE[a.nyelv] : "—"}</MetaElem>
      </div>

      <Panel cim="Felvétel">
        {vanFelvetel ? (
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Lejátszás"
              className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-(--a-accent) text-white transition-colors duration-150 hover:bg-[#115E57]"
            >
              <Play size={14} strokeWidth={2} fill="currentColor" aria-hidden="true" />
            </button>

            <div className="flex h-10 min-w-0 flex-1 items-center gap-[2px]" aria-hidden="true">
              {bars.map((v, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-[1px] bg-[#D7E4E2]"
                  style={{ height: `${Math.round(v * 100)}%` }}
                />
              ))}
            </div>

            <Mono className="w-24 flex-none whitespace-nowrap text-right text-[13px] text-(--a-muted)">
              0:00 / {hossz(h.hosszMp)}
            </Mono>
          </div>
        ) : (
          <p className="text-[13px] text-(--a-muted)">
            A kontakt nem vette fel a telefont, felvétel nem készült.
          </p>
        )}
      </Panel>

      <Panel
        className="mt-3"
        cim="Átirat"
        jobb={
          at?.fordithato ? (
            <span className="flex items-center gap-2.5">
              <span className="text-[12px] text-(--a-muted)">Fordítás megjelenítése</span>
              <Kapcsolo
                be={forditas}
                valt={() => setForditas((x) => !x)}
                cimke="Fordítás megjelenítése"
              />
            </span>
          ) : undefined
        }
      >
        {!at ? (
          <p className="py-6 text-center text-[13px] text-(--a-muted)">
            {vanFelvetel
              ? "Ehhez a híváshoz még nem készült átirat."
              : "Beszélgetés nem jött létre, ezért átirat sincs."}
          </p>
        ) : (
          <>
            {at.fordithato && (
              <p className="mb-4 text-[12px] text-(--a-muted)">
                {forditas
                  ? "A beszélgetés magyar fordítása látható. Az eredeti nyelv: lengyel."
                  : "A beszélgetés eredeti nyelven, lengyelül látható."}
              </p>
            )}

            <ol className="space-y-3">
              {at.sorok.map((s, i) => {
                const agentSor = s.ki === "agent";
                const szoveg = forditas && s.forditas ? s.forditas : s.szoveg;
                const nyelv = forditas || !at.fordithato ? "hu" : "pl";
                return (
                  <li
                    key={i}
                    className={`flex flex-col ${agentSor ? "items-start" : "items-end"}`}
                  >
                    <div className="mb-1 flex items-center gap-2 px-1 text-[12px] text-(--a-muted)">
                      <span>{agentSor ? "Agent" : "Ügyfél"}</span>
                      <Mono>{s.idopont}</Mono>
                    </div>
                    <div
                      lang={nyelv}
                      className={`max-w-[68%] rounded-[10px] border px-3.5 py-2.5 text-[13px] leading-[21px] ${
                        agentSor
                          ? "border-(--a-border) bg-white"
                          : "border-[#CCFBF1] bg-(--a-accent-soft)"
                      }`}
                    >
                      {szoveg}
                    </div>
                  </li>
                );
              })}
            </ol>
          </>
        )}
      </Panel>
    </>
  );
}
