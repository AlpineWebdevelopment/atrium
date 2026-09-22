"use client";

import { useState } from "react";
import type { PrivilegeKey, Rank, Tier } from "../data/types";
import { useStore } from "../lib/store";
import { seatsLeft } from "../lib/access";
import { Card, Eyebrow, Field, PageHeader, Tabs } from "../ui/primitives";

const PRIVILEGES: { key: PrivilegeKey; label: string }[] = [
  { key: "post-siker", label: "posztolhatsz a Siker kategóriába" },
  { key: "live-question", label: "a kérdésedre Péter az élő adásban válaszol" },
  { key: "propose-topic", label: "témát javasolhatsz egy élő alkalomra" },
  { key: "inner-trial", label: "egy próbahónap jár a Belső körben, ha van szabad hely" },
];

/* Edits here re-gate the member area live: the tier names appear on every
   badge and in the role switcher, the rank thresholds move everyone's rank. */
export default function AdminSzintek() {
  const { tiers, setTiers, ranks, setRanks, config, updateConfig, courses, setCourses } = useStore();
  const [tab, setTab] = useState<"szintek" | "rangok">("szintek");

  const patchTier = (id: string, p: Partial<Tier>) => setTiers(tiers.map((t) => (t.id === id ? { ...t, ...p } : t)));
  const patchRank = (level: number, p: Partial<Rank>) => setRanks(ranks.map((r) => (r.level === level ? { ...r, ...p } : r)));

  return (
    <div>
      <PageHeader eyebrow="Beállítások" title="Szintek és rangok" lead="Amit itt átírsz, azonnal érvényes a tagi nézetben." />
      <Tabs value={tab} onChange={setTab} items={[{ id: "szintek", label: "Tagsági szintek" }, { id: "rangok", label: "Rangok" }]} />

      {tab === "szintek" ? (
        <div className="mt-6 space-y-5">
          <Card className="grid gap-4 p-5 sm:grid-cols-3">
            <Field label="Belső kör helyek" hint={`${seatsLeft(config.innerCircleSeats, config.innerCircleTaken)} szabad hely`}>
              <input type="number" min={config.innerCircleTaken} className="fp-input" value={config.innerCircleSeats} onChange={(e) => updateConfig({ innerCircleSeats: Math.max(0, Number(e.target.value)) })} />
            </Field>
            <Field label="Foglalt helyek">
              <input type="number" min={0} max={config.innerCircleSeats} className="fp-input" value={config.innerCircleTaken} onChange={(e) => updateConfig({ innerCircleTaken: Math.min(config.innerCircleSeats, Math.max(0, Number(e.target.value))) })} />
            </Field>
          </Card>

          <div className="grid gap-5 lg:grid-cols-3">
            {tiers.map((t) => (
              <Card key={t.id} className="space-y-4 p-5">
                <Eyebrow className="text-[10px]">{t.level}. szint</Eyebrow>
                <Field label="Név">
                  <input className="fp-input" value={t.name} onChange={(e) => patchTier(t.id, { name: e.target.value })} />
                </Field>
                <Field label="Ár (csak megjelenítés)">
                  <input className="fp-input" value={t.priceLabel} onChange={(e) => patchTier(t.id, { priceLabel: e.target.value })} />
                </Field>
                <Field label="Egy mondat">
                  <input className="fp-input" value={t.tagline} onChange={(e) => patchTier(t.id, { tagline: e.target.value })} />
                </Field>
                <Field label="Mit tartalmaz (soronként)">
                  <textarea className="fp-input" rows={5} value={t.inclusions.join("\n")} onChange={(e) => patchTier(t.id, { inclusions: e.target.value.split("\n").filter(Boolean) })} />
                </Field>
                <Field label="Mit ad hozzá az előzőhöz (soronként)">
                  <textarea className="fp-input" rows={3} value={t.adds.join("\n")} onChange={(e) => patchTier(t.id, { adds: e.target.value.split("\n").filter(Boolean) })} />
                </Field>
                <div>
                  <span className="fp-label">Ezen a szinten nyíló kurzusok</span>
                  <ul className="space-y-1.5">
                    {courses.map((c) => (
                      <li key={c.slug}>
                        <label className="flex cursor-pointer items-center gap-2 text-sm">
                          <input type="radio" name={`course-${c.slug}`} className="accent-(--fp-gold)" checked={c.tier === t.id} onChange={() => setCourses(courses.map((x) => (x.slug === c.slug ? { ...x, tier: t.id } : x)))} />
                          <span className="truncate">{c.title}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <Card className="mt-6 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="text-left text-[10px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">
              <tr className="border-b border-(--fp-border)">
                <th className="px-4 py-3 font-medium">Szint</th>
                <th className="px-4 py-3 font-medium">Név</th>
                <th className="px-4 py-3 font-medium">Ponthatár</th>
                <th className="px-4 py-3 font-medium">Jogosultság</th>
              </tr>
            </thead>
            <tbody>
              {ranks.map((r) => (
                <tr key={r.level} className="border-b border-(--fp-border) last:border-0">
                  <td className="px-4 py-2 text-(--fp-muted-fg)">{r.level}.</td>
                  <td className="px-4 py-2">
                    <input className="fp-input" value={r.name} onChange={(e) => patchRank(r.level, { name: e.target.value })} aria-label={`${r.level}. szint neve`} />
                  </td>
                  <td className="px-4 py-2">
                    <input type="number" className="fp-input w-28" value={r.minPoints} disabled={r.level === 1} onChange={(e) => patchRank(r.level, { minPoints: Number(e.target.value) })} aria-label={`${r.level}. szint ponthatára`} />
                  </td>
                  <td className="px-4 py-2">
                    <select className="fp-input" value={r.privilege?.key ?? ""} onChange={(e) => patchRank(r.level, { privilege: e.target.value ? PRIVILEGES.find((p) => p.key === e.target.value) : undefined })} aria-label={`${r.level}. szint jogosultsága`}>
                      <option value="">— nincs —</option>
                      {PRIVILEGES.map((p) => (
                        <option key={p.key} value={p.key}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="px-4 py-3 text-xs text-(--fp-muted-fg)">A pontok: lecke +{config.points.lesson}, heti feladat +{config.points.task}, sorozat bónusz +{config.points.streakBonus}, poszt +{config.points.post}, hozzászólás +{config.points.comment}.</p>
        </Card>
      )}
    </div>
  );
}
