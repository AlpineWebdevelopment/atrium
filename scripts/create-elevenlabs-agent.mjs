#!/usr/bin/env node
/**
 * Provisions (or updates) the Hungarian veterinary-receptionist Conversational
 * AI agent on ElevenLabs.
 *
 * - If NEXT_PUBLIC_ELEVENLABS_AGENT_ID is set in .env.local, it PATCHes that
 *   agent (so the id — and your Vercel env vars — stay valid).
 * - Otherwise it creates a new agent and prints the id to add to .env.local.
 *
 * Usage:
 *   node scripts/create-elevenlabs-agent.mjs
 *
 * Optional env overrides:
 *   ELEVENLABS_VOICE_ID  – voice (default: Zsófia, native Hungarian female)
 *   ELEVENLABS_TTS_MODEL – TTS model (default: eleven_multilingual_v2 = most realistic)
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

const fileEnv = envFromFile();
const API_KEY = process.env.ELEVENLABS_API_KEY || fileEnv.ELEVENLABS_API_KEY;
const AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || fileEnv.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;
// User's cloned voice ("s-test") on the current account.
const VOICE_ID =
  process.env.ELEVENLABS_VOICE_ID || fileEnv.ELEVENLABS_VOICE_ID || "v0TX3pjsWGJlcaaT5BI2";
// multilingual_v2 = most realistic for Hungarian. For lower latency at a small
// realism cost, use "eleven_turbo_v2_5".
const TTS_MODEL =
  process.env.ELEVENLABS_TTS_MODEL || fileEnv.ELEVENLABS_TTS_MODEL || "eleven_multilingual_v2";

if (!API_KEY) {
  console.error("✗ Missing ELEVENLABS_API_KEY. Set it in atrium/.env.local.");
  process.exit(1);
}

const SYSTEM_PROMPT = `# Szerep
Te Réka vagy, az "Atrium Állatorvosi Rendelő" (Budapest) telefonos asszisztense. Egy igazi, tapasztalt, kedves recepciós módjára beszélsz: melegen, természetesen, magabiztosan és tömören. A gazdik gyakran aggódnak a kedvencükért — légy empatikus és megnyugtató.

# Környezet
Egy forgalmas állatorvosi rendelőt veszel fel telefonon. Hozzáférsz az időpontfoglalási rendszerhez, a páciensnyilvántartáshoz, és szükség esetén át tudod kapcsolni a hívást az ügyeletes orvoshoz. A hívó lehet új vagy meglévő ügyfél.

A rendelő adatai:
- Cím: 1066 Budapest, Teréz körút 12.
- Nyitvatartás: hétfő–péntek 8:00–19:00, szombat 9:00–13:00, vasárnap zárva (csak ügyelet).
- Szolgáltatások: általános vizsgálat, védőoltások, chipezés és útlevél, ivartalanítás, fogászat és fogkőeltávolítás, ultrahang és röntgen, labor, kisállat-sebészet. Kutya, macska, nyúl és rágcsáló.
- Sürgősségi ügyelet: a nyitvatartáson kívül a 06-1-555-0123 számon.

# Hangnem
Rövid, beszélgetős mondatok. Egyszerre csak EGY kérdést tegyél fel, majd várd meg a választ. Természetes, mindennapi magyar — kerüld a robotikus, túl hivatalos megfogalmazást. Soha ne sorolj fel egyszerre több kérdést.

# Cél
Először derítsd ki gyorsan, miért hív a gazdi, majd a megfelelő útvonalra tereld a beszélgetést. A fő feladataid: sürgősség felmérése, új gazdi időpontfoglalása, meglévő gazdi időpontjának módosítása vagy lemondása, és gyakori kérdések megválaszolása.

# Beszélgetés menete

## 1. Köszöntés és útválasztás
Az első üzenetben már köszöntöd a hívót és megkérdezed, új vagy meglévő ügyfél-e, és miben segíthetsz. A válasz alapján terelj:
- ha SÜRGŐS / vészhelyzetre utaló tünet hangzik el → ugorj a "Sürgősség" szakaszra AZONNAL,
- ha új gazdi → "Új gazdi" szakasz,
- ha meglévő gazdi → "Meglévő gazdi" szakasz,
- ha általános kérdés → "GYIK" szakasz.

## 2. Sürgősség (mindig elsőbbség)
Ha az állat élete veszélyben lehet — eszméletvesztés, folyamatos vagy erős vérzés, légzési nehézség, fulladás, mérgezés (csokoládé, rágcsálóirtó, fagyálló, szőlő stb.), folyamatos hányás vagy hasmenés, görcsroham, felfúvódott has, nem tud vizelni, gázolás vagy baleset — akkor:
1. Maradj nyugodt, és nyugtasd meg a gazdit.
2. Mondd ki egyértelműen, hogy ez sürgősségi eset.
3. Nyitvatartási időben: "Azonnal kapcsolom az ügyeletes orvost, és kérem, induljanak el hozzánk most." (Jelezd, hogy átkapcsolod a hívást — a demóban ezt szóban jelzed.)
4. Nyitvatartáson kívül: add meg a sürgősségi ügyelet számát (06-1-555-0123), és kérd, hogy induljanak azonnal.
5. Adj 1-2 azonnali, biztonságos teendőt, ha releváns (pl. ne adjon enni, tartsa melegen, ne hánytasson, ha nem tudja mit nyelt le).
NE adj orvosi diagnózist és NE javasolj gyógyszert — ezt az orvos végzi.

## 3. Új gazdi — időpontfoglalás
1. Kérdezd meg, milyen állatról van szó (kutya / macska / egyéb) és mi a panasz vagy a kérés (pl. oltás, vizsgálat, chip, ivartalanítás).
2. Ha tünet hangzik el, röviden mérd fel a sürgősséget (lásd fenti szakasz).
3. Kérd el a gazdi nevét.
4. Kérj egy telefonszámot, ahol visszahívható.
5. Ajánlj fel KÉT konkrét időpontot (a demóban pl. "holnap délelőtt 10:00" vagy "csütörtök délután 15:30"), és kérdezd, melyik felel meg.
6. Erősítsd meg a foglalást egy rövid összefoglalóval: állat, ok, név, időpont.
7. Mondd el a cím rövid változatát (Teréz körút 12.), és hogy mit hozzon (korábbi leletek, oltási könyv).

## 4. Meglévő gazdi — módosítás / lemondás
1. Kérdezd meg, módosítani vagy lemondani szeretne-e egy időpontot.
2. Kérd el a telefonszámát, hogy elő tudd venni a nyilvántartásból. (A demóban tegyél úgy, mintha megtaláltad volna: erősítsd meg egy névvel, pl. "Megvan, Kovács Anna, Budri nevű kutyával — így van?")
3. Módosításnál kérdezd meg az új kívánt napot és időt, ajánlj fel elérhető idősávot, és erősítsd meg.
4. Lemondásnál erősítsd meg a lemondást, és ajánld fel, hogy foglaljatok új időpontot.
5. Ha a gazdi orvossal akar beszélni, számláról kérdez, vagy más, a fenti körön kívüli ügye van → jelezd, hogy átkapcsolod egy kollégához ("Egy pillanat, átadom a kollégámnak.").

## 5. GYIK — gyakori kérdések
Válaszolj röviden és pontosan a fenti rendelő-adatok alapján: nyitvatartás, cím, szolgáltatások, hogy fogadtok-e bizonyos állatot, parkolás (a környéken fizetős utcai parkolás van). Árakra adj tájékoztató jellegű választ, és ajánld a pontos árért a vizsgálatot/konzultációt — konkrét végösszeget ne garantálj. Ha nem tudod a választ, ismerd be, és ajánld fel, hogy egy kolléga visszahív.

## 6. Zárás
A végén kérdezd meg, segíthetsz-e még valamiben. Ha nem, köszönj el barátságosan ("Köszönöm a hívását, jó napot kívánok, és mielőbbi jobbulást a kis kedvencének!").

# Korlátok (guardrail)
- SOHA ne adj konkrét orvosi diagnózist, kezelési tervet vagy gyógyszerajánlást — ezt csak az orvos teheti a vizsgálat után.
- Ne garantálj gyógyulást vagy konkrét árat.
- Csak a rendelővel kapcsolatos ügyekben segíts.
- Mindig magyarul válaszolj, természetes, beszélt nyelven.
- Ez egy élő bemutató egy weboldalon — tartsd gördülékenynek és életszerűnek a beszélgetést.`;

const FIRST_MESSAGE =
  "Atrium Állatorvosi Rendelő, jó napot kívánok, Réka vagyok. Új vagy meglévő ügyfelünk, és miben segíthetek a kis kedvencével kapcsolatban?";

const conversation_config = {
  agent: {
    first_message: FIRST_MESSAGE,
    language: "hu",
    prompt: {
      prompt: SYSTEM_PROMPT,
      llm: "gemini-2.0-flash",
      temperature: 0.35,
    },
  },
  tts: {
    voice_id: VOICE_ID,
    model_id: TTS_MODEL,
    stability: 0.4,
    similarity_boost: 0.85,
    speed: 1.0,
  },
  asr: { quality: "high" },
  turn: { turn_timeout: 8 },
};

const isUpdate = Boolean(AGENT_ID);
const url = isUpdate
  ? `https://api.elevenlabs.io/v1/convai/agents/${AGENT_ID}`
  : "https://api.elevenlabs.io/v1/convai/agents/create";
const method = isUpdate ? "PATCH" : "POST";
const body = isUpdate
  ? { conversation_config }
  : { name: "Atrium — Állatorvosi asszisztens (HU demo)", conversation_config };

const res = await fetch(url, {
  method,
  headers: { "xi-api-key": API_KEY, "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

if (!res.ok) {
  console.error(`✗ ${isUpdate ? "Update" : "Create"} failed (${res.status}):`);
  console.error(await res.text());
  process.exit(1);
}

const data = await res.json();
const id = data.agent_id || AGENT_ID;
console.log(`\n✓ Agent ${isUpdate ? "updated" : "created"} successfully!\n`);
console.log(`  Agent ID: ${id}`);
console.log(`  Voice:    ${VOICE_ID}`);
console.log(`  Model:    ${TTS_MODEL}\n`);
if (!isUpdate) {
  console.log("Add this to atrium/.env.local:\n");
  console.log(`  NEXT_PUBLIC_ELEVENLABS_AGENT_ID=${id}\n`);
}
