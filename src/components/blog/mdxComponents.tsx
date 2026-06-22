import type { ComponentProps } from "react";
import Link from "next/link";
import { Scene, StatCallout, Cascade, Hi, Cta, InlineCta } from "./Components";

export const mdxComponents = {
  // h2 — Onest semibold, tight tracking. The section anchor for readers skimming.
  h2: (p: ComponentProps<"h2">) => (
    <h2
      className="mb-2 mt-10 font-onest text-[21px] font-bold leading-tight"
      {...p}
    />
  ),
  // h3 — Onest medium, slightly muted so it reads as a sub-beat under h2.
  h3: (p: ComponentProps<"h3">) => (
    <h3
      className="mb-1.5 mt-7 font-onest text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-stone"
      {...p}
    />
  ),
  p: (p: ComponentProps<"p">) => (
    <p className="my-4 text-[16px]" {...p} />
  ),
  ul: (p: ComponentProps<"ul">) => (
    <ul className="my-[0.9rem] list-disc space-y-1.5 pl-5 text-[16px] leading-[1.7]" {...p} />
  ),
  ol: (p: ComponentProps<"ol">) => (
    <ol className="my-[0.9rem] list-decimal space-y-1.5 pl-5 text-[16px] leading-[1.7]" {...p} />
  ),
  // semibold so ** actually looks heavier than the regular body weight
  strong: (p: ComponentProps<"strong">) => <strong className="font-semibold" {...p} />,
  // explicit italic mapping so _single underscores_ render correctly
  em: (p: ComponentProps<"em">) => <em className="italic" {...p} />,
  blockquote: (p: ComponentProps<"blockquote">) => (
    <blockquote
      className="my-7 border-l-[3px] border-stone bg-panel px-[1.2rem] py-[1.1rem] text-[15.5px] italic leading-[1.7] text-stone [&>p]:my-1"
      {...p}
    />
  ),
  a: ({ href = "", ...p }: ComponentProps<"a">) => (
    <Link
      href={href}
      className="font-medium underline decoration-line underline-offset-2 hover:decoration-ink"
      {...p}
    />
  ),
  // Tables — real HTML for AI/crawler parsability.
  table: (p: ComponentProps<"table">) => (
    <div className="my-7 overflow-x-auto">
      <table className="w-full border-collapse text-[15px]" {...p} />
    </div>
  ),
  thead: (p: ComponentProps<"thead">) => <thead {...p} />,
  th: (p: ComponentProps<"th">) => (
    <th
      className="border-b border-line py-[0.6rem] pr-4 text-left font-onest font-bold last:pr-0"
      {...p}
    />
  ),
  td: (p: ComponentProps<"td">) => (
    <td className="border-b border-line py-[0.6rem] pr-4 align-top text-stone font-medium last:pr-0" {...p} />
  ),
  code: (p: ComponentProps<"code">) => (
    <code className="rounded bg-panel px-1 py-px font-mono text-[13.5px]" {...p} />
  ),
  pre: (p: ComponentProps<"pre">) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg bg-panel px-[1.2rem] py-[1.1rem] font-mono text-[13.5px] leading-loose [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[13.5px]"
      {...p}
    />
  ),
  Scene,
  StatCallout,
  Cascade,
  Hi,
  Cta,
  InlineCta,
};
