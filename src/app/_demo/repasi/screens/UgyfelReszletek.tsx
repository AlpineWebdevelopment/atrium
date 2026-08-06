"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  DEMO_TODAY,
  ablakNapok,
  aktivAgentek,
  felhasznaltPerc,
  foglalas7,
  hivasMa,
  hivasSor,
  ugyfel,
  ugyfelAgentjei,
  ugyfelHivasai,
  ugyfelKontaktjai,
  type Kontakt,
} from "../lib/data";
import { datum, szam, szazalek } from "../lib/format";
import { HivasGorbe } from "../ui/charts";
import {
  Folyamatsav,
  Fulek,
  KpiSor,
  Mono,
  Oldalfej,
  Panel,
  StatKartya,
  Tabla,
  type Oszlop,
} from "../ui/primitives";
import { SzakaszJelzo, UgyfelStatuszJelzo } from "../ui/jelzesek";
import { AgentKartya } from "../ui/agentKartya";
import { HivasTabla } from "../ui/hivasTabla";
import { RiportTest } from "./RiportTest";
import { BASE } from "../ui/nav";

type Ful = "attekintes" | "agentek" | "kontaktok" | "hivasok" | "riport";

const FULEK: readonly { id: Ful; cimke: string }[] = [
  { id: "attekintes", cimke: "Áttekintés" },
  { id: "agentek", cimke: "Agentek" },
  { id: "kontaktok", cimke: "Kontaktok" },
  { id: "hivasok", cimke: "Hívások" },
  { id: "riport", cimke: "Riport" },
];

const KONTAKT_OSZLOPOK: readonly Oszlop<Kontakt>[] = [
  { kulcs: "nev", fej: "Név", cella: (k) => <span className="font-medium">{k.nev}</span> },
  {
    kulcs: "ceg",
    fej: "Cég / pozíció",
    cella: (k) => (
      <div className="min-w-0">
        <div className="truncate">{k.ceg}</div>
        <div className="truncate text-[12px] text-(--a-muted)">{k.pozicio}</div>
      </div>
    ),
  },
  { kulcs: "telefon", fej: "Telefonszám", szelesseg: "156px", cella: (k) => <Mono>{k.telefon}</Mono> },
  {
    kulcs: "szakasz",
    fej: "Státusz",
    szelesseg: "156px",
    cella: (k) => <SzakaszJelzo szakasz={k.szakasz} />,
  },
  {
    kulcs: "utolso",
    fej: "Utolsó kapcsolat",
    szam: true,
    szelesseg: "132px",
    cella: (k) => <Mono>{datum(k.utolsoKapcsolat)}</Mono>,
  },
];

export default function UgyfelReszletek({ ugyfelId }: { ugyfelId: string }) {
  const [ful, setFul] = useState<Ful>("attekintes");
  const u = ugyfel(ugyfelId);
  if (!u) return null;

  const agentek = ugyfelAgentjei(u.id);
  const kontaktok = ugyfelKontaktjai(u.id);
  const hivasok = ugyfelHivasai(u.id);
  const perc = felhasznaltPerc(u);

  return (
    <>
      <Oldalfej
        cim={u.nev}
        alcim={
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span>{u.iparag}</span>
            <span className="text-(--a-border-strong)">·</span>
            <span>{u.varos}</span>
            <span className="text-(--a-border-strong)">·</span>
            <span>Kezelő: {u.kezelo}</span>
            <UgyfelStatuszJelzo statusz={u.statusz} />
          </span>
        }
        jobb={
          <Link href={`${BASE}/portal/${u.id}`} className="a-btn">
            <ExternalLink size={14} strokeWidth={1.75} aria-hidden="true" />
            Megtekintés ügyfélként
          </Link>
        }
      />

      <Fulek fulek={FULEK} aktiv={ful} valaszt={setFul} />

      <div className="mt-4">
        {ful === "attekintes" && (
          <div className="space-y-3">
            <KpiSor>
              <StatKartya cimke="Mai hívások" ertek={szam(hivasMa(u))} alatta={datum(DEMO_TODAY)} />
              <StatKartya
                cimke="Foglalt időpontok (7 nap)"
                ertek={szam(foglalas7(u))}
                alatta="Az elmúlt hét napban"
              />
              <StatKartya
                cimke="Aktív agentek"
                ertek={szam(aktivAgentek(u.id).length)}
                alatta={`${szam(agentek.length)} beállított agentből`}
              />
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

            <Panel cim="Perckeret felhasználása — utolsó 30 nap">
              <Folyamatsav ertek={perc} max={u.perckeret} />
            </Panel>

            <Panel cim="Hívások alakulása — utolsó 30 nap">
              <HivasGorbe napok={ablakNapok("30nap")} ertekek={hivasSor("30nap", u.id)} magassag={228} />
            </Panel>
          </div>
        )}

        {ful === "agentek" && (
          <div className="grid grid-cols-3 gap-3">
            {agentek.map((a) => (
              <AgentKartya key={a.id} a={a} mutatUgyfel={false} />
            ))}
          </div>
        )}

        {ful === "kontaktok" && (
          <Panel
            cim={
              <span className="text-(--a-muted)">
                <Mono>{szam(kontaktok.length)}</Mono> kontakt
              </span>
            }
            belso={false}
          >
            <Tabla
              oszlopok={KONTAKT_OSZLOPOK}
              sorok={kontaktok}
              sorKulcs={(k) => k.id}
              ures="Ehhez az ügyfélhez még nincs kontakt."
            />
          </Panel>
        )}

        {ful === "hivasok" && (
          <Panel
            cim={
              <span className="text-(--a-muted)">
                <Mono>{szam(hivasok.length)}</Mono> hívás a naplóban
              </span>
            }
            belso={false}
          >
            <HivasTabla hivasok={hivasok} mutatUgyfel={false} ures="Ehhez az ügyfélhez nincs rögzített hívás." />
          </Panel>
        )}

        {ful === "riport" && <RiportTest ugyfelId={u.id} />}
      </div>
    </>
  );
}
