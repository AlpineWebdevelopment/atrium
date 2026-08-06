"use client";

import { useMemo, useState } from "react";
import {
  KONTAKTOK,
  SZAKASZ_CIMKE,
  SZAKASZ_SORREND,
  UGYFELEK,
  nyitottErtek,
  ugyfel,
  type Kontakt,
} from "../lib/data";
import { datum, ft, ftRovid, szam } from "../lib/format";
import { Badge, Mono, Oldalfej, Pirula } from "../ui/primitives";

const MIND = "mind";

function Lap({ k, mutatUgyfel }: { k: Kontakt; mutatUgyfel: boolean }) {
  return (
    <article className="a-card p-3">
      <div className="text-[13px] font-medium leading-[18px]">{k.nev}</div>
      <div className="mt-0.5 text-[12px] leading-[17px] text-(--a-muted)">{k.ceg}</div>

      {/* The tenant tag may shrink and truncate; the deal value never does. */}
      <div className="mt-2.5 flex items-center justify-between gap-2">
        {mutatUgyfel ? (
          <span className="min-w-0 overflow-hidden">
            <Badge tonus="neutral">{ugyfel(k.ugyfelId)?.rovidNev}</Badge>
          </span>
        ) : (
          <span />
        )}
        <Mono className="flex-none whitespace-nowrap text-[13px]">{ftRovid(k.ertek)}</Mono>
      </div>

      <p className="mt-2.5 truncate border-t border-(--a-border) pt-2 text-[12px] text-(--a-muted)">
        {k.utolsoEsemeny}
      </p>
      <Mono className="mt-1 block text-[12px] text-(--a-muted)">
        {datum(k.utolsoKapcsolat)}
      </Mono>
    </article>
  );
}

export default function Crm() {
  const [ugyfelId, setUgyfelId] = useState(MIND);

  const szurt = useMemo(
    () => (ugyfelId === MIND ? KONTAKTOK : KONTAKTOK.filter((k) => k.ugyfelId === ugyfelId)),
    [ugyfelId],
  );

  const nyitott = nyitottErtek(ugyfelId === MIND ? undefined : ugyfelId);

  return (
    <>
      <Oldalfej
        cim="CRM"
        alcim={
          <span>
            <Mono>{szam(szurt.length)}</Mono> kontakt a folyamatban, nyitott érték{" "}
            <Mono>{ft(nyitott)}</Mono>
          </span>
        }
        jobb={<button type="button" className="a-btn a-btn-primary">Új kontakt felvétele</button>}
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

      <div className="grid grid-cols-5 items-start gap-3">
        {SZAKASZ_SORREND.map((sz) => {
          const lapok = szurt.filter((k) => k.szakasz === sz);
          const ertek = lapok.reduce((a, k) => a + k.ertek, 0);
          return (
            <section key={sz} className="min-w-0">
              <header className="mb-2.5 flex items-baseline justify-between gap-2 border-b border-(--a-border) pb-2">
                <h2 className="truncate text-[13px] font-medium">{SZAKASZ_CIMKE[sz]}</h2>
                <Mono className="flex-none text-[12px] text-(--a-muted)">
                  {szam(lapok.length)}
                </Mono>
              </header>

              <Mono className="mb-2.5 block text-[12px] text-(--a-muted)">{ftRovid(ertek)}</Mono>

              <div className="space-y-2">
                {lapok.map((k) => (
                  <Lap key={k.id} k={k} mutatUgyfel={ugyfelId === MIND} />
                ))}
                {lapok.length === 0 && (
                  <p className="rounded-[10px] border border-dashed border-(--a-border) px-3 py-6 text-center text-[12px] text-(--a-muted)">
                    Nincs kontakt
                  </p>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
