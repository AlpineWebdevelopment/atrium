/* NIKA feladatkezelő — demo shell.
   Everything runs in the browser against seeded data: no network, no backend,
   no real contact. Views are switched in state rather than by URL, because the
   whole demo is one private, non-routable component. */

"use client";

import { useMemo, useReducer, useState } from "react";
import { TODAY, initialDb, reducer } from "./store";
import type { Contact, Role } from "./types";
import { Adatlap } from "./Adatlap";
import { Eladok, Import, Ma, Parositasok, Vevok } from "./views";
import { Button, Notice } from "./ui";

type View = "ma" | "eladok" | "vevok" | "parositasok" | "import";

const NAV: { id: View; label: string }[] = [
  { id: "ma", label: "Ma" },
  { id: "eladok", label: "Eladók" },
  { id: "vevok", label: "Vevők" },
  { id: "parositasok", label: "Párosítások" },
  { id: "import", label: "Import" },
];

export default function NikaDemo() {
  const [db, dispatch] = useReducer(reducer, undefined, initialDb);
  const [view, setView] = useState<View>("ma");
  const [openId, setOpenId] = useState<string | null>(null);
  const [quickAdd, setQuickAdd] = useState(false);

  const openCount = useMemo(() => db.tasks.filter((t) => t.status === "nyitott" && t.due_date <= TODAY).length, [db.tasks]);

  function open(id: string) {
    setOpenId(id);
  }

  return (
    <div className="min-h-screen bg-bone">
      <div className="mx-auto max-w-[1180px] px-5 py-8 sm:px-8">
        <header className="mb-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h1 className="font-onest text-[26px] leading-tight">NIKA feladatkezelő</h1>
              <p className="mt-1 text-[13px] text-ink/50">
                Beke Anikó irodája — {db.contacts.length} kapcsolat, {openCount} mai feladat
              </p>
            </div>
            <Button variant="primary" onClick={() => setQuickAdd(true)}>
              Új kapcsolat
            </Button>
          </div>

          <nav className="mt-5 flex flex-wrap gap-1 border-b border-line">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => {
                  setView(n.id);
                  setOpenId(null);
                }}
                className={`-mb-px border-b-2 px-3 py-2 text-[14px] transition-colors ${
                  view === n.id && !openId
                    ? "border-signal text-ink"
                    : "border-transparent text-ink/50 hover:text-ink/80"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
        </header>

        <main>
          {openId ? (
            <Adatlap
              db={db}
              contactId={openId}
              today={TODAY}
              dispatch={dispatch}
              onBack={() => setOpenId(null)}
              onOpen={open}
            />
          ) : view === "ma" ? (
            <Ma db={db} today={TODAY} dispatch={dispatch} onOpen={open} />
          ) : view === "eladok" ? (
            <Eladok db={db} today={TODAY} onOpen={open} />
          ) : view === "vevok" ? (
            <Vevok db={db} today={TODAY} onOpen={open} />
          ) : view === "parositasok" ? (
            <Parositasok db={db} dispatch={dispatch} onOpen={open} />
          ) : (
            <Import db={db} dispatch={dispatch} />
          )}
        </main>

        <footer className="mt-10 space-y-2">
          <Notice>
            Demó. A megjelenő nevek, számok és üzenetek kitaláltak, az adatok a böngészőben maradnak, és a frissítés
            visszaállítja a kiinduló állapotot. A dátumok egy rögzített naphoz igazodnak ({TODAY}).
          </Notice>
        </footer>
      </div>

      {quickAdd && <QuickAdd onClose={() => setQuickAdd(false)} onSave={(c, extra) => {
        dispatch({ type: "contact_added", contact: c, ...extra });
        setQuickAdd(false);
        setOpenId(c.id);
      }} />}
    </div>
  );
}

/* ---- Quick-add: role + a phone or an email is all it takes. Every
       qualification field stays optional, and the contact opens right after. ---- */

function QuickAdd({
  onClose,
  onSave,
}: {
  onClose: () => void;
  onSave: (contact: Contact, extra: { property?: never; brief?: never }) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("elado");

  const canSave = name.trim().length > 0 && (phone.trim().length > 0 || email.trim().length > 0);

  function save() {
    if (!canSave) return;
    const id = `c_new_${name.replace(/\W+/g, "").slice(0, 8)}_${Math.abs(hash(name + phone + email))}`;
    const now = `${TODAY}T09:00:00.000Z`;
    onSave(
      {
        id,
        name: name.trim(),
        phone: phone.trim() || null,
        email: email.trim() || null,
        role,
        source: "kezi",
        status: "uj",
        consent_basis: null,
        consent_at: null,
        // Manually added contacts sit behind the same jogalap gate as imports.
        outreach_allowed: false,
        notes: null,
        next_step: "Jogalap rögzítése a megkeresés előtt",
        next_step_due: TODAY,
        created_at: now,
        updated_at: now,
      },
      {},
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/25 p-5 pt-[12vh]" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-xl border border-line bg-white p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-onest text-[18px]">Új kapcsolat</h2>
        <p className="mt-1 text-[13px] text-ink/50">
          Név és egy elérhetőség elég. A minősítés többi mezője később, a beszélgetés során töltődik ki.
        </p>

        <div className="mt-4 space-y-3">
          <label className="block">
            <span className="mb-1 block text-[12px] text-ink/50">Név</span>
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-line px-2.5 py-1.5 text-[14px] outline-none focus:border-signal/60 focus:ring-2 focus:ring-signal/15"
            />
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="mb-1 block text-[12px] text-ink/50">Telefon</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+3630..."
                className="w-full rounded-lg border border-line px-2.5 py-1.5 text-[14px] outline-none focus:border-signal/60 focus:ring-2 focus:ring-signal/15"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-[12px] text-ink/50">E-mail</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-line px-2.5 py-1.5 text-[14px] outline-none focus:border-signal/60 focus:ring-2 focus:ring-signal/15"
              />
            </label>
          </div>

          <fieldset>
            <legend className="mb-1 text-[12px] text-ink/50">Szerep</legend>
            <div className="flex gap-1.5">
              {(["elado", "vevo", "mindketto"] as Role[]).map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`rounded-full border px-3 py-1 text-[13px] transition-colors ${
                    role === r ? "border-ink bg-ink text-bone" : "border-line text-ink/60 hover:bg-panel/60"
                  }`}
                >
                  {r === "elado" ? "Eladó" : r === "vevo" ? "Vevő" : "Mindkettő"}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-[12px] text-ink/45">Megkeresés csak a jogalap rögzítése után indul.</p>
          <div className="flex gap-2">
            <Button onClick={onClose}>Mégsem</Button>
            <Button variant="primary" onClick={save} disabled={!canSave}>
              Mentés
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Small stable hash so a quick-added id is deterministic for the same input. */
function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return h;
}
