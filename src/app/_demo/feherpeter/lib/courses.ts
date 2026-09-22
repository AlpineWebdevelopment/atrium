import type { Course, Lesson } from "../data/types";
import { INSTRUCTORS } from "../data/courses";

/* Read helpers over the course tree. They take the store's `courses` (which
   may include admin-created ones), never the seed directly. */

export function findCourse(courses: Course[], slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function flatLessons(course: Course): Lesson[] {
  return course.modules.flatMap((m) => m.lessons);
}

export function findLesson(course: Course, slug: string): { lesson: Lesson; moduleIndex: number; index: number } | null {
  const all = flatLessons(course);
  const index = all.findIndex((l) => l.slug === slug);
  if (index < 0) return null;
  let seen = 0;
  for (let mi = 0; mi < course.modules.length; mi++) {
    const n = course.modules[mi]!.lessons.length;
    if (index < seen + n) return { lesson: all[index]!, moduleIndex: mi, index };
    seen += n;
  }
  return null;
}

export function courseDuration(course: Course): number {
  return flatLessons(course).reduce((s, l) => s + l.durationMin, 0);
}

export function courseProgress(course: Course, done: (c: string, l: string) => boolean): { done: number; total: number; ratio: number } {
  const all = flatLessons(course);
  const n = all.filter((l) => done(course.slug, l.slug)).length;
  return { done: n, total: all.length, ratio: all.length ? n / all.length : 0 };
}

export function instructorOf(course: Course) {
  return INSTRUCTORS.find((i) => i.id === course.instructorId) ?? INSTRUCTORS[0]!;
}

export function lessonTitle(courses: Course[], courseSlug: string, lessonSlug: string): string | null {
  const c = findCourse(courses, courseSlug);
  if (!c) return null;
  return flatLessons(c).find((l) => l.slug === lessonSlug)?.title ?? null;
}
