"use client";

import Link from "next/link";
import { Clock, Layers, Lock } from "lucide-react";
import { BASE } from "../data/config";
import { TRACK_LABEL } from "../data/courses";
import type { Course, Track } from "../data/types";
import { useStore } from "../lib/store";
import { courseLocked } from "../lib/access";
import { courseDuration, courseProgress, instructorOf } from "../lib/courses";
import { formatDuration } from "../lib/dates";
import { useUpgrade } from "../ui/UpgradeModal";
import { CourseCover } from "../ui/CourseCover";
import { Badge, Card, Eyebrow, PageHeader, ProgressRing, TierBadge } from "../ui/primitives";

function CourseCard({ course }: { course: Course }) {
  const { tiers, myTier, isLessonDone } = useStore();
  const openUpgrade = useUpgrade();
  const locked = courseLocked(tiers, myTier, course);
  const inst = instructorOf(course);
  const prog = courseProgress(course, isLessonDone);
  const lessons = course.modules.reduce((s, m) => s + m.lessons.length, 0);

  const inner = (
    <>
      <CourseCover course={course} className={`aspect-[16/9] rounded-t-(--fp-radius-xl) ${locked ? "opacity-40 grayscale-[0.4]" : ""}`} />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <TierBadge tier={course.tier} locked={locked} />
          {inst.isGuest && <Badge tone="outline">Vendégoktató</Badge>}
        </div>
        <h2 className={`text-lg leading-snug ${locked ? "text-(--fp-muted-fg)" : ""}`}>{course.title}</h2>
        <p className="mt-1 text-sm text-(--fp-muted-fg)">{inst.name}</p>
        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-(--fp-muted-fg)">
            <span className="inline-flex items-center gap-1">
              <Layers size={13} aria-hidden="true" /> {course.modules.length} modul · {lessons} lecke
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={13} aria-hidden="true" /> {formatDuration(courseDuration(course))}
            </span>
          </div>
          {locked ? (
            <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full border border-(--fp-border) text-(--fp-muted-fg)">
              <Lock size={16} aria-hidden="true" />
            </span>
          ) : (
            <ProgressRing value={prog.ratio} />
          )}
        </div>
      </div>
    </>
  );

  if (locked) {
    return (
      <Card as="li" hover className="flex flex-col">
        <button type="button" onClick={() => openUpgrade(course.tier)} className="flex h-full w-full flex-col text-left" aria-label={`${course.title} — zárolt, ${tiers.find((t) => t.id === course.tier)?.name} szinten elérhető`}>
          {inner}
        </button>
      </Card>
    );
  }
  return (
    <Card as="li" hover className="flex flex-col">
      <Link href={`${BASE}/kurzusok/${course.slug}`} className="flex h-full flex-col">
        {inner}
      </Link>
    </Card>
  );
}

export default function Kurzusok() {
  const { courses, tiers, myTier, isLessonDone } = useStore();
  const tracks: Track[] = ["vallalkozoi", "onismereti", "elo"];

  const cont = courses
    .filter((c) => !courseLocked(tiers, myTier, c))
    .map((c) => ({ c, p: courseProgress(c, isLessonDone) }))
    .filter((x) => x.p.done > 0 && x.p.done < x.p.total)
    .sort((a, b) => b.p.ratio - a.p.ratio)[0];

  return (
    <div className="fp-container py-8 md:py-10">
      <PageHeader eyebrow="Tanterem" title="Kurzusok" lead="Hetente egy lecke. A tananyag hétről hétre nyílik meg, hogy legyen időd megcsinálni is, ne csak megnézni." />

      {cont && (
        <Link href={`${BASE}/kurzusok/${cont.c.slug}`} className="fp-card fp-card--hover mb-10 flex items-center gap-4 p-4 sm:gap-6">
          <CourseCover course={cont.c} size="sm" className="hidden h-16 w-28 flex-none rounded-(--fp-radius) sm:flex" />
          <div className="min-w-0 flex-1">
            <Eyebrow className="mb-1 text-[10px]">Folytatás</Eyebrow>
            <p className="truncate text-base">{cont.c.title}</p>
            <p className="text-xs text-(--fp-muted-fg)">
              {cont.p.done} / {cont.p.total} lecke kész
            </p>
          </div>
          <ProgressRing value={cont.p.ratio} size={40} />
        </Link>
      )}

      {tracks.map((t) => {
        const list = courses.filter((c) => c.track === t);
        if (!list.length) return null;
        return (
          <section key={t} className="mb-12">
            <Eyebrow className="mb-4">{TRACK_LABEL[t]}</Eyebrow>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((c) => (
                <CourseCard key={c.slug} course={c} />
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
