# NIKA feladatkezelő — demó

Kétoldalas ingatlanközvetítő minősítő és párosító rendszer belső demója (NIKA
Online Kft., Miskolc). Ez a mappa egy **böngészőben futó demó** — nincs backend,
nincs hálózati hívás, nincs valós adat. Az itt megjelenő nevek, telefonszámok és
üzenetek kitaláltak.

## Mi ez, és mi nem

Ez a mappa a build brief v1-ének **kattintható demója**, nem a teljes éles
rendszer. A brief termékét (dedikált Supabase projekt Frankfurtban, Edge
Functions, pg_cron, Twilio, e-mail) ez a demó **nem** tartalmazza; helyette a
teljes operátori felületet mutatja be seedelt adatokon, valódi pontozási
logikával.

Ami itt **éles logika** (nem mockolt):

- **Pontozó (`scorer.ts`)** — determinisztikus, magyarázható. A brief súlyai és
  küszöbe, teljes bontással. Unit-tesztelve (`scorer.test.ts`, 20 teszt, minden
  határeset). Ez az a rész, amelynek „soha senkit nem szabad meglepnie”.
- **Jogalap-kapu** — importált és kézzel felvitt kapcsolat `outreach_allowed=false`
  értékkel indul; amíg ez nincs bekapcsolva, a rendszer nem enged kimenő
  üzenetet. A kapu emberi döntés.
- **GDPR export/törlés** — kapcsolatonkénti JSON export és kaszkádos törlés.

Ami **bemutatott, de statikus**: a beszélgetések (kész SMS/e-mail szálak), a
sorozat-állapotok, és a párosítások áttekintő felülete (a teljes review UI a
2. ütem).

## Elérés

A demó a `src/app/_demo/nika/` privát mappában él. A Next.js 16 az aláhúzással
kezdődő mappákat kizárja a routingból, ezért közvetlen URL-je nincs. Egyetlen
vékony route teszi láthatóvá:

```
src/app/nika-demo/page.tsx  →  /nika-demo
```

Ez a lap `noindex`, és nincs a sitemapben. Töröld a lapot, és a demó eltűnik,
anélkül hogy a demó kódjához nyúlnál.

```
npm run dev        # majd nyisd meg: http://localhost:3000/nika-demo
```

## Fájlok

| Fájl | Szerep |
| --- | --- |
| `types.ts` | Domain típusok — a Supabase séma alakját tükrözik. |
| `schema.sql` | Referencia Postgres séma (nem éles migráció). |
| `scorer.ts` | Determinisztikus pontozó + `computeMatches`. |
| `scorer.test.ts` | A pontozó tesztjei (`node --test`). |
| `format.ts` | Magyar szám- és dátumformázás, címke-térképek. |
| `seed.ts` | 10 eladó + 10 vevő, beszélgetések, feladatok — kitalált adatok. |
| `store.ts` | Böngészőben élő reducer + selectorok + GDPR export. |
| `ui.tsx` | Közös UI-elemek (Panel, Field, StatusBadge, ScoreBar…). |
| `views.tsx` | Ma, Eladók, Vevők, Párosítások, Import. |
| `Adatlap.tsx` | Kapcsolat adatlap: mezők, idővonal, feladatok, GDPR. |
| `NikaDemo.tsx` | Shell + navigáció + gyors felvitel. |

## Tesztek

```
npx tsx --test src/app/_demo/nika/scorer.test.ts
```

A pontozó minden súlyozott sorát a határain teszteli (alku sáv széle, méret
−10% tűréshatár, a küszöb maga), és ellenőrzi, hogy a pontozás tiszta függvény,
és hogy egy elutasított párosítás nem tér vissza csendben `javasolt` státusszal.

## Regiszter

A felület és a beszélgetések magyarul, Ön-formában, sentence case címkékkel,
felkiáltójelek és emojik nélkül. Az asszisztens az első üzenetben megmondja, hogy
az iroda AI-asszisztense. Tiltott szavak (`megoldás`, `chatbot`,
`forradalmasít`, `seamless`) sehol nem szerepelnek.

## A demó határai

- Az adatok a böngészőben élnek; a frissítés visszaállítja a kiinduló állapotot.
- A dátumok egy rögzített naphoz igazodnak (`DEMO_TODAY = 2026-07-17`), hogy a
  „Ma” determinisztikus legyen, és a szerver- és kliensoldali render egyezzen.
- A CSV import egyszerű, idézőjel nélküli vesszős formátumot vár (demó szintű).
