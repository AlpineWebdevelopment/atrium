"use client";

import Link from "next/link";
import { useState } from "react";
import { Award, Check, Copy, Flame, Gift } from "lucide-react";
import { BASE } from "../data/config";
import { useStore } from "../lib/store";
import { courseLocked, nextPrivilege, nextRank, rankFor } from "../lib/access";
import { courseProgress } from "../lib/courses";
import { formatDate } from "../lib/dates";
import { Avatar, Button, Card, Eyebrow, PageHeader, ProgressBar, TierBadge } from "../ui/primitives";

export default function Profil() {
  const { me, myPoints, myStreak, ranks, tiers, myTier, courses, isLessonDone, myProgress, config } = useStore();
  const [copied, setCopied] = useState(false);
  if (!me) return null;

  const next = nextRank(ranks, myPoints);
  const priv = nextPrivilege(ranks, myPoints);
  const cur = rankFor(ranks, myPoints);
  const span = next ? next.minPoints - cur.minPoints : 1;
  const ratio = next ? (myPoints - cur.minPoints) / span : 1;
  const refLink = `https://akademia.feherpeter.hu/m/${me.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-")}`;
  const mine = courses.filter((c) => !courseLocked(tiers, myTier, c)).map((c) => ({ c, p: courseProgress(c, isLessonDone) }));
  const unlocked = ranks.filter((r) => r.privilege && r.level <= cur.level);

  const copy = () => {
    try {
      navigator.clipboard?.writeText(refLink);
    } catch {}
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="fp-container py-8 md:py-10">
      <PageHeader eyebrow="Profil" title={me.name} lead={`${me.business} · ${me.city} · tag ${formatDate(me.joined)} óta`} />

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar member={me} size={64} />
                <div>
                  <p className="fp-display text-2xl">
                    {cur.level}. szint · {cur.name}
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-sm text-(--fp-muted-fg)">
                    <TierBadge tier={me.tier} /> {myPoints} pont
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm">
                <Flame size={16} className={myStreak > 0 ? "text-(--fp-gold)" : "text-(--fp-muted-fg)"} aria-hidden="true" /> {myStreak} hetes sorozat
              </span>
            </div>
            <div className="mt-6">
              <div className="mb-2 flex justify-between text-xs text-(--fp-muted-fg)">
                <span>{cur.name}</span>
                <span>{next ? `${next.name} · ${next.minPoints} pont` : "Legmagasabb szint"}</span>
              </div>
              <ProgressBar value={ratio} />
            </div>
            {priv && (
              <p className="mt-5 rounded-(--fp-radius) bg-(--fp-secondary) px-4 py-3 text-sm">
                Még <strong>{priv.pointsNeeded} pont</strong> a(z) {priv.rank.level}. szintig — akkor {priv.rank.privilege!.label}.
              </p>
            )}
            {unlocked.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {unlocked.map((r) => (
                  <li key={r.level} className="flex items-center gap-2 text-sm text-(--fp-muted-fg)">
                    <Check size={14} className="text-(--fp-gold)" aria-hidden="true" /> {r.level}. szint: {r.privilege!.label}
                  </li>
                ))}
              </ul>
            )}
          </Card>

          <section>
            <Eyebrow className="mb-3">Kurzusaid</Eyebrow>
            <ul className="space-y-2">
              {mine.map(({ c, p }) => (
                <Card as="li" key={c.slug} className="p-4">
                  <Link href={`${BASE}/kurzusok/${c.slug}`} className="flex items-center gap-4">
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm">{c.title}</span>
                      <span className="block text-xs text-(--fp-muted-fg)">
                        {p.done} / {p.total} lecke
                      </span>
                    </span>
                    <span className="w-28 flex-none">
                      <ProgressBar value={p.ratio} />
                    </span>
                  </Link>
                </Card>
              ))}
            </ul>
          </section>

          <section>
            <Eyebrow className="mb-3">Jelvények</Eyebrow>
            <ul className="flex flex-wrap gap-2">
              {myProgress.badges.map((b) => (
                <li key={b} className="inline-flex items-center gap-1.5 rounded-full border border-(--fp-gold-30) px-3 py-1.5 text-xs">
                  <Award size={13} className="text-(--fp-gold)" aria-hidden="true" /> {b}
                </li>
              ))}
              {myProgress.badges.length === 0 && <li className="text-sm text-(--fp-muted-fg)">Még nincs jelvényed — az első lecke után jön az első.</li>}
            </ul>
          </section>
        </div>

        <aside className="space-y-5">
          <Card className="p-5">
            <div className="mb-2 flex items-center justify-between">
              <Eyebrow className="text-[10px]">Ajánlás</Eyebrow>
              <Gift size={14} className="text-(--fp-gold)" aria-hidden="true" />
            </div>
            <p className="fp-display text-3xl">
              {me.referrals} <span className="text-base text-(--fp-muted-fg)">ajánlott tag</span>
            </p>
            <p className="mt-2 text-sm text-(--fp-muted-fg)">Minden ajánlott fizető tag után egy hónap ajándék. Nincs jutalék, nincs többszintű rendszer.</p>
            <div className="mt-4 flex gap-2">
              <input readOnly value={refLink} className="fp-input text-xs" aria-label="Ajánlói link" onFocus={(e) => e.target.select()} />
              <Button variant="outline" size="sm" className="flex-none" onClick={copy} aria-label="Link másolása">
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </Button>
            </div>
            {me.referrals > 0 && <p className="mt-3 text-xs text-(--fp-gold)">{me.referrals} ajándék hónap jóváírva</p>}
          </Card>

          <Card className="p-5 text-sm">
            <Eyebrow className="mb-2 text-[10px]">Pontok</Eyebrow>
            <ul className="space-y-1 text-(--fp-muted-fg)">
              <li>Lecke: +{config.points.lesson}</li>
              <li>Heti feladat: +{config.points.task}</li>
              <li>Sorozathét bónusz: +{config.points.streakBonus}</li>
              <li>Poszt: +{config.points.post} · hozzászólás: +{config.points.comment}</li>
            </ul>
          </Card>
        </aside>
      </div>
    </div>
  );
}
