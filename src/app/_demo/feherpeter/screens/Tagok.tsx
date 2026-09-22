"use client";

import { useState } from "react";
import { Flame, Search } from "lucide-react";
import { useStore } from "../lib/store";
import { rankFor } from "../lib/access";
import { formatShort } from "../lib/dates";
import { Avatar, Card, PageHeader, RankBadge, Tabs, TierBadge } from "../ui/primitives";

export default function Tagok() {
  const { members, ranks, me, myPoints, myStreak } = useStore();
  const [tab, setTab] = useState<"nevsor" | "ranglista">("nevsor");
  const [q, setQ] = useState("");
  const people = members.filter((m) => !m.isMentor);
  const withLive = people.map((m) => (me && m.id === me.id ? { ...m, points: myPoints, streak: myStreak } : m));
  const list = withLive.filter((m) => `${m.name} ${m.business} ${m.city}`.toLowerCase().includes(q.toLowerCase())).sort((a, b) => a.name.localeCompare(b.name, "hu"));
  const board = [...withLive].sort((a, b) => b.points - a.points);

  return (
    <div className="fp-container py-8 md:py-10">
      <PageHeader eyebrow={`${people.length} tag`} title="Tagok" lead="Akik veled együtt csinálják. A rang nyilvános, és jár vele valami." />

      <Tabs value={tab} onChange={setTab} items={[{ id: "nevsor", label: "Névsor" }, { id: "ranglista", label: "Ranglista" }]} />

      {tab === "nevsor" ? (
        <>
          <label className="relative mt-5 block max-w-md">
            <Search size={16} className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-(--fp-muted-fg)" aria-hidden="true" />
            <input value={q} onChange={(e) => setQ(e.target.value)} className="fp-input pl-9" placeholder="Név, szakma vagy város" aria-label="Keresés a tagok között" />
          </label>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((m) => (
              <Card as="li" key={m.id} className={`flex items-center gap-3 p-4 ${me?.id === m.id ? "border-(--fp-gold-30)" : ""}`}>
                <Avatar member={m} size={44} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">{m.name}</p>
                  <p className="truncate text-xs text-(--fp-muted-fg)">
                    {m.business} · {m.city}
                  </p>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2">
                    <RankBadge points={m.points} />
                    <TierBadge tier={m.tier} />
                  </div>
                </div>
                <p className="flex-none text-right text-[11px] text-(--fp-muted-fg)">
                  tag
                  <br />
                  {formatShort(m.joined)}
                </p>
              </Card>
            ))}
          </ul>
          {list.length === 0 && <p className="mt-6 text-sm text-(--fp-muted-fg)">Nincs találat.</p>}
        </>
      ) : (
        <Card className="mt-5 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="text-left text-[10px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">
              <tr className="border-b border-(--fp-border)">
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">Tag</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">Rang</th>
                <th className="px-4 py-3 text-right font-medium">Pont</th>
                <th className="px-4 py-3 text-right font-medium">Sorozat</th>
              </tr>
            </thead>
            <tbody>
              {board.map((m, i) => (
                <tr key={m.id} className={`border-b border-(--fp-border) last:border-0 ${me?.id === m.id ? "bg-(--fp-gold-10)" : ""}`}>
                  <td className="px-4 py-3 text-(--fp-muted-fg)">{i + 1}</td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-3">
                      <Avatar member={m} size={30} />
                      <span className="min-w-0">
                        <span className="block truncate">{m.name}</span>
                        <span className="block truncate text-xs text-(--fp-muted-fg) sm:hidden">{rankFor(ranks, m.points).name}</span>
                      </span>
                    </span>
                  </td>
                  <td className="hidden px-4 py-3 sm:table-cell">
                    <RankBadge points={m.points} />
                  </td>
                  <td className="px-4 py-3 text-right">{m.points}</td>
                  <td className="px-4 py-3 text-right">
                    <span className="inline-flex items-center gap-1">
                      <Flame size={13} className={m.streak > 0 ? "text-(--fp-gold)" : "text-(--fp-muted-fg)"} aria-hidden="true" />
                      {m.streak}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}
    </div>
  );
}
