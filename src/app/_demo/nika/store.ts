/* In-memory demo store.
   The production build reads this shape from Supabase; here it lives in React
   state and never leaves the browser. Reducer actions are named after the
   operator actions they stand for, so swapping the backing store later is a
   matter of replacing the reducer body, not the call sites. */

import type {
  BuyerBrief,
  Contact,
  Conversation,
  Match,
  MatchWeights,
  Message,
  Property,
  Task,
} from "./types";
import { DEFAULT_WEIGHTS, computeMatches } from "./scorer";
import {
  DEMO_TODAY,
  seedBriefs,
  seedContacts,
  seedConversations,
  seedMessages,
  seedProperties,
  seedTasks,
} from "./seed";

export type DemoDb = {
  contacts: Contact[];
  properties: Property[];
  briefs: BuyerBrief[];
  conversations: Conversation[];
  messages: Message[];
  tasks: Task[];
  matches: Match[];
  weights: MatchWeights;
};

export function initialDb(): DemoDb {
  const properties = seedProperties();
  const briefs = seedBriefs();
  return {
    contacts: seedContacts(),
    properties,
    briefs,
    conversations: seedConversations(),
    messages: seedMessages(),
    tasks: seedTasks(),
    matches: computeMatches(properties, briefs, DEFAULT_WEIGHTS),
    weights: DEFAULT_WEIGHTS,
  };
}

export type Action =
  | { type: "contact_added"; contact: Contact; property?: Property; brief?: BuyerBrief }
  | { type: "contact_patched"; id: string; patch: Partial<Contact> }
  | { type: "property_patched"; id: string; patch: Partial<Property> }
  | { type: "brief_patched"; id: string; patch: Partial<BuyerBrief> }
  | { type: "contact_deleted"; id: string }
  | { type: "outreach_toggled"; id: string }
  | { type: "sequence_stopped"; contact_id: string }
  | { type: "task_completed"; id: string }
  | { type: "match_decided"; id: string; status: Match["status"] }
  | { type: "contacts_imported"; contacts: Contact[] };

/** Recomputes matches after any change that can move a score. */
function withMatches(db: DemoDb): DemoDb {
  return { ...db, matches: computeMatches(db.properties, db.briefs, db.weights, db.matches) };
}

export function reducer(db: DemoDb, action: Action): DemoDb {
  switch (action.type) {
    case "contact_added":
      return withMatches({
        ...db,
        contacts: [action.contact, ...db.contacts],
        properties: action.property ? [...db.properties, action.property] : db.properties,
        briefs: action.brief ? [...db.briefs, action.brief] : db.briefs,
      });

    case "contact_patched":
      return {
        ...db,
        contacts: db.contacts.map((c) => (c.id === action.id ? { ...c, ...action.patch } : c)),
      };

    case "property_patched":
      return withMatches({
        ...db,
        properties: db.properties.map((p) => (p.id === action.id ? { ...p, ...action.patch } : p)),
      });

    case "brief_patched":
      return withMatches({
        ...db,
        briefs: db.briefs.map((b) => (b.id === action.id ? { ...b, ...action.patch } : b)),
      });

    case "contact_deleted": {
      // Hard delete, cascading the way the DB's FKs would.
      const propertyIds = db.properties.filter((p) => p.contact_id === action.id).map((p) => p.id);
      const briefIds = db.briefs.filter((b) => b.contact_id === action.id).map((b) => b.id);
      const convIds = db.conversations.filter((c) => c.contact_id === action.id).map((c) => c.id);
      return withMatches({
        ...db,
        contacts: db.contacts.filter((c) => c.id !== action.id),
        properties: db.properties.filter((p) => p.contact_id !== action.id),
        briefs: db.briefs.filter((b) => b.contact_id !== action.id),
        conversations: db.conversations.filter((c) => c.contact_id !== action.id),
        messages: db.messages.filter((m) => !convIds.includes(m.conversation_id)),
        tasks: db.tasks.filter((t) => t.contact_id !== action.id),
        matches: db.matches.filter(
          (m) => !propertyIds.includes(m.property_id) && !briefIds.includes(m.buyer_brief_id),
        ),
      });
    }

    case "outreach_toggled":
      return {
        ...db,
        contacts: db.contacts.map((c) =>
          c.id === action.id ? { ...c, outreach_allowed: !c.outreach_allowed } : c,
        ),
      };

    case "sequence_stopped":
      return {
        ...db,
        conversations: db.conversations.map((c) =>
          c.contact_id === action.contact_id ? { ...c, state: "stopped" } : c,
        ),
      };

    case "task_completed":
      return { ...db, tasks: db.tasks.map((t) => (t.id === action.id ? { ...t, status: "kesz" } : t)) };

    case "match_decided":
      return {
        ...db,
        matches: db.matches.map((m) => (m.id === action.id ? { ...m, status: action.status } : m)),
      };

    case "contacts_imported":
      return { ...db, contacts: [...action.contacts, ...db.contacts] };

    default:
      return db;
  }
}

/* ---- Selectors ---- */

export const TODAY = DEMO_TODAY;

export function contactById(db: DemoDb, id: string): Contact | undefined {
  return db.contacts.find((c) => c.id === id);
}

export function propertyOf(db: DemoDb, contactId: string): Property | undefined {
  return db.properties.find((p) => p.contact_id === contactId);
}

export function briefOf(db: DemoDb, contactId: string): BuyerBrief | undefined {
  return db.briefs.find((b) => b.contact_id === contactId);
}

export function sellers(db: DemoDb): Contact[] {
  return db.contacts.filter((c) => c.role === "elado" || c.role === "mindketto");
}

export function buyers(db: DemoDb): Contact[] {
  return db.contacts.filter((c) => c.role === "vevo" || c.role === "mindketto");
}

export function tasksOf(db: DemoDb, contactId: string): Task[] {
  return db.tasks.filter((t) => t.contact_id === contactId);
}

export function openTasksDue(db: DemoDb, today: string): Task[] {
  return db.tasks
    .filter((t) => t.status === "nyitott" && t.due_date <= today)
    .sort((a, b) => a.due_date.localeCompare(b.due_date));
}

export function newLeads(db: DemoDb): Contact[] {
  return db.contacts.filter((c) => c.status === "uj");
}

/** Conversations whose last message came from the contact — a human owes a reply. */
export function unansweredInbound(db: DemoDb): { conversation: Conversation; message: Message }[] {
  const out: { conversation: Conversation; message: Message }[] = [];
  for (const conversation of db.conversations) {
    if (conversation.state === "stopped") continue;
    const thread = messagesOf(db, conversation.id);
    const last = thread[thread.length - 1];
    if (last && last.direction === "in") out.push({ conversation, message: last });
  }
  return out;
}

export function messagesOf(db: DemoDb, conversationId: string): Message[] {
  return db.messages
    .filter((m) => m.conversation_id === conversationId)
    .sort((a, b) => a.sent_at.localeCompare(b.sent_at));
}

export function conversationsOf(db: DemoDb, contactId: string): Conversation[] {
  return db.conversations.filter((c) => c.contact_id === contactId);
}

/** Matches touching a contact, from either side. */
export function matchesOf(db: DemoDb, contactId: string): Match[] {
  const propertyIds = db.properties.filter((p) => p.contact_id === contactId).map((p) => p.id);
  const briefIds = db.briefs.filter((b) => b.contact_id === contactId).map((b) => b.id);
  return db.matches.filter(
    (m) => propertyIds.includes(m.property_id) || briefIds.includes(m.buyer_brief_id),
  );
}

/**
 * The jogalap gate. Nothing outbound may go to a contact this returns a reason
 * for — the demo surfaces the reason rather than hiding the send button.
 */
export function outboundBlockedReason(contact: Contact): string | null {
  if (contact.status === "leiratkozott") return "A kapcsolat leiratkozott, megkeresés nem küldhető.";
  if (!contact.outreach_allowed) return "Jogalap nincs rögzítve, megkeresés nem küldhető.";
  return null;
}

/** Per-contact GDPR export: contact + property/brief + full message history. */
export function exportContact(db: DemoDb, contactId: string): string {
  const contact = contactById(db, contactId);
  const convs = conversationsOf(db, contactId);
  return JSON.stringify(
    {
      exported_at: `${TODAY} (demó)`,
      contact,
      property: propertyOf(db, contactId) ?? null,
      buyer_brief: briefOf(db, contactId) ?? null,
      conversations: convs.map((c) => ({ ...c, messages: messagesOf(db, c.id) })),
      tasks: tasksOf(db, contactId),
      matches: matchesOf(db, contactId),
    },
    null,
    2,
  );
}
