"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  DEMO_TODAY,
  ablakNapok,
  felhasznaltPerc,
  foglalas7,
  hivas30,
  hivasMa,
  hivasSor,
  kontakt,
  ugyfel,
  ugyfelHivasai,
  ugyfelIdopontjai,
} from "../lib/data";
import { datum, hossz, napNev, szam, szazalek } from "../lib/format";
import { HivasGorbe } from "../ui/charts";
import { Folyamatsav, KpiSor, Mono, Panel, StatKartya } from "../ui/primitives";
import { KimenetelJelzo } from "../ui/jelzesek";
import { BASE } from "../ui/nav";

/* What the operator's own client sees: their numbers only, no navigation, no
   other tenant anywhere on the page. Deliberately the simplest screen here. */
export default function Portal({ ugyfelId }: { ugyfelId: string }) {
  const u = ugyfel(ugyfelId);
  if (!u) return null;

  const hivasok = ugyfelHivasai(u.id).slice(0, 10);
  const idopontok = ugyfelIdopontjai(u.id);
  const perc = felhasznaltPerc(u);

  return (
    <div className="min-h-full">
      <header className="border-b border-(--a-border) bg-white">
        <div className="mx-auto flex h-[64px] max-w-[1040px] items-center justify-between gap-4 px-6">
          <div className="flex items-baseline gap-3">
            <span className="text-[15px] font-medium">{u.nev}</span>
            <span className="text-[13px] text-(--a-muted)">Riport nézet</span>
          </div>
          <Mono className="text-[12px] text-(--a-muted)">{datum(DEMO_TODAY)}</Mono>
        </div>
      </header>

      <div className="mx-auto max-w-[1040px] px-6 py-6">
        <KpiSor>
          <StatKartya cimke="Mai hívások" ertek={szam(hivasMa(u))} alatta={datum(DEMO_TODAY)} />
          <StatKartya
            cimke="Foglalt időpontok (7 nap)"
            ertek={szam(foglalas7(u))}
            alatta="Az elmúlt hét napban"
          />
          <StatKartya cimke="Hívások (30 nap)" ertek={szam(hivas30(u))} alatta="Utolsó 30 nap" />
          <StatKartya
            cimke="Perckeret"
            ertek={szazalek((perc / u.perckeret) * 100, 0)}
            alatta={
              <span className="a-mono">
                {szam(perc)} / {szam(u.perckeret)} perc
              </span>
            }
          />
        </KpiSor>

        <div className="mt-3">
          <Panel cim="Hívások alakulása — utolsó 30 nap">
            <HivasGorbe napok={ablakNapok("30nap")} ertekek={hivasSor("30nap", u.id)} magassag={210} />
            <div className="mt-4 border-t border-(--a-border) pt-3.5">
              <Folyamatsav ertek={perc} max={u.perckeret} />
            </div>
          </Panel>
        </div>

        <div className="mt-3 grid grid-cols-[minmax(0,1fr)_360px] items-start gap-3">
          <Panel cim="Legutóbbi hívások" belso={false}>
            {hivasok.length === 0 ? (
              <p className="px-4 py-10 text-center text-[13px] text-(--a-muted)">
                Ebben az időszakban nem volt hívás.
              </p>
            ) : (
              <table className="a-table">
                <thead>
                  <tr>
                    <th style={{ width: "176px" }}>Időpont</th>
                    <th>Kontakt</th>
                    <th className="a-num" style={{ width: "72px" }}>
                      Hossz
                    </th>
                    <th style={{ width: "156px" }}>Kimenetel</th>
                  </tr>
                </thead>
                <tbody>
                  {hivasok.map((h) => {
                    const k = kontakt(h.kontaktId);
                    return (
                      <tr key={h.id}>
                        <td>
                          <Mono className="whitespace-nowrap">
                            {datum(h.datum)} {h.ido}
                          </Mono>
                        </td>
                        <td>
                          <div className="truncate">{k?.nev}</div>
                          <div className="truncate text-[12px] text-(--a-muted)">{k?.ceg}</div>
                        </td>
                        <td className="a-num">
                          <Mono>{hossz(h.hosszMp)}</Mono>
                        </td>
                        <td>
                          <KimenetelJelzo kimenetel={h.kimenetel} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </Panel>

          <Panel cim="Közelgő időpontok" belso={false}>
            {idopontok.length === 0 ? (
              <p className="px-4 py-10 text-center text-[13px] text-(--a-muted)">
                Nincs egyeztetett időpont.
              </p>
            ) : (
              <ul>
                {idopontok.map((i) => (
                  <li
                    key={i.id}
                    className="border-b border-(--a-border) px-4 py-3 last:border-b-0"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <Mono className="text-[12px]">
                        {datum(i.datum)} {i.ido}
                      </Mono>
                      <span className="text-[12px] text-(--a-muted)">{napNev(i.datum)}</span>
                    </div>
                    <div className="mt-1 text-[13px]">{i.kontaktNev}</div>
                    <div className="text-[12px] text-(--a-muted)">{i.ceg}</div>
                    <div className="mt-1 text-[12px] text-(--a-muted)">{i.targy}</div>
                  </li>
                ))}
              </ul>
            )}
          </Panel>
        </div>

        <footer className="mt-6 border-t border-(--a-border) pt-4">
          <Link
            href={`${BASE}/ugyfelek/${u.id}`}
            className="inline-flex items-center gap-1.5 text-[13px] text-(--a-accent) transition-opacity duration-150 hover:opacity-70"
          >
            <ArrowLeft size={14} strokeWidth={1.75} aria-hidden="true" />
            Vissza az admin nézethez
          </Link>
        </footer>
      </div>
    </div>
  );
}
