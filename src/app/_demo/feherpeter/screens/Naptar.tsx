"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Lock, PlayCircle } from "lucide-react";
import { BASE } from "../data/config";
import { EVENT_KIND_LABEL } from "../data/events";
import type { AcademyEvent } from "../data/types";
import { useStore } from "../lib/store";
import { eventJoinable, eventVisible } from "../lib/access";
import { addDays, dayName, formatDate, formatDuration, formatMonth, parseISO, toISO } from "../lib/dates";
import { useUpgrade } from "../ui/UpgradeModal";
import { Badge, Button, Card, Eyebrow, PageHeader, TierBadge } from "../ui/primitives";

const KIND_TONE: Record<AcademyEvent["kind"], string> = {
  qa: "bg-(--fp-gold)",
  belso: "bg-(--fp-gold-light)",
  workshop: "bg-(--fp-muted-fg)",
  nyito: "bg-(--fp-fg)",
};

function monthGrid(monthISO: string): string[] {
  const first = parseISO(monthISO.slice(0, 7) + "-01");
  const startOffset = (first.getUTCDay() + 6) % 7; // Monday first
  const start = addDays(toISO(first), -startOffset);
  return Array.from({ length: 42 }, (_, i) => addDays(start, i));
}

function EventRow({ ev, past }: { ev: AcademyEvent; past: boolean }) {
  const { tiers, myTier, myProgress, toggleRsvp } = useStore();
  const openUpgrade = useUpgrade();
  const joinable = eventJoinable(tiers, myTier, ev);
  const going = myProgress.rsvps.includes(ev.id);
  return (
    <Card as="li" className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
      <div className="flex-none text-center sm:w-16">
        <p className="fp-display text-2xl leading-none">{parseISO(ev.date).getUTCDate()}</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">{formatMonth(ev.date).split(" ")[1]!.slice(0, 4)}</p>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`h-2 w-2 rounded-full ${KIND_TONE[ev.kind]}`} aria-hidden="true" />
          <span className="text-xs text-(--fp-muted-fg)">{EVENT_KIND_LABEL[ev.kind]}</span>
          <TierBadge tier={ev.tier} locked={!joinable} />
        </div>
        <h3 className="mt-1 text-lg">{ev.title}</h3>
        <p className="mt-1 text-sm text-(--fp-muted-fg)">{ev.description}</p>
        <p className="mt-2 flex items-center gap-1 text-xs text-(--fp-muted-fg)">
          <Clock size={12} aria-hidden="true" /> {dayName(ev.date)}, {ev.time} · {formatDuration(ev.durationMin)}
        </p>
      </div>
      <div className="flex-none">
        {past ? (
          ev.recording ? (
            joinable ? (
              <Link href={`${BASE}/kurzusok/${ev.recording.courseSlug}/${ev.recording.lessonSlug}`} className="fp-btn fp-btn--outline fp-btn--sm">
                <PlayCircle size={14} aria-hidden="true" /> Felvétel megtekintése
              </Link>
            ) : (
              <Button variant="outline" size="sm" onClick={() => openUpgrade(ev.tier)}>
                <Lock size={14} aria-hidden="true" /> Felvétel
              </Button>
            )
          ) : (
            <Badge tone="outline">Lezajlott</Badge>
          )
        ) : joinable ? (
          <Button variant={going ? "outline" : "primary"} size="sm" onClick={() => toggleRsvp(ev.id)} aria-pressed={going}>
            {going ? "Jelentkeztem ✓" : "Jelentkezem"}
          </Button>
        ) : (
          <Button variant="outline" size="sm" onClick={() => openUpgrade(ev.tier)}>
            <Lock size={14} aria-hidden="true" /> {tiers.find((t) => t.id === ev.tier)?.name}
          </Button>
        )}
      </div>
    </Card>
  );
}

export default function Naptar() {
  const { events, tiers, myTier, today } = useStore();
  const [month, setMonth] = useState(today.slice(0, 7) + "-01");
  const visible = events.filter((e) => eventVisible(tiers, myTier, e)).sort((a, b) => a.date.localeCompare(b.date));
  const upcoming = visible.filter((e) => e.date >= today);
  const past = visible.filter((e) => e.date < today).reverse();
  const grid = monthGrid(month);
  const shift = (n: number) => {
    const d = parseISO(month);
    d.setUTCMonth(d.getUTCMonth() + n);
    setMonth(toISO(d));
  };

  return (
    <div className="fp-container py-8 md:py-10">
      <PageHeader eyebrow="Élő alkalmak" title="Naptár" lead="Havonta egy élő Q&A, workshopok, és a Belső kör kiscsoportos alkalmai. Minden élő alkalom felvétele a tárba kerül." />

      <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
        <Card className="self-start p-5">
          <div className="mb-4 flex items-center justify-between">
            <button type="button" onClick={() => shift(-1)} aria-label="Előző hónap" className="rounded p-1 text-(--fp-muted-fg) hover:text-(--fp-fg)">
              <ChevronLeft size={18} />
            </button>
            <p className="fp-display text-base">{formatMonth(month)}</p>
            <button type="button" onClick={() => shift(1)} aria-label="Következő hónap" className="rounded p-1 text-(--fp-muted-fg) hover:text-(--fp-fg)">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] uppercase tracking-[0.1em] text-(--fp-muted-fg)">
            {["H", "K", "Sze", "Cs", "P", "Szo", "V"].map((d) => (
              <span key={d} className="py-1">
                {d}
              </span>
            ))}
          </div>
          <div className="mt-1 grid grid-cols-7 gap-1">
            {grid.map((d) => {
              const inMonth = d.slice(0, 7) === month.slice(0, 7);
              const evs = visible.filter((e) => e.date === d);
              const isToday = d === today;
              return (
                <div key={d} className={`flex aspect-square flex-col items-center justify-start rounded-(--fp-radius-sm) pt-1 text-xs ${inMonth ? "" : "opacity-30"} ${isToday ? "bg-(--fp-gold-10) text-(--fp-gold)" : ""}`} title={evs.map((e) => e.title).join(", ")}>
                  {parseISO(d).getUTCDate()}
                  <span className="mt-1 flex gap-0.5">
                    {evs.map((e) => (
                      <span key={e.id} className={`h-1.5 w-1.5 rounded-full ${KIND_TONE[e.kind]}`} />
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
          <ul className="mt-4 space-y-1.5 border-t border-(--fp-border) pt-4 text-xs text-(--fp-muted-fg)">
            {(Object.keys(EVENT_KIND_LABEL) as AcademyEvent["kind"][]).map((k) => (
              <li key={k} className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${KIND_TONE[k]}`} aria-hidden="true" /> {EVENT_KIND_LABEL[k]}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-(--fp-muted-fg)">Ma: {formatDate(today)}</p>
        </Card>

        <div className="space-y-10">
          <section>
            <Eyebrow className="mb-4">Következő alkalmak</Eyebrow>
            <ul className="space-y-3">
              {upcoming.map((e) => (
                <EventRow key={e.id} ev={e} past={false} />
              ))}
            </ul>
          </section>
          <section>
            <Eyebrow className="mb-4">Lezajlott · felvételek</Eyebrow>
            <ul className="space-y-3">
              {past.map((e) => (
                <EventRow key={e.id} ev={e} past />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
