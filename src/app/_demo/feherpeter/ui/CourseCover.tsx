import type { Course } from "../data/types";

/* Typographic cover, in line with the site's photo-or-type approach: his
   photos only where his site uses them, colour and type everywhere else. */
export function CourseCover({ course, className = "", size = "md" }: { course: Course; className?: string; size?: "sm" | "md" | "lg" }) {
  const fs = size === "lg" ? "clamp(2rem, 5vw, 3.5rem)" : size === "sm" ? "1.1rem" : "1.6rem";
  return (
    <div
      aria-hidden="true"
      className={`relative flex items-end overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${course.cover.from}, ${course.cover.to})` }}
    >
      <span className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <span className="fp-display p-4 text-(--fp-fg-70)" style={{ fontSize: fs, lineHeight: 1 }}>
        {course.cover.motif}
      </span>
    </div>
  );
}
