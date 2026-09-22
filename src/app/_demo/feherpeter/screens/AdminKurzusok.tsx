"use client";

import { useState } from "react";
import { ChevronDown, Plus, Trash2 } from "lucide-react";
import { INSTRUCTORS, TRACK_LABEL } from "../data/courses";
import type { Course, CourseModule, Lesson, TierId, Track } from "../data/types";
import { useStore } from "../lib/store";
import { flatLessons } from "../lib/courses";
import { uid } from "../lib/ids";
import { CourseCover } from "../ui/CourseCover";
import { Button, Card, Field, PageHeader, TierBadge } from "../ui/primitives";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const COVERS = [
  ["hsl(220 40% 15%)", "hsl(220 30% 9%)"],
  ["hsl(30 30% 20%)", "hsl(30 25% 9%)"],
  ["hsl(40 45% 22%)", "hsl(35 35% 9%)"],
  ["hsl(200 30% 18%)", "hsl(215 30% 8%)"],
  ["hsl(150 18% 16%)", "hsl(180 20% 7%)"],
];

function LessonEditor({ lesson, onChange, onDelete }: { lesson: Lesson; onChange: (l: Lesson) => void; onDelete: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <li className="rounded-(--fp-radius-md) border border-(--fp-border)">
      <div className="flex items-center gap-3 px-3 py-2">
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="flex min-w-0 flex-1 items-center gap-2 text-left text-sm">
          <ChevronDown size={14} className={`flex-none transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
          <span className="truncate">{lesson.title || "Névtelen lecke"}</span>
        </button>
        <span className="flex-none text-xs text-(--fp-muted-fg)">
          {lesson.durationMin} perc · {lesson.releaseWeek}. hét
        </span>
        <button type="button" onClick={onDelete} aria-label="Lecke törlése" className="rounded p-1 text-(--fp-muted-fg) hover:text-(--fp-danger)">
          <Trash2 size={14} />
        </button>
      </div>
      {open && (
        <div className="fp-fade grid gap-3 border-t border-(--fp-border) p-3 sm:grid-cols-3">
          <div className="sm:col-span-3">
            <Field label="Cím">
              <input className="fp-input" value={lesson.title} onChange={(e) => onChange({ ...lesson, title: e.target.value })} />
            </Field>
          </div>
          <Field label="Hossz (perc)">
            <input type="number" className="fp-input" value={lesson.durationMin} onChange={(e) => onChange({ ...lesson, durationMin: Number(e.target.value) })} />
          </Field>
          <Field label="Kiadás hete">
            <input type="number" min={1} max={52} className="fp-input" value={lesson.releaseWeek} onChange={(e) => onChange({ ...lesson, releaseWeek: Number(e.target.value) })} />
          </Field>
          <Field label="Anyagok (soronként)">
            <textarea className="fp-input" rows={2} value={lesson.resources.map((r) => r.label).join("\n")} onChange={(e) => onChange({ ...lesson, resources: e.target.value.split("\n").filter(Boolean).map((label) => ({ label, kind: "pdf" as const })) })} />
          </Field>
          <div className="sm:col-span-3">
            <Field label="Szöveg (markdown)">
              <textarea className="fp-input" rows={6} value={lesson.text} onChange={(e) => onChange({ ...lesson, text: e.target.value })} />
            </Field>
          </div>
        </div>
      )}
    </li>
  );
}

export default function AdminKurzusok() {
  const { courses, setCourses, tiers } = useStore();
  const [sel, setSel] = useState<string>(courses[0]?.slug ?? "");
  const course = courses.find((c) => c.slug === sel);
  const patch = (p: Partial<Course>) => course && setCourses(courses.map((c) => (c.slug === course.slug ? { ...c, ...p } : c)));
  const patchModule = (id: string, p: Partial<CourseModule>) => course && patch({ modules: course.modules.map((m) => (m.id === id ? { ...m, ...p } : m)) });

  const addCourse = () => {
    const n = courses.length + 1;
    const slug = `uj-kurzus-${n}`;
    const cover = COVERS[n % COVERS.length]!;
    setCourses([...courses, { slug, title: `Új kurzus ${n}`, track: "vallalkozoi", tier: "alap", instructorId: "peter", description: "", outcomes: [], cover: { from: cover[0]!, to: cover[1]!, motif: "Új" }, modules: [] }]);
    setSel(slug);
  };
  const addModule = () => course && patch({ modules: [...course.modules, { id: uid(`${course.slug}-m${course.modules.length + 1}`), title: `${course.modules.length + 1}. modul`, lessons: [] }] });
  const addLesson = (m: CourseModule) => {
    const n = flatLessons(course!).length + 1;
    const last = m.lessons[m.lessons.length - 1];
    patchModule(m.id, { lessons: [...m.lessons, { slug: uid(`${slugify(m.title)}-lecke-${n}`), title: `Új lecke`, durationMin: 12, releaseWeek: (last?.releaseWeek ?? 0) + 1, text: "", resources: [], comments: [] }] });
  };

  return (
    <div>
      <PageHeader
        eyebrow="Kurzusépítő"
        title="Kurzusok"
        actions={
          <Button size="sm" onClick={addCourse}>
            <Plus size={14} aria-hidden="true" /> Új kurzus
          </Button>
        }
      />
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <ul className="space-y-1.5">
          {courses.map((c) => (
            <li key={c.slug}>
              <button type="button" onClick={() => setSel(c.slug)} aria-pressed={sel === c.slug} className={`flex w-full items-center gap-3 rounded-(--fp-radius) border p-2 text-left transition-colors ${sel === c.slug ? "border-(--fp-gold-40) bg-(--fp-gold-10)" : "border-(--fp-border) hover:border-(--fp-gold-30)"}`}>
                <CourseCover course={c} size="sm" className="h-10 w-16 flex-none rounded-(--fp-radius-sm)" />
                <span className="min-w-0">
                  <span className="block truncate text-sm">{c.title}</span>
                  <span className="block text-xs text-(--fp-muted-fg)">
                    {c.modules.length} modul · {flatLessons(c).length} lecke
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {course && (
          <div className="space-y-5">
            <Card className="grid gap-4 p-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field label="Cím">
                  <input className="fp-input" value={course.title} onChange={(e) => patch({ title: e.target.value })} />
                </Field>
              </div>
              <Field label="Szint">
                <select className="fp-input" value={course.tier} onChange={(e) => patch({ tier: e.target.value as TierId })}>
                  {tiers.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Sáv">
                <select className="fp-input" value={course.track} onChange={(e) => patch({ track: e.target.value as Track })}>
                  {(Object.keys(TRACK_LABEL) as Track[]).map((t) => (
                    <option key={t} value={t}>
                      {TRACK_LABEL[t]}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Oktató">
                <select className="fp-input" value={course.instructorId} onChange={(e) => patch({ instructorId: e.target.value })}>
                  {INSTRUCTORS.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Borító felirat">
                <div className="flex gap-2">
                  <input className="fp-input" value={course.cover.motif} onChange={(e) => patch({ cover: { ...course.cover, motif: e.target.value } })} />
                  <div className="flex flex-none gap-1">
                    {COVERS.map(([from, to]) => (
                      <button key={from} type="button" aria-label="Borító szín" onClick={() => patch({ cover: { ...course.cover, from, to } })} className={`h-10 w-6 rounded-(--fp-radius-sm) border ${course.cover.from === from ? "border-(--fp-gold)" : "border-transparent"}`} style={{ background: `linear-gradient(135deg, ${from}, ${to})` }} />
                    ))}
                  </div>
                </div>
              </Field>
              <div className="sm:col-span-2">
                <Field label="Leírás">
                  <textarea className="fp-input" rows={3} value={course.description} onChange={(e) => patch({ description: e.target.value })} />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Mit visz magával (soronként)">
                  <textarea className="fp-input" rows={3} value={course.outcomes.join("\n")} onChange={(e) => patch({ outcomes: e.target.value.split("\n").filter(Boolean) })} />
                </Field>
              </div>
              <div className="flex items-center justify-between sm:col-span-2">
                <TierBadge tier={course.tier} />
                <Button variant="ghost" size="sm" onClick={() => confirm("Törlöd ezt a kurzust?") && (setCourses(courses.filter((c) => c.slug !== course.slug)), setSel(courses[0]?.slug ?? ""))}>
                  <Trash2 size={14} aria-hidden="true" /> Kurzus törlése
                </Button>
              </div>
            </Card>

            {course.modules.map((m, mi) => (
              <Card key={m.id} className="p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex-none text-xs text-(--fp-muted-fg)">{mi + 1}.</span>
                  <input className="fp-input" value={m.title} onChange={(e) => patchModule(m.id, { title: e.target.value })} aria-label="Modul címe" />
                  <button type="button" aria-label="Modul törlése" onClick={() => patch({ modules: course.modules.filter((x) => x.id !== m.id) })} className="rounded p-1 text-(--fp-muted-fg) hover:text-(--fp-danger)">
                    <Trash2 size={14} />
                  </button>
                </div>
                <ul className="space-y-1.5">
                  {m.lessons.map((l) => (
                    <LessonEditor key={l.slug} lesson={l} onChange={(nl) => patchModule(m.id, { lessons: m.lessons.map((x) => (x.slug === l.slug ? nl : x)) })} onDelete={() => patchModule(m.id, { lessons: m.lessons.filter((x) => x.slug !== l.slug) })} />
                  ))}
                </ul>
                <Button variant="ghost" size="sm" className="mt-2" onClick={() => addLesson(m)}>
                  <Plus size={14} aria-hidden="true" /> Lecke
                </Button>
              </Card>
            ))}
            <Button variant="outline" onClick={addModule}>
              <Plus size={14} aria-hidden="true" /> Új modul
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
