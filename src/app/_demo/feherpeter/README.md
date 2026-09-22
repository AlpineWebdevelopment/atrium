# Fehér Péter Akadémia — demó

Egyszemélyes mentori tagsági platform **kattintható demója** Fehér Péternek
(feherpeter.hu): szintezett tagság, hétről hétre nyíló kurzusok, heti feladat,
havi élő alkalom, rang-jogosultságok, ajánlói kör és egy asszisztens, amely a
leckékből válaszol.

Nincs bejelentkezés, adatbázis, fizetés, videótárhely vagy hálózati hívás.
Minden adat tipizált minta a `data/` mappában; ami egy munkameneten belül
változik (szerepkör, haladás, posztok, admin szerkesztések), az egy React
contextben él és `localStorage`-ba tükröződik. Egyetlen dolga, hogy egy
laptopon végig lehessen kattintani, és a koncepció magától értetődjön.

## Futtatás

```
npm install
npm run dev          # majd: http://localhost:3000/feherpeter-demo
```

Környezeti változó nem kell. A demó a `src/app/_demo/feherpeter/` privát
mappában él (a Next az aláhúzásos mappákat kihagyja a routingból); a vékony
route-ok a `src/app/feherpeter-demo/` alatt teszik elérhetővé. Töröld azt a
mappát, és a demó eltűnik anélkül, hogy a kódjához nyúlnál. `noindex`, nincs a
sitemapben.

**Szerepkör URL-ből:** bármelyik oldal megnyitható adott nézetben a
`?szerep=vendeg|alap|halado|belso|admin` paraméterrel, pl.
`/feherpeter-demo/admin/otletek?szerep=admin`.

**Visszaállítás:** a jobb alsó sáv ↺ gombja törli a munkamenetet.

## Útvonalak

| Útvonal | Képernyő |
| --- | --- |
| `/feherpeter-demo` | Nyitóoldal: hero, rólam, hogyan működik, szintek (Belső kör: szabad helyek), következő kör, vendégoktatók, GYIK |
| `/kozosseg` | Közösségi fal kategóriákkal, kitűzött üdvözlővel, sikerfallal („Péter reagált”), működő szerkesztővel |
| `/feladatok` | Heti feladat, sorozat, az elmúlt 8 hét |
| `/kurzusok` · `/kurzusok/[kurzus]` · `/kurzusok/[kurzus]/[lecke]` | Tanterem, kurzusoldal, leckenézet (videó-helyőrző, jegyzet, anyagok, hozzászólások, „Kérdezz Pétertől” panel) |
| `/naptar` | Havi naptár + lista, jelentkezés, lezajlott alkalmak felvételei |
| `/tagok` | Névsor kereséssel, ranglista |
| `/profil` | Haladás, rang és következő jogosultság, sorozat, jelvények, ajánlói link |
| `/kerdezz` | Asszisztens ~16 kurált kérdés-válasz párból, minden válasz leckére hivatkozik |
| `/admin` … | Áttekintés, kurzusépítő, szintek és rangok, heti feladatok, kiadási rács, tagok, események, **Ötletek** |

## 5 perces bemutató

A jobb alsó sáv váltja a szerepkört, oldalújratöltés nélkül. Ez a demó
kormánya.

**0:00 — Vendég, `/feherpeter-demo`.** „Ez úgy néz ki, mint a mostani
oldalad, mert abból építettük.” Görgess a szintekig: három oszlop, a Belső
körnél *6 szabad hely a 20-ból*. „Ez nem marketing, a kiscsoportos hívásnak
tényleg van mérete.” Következő kör dátuma. Kattints egy zárt tagi menüpontra:
a vendég csak a kaput látja.

**0:45 — Alap (Varga Dóra), `/kurzusok`.** Két kurzus nyitva, a többi szürkén,
lakattal, a szint nevével. Kattints egy zárt kurzusra: a modal megmondja, mit
adna a Haladó. „A zárt tartalom látszik, nem eltűnik.” Nyisd meg az Alapokat:
a tantervben a 7. héttől „Elérhető: 7. héten (dátum)”. „Hetente egy lecke,
ezért nem lehet lemaradni.”

**1:45 — ugyanitt, egy nyitott lecke.** Videó-helyőrző, jegyzet, anyagok.
„Megjelölöm késznek” — a pont azonnal jóváíródik. Nyisd a „Kérdezz Pétertől”
panelt, kérdezz: *hogyan emeljek árat*. A válasz alatt a forrás lecke. „A
valódi verzió a te átirataidból válaszol, és mindig megmondja, honnan.”

**2:30 — Alap, `/feladatok`.** Egy feladat, egy pipa, sorozat. Pipáld ki:
Dóra 106 pontról 121-re ugrik, ez a 3. szint — a fejlécben átvált a szint, és
a közösségben mostantól posztolhat a Siker kategóriába. „A rang nem jelvény,
jár vele valami.” `/profil`: „Még N pont az 5. szintig — akkor a kérdésedre
az élő adásban válaszolsz.” Lent az ajánlói link: egy ajándék hónap
ajánlásonként, ennyi a szabály.

**3:15 — Belső kör (Horváth Katalin), `/kozosseg`.** Siker fül: a kiemelt
posztokra Péter reagált. „Ez a bizonyíték-motor, de csak valódi
eredményekkel.” `/naptar`: itt látszik a Belső kör kiscsoportos alkalma, amit
az Alap tag nem lát; a lezajlott alkalmaknál „Felvétel megtekintése” — minden
élő adás tárrá válik.

**4:00 — Admin, `/admin`.** Tagok szintenként, szabad helyek, MRR
(szemléltető), heti feladat teljesítés. `/admin/kiadas`: az 52 hetes rács.
Húzd az aktuális hetet 6-ról 9-re: „ez a tervezőeszköz a forgatás előtt — ami
üres, azt még nem találtuk ki”. `/admin/szintek`: írd át egy szint nevét, és
mutasd, hogy a tagi nézetben is átírt.

**4:40 — `/admin/otletek`.** Itt fejezd be. „Ez a mi közös munkatáblánk. Nem
funkciólista, semmi sincs belőle megígérve. Menjünk végig rajta együtt.”

## Minta és éles

| Terület | A demóban | Élesben |
| --- | --- | --- |
| Bejelentkezés | Szerepkör-váltó, mock tagok | Auth (magic link / jelszó), munkamenet, szerepek adatbázisból |
| Fizetés | Szemléltető árak, inert gombok | Stripe vagy SimplePay / Barion, automatikusan megújuló előfizetés, szintváltás arányosítással |
| Számlázás | — | Számlázz.hu vagy Billingo integráció minden terhelésnél |
| Videó | 16:9 helyőrző | Mux / Bunny / Vimeo, aláírt URL-ek, nem YouTube |
| Adatok | `data/*.ts` + `localStorage` | Supabase (Postgres, RLS a szintekre), a `lib/store.tsx` betöltője és mutációi cserélődnek |
| Asszisztens | ~16 kurált pár, kulcsszavas illesztés | A leckeátiratok vektoros keresése + LLM, minden válasz forrás-leckével; kiemelt kérdés Péter postaládájába |
| E-mail | — | Heti feladat emlékeztető, élő alkalom előtti értesítés, inaktív tag visszahívása, várólista |
| Ajánlás | Link + számláló a profilon | Egyedi ajánlói kód, a fizető ajánlott tag után automatikus ajándék hónap a számlázásban |
| Naptár / RSVP | Kapcsoló a munkamenetben | Naptármeghívó, videóhívás link, felvétel automatikus betöltése a tárba |
| Csepegtetés | `config.currentWeek` | A tag saját indulási dátumától számolt hét (körönként) |

## Szerkezet — hogy a demóból termék lehessen

```
data/          típusok és minta: config, tiers, ranks, courses (+ lessons/), tasks,
               members, posts, events, assistant, ideas — az adatréteg határa
lib/access.ts  minden szerep-, szint-, rang- és csepegtetés-ellenőrzés egy helyen
lib/store.tsx  a munkamenet állapota: seed → context → localStorage
lib/           dates (semmi nem a rendszerórából jön), courses, assistant, ids
ui/            primitívek, Shell, RoleSwitcher, UpgradeModal, Curriculum,
               AssistantChat, Markdown, charts
screens/       a 16 képernyő
styles/tokens.css  a feherpeter.hu-ról olvasott tokenek, `.fpa` alatt scope-olva
```

Két szabály tartja össze:

1. **Semmi nem a rendszeróráról jön.** A „ma” az aktuális hét hétfője
   (`config.academyStart` + `currentWeek`). Az adminban a hét átírása együtt
   mozgatja a kiadást, a naptárat és a heti feladatot; a szerver- és a
   kliensoldali render egyezik.
2. **A képernyők nem hasonlítanak szinteket.** Minden kapu a `lib/access.ts`
   helperein megy át (`lessonAccess`, `courseLocked`, `hasPrivilege`…), ezért
   az admin szerkesztései azonnal érvényesek, és élesben egy helyen cserélhető
   a logika.

## Design

Minden érték a feherpeter.hu-ról származik (fordított stíluslap + komponens
markup): a shadcn HSL-változói szó szerint (mélysötét kékes alap, meleg
törtfehér szöveg, egyetlen arany kiemelőszín), Playfair Display a címekhez,
Raleway a szöveghez (latin-ext), 0.3em ritkított arany felcímek, arany gomb
sötét felirattal, kártya 1px kerettel és arany/30 hover-kerettel, 96px
szekció-ritmus. A fotók (hero, portré) az ő oldaláról vannak, csak ott, ahol
az oldala is fotót használ; a kurzusborítók tipografikusak. Részletek és
indoklás a `styles/tokens.css` fejlécében.
