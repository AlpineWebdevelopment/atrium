"use client";

import { useState } from "react";
import { useStore } from "../lib/store";
import { flatLessons } from "../lib/courses";
import { formatShort, weekStart } from "../lib/dates";
import { Card, PageHeader } from "../ui/primitives";

/* The 52-week drip grid: one column per week, one row per course, a cell for
   every lesson that opens that week. It doubles as the planning tool before
   filming — an empty column is a week nobody has planned yet. */
export default function AdminKiadas() {
  const { courses, config, updateConfig, setCourses } = useStore();
  const [sel, setSel] = useState<{ course: string; lesson: string } | null>(null);
  const weeks = Array.from({ length: 52 }, (_, i) => i + 1);
  const cur = config.currentWeek;

  const selected = sel ? courses.find((c) => c.slug === sel.course) : null;
  const selLesson = selected ? flatLessons(selected).find((l) => l.slug === sel!.lesson) : null;

  const moveLesson = (week: number) => {
    if (!sel) return;
    setCourses(courses.map((c) => (c.slug === sel.course ? { ...c, modules: c.modules.map((m) => ({ ...m, lessons: m.lessons.map((l) => (l.slug === sel.lesson ? { ...l, releaseWeek: week } : l)) })) } : c)));
  };

  const perWeek = weeks.map((w) => courses.reduce((s, c) => s + flatLessons(c).filter((l) => l.releaseWeek === w).length, 0));
  const empty = perWeek.filter((n) => n === 0).length;

  return (
    <div>
      <PageHeader eyebrow="Csepegtetés" title="Kiadás" lead={`52 hét, ${courses.reduce((s, c) => s + flatLessons(c).length, 0)} lecke. ${empty} hétre még nincs tervezve semmi.`} />

      <Card className="mb-5 flex flex-wrap items-center gap-4 p-4">
        <label className="flex items-center gap-3 text-sm">
          Aktuális hét
          <input type="number" min={1} max={52} className="fp-input w-20" value={cur} onChange={(e) => updateConfig({ currentWeek: Math.min(52, Math.max(1, Number(e.target.value))) })} />
        </label>
        <input type="range" min={1} max={52} value={cur} onChange={(e) => updateConfig({ currentWeek: Number(e.target.value) })} className="w-64 accent-(--fp-gold)" aria-label="Aktuális hét" />
        <span className="text-xs text-(--fp-muted-fg)">{formatShort(weekStart(config.academyStart, cur))}</span>
        {selLesson && (
          <span className="ml-auto flex items-center gap-3 text-sm">
            <span className="truncate">
              Kijelölve: <strong>{selLesson.title}</strong> ({selLesson.releaseWeek}. hét)
            </span>
            <label className="flex items-center gap-2 text-xs">
              Áthelyez
              <input type="number" min={1} max={52} className="fp-input w-20" value={selLesson.releaseWeek} onChange={(e) => moveLesson(Math.min(52, Math.max(1, Number(e.target.value))))} />
            </label>
            <button type="button" className="text-xs text-(--fp-muted-fg) hover:text-(--fp-fg)" onClick={() => setSel(null)}>
              Elenged
            </button>
          </span>
        )}
      </Card>

      <Card className="overflow-x-auto">
        <table className="text-xs" style={{ minWidth: 52 * 34 + 200 }}>
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-(--fp-card) px-3 py-2 text-left font-medium text-(--fp-muted-fg)">Kurzus</th>
              {weeks.map((w) => (
                <th key={w} className={`w-[34px] px-0 py-2 text-center font-medium ${w === cur ? "text-(--fp-gold)" : w < cur ? "text-(--fp-muted-fg)" : "text-(--fp-muted-fg)/60"}`}>
                  {w}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.slug} className="border-t border-(--fp-border)">
                <th className="sticky left-0 z-10 max-w-[200px] truncate bg-(--fp-card) px-3 py-2 text-left font-normal" title={c.title}>
                  {c.title}
                </th>
                {weeks.map((w) => {
                  const ls = flatLessons(c).filter((l) => l.releaseWeek === w);
                  return (
                    <td key={w} className={`h-9 border-l border-(--fp-border)/60 px-0.5 align-middle ${w === cur ? "bg-(--fp-gold-10)" : w < cur ? "" : "bg-(--fp-secondary)/30"}`}>
                      <div className="flex flex-col items-center gap-0.5">
                        {ls.map((l) => {
                          const on = sel?.course === c.slug && sel?.lesson === l.slug;
                          return (
                            <button
                              key={l.slug}
                              type="button"
                              title={`${l.title} · ${w}. hét`}
                              onClick={() => setSel(on ? null : { course: c.slug, lesson: l.slug })}
                              aria-pressed={on}
                              className={`h-2.5 w-6 rounded-sm transition-colors ${on ? "bg-(--fp-fg)" : w <= cur ? "bg-(--fp-gold)" : "bg-(--fp-gold-40) hover:bg-(--fp-gold)"}`}
                            />
                          );
                        })}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr className="border-t border-(--fp-border) text-(--fp-muted-fg)">
              <th className="sticky left-0 z-10 bg-(--fp-card) px-3 py-2 text-left font-normal">Összesen</th>
              {perWeek.map((n, i) => (
                <td key={i} className="text-center">
                  {n || ""}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </Card>
      <p className="mt-3 text-xs text-(--fp-muted-fg)">Kattints egy leckére, és írd át a hetét. Arany: már megnyílt. Halvány: még jön.</p>
    </div>
  );
}
