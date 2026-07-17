/* List and overview views: Ma, Eladók, Vevők, Párosítások, Import. */

"use client";

import { useMemo, useState } from "react";
import type { Action, DemoDb } from "./store";
import {
  briefOf,
  buyers,
  contactById,
  newLeads,
  openTasksDue,
  propertyOf,
  sellers,
  unansweredInbound,
} from "./store";
import type { Contact, Match, Status } from "./types";
import {
  CHANNEL_LABEL,
  MATCH_STATUS_LABEL,
  STATUS_LABEL,
  SURGOSSEG_LABEL,
  TIPUS_LABEL,
  dueLabel,
  ft,
  ftShort,
  huDateTime,
  joinHu,
  m2,
} from "./format";
import { Button, Empty, Notice, Panel, ScoreBar, StatusBadge } from "./ui";

type Nav = (contactId: string) => void;

/* ---------------------------------------------------------------- Ma ---- */

export function Ma({
  db,
  today,
  dispatch,
  onOpen,
}: {
  db: DemoDb;
  today: string;
  dispatch: (a: Action) => void;
  onOpen: Nav;
}) {
  const due = openTasksDue(db, today);
  const leads = newLeads(db);
  const inbound = unansweredInbound(db);

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <Panel title={`Lejárt és mai feladatok (${due.length})`} className="lg:col-span-2">
        {due.length === 0 ? (
          <Empty>Nincs mai feladat. A következő feladat automatikusan megjelenik itt.</Empty>
        ) : (
          <ul className="divide-y divide-line">
            {due.map((t) => {
              const c = t.contact_id ? contactById(db, t.contact_id) : undefined;
              const overdue = t.due_date < today;
              return (
                <li key={t.id} className="flex items-center gap-3 px-5 py-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[14px]">{t.title}</p>
                    <p className="mt-0.5 text-[12px] text-ink/50">
                      {c ? (
                        <button onClick={() => onOpen(c.id)} className="underline underline-offset-2 hover:text-ink">
                          {c.name}
                        </button>
                      ) : (
                        "Nincs kapcsolat"
                      )}
                      <span className={overdue ? "ml-2 text-[#8A2F2F]" : "ml-2"}>{dueLabel(t.due_date, today)}</span>
                      <span className="ml-2 text-ink/35">{t.origin === "auto" ? "automatikus" : "kézi"}</span>
                    </p>
                  </div>
                  <Button onClick={() => dispatch({ type: "task_completed", id: t.id })}>Kész</Button>
                </li>
              );
            })}
          </ul>
        )}
      </Panel>

      <Panel title={`Válaszra váró üzenetek (${inbound.length})`}>
        {inbound.length === 0 ? (
          <Empty>Nincs megválaszolatlan üzenet.</Empty>
        ) : (
          <ul className="divide-y divide-line">
            {inbound.map(({ conversation, message }) => {
              const c = contactById(db, conversation.contact_id);
              if (!c) return null;
              return (
                <li key={conversation.id} className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <button onClick={() => onOpen(c.id)} className="text-[14px] underline underline-offset-2">
                      {c.name}
                    </button>
                    <span className="text-[12px] text-ink/40">{CHANNEL_LABEL[conversation.channel]}</span>
                    <span className="ml-auto text-[12px] text-ink/40">{huDateTime(message.sent_at)}</span>
                  </div>
                  <p className="mt-1 line-clamp-2 text-[13px] text-ink/60">{message.body}</p>
                </li>
              );
            })}
          </ul>
        )}
      </Panel>

      <Panel title={`Új érdeklődők (${leads.length})`}>
        {leads.length === 0 ? (
          <Empty>Nincs új érdeklődő.</Empty>
        ) : (
          <ul className="divide-y divide-line">
            {leads.map((c) => (
              <li key={c.id} className="flex items-center gap-3 px-5 py-3">
                <button onClick={() => onOpen(c.id)} className="text-[14px] underline underline-offset-2">
                  {c.name}
                </button>
                <span className="text-[12px] text-ink/40">{c.role === "elado" ? "Eladó" : "Vevő"}</span>
                <span className="ml-auto">
                  <StatusBadge status={c.status} />
                </span>
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}

/* ------------------------------------------------- Eladók / Vevők ---- */

function StatusFilter({
  value,
  onChange,
  counts,
}: {
  value: Status | "mind";
  onChange: (v: Status | "mind") => void;
  counts: Record<string, number>;
}) {
  const options: (Status | "mind")[] = [
    "mind",
    "uj",
    "minosites_folyamatban",
    "minositett",
    "idopont_kikuldve",
    "megtekintes_foglalva",
    "nem_elerheto",
    "leiratkozott",
  ];
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => {
        const n = o === "mind" ? counts.mind : (counts[o] ?? 0);
        if (o !== "mind" && n === 0) return null;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-full border px-2.5 py-1 text-[12px] transition-colors ${
              value === o ? "border-ink bg-ink text-bone" : "border-line bg-white text-ink/60 hover:bg-panel/60"
            }`}
          >
            {o === "mind" ? "Mind" : STATUS_LABEL[o]} <span className="opacity-50">{n}</span>
          </button>
        );
      })}
    </div>
  );
}

function useFiltered(list: Contact[]) {
  const [status, setStatus] = useState<Status | "mind">("mind");
  const [q, setQ] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = { mind: list.length };
    for (const x of list) c[x.status] = (c[x.status] ?? 0) + 1;
    return c;
  }, [list]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return list.filter((c) => {
      if (status !== "mind" && c.status !== status) return false;
      if (!needle) return true;
      return c.name.toLowerCase().includes(needle);
    });
  }, [list, status, q]);

  return { status, setStatus, q, setQ, counts, filtered };
}

function ListControls({
  q,
  setQ,
  status,
  setStatus,
  counts,
  placeholder,
}: {
  q: string;
  setQ: (v: string) => void;
  status: Status | "mind";
  setStatus: (v: Status | "mind") => void;
  counts: Record<string, number>;
  placeholder: string;
}) {
  return (
    <div className="mb-4 space-y-3">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={placeholder}
        className="w-full max-w-sm rounded-lg border border-line bg-white px-3 py-2 text-[14px] outline-none focus:border-signal/60 focus:ring-2 focus:ring-signal/15"
      />
      <StatusFilter value={status} onChange={setStatus} counts={counts} />
    </div>
  );
}

/** Row layout is shared; only the middle "mit kínál / mit keres" column differs. */
function ContactRows({
  rows,
  today,
  onOpen,
  columnLabel,
}: {
  rows: { contact: Contact; summary: string; price: string }[];
  today: string;
  onOpen: Nav;
  columnLabel: string;
}) {
  if (rows.length === 0) {
    return <Empty>Nincs a szűrésnek megfelelő kapcsolat. Módosítsa a szűrőt, vagy vegyen fel újat.</Empty>;
  }
  return (
    <>
      {/* Desktop: table. */}
      <table className="hidden w-full text-left md:table">
        <thead>
          <tr className="border-b border-line text-[12px] text-ink/45">
            <th className="px-5 py-2.5 font-normal">Név</th>
            <th className="px-3 py-2.5 font-normal">{columnLabel}</th>
            <th className="px-3 py-2.5 font-normal">Ár</th>
            <th className="px-3 py-2.5 font-normal">Állapot</th>
            <th className="px-5 py-2.5 font-normal">Következő lépés</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {rows.map(({ contact, summary, price }) => (
            <tr key={contact.id} className="hover:bg-panel/40">
              <td className="px-5 py-3">
                <button onClick={() => onOpen(contact.id)} className="text-[14px] underline underline-offset-2">
                  {contact.name}
                </button>
                {!contact.outreach_allowed && contact.status !== "leiratkozott" && (
                  <span className="ml-2 text-[11px] text-[#8A2F2F]">jogalap hiányzik</span>
                )}
              </td>
              <td className="px-3 py-3 text-[13px] text-ink/70">{summary}</td>
              <td className="whitespace-nowrap px-3 py-3 text-[13px] tabular-nums">{price}</td>
              <td className="px-3 py-3">
                <StatusBadge status={contact.status} />
              </td>
              <td className="px-5 py-3">
                <p className="text-[13px]">{contact.next_step ?? "—"}</p>
                {contact.next_step_due && (
                  <p className={`text-[12px] ${contact.next_step_due < today ? "text-[#8A2F2F]" : "text-ink/45"}`}>
                    {dueLabel(contact.next_step_due, today)}
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile: cards. */}
      <ul className="divide-y divide-line md:hidden">
        {rows.map(({ contact, summary, price }) => (
          <li key={contact.id} className="px-5 py-4">
            <div className="flex items-center justify-between gap-2">
              <button onClick={() => onOpen(contact.id)} className="text-[15px] underline underline-offset-2">
                {contact.name}
              </button>
              <StatusBadge status={contact.status} />
            </div>
            <p className="mt-1.5 text-[13px] text-ink/70">{summary}</p>
            <p className="mt-0.5 text-[13px] tabular-nums">{price}</p>
            {contact.next_step && (
              <p className="mt-2 text-[12px] text-ink/50">
                {contact.next_step}
                {contact.next_step_due ? ` — ${dueLabel(contact.next_step_due, today)}` : ""}
              </p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export function Eladok({ db, today, onOpen }: { db: DemoDb; today: string; onOpen: Nav }) {
  const list = useMemo(() => sellers(db), [db]);
  const { status, setStatus, q, setQ, counts, filtered } = useFiltered(list);

  const rows = filtered.map((contact) => {
    const p = propertyOf(db, contact.id);
    const where = [p?.telepules, p?.varosresz].filter(Boolean).join(", ");
    const what = p?.ingatlan_tipus ? TIPUS_LABEL[p.ingatlan_tipus] : "Nincs típus";
    const size = p?.meret_m2 ? ` · ${m2(p.meret_m2)}` : "";
    return {
      contact,
      summary: `${what}${size}${where ? ` · ${where}` : ""}`,
      price: p?.iranyar_ft ? ftShort(p.iranyar_ft) : "—",
    };
  });

  return (
    <>
      <ListControls q={q} setQ={setQ} status={status} setStatus={setStatus} counts={counts} placeholder="Keresés név szerint" />
      <Panel>
        <ContactRows rows={rows} today={today} onOpen={onOpen} columnLabel="Mit kínál" />
      </Panel>
    </>
  );
}

export function Vevok({ db, today, onOpen }: { db: DemoDb; today: string; onOpen: Nav }) {
  const list = useMemo(() => buyers(db), [db]);
  const { status, setStatus, q, setQ, counts, filtered } = useFiltered(list);

  const rows = filtered.map((contact) => {
    const b = briefOf(db, contact.id);
    const where = b?.keresett_telepulesek.length ? joinHu(b.keresett_telepulesek) : "Nincs település";
    const what = b?.ingatlan_tipus.length ? b.ingatlan_tipus.map((t) => TIPUS_LABEL[t]).join(", ") : "Nincs típus";
    const size = b?.meret_min_m2 ? ` · min. ${m2(b.meret_min_m2)}` : "";
    return {
      contact,
      summary: `${what}${size} · ${where}`,
      price: b?.keret_max_ft ? `max. ${ftShort(b.keret_max_ft)}` : "—",
    };
  });

  return (
    <>
      <ListControls q={q} setQ={setQ} status={status} setStatus={setStatus} counts={counts} placeholder="Keresés név szerint" />
      <Panel>
        <ContactRows rows={rows} today={today} onOpen={onOpen} columnLabel="Mit keres" />
      </Panel>
    </>
  );
}

/* ------------------------------------------------------ Párosítások ---- */

export function MatchCard({
  db,
  match,
  dispatch,
  onOpen,
}: {
  db: DemoDb;
  match: Match;
  dispatch: (a: Action) => void;
  onOpen: Nav;
}) {
  const property = db.properties.find((p) => p.id === match.property_id);
  const brief = db.briefs.find((b) => b.id === match.buyer_brief_id);
  if (!property || !brief) return null;
  const seller = contactById(db, property.contact_id);
  const buyer = contactById(db, brief.contact_id);
  if (!seller || !buyer) return null;

  return (
    <li className="px-5 py-4">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <button onClick={() => onOpen(seller.id)} className="text-[14px] underline underline-offset-2">
          {seller.name}
        </button>
        <span className="text-ink/30">→</span>
        <button onClick={() => onOpen(buyer.id)} className="text-[14px] underline underline-offset-2">
          {buyer.name}
        </button>
        <span className="ml-auto flex items-center gap-2">
          <span className="rounded-full border border-signal/40 bg-signal/12 px-2.5 py-0.5 text-[13px] tabular-nums">
            {match.score} pont
          </span>
          <span className="text-[12px] text-ink/45">{MATCH_STATUS_LABEL[match.status]}</span>
        </span>
      </div>

      <p className="mt-1.5 text-[13px] text-ink/60">
        {property.ingatlan_tipus ? TIPUS_LABEL[property.ingatlan_tipus] : "—"} · {m2(property.meret_m2)} ·{" "}
        {property.telepules} · {ft(property.iranyar_ft)}
        <span className="mx-2 text-ink/25">|</span>
        keret {ft(brief.keret_max_ft)} · min. {m2(brief.meret_min_m2)} · {SURGOSSEG_LABEL[brief.surgosseg ?? "nezelodik"]}
      </p>

      {/* The breakdown is the point: every pont is traceable to a line. */}
      <ul className="mt-3 space-y-1">
        {match.score_breakdown.lines.map((l) => (
          <li key={l.key} className="flex items-baseline gap-2 text-[12px]">
            <span className="w-20 shrink-0 text-ink/50">{l.label}</span>
            <ScoreBar points={l.points} max={l.max} />
            <span className="w-12 shrink-0 tabular-nums text-ink/70">
              {l.points}/{l.max}
            </span>
            <span className="text-ink/45">{l.reason}</span>
          </li>
        ))}
      </ul>

      {match.status === "javasolt" && (
        <div className="mt-3 flex gap-2">
          <Button variant="primary" onClick={() => dispatch({ type: "match_decided", id: match.id, status: "elfogadva" })}>
            Elfogadás
          </Button>
          <Button onClick={() => dispatch({ type: "match_decided", id: match.id, status: "elutasitva" })}>Elutasítás</Button>
        </div>
      )}
    </li>
  );
}

export function Parositasok({
  db,
  dispatch,
  onOpen,
}: {
  db: DemoDb;
  dispatch: (a: Action) => void;
  onOpen: Nav;
}) {
  const suggested = db.matches.filter((m) => m.status === "javasolt");
  const w = db.weights;

  return (
    <div className="space-y-5">
      <Notice>
        A párosítás pontozás, nem becslés: minden pont egy látható szabályból származik, és a küszöb felett kerül a
        listára. A teljes áttekintő felület a második ütemben készül el — itt a pontszám és a bontás látszik.
      </Notice>

      <Panel title={`Javasolt párosítások (${suggested.length})`}>
        {suggested.length === 0 ? (
          <Empty>Nincs a küszöböt elérő párosítás. Vegyen fel eladót vagy vevőt, és a pontozás automatikusan lefut.</Empty>
        ) : (
          <ul className="divide-y divide-line">
            {suggested.map((m) => (
              <MatchCard key={m.id} db={db} match={m} dispatch={dispatch} onOpen={onOpen} />
            ))}
          </ul>
        )}
      </Panel>

      <Panel title="Pontozás súlyai">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-2 px-5 py-4 text-[13px] sm:grid-cols-3">
          {[
            ["Település egyezés", `${w.telepules} pont`],
            ["Ár a kereten belül", `${w.ar_belul} pont`],
            ["Ár az alku sávban", `${w.ar_alku_savban} pont`],
            ["Alku sáv", `keret × ${w.alku_sav.toLocaleString("hu-HU")}`],
            ["Típus egyezés", `${w.tipus} pont`],
            ["Méret a minimum felett", `${w.meret} pont`],
            ["Méret a tűréshatáron belül", `${w.meret_kozeli} pont`],
            ["Méret tűréshatár", `−${Math.round(w.meret_tures * 100)}%`],
            ["Időzítés egyezés", `${w.idozites} pont`],
            ["Javaslati küszöb", `${w.kuszob} pont`],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-ink/50">{k}</dt>
              <dd className="tabular-nums">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="border-t border-line px-5 py-3 text-[12px] text-ink/45">
          Éles rendszerben a súlyok az adatbázisban állnak, nem a kódban, így az iroda módosíthatja őket.
        </p>
      </Panel>
    </div>
  );
}

/* ----------------------------------------------------------- Import ---- */

const IMPORT_FIELDS = ["name", "phone", "email", "role"] as const;
type ImportField = (typeof IMPORT_FIELDS)[number];

const FIELD_LABEL: Record<ImportField, string> = {
  name: "Név",
  phone: "Telefon",
  email: "E-mail",
  role: "Szerep",
};

/** Minimal CSV split — demo-grade: no quoted commas, no escapes. */
function parseCsv(text: string): string[][] {
  return text
    .trim()
    .split(/\r?\n/)
    .map((line) => line.split(",").map((cell) => cell.trim()));
}

export function Import({ db, dispatch }: { db: DemoDb; dispatch: (a: Action) => void }) {
  const [rows, setRows] = useState<string[][] | null>(null);
  const [mapping, setMapping] = useState<Record<ImportField, number>>({ name: -1, phone: -1, email: -1, role: -1 });
  const [done, setDone] = useState(0);

  function onFile(file: File) {
    file.text().then((text) => {
      const parsed = parseCsv(text);
      setRows(parsed);
      setDone(0);
      // Guess the mapping from the header row; the operator can correct it.
      const header = (parsed[0] ?? []).map((h) => h.toLowerCase());
      setMapping({
        name: header.findIndex((h) => h.includes("nev") || h.includes("név") || h.includes("name")),
        phone: header.findIndex((h) => h.includes("tel") || h.includes("phone")),
        email: header.findIndex((h) => h.includes("mail")),
        role: header.findIndex((h) => h.includes("szerep") || h.includes("role")),
      });
    });
  }

  function runImport() {
    if (!rows) return;
    const body = rows.slice(1);
    const imported = body
      .map((r, i) => {
        const name = mapping.name >= 0 ? r[mapping.name] : "";
        if (!name) return null;
        const roleRaw = (mapping.role >= 0 ? r[mapping.role] : "").toLowerCase();
        const role = roleRaw.startsWith("v") ? "vevo" : roleRaw.startsWith("m") ? "mindketto" : "elado";
        const created = `${db.contacts[0]?.created_at ?? new Date(0).toISOString()}`;
        return {
          id: `c_imp_${i}_${name.replace(/\W+/g, "").slice(0, 6)}`,
          name,
          phone: mapping.phone >= 0 ? (r[mapping.phone] || null) : null,
          email: mapping.email >= 0 ? (r[mapping.email] || null) : null,
          role,
          source: "import",
          status: "uj",
          consent_basis: null,
          consent_at: null,
          // The jogalap gate: imported contacts get no outbound until a human says so.
          outreach_allowed: false,
          notes: "CSV importból",
          next_step: "Jogalap tisztázása a megkeresés előtt",
          next_step_due: null,
          created_at: created,
          updated_at: created,
        } as Contact;
      })
      .filter((c): c is Contact => c !== null);

    dispatch({ type: "contacts_imported", contacts: imported });
    setDone(imported.length);
    setRows(null);
  }

  return (
    <div className="space-y-5">
      <Notice tone="warn">
        Importált kapcsolat nem kap megkeresést, amíg a jogalap nincs rögzítve. Ez szándékosan emberi lépés: az{" "}
        <span className="whitespace-nowrap">outreach_allowed</span> jelölést az adatlapon kell megadni.
      </Notice>

      <Panel title="CSV import">
        <div className="px-5 py-4">
          <input
            type="file"
            accept=".csv,text/csv"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) onFile(f);
            }}
            className="block w-full text-[13px] file:mr-3 file:rounded-lg file:border file:border-line file:bg-white file:px-3 file:py-1.5 file:text-[13px] file:text-ink/75"
          />
          <p className="mt-2 text-[12px] text-ink/45">
            Az első sor fejléc. Várt oszlopok: név, telefon, e-mail, szerep. A demó a fájlt csak a böngészőben olvassa.
          </p>
          {done > 0 && (
            <p className="mt-3 text-[13px] text-ink/70">
              {done} kapcsolat importálva, megkeresés nélkül. Nézze át őket az Eladók vagy a Vevők listában.
            </p>
          )}
        </div>
      </Panel>

      {rows && rows.length > 1 && (
        <Panel title="Oszlopok megfeleltetése" action={<Button variant="primary" onClick={runImport}>Import indítása</Button>}>
          <div className="grid gap-3 px-5 py-4 sm:grid-cols-4">
            {IMPORT_FIELDS.map((f) => (
              <label key={f} className="block">
                <span className="mb-1 block text-[12px] text-ink/50">{FIELD_LABEL[f]}</span>
                <select
                  value={mapping[f]}
                  onChange={(e) => setMapping((m) => ({ ...m, [f]: Number(e.target.value) }))}
                  className="w-full rounded-lg border border-line bg-white px-2.5 py-1.5 text-[14px] outline-none focus:border-signal/60"
                >
                  <option value={-1}>Nincs</option>
                  {(rows[0] ?? []).map((h, i) => (
                    <option key={i} value={i}>
                      {h || `${i + 1}. oszlop`}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <div className="overflow-x-auto border-t border-line">
            <table className="w-full text-left text-[13px]">
              <thead>
                <tr className="border-b border-line text-[12px] text-ink/45">
                  {IMPORT_FIELDS.map((f) => (
                    <th key={f} className="px-5 py-2 font-normal">
                      {FIELD_LABEL[f]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {rows.slice(1, 6).map((r, i) => (
                  <tr key={i}>
                    {IMPORT_FIELDS.map((f) => (
                      <td key={f} className="px-5 py-2">
                        {mapping[f] >= 0 ? (r[mapping[f]] ?? "") : <span className="text-ink/30">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-line px-5 py-2.5 text-[12px] text-ink/45">
            Előnézet az első {Math.min(5, rows.length - 1)} soron, összesen {rows.length - 1} sor.
          </p>
        </Panel>
      )}
    </div>
  );
}
