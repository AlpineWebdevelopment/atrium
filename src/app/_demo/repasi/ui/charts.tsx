"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Kimenetel } from "../lib/data";
import { KIMENETEL_CIMKE, KIMENETEL_SORREND } from "../lib/data";
import { arany, datumRovid, szam } from "../lib/format";

const TEAL = "#0F766E";
const RACS = "#F0EFED";
const CIMKE = "#6B7280";

const MONO = 'var(--font-geist-mono-src), ui-monospace, monospace';
const TICK = { fontSize: 11, fill: CIMKE, fontFamily: MONO } as const;

/* Outcomes are ordered (booked → rejected), so the donut uses a single-hue
   sequential ramp rather than five competing colours — the console has exactly
   one accent. Adjacent steps clear CVD separation, but a five-step ramp on
   white can never separate on lightness alone, so identity is carried by the
   direct-labelled legend beside the chart and by 2px surface gaps between
   arcs; the colour is reinforcement, never the only cue. */
const RAMPA: Record<Kimenetel, string> = {
  foglalva: "#0B4F49",
  visszahivas: "#0F766E",
  nem_vette_fel: "#3EA096",
  hangposta: "#86C4BD",
  elutasitotta: "#CFE4E1",
};

function Buborek({
  cim,
  sorok,
}: {
  cim: string;
  sorok: { cimke: string; ertek: string; szin?: string }[];
}) {
  return (
    <div className="rounded-lg border border-(--a-border) bg-white px-2.5 py-2 text-[12px]">
      <div className="mb-1 text-(--a-muted)">{cim}</div>
      {sorok.map((s) => (
        <div key={s.cimke} className="flex items-center gap-2 whitespace-nowrap">
          {s.szin && (
            <span className="h-2 w-2 flex-none rounded-[2px]" style={{ background: s.szin }} />
          )}
          <span>{s.cimke}</span>
          <span className="a-mono ml-auto pl-3">{s.ertek}</span>
        </div>
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Calls over time
// ---------------------------------------------------------------------------

export function HivasGorbe({
  napok,
  ertekek,
  magassag = 220,
}: {
  napok: readonly string[];
  ertekek: readonly number[];
  magassag?: number;
}) {
  const adat = napok.map((nap, i) => ({ nap, ertek: ertekek[i] ?? 0 }));
  // Roughly six labels regardless of window length.
  const lepes = Math.max(1, Math.floor(adat.length / 6));

  return (
    <ResponsiveContainer width="100%" height={magassag}>
      {/* Right margin leaves room for the last x-axis label, which is centred
          on the final point and would otherwise be clipped by the panel. */}
      <AreaChart data={adat} margin={{ top: 6, right: 26, bottom: 0, left: 0 }}>
        <CartesianGrid vertical={false} stroke={RACS} />
        <XAxis
          dataKey="nap"
          tickFormatter={datumRovid}
          tickLine={false}
          axisLine={false}
          tick={TICK}
          interval={lepes - 1}
          tickMargin={8}
          minTickGap={0}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={TICK}
          width={34}
          allowDecimals={false}
          tickFormatter={(v: number) => szam(v)}
        />
        <Tooltip
          cursor={{ stroke: "#D6D3D1", strokeWidth: 1 }}
          content={({ active, payload, label }) =>
            active && payload?.length ? (
              <Buborek
                cim={datumRovid(String(label))}
                sorok={[{ cimke: "Hívás", ertek: szam(Number(payload[0]!.value)), szin: TEAL }]}
              />
            ) : null
          }
        />
        <Area
          type="monotone"
          dataKey="ertek"
          stroke={TEAL}
          strokeWidth={2}
          fill={TEAL}
          fillOpacity={0.1}
          dot={false}
          activeDot={{ r: 3.5, fill: TEAL, stroke: "#fff", strokeWidth: 2 }}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

// ---------------------------------------------------------------------------
// Outcome mix
// ---------------------------------------------------------------------------

export function KimenetelDonut({
  megoszlas,
  magassag = 210,
}: {
  megoszlas: Record<Kimenetel, number>;
  magassag?: number;
}) {
  const ossz = KIMENETEL_SORREND.reduce((a, k) => a + megoszlas[k], 0);
  const adat = KIMENETEL_SORREND.map((k) => ({
    kulcs: k,
    nev: KIMENETEL_CIMKE[k],
    ertek: megoszlas[k],
    szin: RAMPA[k],
  }));

  return (
    <div className="flex items-center gap-5">
      <div className="relative flex-none" style={{ width: magassag, height: magassag }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={adat}
              dataKey="ertek"
              nameKey="nev"
              innerRadius="62%"
              outerRadius="94%"
              paddingAngle={2}
              stroke="#fff"
              strokeWidth={2}
              isAnimationActive={false}
            >
              {adat.map((d) => (
                <Cell key={d.kulcs} fill={d.szin} />
              ))}
            </Pie>
            <Tooltip
              content={({ active, payload }) =>
                active && payload?.length ? (
                  <Buborek
                    cim={String(payload[0]!.name)}
                    sorok={[
                      {
                        cimke: "Hívás",
                        ertek: `${szam(Number(payload[0]!.value))} · ${arany(
                          Number(payload[0]!.value) / (ossz || 1),
                        )}`,
                        szin: (payload[0]!.payload as { szin: string }).szin,
                      },
                    ]}
                  />
                ) : null
              }
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="a-mono text-[20px] leading-6">{szam(ossz)}</span>
          <span className="text-[11px] text-(--a-muted)">hívás</span>
        </div>
      </div>

      {/* Identity lives here, not in the colour alone. */}
      <ul className="min-w-0 flex-1 text-[12px]">
        {adat.map((d) => (
          <li key={d.kulcs} className="flex items-center gap-2 border-b border-(--a-border) py-1.5 last:border-b-0">
            <span className="h-2 w-2 flex-none rounded-[2px]" style={{ background: d.szin }} />
            <span className="truncate">{d.nev}</span>
            <span className="a-mono ml-auto pl-2">{szam(d.ertek)}</span>
            <span className="a-mono w-12 text-right text-(--a-muted)">
              {arany(d.ertek / (ossz || 1), 0)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Weekly bookings
// ---------------------------------------------------------------------------

export function FoglalasOszlop({
  adat,
  magassag = 210,
}: {
  adat: readonly { cimke: string; ertek: number }[];
  magassag?: number;
}) {
  return (
    <ResponsiveContainer width="100%" height={magassag}>
      <BarChart data={[...adat]} margin={{ top: 6, right: 12, bottom: 0, left: 0 }} barCategoryGap="28%">
        <CartesianGrid vertical={false} stroke={RACS} />
        <XAxis dataKey="cimke" tickLine={false} axisLine={false} tick={TICK} tickMargin={8} />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={TICK}
          width={34}
          allowDecimals={false}
          tickFormatter={(v: number) => szam(v)}
        />
        <Tooltip
          cursor={{ fill: "rgba(15,118,110,0.06)" }}
          content={({ active, payload, label }) =>
            active && payload?.length ? (
              <Buborek
                cim={String(label)}
                sorok={[
                  { cimke: "Foglalt időpont", ertek: szam(Number(payload[0]!.value)), szin: TEAL },
                ]}
              />
            ) : null
          }
        />
        <Bar dataKey="ertek" fill={TEAL} radius={[4, 4, 0, 0]} maxBarSize={44} isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}

/** Compact sparkline-style area used on the client cards. */
export function MiniGorbe({ ertekek, magassag = 40 }: { ertekek: readonly number[]; magassag?: number }) {
  const adat = ertekek.map((ertek, i) => ({ i, ertek }));
  return (
    <ResponsiveContainer width="100%" height={magassag}>
      <AreaChart data={adat} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
        <Area
          type="monotone"
          dataKey="ertek"
          stroke={TEAL}
          strokeWidth={1.5}
          fill={TEAL}
          fillOpacity={0.1}
          dot={false}
          isAnimationActive={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
