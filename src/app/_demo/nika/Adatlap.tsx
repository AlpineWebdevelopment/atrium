/* Kapcsolat adatlap — structured fields, conversation timeline, tasks, matches,
   GDPR actions. Everything the operator needs about one contact, on one page. */

"use client";

import { useState } from "react";
import type { Action, DemoDb } from "./store";
import {
  briefOf,
  conversationsOf,
  contactById,
  exportContact,
  matchesOf,
  messagesOf,
  outboundBlockedReason,
  propertyOf,
  tasksOf,
} from "./store";
import type { Allapot, Finanszirozas, Idozites, IngatlanTipus, Status, Surgosseg } from "./types";
import {
  ALLAPOT_LABEL,
  CHANNEL_LABEL,
  FINANSZIROZAS_LABEL,
  IDOZITES_LABEL,
  ROLE_LABEL,
  SOURCE_LABEL,
  STATUS_LABEL,
  SURGOSSEG_LABEL,
  TIPUS_LABEL,
  dueLabel,
  ft,
  huDate,
  huDateTime,
} from "./format";
import { Button, Empty, Field, Notice, Panel, Select, StatusBadge } from "./ui";
import { MatchCard } from "./views";

function opts<T extends string>(map: Record<T, string>): { value: T; label: string }[] {
  return (Object.keys(map) as T[]).map((value) => ({ value, label: map[value] }));
}

/** Parses an operator-typed amount: "45 000 000", "45000000" → 45000000. */
function parseFt(raw: string): number | null {
  const digits = raw.replace(/[^\d]/g, "");
  return digits ? Number(digits) : null;
}

export function Adatlap({
  db,
  contactId,
  today,
  dispatch,
  onBack,
  onOpen,
}: {
  db: DemoDb;
  contactId: string;
  today: string;
  dispatch: (a: Action) => void;
  onBack: () => void;
  onOpen: (id: string) => void;
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const contact = contactById(db, contactId);

  if (!contact) {
    return (
      <Panel>
        <Empty>Ez a kapcsolat már nem létezik. Térjen vissza a listához.</Empty>
      </Panel>
    );
  }

  const property = propertyOf(db, contactId);
  const brief = briefOf(db, contactId);
  const convs = conversationsOf(db, contactId);
  const tasks = tasksOf(db, contactId);
  const matches = matchesOf(db, contactId);
  const blocked = outboundBlockedReason(contact);

  function exportJson() {
    const blob = new Blob([exportContact(db, contactId)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${contactId}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={onBack}>Vissza</Button>
        <h1 className="font-onest text-[22px]">{contact.name}</h1>
        <StatusBadge status={contact.status} />
        <span className="text-[13px] text-ink/45">{ROLE_LABEL[contact.role]}</span>
      </div>

      {blocked && <Notice tone="warn">{blocked}</Notice>}

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-5">
          <Panel title="Alapadatok">
            <div className="grid gap-4 px-5 py-4 sm:grid-cols-2">
              <Field label="Név" value={contact.name} onSave={(name) => dispatch({ type: "contact_patched", id: contactId, patch: { name } })} />
              <Field label="Telefon" value={contact.phone ?? ""} onSave={(phone) => dispatch({ type: "contact_patched", id: contactId, patch: { phone: phone || null } })} />
              <Field label="E-mail" value={contact.email ?? ""} onSave={(email) => dispatch({ type: "contact_patched", id: contactId, patch: { email: email || null } })} />
              <Select<Status>
                label="Állapot"
                value={contact.status}
                options={opts(STATUS_LABEL)}
                onChange={(status) => dispatch({ type: "contact_patched", id: contactId, patch: { status } })}
              />
              <Field label="Következő lépés" value={contact.next_step ?? ""} onSave={(next_step) => dispatch({ type: "contact_patched", id: contactId, patch: { next_step: next_step || null } })} />
              <Field label="Határidő" value={contact.next_step_due ?? ""} placeholder="ÉÉÉÉ-HH-NN" onSave={(next_step_due) => dispatch({ type: "contact_patched", id: contactId, patch: { next_step_due: next_step_due || null } })} />
              <Field label="Forrás" value={SOURCE_LABEL[contact.source]} />
              <Field label="Felvéve" value={huDate(contact.created_at)} />
            </div>
          </Panel>

          {property && (
            <Panel title="Ingatlan">
              <div className="grid gap-4 px-5 py-4 sm:grid-cols-2">
                <Field label="Település" value={property.telepules ?? ""} onSave={(telepules) => dispatch({ type: "property_patched", id: property.id, patch: { telepules: telepules || null } })} />
                <Field label="Városrész" value={property.varosresz ?? ""} onSave={(varosresz) => dispatch({ type: "property_patched", id: property.id, patch: { varosresz: varosresz || null } })} />
                <Select<IngatlanTipus>
                  label="Ingatlan típusa"
                  value={property.ingatlan_tipus ?? ""}
                  options={opts(TIPUS_LABEL)}
                  onChange={(ingatlan_tipus) => dispatch({ type: "property_patched", id: property.id, patch: { ingatlan_tipus } })}
                />
                <Select<Allapot>
                  label="Állapot"
                  value={property.allapot ?? ""}
                  options={opts(ALLAPOT_LABEL)}
                  onChange={(allapot) => dispatch({ type: "property_patched", id: property.id, patch: { allapot } })}
                />
                <Field label="Méret (m²)" type="number" value={property.meret_m2?.toString() ?? ""} onSave={(v) => dispatch({ type: "property_patched", id: property.id, patch: { meret_m2: v ? Number(v) : null } })} />
                <Field label="Szobák" type="number" value={property.szobak?.toString() ?? ""} onSave={(v) => dispatch({ type: "property_patched", id: property.id, patch: { szobak: v ? Number(v) : null } })} />
                <Field label="Irányár" value={property.iranyar_ft ? ft(property.iranyar_ft) : ""} onSave={(v) => dispatch({ type: "property_patched", id: property.id, patch: { iranyar_ft: parseFt(v) } })} />
                <Select<Idozites>
                  label="Értékesítési időzítés"
                  value={property.ertekesitesi_idozites ?? ""}
                  options={opts(IDOZITES_LABEL)}
                  onChange={(ertekesitesi_idozites) => dispatch({ type: "property_patched", id: property.id, patch: { ertekesitesi_idozites } })}
                />
              </div>
              {property.notes && <p className="border-t border-line px-5 py-3 text-[13px] text-ink/60">{property.notes}</p>}
            </Panel>
          )}

          {brief && (
            <Panel title="Keresési igény">
              <div className="grid gap-4 px-5 py-4 sm:grid-cols-2">
                <Field
                  label="Keresett települések"
                  value={brief.keresett_telepulesek.join(", ")}
                  placeholder="Vesszővel elválasztva"
                  onSave={(v) =>
                    dispatch({
                      type: "brief_patched",
                      id: brief.id,
                      patch: { keresett_telepulesek: v.split(",").map((s) => s.trim()).filter(Boolean) },
                    })
                  }
                />
                <Field label="Keresett típusok" value={brief.ingatlan_tipus.map((t) => TIPUS_LABEL[t]).join(", ")} />
                <Field label="Minimum méret (m²)" type="number" value={brief.meret_min_m2?.toString() ?? ""} onSave={(v) => dispatch({ type: "brief_patched", id: brief.id, patch: { meret_min_m2: v ? Number(v) : null } })} />
                <Field label="Minimum szobaszám" type="number" value={brief.szobak_min?.toString() ?? ""} onSave={(v) => dispatch({ type: "brief_patched", id: brief.id, patch: { szobak_min: v ? Number(v) : null } })} />
                <Field label="Keret (maximum)" value={brief.keret_max_ft ? ft(brief.keret_max_ft) : ""} onSave={(v) => dispatch({ type: "brief_patched", id: brief.id, patch: { keret_max_ft: parseFt(v) } })} />
                <Select<Finanszirozas>
                  label="Finanszírozás"
                  value={brief.finanszirozas ?? ""}
                  options={opts(FINANSZIROZAS_LABEL)}
                  onChange={(finanszirozas) => dispatch({ type: "brief_patched", id: brief.id, patch: { finanszirozas } })}
                />
                <Select<Surgosseg>
                  label="Sürgősség"
                  value={brief.surgosseg ?? ""}
                  options={opts(SURGOSSEG_LABEL)}
                  onChange={(surgosseg) => dispatch({ type: "brief_patched", id: brief.id, patch: { surgosseg } })}
                />
              </div>
              {brief.notes && <p className="border-t border-line px-5 py-3 text-[13px] text-ink/60">{brief.notes}</p>}
            </Panel>
          )}

          <Panel title="Beszélgetések">
            {convs.length === 0 ? (
              <Empty>Nincs beszélgetés ezzel a kapcsolattal.</Empty>
            ) : (
              convs.map((c) => {
                const thread = messagesOf(db, c.id);
                return (
                  <div key={c.id} className="border-b border-line last:border-b-0">
                    <div className="flex items-center gap-2 px-5 py-2.5 text-[12px] text-ink/50">
                      <span>{CHANNEL_LABEL[c.channel]}</span>
                      <span className="text-ink/25">·</span>
                      <span>{c.goal === "elado_minosites" ? "Eladó minősítés" : "Vevő minősítés"}</span>
                      <span className="text-ink/25">·</span>
                      <span>
                        {c.state === "active" ? "Aktív" : c.state === "completed" ? "Lezárult" : "Leállítva"}
                      </span>
                      {c.state === "active" && (
                        <span className="ml-auto">
                          <Button onClick={() => dispatch({ type: "sequence_stopped", contact_id: contactId })}>
                            Sorozat leállítása
                          </Button>
                        </span>
                      )}
                    </div>
                    <ul className="space-y-2.5 px-5 pb-4">
                      {thread.map((m) => (
                        <li key={m.id} className={m.direction === "out" ? "flex justify-start" : "flex justify-end"}>
                          <div
                            className={`max-w-[85%] rounded-xl px-3 py-2 text-[13px] ${
                              m.direction === "out" ? "bg-panel/70 text-ink/80" : "bg-signal/12 text-ink"
                            }`}
                          >
                            <p className="whitespace-pre-wrap">{m.body}</p>
                            <p className="mt-1 text-[11px] text-ink/40">
                              {m.direction === "out" ? "Asszisztens" : contact.name} · {huDateTime(m.sent_at)}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })
            )}
          </Panel>
        </div>

        {/* ---- Sidebar: gate, tasks, matches, GDPR ---- */}
        <div className="space-y-5">
          <Panel title="Jogalap és megkeresés">
            <div className="space-y-3 px-5 py-4">
              <Field label="Jogalap" value={contact.consent_basis ?? ""} onSave={(v) => dispatch({ type: "contact_patched", id: contactId, patch: { consent_basis: v || null } })} />
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13px] text-ink/70">Megkereshető</span>
                <Button
                  variant={contact.outreach_allowed ? "ghost" : "primary"}
                  disabled={contact.status === "leiratkozott"}
                  title={contact.status === "leiratkozott" ? "Leiratkozott kapcsolat nem kapcsolható vissza." : undefined}
                  onClick={() => dispatch({ type: "outreach_toggled", id: contactId })}
                >
                  {contact.outreach_allowed ? "Igen — kikapcsolás" : "Nem — engedélyezés"}
                </Button>
              </div>
              <p className="text-[12px] text-ink/45">
                A jelölés emberi döntés. Amíg nincs bekapcsolva, a rendszer nem küld kimenő üzenetet.
              </p>
            </div>
          </Panel>

          <Panel title={`Feladatok (${tasks.filter((t) => t.status === "nyitott").length} nyitott)`}>
            {tasks.length === 0 ? (
              <Empty>Nincs feladat.</Empty>
            ) : (
              <ul className="divide-y divide-line">
                {tasks.map((t) => (
                  <li key={t.id} className="flex items-center gap-2 px-5 py-3">
                    <div className="min-w-0 flex-1">
                      <p className={`truncate text-[13px] ${t.status === "kesz" ? "text-ink/35 line-through" : ""}`}>{t.title}</p>
                      <p className="text-[12px] text-ink/45">{dueLabel(t.due_date, today)}</p>
                    </div>
                    {t.status === "nyitott" && <Button onClick={() => dispatch({ type: "task_completed", id: t.id })}>Kész</Button>}
                  </li>
                ))}
              </ul>
            )}
          </Panel>

          <Panel title={`Párosítások (${matches.length})`}>
            {matches.length === 0 ? (
              <Empty>Nincs a küszöböt elérő párosítás.</Empty>
            ) : (
              <ul className="divide-y divide-line">
                {matches.map((m) => (
                  <MatchCard key={m.id} db={db} match={m} dispatch={dispatch} onOpen={onOpen} />
                ))}
              </ul>
            )}
          </Panel>

          <Panel title="Adatkezelés">
            <div className="space-y-3 px-5 py-4">
              <Button onClick={exportJson}>Adatok exportálása (JSON)</Button>
              {confirmDelete ? (
                <div className="space-y-2">
                  <Notice tone="warn">
                    A törlés végleges: a kapcsolat, az ingatlan vagy keresési igény, az üzenetek és a párosítások is
                    törlődnek.
                  </Notice>
                  <div className="flex gap-2">
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch({ type: "contact_deleted", id: contactId });
                        onBack();
                      }}
                    >
                      Végleges törlés
                    </Button>
                    <Button onClick={() => setConfirmDelete(false)}>Mégsem</Button>
                  </div>
                </div>
              ) : (
                <Button variant="danger" onClick={() => setConfirmDelete(true)}>
                  Kapcsolat törlése
                </Button>
              )}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
