"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, ChevronDown, Clock, Lock, Play } from "lucide-react";
import { BASE } from "../data/config";
import type { Course } from "../data/types";
import { useStore } from "../lib/store";
import { lessonAccess } from "../lib/access";
import { useUpgrade } from "./UpgradeModal";

/* The module → lesson accordion, shared by the course page and the lesson
   sidebar. Each row knows whether it's done, open, drip-locked or tier-locked. */
export function Curriculum({ course, activeSlug, compact = false }: { course: Course; activeSlug?: string; compact?: boolean }) {
  const { tiers, myTier, config, isLessonDone } = useStore();
  const openUpgrade = useUpgrade();
  const activeModule = course.modules.findIndex((m) => m.lessons.some((l) => l.slug === activeSlug));
  const [open, setOpen] = useState<Set<number>>(() => new Set(activeModule >= 0 ? [activeModule] : compact ? [0] : course.modules.map((_, i) => i)));

  const toggle = (i: number) =>
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  return (
    <div className="divide-y divide-(--fp-border)">
      {course.modules.map((m, mi) => {
        const isOpen = open.has(mi);
        const done = m.lessons.filter((l) => isLessonDone(course.slug, l.slug)).length;
        return (
          <div key={m.id}>
            <button
              type="button"
              onClick={() => toggle(mi)}
              aria-expanded={isOpen}
              className={`flex w-full items-center justify-between gap-3 text-left ${compact ? "px-3 py-2.5" : "py-4"}`}
            >
              <span>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">{mi + 1}. modul</span>
                <span className={`block ${compact ? "text-sm" : "fp-display text-base"}`}>{m.title}</span>
              </span>
              <span className="flex flex-none items-center gap-3 text-xs text-(--fp-muted-fg)">
                {done}/{m.lessons.length}
                <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
              </span>
            </button>
            {isOpen && (
              <ol className={`fp-fade ${compact ? "pb-2" : "pb-4"}`}>
                {m.lessons.map((l) => {
                  const acc = lessonAccess(tiers, myTier, course, l, config.currentWeek, config.academyStart);
                  const done = isLessonDone(course.slug, l.slug);
                  const active = l.slug === activeSlug;
                  const cls = `flex items-center gap-3 rounded-(--fp-radius-md) ${compact ? "px-3 py-2 text-[13px]" : "px-3 py-2.5 text-sm"} ${
                    active ? "bg-(--fp-gold-10) text-(--fp-fg)" : acc.open ? "hover:bg-(--fp-secondary)" : "text-(--fp-muted-fg)"
                  }`;
                  const icon = done ? (
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-(--fp-gold) text-(--fp-gold-fg)">
                      <Check size={12} strokeWidth={3} aria-label="kész" />
                    </span>
                  ) : acc.open ? (
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full border border-(--fp-border)">
                      <Play size={9} className="ml-px" aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full border border-(--fp-border)">
                      <Lock size={10} aria-hidden="true" />
                    </span>
                  );
                  const meta = (
                    <span className="ml-auto flex flex-none items-center gap-1 text-xs text-(--fp-muted-fg)">
                      {acc.reason === "drip" ? (
                        <span className="text-right">{acc.dripLabel}</span>
                      ) : acc.reason === "tier" ? (
                        <span>{tiers.find((t) => t.id === acc.requiredTier)?.name}</span>
                      ) : (
                        <>
                          <Clock size={12} aria-hidden="true" /> {l.durationMin} perc
                        </>
                      )}
                    </span>
                  );
                  if (acc.open) {
                    return (
                      <li key={l.slug}>
                        <Link href={`${BASE}/kurzusok/${course.slug}/${l.slug}`} className={cls} aria-current={active ? "page" : undefined}>
                          {icon}
                          <span className="min-w-0 flex-1 truncate">{l.title}</span>
                          {meta}
                        </Link>
                      </li>
                    );
                  }
                  if (acc.reason === "tier") {
                    return (
                      <li key={l.slug}>
                        <button type="button" onClick={() => openUpgrade(acc.requiredTier)} className={`${cls} w-full text-left`}>
                          {icon}
                          <span className="min-w-0 flex-1 truncate">{l.title}</span>
                          {meta}
                        </button>
                      </li>
                    );
                  }
                  return (
                    <li key={l.slug} className={`${cls} cursor-default`}>
                      {icon}
                      <span className="min-w-0 flex-1 truncate">{l.title}</span>
                      {meta}
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        );
      })}
    </div>
  );
}
