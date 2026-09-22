"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { ASSETS, BASE } from "../data/config";
import { useStore } from "../lib/store";
import { seatsLeft } from "../lib/access";
import { instructorOf } from "../lib/courses";
import { formatDate } from "../lib/dates";
import { useUpgrade } from "../ui/UpgradeModal";
import { Wordmark } from "../ui/Shell";
import { CourseCover } from "../ui/CourseCover";
import { Button, Card, Eyebrow, LinkButton } from "../ui/primitives";

/* Public landing. Facts about Péter come from his site and nowhere else; the
   tier columns, seats and cohort date all read from the store, so the admin
   panel moves them live. */

const FAQ = [
  {
    q: "Mennyi időt kér ez hetente",
    a: "Egy lecke (10–20 perc) és egy rövid feladat. A tananyag hétről hétre nyílik meg, ezért nem tudsz lemaradni úgy, hogy egyszerre tíz lecke várjon rád.",
  },
  {
    q: "Kinek való, és kinek nem",
    a: "Vállalkozóknak, akik már csinálják — vagy épp most vágnak bele —, és nem ötleteket, hanem rendszert keresnek. Ha csak nézelődnél, a nyílt workshopokra gyere el először.",
  },
  {
    q: "Mi a különbség a szintek között",
    a: "Az Alap az alapozó kurzusok és a közösség. A Haladó ehhez hozzáteszi a haladó anyagokat és a havi élő Q&A-t. A Belső kör a kiscsoportos munka Péterrel, korlátozott létszámmal.",
  },
  {
    q: "Lehet szintet váltani",
    a: "Igen, bármikor felfelé, és a hónap végén lefelé is. A Belső körbe csak akkor, ha van szabad hely.",
  },
  {
    q: "Miért körökben indul",
    a: "Mert együtt indulni könnyebb, és mert a közös indulás Péternek is valódi munka. Két kör között várólistára tudsz feliratkozni.",
  },
  {
    q: "Mi történik, ha lemondom",
    a: "A hónap végéig eléred mindent, utána a hozzáférés megszűnik. Nincs hűségidő. Ami a közösségben rólad szólt, az megmarad — ami tőled jött, azt kérésre töröljük.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-(--fp-border)">
      {FAQ.map((f, i) => (
        <li key={f.q}>
          <button type="button" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 py-5 text-left">
            <span className="fp-display text-lg">{f.q}</span>
            <ChevronDown size={18} className={`flex-none text-(--fp-muted-fg) transition-transform ${open === i ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>
          {open === i && <p className="fp-fade -mt-2 pb-5 text-(--fp-muted-fg)">{f.a}</p>}
        </li>
      ))}
    </ul>
  );
}

export default function Landing() {
  const { config, tiers, courses, role } = useStore();
  const openUpgrade = useUpgrade();
  const left = seatsLeft(config.innerCircleSeats, config.innerCircleTaken);
  const [wait, setWait] = useState(false);
  const isMember = role !== "vendeg";
  const guests = courses.filter((c) => instructorOf(c).isGuest);

  return (
    <div>
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-(--fp-border) bg-(--fp-bg)/80 backdrop-blur-md" style={{ top: "env(safe-area-inset-top, 0px)" }}>
        <div className="fp-container flex h-16 items-center justify-between">
          <Link href={BASE}>
            <Wordmark size={17} />
          </Link>
          <nav className="hidden items-center gap-8 text-[13px] uppercase tracking-widest text-(--fp-muted-fg) md:flex" aria-label="Nyitóoldal">
            <a href="#szintek" className="transition-colors hover:text-(--fp-gold)">
              Szintek
            </a>
            <a href="#hogyan" className="transition-colors hover:text-(--fp-gold)">
              Hogyan működik
            </a>
            <a href="#gyik" className="transition-colors hover:text-(--fp-gold)">
              Kérdések
            </a>
          </nav>
          {isMember ? (
            <LinkButton href={`${BASE}/kozosseg`} size="sm">
              Belépek
            </LinkButton>
          ) : (
            <Button size="sm" onClick={() => openUpgrade("alap")}>
              Csatlakozom
            </Button>
          )}
        </div>
      </header>

      {/* Hero — photo-led, like his site */}
      <section className="relative overflow-hidden pt-16">
        <div className="fp-container grid min-h-[min(calc(100vh-4rem),820px)] items-center gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
          <div className="fp-enter">
            <Eyebrow className="mb-4">{config.mentorTitle}</Eyebrow>
            <h1 className="text-4xl md:text-5xl lg:text-6xl">A tudásom akkor is nálad legyen, amikor én nem vagyok ott</h1>
            <div className="fp-rule my-6" />
            <p className="max-w-lg text-lg text-(--fp-fg-90)">
              Huszonöt év cégvezetés és ezerötszáz vállalkozó tanítása után egy helyre tettem, amit tudok: kurzusok, hetente egy feladat, havonta egy élő alkalom, és egy közösség, amely számon tart.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="lg" onClick={() => openUpgrade("alap")}>
                Csatlakozom a következő körhöz
              </Button>
              <span className="text-sm text-(--fp-muted-fg)">Következő kör indul: {formatDate(config.nextCohortStart)}</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="overflow-hidden rounded-(--fp-radius-xl)">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${ASSETS}/peter-hero.webp`} alt={`${config.mentorName} portré`} width={1000} height={1500} className="aspect-[3/4] w-full object-cover object-top" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-(--fp-radius-xl) bg-gradient-to-t from-(--fp-bg) via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* About — only facts from his site */}
      <section className="border-y border-(--fp-border) bg-(--fp-band) py-24">
        <div className="fp-container grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-2 overflow-hidden rounded-(--fp-radius-xl) md:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSETS}/peter-portrait.webp`} alt="" width={900} height={1350} className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <Eyebrow className="mb-3">Rólam</Eyebrow>
            <h2 className="text-3xl md:text-4xl">25 éve a vállalkozói életben</h2>
            <p className="mt-6 text-(--fp-fg-90)">
              2000 óta vállalkozom, és ugyanennyi ideje foglalkozom önismerettel. Előadóként és trénerként több mint 1500 vállalkozót tanítottam értékesítésre, networkingre és kommunikációra. Pécsen élek, személyesen és csoportban is mentorálok.
            </p>
            <p className="mt-4 text-(--fp-fg-90)">
              Az akadémia azért született, mert az egyéni mentorálásban egyszerre egy emberrel tudok dolgozni. Itt az, amit hétről hétre elmondok, mindenkihez eljut — és a közösség végzi el azt, amit egyedül senki nem tud: számon tart.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["25 év", "cégvezetés"],
                ["1500+", "oktatott vállalkozó"],
                ["Pécs", "és az egész ország, online"],
              ].map(([n, l]) => (
                <li key={n}>
                  <p className="fp-display text-3xl text-(--fp-gold)">{n}</p>
                  <p className="text-sm text-(--fp-muted-fg)">{l}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="hogyan" className="py-24">
        <div className="fp-container">
          <Eyebrow className="mb-3 text-center">Hogyan működik</Eyebrow>
          <h2 className="mx-auto mb-16 max-w-2xl text-center text-3xl md:text-4xl">Hetente egy lecke, hetente egy lépés</h2>
          <ol className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {[
              ["Nézed", "Hetente egy 10–20 perces lecke nyílik meg. Nem egyszerre az egész, hogy legyen időd megcsinálni is."],
              ["Csinálod", "Minden héten kapsz tőlem egy rövid feladatot, ami nyomot hagy a cégedben. A sorozatod számolja, hány hete tartod."],
              ["Beszéljük", "Havonta élőben válaszolok a kérdéseitekre, és a közösségben mások is látják, mire jutottál."],
            ].map(([t, d], i) => (
              <li key={t} className="text-center">
                <span className="fp-display mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-(--fp-gold-10) text-xl text-(--fp-gold)">{i + 1}</span>
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-sm text-(--fp-muted-fg)">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tiers */}
      <section id="szintek" className="border-y border-(--fp-border) bg-(--fp-band) py-24">
        <div className="fp-container">
          <Eyebrow className="mb-3 text-center">Szintek</Eyebrow>
          <h2 className="mx-auto mb-4 max-w-2xl text-center text-3xl md:text-4xl">Válaszd azt, amennyire közel akarsz lenni</h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-(--fp-muted-fg)">Az árak szemléltetők. Következő kör: {formatDate(config.nextCohortStart)}.</p>
          <ul className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {tiers.map((t) => {
              const highlight = t.id === "halado";
              return (
                <Card as="li" key={t.id} className={`flex flex-col p-7 ${highlight ? "border-(--fp-gold-40)" : ""}`}>
                  <h3 className="text-2xl">{t.name}</h3>
                  <p className="mt-1 text-sm text-(--fp-muted-fg)">{t.tagline}</p>
                  <p className="fp-display mt-6 text-2xl">
                    {t.priceLabel.split(" / ")[0]}
                    <span className="ml-1 text-sm font-normal text-(--fp-muted-fg)">/ hó</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {t.inclusions.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-sm">
                        <Check size={15} className="mt-0.5 flex-none text-(--fp-gold)" aria-hidden="true" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  {t.id === "belso" && (
                    <p className="mt-6 text-sm">
                      <span className="text-(--fp-gold)">{left} szabad hely</span>
                      <span className="text-(--fp-muted-fg)"> a {config.innerCircleSeats}-ből</span>
                    </p>
                  )}
                  <Button variant={highlight ? "primary" : "outline"} className="mt-6 w-full" onClick={() => openUpgrade(t.id)}>
                    {t.id === "belso" && left === 0 ? "Várólistára" : "Ezt választom"}
                  </Button>
                </Card>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Cohort */}
      <section className="py-24">
        <div className="fp-container mx-auto max-w-3xl text-center">
          <Eyebrow className="mb-3">Következő kör</Eyebrow>
          <h2 className="text-3xl md:text-4xl">Indul: {formatDate(config.nextCohortStart)}</h2>
          <p className="mx-auto mt-4 max-w-xl text-(--fp-muted-fg)">
            Körökben indulunk, mert az első hetekben együtt haladni könnyebb. {config.enrollmentOpen ? "A beiratkozás most nyitva van." : "A beiratkozás most zárva van — iratkozz fel a várólistára, és szólok, amikor nyílik."}
          </p>
          {config.enrollmentOpen ? (
            <Button size="lg" className="mt-8" onClick={() => openUpgrade("alap")}>
              Csatlakozom
            </Button>
          ) : wait ? (
            <p className="fp-fade mt-8 text-(--fp-gold)">Köszönöm. Amint nyílik a következő kör, elsőként írok neked.</p>
          ) : (
            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setWait(true);
              }}
            >
              <input type="email" required className="fp-input" placeholder="E-mail címed" aria-label="E-mail cím" />
              <Button type="submit" className="flex-none">
                Várólistára
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Guest instructors */}
      <section className="border-y border-(--fp-border) bg-(--fp-band) py-24">
        <div className="fp-container">
          <Eyebrow className="mb-3 text-center">Vendégoktatók</Eyebrow>
          <h2 className="mx-auto mb-4 max-w-2xl text-center text-3xl md:text-4xl">Egy-egy modult mások tartanak a körömből</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-(--fp-muted-fg)">Vállalkozók, akik a témát a saját cégükben élték végig. A neveket az indulás előtt jelentjük be.</p>
          <ul className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...guests, ...Array.from({ length: Math.max(0, 3 - guests.length) }, () => null)].map((c, i) => (
              <Card as="li" key={i} className="overflow-hidden">
                {c ? (
                  <>
                    <CourseCover course={c} className="aspect-[16/9]" />
                    <div className="p-5">
                      <p className="text-[11px] uppercase tracking-[0.15em] text-(--fp-gold)">Vendégoktató — hamarosan</p>
                      <p className="fp-display mt-1 text-lg">{c.title}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex aspect-[16/9] items-center justify-center bg-(--fp-secondary)">
                      <span className="fp-display text-2xl text-(--fp-muted-fg)">?</span>
                    </div>
                    <div className="p-5">
                      <p className="text-[11px] uppercase tracking-[0.15em] text-(--fp-gold)">Vendégoktató — hamarosan</p>
                      <p className="fp-display mt-1 text-lg text-(--fp-muted-fg)">Téma egyeztetés alatt</p>
                    </div>
                  </>
                )}
              </Card>
            ))}
          </ul>
        </div>
      </section>

      {/* Sample testimonial placeholder, honestly labelled */}
      <section className="py-24">
        <div className="fp-container mx-auto max-w-3xl">
          <Card className="p-8 text-center md:p-12">
            <p className="text-[11px] uppercase tracking-[0.15em] text-(--fp-muted-fg)">Minta vélemény — az indulás után valódi tagoktól</p>
            <blockquote className="fp-display mx-auto mt-4 max-w-xl text-xl italic text-(--fp-muted-fg) md:text-2xl">„Ide kerül az első kör tagjainak véleménye. Kitalált idézetet nem teszünk ki.”</blockquote>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="gyik" className="border-t border-(--fp-border) bg-(--fp-band) py-24">
        <div className="fp-container mx-auto max-w-3xl">
          <Eyebrow className="mb-3 text-center">Kérdések</Eyebrow>
          <h2 className="mb-10 text-center text-3xl md:text-4xl">Amit a legtöbben megkérdeznek</h2>
          <Faq />
        </div>
      </section>

      {/* CTA + footer */}
      <section className="py-24">
        <div className="fp-container text-center">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-4xl">Készen állsz a következő lépésre</h2>
          <p className="mx-auto mt-4 max-w-md text-(--fp-muted-fg)">Következő kör: {formatDate(config.nextCohortStart)}. Az első hét leckéje és feladata már vár.</p>
          <Button size="lg" className="mt-8" onClick={() => openUpgrade("alap")}>
            Csatlakozom <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
      </section>
      <footer className="border-t border-(--fp-border) py-8">
        <div className="fp-container flex flex-col items-center justify-between gap-4 text-xs text-(--fp-muted-fg) sm:flex-row">
          <Wordmark size={13} />
          <div className="flex gap-6">
            <a href={config.siteUrl} target="_blank" rel="noreferrer" className="hover:text-(--fp-gold)">
              feherpeter.hu
            </a>
            {config.social.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noreferrer" className="hover:text-(--fp-gold)">
                {s.label}
              </a>
            ))}
          </div>
          <span>Demó · mintaadatokkal</span>
        </div>
      </footer>
    </div>
  );
}
