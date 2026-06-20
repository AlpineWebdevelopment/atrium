# ElevenLabs voice demo — setup

The live voice demo (`src/components/VoiceDemo.tsx`) is an ElevenLabs
Conversational AI agent. It renders on the homepage (`/`) and the vet page
(`/allatorvos`). The agent is a Hungarian veterinary receptionist ("Luna").

## One-time setup

1. Get an API key from https://elevenlabs.io → Profile → API Keys.
2. Put it in `atrium/.env.local`:
   ```
   ELEVENLABS_API_KEY=sk_...
   ```
3. Create the Hungarian vet agent:
   ```
   cd atrium
   node scripts/create-elevenlabs-agent.mjs
   ```
4. Copy the printed agent id into `.env.local`:
   ```
   NEXT_PUBLIC_ELEVENLABS_AGENT_ID=agent_...
   ```
5. Restart `npm run dev` and click **Próbálja ki élőben**.

## How it works

- `scripts/create-elevenlabs-agent.mjs` provisions the agent (Hungarian prompt,
  first message, voice, TTS model) via the ElevenLabs API.
- `src/app/api/elevenlabs/route.ts` mints a short-lived **signed URL** server-side
  so the API key never reaches the browser.
- `VoiceDemo.tsx` requests mic access, fetches the signed URL, and opens the
  realtime session with `@elevenlabs/react`'s `useConversation`.

## Tuning realism / voice

In `scripts/create-elevenlabs-agent.mjs` (or via env when running it):

- `ELEVENLABS_VOICE_ID` — swap the voice. Browse voices in the ElevenLabs
  dashboard; pick one and use its id.
- `ELEVENLABS_TTS_MODEL` — defaults to `eleven_turbo_v2_5` (low latency +
  Hungarian). For **maximum realism** (slightly higher latency) use
  `eleven_multilingual_v2`.
- `stability` / `similarity_boost` in the `tts` block control consistency vs.
  expressiveness.

To change the agent's personality, edit `SYSTEM_PROMPT` / `FIRST_MESSAGE` in the
script and re-run it (creates a new agent), or edit the agent in the dashboard.
