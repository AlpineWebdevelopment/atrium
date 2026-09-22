"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, FileText, ListTree, Lock, MessageCircle, Play, Sheet, X } from "lucide-react";
import { BASE } from "../data/config";
import { useStore } from "../lib/store";
import { lessonAccess } from "../lib/access";
import { findCourse, findLesson, flatLessons } from "../lib/courses";
import { relativeDays } from "../lib/dates";
import { useUpgrade } from "../ui/UpgradeModal";
import { AssistantChat } from "../ui/AssistantChat";
import { Curriculum } from "../ui/Curriculum";
import { Markdown } from "../ui/Markdown";
import { Avatar, Button, Card, Eyebrow, Modal, TierBadge } from "../ui/primitives";

function VideoPlaceholder({ title, durationMin }: { title: string; durationMin: number }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-(--fp-radius-xl) border border-(--fp-border) bg-black" role="img" aria-label={`Videó: ${title}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(220_20%_12%),hsl(220_20%_4%))]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-(--fp-gold-40) bg-(--fp-gold-10) text-(--fp-gold)">
          <Play size={24} className="ml-1" aria-hidden="true" />
        </span>
        <p className="fp-display max-w-md text-lg text-(--fp-fg) md:text-xl">{title}</p>
        <p className="text-xs text-(--fp-muted-fg)">{durationMin} perc</p>
      </div>
      <p className="absolute right-3 bottom-3 text-[10px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">Demo — itt a valódi videó jelenik meg</p>
    </div>
  );
}

const RES_ICON = { pdf: FileText, docx: FileText, xlsx: Sheet, link: FileText };

export default function Lecke({ courseSlug, lessonSlug }: { courseSlug: string; lessonSlug: string }) {
  const { courses, tiers, myTier, config, isLessonDone, completeLesson, uncompleteLesson, members, lessonComments, addLessonComment, me, hydrated } = useStore();
  const openUpgrade = useUpgrade();
  const [sidebar, setSidebar] = useState(false);
  const [ask, setAsk] = useState(false);
  const [comment, setComment] = useState("");

  const course = findCourse(courses, courseSlug);
  const hit = course ? findLesson(course, lessonSlug) : null;

  if (!course || !hit) {
    return (
      <div className="fp-container py-20 text-center">
        <h1 className="text-2xl">{hydrated ? "Ez a lecke nem található" : "Betöltés"}</h1>
        <Link href={`${BASE}/kurzusok`} className="mt-4 inline-block text-(--fp-gold) hover:underline">
          Vissza a kurzusokhoz
        </Link>
      </div>
    );
  }

  const { lesson, index, moduleIndex } = hit;
  const acc = lessonAccess(tiers, myTier, course, lesson, config.currentWeek, config.academyStart);
  const all = flatLessons(course);
  const prev = all[index - 1];
  const next = all[index + 1];
  const done = isLessonDone(course.slug, lesson.slug);
  const key = `${course.slug}/${lesson.slug}`;
  const comments = [...lesson.comments, ...(lessonComments[key] ?? [])];

  if (!acc.open) {
    return (
      <div className="fp-container py-20 text-center">
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-(--fp-border) text-(--fp-muted-fg)">
          <Lock size={20} aria-hidden="true" />
        </span>
        <h1 className="text-2xl md:text-3xl">{lesson.title}</h1>
        {acc.reason === "drip" ? (
          <p className="mx-auto mt-3 max-w-md text-(--fp-muted-fg)">
            {acc.dripLabel}. A leckék hétről hétre nyílnak meg, hogy legyen időd a heti feladatra is.
          </p>
        ) : (
          <>
            <p className="mx-auto mt-3 max-w-md text-(--fp-muted-fg)">
              Ez a lecke a(z) <strong className="text-(--fp-fg)">{tiers.find((t) => t.id === acc.requiredTier)?.name}</strong> szinten érhető el.
            </p>
            <Button className="mt-6" onClick={() => openUpgrade(acc.requiredTier)}>
              Mit ad ez a szint
            </Button>
          </>
        )}
        <Link href={`${BASE}/kurzusok/${course.slug}`} className="mt-6 block text-sm text-(--fp-gold) hover:underline">
          Vissza a kurzushoz
        </Link>
      </div>
    );
  }

  const sidebarBody = (
    <Card className="overflow-hidden">
      <div className="border-b border-(--fp-border) px-3 py-3">
        <Link href={`${BASE}/kurzusok/${course.slug}`} className="text-xs text-(--fp-muted-fg) hover:text-(--fp-gold)">
          ← {course.title}
        </Link>
      </div>
      <Curriculum course={course} activeSlug={lesson.slug} compact />
    </Card>
  );

  return (
    <div className="fp-container py-6 md:py-8">
      <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
        <Button variant="outline" size="sm" onClick={() => setSidebar(true)}>
          <ListTree size={14} aria-hidden="true" /> Tanterv
        </Button>
        <span className="text-xs text-(--fp-muted-fg)">
          {index + 1} / {all.length}
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-10">
        <aside className="hidden lg:sticky lg:top-20 lg:block lg:self-start">{sidebarBody}</aside>

        <article className="min-w-0">
          <Eyebrow className="mb-2">
            {moduleIndex + 1}. modul · {course.modules[moduleIndex]!.title}
          </Eyebrow>
          <h1 className="mb-5 text-2xl md:text-3xl">{lesson.title}</h1>

          <VideoPlaceholder title={lesson.title} durationMin={lesson.durationMin} />

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button variant={done ? "outline" : "primary"} onClick={() => (done ? uncompleteLesson(course.slug, lesson.slug) : completeLesson(course.slug, lesson.slug))} aria-pressed={done}>
              <Check size={16} aria-hidden="true" />
              {done ? "Késznek jelölve" : "Megjelölöm késznek"}
            </Button>
            <Button variant="outline" onClick={() => setAsk(true)}>
              <MessageCircle size={16} aria-hidden="true" /> Kérdezz Pétertől
            </Button>
            <span className="ml-auto flex items-center gap-2 text-xs text-(--fp-muted-fg)">
              <TierBadge tier={lesson.tier ?? course.tier} /> {lesson.releaseWeek}. hét
            </span>
          </div>

          <div className="mt-8">
            <Markdown text={lesson.text} />
          </div>

          {lesson.resources.length > 0 && (
            <section className="mt-10">
              <Eyebrow className="mb-3">Letölthető anyagok</Eyebrow>
              <ul className="grid gap-2 sm:grid-cols-2">
                {lesson.resources.map((r) => {
                  const Icon = RES_ICON[r.kind];
                  return (
                    <li key={r.label}>
                      <button type="button" className="fp-card fp-card--hover flex w-full items-center gap-3 px-4 py-3 text-left text-sm" title="Demó — a letöltés a valódi verzióban működik">
                        <Icon size={18} className="flex-none text-(--fp-gold)" aria-hidden="true" />
                        <span className="min-w-0 flex-1 truncate">{r.label}</span>
                        <span className="flex-none text-xs uppercase text-(--fp-muted-fg)">
                          {r.kind}
                          {r.size ? ` · ${r.size}` : ""}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          <nav className="mt-10 grid gap-3 border-t border-(--fp-border) pt-6 sm:grid-cols-2" aria-label="Leckék között">
            {prev ? (
              <Link href={`${BASE}/kurzusok/${course.slug}/${prev.slug}`} className="fp-card fp-card--hover flex items-center gap-3 p-4 text-sm">
                <ChevronLeft size={16} className="flex-none text-(--fp-muted-fg)" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">Előző</span>
                  <span className="block truncate">{prev.title}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link href={`${BASE}/kurzusok/${course.slug}/${next.slug}`} className="fp-card fp-card--hover flex items-center justify-end gap-3 p-4 text-right text-sm">
                <span className="min-w-0">
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">Következő</span>
                  <span className="block truncate">{next.title}</span>
                </span>
                <ChevronRight size={16} className="flex-none text-(--fp-muted-fg)" aria-hidden="true" />
              </Link>
            )}
          </nav>

          <section className="mt-12">
            <Eyebrow className="mb-4">Hozzászólások · {comments.length}</Eyebrow>
            <ul className="space-y-5">
              {comments.map((c) => {
                const m = members.find((x) => x.id === c.memberId);
                return (
                  <li key={c.id} className="flex gap-3">
                    <Avatar member={m} size={36} />
                    <div className="min-w-0">
                      <p className="text-sm">
                        <span className={m?.isMentor ? "text-(--fp-gold)" : ""}>{m?.name ?? "Tag"}</span>
                        <span className="ml-2 text-xs text-(--fp-muted-fg)">{relativeDays(c.daysAgo)}</span>
                      </p>
                      <p className="mt-1 text-sm text-(--fp-fg-90)">{c.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            {me && (
              <form
                className="mt-6 flex gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!comment.trim()) return;
                  addLessonComment(course.slug, lesson.slug, comment.trim());
                  setComment("");
                }}
              >
                <Avatar member={me} size={36} />
                <div className="flex-1">
                  <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="fp-input" rows={2} placeholder="Mire jutottál ezzel a leckével" aria-label="Hozzászólás" />
                  <div className="mt-2 flex justify-end">
                    <Button size="sm" disabled={!comment.trim()} type="submit">
                      Hozzászólok
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </section>
        </article>
      </div>

      <Modal open={sidebar} onClose={() => setSidebar(false)} title="Tanterv">
        <div className="-mx-2">
          <Curriculum course={course} activeSlug={lesson.slug} compact />
        </div>
      </Modal>

      {ask && (
        <div className="fixed inset-0 z-[65] flex justify-end bg-black/50" onClick={() => setAsk(false)}>
          <aside className="fp-slide-right flex h-full w-full max-w-md flex-col border-l border-(--fp-border) bg-(--fp-bg) p-4 sm:p-5" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Kérdezz Pétertől">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-lg">Kérdezz Pétertől</h2>
              <button type="button" onClick={() => setAsk(false)} aria-label="Bezárás" className="rounded p-1 text-(--fp-muted-fg) hover:text-(--fp-fg)">
                <X size={18} />
              </button>
            </div>
            <AssistantChat compact contextLesson={{ courseSlug: course.slug, lessonSlug: lesson.slug, title: lesson.title }} />
          </aside>
        </div>
      )}
    </div>
  );
}
