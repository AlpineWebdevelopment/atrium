import type { AssistantPair } from "../data/types";

/* A small fuzzy matcher for the demo assistant. Production answers from lesson
   transcripts; this scores each curated pair by keyword hits and word overlap
   and returns the best one above a modest threshold. */

const STOP = new Set([
  "a",
  "az",
  "és",
  "hogy",
  "hogyan",
  "mit",
  "mi",
  "van",
  "nem",
  "egy",
  "ha",
  "de",
  "is",
  "meg",
  "el",
  "kell",
  "tegyek",
  "csináljak",
  "lehet",
  "vagy",
  "én",
  "te",
  "ez",
  "azt",
  "ezt",
  "nekem",
  "engem",
]);

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[„”"'’.,;:?()\-–—]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stem(w: string): string {
  // Crude: strip common Hungarian suffixes so "áraimat" still hits "ár".
  return w.replace(/(aimat|eimet|okat|eket|ünk|unk|nak|nek|ban|ben|ból|ből|hoz|hez|höz|val|vel|ról|ről|tól|től|ig|at|et|ot|ök|ok|ek|ak|om|em|am|im|át|ét)$/, "");
}

export function matchAssistant(query: string, pairs: AssistantPair[]): { pair: AssistantPair; score: number } | null {
  const q = normalize(query);
  if (q.length < 3) return null;
  const words = q.split(" ").filter((w) => w.length > 2 && !STOP.has(w));
  const stems = new Set(words.map(stem));

  let best: { pair: AssistantPair; score: number } | null = null;
  for (const pair of pairs) {
    let score = 0;
    for (const k of pair.keywords) {
      const nk = normalize(k);
      if (q.includes(nk)) score += nk.includes(" ") ? 4 : 3;
      else if (stems.has(stem(nk))) score += 2;
    }
    const qwords = normalize(pair.question)
      .split(" ")
      .filter((w) => w.length > 2 && !STOP.has(w))
      .map(stem);
    for (const w of qwords) if (stems.has(w)) score += 1;
    if (!best || score > best.score) best = { pair, score };
  }
  return best && best.score >= 2 ? best : null;
}
