"use client";

import { useState } from "react";
import { useStore } from "../lib/store";
import { flatLessons } from "../lib/courses";
import { formatShort, weekStart } from "../lib/dates";
import { Button, Card, Field, PageHeader } from "../ui/primitives";

export default function AdminFeladatok() {
  const { tasks, setTasks, config, updateConfig, courses } = useStore();
  const [editing, setEditing] = useState<number | null>(null);
  const lessonOptions = courses.flatMap((c) => flatLessons(c).map((l) => ({ value: `${c.slug}/${l.slug}`, label: `${c.title.split(" — ")[0]} · ${l.title}` })));

  return (
    <div>
      <PageHeader eyebrow="Tervező" title="Heti feladatok" lead="52 feladat, egy-egy sor hetente. Az aktuális hetet itt állítod." />

      <Card className="mb-6 flex flex-wrap items-center gap-4 p-4">
        <label className="flex items-center gap-3 text-sm">
          Aktuális hét
          <input type="number" min={1} max={52} className="fp-input w-20" value={config.currentWeek} onChange={(e) => updateConfig({ currentWeek: Math.min(52, Math.max(1, Number(e.target.value))) })} />
        </label>
        <span className="text-xs text-(--fp-muted-fg)">A hét hétfője: {formatShort(weekStart(config.academyStart, config.currentWeek))}. Ez mozgatja a kiadást, a naptárat és a heti feladatot is.</span>
      </Card>

      <Card className="overflow-hidden">
        <ol className="divide-y divide-(--fp-border)">
          {tasks.map((t) => {
            const current = t.week === config.currentWeek;
            const open = editing === t.week;
            return (
              <li key={t.week} className={`${current ? "bg-(--fp-gold-10)" : ""}`}>
                <div className="flex items-center gap-4 px-4 py-2.5">
                  <span className={`w-14 flex-none text-xs ${current ? "text-(--fp-gold)" : "text-(--fp-muted-fg)"}`}>{t.week}. hét</span>
                  <span className="min-w-0 flex-1 truncate text-sm">{t.title}</span>
                  {t.lesson && <span className="hidden flex-none text-xs text-(--fp-muted-fg) lg:inline">lecke: {t.lesson.lessonSlug}</span>}
                  {!current && (
                    <Button variant="ghost" size="sm" onClick={() => updateConfig({ currentWeek: t.week })}>
                      Aktuális
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => setEditing(open ? null : t.week)}>
                    {open ? "Kész" : "Szerkeszt"}
                  </Button>
                </div>
                {open && (
                  <div className="fp-fade grid gap-3 border-t border-(--fp-border) px-4 py-4 sm:grid-cols-2">
                    <Field label="Cím">
                      <input className="fp-input" value={t.title} onChange={(e) => setTasks(tasks.map((x) => (x.week === t.week ? { ...x, title: e.target.value } : x)))} />
                    </Field>
                    <Field label="Kapcsolódó lecke">
                      <select
                        className="fp-input"
                        value={t.lesson ? `${t.lesson.courseSlug}/${t.lesson.lessonSlug}` : ""}
                        onChange={(e) => {
                          const [courseSlug, lessonSlug] = e.target.value.split("/");
                          setTasks(tasks.map((x) => (x.week === t.week ? { ...x, lesson: e.target.value ? { courseSlug: courseSlug!, lessonSlug: lessonSlug! } : undefined } : x)));
                        }}
                      >
                        <option value="">— nincs —</option>
                        {lessonOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Szöveg">
                        <textarea className="fp-input" rows={3} value={t.text} onChange={(e) => setTasks(tasks.map((x) => (x.week === t.week ? { ...x, text: e.target.value } : x)))} />
                      </Field>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </Card>
    </div>
  );
}
