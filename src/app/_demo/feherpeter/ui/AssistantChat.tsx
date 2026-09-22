"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUp, BookOpen, Star } from "lucide-react";
import { ASSISTANT_FALLBACK, ASSISTANT_PAIRS, ASSISTANT_SUGGESTIONS } from "../data/assistant";
import { BASE } from "../data/config";
import { useStore } from "../lib/store";
import { hasTier } from "../lib/access";
import { matchAssistant } from "../lib/assistant";
import { lessonTitle } from "../lib/courses";
import { uid } from "../lib/ids";
import { Avatar, DemoNote } from "./primitives";

/* The chat surface used by /kerdezz and the lesson side panel. Answers come
   from the curated pairs; every answer links its lesson. */
export function AssistantChat({ compact = false, contextLesson }: { compact?: boolean; contextLesson?: { courseSlug: string; lessonSlug: string; title: string } }) {
  const { chat, pushChat, clearChat, courses, members, tiers, myTier } = useStore();
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(false);
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const peter = members.find((m) => m.isMentor);
  const belso = hasTier(tiers, myTier, "belso");

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [chat.length, thinking]);

  const ask = (q: string) => {
    const question = q.trim();
    if (!question || thinking) return;
    pushChat({ id: uid("u"), from: "me", text: question, priority });
    setText("");
    setThinking(true);
    const wasPriority = priority;
    setPriority(false);
    window.setTimeout(() => {
      const hit = matchAssistant(question, ASSISTANT_PAIRS);
      if (hit) {
        pushChat({ id: uid("a"), from: "peter", text: hit.pair.answer, lesson: hit.pair.lesson });
      } else {
        const fb = ASSISTANT_FALLBACK;
        pushChat({
          id: uid("a"),
          from: "peter",
          text: `Erre a kérdésre a kurzus ${fb.moduleNumber}. moduljában térek ki részletesen. Nézd meg a kapcsolódó leckét, és ha utána is marad kérdésed, írd meg a közösségben a Kérdés kategóriába.`,
          lesson: { courseSlug: fb.courseSlug, lessonSlug: fb.lessonSlug },
        });
      }
      if (wasPriority) {
        pushChat({ id: uid("s"), from: "peter", text: "A kérdésedet kiemelt kérdésként továbbítottam Péternek. A következő Belső kör alkalom előtt személyesen válaszol rá." });
      }
      setThinking(false);
    }, 650);
  };

  return (
    <div className={`flex min-h-0 flex-1 flex-col ${compact ? "" : "fp-card"}`}>
      <div className={`flex-1 space-y-4 overflow-y-auto ${compact ? "px-1 py-3" : "p-5"}`}>
        {chat.length === 0 && (
          <div className="fp-fade space-y-4">
            <div className="flex items-start gap-3">
              <Avatar member={peter} size={32} />
              <div className="rounded-(--fp-radius) rounded-tl-none bg-(--fp-secondary) px-4 py-3 text-sm">
                Kérdezz bármit, amiről a kurzusokban szó van. A válaszaim a leckéimből jönnek, és mindig megmutatom, melyikből.
                {contextLesson && (
                  <span className="mt-2 block text-(--fp-muted-fg)">
                    Most itt vagy: <em>{contextLesson.title}</em>
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pl-11">
              {ASSISTANT_SUGGESTIONS.map((s) => (
                <button key={s} type="button" onClick={() => ask(s)} className="rounded-full border border-(--fp-border) px-3 py-1.5 text-xs text-(--fp-muted-fg) transition-colors hover:border-(--fp-gold-40) hover:text-(--fp-gold)">
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {chat.map((m) =>
          m.from === "me" ? (
            <div key={m.id} className="fp-enter flex justify-end">
              <div className="max-w-[85%] rounded-(--fp-radius) rounded-tr-none bg-(--fp-gold-10) px-4 py-3 text-sm">
                {m.priority && (
                  <span className="mb-1 flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-(--fp-gold)">
                    <Star size={10} aria-hidden="true" /> Kiemelt kérdés
                  </span>
                )}
                {m.text}
              </div>
            </div>
          ) : (
            <div key={m.id} className="fp-enter flex items-start gap-3">
              <Avatar member={peter} size={32} />
              <div className="max-w-[85%]">
                <div className="rounded-(--fp-radius) rounded-tl-none bg-(--fp-secondary) px-4 py-3 text-sm">{m.text}</div>
                {m.lesson && (
                  <Link href={`${BASE}/kurzusok/${m.lesson.courseSlug}/${m.lesson.lessonSlug}`} className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-(--fp-gold) hover:underline">
                    <BookOpen size={12} aria-hidden="true" />
                    Forrás: {lessonTitle(courses, m.lesson.courseSlug, m.lesson.lessonSlug) ?? "lecke"}
                  </Link>
                )}
              </div>
            </div>
          ),
        )}
        {thinking && (
          <div className="fp-fade flex items-center gap-3">
            <Avatar member={peter} size={32} />
            <span className="text-xs text-(--fp-muted-fg)">Keresem a leckéimben…</span>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(text);
        }}
        className={`border-t border-(--fp-border) ${compact ? "pt-3" : "p-4"}`}
      >
        <div className="flex items-end gap-2">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                ask(text);
              }
            }}
            rows={1}
            placeholder="Írd le a kérdésedet"
            aria-label="Kérdés"
            className="fp-input min-h-11 flex-1"
            style={{ resize: "none" }}
          />
          <button type="submit" disabled={!text.trim() || thinking} className="fp-btn fp-btn--primary h-11 w-11 flex-none p-0" aria-label="Küldés">
            <ArrowUp size={18} />
          </button>
        </div>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          {belso ? (
            <label className="flex cursor-pointer items-center gap-2 text-xs text-(--fp-muted-fg)">
              <input type="checkbox" checked={priority} onChange={(e) => setPriority(e.target.checked)} className="accent-(--fp-gold)" />
              Kiemelt kérdés Péternek
            </label>
          ) : (
            <span />
          )}
          <div className="flex items-center gap-3">
            {chat.length > 0 && (
              <button type="button" onClick={clearChat} className="text-xs text-(--fp-muted-fg) hover:text-(--fp-fg)">
                Új beszélgetés
              </button>
            )}
            <DemoNote>Demo — a valódi verzió Péter kurzusainak átirataiból válaszol</DemoNote>
          </div>
        </div>
      </form>
    </div>
  );
}
