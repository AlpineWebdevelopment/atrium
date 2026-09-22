"use client";

import Link from "next/link";
import { Check, Clock, Layers } from "lucide-react";
import { BASE } from "../data/config";
import { TRACK_LABEL } from "../data/courses";
import { useStore } from "../lib/store";
import { courseLocked, lessonAccess } from "../lib/access";
import { courseDuration, courseProgress, findCourse, flatLessons, instructorOf } from "../lib/courses";
import { formatDuration } from "../lib/dates";
import { useUpgrade } from "../ui/UpgradeModal";
import { CourseCover } from "../ui/CourseCover";
import { Curriculum } from "../ui/Curriculum";
import { Avatar, Badge, Button, Card, Eyebrow, LinkButton, ProgressBar, TierBadge } from "../ui/primitives";

export default function Kurzus({ courseSlug }: { courseSlug: string }) {
  const { courses, tiers, myTier, config, isLessonDone, members, hydrated } = useStore();
  const openUpgrade = useUpgrade();
  const course = findCourse(courses, courseSlug);

  if (!course) {
    return (
      <div className="fp-container py-20 text-center">
        <h1 className="text-2xl">{hydrated ? "Ez a kurzus nem található" : "Betöltés"}</h1>
        <Link href={`${BASE}/kurzusok`} className="mt-4 inline-block text-(--fp-gold) hover:underline">
          Vissza a kurzusokhoz
        </Link>
      </div>
    );
  }

  const locked = courseLocked(tiers, myTier, course);
  const inst = instructorOf(course);
  const prog = courseProgress(course, isLessonDone);
  const all = flatLessons(course);
  const next = all.find((l) => !isLessonDone(course.slug, l.slug) && lessonAccess(tiers, myTier, course, l, config.currentWeek, config.academyStart).open);
  const peter = members.find((m) => m.isMentor);

  return (
    <div className="fp-container py-8 md:py-10">
      <Link href={`${BASE}/kurzusok`} className="text-sm text-(--fp-muted-fg) hover:text-(--fp-gold)">
        ← Kurzusok
      </Link>

      <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
        <div>
          <Eyebrow className="mb-3">{TRACK_LABEL[course.track]}</Eyebrow>
          <h1 className="text-3xl md:text-4xl">{course.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-(--fp-muted-fg)">
            <TierBadge tier={course.tier} locked={locked} />
            <span className="inline-flex items-center gap-1">
              <Layers size={14} aria-hidden="true" /> {course.modules.length} modul · {all.length} lecke
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={14} aria-hidden="true" /> {formatDuration(courseDuration(course))}
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-(--fp-fg-90)">{course.description}</p>

          <section className="mt-10">
            <Eyebrow className="mb-4">Mit viszel magaddal</Eyebrow>
            <ul className="grid gap-3 sm:grid-cols-2">
              {course.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm">
                  <Check size={16} className="mt-0.5 flex-none text-(--fp-gold)" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <Eyebrow className="mb-4">Tanterv</Eyebrow>
            <Card className="px-4">
              <Curriculum course={course} />
            </Card>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
          <Card className="overflow-hidden">
            <CourseCover course={course} className="aspect-[16/9]" />
            <div className="p-5">
              {locked ? (
                <>
                  <p className="text-sm text-(--fp-muted-fg)">
                    Ez a kurzus a(z) <strong className="text-(--fp-fg)">{tiers.find((t) => t.id === course.tier)?.name}</strong> szinten érhető el.
                  </p>
                  <Button className="mt-4 w-full" onClick={() => openUpgrade(course.tier)}>
                    Mit ad ez a szint
                  </Button>
                </>
              ) : (
                <>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>
                      {prog.done} / {prog.total} lecke
                    </span>
                    <span className="text-(--fp-muted-fg)">{Math.round(prog.ratio * 100)}%</span>
                  </div>
                  <ProgressBar value={prog.ratio} />
                  {next ? (
                    <LinkButton href={`${BASE}/kurzusok/${course.slug}/${next.slug}`} className="mt-5 w-full">
                      {prog.done === 0 ? "Kezdés" : "Folytatás"}
                    </LinkButton>
                  ) : prog.done === prog.total ? (
                    <p className="mt-5 text-center text-sm text-(--fp-gold)">Minden leckét befejeztél</p>
                  ) : (
                    <p className="mt-5 text-center text-sm text-(--fp-muted-fg)">A következő lecke még nem nyílt meg</p>
                  )}
                  {next && <p className="mt-2 truncate text-center text-xs text-(--fp-muted-fg)">Következő: {next.title}</p>}
                </>
              )}
            </div>
          </Card>

          <Card className="p-5">
            <Eyebrow className="mb-3 text-[10px]">Oktató</Eyebrow>
            <div className="flex items-start gap-3">
              <Avatar member={inst.isGuest ? undefined : peter} size={48} />
              <div>
                <p className="fp-display text-base">{inst.name}</p>
                <p className="text-xs text-(--fp-muted-fg)">{inst.title}</p>
                {inst.isGuest && (
                  <Badge tone="outline" className="mt-2">
                    Vendégoktató
                  </Badge>
                )}
              </div>
            </div>
            <p className="mt-3 text-sm text-(--fp-muted-fg)">{inst.bio}</p>
          </Card>
        </aside>
      </div>
    </div>
  );
}
