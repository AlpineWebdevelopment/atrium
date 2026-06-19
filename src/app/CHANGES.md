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
