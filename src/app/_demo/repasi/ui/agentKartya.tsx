"use client";

import Link from "next/link";
import {
  AGENT_NYELV_CIMKE,
  AGENT_TIPUS_CIMKE,
  agentHetiDarab,
  ugyfel,
  type Agent,
} from "../lib/data";
import { szam } from "../lib/format";
import { Badge, Mono } from "./primitives";
import { AgentStatuszJelzo } from "./jelzesek";
import { BASE } from "./nav";

export function AgentKartya({ a, mutatUgyfel = true }: { a: Agent; mutatUgyfel?: boolean }) {
  const u = ugyfel(a.ugyfelId);
  const hang = a.tipus === "hang";

  return (
    <Link
      href={`${BASE}/agentek/${a.id}`}
      className="a-card block p-4 transition-colors duration-150 hover:border-(--a-border-strong) hover:bg-(--a-hover)"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-[13px] font-medium">{a.nev}</div>
          {mutatUgyfel && (
            <div className="mt-0.5 truncate text-[12px] text-(--a-muted)">{u?.nev}</div>
          )}
        </div>
        <AgentStatuszJelzo statusz={a.statusz} />
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <Badge tonus="neutral">{AGENT_TIPUS_CIMKE[a.tipus]}</Badge>
        <Badge tonus="neutral">{AGENT_NYELV_CIMKE[a.nyelv]}</Badge>
      </div>

      <div className="mt-3.5 flex items-end justify-between gap-3 border-t border-(--a-border) pt-3">
        <div>
          <div className="text-[12px] text-(--a-muted)">
            {hang ? "Telefonszám" : "Feladó"}
          </div>
          <div className={`mt-0.5 text-[12px] ${hang ? "a-mono" : ""}`}>
            {hang ? a.telefonszam : a.feladoCim}
          </div>
        </div>
        <div className="text-right">
          <div className="text-[12px] text-(--a-muted)">
            {hang ? "Heti hívás" : "Heti e-mail"}
          </div>
          <Mono className="text-[15px]">{szam(agentHetiDarab(a))}</Mono>
        </div>
      </div>
    </Link>
  );
}
