"use client";

import {
  RIPORT_HONAP,
  ablakNapok,
  felhasznaltPerc,
  foglalasHetente,
  foglalasSor,
  hivasSor,
  kimenetelMegoszlas,
  ugyfel,
} from "../lib/data";
import { arany, honap, szam } from "../lib/format";
import { FoglalasOszlop, HivasGorbe, KimenetelDonut } from "../ui/charts";
import { Mono, Panel } from "../ui/primitives";

/** Shorthand for the many inline mono numbers in the summary prose. */
const N = Mono;

/* The body of a report. Shared verbatim between the Riportok screen and the
   client detail's Riport tab, so a pre-filtered report is the same artefact as
   the full one. Every number in the prose is read from the same selectors that
   feed the charts above it. */
export function RiportTest({ ugyfelId }: { ugyfelId?: string }) {
  const u = ugyfelId ? ugyfel(ugyfelId) : undefined;
  const napok = ablakNapok("julius");
  const sor = hivasSor("julius", ugyfelId);
  const megoszlas = kimenetelMegoszlas("julius", ugyfelId);
  const hetek = foglalasHetente("julius", ugyfelId);

  const ossz = sor.reduce((a, b) => a + b, 0);
  const foglalva = foglalasSor("julius", ugyfelId).reduce((a, b) => a + b, 0);
  const atlagNap = Math.round(ossz / napok.length);
  const nemElert = megoszlas.nem_vette_fel + megoszlas.hangposta;
  const erdemi = foglalva + megoszlas.visszahivas;

  const legjobbHet = hetek.reduce((a, b) => (b.ertek > a.ertek ? b : a), hetek[0]!);

  return (
    <div className="space-y-3">
      <Panel
        cim="Hívások alakulása"
        jobb={
          <span className="text-[12px] text-(--a-muted)">
            összesen <Mono>{szam(ossz)}</Mono>
          </span>
        }
      >
        <HivasGorbe napok={napok} ertekek={sor} magassag={224} />
      </Panel>

      <div className="grid grid-cols-2 gap-3">
        <Panel cim="Kimenetelek megoszlása">
          <KimenetelDonut megoszlas={megoszlas} magassag={196} />
        </Panel>
        <Panel
          cim="Foglalt időpontok hetente"
          jobb={
            <span className="text-[12px] text-(--a-muted)">
              összesen <Mono>{szam(foglalva)}</Mono>
            </span>
          }
        >
          <FoglalasOszlop adat={hetek} magassag={196} />
        </Panel>
      </div>

      <Panel cim="Összefoglaló">
        <div className="max-w-[76ch] space-y-3 text-[13px] leading-[22px]">
          <p>
            {honap(RIPORT_HONAP)} folyamán {u ? `a ${u.nev} agentjei` : "az agentek"} összesen{" "}
            <N>{szam(ossz)}</N> hívást kezeltek, naponta átlagosan <N>{szam(atlagNap)}</N> hívást.
            Ebből <N>{szam(foglalva)}</N> zárult időpontfoglalással, ami a hívások{" "}
            <N>{arany(foglalva / (ossz || 1))}</N>-a. További <N>{szam(megoszlas.visszahivas)}</N>{" "}
            kontakt kért visszahívást, így a hónap <N>{szam(erdemi)}</N> érdemi beszélgetést hozott.
          </p>
          <p>
            A hívások <N>{arany(nemElert / (ossz || 1))}</N>-ánál nem sikerült elérni a kontaktot:{" "}
            <N>{szam(megoszlas.nem_vette_fel)}</N> esetben nem vették fel a telefont,{" "}
            <N>{szam(megoszlas.hangposta)}</N> hívás hangpostára került. Elutasítás{" "}
            <N>{szam(megoszlas.elutasitotta)}</N> alkalommal történt.
          </p>
          <p>
            A legtöbb foglalás a {legjobbHet.cimke} közötti héten született,{" "}
            <N>{szam(legjobbHet.ertek)}</N> időponttal.
            {u && (
              <>
                {" "}
                A havi perckeretből <N>{szam(felhasznaltPerc(u))}</N> perc fogyott el a{" "}
                <N>{szam(u.perckeret)}</N> percből, a keret{" "}
                <N>{arany(felhasznaltPerc(u) / u.perckeret)}</N>-a.
              </>
            )}
          </p>
        </div>
      </Panel>
    </div>
  );
}
