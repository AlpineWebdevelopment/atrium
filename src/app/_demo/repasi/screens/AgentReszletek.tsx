"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  AGENT_NYELV_CIMKE,
  AGENT_TIPUS_CIMKE,
  CELOK,
  HANGPROFILOK,
  UGYFELEK,
  agent,
  agentHetiDarab,
  agentHivasai,
  ugyfel,
} from "../lib/data";
import { datum, hossz, szam, tempo } from "../lib/format";
import { Kapcsolo, Mezo, Mono, Oldalfej, Panel } from "../ui/primitives";
import { AgentStatuszJelzo, KimenetelJelzo } from "../ui/jelzesek";
import { BASE } from "../ui/nav";

/* Every control below is live — selects change, the slider moves, the toggle
   flips — but nothing is persisted anywhere. There is no store behind this
   screen by design: the demo carries no backend. */
export default function AgentReszletek({ agentId }: { agentId: string }) {
  const a = agent(agentId);

  const [ugyfelId, setUgyfelId] = useState(a?.ugyfelId ?? "");
  const [hangprofil, setHangprofil] = useState(a?.hangprofil ?? "");
  const [beszedtempo, setBeszedtempo] = useState(a?.beszedtempo ?? 1);
  const [nyito, setNyito] = useState(a?.nyitoMondat ?? "");
  const [cel, setCel] = useState<string>(a?.cel ?? CELOK[0]);
  const [tol, setTol] = useState(a?.munkaidoTol ?? "08:00");
  const [ig, setIg] = useState(a?.munkaidoIg ?? "17:00");
  const [hangposta, setHangposta] = useState(a?.hangpostaKezeles ?? false);
  const [tesztszam, setTesztszam] = useState("+36 30 ");

  if (!a) return null;

  const hang = a.tipus === "hang";
  const utolsoHivasok = agentHivasai(a.id).slice(0, 5);

  return (
    <>
      <Oldalfej
        cim={a.nev}
        alcim={
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{ugyfel(a.ugyfelId)?.nev}</span>
            <span className="text-(--a-border-strong)">·</span>
            <span>{AGENT_TIPUS_CIMKE[a.tipus]}</span>
            <span className="text-(--a-border-strong)">·</span>
            <span>{AGENT_NYELV_CIMKE[a.nyelv]}</span>
            <AgentStatuszJelzo statusz={a.statusz} />
          </span>
        }
        jobb={
          <>
            <button type="button" className="a-btn">
              {a.statusz === "elo" ? "Szüneteltetés" : "Indítás"}
            </button>
            <button type="button" className="a-btn a-btn-primary">
              Mentés
            </button>
          </>
        }
      />

      <div className="grid grid-cols-[minmax(0,1fr)_320px] items-start gap-3">
        <div className="space-y-3">
          <Panel cim="Alapadatok">
            <div className="grid grid-cols-2 gap-3.5">
              <Mezo cimke="Agent neve">
                <input className="a-input" defaultValue={a.nev} />
              </Mezo>
              <Mezo cimke="Ügyfél">
                <select
                  className="a-select"
                  value={ugyfelId}
                  onChange={(e) => setUgyfelId(e.target.value)}
                >
                  {UGYFELEK.map((u) => (
                    <option key={u.id} value={u.id}>
                      {u.nev}
                    </option>
                  ))}
                </select>
              </Mezo>
              <Mezo cimke="Típus">
                <select className="a-select" defaultValue={a.tipus}>
                  <option value="hang">Hang</option>
                  <option value="email">E-mail</option>
                </select>
              </Mezo>
              <Mezo cimke="Nyelv">
                <select className="a-select" defaultValue={a.nyelv}>
                  <option value="magyar">magyar</option>
                  <option value="lengyel">lengyel</option>
                  <option value="angol">angol</option>
                </select>
              </Mezo>
            </div>
          </Panel>

          {hang ? (
            <Panel cim="Hang">
              <div className="grid grid-cols-2 items-start gap-3.5">
                <Mezo cimke="Hangprofil">
                  <select
                    className="a-select"
                    value={hangprofil}
                    onChange={(e) => setHangprofil(e.target.value)}
                  >
                    {HANGPROFILOK[a.nyelv].map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </Mezo>
                <Mezo cimke="Beszédtempó">
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      className="a-range"
                      min={0.8}
                      max={1.2}
                      step={0.05}
                      value={beszedtempo}
                      onChange={(e) => setBeszedtempo(Number(e.target.value))}
                    />
                    <Mono className="w-12 flex-none text-right text-[13px]">
                      {tempo(beszedtempo)}
                    </Mono>
                  </div>
                </Mezo>
              </div>
            </Panel>
          ) : (
            <Panel cim="E-mail">
              <div className="grid grid-cols-2 gap-3.5">
                <Mezo cimke="Feladó neve">
                  <input className="a-input" defaultValue={a.feladoNev} />
                </Mezo>
                <Mezo cimke="Feladó címe">
                  <input className="a-input" defaultValue={a.feladoCim} />
                </Mezo>
                <div className="col-span-2">
                  <Mezo cimke="Tárgysor sablon" sugo="A {{ceg}} helyére a kontakt cégneve kerül.">
                    <input className="a-input" defaultValue={a.targySablon} />
                  </Mezo>
                </div>
              </div>
            </Panel>
          )}

          <Panel cim="Viselkedés">
            <Mezo
              cimke={hang ? "Nyitó mondat" : "Nyitó bekezdés"}
              sugo="Az agent minden beszélgetést ezzel kezd."
            >
              <textarea
                className="a-textarea"
                value={nyito}
                onChange={(e) => setNyito(e.target.value)}
                rows={3}
              />
            </Mezo>

            <div className="mt-3.5 grid grid-cols-2 gap-3.5">
              <Mezo cimke="Cél">
                <select className="a-select" value={cel} onChange={(e) => setCel(e.target.value)}>
                  {CELOK.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </Mezo>
              <Mezo cimke="Munkaidő">
                <div className="flex items-center gap-2">
                  <input
                    type="time"
                    className="a-input a-mono"
                    value={tol}
                    onChange={(e) => setTol(e.target.value)}
                  />
                  <span className="flex-none text-(--a-muted)">—</span>
                  <input
                    type="time"
                    className="a-input a-mono"
                    value={ig}
                    onChange={(e) => setIg(e.target.value)}
                  />
                </div>
              </Mezo>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 border-t border-(--a-border) pt-3.5">
              <div>
                <div className="text-[13px]">Hangposta-kezelés</div>
                <div className="mt-0.5 text-[12px] text-(--a-muted)">
                  Ha a hívást hangposta fogadja, az agent üzenetet hagy és később újrapróbálkozik.
                </div>
              </div>
              <Kapcsolo
                be={hangposta}
                valt={() => setHangposta((x) => !x)}
                cimke="Hangposta-kezelés"
              />
            </div>
          </Panel>

          {hang && (
            <Panel cim="Telefonszám">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <Mono className="text-[15px]">{a.telefonszam}</Mono>
                  <div className="mt-0.5 text-[12px] text-(--a-muted)">
                    Kimenő és bejövő hívások ezen a számon futnak.
                  </div>
                </div>
                <button type="button" className="a-btn">
                  Szám cseréje
                </button>
              </div>
            </Panel>
          )}

          <Panel cim="Eszkaláció" belso={false}>
            <ul>
              {a.eszkalacio.map((e) => (
                <li
                  key={e.feltetel}
                  className="flex items-center gap-3 border-b border-(--a-border) px-4 py-2.5 text-[13px] last:border-b-0"
                >
                  <span className="min-w-0 flex-1 truncate">{e.feltetel}</span>
                  <ArrowRight
                    size={14}
                    strokeWidth={1.75}
                    className="flex-none text-(--a-muted)"
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1 truncate text-right text-(--a-muted)">
                    {e.akcio.startsWith("Átirányítás") || e.akcio.startsWith("Azonnali") ? (
                      <>
                        {e.akcio.split(": ")[0]}:{" "}
                        <Mono className="text-(--a-text)">{e.akcio.split(": ")[1]}</Mono>
                      </>
                    ) : (
                      e.akcio
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <div className="border-t border-(--a-border) px-4 py-2.5">
              <button type="button" className="a-btn a-btn-sm">
                Szabály hozzáadása
              </button>
            </div>
          </Panel>
        </div>

        <div className="space-y-3">
          <Panel cim={hang ? "Teszthívás" : "Tesztlevél"}>
            <p className="mb-3 text-[12px] leading-[18px] text-(--a-muted)">
              {hang
                ? "Az agent felhívja a megadott számot, és a beállított nyitó mondattal kezd."
                : "Az agent kiküldi a sorozat első levelét a megadott címre."}
            </p>
            <input
              className={`a-input ${hang ? "a-mono" : ""}`}
              value={hang ? tesztszam : "norbert@atlas.example"}
              onChange={(e) => setTesztszam(e.target.value)}
              placeholder={hang ? "+36 30 000 0000" : "cim@pelda.hu"}
            />
            <button type="button" className="a-btn a-btn-primary mt-2.5 w-full">
              {hang ? "Teszthívás indítása" : "Tesztlevél küldése"}
            </button>
          </Panel>

          <Panel cim="Heti forgalom">
            <div className="flex items-baseline justify-between">
              <span className="text-[12px] text-(--a-muted)">
                {hang ? "Hívás az elmúlt 7 napban" : "E-mail az elmúlt 7 napban"}
              </span>
              <Mono className="text-[20px]">{szam(agentHetiDarab(a))}</Mono>
            </div>
          </Panel>

          {hang && (
            <Panel cim="Legutóbbi hívások" belso={false}>
              {utolsoHivasok.length === 0 ? (
                <div className="px-4 py-8 text-center text-[12px] text-(--a-muted)">
                  Ehhez az agenthez nincs rögzített hívás.
                </div>
              ) : (
                <ul>
                  {utolsoHivasok.map((h) => (
                    <li key={h.id} className="border-b border-(--a-border) last:border-b-0">
                      <Link
                        href={`${BASE}/hivasok/${h.id}`}
                        className="block px-4 py-2.5 transition-colors duration-150 hover:bg-(--a-hover)"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <Mono className="text-[12px]">
                            {datum(h.datum)} {h.ido}
                          </Mono>
                          <Mono className="text-[12px] text-(--a-muted)">
                            {hossz(h.hosszMp)}
                          </Mono>
                        </div>
                        <div className="mt-1.5">
                          <KimenetelJelzo kimenetel={h.kimenetel} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </Panel>
          )}
        </div>
      </div>
    </>
  );
}
