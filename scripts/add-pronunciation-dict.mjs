#!/usr/bin/env node
/**
 * Creates a pronunciation dictionary (alias rules) and attaches it to the agent,
 * to patch the clone's worst Hungarian mispronunciations (gy / ty / ny words).
 *
 * Iterate by editing RULES below and re-running:
 *   node scripts/add-pronunciation-dict.mjs
 *
 * NOTE: on eleven_multilingual_v2 only "alias" (respelling) rules work — no IPA.
 * The alias is a best-guess respelling; tune it based on what you actually hear.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function envFromFile() {
  const raw = readFileSync(join(__dirname, "..", ".env.local"), "utf8");
  const out = {};
  for (const line of raw.split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return out;
}

const env = envFromFile();
const API_KEY = process.env.ELEVENLABS_API_KEY || env.ELEVENLABS_API_KEY;
const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;

if (!API_KEY || !AGENT_ID) {
  console.error("✗ Missing ELEVENLABS_API_KEY or NEXT_PUBLIC_ELEVENLABS_AGENT_ID in .env.local");
  process.exit(1);
}

// Round 1: target the "gy" words. alias = respelling the model should say better.
// Tune these strings as we hear results.
const RULES = [
  { word: "hogy", alias: "hodj" },
  { word: "Hogy", alias: "hodj" },
  { word: "egy", alias: "edj" },
  { word: "Egy", alias: "edj" },
  { word: "nagy", alias: "nadj" },
  { word: "vagy", alias: "vadj" },
  { word: "így", alias: "ídj" },
  { word: "úgy", alias: "údj" },
  { word: "négy", alias: "nédj" },
  { word: "megy", alias: "medj" },
  { word: "hagy", alias: "hadj" },
  { word: "ügy", alias: "üdj" },
  { word: "ügyelet", alias: "üdjelet" },
  { word: "ügyeletes", alias: "üdjeletes" },
  { word: "magyar", alias: "madjar" },
  { word: "gyors", alias: "djors" },
];

const rules = RULES.map((r) => ({
  string_to_replace: r.word,
  type: "alias",
  alias: r.alias,
}));

// 1. Create the dictionary from rules.
const createRes = await fetch(
  "https://api.elevenlabs.io/v1/pronunciation-dictionaries/add-from-rules",
  {
    method: "POST",
    headers: { "xi-api-key": API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ name: "atrium-hu-clone-fix", rules }),
  }
);
if (!createRes.ok) {
  console.error(`✗ Dictionary create failed (${createRes.status}):`);
  console.error(await createRes.text());
  process.exit(1);
}
const dict = await createRes.json();
console.log(`✓ Dictionary created: ${dict.id} (version ${dict.version_id})`);

// 2. Attach it to the agent's TTS config.
const patchRes = await fetch(`https://api.elevenlabs.io/v1/convai/agents/${AGENT_ID}`, {
  method: "PATCH",
  headers: { "xi-api-key": API_KEY, "Content-Type": "application/json" },
  body: JSON.stringify({
    conversation_config: {
      tts: {
        pronunciation_dictionary_locators: [
          { pronunciation_dictionary_id: dict.id, version_id: dict.version_id },
        ],
      },
    },
  }),
});
if (!patchRes.ok) {
  console.error(`✗ Attaching to agent failed (${patchRes.status}):`);
  console.error(await patchRes.text());
  process.exit(1);
}
console.log(`✓ Attached to agent ${AGENT_ID}`);
console.log(`\n${rules.length} rules active. Re-test, then tell me which words still sound wrong.`);
