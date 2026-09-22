"use client";

import Link from "next/link";
import { Check, Flame, Link2 } from "lucide-react";
import { BASE } from "../data/config";
import { useStore } from "../lib/store";
import { nextPrivilege } from "../lib/access";
import { lessonTitle } from "../lib/courses";
import { formatShort, weekStart } from "../lib/dates";
import { Avatar, Card, Eyebrow, PageHeader } from "../ui/primitives";

/* One task a week. The page is a habit, not a to-do app: the current task,
   the streak, the last eight weeks. Completing one moves points and rank. */
export default function Feladatok() {
  const { tasks, config, isTaskDone, completeTask, uncompleteTask, myStreak, myPoints, ranks, members, courses, myProgress } = useStore();
  const week = config.currentWeek;
  const task = tasks.find((t) => t.week === week);
  const done = isTaskDone(week);
  const peter = members.find((m) => m.isMentor);
  const priv = nextPrivilege(ranks, myPoints);
  const history = Array.from({ length: 8 }, (_, i) => week - 7 + i).filter((w) => w >= 1);
  const strip = Array.from({ length: 12 }, (_, i) => week - 11 + i);
  const totalDone = myProgress.taskWeeksDone.length;

  return (
    <div className="fp-container py-8 md:py-10">
      <PageHeader eyebrow={`${week}. hét · ${formatShort(weekStart(config.academyStart, week))}`} title="Heti feladat" lead="Egy dolog, amit ezen a héten megcsinálsz. Rövid, konkrét, és nyomot hagy a cégedben." />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          {task ? (
            <Card className={`p-6 md:p-8 ${done ? "border-(--fp-gold-30)" : ""}`}>
              <div className="flex items-start gap-4">
                <Avatar member={peter} size={44} />
                <div className="min-w-0 flex-1">
                  <Eyebrow className="mb-1 text-[10px]">Pétertől · ezen a héten</Eyebrow>
                  <h2 className="text-xl md:text-2xl">{task.title}</h2>
                  <p className="mt-3 text-(--fp-fg-90)">{task.text}</p>
                  {task.lesson && (
                    <Link href={`${BASE}/kurzusok/${task.lesson.courseSlug}/${task.lesson.lessonSlug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm text-(--fp-gold) hover:underline">
                      <Link2 size={14} aria-hidden="true" />
                      Kapcsolódó lecke: {lessonTitle(courses, task.lesson.courseSlug, task.lesson.lessonSlug)}
                    </Link>
                  )}
                </div>
              </div>

              <label className={`mt-6 flex cursor-pointer items-center gap-4 rounded-(--fp-radius) border p-4 transition-colors ${done ? "border-(--fp-gold-40) bg-(--fp-gold-10)" : "border-(--fp-border) hover:border-(--fp-gold-30)"}`}>
                <input type="checkbox" className="sr-only" checked={done} onChange={(e) => (e.target.checked ? completeTask(week) : uncompleteTask(week))} />
                <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border-2 transition-colors ${done ? "border-(--fp-gold) bg-(--fp-gold) text-(--fp-gold-fg)" : "border-(--fp-border)"}`} aria-hidden="true">
                  {done && <Check size={16} strokeWidth={3} />}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-medium">{done ? "Kész" : "Megcsináltam"}</span>
                  <span className="block text-xs text-(--fp-muted-fg)">{done ? `+${config.points.task} pont jóváírva` : `+${config.points.task} pont, és a sorozatod folytatódik`}</span>
                </span>
              </label>
            </Card>
          ) : (
            <Card className="p-6 text-(--fp-muted-fg)">Erre a hétre még nincs feladat.</Card>
          )}

          <section>
            <Eyebrow className="mb-3">Az elmúlt hetek</Eyebrow>
            <ol className="space-y-2">
              {history
                .slice()
                .reverse()
                .map((w) => {
                  const t = tasks.find((x) => x.week === w);
                  if (!t) return null;
                  const d = isTaskDone(w);
                  const current = w === week;
                  return (
                    <li key={w}>
                      <Card className={`flex items-center gap-4 px-4 py-3 ${current ? "border-(--fp-gold-30)" : ""}`}>
                        <button
                          type="button"
                          onClick={() => (d ? uncompleteTask(w) : completeTask(w))}
                          aria-pressed={d}
                          aria-label={`${w}. hét: ${t.title} — ${d ? "kész" : "nincs kész"}`}
                          className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border transition-colors ${d ? "border-(--fp-gold) bg-(--fp-gold) text-(--fp-gold-fg)" : "border-(--fp-border) hover:border-(--fp-gold-40)"}`}
                        >
                          {d && <Check size={13} strokeWidth={3} />}
                        </button>
                        <span className="w-12 flex-none text-xs text-(--fp-muted-fg)">{w}. hét</span>
                        <span className={`min-w-0 flex-1 truncate text-sm ${d ? "" : "text-(--fp-muted-fg)"}`}>{t.title}</span>
                        {current && <span className="flex-none text-[10px] uppercase tracking-[0.15em] text-(--fp-gold)">most</span>}
                      </Card>
                    </li>
                  );
                })}
            </ol>
          </section>
        </div>

        <aside className="space-y-5">
          <Card className="p-5">
            <div className="flex items-center justify-between">
              <Eyebrow className="text-[10px]">Sorozat</Eyebrow>
              <Flame size={16} className={myStreak > 0 ? "text-(--fp-gold)" : "text-(--fp-muted-fg)"} aria-hidden="true" />
            </div>
            <p className="fp-display mt-1 text-4xl">
              {myStreak} <span className="text-lg text-(--fp-muted-fg)">hét</span>
            </p>
            <p className="mt-1 text-xs text-(--fp-muted-fg)">{myStreak === 0 ? "Ezen a héten kezdd újra." : done ? "Ezen a héten is megvan." : "Ezen a héten még nyitott."}</p>
            <div className="mt-4 flex gap-1" aria-label="Az elmúlt 12 hét">
              {strip.map((w) => {
                const valid = w >= 1;
                const d = valid && isTaskDone(w);
                return (
                  <span
                    key={w}
                    title={valid ? `${w}. hét` : ""}
                    className={`h-6 flex-1 rounded-sm ${!valid ? "bg-transparent" : d ? "bg-(--fp-gold)" : w === week ? "border border-dashed border-(--fp-gold-40)" : "bg-(--fp-secondary)"}`}
                  />
                );
              })}
            </div>
            <p className="mt-3 text-xs text-(--fp-muted-fg)">Összesen {totalDone} feladat kész.</p>
          </Card>

          <Card className="p-5">
            <Eyebrow className="mb-1 text-[10px]">Pontok</Eyebrow>
            <p className="fp-display text-3xl">{myPoints}</p>
            {priv && (
              <p className="mt-2 text-sm text-(--fp-muted-fg)">
                Még <strong className="text-(--fp-fg)">{priv.pointsNeeded} pont</strong> a(z) {priv.rank.level}. szintig — akkor {priv.rank.privilege!.label}.
              </p>
            )}
          </Card>

          <Card className="p-5 text-sm text-(--fp-muted-fg)">
            A heti feladat minden szinten ugyanaz. Egy sorozathét után {config.points.streakBonus} pont bónusz jár a következő feladat mellé.
          </Card>
        </aside>
      </div>
    </div>
  );
}
