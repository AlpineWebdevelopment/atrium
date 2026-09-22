"use client";

import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { BASE } from "../data/config";
import { useStore } from "../lib/store";
import { seatsLeft } from "../lib/access";
import { flatLessons } from "../lib/courses";
import { formatDate } from "../lib/dates";
import { Bars, Trend } from "../ui/charts";
import { Card, DemoNote, Eyebrow, PageHeader, Stat } from "../ui/primitives";

/* Everything here derives from the member list and the posts — change a
   member's tier and the numbers move together. MRR is the one exception: it
   is computed from illustrative prices, and labelled so. */
export default function AdminAttekintes() {
  const { members, tiers, config, posts, courses, tasks, ideas } = useStore();
  const people = members.filter((m) => !m.isMentor);
  const byTier = tiers.map((t) => ({ label: t.name, value: people.filter((m) => m.tier === t.id).length, price: parseInt(t.priceLabel.replace(/\D/g, ""), 10) || 0 }));
  const mrr = byTier.reduce((s, t) => s + t.value * t.price, 0);
  const left = seatsLeft(config.innerCircleSeats, config.innerCircleTaken);

  const totalLessons = courses.reduce((s, c) => s + flatLessons(c).filter((l) => l.releaseWeek <= config.currentWeek).length, 0);
  const avgDone = people.reduce((s, m) => s + m.lessonsCompleted, 0) / Math.max(1, people.length);
  const completion = Math.round((avgDone / Math.max(1, totalLessons)) * 100);

  // Members active in the last 6 days count as having done this week's task.
  const taskThisWeek = people.filter((m) => m.lastActiveDaysAgo <= 6 && m.streak > 0).length;

  const streakDist = [0, 1, 2, 3, 4, 5].map((n) => ({ label: n === 5 ? "5+" : String(n), value: people.filter((m) => (n === 5 ? m.streak >= 5 : m.streak === n)).length }));

  const activity = Array.from({ length: 6 }, (_, i) => {
    const w = config.currentWeek - 5 + i;
    const from = (config.currentWeek - w) * 7;
    const n = posts.filter((p) => p.daysAgo < from + 7 && p.daysAgo >= from).length + posts.flatMap((p) => p.comments).filter((c) => c.daysAgo < from + 7 && c.daysAgo >= from).length;
    return { label: `${w}. hét`, value: n };
  });

  const openIdeas = ideas.filter((i) => i.status === "Ötlet" || i.status === "Megfontolás alatt").length;

  return (
    <div>
      <PageHeader eyebrow={`${config.currentWeek}. hét · ${formatDate(config.academyStart)} óta`} title="Áttekintés" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Tagok" value={people.length} sub={byTier.map((t) => `${t.label} ${t.value}`).join(" · ")} />
        <Stat label="Belső kör" value={`${config.innerCircleTaken} / ${config.innerCircleSeats}`} sub={`${left} szabad hely`} />
        <Stat label="MRR" value={`${mrr.toLocaleString("hu-HU")} Ft`} sub="szemléltető adat" />
        <Stat label="Heti feladat kész" value={`${taskThisWeek} / ${people.length}`} sub="ezen a héten" />
      </div>

      <Link href={`${BASE}/admin/otletek`} className="fp-card fp-card--hover mt-6 flex items-center gap-4 border-(--fp-gold-30) p-5">
        <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-(--fp-gold-10) text-(--fp-gold)">
          <Lightbulb size={20} aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="fp-display block text-lg">Ötletek</span>
          <span className="block text-sm text-(--fp-muted-fg)">A közös munkatábla az akadémia stratégiájához. {openIdeas} nyitott ötlet.</span>
        </span>
        <ArrowRight size={18} className="flex-none text-(--fp-gold)" aria-hidden="true" />
      </Link>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card className="p-5">
          <Eyebrow className="mb-1 text-[10px]">Tagok szintenként</Eyebrow>
          <Bars data={byTier.map(({ label, value }) => ({ label, value }))} unit=" tag" />
        </Card>
        <Card className="p-5">
          <Eyebrow className="mb-1 text-[10px]">Sorozat-eloszlás (hetek)</Eyebrow>
          <Bars data={streakDist} unit=" tag" />
        </Card>
        <Card className="p-5">
          <Eyebrow className="mb-1 text-[10px]">Közösségi aktivitás · posztok és hozzászólások</Eyebrow>
          <Trend data={activity} />
        </Card>
        <Card className="p-5">
          <Eyebrow className="mb-1 text-[10px]">Leckék teljesítése</Eyebrow>
          <p className="fp-display mt-2 text-4xl">{completion}%</p>
          <p className="mt-1 text-sm text-(--fp-muted-fg)">
            Átlagosan {avgDone.toFixed(1)} lecke kész tagonként a(z) {totalLessons} eddig megnyílt leckéből.
          </p>
          <p className="mt-4 text-sm text-(--fp-muted-fg)">
            Következő kör: <strong className="text-(--fp-fg)">{formatDate(config.nextCohortStart)}</strong> · beiratkozás {config.enrollmentOpen ? "nyitva" : "zárva"}
          </p>
          <p className="mt-1 text-sm text-(--fp-muted-fg)">
            E heti feladat: <strong className="text-(--fp-fg)">{tasks.find((t) => t.week === config.currentWeek)?.title}</strong>
          </p>
        </Card>
      </div>
      <div className="mt-4">
        <DemoNote>Demó — a számok a mintaadatokból származnak</DemoNote>
      </div>
    </div>
  );
}
