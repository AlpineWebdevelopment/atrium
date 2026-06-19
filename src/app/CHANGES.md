# Atrium root-page copy edit pass

| ID | Section | File | Before | After | Why |
|----|---------|------|--------|-------|-----|
| A1 | Hero — rotating phrase | `Hero.tsx` | `"elmaradt időpontok miatt"` | `"elszalasztott hívások és érdeklődők miatt"` | "időpont" is appointment-business language; the root must speak to every operator. Calls and inquiries are universal. |
| A2 | System frame — live stat | `FullSystem.tsx` | `412 hívás fogadva · 0 kihagyva` | `Minden hívás egy helyen · egy sem vész el` | 412/0 reads as a real system stat; no fabricated numbers on live copy. |
| A3 | Miért éri meg — funnel graphic | `QualifierCrm.tsx` | `3` / `8` (időpont counts) | `kevesebb` / `több` | Invented before/after conversion figures. "kevesebb / több" makes the same directional point without false precision. Note: font-size also reduced from 36px → 18px to prevent SVG overflow (minimum structural change to keep text legible). |
| A4 | Miért éri meg — tile copy | `QualifierCrm.tsx` | Heading `Költséghatékony` · sub `a nap minden órájában dolgozik, és kevesebbe kerül, mint egy munkatárs` | Heading `Kiszámítható` · sub `a nap minden órájában dolgozik — szabadnap, betegszabadság és kiesés nélkül` | "Cheaper than an employee" is plausibly false against Full System pricing (900k–1.5M Ft/mo). Honest, defensible edge is always-on availability + zero turnover risk. |
| A5 | Positioning — niche line | `Positioning.tsx` | `Minden szakmának a saját rendszere — fogorvosi rendelő, kivitelező, szálloda, autószerelő —, a folyamatához és a számaihoz szabva.` | `Minden cégnek a saját rendszere — a folyamatához és a számaihoz szabva.` | Listing niches on the root is the horizontal/"logo-wall" pattern the brand spec forbids on the root page. |
| A6 | Positioning — internal note | `Positioning.tsx` | Entire `<p className="newnote">Javaslat: amint van aláírt ügyfél…` paragraph | *(deleted)* | Internal production note, not customer-facing copy. Referenced competitor names (Meridian, AI Squad). |
| A7 | Final CTA — fine print | `FinalCta.tsx` | `Nincs kötelezettség · nincs sürgetés · ha nem áll össze, kap egy auditot` | `Nincs kötelezettség · nincs sürgetés` | Sales Leak Audit is a post-meeting save tool per spec, not advertised to cold visitors. |
| C1 | Hero tagline option | — | *(no edit)* | *(no edit)* | REVIEW — no edit made. Spec note: the locked parent tagline `A bevétel, ami eddig elveszett.` is designated for the root hero. Current draft keeps a problem-led rotating headline. Owner to decide: keep rotating problem phrases OR swap to locked tagline as static hero headline. |
| C2 | Channel breadth | — | *(no edit)* | *(no edit)* | REVIEW — no edit made. `FullSystem.tsx` lists 8 channels (Telefon, SMS, WhatsApp, Messenger, Instagram, Viber, E-mail, Webchat). Verify all are deliverable today; trim to honest capability if needed. |
| C3 | Cost comparison bar | — | *(no edit)* | *(no edit)* | REVIEW — no edit made. The `GfxCost` SVG bar chart shows `munkatárs` (taller bar) vs `rendszer` (shorter bar) under "havi költség", implying system is cheaper. This contradicts Full System pricing at 900k–1.5M Ft/mo. Consider removing or reframing the cost bar; the 24h availability rings on the left of that graphic are the honest differentiator. |
| C4 | Timeline illustrative figures | — | *(no edit)* | *(no edit)* | REVIEW — no edit made. "Egy nap a rendszerrel" uses small numbers (4 éjjeli hívás, 3 foglalás, etc.). These are acceptable because the section is framed as a hypothetical day — confirm that framing label stays visible so they are not mistaken for real results. |

## Timeline graphic

| ID | Before | After | Why |
|----|--------|-------|-----|
| TL1 | `Csak árat kérdeztek — kvalifikálva, nem foglal felesleg helyet.` | `Csak árat kérdezett valaki — a rendszer kvalifikálta, az Ön idejét nem vette el.` | Removes slot/seat logic (appointment-niche framing); benefit now points at the owner — qualification as time-saver. Icon: unchanged (qualify). |
| TL2 | `Lemondás 1 perc alatt a várólistának — nem marad üres a szék.` · icon: `users` | `Egy érdeklődő nem telefonált, hanem írt — a rendszer ott is felvette a fonalat.` · icon: `webchat` | Old beat demonstrated cancellation→waitlist, a non-shipped candidate capability not suitable for public surfaces. New beat shows real unified-memory-across-channels behaviour, reinforcing the channel-icon row. Circle tint unchanged. |
| TL3 | `A holnapi időpontok emlékeztetőt kaptak — kevesebb no-show.` | `A holnapi időpontok emlékeztetőt kaptak — kevesebben maradnak el.` | Replaces English jargon `no-show` with plain operator Hungarian. Icon: unchanged (bell). |
| TL4 | `Zárás után is csörög a telefon — egy hívás se vész el.` · icon: `phone` | `Zárás után egy pillantás a telefonján — a rendszer megmutatja, mit hozott a mai nap.` · icon: `bars` | Timeline had three call-answering beats and zero reporting beat; reporting is a core capability. Converts redundant third reception beat into the end-of-day reporting moment. After-hours coverage still established by 06:50 entry. New `bars` glyph added to ICONS (same path as FullSystem.tsx). Circle tint unchanged. |
| TL-R | Channels — written channels in TL2 | *(no edit)* | REVIEW — no edit made. TL2 now assumes the system handles written channels (not just phone). Confirm the written channels shown in the icon row are deliverable today; if not, trim that row and reconsider TL2. |

## Leak diagram

| ID | Before | After | Why |
|----|--------|-------|-----|
| LK1 | `~20 óra havonta előszűretlen beszélgetésre — a komoly vevők helyett` | `~20 óra havonta előszűretlen beszélgetésre × ~12 000 Ft munkaóra-érték` | Old line had no visible bridge from 20 hours to 240 000 Ft. Hourly value makes math reconstructable (20 × 12 000 = 240 000). Figure unchanged. |
| LK2 | `~8 elszalasztott hívás × ~85 000 Ft átlagos munka` | `~20 elszalasztott hívás × ~40% záródás × ~85 000 Ft munka` | Old formula implied 100% close rate (8 × 85 000 = 680 000). New: 20 × 0,40 × 85 000 = 680 000 — same total, honest close rate. Figure unchanged. |
| LK3 | `~12 kihűlt érdeklődő × ~43 000 Ft + elment hirdetési költség` | `~30 lassan követett érdeklődő × ~40% záródás × ~43 000 Ft` | Implied 100% close rate; `+ elment hirdetési költség` was named but not included in the total. New: 30 × 0,40 × 43 000 ≈ 520 000. Dangling ad-cost term removed. Figure unchanged. |
| LK4 | `~12 no-show × ~30 000 Ft kezelés` | `~12 no-show × ~30 000 Ft elmaradt ügyfélérték` | Math is sound (booked slot = full value). Only change: de-medicalized `kezelés` → `elmaradt ügyfélérték` for operator-level page. Figure unchanged. |
| LK-R | Close rate ~40% in LK2/LK3 | *(no edit)* | REVIEW — no edit made. The `~40%` close rate is an illustrative placeholder. Confirm against a realistic typical close rate before treating it as the default on-page example. |

## System diagram

| ID | Before | After | Why |
|----|--------|-------|-----|
| SD1 | `Minden hívás egy helyen · egy sem vész el` | `Minden megkeresés egy helyen · egy sem vész el` | The live-stat label read "hívás" (calls only) while the channel row shows 8 channels including SMS, webchat, Instagram. "megkeresés" (inquiry/contact) is channel-agnostic and honest. |
| SD2 | `Csatlakozik a meglévő eszközeihez: … · GoHighLevel` | `… · a meglévő CRM-jéhez` | Brand spec §10 prohibits exposing internal stack on public surfaces. GoHighLevel is also being dropped from the product stack. Replaced with a generic "a meglévő CRM-jéhez" so the line remains accurate for all future CRM integrations. |
| SD3 | Stage 03 step label: `No-show visszahívás` | `Elmaradtak visszahívása` | "No-show" is English jargon in operator copy; replaced with plain Hungarian. Description unchanged. |
| SD4a | `<span className="jrn__result-s">és minden lépés mérve — riportálás</span>` | *(deleted)* | Footer clause was a throwaway; reporting is a core system capability that deserved its own dedicated band (SD4b), not a dangling trailing phrase. |
| SD4b | *(new element)* | Reporting band above outcome line: `Mérés végig — havonta megmutatja, mit hozott a rendszer, és hol szivárog még a bevétel.` | Elevates the reporting capability from a dangling footer clause to a cross-cutting layer beneath the three stages. Reuses existing `sysframe__integ` class; no new colors. |
| SD-C1 | SD5 — phase heading redesign | *(no edit)* | CONFIRM BEFORE APPLYING — structural layout change to the three-phase headings. Owner must confirm intent before editing. |
| SD-C2 | SD6 — channel row reorder | *(no edit)* | CONFIRM BEFORE APPLYING — reordering the channel icon row. Owner must confirm intent before editing. |

## Szépségszalon — text

| ID | File | Before | After | Why |
|----|------|--------|-------|-----|
| SS1 | `HeroSalon.tsx` | `Ne veszítsen több vendéget` + rotating typewriter | `Ne veszítsen több vendéget lassú visszahívás miatt` (static) | Rotating headline is semantically incomplete on page load; static anchored phrase completes the thought on first render. `lassú visszahívás miatt` is the primary salon problem framing. |
| SS2 | `HeroSalon.tsx` | `AI-alapú ügyfélkezelési rendszer szépségszalonoknak` | `AI-alapú értékesítési rendszer szépségszalonoknak` | Footer and brand spec use `értékesítési`; the page contradicted itself. |
| SS3 | `PositioningSalon.tsx` | `Értékesítési és ügyfélkezelési rendszereket építünk szépségszalonoknak` | `Értékesítési rendszereket építünk szépségszalonoknak` | Single category term, consistent with SS2 and brand spec. |
| SS4 | `WorkPricingSalon.tsx` (new) · `szepsegszalon/page.tsx` | Shared `WorkPricing` value-based pricing philosophy (`Nincs rögzített árlista…`) | New `WorkPricingSalon` component with three fixed packages (Próbahónap 39k · Alap 49k · Teljes szalon 99k) | Salon is a low-ticket, high-frequency niche: fixed visible prices reduce friction and match same-day decision behavior. Shared WorkPricing untouched. |
| SS5 | `FaqSalon.tsx` | `Nincs egységes árlista — az árat az Ön szalonjának számaiból állítjuk össze…` | `Fix áraink vannak, meglepetés nélkül. A próbahónap 39 000 Ft egyszeri díj…` | FAQ answer must agree with published prices; "no fixed list" is now false. |
| SS6a | `FinalCtaSalon.tsx` | `A szalonja számait nézzük meg.` | `Nézzük meg, melyik csomag illik a szalonjához.` | CTA heading must reflect that packages now exist; visitor can self-select, not just diagnose. |
| SS6b | `FinalCtaSalon.tsx` | `Nincs kötelezettség · nincs sürgetés · ha nem áll össze, kap egy auditot` | `Nincs kötelezettség · nincs sürgetés` | Sales Leak Audit is a post-meeting save tool, not advertised to cold visitors (same rationale as root-page A7). |

### Review rows

| ID | Topic | Status | Note |
|----|-------|--------|------|
| SS-R1 | Prices unconfirmed | REVIEW | 39 000 / 49 000 / 99 000 Ft are starting anchors reasoned from ~300–450k/mo receptionist all-in cost, Meridian ~40k/mo floor, and spec ~20–30k small-package floor. Validate and sign off before publishing. |
| SS-R2 | Waitlist build commitment | REVIEW | Teljes csomag promises `várólistáról` re-fill. Confirm feature will be built; add to brand spec as confirmed salon-config capability. |
| SS-R3 | `Receptionnél olcsóbb` graph | REVIEW | With 49–99k prices vs ~300–450k receptionist, the cost comparison claim is now defensible. Handle in the Miért éri meg graph pass. |
| SS-R4 | Sales motion | REVIEW | Prices are now displayed while CTA stays meeting-first (`Foglaljon időpontot`). Confirm this is the intended motion for the salon niche. |

## Fizioterápia — text

| ID | File | Before | After | Why |
|----|------|--------|-------|-----|
| PS1 | `HeroPhysio.tsx` | `Ne veszítsen több pácienst` + rotating typewriter | `Ne veszítsen több pácienst lassú visszahívás miatt` (static) | Same rationale as SS1: rotating headline is semantically incomplete on page load. Static anchor completes the thought on first render. |
| PS2 | `HeroPhysio.tsx` | `AI-alapú ügyfélkezelési rendszer gyógytornász és fizioterapeuta rendelőknek` | `AI-alapú értékesítési rendszer gyógytornász és fizioterapeuta rendelőknek` | Consistent with footer, brand spec, and salon page (SS2). |
| PS3 | `PositioningPhysio.tsx` | `Értékesítési és ügyfélkezelési rendszereket építünk gyógytornász és fizioterapeuta rendelőknek` | `Értékesítési rendszereket építünk gyógytornász és fizioterapeuta rendelőknek` | Single category term; consistent with PS2 and brand spec. |
| PS4 | `WorkPricingPhysio.tsx` (new) · `fizioterapia/page.tsx` | Shared `WorkPricing` value-based pricing philosophy | New `WorkPricingPhysio` component with three fixed packages (Próbahónap 39k · Alap 49k · Teljes rendelő 99k) | Mirrors salon approach; shared WorkPricing untouched. |
| PS5 | `FaqPhysio.tsx` | `Nincs egységes árlista — az árat az Ön rendelőjének számaiból állítjuk össze…` | `Fix áraink vannak, meglepetés nélkül. A próbahónap 39 000 Ft egyszeri díj…` | FAQ answer must agree with published prices. |
| PS6a | `FinalCtaPhysio.tsx` | `A rendelője számait nézzük meg.` | `Nézzük meg, melyik csomag illik a rendelőjéhez.` | CTA heading reflects that packages now exist. |
| PS6b | `FinalCtaPhysio.tsx` | `Nincs kötelezettség · nincs sürgetés · ha nem áll össze, kap egy auditot` | `Nincs kötelezettség · nincs sürgetés` | Same rationale as SS6b / root-page A7: audit is a post-meeting save tool. |

### Review rows

| ID | Topic | Status | Note |
|----|-------|--------|------|
| PS-R1 | Prices unconfirmed | REVIEW | 39 000 / 49 000 / 99 000 Ft carried from salon. Physio patient value (treatment courses, not single visits) is plausibly higher — prices may warrant a notch up. Validate and sign off before publishing. |
| PS-R2 | Waitlist build commitment | REVIEW | Teljes rendelő csomag promises `várólistáról` re-fill. Confirm feature will be built; add to brand spec as confirmed physio-config capability. |
| PS-R3 | `értékesítési` vs patient-management framing | REVIEW | "Sales" reads differently for a healthcare niche. Decide at spec level whether medical niches (physio, dental, specialists) should use a softer patient-management frame — the footer follows whatever you choose. |
| PS-R4 | New niche not in spec | REVIEW | Physio / fizioterapeuta is not in the brand spec's niche list or hero families. Add it to keep surface and spec in agreement. |
| PS-R5 | Channel count | REVIEW | Five chips (`Telefon · SMS · WhatsApp · E-mail · Webchat`) — more honest than salon's eight. Verify all five are live before publishing. |
| PS-R6 | `Receptionnél olcsóbb` graph | REVIEW | Defensible at 49–99k prices. Handle in the Miért éri meg graph pass. |

## Root — product confidence

| ID | File | Before | After | Why |
|----|------|--------|-------|-----|
| PC1 | `WorkPricing.tsx` | `Nem kész terméket árulunk, hanem az Ön működésére építünk — és az árat is az Ön számaiból számoljuk ki.` | `Kész rendszert kap, az Ön működésére építve — nem sablonból. Az árat is az Ön számaiból számoljuk ki.` | "We don't sell a finished product" makes Atrium read as an advisor. Buyer should expect to *get a system*. New line affirms the system exists and is bespoke — the differentiation Meridian can't claim. |
| PC2 | `FinalCta.tsx` | `és megmondjuk, hol szivárog a bevétel, mielőtt bármiről dönt.` | `és megmutatjuk, hol szivárog a bevétel — és hogyan zárja be a rendszer.` | "Before you decide anything" reads passive/advisory. New ending points at the system as the answer, not at a diagnostic pause. |

### Review row

| ID | Topic | Status | Note |
|----|-------|--------|------|
| PC-R1 | Brand-voice rule | RECORD IN SPEC | Lead with the concrete system and outcome; keep "built for you, diagnosed, not a template" as the differentiator on top. Never let the consultative motion dilute the promise that the buyer gets a system. `diagnózis, nem értékesítés` in the process steps is fine — the process ends with `A rendszer élesedik`. |

## Körmös — new page

Structural template: `/szepsegszalon` (all layout, components, CSS architecture). Corrected copy applied from the start — no broken hero, no value-based pricing, no `ügyfélkezelési`, no audit-to-cold-visitor.

New files: `src/app/kormos/page.tsx` · `src/components/HeroKormos.tsx` · `src/components/RealtimeDashboardKormos.tsx` · `src/components/FullSystemKormos.tsx` · `src/components/PositioningKormos.tsx` · `src/components/WorkPricingKormos.tsx` · `src/components/QualifierCrmKormos.tsx` · `src/components/FaqKormos.tsx` · `src/components/FinalCtaKormos.tsx`

CSS theme added: `.page--kormos` (`--signal: #C4705A` coral + gold gradient gradient, same pattern as salon/physio).

| ID | File | Copy applied | Note |
|----|------|-------------|------|
| NK1 | `HeroKormos.tsx` | Eyebrow `Körmösöknek, műkörömépítőknek` · static headline `Ne veszítsen több vendéget lassú visszahívás miatt` · nail subhead | Dead typewriter code not carried over. |
| NK2 | `RealtimeDashboardKormos.tsx` | `Festés közben, műköröm alatt, masszázsnál` → `Manikűr, pedikűr, géllakkozás közben` · `szépségszalon` → `körmös szalon` · gradient IDs suffixed `K` | Loss numbers inherited from salon. |
| NK3 | `FullSystemKormos.tsx` | De-fabbed live stat → `Minden megkeresés egy helyen · egy sem vész el` · GoHighLevel → `a meglévő CRM-jéhez` · `mester` → `körmös` throughout · `No-show visszahívás` → `Elmaradtak visszahívása` | Brand spec §10 governs GoHighLevel removal. |
| NK4 | `WorkPricingKormos.tsx` | Fixed packages (39k/49k/99k) with nail vocab (`a megfelelő körmöshöz`) | |
| NK5 | `PositioningKormos.tsx` | Specified category lead · `Egyszemélyes körmöstől a többszékes szalonig` | |
| NK6 | `QualifierCrmKormos.tsx` | `1/2–5/6+ mester` → `körmös` · `kezelések, körmösök és kapacitás` · accent `#C4705A` | |
| NK7 | `FaqKormos.tsx` | Pricing FAQ with specified answer · `kezelési típusok és körmösök` · `manikűr, pedikűr, géllakkozás, műköröm-építés` | |
| NK8 | `FinalCtaKormos.tsx` | Specified heading, body, fine print, button | |

### Review rows

| ID | Topic | Status | Note |
|----|-------|--------|------|
| NK-R1 | Prices unconfirmed | REVIEW | 39 000 / 49 000 / 99 000 Ft carried from salon. Nail is high-frequency repeat (fills every 2–3 weeks) — value may support these or higher. Validate before publishing. |
| NK-R2 | Waitlist build commitment | REVIEW | Teljes szalon csomag promises `várólistáról` re-fill. Confirm feature will be built. |
| NK-R3 | New niche not in spec | REVIEW | Add körmös / műkörömépítő (slug `/kormos`) to the brand spec niche list and architecture diagram. |
| NK-R4 | Graphs inherited | REVIEW | Nail graphs mirror salon's exactly and must receive the same graph pass when salon's lands. |
