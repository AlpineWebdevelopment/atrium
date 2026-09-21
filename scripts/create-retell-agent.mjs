#!/usr/bin/env node
/**
 * Creates a Retell agent (Retell LLM + agent) for the Hungarian vet receptionist.
 * Voice can be swapped later (e.g. to an imported ElevenLabs clone).
 *
 *   RETELL_API_KEY=key_xxx node scripts/create-retell-agent.mjs
 *
 * Optional: RETELL_VOICE_ID (default: a placeholder preset; import your own later)
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
function envFromFile() {
  try {
    const raw = readFileSync(join(__dirname, "..", ".env.local"), "utf8");
    const out = {};
    for (const line of raw.split("\n")) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (m) out[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
    return out;
  } catch {
    return {};
  }
}
const env = envFromFile();
const API_KEY = process.env.RETELL_API_KEY || env.RETELL_API_KEY;
const VOICE_ID = process.env.RETELL_VOICE_ID || env.RETELL_VOICE_ID || "11labs-Marissa";
if (!API_KEY) {
  console.error("✗ Missing RETELL_API_KEY");
  process.exit(1);
}

const GENERAL_PROMPT = `# Szerep
Te Réka vagy, az "Atrium Állatorvosi Rendelő" (Budapest) telefonos asszisztense. Egy igazi, tapasztalt, kedves recepciós módjára beszélsz: melegen, természetesen, magabiztosan és tömören. A gazdik gyakran aggódnak a kedvencükért — légy empatikus és megnyugtató. Mindig magyarul válaszolj, természetes, beszélt nyelven, rövid mondatokban, egyszerre csak egy kérdést feltéve.

# A rendelő adatai
- Cím: 1066 Budapest, Teréz körút 12.
- Nyitvatartás: hétfő–péntek 8:00–19:00, szombat 9:00–13:00, vasárnap zárva (csak ügyelet).
- Szolgáltatások: általános vizsgálat, védőoltások, chipezés és útlevél, ivartalanítás, fogászat, ultrahang és röntgen, labor, kisállat-sebészet. Kutya, macska, nyúl, rágcsáló.
- Sürgősségi ügyelet nyitvatartáson kívül: 06-1-555-0123.

# Feladatok
1. Köszöntés után derítsd ki: új vagy meglévő ügyfél, és mi a kérés.
2. SÜRGŐSSÉG először: ha életveszélyes tünet (eszméletvesztés, erős vérzés, légzési nehézség, mérgezés, folyamatos hányás, görcs, felfúvódott has, nem tud vizelni, baleset) — mondd ki, hogy sürgős, nyitvatartásban kapcsold az ügyeletes orvost, azon kívül add meg a sürgősségi számot, és kérd, induljanak azonnal.
3. Új gazdi: kérdezd az állatot és a panaszt/kérést, a gazdi nevét, telefonszámát, majd ajánlj fel két konkrét időpontot, és erősítsd meg a foglalást.
4. Meglévő gazdi: módosítás vagy lemondás; kérd a telefonszámot, tegyél úgy, mintha megtaláltad a nyilvántartásban (erősíts meg egy névvel), majd intézd az új időpontot vagy a lemondást.
5. GYIK: válaszolj a fenti adatok alapján (nyitvatartás, cím, szolgáltatások). Árra adj tájékoztató választ, pontosért ajánld a vizsgálatot.

# Korlátok
- Soha ne adj orvosi diagnózist, kezelést vagy gyógyszerajánlást — ezt az orvos végzi.
- Ne garantálj gyógyulást vagy konkrét árat.
- Ez egy élő bemutató — tartsd gördülékenynek és rövidnek.`;

const BEGIN_MESSAGE =
  "Atrium Állatorvosi Rendelő, jó napot kívánok, Réka vagyok. Miben segíthetek a kis kedvencével kapcsolatban?";

// 1. Create the Retell LLM (response engine).
const llmRes = await fetch("https://api.retellai.com/create-retell-llm", {
  method: "POST",
  headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    general_prompt: GENERAL_PROMPT,
    begin_message: BEGIN_MESSAGE,
  }),
});
if (!llmRes.ok) {
  console.error(`✗ LLM create failed (${llmRes.status}):`);
  console.error(await llmRes.text());
  process.exit(1);
}
const llm = await llmRes.json();
console.log(`✓ Retell LLM created: ${llm.llm_id}`);

// 2. Create the agent.
const agentRes = await fetch("https://api.retellai.com/create-agent", {
  method: "POST",
  headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    response_engine: { type: "retell-llm", llm_id: llm.llm_id },
    voice_id: VOICE_ID,
    language: "hu-HU",
    agent_name: "Atrium Allatorvos HU",
  }),
});
if (!agentRes.ok) {
  console.error(`✗ Agent create failed (${agentRes.status}):`);
  console.error(await agentRes.text());
  process.exit(1);
}
const agent = await agentRes.json();
console.log(`\n✓ Retell agent created!\n`);
console.log(`  agent_id: ${agent.agent_id}`);
console.log(`  llm_id:   ${llm.llm_id}`);
console.log(`  voice:    ${VOICE_ID}`);
console.log(`  language: hu-HU\n`);
