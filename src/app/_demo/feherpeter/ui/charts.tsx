"use client";

import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

/* Recharts wrappers in the demo's one accent. Every chart is a single series
   in gold on the card surface, so there is no categorical palette to keep
   apart; identity comes from the title, magnitude from length. */

const GOLD = "hsl(40 60% 50%)";
const GRID = "hsl(220 15% 18%)";
const MUTED = "hsl(220 10% 55%)";

const tooltipStyle = {
  contentStyle: { background: "hsl(220 18% 10%)", border: `1px solid ${GRID}`, borderRadius: 8, fontSize: 12, color: "hsl(40 20% 90%)" },
  labelStyle: { color: MUTED },
  itemStyle: { color: "hsl(40 20% 90%)" },
  cursor: { fill: "hsl(40 60% 50% / 0.08)" },
};

export function Bars({ data, unit = "" }: { data: { label: string; value: number }[]; unit?: string }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }} barCategoryGap="28%">
        <CartesianGrid vertical={false} stroke={GRID} />
        <XAxis dataKey="label" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
        <Tooltip {...tooltipStyle} formatter={(v) => [`${v}${unit}`, ""]} />
        <Bar dataKey="value" fill={GOLD} radius={[4, 4, 0, 0]} isAnimationActive={false} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function Trend({ data, unit = "" }: { data: { label: string; value: number }[]; unit?: string }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
        <CartesianGrid vertical={false} stroke={GRID} />
        <XAxis dataKey="label" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} allowDecimals={false} />
        <Tooltip {...tooltipStyle} formatter={(v) => [`${v}${unit}`, ""]} />
        <Line type="monotone" dataKey="value" stroke={GOLD} strokeWidth={2} dot={{ r: 3, fill: GOLD, strokeWidth: 0 }} activeDot={{ r: 5 }} isAnimationActive={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
