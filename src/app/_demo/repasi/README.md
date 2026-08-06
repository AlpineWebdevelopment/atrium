# Atlas — demó konzol

Többügyfeles AI értékesítési konzol **kattintható demója**. Egy operátor hat
magyar gyártó kkv-nak üzemeltet hang- és e-mail agenteket; ez a felület az ő
munkaasztala, plusz az, amit a végügyfelei látnak.

Minden cég, személy, telefonszám és beszélgetés **kitalált**. Nincs backend,
nincs adatbázis, nincs hálózati hívás, nincs `localStorage` — az adatok
tipizált konstansok a `lib/data.ts`-ben.

## Elérés

A demó a `src/app/_demo/repasi/` privát mappában él. A Next.js 16 az aláhúzással
kezdődő mappákat kizárja a routingból, ezért közvetlen URL-je nincs. Vékony
route-ok teszik láthatóvá:

```
src/app/repasi-demo/**/page.tsx  →  /repasi-demo/**
```

A `src/app/repasi-demo/layout.tsx` `noindex`, és a demó nincs a sitemapben.
Töröld a `src/app/repasi-demo/` mappát, és a demó eltűnik, anélkül hogy a demó
kódjához nyúlnál.

```
npm run dev        # majd nyisd meg: http://localhost:3000/repasi-demo
```

### Útvonalak

| Útvonal | Képernyő |
| --- | --- |
| `/repasi-demo` | Bejelentkezés (statikus) |
| `/repasi-demo/attekintes` | Operátori áttekintő — KPI-k, 30 napos grafikon, ügyfélkártyák, aktivitás |
| `/repasi-demo/ugyfelek` | Ügyféllista, működő kereséssel |
| `/repasi-demo/ugyfelek/[id]` | Ügyfél adatlap — Áttekintés · Agentek · Kontaktok · Hívások · Riport |
| `/repasi-demo/agentek` | Agentek kártyanézetben, szűrőkkel |
| `/repasi-demo/agentek/[id]` | Agent beállítása (kétoszlopos űrlap + teszthívás panel) |
| `/repasi-demo/hivasok` | Hívásnapló négy működő szűrővel |
| `/repasi-demo/hivasok/[id]` | Hívás adatlap — lejátszó, átirat |
| `/repasi-demo/uzenetek` | E-mail kampányok + a kiválasztott kampány sorozata |
| `/repasi-demo/crm` | Pipeline öt szakaszban, ügyfél szerinti szűréssel |
| `/repasi-demo/riportok` | Havi riport, ügyfélválasztóval |
| `/repasi-demo/portal/[id]` | Végügyfél read-only nézete (sidebar nélkül) |
| `/repasi-demo/beallitasok` | Telefonszámok · Integrációk · Csapat · Számlázás |

Az ügyfél-azonosítók `c1`–`c6`, az agentek `a1`–`a10`, a hívások `h01`–`h55`.
Minden dinamikus útvonal build időben előrenderelődik (`generateStaticParams` +
`dynamicParams = false`), így ismeretlen azonosító 404, nem lassú kérés.

## Mi működik és mi nem

**Működik** (kliensoldali állapot a mock adatokon): a keresőmezők szűrnek, a
fülek váltanak, a szűrőpirulák és legördülők szűrnek, a kapcsolók kapcsolnak, a
csúszka mozog, a kampánysor kiválasztása átrajzolja a sorozatpanelt, és a
lengyel átirat „Fordítás megjelenítése” kapcsolója magyarra vált.

**Inert, de valódinak látszik**: mentés, lejátszás, letöltés, „Szám cseréje”,
teszthívás, hónapválasztó. Nincs rájuk „hamarosan” üzenet és nincsenek letiltva
— csak nem történik semmi.

## Az adatok belső konzisztenciája

Két szabály tartja össze a `lib/data.ts`-t:

1. **Semmi nem a rendszeróráról jön.** A `DEMO_TODAY = "2026-08-03"` az egyetlen
   „most”; minden dátum vagy literál, vagy ebből számolt UTC-nap. A szerver- és
   kliensoldali render ezért mindig egyezik. Sehol nincs `Date.now()` vagy
   `Math.random()` a render útvonalon — a numerikus sorokat egy rögzített
   magvú generátor állította elő egyszer, és literálként vannak beírva.
2. **Az összesítések származtatottak, nem újragépeltek.** Az ügyfelenkénti napi
   hívássor az igazságforrás; ebből esik ki a perckeret-felhasználás, a
   kimenetel-megoszlás, az agentenkénti heti darabszám és minden KPI. Egy sor
   átírása az egész konzolt együtt mozdítja el.

Például a „Mai hívások” KPI (`124`) a hat ügyfél mai értékének összege, a
„Foglalt időpontok (7 nap)” (`68`) a foglalássorok utolsó hét napja, az
„E-mail válaszarány” (`5,3%`) pedig az öt kampány `valasz / elkuldve` hányadosa.

Egy szándékos aszimmetria: a **hívásnapló 55 tételes**, miközben a 30 napos
grafikon `2 402` hívást összesít. A napló a legutóbbi hívásokat mutatja, ahogy
egy éles rendszerben is — ezt a Hívások képernyő alcíme ki is mondja.

## Fájlok

| Fájl | Szerep |
| --- | --- |
| `lib/data.ts` | Típusok, adatok, lekérdezők és minden származtatott összesítés. |
| `lib/format.ts` | Magyar szám-, pénz-, dátum- és időtartam-formázás. |
| `ui/atlas.css` | Design tokenek, űrlapelemek, tábla, pulzáló élő pont. |
| `ui/primitives.tsx` | Badge, StatKartya, Folyamatsav, Tabla, Fulek, Kapcsolo… |
| `ui/Shell.tsx` | Oldalsáv, felső sáv, URL-ből származtatott morzsamenü. |
| `ui/charts.tsx` | Recharts wrapperek (görbe, donut, oszlop, mini görbe). |
| `ui/jelzesek.tsx` | Státuszjelzők egy helyen. |
| `ui/hivasTabla.tsx`, `ui/agentKartya.tsx` | Képernyők közt osztott elemek. |
| `screens/*.tsx` | A 13 képernyő. |

## Design

Nyugodt, technikus operátori konzol: `#FAFAF9` vászon, fehér felületek, 1px
`#E7E5E4` keret, 10px sarok, árnyék nélkül. **Egyetlen kiemelőszín**, a mély
türkiz `#0F766E`. A szemantikus színek csak kis státuszpirulákban jelennek meg.
UI-betű Geist Sans, **minden szám, azonosító, telefonszám, időtartam és
százalék Geist Mono**, tabuláris számjegyekkel.

A betűket a demó a projekt gyökér-layoutjából örökli (`--font-geist-src`,
`--font-geist-mono-src`), ezért nem tölti be másodszor ugyanazt a két
betűtípust — a `geist` npm csomagra nincs szükség.

A teljes konzol egy `position: fixed` rétegben fut `.atlas` scope alatt, így a
marketingoldal navigációja és alap-CSS-e nem látszik át rajta, a demó stílusai
pedig nem szivárognak ki az oldalra.

### A donut színeiről

A kimenetelek sorrendezettek (foglalástól elutasításig), ezért a donut
**egyhangú türkiz skálát** használ öt versengő szín helyett — a konzolnak
pontosan egy kiemelőszíne van. Öt lépcső fehér alapon nem tud pusztán
világosságkülönbséggel elkülönülni, ezért az azonosítást a diagram melletti,
darabszámmal és százalékkal feliratozott jelmagyarázat viszi, a szeleteket
pedig 2px-es fehér rés választja el. A szín megerősítés, sosem az egyetlen jel.
