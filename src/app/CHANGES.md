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

## Niche CTA — product confidence

| ID | Page | File | Before | After | Why |
|----|------|------|--------|-------|-----|
| NCC-salon | Szépségszalon | `FinalCtaSalon.tsx` | `…és megmondjuk, hol szivárog a bevétel, mielőtt bármiről dönt.` | `…és megmondjuk, hol szivárog a bevétel — és melyik csomag zárja be.` | "Before you decide" reads advisory; tying the leak to "which package closes it" points the buyer at the fixed offer they're choosing between. |
| NCC-physio | Fizioterápia | `FinalCtaPhysio.tsx` | `…és megmondjuk, hol szivárog a bevétel, mielőtt bármiről dönt.` | `…és megmondjuk, hol szivárog a bevétel — és melyik csomag zárja be.` | Same rationale as NCC-salon. |
| NCC-kormos | Körmös | `FinalCtaKormos.tsx` | `…és megmondjuk, hol szivárog a bevétel, mielőtt bármiről dönt.` | `…és megmondjuk, hol szivárog a bevétel — és melyik csomag zárja be.` | Same rationale as NCC-salon. |
| NCC-vet | Állatorvos | `FinalCtaVet.tsx` | `…és megmondjuk, hol szivárog a bevétel, mielőtt bármiről dönt.` | `…és megmondjuk, hol szivárog a bevétel — és melyik csomag zárja be.` | Same rationale as NCC-salon. Applied to vet page as it matched the same pattern. |

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

## Szépségszalon — core reframe

Core problem: DM-booking admin (endless Messenger/Instagram back-and-forth). Product: AI foglalási asszisztens.

| ID | File | Before | After | Why |
|----|------|--------|-------|-----|
| NR1-salon | `HeroSalon.tsx` | `Ne veszítsen több vendéget lassú visszahívás miatt` | `Ne töltse az estéit foglalási üzenetekkel.` | Missed-call framing was wrong for the product. The real operator pain is the DM-booking marathon, not unanswered calls. |
| NR2-salon | `HeroSalon.tsx` | `…minden hívást felvesz, minden foglalást megerősít, minden vendéget visszahoz — a háttérben, az Ön naptárához kötve.` | `…a foglalási üzeneteket Messengeren és Instagramon magától megválaszolja, szabad időpontot ajánl, és a naptárába írja. Ön közben a vendéggel van.` | Subhead now names the channel (Messenger, Instagram), the action (message → slot → calendar), and the operator benefit (hands off). |
| NR3-salon | `PositioningSalon.tsx` | Heading `Nem AI ügynökség vagyunk.` + Értékesítési rendszereket builder pitch | Heading `A foglalás ma üzenetben zajlik — és ez Önön csapódik le.` + DM-booking problem body | Positioning section now earns its place: names the concrete problem before pitching the product. |
| NR4-salon | `WorkPricingSalon.tsx` | Próbahónap: minden hívást felvesz · Alap: hívásfogadás + visszahívás · Teljes: régi vendégek visszahívása | Próbahónap: foglalási asszisztens, Messenger/Instagram · Alap: foglalás Messenger/Instagram/web, lemondások · Teljes: törzsvendégek + értékelés + riport | Package descriptions now match what the product actually does; call-answering framing removed. |
| NR5-salon-Q2 | `FaqSalon.tsx` | `…a rendszer veszi fel a telefont, tájékoztatja a vendéget…` | `…a rendszer megválaszolja a Messengeren és Instagramon érkező foglalási kéréseket, időpontot kínál a naptárából, és visszaigazolja a foglalást.` | Q2 answer described call answering as the primary capability — replaced with DM-booking. |
| NR5-salon-Q6 | `FaqSalon.tsx` | `…felveszi az összes hívást — soha nem foglalt, nincs sorban állás…` | `…megválaszolja az összes beérkező foglalási üzenetet — nincs késés, nincs elveszett foglalás.` | Same rationale: call-volume framing replaced with message-volume. |
| NR6-salon | `FinalCtaSalon.tsx` | `Megnézzük a hívásait, az elfelejtett foglalásokat és a lemondásokat…` | `Megnézzük, hogyan intézi most a foglalásokat, és megmutatjuk, mit venne le Önről a rendszer…` | CTA body now matches the booking-admin core; call/leak list removed. |
| NR7-salon | `FullSystemSalon.tsx` | Full `A teljes rendszer` block: system-intro paragraph, `Hogyan működik?` line, channel chip row (8 channels), `01 Megkeresés / 02 Foglalás / 03 Megtartás` funnel diagram, `Teli naptár` result line, integrations line (was GoHighLevel), `Mit tud a rendszer?` capability grid (Hang-AI … 0–24), fabricated stat `412 hívás fogadva · 0 kihagyva`. | Focused `Mit csinál a foglalási asszisztens?` block: 4-item `wpr__grid` list (Válaszol · Időpontot ad · Visszaigazol · Kezeli a lemondást) + closing `Ennyi. Nincs új alkalmazás…` + `sys__badges` trust strip kept. | Multi-system overview contradicted the single-product reframe. Fabricated stat and GoHighLevel both removed. Section renders only what the product actually does. |

### Review rows

| ID | Topic | Status | Note |
|----|-------|--------|------|
| NR-S-R1 | `értékesítési` frame mismatch | REVIEW | Product is friction-removal (booking admin), not a revenue-leak fixer. `értékesítési rendszer` may overclaim against the product's promise. Decide: keep for footer/spec consistency, or give the low-ticket lane a time-saving frame instead. Physio exempt. |
| NR-S-R2 | Messenger + Instagram deliverability | REVIEW | The salon/nail core claims Meta DM booking automation as the differentiator. Verify the Meta DM integration is deliverable before this page goes live. If not, the whole core problem/product statement needs revision. |
| NR-S-R3 | Graphics contradiction | REVIEW | Timeline, leak diagram, system diagram, and Miért éri meg bars are still call/leak-themed. They need a graphics pass: re-theme to DM-booking context. Separate pass — not touched here. |

## Körmös — core reframe

Identical product and problem to salon; nail vocab applied (`mester` → `körmös`, `szépségszalon` → `körmös szalon`, examples: `műköröm`, `géllakk`).

| ID | File | Before | After | Why |
|----|------|--------|-------|-----|
| NR1-kormos | `HeroKormos.tsx` | `Ne veszítsen több vendéget lassú visszahívás miatt` | `Ne töltse az estéit foglalási üzenetekkel.` | Same rationale as NR1-salon. |
| NR2-kormos | `HeroKormos.tsx` | `…minden hívást felvesz, minden foglalást megerősít, minden vendéget visszahoz — a háttérben, az Ön naptárához kötve.` | `…a foglalási üzeneteket Messengeren és Instagramon magától megválaszolja, szabad időpontot ajánl, és a naptárába írja. Ön közben a vendéggel van.` | Same as NR2-salon; nail-specific eyebrow already in file. |
| NR3-kormos | `PositioningKormos.tsx` | Heading `Nem AI ügynökség vagyunk.` + builder pitch body | Heading `A foglalás ma üzenetben zajlik — és ez Önön csapódik le.` + DM-booking problem body | Same as NR3-salon. |
| NR4-kormos | `WorkPricingKormos.tsx` | Próbahónap: minden hívást felvesz · Alap: hívásfogadás + visszahívás | Próbahónap: foglalási asszisztens, Messenger/Instagram · Alap: `a megfelelő körmöshöz` | Same as NR4-salon; `mesterhez` → `körmöshöz` in Alap desc. Closing line: `a csapatának semmit nem kell lecserélnie` (was missing `a csapatának`). |
| NR5-kormos-Q2 | `FaqKormos.tsx` | `…a rendszer veszi fel a telefont…` | `…a rendszer megválaszolja a Messengeren és Instagramon érkező foglalási kéréseket…` | Same as NR5-salon-Q2. |
| NR5-kormos-Q6 | `FaqKormos.tsx` | `…felveszi az összes hívást…` | `…megválaszolja az összes beérkező foglalási üzenetet…` | Same as NR5-salon-Q6. |
| NR6-kormos | `FinalCtaKormos.tsx` | `Megnézzük a hívásait, az elmaradt foglalásokat és a lemondásokat…` | `Megnézzük, hogyan intézi most a foglalásokat, és megmutatjuk, mit venne le Önről a rendszer…` | Same as NR6-salon. |
| NR7-kormos | `FullSystemKormos.tsx` | Full `A teljes rendszer` block (same structure as salon). | Focused `Mit csinál a foglalási asszisztens?` block: 4-item list with nail vocab (`körmöshöz` not `mesterhez`) + closing + `sys__badges` trust strip kept. | Same rationale as NR7-salon. Kormos had already de-fabbed the live stat and removed GoHighLevel (NK3); NR7 completes the removal of the full-system block. |

### Review rows

| ID | Topic | Status | Note |
|----|-------|--------|------|
| NR-K-R1 | Messenger + Instagram deliverability | REVIEW | Same as NR-S-R2 — load-bearing claim; must be verified before page goes live. |
| NR-K-R2 | Graphics contradiction | REVIEW | Same as NR-S-R3 — graphics pass needed. |

## Fizioterápia — core reframe

Core problem: patients drop out of a treatment course partway. Product: AI folyamatkövető (course tracker).

| ID | File | Before | After | Why |
|----|------|--------|-------|-----|
| NR1-physio | `HeroPhysio.tsx` | `Ne veszítsen több pácienst lassú visszahívás miatt` | `Hogy a megkezdett kezelést a páciens végig is járja.` | Missed-call framing was wrong. The physio revenue problem is course dropout, not unanswered calls. |
| NR2-physio | `HeroPhysio.tsx` | `…minden hívást felvesz, minden foglalást megerősít, minden pácienst visszahoz — a háttérben, az Ön naptárához kötve.` | `…figyeli, ki marad ki a kezelési folyamatból, és magyarul, időben visszahívja a következő alkalomra.` | Subhead now names the single action the product takes: monitors and re-engages dropouts in time. |
| NR3-physio | `PositioningPhysio.tsx` | Heading `Nem AI ügynökség vagyunk.` + builder pitch body | Heading `A bevétel nem az új páciensből vész el, hanem a meglévőből.` + course-dropout problem body | Naming the exact mechanism of revenue loss; reframes the operator's growth frame from acquisition to retention. |
| NR4-physio | `WorkPricingPhysio.tsx` | Próbahónap: minden hívást felvesz · Alap: hívásfogadás + visszahívás · Teljes: kezelési folyamatot megszakító visszahívása + várólistáról | Próbahónap: folyamatkövető, kezelési sor · Alap: kimaradó páciensek visszahívása, megfelelő terapeuta · Teljes: régen járt páciensek + riport | Package descriptions match the course-continuation product, not call-answering. |
| NR5-physio-Q2 | `FaqPhysio.tsx` | `…a rendszer veszi fel a telefont, tájékoztatja a pácienst…` | `…a rendszer figyeli, ki maradt ki a kezelési folyamatból, és időben megkeresi a következő alkalomra.` | Q2 answer described call answering; replaced with course-continuation core. |
| NR5-physio-Q6 | `FaqPhysio.tsx` | `…felveszi az összes hívást — soha nem foglalt, nincs sorban állás…` | `Párhuzamosan több pácienst is nyomon követ…figyeli a kezelési folyamatból kimaradt pácienseket, és szükség esetén megkeresi — egyetlen páciens sem vész el útközben.` | Call-volume framing replaced with course-tracking core. |
| NR6-physio | `FinalCtaPhysio.tsx` | `Megnézzük a hívásait, az elfelejtett időpontokat és a lemondásokat…` | `Megnézzük, hány páciens marad ki a kezelési folyamatból, és megmutatjuk, mit venne vissza a rendszer…` | CTA body now matches the course-continuation core. |
| NR7-physio | `FullSystemPhysio.tsx` | Full `A teljes rendszer` block: system-intro paragraph, `Hogyan működik?` line, channel chip row (5 channels), `01/02/03` funnel diagram, `Teli naptár` result line, GoHighLevel integrations line, capability grid, fabricated stat `386 hívás fogadva · 0 kihagyva`. | Focused `Mit csinál a folyamatkövető?` block: 3-item `wpr__grid` list (Figyeli · Visszahívja · Foglal és emlékeztet) + closing `Ennyi. Nincs új alkalmazás…` + `sys__badges` trust strip kept. | Same rationale as NR7-salon. Physio fabricated stat (`386 hívás fogadva · 0 kihagyva`) and GoHighLevel removed. |

### Review rows

| ID | Topic | Status | Note |
|----|-------|--------|------|
| NR-P-R1 | `értékesítési` frame for physio | RECORD | Physio core is genuinely revenue-leak (dropped course = lost session fees), so the `értékesítési rendszer` frame holds here — no tension. |
| NR-P-R2 | Graphics contradiction | REVIEW | Timeline, system diagram, and Miért éri meg bars are call/leak-themed. Need a graphics pass: re-theme to course-continuation context. Separate pass — not touched here. |
| NR-P-R3 | New niche in spec | REVIEW | Fizioterápia (slug `/fizioterapia`) is not yet in the brand spec niche list or hero families. Add with confirmed slug. |

## Építőipar — create

Broad construction landing (`/epitoipar`). One shared problem across all trades. Full system kept (high job value justifies it). Value-based pricing — no price shown.

New files: `src/app/epitoipar/page.tsx` · `src/components/HeroEpitoipar.tsx` · `src/components/PositioningEpitoipar.tsx` · `src/components/FullSystemEpitoipar.tsx` · `src/components/WorkPricingEpitoipar.tsx` · `src/components/FaqEpitoipar.tsx` · `src/components/FinalCtaEpitoipar.tsx`

CSS theme added: `.page--epitoipar` (`--signal: #A07C34` warm amber, earthy gradient, same pattern as other niches).

| ID | File | Before / Action | After | Why |
|----|------|-----------------|-------|-----|
| KV1 | `HeroEpitoipar.tsx` | *(new)* | `Értékesítési rendszer építőipari cégeknek.` eyebrow | Construction category line per spec. |
| KV2 | `HeroEpitoipar.tsx` | *(new)* | `A rendszer, amely akkor is értékesít, amikor Ön az építkezésen van.` (static, no typewriter) | No rotating phrase needed; the single on-site problem is the hook. |
| KV3 | `HeroEpitoipar.tsx` | *(new)* | `…minden hívást fogad, minden árajánlatot utánkövet, és minden érdeklődőt visszahív, amíg Ön a munkán van.` | Names the three actions the product takes; anchors the phone-in-hand moment. |
| KV4 | `PositioningEpitoipar.tsx` | *(new)* | Heading `Ön a munkán van. A telefon meg csörög.` + on-site problem body | Names the specific mechanism of revenue loss before pitching the product. |
| KV5 | `FullSystemEpitoipar.tsx` | Root `CAPS` array (8 generic items) | 6 construction capabilities: Hívásfogadás · Érdeklődő-utánkövetés · Árajánlat-utánkövetés · Helyszíni felmérés · Elmaradt felmérés visszaszerzése · Riport | Construction-native verbs; removes appointment-business capabilities not applicable here. |
| KV6 | `FullSystemEpitoipar.tsx` | Root `sys__howline` ends `a csapatának semmit nem kell lecserélnie` | `AI-ügynökök kezelik a hang- és szöveges kommunikációt, természetes magyar nyelven — a meglévő eszközeihez kötve. A csapatának semmit nem kell lecserélnie.` | Split into two sentences; `kommunikáció` is more accurate than `beszélgetés` for the trade audience. |
| KV7 | `WorkPricingEpitoipar.tsx` | *(new)* | ROI paragraph: `Egy építőipari munka több százezertől…` | No fabricated figures; ROI argument rests on job value, not a conversion rate. |
| KV8 | `WorkPricingEpitoipar.tsx` | *(new)* | Heading `Az árat az Ön számaiból állítjuk össze.` + value-based body | No price shown; meeting-first motion. |
| KV9 | `FaqEpitoipar.tsx` | *(new)* | 5 Q&As: Mit csinál · Eszköz-csere · Ár · Adattárolás · Magyar nyelvű | GoHighLevel not named (brand spec §10). No fabricated numbers. |
| KV10 | `FinalCtaEpitoipar.tsx` | *(new)* | Heading `Nézzük meg, hol szivárog a bevétele.` · body: hívások + árajánlatok + érdeklődők · `Foglaljon időpontot` | Points at concrete inputs from a construction business; button consistent with hero. |
| KV11 | `HeroEpitoipar.tsx`, `FinalCtaEpitoipar.tsx` | *(carried)* | Magyar nyelvű · EU hosting · GDPR-konform trust strip | Unchanged from root. |
| KV-C1 | `epitoipar/page.tsx` | `CustomSolutions` included on root | *(excluded)* | Egyedi fejlesztés / Példa projektek / Amit tudunk építeni taxonomy is competitor-reskin material; off-strategy for a launch page. |
| KV-C2 | `epitoipar/page.tsx` | `QualifierCrm` (contains `munkatárs vs rendszer` cost bar) | *(excluded)* | At full-system value-based pricing the "cheaper than an employee" bar is false. ROI argument is in KV7 instead. |
| KV-C3 | `FullSystemEpitoipar.tsx` | Root had fabricated `412 hívás fogadva · 0 kihagyva` (already removed at root by NR7, but) | *(not carried)* | No fabricated stats on any surface. Live label: `Minden hívás egy helyen · egy sem vész el`. |

### Review rows

| ID | Topic | Status | Note |
|----|-------|--------|------|
| KV-R1 | Spec deviation — broad page | REVIEW | Spec lists construction sub-niches separately (`kivitelező`, `szigetelő`, `tetőfedő`…). `/epitoipar` is a deliberate collapse for launch speed. Register `/epitoipar` in spec as the broad construction landing. |
| KV-R2 | Graphics re-theme | REVIEW | `RealtimeDashboard` and `QualifierCrm` are excluded; inherited hero DAY entries are already construction-themed. The `FullSystemEpitoipar` phase diagrams (VizMegkereses/VizFelmeres/VizMegtartas) are generic SVGs — acceptable for launch but a construction-specific graphics pass (on-site call, árajánlat follow-up) would strengthen it. |
| KV-R3 | WhatsApp channel | REVIEW | `WhatsApp` included in channel row and CHANNELS array. Confirm deliverable before publishing; if not live, trim to Telefon · SMS · E-mail. |
| KV-R4 | CTA button wording | REVIEW | `Foglaljon időpontot` (Hero + FinalCta) vs. root `FinalCta`'s `Foglaljon 30 perces megbeszélést`. Pick one site-wide and align. |
| KV-R5 | `RealtimeDashboard` shared | REVIEW | Root `RealtimeDashboard` is reused; it uses appointment-business language internally. If the dashboard copy becomes visible to construction visitors, run a separate pass to re-theme it. |

## Építőipar — build (cégvezető)

Full rebuild of all 6 epitoipar components for the **head of an established construction firm** (staff, office, project managers). The solo-tradesman frame ("you miss calls while on scaffolding") is replaced throughout with a structural-organisational revenue-leak frame.

Files changed: `src/components/HeroEpitoipar.tsx` · `src/components/PositioningEpitoipar.tsx` · `src/components/FullSystemEpitoipar.tsx` · `src/components/WorkPricingEpitoipar.tsx` · `src/components/FaqEpitoipar.tsx` · `src/components/FinalCtaEpitoipar.tsx` · `src/app/epitoipar/page.tsx` · `src/app/globals.css`

| ID | File | Before | After | Why |
|----|------|--------|-------|-----|
| KV1 | `HeroEpitoipar.tsx` | `Értékesítési rendszer építőipari cégeknek.` eyebrow | unchanged | Correct; carried. |
| KV2 | `HeroEpitoipar.tsx` | `A rendszer, amely akkor is értékesít, amikor Ön az építkezésen van.` | `Egyetlen megkeresés és egyetlen árajánlat sem vész el.` | Old headline was solo-operator ("you're on-site"). New: organisational zero-loss promise. |
| KV3 | `HeroEpitoipar.tsx` | `…minden hívást fogad…amíg Ön a munkán van.` | `…minden megkeresést azonnal fogad és kvalifikál, a megfelelő emberhez irányít, és minden árajánlatot utánkövet, amíg le nem zárul. Ön pedig először látja át az egészet.` | Three concrete actions + reporting hook. Removes "you're on the job site" frame; correct for a firm with office staff. |
| KV4 | `PositioningEpitoipar.tsx` | Heading `Ön a munkán van. A telefon meg csörög.` + solo-operator body | `A bevétel az értékesítés tetején szivárog — ott, ahova Ön nem lát.` heading + 4 structural leaks grid (lassú fogadás / nincs utánkövetés / drága szakemberek szűretlen megkereséseken / nincs rálátás) | Reframe: organisational leaks, not personal missed calls. Uses `wpr__grid` layout. |
| KV5 | `FullSystemEpitoipar.tsx` | Root phases copied verbatim | 3 phases: 01 Fogadás és kvalifikálás (4 steps) · 02 Irányítás és foglalás (4 steps) · 03 Lezárás és rálátás (3 steps, Riport step uses `.tsr__step--lead`). Channels trimmed from 8 → 3: Telefon · Webűrlap · E-mail. | Phases and steps match construction buyer journey, not salon appointment flow. Channels: construction is phone-led. |
| KV6 | `FullSystemEpitoipar.tsx` | `AI-ügynökök…a meglévő eszközeihez kötve. A csapatának semmit nem kell lecserélnie.` | Added CRM mention and AI disclosure sentence: `…igen, ez egy AI-alapú rendszer — pontosan megmutatjuk, mit csinál, és hol adja vissza az embereinek a döntést.` | Cégvezető buyer is more sceptical; explicit AI disclosure builds trust rather than eroding it. |
| KV7 | `HeroEpitoipar.tsx` | `Egy nap a rendszerrel` 12-step solo-operator day timeline | `Egy megkeresés útja` 7-step inquiry journey (Megkeresés → Fogadva → Kvalifikálva → Irányítva → Felmérés foglalva → Árajánlat utánkövetve → Látható). 4/3 column split. Last step (`bars`, `#A07C34`) uses signal color for natural emphasis. | Replaces personal day narrative with a process-level illustration appropriate for a firm buyer. |
| KV8 | `WorkPricingEpitoipar.tsx` | `Egy építőipari munka több százezertől…havonta egyetlen elszalasztott munkát visszahoz` | `A megtérülés az Önök munkaértékén a legnagyobb. Néhány visszahozott árajánlat negyedévente…önmagában megtérítik a rendszer költségét.` | ROI argument shifted from call-rescue to quote-recovery (árajánlat-utánkövetés is the primary ROI hook for a firm). No fabricated figures. |
| KV9 | `WorkPricingEpitoipar.tsx` | 3 generic steps (single-line desc) | 4 process steps with title + description (Megbeszélés · Diagnózis · Ajánlat az Önök számaiból · Elindítás). Value-based heading `Az árat az Ön számaiból állítjuk össze.` kept; body re-written for firm buyer. | Steps now describe the firm-buyer onboarding journey; not the solo-operator audit. |
| KV10 | `FaqEpitoipar.tsx` | 5 Q&As (solo-operator: call-answering focus, `Tényleg magyarul beszél?`) | 5 Q&As rebuilt for cégvezető: `Mit csinál a rendszer?` · `Új ügyfeleket is szerez?` (honest `Nem. A rendszer a meglévő keresletet hozza vissza…`) · `Le kell cserélnünk a mostani rendszereinket?` · `Mennyibe kerül?` · `Hol tárolják az adatokat?` | Removes `Tényleg magyarul?` (not the cégvezető's concern); adds honest "no new leads" disclosure which builds credibility. |
| KV11 | `FinalCtaEpitoipar.tsx` | `Nézzük meg, hol szivárog a bevétele.` | `Mennyi árajánlat vár most válaszra — és ki követi utánuk?` | Pending quotes are the sharpest hook for a firm that sends many proposals. |
| KV12 | `HeroEpitoipar.tsx`, `FullSystemEpitoipar.tsx`, `FinalCtaEpitoipar.tsx` | Trust strip carried from root | Magyar nyelvű · EU hosting · GDPR-konform — unchanged, repeated at three key points | Unchanged; cégvezető needs data-residency assurance. |
| KV-C1 | `epitoipar/page.tsx` | `CustomSolutions` excluded | *(still excluded)* | Same rationale as original build. |
| KV-C2 | `epitoipar/page.tsx` | `QualifierCrm` excluded | *(still excluded)* | Same rationale as original build; cost-bar is false at value-based pricing. |
| KV-C3 | `epitoipar/page.tsx` | `FullSystemEpitoipar` came before `PositioningEpitoipar` | Swapped: `PositioningEpitoipar` (problem) now comes before `FullSystemEpitoipar` (solution) | Problem-led order: name the four organisational leaks before showing the system that closes them. |
| KV-CSS | `globals.css` | `.tsr__step--lead` not defined | Added `.tsr__step--lead { border-left: 2.5px solid var(--c); padding-left: 12px; margin-left: -14px; }` + `.tsr__step--lead .tsr__step-txt b { color: var(--c); }` | Visual emphasis on the Riport step using the phase color variable (`var(--c)`) — works automatically for any phase color. |

### Review rows

| ID | Topic | Status | Note |
|----|-------|--------|------|
| KV-R1 | Page-level metadata | REVIEW | `description` updated to cégvezető framing; `title` unchanged. If a cégvezető-specific title is needed, update separately. |
| KV-R2 | `RealtimeDashboard` shared | REVIEW | Reused from root; appointment-business language may surface. Consider a construction-native pass if the dashboard copy is visible to visitors. |
| KV-R3 | `HowWeStart` shared | REVIEW | Also reused; verify onboarding steps are firm-appropriate. |
| KV-R4 | AI disclosure honesty | RECORD | The explicit AI disclosure in KV6 (`igen, ez egy AI-alapú rendszer`) is intentional brand-voice for the B2B cégvezető buyer. Do not remove in future copy passes; it builds rather than erodes trust with this persona. |
| KV-R5 | Solo-operator pages | REVIEW | `/szepsegszalon`, `/kormos`, `/fizioterapia` all still use the personal frame. If those products are confirmed for the firm context, run a similar rebuild. For now they remain single-operator products. |

## Állatorvos — build

Owner-operator vet landing (`/allatorvos`). Template: root page. Full system kept (high recurring value justifies it). Value-based, no displayed prices. Route-not-filter is the hard differentiator vs the construction page. Recall/reactivation is the primary commercial lever; reporting shows the base recovery.

New files: `src/app/allatorvos/page.tsx` (rewritten from stub) · `src/components/HeroAllatorvos.tsx` · `src/components/PositioningAllatorvos.tsx` · `src/components/FullSystemAllatorvos.tsx` · `src/components/WorkPricingAllatorvos.tsx` · `src/components/FaqAllatorvos.tsx` · `src/components/FinalCtaAllatorvos.tsx`

CSS theme added: `.page--allatorvos` (`--signal: #2D9B7F` medical teal-green, distinct from physio's teal-blue `#4A9EB8`).

| ID | File | Before / Action | After | Why |
|----|------|-----------------|-------|-----|
| AV1 | `HeroAllatorvos.tsx` | *(new)* | `Értékesítési rendszer állatorvosi rendelőknek.` eyebrow | Category line per spec. |
| AV2 | `HeroAllatorvos.tsx` | *(new)* | `Minden gazdi. Minden hívás. Minden órában.` (static, no typewriter) | Static; the who/what/when is the whole hook. No rotating phrase needed. |
| AV3 | `HeroAllatorvos.tsx` | *(new)* | `…minden hívást fogad, a sürgős eseteket rangsorolja, a rutin időpontokat lefoglalja, és visszahívja a pácienseket, mielőtt lemaradnának az oltásról.` | Names the four actions; ends on the hidden-lever (recall). |
| AV4 | `PositioningAllatorvos.tsx` | *(new)* | Two leaks: `A meg nem válaszolt hívás.` (visible) + `A lemorzsolódó páciens.` (hidden base drift) | Problem-led: two leaks before the system. Heading: `Két helyen veszít — az egyiket látja, a másikat nem.` |
| AV5 | `PositioningAllatorvos.tsx` | *(new)* | `Itt nem szűrünk. Minden gazdi egy évekig tartó kapcsolat…` framing line at section end | Route-not-filter guard — explicitly in copy, not just in code. Placed immediately after the two leaks so it lands before the system is introduced. |
| AV6 | `FullSystemAllatorvos.tsx` | Root phases copied verbatim | 3 phases: 01 Fogadás és sürgősségi rangsorolás (3 steps) · 02 Foglalás és emlékeztetés (3 steps) · 03 A bázis megtartása (3 steps, Visszahívás esedékességkor + Riport use `.tsr__step--lead`). Channels trimmed to 3: Telefon · SMS · E-mail. | Vet is phone-led; rangsoorolás (triage) replaces kvalifikálás (screen-out). No filtering language anywhere in step copy. |
| AV7 | `FullSystemAllatorvos.tsx` | Root `sys__howline` | `AI-ügynökök kezelik…a rendelő meglévő naptárához kötve…igen, ez egy AI-alapú rendszer — pontosan megmutatjuk, mit csinál.` | Same AI disclosure as construction (KV6): honesty builds trust with medical-adjacent owner. |
| AV8 | `HeroAllatorvos.tsx` | Root "egy nap a rendszerrel" 12-step day timeline | `Egy gazdi útja` 6-step owner lifecycle (Hívás → Fogadva → Rangsorolva → Lefoglalva → Emlékeztetve → Visszahívva). 3/3 col split. Last step uses signal color `#2D9B7F`. | Replaces generic day narrative with the specific vet lifecycle; last step (recall) is the hook. ILLUSZTRATÍV label present. |
| AV9 | `WorkPricingAllatorvos.tsx` | *(new)* | `A nagyobb pénz a meglévő bázisban van.` ROI paragraph; honest limit included: `nem minden elmaradt gazdi hozható vissza` | The honest-limit sentence is intentionally on the page — credibility move vs Meridian's invented ROI. Vet buyer is sceptical of inflated promises. |
| AV10 | `WorkPricingAllatorvos.tsx` | *(new)* | Heading `Az árat az Ön számaiból állítjuk össze.` + value-based body (aktív páciensek száma / egy kedvencre jutó éves érték / lecsúszott páciensek aránya). 4 process steps with title + description. | No price shown; meeting-first. |
| AV11 | `FaqAllatorvos.tsx` | *(new)* | 6 Q&As: Mit csinál · Kiszűri a kisebb ügyfeleket? (Nem) · Új gazdikat is szerez? (Nem) · Naptár-csere (Nem) · Ár · Adattárolás | `Kiszűri?` + `Új gazdikat?` FAQs are doing explicit route-not-filter guard work — keep both in future copy passes. |
| AV12 | `FinalCtaAllatorvos.tsx` | *(new)* | `Tudja, hány páciense csúszott le az oltási rendről?` heading; pending-vaccination body; `Foglaljon időpontot` button | Opens on the hidden lever (base drift); body names the concrete diagnostic the vet can verify themselves. |
| AV13 | Hero + FullSystem + FinalCta | Trust strip carried | Magyar nyelvű · EU hosting · GDPR-konform — unchanged, repeated at three key points | GDPR is doubly relevant for pet-owner data (sensitive client data + emotional context). |
| AV-C1 | `allatorvos/page.tsx` | `CustomSolutions` would have been included if copied from root | *(excluded)* | Custom-dev taxonomy is off-strategy for a niche launch page. |
| AV-C2 | `allatorvos/page.tsx` | Stub had `QualifierCrmVet` (cost-bar component) | *(excluded; removed from page)* | Cost-comparison bar is false at value-based pricing. ROI argument lives in AV9 instead. |
| AV-C3 | `FullSystemAllatorvos.tsx` / `PositioningAllatorvos.tsx` | No filtering / qualify-out language from construction template carried over | *(verified clean)* | Route-not-filter is the hard differentiator. `Sürgősségi rangsorolás` step copy explicitly ends: `senkit nem szűr ki — mindenkit a helyére irányít`. FAQ Q2 adds explicit `Nem` answer. |
| AV-CSS | `globals.css` | No `.page--allatorvos` rule | Added `.page--allatorvos` theme: `--signal: #2D9B7F`; warm teal-green gradient; btn/chev/badge/newtag accented | Distinct from physio `#4A9EB8` (teal-blue) and construction `#A07C34` (amber). |

### Review rows

| ID | Topic | Status | Note |
|----|-------|--------|------|
| AV-R1 | Stub components (`HeroVet`, `FaqVet`, etc.) | REVIEW | The old stub `page.tsx` imported `HeroVet`, `RealtimeDashboardVet`, `FullSystemVet`, `PositioningVet`, `QualifierCrmVet`, `FaqVet`, `FinalCtaVet` — none of these files exist. The page now imports the correct `Allatorvos` components. Confirm the stub component files were never created; if they were, delete them. |
| AV-R2 | `RealtimeDashboard` shared | REVIEW | Root `RealtimeDashboard` is reused; it uses appointment-business language internally. Run a vet-specific pass if dashboard copy surfaces to visitors. |
| AV-R3 | Rabies-compliance angle | FLAG — DO NOT ADD | Dog rabies vaccination being legally required in Hungary is a strong recall angle but is a legal claim. Deliberately kept OFF the page. Do not add any schedule or compliance statement until verified against current Hungarian regulation. |
| AV-R4 | `wpr__note` class | REVIEW | `WorkPricingAllatorvos` uses `wpr__note` for the fine-print line. Verify this CSS class exists in globals.css (it was added for the construction page); if not, fall back to a `dash__p` with reduced opacity. |
| AV-R5 | Twin-to-dental port | RECORD | This page is ~80% portable to `/fogaszat`. Recall becomes "lapsed patients / abandoned treatment plans." Build dental from this, not from scratch. Key swaps: `gazdi` → `páciens`, `kedvenc` → `fogkezelés/implantátum`, `oltás` → `kontroll/fogpótlás esedékes`. |
| AV-R6 | Lead follow-up scope | REVIEW | New-lead follow-up (ads traffic) is dormant unless the clinic runs paid acquisition. Page does not promise client acquisition (FAQ Q3 is explicit). If the clinic starts ads, the system earns this capability without a copy change. |
| AV-R7 | Honest-limit sentence visibility | CONFIRM | `AV9` intentionally includes `nem minden elmaradt gazdi hozható vissza — aki költség miatt maradt el, azt nem ígérjük`. Confirm this line stays visible; it is the credibility differentiator vs Meridian. Do not remove in future copy passes. |

## Szépségipar — build

Broad low-ticket beauty landing (`/szepsegipar`). Collapses `/szepsegszalon` + `/kormos` (same DM-booking problem, same product). Physio is NOT included (different product: course-continuation). Template: `/szepsegszalon`.

**Lane shape:** lightweight, fixed prices ON page (39/49/99k), DM-first, fill-don't-filter. No full system tour, no value-based pricing, no eight-channel chip row.

New files: `src/app/szepsegipar/page.tsx` · `src/components/HeroSzepsegipar.tsx` · `src/components/PositioningSzepsegipar.tsx` · `src/components/ProductSzepsegipar.tsx` · `src/components/WorkPricingSzepsegipar.tsx` · `src/components/FaqSzepsegipar.tsx` · `src/components/FinalCtaSzepsegipar.tsx`

CSS theme added: `.page--szepsegipar` (`--signal: #9E6B9E` warm lavender-purple; distinct from salon rose `#BC6285` and nail coral `#C4705A`).

| ID | File | Before / Action | After | Why |
|----|------|-----------------|-------|-----|
| SZ1 | `HeroSzepsegipar.tsx` | *(new)* | `Szépségszalonoknak, körmösöknek, kozmetikusoknak.` eyebrow | Broad beauty lane; names all three operator types. |
| SZ2 | `HeroSzepsegipar.tsx` | *(new)* | `Ne töltse az estéit foglalási üzenetekkel.` (static, no typewriter) | Carried from salon reframe (NR1-salon); correct for the whole DM-booking lane. |
| SZ3 | `HeroSzepsegipar.tsx` | *(new)* | `…a foglalási üzeneteket Messengeren és Instagramon magától megválaszolja, időpontot ad, és emlékeztet. Ön közben a vendéggel van.` | DM-first subhead; names the channels and the operator benefit. |
| SZ4 | `PositioningSzepsegipar.tsx` | *(new)* | Three leaks: A lassú válasz · A meg nem jelenés · Az elmaradt vendég. Heading: `Itt szivárog el a foglalás.` | Problem-led section before the product. No qualify-out language. |
| SZ5 | `ProductSzepsegipar.tsx` | *(new)* | `Nem egy foglalási link.` heading + lead line + 6-capability caps grid (Válaszol · Foglal · Emlékeztet · Feltölti a lemondást · Visszahívja az elmaradt vendéget · Visszahozza a régieket) | Lightweight, no SVG phase diagrams, no channel chip row. Lead line is the core differentiator: the system sends/receives in the channel the customer is already in. |
| SZ6 | `WorkPricingSzepsegipar.tsx` | *(new)* | Fixed packages: Próbahónap 39 000 Ft egyszeri · Alap 49 000 Ft/hó · Teljes 99 000 Ft/hó. Heading `Fix csomagok, fix árak.` | Prices ON page per low-ticket lane spec. No value-based / "az árat az Ön számaiból" language — that's the high-ticket lane. |
| SZ7 | `FaqSzepsegipar.tsx` | *(new)* | 5 Q&As: Mit csinál · Ez csak egy foglalási link? (Nem) · Naptár-csere (Nem) · Mennyibe kerül (names fixed prices) · Adattárolás | `Ez csak egy foglalási link?` FAQ is doing core product-differentiation work — keep it in future passes. |
| SZ8 | `FinalCtaSzepsegipar.tsx` | *(new)* | `Nézzük meg, melyik csomag illik a szalonjához.` heading; booking-admin diagnostic body; `Foglaljon időpontot` button | Points at package selection; consistent with site-wide CTA label. |
| SZ9 | Hero + Product + FinalCta | *(new)* | Magyar nyelvű · EU hosting · GDPR-konform trust strip at three key points | Unchanged from other pages. |
| SZ-CSS | `globals.css` | No `.page--szepsegipar` rule | Added `.page--szepsegipar` theme: `--signal: #9E6B9E` warm lavender-purple | Distinct from salon `#BC6285`, nail `#C4705A`, physio `#4A9EB8`. Gradient blends lavender → rose → bone. |
| SZ-DAY | `HeroSzepsegipar.tsx` | Salon DAY 11:00 beat: `qualify` — "Csak az árat kérdezték — előszűrve, nem foglal felesleg helyet" | Instagram DM beat: "Instagramon írt be egy vendég — azonnali foglalás, kézzel nem kellett hozzányúlni." | Fill-don't-filter mandate. The qualify-out beat was the only filtering-language survivor from the salon template; replaced with a DM booking beat. |
| SZ-C1 | `szepsegipar/page.tsx` | Salon page had `RealtimeDashboard` | *(excluded)* | Shared dashboard has appointment-business language and fabricated stat figures (`412 hívás fogadva · 0 kihagyva`). |
| SZ-C2 | `szepsegipar/page.tsx` | Salon page had `QualifierCrmSalon` (cost-bar) | *(excluded)* | `munkatárs vs rendszer` cost-bar is false at 49–99k fixed pricing (same rationale as other niche pages). |
| SZ-C3 | `szepsegipar/page.tsx` | Salon page had `FullSystemSalon` (even after NR7 reframe, still a system block) | Replaced by `ProductSzepsegipar` — lightweight 6-cap grid, no phase diagrams, no channel row | Low-ticket lane spec: no full-system capability grid. |

### Review rows

| ID | Topic | Status | Note |
|----|-------|--------|------|
| SZ-R1 | **HARD GATE — Messenger/Instagram DM integration** | CONFIRM BEFORE ADS | The entire pitch leads on DM handling. Confirm the integration is buildable AND handoverable before running a single ad. If undeliverable, the core product statement needs revision, not just the copy. |
| SZ-R2 | Prices unconfirmed | REVIEW | 39 / 49 / 99 000 Ft are starting anchors. Sign off before the page goes live or any ad creative references a price. |
| SZ-R3 | Lane firewall — beauty vs medical-aesthetic | RECORD | `/szepsegipar` is service salons (fixed price, DM-booking). Do NOT let this page bleed into szépészeti/plasztikai (medical-aesthetic, high-ticket, value-based). Register this split in the brand spec. |
| SZ-R4 | Nail-targeted ad creative | RECORD | Per brief: körmös is the sharpest ad target (most Instagram-native, no incumbent tool). The broad page serves nail traffic without a separate `/kormos` page. Build `/kormos` only if `/szepsegipar` underperforms for nail. |
| SZ-R5 | Audience wording | REVIEW | Eyebrow names all three (szalon/körmös/kozmetikus). Body copy defaults to `szalon` / `vendég` — the relatable broad term. If any specific beauty sub-niche reads as excluded, broaden that sentence. |
| SZ-R6 | Build commitments in Teljes | REVIEW | Teljes promises: elmaradt vendégek visszahívása · régiek visszahozása · értékeléskérés · havi kimutatás. Confirm each is deliverable before the package goes live. |
| SZ-R7 | `/szepsegszalon` and `/kormos` routes | RECORD | These routes still exist and still work. They are now superseded by `/szepsegipar` as the canonical beauty-lane page. Decide: redirect both to `/szepsegipar`, or keep them as narrower landing pages for specific ad audiences. No redirect added in this build — separate decision. |
| SZ-R8 | `wpr__note` class | REVIEW | `WorkPricingAllatorvos` uses `wpr__note` which may not be defined in globals.css. `WorkPricingSzepsegipar` deliberately uses the confirmed `dash__p` pattern instead to avoid this. Resolve `wpr__note` separately. |

## Gyors lead-válasz — build (/gyors-lead-valasz)

**Third layer: cross-niche service page.** Sells one outcome (respond to every paid lead in minutes) to any business running Meta/Google ads. Not a niche page — no qualify-out language, no sector-specific framing.

| ID | Component | File | Before | After | Why |
|----|-----------|------|--------|-------|-----|
| LR1 | Hero eyebrow | `HeroGyorsLead.tsx` | *(new)* | "Lead-kezelés Meta- és Google-hirdetésekhez." | Cross-niche frame; audience thinks in leads not érdeklődő. |
| LR2 | Hero headline | `HeroGyorsLead.tsx` | *(new)* | "Minden leadre válasz. Perceken belül." | Static headline; speed is the single outcome. |
| LR3 | Hero sub | `HeroGyorsLead.tsx` | *(new)* | "Az Atrium egy AI-alapú rendszer, amely azonnal megkeresi a beérkező leadeket — mielőtt a versenytárs megteszi." | Speed + competitive framing; appropriate for ads audience. |
| LR4 | Problem section | `PositioningGyorsLead.tsx` | *(new)* | Three leaks: késői válasz / meg nem keresett lead / kimaradó utánkövetés | Problem-led, before the product. Heading: "Megfizeti a leadet. Aztán elengedi." |
| LR5 | HBR stat callout | `PositioningGyorsLead.tsx` | *(new)* | 21x qualifying probability stat with full source line | Framed as meaningful contact / qualifying only — NOT closing rate. Source visible below the stat. |
| LR6 | Product section | `ProductGyorsLead.tsx` | *(new)* | 5-cap grid: Percek alatt válaszol / Kvalifikál / Foglal vagy átad / Utánamegy / Riport | No quote follow-up (epitoipar lane only — cannibalisation risk). No channel chip row, no full-system tour. |
| LR7 | Math line | `ProductGyorsLead.tsx` | *(new)* | "Ezekért a leadekért már fizet. A rendszer csak gondoskodik róla, hogy mind felvett legyen velük a kapcsolat." | Reframes spend already happening; no new cost invented. |
| LR8 | Pricing | `WorkPricingGyorsLead.tsx` | *(new)* | `[Havidíj — beállítandó] Ft / hó` placeholder | Volume + channel-count drive price; confirmed at consultation. Visible placeholder — do NOT publish without setting. |
| LR9 | FAQ | `FaqGyorsLead.tsx` | *(new)* | 5 Q&As: mit csinál / kvalifikál-e / platformok / ütemezés / ár | Honest ár answer: depends on volume — no fabricated anchor. No GoHighLevel on public surface. |
| LR10 | Final CTA | `FinalCtaGyorsLead.tsx` | *(new)* | "Nézzük meg, hány lead veszett el az elmúlt hónapban." | Loss-frame hook matched to the page's loss-frame problem section. |
| LR11 | CSS theme | `globals.css` | No `.page--gyors-lead-valasz` rule | Added: `--signal: #2B64B8` business blue | Distinct from all niche themes: amber/#A07C34, teal/#2D9B7F, lavender/#9E6B9E, rose/#BC6285, coral/#C4705A, physio-teal/#4A9EB8. |
| LR-C1 | Page route | `gyors-lead-valasz/page.tsx` | *(new)* | HeroGyorsLead → PositioningGyorsLead → ProductGyorsLead → WorkPricingGyorsLead → HowWeStart → FaqGyorsLead → FinalCtaGyorsLead → Footer | Order: problem-led, then product, then process, then FAQ. |
| LR-C2 | RealtimeDashboard | *(excluded)* | *(excluded)* | *(excluded)* | Fabricated stats; wrong frame for cross-niche service. |
| LR-C3 | QualifierCrm | *(excluded)* | *(excluded)* | *(excluded)* | Cost-bar frame is niche-specific; not meaningful cross-niche. |

### Review rows

| ID | Topic | Status | Note |
|----|-------|--------|------|
| LR-R1 | **Price placeholder** | REQUIRED BEFORE PUBLISH | `[Havidíj — beállítandó] Ft / hó` is visibly unstyled. Set the actual price or confirm variable-price approach before any traffic hits this page. |
| LR-R2 | HBR stat framing | CONFIRM | Stat framed as "21x érdemi kontakt valószínűsége" — NOT closing rate. Verify the 2011 HBR paper supports this exact framing; do not let ad creative quote the stat as close-rate. |
| LR-R3 | Third-layer registration | RECORD | This is the first page in the cross-niche service layer (LR = lead response). Register this layer in the brand spec with its own lane rules: fixed framing around one specific service outcome, cross-niche, ads-first audience. |
| LR-R4 | Cannibalisation guard — quote follow-up | RECORD | Quote follow-up intentionally excluded (epitoipar lane only). If a construction firm lands on this page, they should not see "quote follow-up" and conclude the epitoipar page adds nothing new. Guard this firewall as more service pages are added. |
| LR-R5 | `/gyors-lead-valasz` in sitemap / nav | RECORD | Not linked from root nav in this build. Decide: add as a sub-item under a Services menu, or keep as a dark landing page for specific ad traffic only. |

## Root — Miért éri meg törlés + mentés

| ID | Before | After | Why |
|----|--------|-------|-----|
| MEG1 | `QualifierCrm` block: `Miért éri meg` / `Amit a rendszer Önnek hoz`, lead-scoring intro, MINDEN CÉGMÉRETRE, Személyre szabva, Saját CRM, rendszer nélkül/a rendszerrel, elérhetőség/havi költség rendszer·munkatárs table | Whole block removed; component file deleted | Core-system value in the wrong place; off-brand spine (lead-scoring filter + rendszer vs. munkatárs cost table). |
| MEG2 | — | 2-point value strip (`ValueStrip`) above WorkFlow: "Mindig elérhető", "Több időpont, ugyanannyi érdeklődőből" | Salvaged the two non-duplicated points. |

Dedup (MEG2): **skipped** "A méretére szabva" (dup of FullSystem `A rendszert mindig a cége méretéhez igazítjuk…`) and "A saját rendszerét használja tovább" (dup of FullSystem `A meglévő eszközeit nem kell lecserélnie.`).

Section C — review flags:
- **Placement (confirm):** ValueStrip placed directly above the WorkFlow ("Hogyan dolgozunk" pricing/decision) section — best-guess insertion point, needs human confirmation.
- **Saját CRM reword:** the "az adatok… nem egy bérelt felületen" claim was dropped on purpose (Atrium ships a GoHighLevel instance, so a "never rented surface" claim half-contradicts the stack). No other "own platform / not rented" claim found on the root page that needs the same treatment.
- **Dropped on purpose:** the lead-scoring/filter line and the `rendszer vs. munkatárs` cost table — not reintroduced anywhere.

## Landing — manifeszt blokk restyle

Removed card container and green ! icon. Section now highlights by scale (largest heading on the page, clamp 32–58px) and a thin Signal-green left-rule on the content block. Bone canvas, generous padding, body in Stone. No new tokens introduced.
