"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { IDEA_CATEGORIES, IDEA_STATUSES } from "../data/ideas";
import type { Idea, IdeaCategory, IdeaStatus } from "../data/types";
import { useStore } from "../lib/store";
import { Button, Card, Field, Modal, PageHeader } from "../ui/primitives";

/* A calm working board for Péter and the builder to think in. Nothing here is
   promised to members; it is strategy, not a feature list. */

const STATUS_TONE: Record<IdeaStatus, string> = {
  Ötlet: "border-(--fp-border) text-(--fp-muted-fg)",
  "Megfontolás alatt": "border-(--fp-gold-40) text-(--fp-gold)",
  Elfogadva: "border-(--fp-gold) bg-(--fp-gold-10) text-(--fp-gold)",
  Elvetve: "border-(--fp-border) text-(--fp-muted-fg) line-through",
};

function IdeaCard({ idea, onChange }: { idea: Idea; onChange: (i: Idea) => void }) {
  const [editing, setEditing] = useState(false);
  const [note, setNote] = useState(idea.note);
  return (
    <Card as="li" className={`flex flex-col p-5 ${idea.status === "Elvetve" ? "opacity-60" : ""}`}>
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-[11px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">{idea.category}</span>
        <select value={idea.status} onChange={(e) => onChange({ ...idea, status: e.target.value as IdeaStatus })} aria-label="Állapot" className={`rounded-full border bg-transparent px-2.5 py-1 text-[11px] ${STATUS_TONE[idea.status]}`}>
          {IDEA_STATUSES.map((s) => (
            <option key={s} value={s} className="bg-(--fp-card) text-(--fp-fg)">
              {s}
            </option>
          ))}
        </select>
      </div>
      <h3 className="text-lg leading-snug">{idea.title}</h3>
      {editing ? (
        <div className="mt-3 flex-1">
          <textarea className="fp-input" rows={5} value={note} onChange={(e) => setNote(e.target.value)} aria-label="Jegyzet" />
          <div className="mt-2 flex justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={() => (setNote(idea.note), setEditing(false))}>
              Mégse
            </Button>
            <Button size="sm" onClick={() => (onChange({ ...idea, note }), setEditing(false))}>
              Mentés
            </Button>
          </div>
        </div>
      ) : (
        <>
          <p className="mt-3 flex-1 text-sm text-(--fp-fg-90)">{idea.note}</p>
          <button type="button" onClick={() => setEditing(true)} className="mt-4 self-start text-xs text-(--fp-muted-fg) hover:text-(--fp-gold)">
            Jegyzet szerkesztése
          </button>
        </>
      )}
    </Card>
  );
}

export default function AdminOtletek() {
  const { ideas, setIdeas } = useStore();
  const [cat, setCat] = useState<IdeaCategory | "">("");
  const [status, setStatus] = useState<IdeaStatus | "">("");
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<{ title: string; note: string; category: IdeaCategory }>({ title: "", note: "", category: "Tartalom" });

  const list = ideas.filter((i) => (!cat || i.category === cat) && (!status || i.status === status));
  const counts = (s: IdeaStatus) => ideas.filter((i) => i.status === s).length;

  return (
    <div>
      <PageHeader
        eyebrow="Munkatábla"
        title="Ötletek"
        lead="Amin gondolkodunk az akadémia körül. Nem funkciólista, és semmi sincs belőle megígérve a tagoknak."
        actions={
          <Button size="sm" onClick={() => setOpen(true)}>
            <Plus size={14} aria-hidden="true" /> Új ötlet
          </Button>
        }
      />

      <div className="mb-6 flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setCat("")} aria-pressed={!cat} className={`rounded-full border px-3 py-1 text-xs ${!cat ? "border-(--fp-gold) text-(--fp-gold)" : "border-(--fp-border) text-(--fp-muted-fg)"}`}>
          Mind
        </button>
        {IDEA_CATEGORIES.map((c) => (
          <button key={c} type="button" onClick={() => setCat(cat === c ? "" : c)} aria-pressed={cat === c} className={`rounded-full border px-3 py-1 text-xs ${cat === c ? "border-(--fp-gold) text-(--fp-gold)" : "border-(--fp-border) text-(--fp-muted-fg)"}`}>
            {c}
          </button>
        ))}
        <span className="mx-2 hidden h-4 w-px bg-(--fp-border) sm:inline" />
        {IDEA_STATUSES.map((s) => (
          <button key={s} type="button" onClick={() => setStatus(status === s ? "" : s)} aria-pressed={status === s} className={`rounded-full border px-3 py-1 text-xs ${status === s ? "border-(--fp-gold) text-(--fp-gold)" : "border-(--fp-border) text-(--fp-muted-fg)"}`}>
            {s} <span className="opacity-60">{counts(s)}</span>
          </button>
        ))}
      </div>

      <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((i) => (
          <IdeaCard key={i.id} idea={i} onChange={(n) => setIdeas(ideas.map((x) => (x.id === n.id ? n : x)))} />
        ))}
      </ul>
      {list.length === 0 && <p className="text-sm text-(--fp-muted-fg)">Nincs ilyen ötlet.</p>}

      <Modal open={open} onClose={() => setOpen(false)} title="Új ötlet">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            if (!draft.title.trim()) return;
            setIdeas([{ id: `i-${Date.now().toString(36)}`, title: draft.title.trim(), note: draft.note.trim(), category: draft.category, status: "Ötlet" }, ...ideas]);
            setDraft({ title: "", note: "", category: "Tartalom" });
            setOpen(false);
          }}
        >
          <Field label="Cím">
            <input className="fp-input" value={draft.title} onChange={(e) => setDraft({ ...draft, title: e.target.value })} autoFocus />
          </Field>
          <Field label="Kategória">
            <select className="fp-input" value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value as IdeaCategory })}>
              {IDEA_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Jegyzet (2–4 mondat)">
            <textarea className="fp-input" rows={4} value={draft.note} onChange={(e) => setDraft({ ...draft, note: e.target.value })} />
          </Field>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Mégse
            </Button>
            <Button type="submit" disabled={!draft.title.trim()}>
              Felveszem
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
