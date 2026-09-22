"use client";

import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { EVENT_KIND_LABEL } from "../data/events";
import type { AcademyEvent, EventKind, TierId } from "../data/types";
import { useStore } from "../lib/store";
import { formatDate, formatShort } from "../lib/dates";
import { Button, Card, Field, PageHeader, TierBadge } from "../ui/primitives";

const KINDS = Object.keys(EVENT_KIND_LABEL) as EventKind[];

export default function AdminEsemenyek() {
  const { events, setEvents, config, updateConfig, tiers, today } = useStore();
  const [editing, setEditing] = useState<string | null>(null);
  const sorted = [...events].sort((a, b) => b.date.localeCompare(a.date));
  const patch = (id: string, p: Partial<AcademyEvent>) => setEvents(events.map((e) => (e.id === id ? { ...e, ...p } : e)));

  const add = () => {
    const id = `e-${Date.now().toString(36)}`;
    setEvents([{ id, title: "Új alkalom", kind: "workshop", date: today, time: "18:00", durationMin: 60, tier: "alap", description: "" }, ...events]);
    setEditing(id);
  };

  return (
    <div>
      <PageHeader
        eyebrow="Élő alkalmak"
        title="Események"
        actions={
          <Button size="sm" onClick={add}>
            <Plus size={14} aria-hidden="true" /> Új esemény
          </Button>
        }
      />

      <Card className="mb-6 grid gap-4 p-5 sm:grid-cols-3">
        <Field label="Következő kör indul" hint={formatDate(config.nextCohortStart)}>
          <input type="date" className="fp-input" value={config.nextCohortStart} onChange={(e) => e.target.value && updateConfig({ nextCohortStart: e.target.value })} />
        </Field>
        <div>
          <span className="fp-label">Beiratkozás</span>
          <label className="flex cursor-pointer items-center gap-3 rounded-(--fp-radius-md) border border-(--fp-border) px-3 py-2.5 text-sm">
            <input type="checkbox" className="accent-(--fp-gold)" checked={config.enrollmentOpen} onChange={(e) => updateConfig({ enrollmentOpen: e.target.checked })} />
            {config.enrollmentOpen ? "Nyitva" : "Zárva — a nyitóoldalon várólista"}
          </label>
        </div>
        <p className="self-end text-xs text-(--fp-muted-fg)">A körök közötti zárt időszak igazi: az onboarding munka. Visszaszámláló nincs.</p>
      </Card>

      <ul className="space-y-2">
        {sorted.map((e) => {
          const open = editing === e.id;
          const past = e.date < today;
          return (
            <Card as="li" key={e.id} className="overflow-hidden">
              <div className="flex items-center gap-4 px-4 py-3">
                <span className={`w-16 flex-none text-xs ${past ? "text-(--fp-muted-fg)" : ""}`}>{formatShort(e.date)}</span>
                <span className="min-w-0 flex-1 truncate text-sm">{e.title}</span>
                <span className="hidden text-xs text-(--fp-muted-fg) sm:inline">{EVENT_KIND_LABEL[e.kind]}</span>
                <TierBadge tier={e.tier} />
                {e.recording && <span className="hidden text-xs text-(--fp-gold) md:inline">felvétel</span>}
                <Button variant="outline" size="sm" onClick={() => setEditing(open ? null : e.id)}>
                  {open ? "Kész" : "Szerkeszt"}
                </Button>
              </div>
              {open && (
                <div className="fp-fade grid gap-3 border-t border-(--fp-border) px-4 py-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="sm:col-span-2">
                    <Field label="Cím">
                      <input className="fp-input" value={e.title} onChange={(ev) => patch(e.id, { title: ev.target.value })} />
                    </Field>
                  </div>
                  <Field label="Típus">
                    <select className="fp-input" value={e.kind} onChange={(ev) => patch(e.id, { kind: ev.target.value as EventKind })}>
                      {KINDS.map((k) => (
                        <option key={k} value={k}>
                          {EVENT_KIND_LABEL[k]}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Szint">
                    <select className="fp-input" value={e.tier} onChange={(ev) => patch(e.id, { tier: ev.target.value as TierId })}>
                      {tiers.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Dátum">
                    <input type="date" className="fp-input" value={e.date} onChange={(ev) => ev.target.value && patch(e.id, { date: ev.target.value })} />
                  </Field>
                  <Field label="Kezdés">
                    <input type="time" className="fp-input" value={e.time} onChange={(ev) => patch(e.id, { time: ev.target.value })} />
                  </Field>
                  <Field label="Hossz (perc)">
                    <input type="number" className="fp-input" value={e.durationMin} onChange={(ev) => patch(e.id, { durationMin: Number(ev.target.value) })} />
                  </Field>
                  <div className="flex items-end justify-end">
                    <Button variant="ghost" size="sm" onClick={() => setEvents(events.filter((x) => x.id !== e.id))}>
                      <Trash2 size={14} aria-hidden="true" /> Törlés
                    </Button>
                  </div>
                  <div className="sm:col-span-2 lg:col-span-4">
                    <Field label="Leírás">
                      <textarea className="fp-input" rows={2} value={e.description} onChange={(ev) => patch(e.id, { description: ev.target.value })} />
                    </Field>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </ul>
    </div>
  );
}
