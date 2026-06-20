#!/usr/bin/env node
/**
 * Creates the Hungarian veterinary-assistant Conversational AI agent on
 * ElevenLabs and prints the agent id to drop into .env.local.
 *
 * Usage:
 *   ELEVENLABS_API_KEY=sk_xxx node scripts/create-elevenlabs-agent.mjs
 *
 * Optional env:
 *   ELEVENLABS_VOICE_ID  – override the voice (default: a warm female premade voice)
 *   ELEVENLABS_TTS_MODEL – override the TTS model (default: eleven_turbo_v2_5)
 *
 * The script reads ELEVENLABS_API_KEY from the environment or from .env.local.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- read .env.local as a fallback so you don't have to export the key ------
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
// "Sarah" — a calm, professional, natural-sounding premade voice that handles
// Hungarian well via the multilingual/turbo models. Override with ELEVENLABS_VOICE_ID.
const VOICE_ID =
  process.env.ELEVENLABS_VOICE_ID || fileEnv.ELEVENLABS_VOICE_ID || "EXAVITQu4vr4xnSDxMaL";
// turbo_v2_5: low-latency + Hungarian support (best for live conversation).
// For maximum realism (slightly higher latency) switch to "eleven_multilingual_v2".
const TTS_MODEL =
  process.env.ELEVENLABS_TTS_MODEL || fileEnv.ELEVENLABS_TTS_MODEL || "eleven_turbo_v2_5";

if (!API_KEY) {
  console.error(
    "✗ Missing ELEVENLABS_API_KEY. Set it in the environment or in atrium/.env.local."
  );
  process.exit(1);
}

const SYSTEM_PROMPT = `Te Luna vagy, az "Atrium Állatorvosi Rendelő" telefonos asszisztense. Magyarul beszélsz, természetesen, melegen és türelmesen — úgy, ahogy egy igazi, kedves recepciós beszélne egy aggódó gazdival.

# A szereped
- Fogadod a hívásokat, időpontot egyeztetsz, és válaszolsz a rendelővel kapcsolatos kérdésekre.
- Felméred a helyzet sürgősségét. Ha az állat élete veszélyben lehet (eszméletvesztés, erős vérzés, légzési nehézség, mérgezés, folyamatos hányás, görcsroham, ki nem ürülő húgyhólyag), AZONNAL jelezd, hogy ez sürgősségi eset, és kérd meg a gazdit, hogy haladéktalanul induljon a rendelőbe vagy hívja a sürgősségi ügyeletet.
- A rutin eseteket (oltás, chip, általános vizsgálat, körömvágás, kontroll) időpontként kezeld.

# Hogyan beszélj
- Rövid, beszélgetős mondatok. Egyszerre csak egy kérdést tegyél fel.
- Empatikus hangnem: a gazdi gyakran ideges az állata miatt.
- Soha ne adj konkrét orvosi diagnózist vagy gyógyszeres kezelést — ezt az állatorvos végzi a vizsgálat során. Te a tüneteket rögzíted és időpontot adsz.
- Ha nem tudsz valamit, ismerd be, és ajánld fel, hogy a kollégák visszahívnak.

# Időpont-egyeztetés menete
1. Kérdezd meg, milyen állatról van szó (kutya, macska, egyéb) és mi a panasz.
2. Mérd fel a sürgősséget.
3. Kérdezd meg a gazdi nevét és egy telefonszámot.
4. Ajánlj fel egy időpontot (a demóban mondhatsz pl. "holnap délelőtt 10 óra" vagy "csütörtök délután"), és erősítsd meg.
5. Foglald össze röviden a foglalást, és köszönj el barátságosan.

# Fontos
- Ez egy élő bemutató egy weboldalon. Tartsd a beszélgetést gördülékenynek és rövidnek.
- Mindig magyarul válaszolj.`;

const FIRST_MESSAGE =
  "Jó napot kívánok, az Atrium Állatorvosi Rendelőt hívta, Luna vagyok. Miben segíthetek a kis kedvencével kapcsolatban?";

const body = {
  name: "Atrium — Állatorvosi asszisztens (HU demo)",
  conversation_config: {
    agent: {
      first_message: FIRST_MESSAGE,
      language: "hu",
      prompt: {
        prompt: SYSTEM_PROMPT,
        llm: "gemini-2.0-flash",
        temperature: 0.4,
      },
    },
    tts: {
      voice_id: VOICE_ID,
      model_id: TTS_MODEL,
      stability: 0.45,
      similarity_boost: 0.8,
    },
    asr: {
      quality: "high",
    },
  },
};

const res = await fetch("https://api.elevenlabs.io/v1/convai/agents/create", {
  method: "POST",
  headers: {
    "xi-api-key": API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

if (!res.ok) {
  console.error(`✗ Agent creation failed (${res.status}):`);
  console.error(await res.text());
  process.exit(1);
}

const data = await res.json();
console.log("\n✓ Agent created successfully!\n");
console.log(`  Agent ID: ${data.agent_id}`);
console.log(`  Voice:    ${VOICE_ID}`);
console.log(`  Model:    ${TTS_MODEL}\n`);
console.log("Add this to atrium/.env.local:\n");
console.log(`  NEXT_PUBLIC_ELEVENLABS_AGENT_ID=${data.agent_id}\n`);
