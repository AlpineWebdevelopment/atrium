"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import type { TierId } from "../data/types";
import { useStore } from "../lib/store";
import { rankFor } from "../lib/access";
import { flatLessons } from "../lib/courses";
import { formatShort, relativeDays } from "../lib/dates";
import { Avatar, Card, PageHeader, TierBadge } from "../ui/primitives";

export default function AdminTagok() {
  const { members, ranks, tiers, courses, config } = useStore();
  const [q, setQ] = useState("");
  const [tier, setTier] = useState<TierId | "">("");
  const people = members.filter((m) => !m.isMentor);
  const opened = courses.reduce((s, c) => s + flatLessons(c).filter((l) => l.releaseWeek <= config.currentWeek).length, 0);
  const list = people.filter((m) => (!tier || m.tier === tier) && `${m.name} ${m.business} ${m.city}`.toLowerCase().includes(q.toLowerCase())).sort((a, b) => a.lastActiveDaysAgo - b.lastActiveDaysAgo);

  return (
    <div>
      <PageHeader eyebrow={`${people.length} tag`} title="Tagok" />
      <div className="mb-4 flex flex-wrap gap-3">
        <label className="relative block max-w-xs flex-1">
          <Search size={15} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-(--fp-muted-fg)" aria-hidden="true" />
          <input value={q} onChange={(e) => setQ(e.target.value)} className="fp-input pl-9" placeholder="Keresés" aria-label="Keresés" />
        </label>
        <select className="fp-input w-44" value={tier} onChange={(e) => setTier(e.target.value as TierId | "")} aria-label="Szint szűrő">
          <option value="">Minden szint</option>
          {tiers.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <Card className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="text-left text-[10px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">
            <tr className="border-b border-(--fp-border)">
              <th className="px-4 py-3 font-medium">Tag</th>
              <th className="px-4 py-3 font-medium">Szint</th>
              <th className="px-4 py-3 font-medium">Rang</th>
              <th className="px-4 py-3 font-medium">Csatlakozott</th>
              <th className="px-4 py-3 font-medium">Utoljára aktív</th>
              <th className="px-4 py-3 font-medium">Haladás</th>
              <th className="px-4 py-3 text-right font-medium">Sorozat</th>
              <th className="px-4 py-3 text-right font-medium">Ajánlás</th>
            </tr>
          </thead>
          <tbody>
            {list.map((m) => {
              const r = rankFor(ranks, m.points);
              const stale = m.lastActiveDaysAgo >= 7;
              return (
                <tr key={m.id} className="border-b border-(--fp-border) last:border-0">
                  <td className="px-4 py-2.5">
                    <span className="flex items-center gap-3">
                      <Avatar member={m} size={30} />
                      <span className="min-w-0">
                        <span className="block truncate">{m.name}</span>
                        <span className="block truncate text-xs text-(--fp-muted-fg)">
                          {m.business} · {m.city}
                        </span>
                      </span>
                    </span>
                  </td>
                  <td className="px-4 py-2.5">
                    <TierBadge tier={m.tier} />
                  </td>
                  <td className="px-4 py-2.5 text-(--fp-muted-fg)">
                    {r.level}. {r.name} · {m.points} p
                  </td>
                  <td className="px-4 py-2.5 text-(--fp-muted-fg)">{formatShort(m.joined)}</td>
                  <td className={`px-4 py-2.5 ${stale ? "text-(--fp-danger)" : "text-(--fp-muted-fg)"}`}>{relativeDays(m.lastActiveDaysAgo)}</td>
                  <td className="px-4 py-2.5 text-(--fp-muted-fg)">
                    {m.lessonsCompleted} / {opened} lecke
                  </td>
                  <td className="px-4 py-2.5 text-right">{m.streak}</td>
                  <td className="px-4 py-2.5 text-right">{m.referrals}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
      <p className="mt-3 text-xs text-(--fp-muted-fg)">Piros: egy hete nem járt itt. A valódi verzióban innen megy az emlékeztető.</p>
    </div>
  );
}
