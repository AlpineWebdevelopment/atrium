"use client";

import Link from "next/link";
import { Activity, CalendarClock, Mail, Phone, Users, XCircle } from "lucide-react";
import {
  AKTIVITAS,
  DEMO_TODAY,
  HIVASOK,
  UGYFELEK,
  aktivAgentek,
  ablakNapok,
  emailValaszarany,
  felhasznaltPerc,
  foglalas7,
  hivasMa,
  hivasSor,
  ugyfel,
  type AktivitasTipus,
  type Ugyfel,
} from "../lib/data";
import { arany, datum, szam } from "../lib/format";
import { HivasGorbe } from "../ui/charts";
import { Folyamatsav, KpiSor, Mono, Oldalfej, Panel, StatKartya } from "../ui/primitives";
import { UgyfelStatuszJelzo } from "../ui/jelzesek";
import { BASE } from "../ui/nav";

const IKONOK: Record<AktivitasTipus, typeof Activity> = {
  foglalas: CalendarClock,
  visszahivas: Phone,
  email: Mail,
  elutasitas: XCircle,
  kontakt: Users,
  rendszer: Activity,
};

/** Most recent logged call for a client — the log is stored newest-first. */
function utolsoAktivitas(ugyfelId: string): string {
  const h = HIVASOK.find((x) => x.ugyfelId === ugyfelId);
  if (!h) return "Nincs rögzített hívás";
  return h.datum === DEMO_TODAY ? `Ma ${h.ido}` : `${datum(h.datum)} ${h.ido}`;
}

function UgyfelKartya({ u }: { u: Ugyfel }) {
  const agentek = aktivAgentek(u.id).length;
  return (
    <Link
      href={`${BASE}/ugyfelek/${u.id}`}
      className="a-card block p-4 transition-colors duration-150 hover:border-(--a-border-strong) hover:bg-(--a-hover)"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-[13px] font-medium">{u.nev}</div>
          <div className="mt-0.5 truncate text-[12px] text-(--a-muted)">{u.iparag}</div>
        </div>
        <UgyfelStatuszJelzo statusz={u.statusz} />
      </div>

      <div className="mt-3.5">
        <Folyamatsav ertek={felhasznaltPerc(u)} max={u.perckeret} />
      </div>

      <div className="mt-3 flex items-center justify-between text-[12px] text-(--a-muted)">
        <span>
          <Mono>{szam(agentek)}</Mono> aktív agent
        </span>
        <span>{utolsoAktivitas(u.id)}</span>
      </div>
    </Link>
  );
}

export default function Attekintes() {
  const napok = ablakNapok("30nap");
  const sor = hivasSor("30nap");
  const ossz30 = sor.reduce((a, b) => a + b, 0);

  return (
    <>
      <Oldalfej
        cim="Áttekintés"
        alcim={`Minden ügyfél, ${datum(DEMO_TODAY)}`}
      />

      <KpiSor>
        <StatKartya cimke="Mai hívások" ertek={szam(hivasMa())} alatta="Élő agentek összesítve" />
        <StatKartya
          cimke="Foglalt időpontok (7 nap)"
          ertek={szam(foglalas7())}
          alatta="Az elmúlt hét napban"
        />
        <StatKartya
          cimke="Aktív agentek"
          ertek={szam(aktivAgentek().length)}
          alatta={`${szam(UGYFELEK.length)} ügyfélnél`}
        />
        <StatKartya
          cimke="E-mail válaszarány"
          ertek={arany(emailValaszarany())}
          alatta="Öt kampány átlaga"
        />
      </KpiSor>

      <div className="mt-3 grid grid-cols-[minmax(0,1fr)_320px] gap-3">
        <div className="space-y-3">
          <Panel
            cim="Hívások alakulása — utolsó 30 nap"
            jobb={
              <span className="text-[12px] text-(--a-muted)">
                összesen <Mono>{szam(ossz30)}</Mono>
              </span>
            }
          >
            <HivasGorbe napok={napok} ertekek={sor} magassag={228} />
          </Panel>

          <div>
            <h2 className="mb-2.5 text-[13px] font-medium">Ügyfelek</h2>
            <div className="grid grid-cols-2 gap-3">
              {UGYFELEK.map((u) => (
                <UgyfelKartya key={u.id} u={u} />
              ))}
            </div>
          </div>
        </div>

        <Panel cim="Aktivitás" belso={false}>
          <ul>
            {AKTIVITAS.map((a) => {
              const Ikon = IKONOK[a.tipus];
              return (
                <li
                  key={a.id}
                  className="flex gap-2.5 border-b border-(--a-border) px-4 py-2.5 last:border-b-0"
                >
                  <Ikon
                    size={14}
                    strokeWidth={1.75}
                    className="mt-0.5 flex-none text-(--a-muted)"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="text-[12px] leading-[18px]">{a.szoveg}</p>
                    <p className="mt-0.5 text-[12px] text-(--a-muted)">
                      <Link
                        href={`${BASE}/ugyfelek/${a.ugyfelId}`}
                        className="transition-colors duration-150 hover:text-(--a-accent)"
                      >
                        {ugyfel(a.ugyfelId)?.nev}
                      </Link>
                      {" · "}
                      <Mono>{a.ido}</Mono>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Panel>
      </div>
    </>
  );
}
