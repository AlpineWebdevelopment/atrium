import Link from "next/link";

/**
 * Cold-open scene. The narrative hook with the single green left rule.
 * One Signal-green accent per zone — this is one of them.
 */
export function Scene({ children }: { children: React.ReactNode }) {
  // MDX already wraps the body in <p>, so don't add another (would nest <p> in <p>).
  return (
    <div className="my-7 border-l-[3px] border-signal pl-[1.1rem] [&>p]:my-0 [&>p]:text-[17px] [&>p]:italic [&>p]:leading-[1.75] [&>p]:text-stone">
      {children}
    </div>
  );
}

/**
 * Sourced statistic callout. The visible source line is load-bearing — it's the
 * honesty wedge against fabricated competitor stats, not decoration.
 * Uses a Stone tint + Stone left rule (NOT green) so green stays scarce.
 */
export function StatCallout({
  source,
  children,
}: {
  source: string;
  children: React.ReactNode;
}) {
  return (
    <aside className="my-6 border-l-[3px] border-stone bg-panel px-[1.2rem] py-[1.1rem]">
      {/* children arrives already wrapped in <p> by MDX — style it, don't re-wrap. */}
      <div className="[&>p]:my-0 [&>p]:text-[15.5px] [&>p]:font-medium [&>p]:leading-[1.7]">{children}</div>
      <p className="mt-2 font-mono text-[11.5px] text-stone">Forrás: {source}</p>
    </aside>
  );
}

/**
 * Monospace cascade / timeline panel. Stone-tinted (not a dark block) to keep the
 * airy feel on Bone. Whitespace is preserved; wrap a single figure in <Hi> to use
 * the one green accent allowed in this zone.
 */
export function Cascade({
  children,
  caption,
}: {
  children: React.ReactNode;
  caption?: string;
}) {
  return (
    <div className="my-6">
      <pre className="overflow-x-auto whitespace-pre rounded-lg bg-panel px-[1.2rem] py-[1.1rem] font-mono text-[14px] leading-loose">
        {children}
      </pre>
      {caption ? (
        <p className="mt-2 text-[13px] italic text-stone">{caption}</p>
      ) : null}
    </div>
  );
}

/** Single highlighted figure inside a Cascade (the one green chip). */
export function Hi({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded-[3px] bg-signal px-1.5 py-px text-black!">{children}</mark>
  );
}

/**
 * Call to action. Brand-locked label "Foglaljon időpontot." — do not vary.
 * The green button is the section's single accent.
 */
export function Cta({
  href = "https://atriumscaling.com/#kapcsolat",
  children = "Foglaljon időpontot.",
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="my-8">
      <Link
        href={href}
        className="inline-block rounded-lg bg-signal px-[1.3rem] py-[0.7rem] text-[15px] font-semibold font-onest text-black! no-underline transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        {children}
      </Link>
    </div>
  );
}
