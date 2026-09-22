"use client";

import Link from "next/link";
import { useState } from "react";
import { Calendar, CheckSquare, Heart, MessageSquare, Pin, Sparkles } from "lucide-react";
import { BASE } from "../data/config";
import { CATEGORY_LABEL } from "../data/posts";
import { EVENT_KIND_LABEL } from "../data/events";
import type { Post, PostCategory } from "../data/types";
import { useStore } from "../lib/store";
import { eventVisible, hasPrivilege, rankFor } from "../lib/access";
import { formatShort, relativeDays } from "../lib/dates";
import { Avatar, Badge, Button, Card, Eyebrow, PageHeader, RankBadge, Tabs } from "../ui/primitives";

type Tab = "mind" | PostCategory;

function PostCard({ post }: { post: Post }) {
  const { members, toggleLike, myProgress, addPostComment, me } = useStore();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const author = members.find((m) => m.id === post.memberId);
  const liked = myProgress.likedPosts.includes(post.id);
  const win = post.category === "siker" && post.peterReacted;

  return (
    <Card as="article" className={`p-5 ${win ? "border-(--fp-gold-30) bg-[linear-gradient(135deg,hsl(40_60%_50%/0.06),transparent_60%)]" : ""}`}>
      <div className="flex items-start gap-3">
        <Avatar member={author} size={40} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <span className={author?.isMentor ? "text-(--fp-gold)" : ""}>{author?.name}</span>
            {author && !author.isMentor && <RankBadge points={author.points} />}
            <span className="text-xs text-(--fp-muted-fg)">· {relativeDays(post.daysAgo)}</span>
          </div>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <Badge tone={post.category === "siker" ? "gold" : "muted"}>{CATEGORY_LABEL[post.category]}</Badge>
            {post.pinned && (
              <Badge tone="outline">
                <Pin size={10} aria-hidden="true" /> Kitűzve
              </Badge>
            )}
            {win && (
              <span className="inline-flex items-center gap-1 text-[11px] text-(--fp-gold)">
                <Sparkles size={12} aria-hidden="true" /> Péter reagált
              </span>
            )}
          </div>
        </div>
      </div>

      <h2 className="mt-4 text-lg">{post.title}</h2>
      <p className="mt-2 text-sm text-(--fp-fg-90)">{post.text}</p>

      <div className="mt-4 flex items-center gap-4 text-xs text-(--fp-muted-fg)">
        <button type="button" onClick={() => toggleLike(post.id)} aria-pressed={liked} className={`inline-flex items-center gap-1.5 transition-colors hover:text-(--fp-gold) ${liked ? "text-(--fp-gold)" : ""}`}>
          <Heart size={14} fill={liked ? "currentColor" : "none"} aria-hidden="true" /> {post.likes}
        </button>
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="inline-flex items-center gap-1.5 transition-colors hover:text-(--fp-fg)">
          <MessageSquare size={14} aria-hidden="true" /> {post.comments.length} hozzászólás
        </button>
      </div>

      {open && (
        <div className="fp-fade mt-4 space-y-4 border-t border-(--fp-border) pt-4">
          {post.comments.map((c) => {
            const m = members.find((x) => x.id === c.memberId);
            return (
              <div key={c.id} className="flex gap-3">
                <Avatar member={m} size={30} />
                <div className="min-w-0">
                  <p className="text-xs">
                    <span className={m?.isMentor ? "text-(--fp-gold)" : ""}>{m?.name}</span>
                    <span className="ml-2 text-(--fp-muted-fg)">{relativeDays(c.daysAgo)}</span>
                  </p>
                  <p className="mt-0.5 text-sm text-(--fp-fg-90)">{c.text}</p>
                </div>
              </div>
            );
          })}
          {me && (
            <form
              className="flex gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                if (!text.trim()) return;
                addPostComment(post.id, text.trim());
                setText("");
              }}
            >
              <Avatar member={me} size={30} />
              <div className="flex flex-1 gap-2">
                <input value={text} onChange={(e) => setText(e.target.value)} className="fp-input" placeholder="Hozzászólás" aria-label="Hozzászólás" />
                <Button size="sm" type="submit" disabled={!text.trim()}>
                  Küldés
                </Button>
              </div>
            </form>
          )}
        </div>
      )}
    </Card>
  );
}

function Composer() {
  const { addPost, me, ranks, myPoints, config } = useStore();
  const [open, setOpen] = useState(false);
  const [cat, setCat] = useState<PostCategory>("kerdes");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const canSiker = hasPrivilege(ranks, myPoints, "post-siker") || !!me?.isMentor;
  const sikerRank = ranks.find((r) => r.privilege?.key === "post-siker");
  const cats: PostCategory[] = me?.isMentor ? ["kerdes", "siker", "kihivas", "bejelentes"] : ["kerdes", "siker", "kihivas"];
  if (!me) return null;

  if (!open) {
    return (
      <Card className="flex items-center gap-3 p-3">
        <Avatar member={me} size={36} />
        <button type="button" onClick={() => setOpen(true)} className="fp-input flex-1 text-left text-(--fp-muted-fg)">
          Min dolgozol, vagy mi a kérdésed
        </button>
      </Card>
    );
  }

  return (
    <Card className="fp-enter p-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!title.trim() || !text.trim()) return;
          addPost(cat, title.trim(), text.trim());
          setTitle("");
          setText("");
          setOpen(false);
        }}
        className="space-y-3"
      >
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => {
            const disabled = c === "siker" && !canSiker;
            return (
              <button
                key={c}
                type="button"
                disabled={disabled}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                title={disabled ? `A Siker kategóriába a(z) ${sikerRank?.level}. szinttől posztolhatsz` : undefined}
                className={`rounded-full border px-3 py-1 text-xs transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${cat === c ? "border-(--fp-gold) text-(--fp-gold)" : "border-(--fp-border) text-(--fp-muted-fg) hover:text-(--fp-fg)"}`}
              >
                {CATEGORY_LABEL[c]}
              </button>
            );
          })}
        </div>
        {!canSiker && sikerRank && (
          <p className="text-xs text-(--fp-muted-fg)">
            A Siker kategória a(z) {sikerRank.level}. szinttől ({sikerRank.name}) nyílik meg. Most a(z) {rankFor(ranks, myPoints).level}. szinten vagy.
          </p>
        )}
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="fp-input" placeholder="Cím" aria-label="Cím" />
        <textarea value={text} onChange={(e) => setText(e.target.value)} className="fp-input" rows={4} placeholder="Írd le röviden" aria-label="Szöveg" />
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
            Mégse
          </Button>
          <Button size="sm" type="submit" disabled={!title.trim() || !text.trim()}>
            Közzéteszem
          </Button>
        </div>
        <p className="text-xs text-(--fp-muted-fg)">+{config.points.post} pont minden posztért</p>
      </form>
    </Card>
  );
}

export default function Kozosseg() {
  const { posts, tasks, config, events, members, tiers, myTier, isTaskDone, today } = useStore();
  const [tab, setTab] = useState<Tab>("mind");
  const week = config.currentWeek;
  const task = tasks.find((t) => t.week === week);
  const upcoming = events.filter((e) => e.date >= today && eventVisible(tiers, myTier, e)).sort((a, b) => a.date.localeCompare(b.date))[0];
  const top = members.filter((m) => !m.isMentor).sort((a, b) => b.points - a.points).slice(0, 5);

  const list = posts.filter((p) => tab === "mind" || p.category === tab).sort((a, b) => Number(!!b.pinned) - Number(!!a.pinned) || a.daysAgo - b.daysAgo);
  const counts = (c: PostCategory) => posts.filter((p) => p.category === c).length;

  return (
    <div className="fp-container py-8 md:py-10">
      <PageHeader eyebrow="Közösség" title="Vállalkozók, akik csinálják" lead="Kérdezz, oszd meg, mire jutottál, és nézd meg, mások min dolgoznak. Nincs kéretlen eladás." />

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          <Composer />
          <Tabs
            value={tab}
            onChange={setTab}
            items={[
              { id: "mind", label: "Mind", count: posts.length },
              { id: "kerdes", label: "Kérdés", count: counts("kerdes") },
              { id: "siker", label: "Siker", count: counts("siker") },
              { id: "kihivas", label: "Kihívás", count: counts("kihivas") },
              { id: "bejelentes", label: "Bejelentés", count: counts("bejelentes") },
            ]}
          />
          {tab === "siker" && (
            <p className="text-sm text-(--fp-muted-fg)">
              <Sparkles size={13} className="mr-1 inline text-(--fp-gold)" aria-hidden="true" />
              A kiemelt bejegyzésekre Péter személyesen reagált. Csak valódi, tagoktól származó eredmények.
            </p>
          )}
          <div className="space-y-4">
            {list.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-20 lg:self-start">
          {task && (
            <Card className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <Eyebrow className="text-[10px]">Heti feladat · {week}. hét</Eyebrow>
                <CheckSquare size={14} className={isTaskDone(week) ? "text-(--fp-gold)" : "text-(--fp-muted-fg)"} aria-hidden="true" />
              </div>
              <p className="fp-display text-base">{task.title}</p>
              <p className="mt-1 line-clamp-3 text-sm text-(--fp-muted-fg)">{task.text}</p>
              <Link href={`${BASE}/feladatok`} className="mt-3 inline-block text-sm text-(--fp-gold) hover:underline">
                {isTaskDone(week) ? "Kész — megnézem" : "Megcsinálom"}
              </Link>
            </Card>
          )}
          {upcoming && (
            <Card className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <Eyebrow className="text-[10px]">Következő alkalom</Eyebrow>
                <Calendar size={14} className="text-(--fp-muted-fg)" aria-hidden="true" />
              </div>
              <p className="fp-display text-base">{upcoming.title}</p>
              <p className="mt-1 text-sm text-(--fp-muted-fg)">
                {formatShort(upcoming.date)} · {upcoming.time} · {EVENT_KIND_LABEL[upcoming.kind]}
              </p>
              <Link href={`${BASE}/naptar`} className="mt-3 inline-block text-sm text-(--fp-gold) hover:underline">
                Naptár
              </Link>
            </Card>
          )}
          <Card className="p-5">
            <Eyebrow className="mb-3 text-[10px]">A hónap legaktívabbjai</Eyebrow>
            <ol className="space-y-2.5">
              {top.map((m, i) => (
                <li key={m.id} className="flex items-center gap-3 text-sm">
                  <span className="w-4 text-xs text-(--fp-muted-fg)">{i + 1}</span>
                  <Avatar member={m} size={28} />
                  <span className="min-w-0 flex-1 truncate">{m.name}</span>
                  <span className="text-xs text-(--fp-muted-fg)">{m.points} p</span>
                </li>
              ))}
            </ol>
            <Link href={`${BASE}/tagok`} className="mt-3 inline-block text-sm text-(--fp-gold) hover:underline">
              Ranglista
            </Link>
          </Card>
        </aside>
      </div>
    </div>
  );
}
