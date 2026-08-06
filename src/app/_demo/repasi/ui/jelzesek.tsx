"use client";

import { Badge, type Tonus } from "./primitives";
import {
  AGENT_STATUSZ_CIMKE,
  KAMPANY_STATUSZ_CIMKE,
  KIMENETEL_CIMKE,
  SZAKASZ_CIMKE,
  UGYFEL_STATUSZ_CIMKE,
  type AgentStatusz,
  type KampanyStatusz,
  type Kimenetel,
  type Szakasz,
  type UgyfelStatusz,
} from "../lib/data";

const KIMENETEL_TONUS: Record<Kimenetel, Tonus> = {
  foglalva: "success",
  visszahivas: "warning",
  nem_vette_fel: "neutral",
  elutasitotta: "danger",
  hangposta: "neutral",
};

export function KimenetelJelzo({ kimenetel }: { kimenetel: Kimenetel }) {
  return <Badge tonus={KIMENETEL_TONUS[kimenetel]}>{KIMENETEL_CIMKE[kimenetel]}</Badge>;
}

/** Live agents carry the pulsing teal dot — the console's one ambient signal. */
export function AgentStatuszJelzo({ statusz }: { statusz: AgentStatusz }) {
  return statusz === "elo" ? (
    <Badge tonus="accent" pont>
      {AGENT_STATUSZ_CIMKE.elo}
    </Badge>
  ) : (
    <Badge tonus="neutral">{AGENT_STATUSZ_CIMKE.szunetel}</Badge>
  );
}

export function UgyfelStatuszJelzo({ statusz }: { statusz: UgyfelStatusz }) {
  return (
    <Badge tonus={statusz === "aktiv" ? "success" : "neutral"}>
      {UGYFEL_STATUSZ_CIMKE[statusz]}
    </Badge>
  );
}

const KAMPANY_TONUS: Record<KampanyStatusz, Tonus> = {
  fut: "success",
  szunetel: "warning",
  lezarva: "neutral",
};

export function KampanyStatuszJelzo({ statusz }: { statusz: KampanyStatusz }) {
  return <Badge tonus={KAMPANY_TONUS[statusz]}>{KAMPANY_STATUSZ_CIMKE[statusz]}</Badge>;
}

const SZAKASZ_TONUS: Record<Szakasz, Tonus> = {
  uj: "neutral",
  megkeresve: "neutral",
  erdeklodik: "accent",
  idopont: "success",
  lezarva: "neutral",
};

export function SzakaszJelzo({ szakasz }: { szakasz: Szakasz }) {
  return <Badge tonus={SZAKASZ_TONUS[szakasz]}>{SZAKASZ_CIMKE[szakasz]}</Badge>;
}
