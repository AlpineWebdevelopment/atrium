import type { ReactNode } from "react";

/* Bento grid under "Amit mi AI-nak hívunk." — value, packages, technology,
   language, dashboard. Desktop: value is the tall tile on the left, package
   and technology stack on the right, dashboard and the small language tile
   share the bottom row. Tablets and phones: value on top, package tall on
   the left with technology and language stacked beside it at different
   heights, dashboard underneath. Checklists sit at the bottom of each tile,
   so tiles fill their cells. No illustrations, no published prices, no
   unverifiable figures. */

type Tile = { area: string; k: string; t: string; d: string; items?: string[] };

const TILES: Tile[] = [
  {
    area: "val",
    k: "Érték",
    t: "Egy dolga van: pénzt hozni.",
    d: "Nem képgenerálás, nem csevegőablak a weboldal sarkában. Az a dolga, hogy több megkeresésből legyen megrendelés.",
    items: ["Több ügyfél, több foglalás, több bevétel", "Megtérülés az Ön számaiból, nem ígéretből", "Mérhető növekedés, nem bemutató"],
  },
  {
    area: "pack",
    k: "Csomag",
    t: "Az Ön cégére szabva",
    d: "A folyamatához és a méretéhez igazítjuk, a pár fős csapattól a nagyvállalatig.",
    items: ["Saját CRM minden csomagban", "Díj a cég méretéhez igazítva", "Folyamatos támogatás"],
  },
  {
    area: "tech",
    k: "Technológia",
    t: "Minden csatorna, egy memória",
    d: "Amit a cége használ, azt bekötjük, és mindegyik ugyanabból a memóriából dolgozik.",
    items: ["Semmit nem kell kétszer elmondani", "Megkeresi a régi ügyfeleket", "Valós idejű CRM-szinkron"],
  },
  {
    area: "lang",
    k: "Nyelv",
    t: "Magyarul, ahogy az ügyfelei beszélnek",
    d: "Természetes magyar beszéd, menü és robothang nélkül.",
  },
  {
    area: "dash",
    k: "Irányítópult",
    t: "Minden adat egy helyen",
    d: "Egy felületen látja az összes beszélgetést, ügyfelet és eredményt, valós időben.",
    items: ["Minden beszélgetés visszanézhető", "Élő mutatók és statisztikák", "Több AI-ügynök egy helyen, mobilon is"],
  },
];

const Check = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="dr-bento__ok"><path d="M5 13l4 4L19 7" /></svg>
);

/* Small drawings only where they explain something, and always labelled, so
   they read as content, not decoration. The value and dashboard tiles carry
   no art: their claims have no honest picture at this size. */
function Art({ area }: { area: string }) {
  if (area === "val") {
    /* A working week with two states only — booked or free — plus the slot
       the system has just filled. Anything more (channels, colours per
       source) only raises questions at this size. */
    const DAYS = ["H", "K", "SZ", "CS", "P"];
    const HOURS = ["09", "11", "13", "15"];
    /* row-major, 4 rows x 5 days: 1 = booked, 0 = free, 2 = just booked */
    const SLOTS = [
      1, 1, 1, 1, 0,
      1, 1, 1, 1, 1,
      1, 1, 1, 0, 1,
      1, 1, 1, 1, 2,
    ];
    return (
      <div className="dr-art dr-art--cal" role="img" aria-label="Egy munkahét naptára, amely megtelik lefoglalt időpontokkal">
        <span className="dr-art__cal-top">
          <em />
          {DAYS.map((d) => <em key={d}>{d}</em>)}
        </span>
        <span className="dr-art__cal-body">
          {HOURS.map((h, row) => (
            <span className="dr-art__cal-row" key={h}>
              <em>{h}</em>
              {SLOTS.slice(row * 5, row * 5 + 5).map((v, i) => (
                <i key={i} className={v === 2 ? "is-new" : v === 1 ? "is-booked" : "is-free"}>
                  {v === 2 && <b>most</b>}
                </i>
              ))}
            </span>
          ))}
        </span>
        <span className="dr-art__cal-legend">
          <em><i className="booked" />Lefoglalt munka</em>
          <em><i className="free" />Szabad</em>
          <em><i className="now" />Most foglalta a rendszer</em>
        </span>
      </div>
    );
  }
  if (area === "pack") {
    return (
      <div className="dr-art dr-art--sizes">
        {[
          { l: "Pár fős csapat", w: "20%", c: "var(--viz-cyan)" },
          { l: "Középvállalat", w: "44%", c: "var(--viz-blue)" },
          { l: "Nagyvállalat", w: "100%", c: "var(--viz-purple)" },
        ].map((r) => (
          <span className="dr-art__size" key={r.l}>
            <em>{r.l}</em>
            <i style={{ width: r.w, background: r.c }} />
          </span>
        ))}
      </div>
    );
  }
  if (area === "tech") {
    /* The channels' own marks, redrawn as inline SVG so nothing is loaded from
       a third party. Trademarks of their owners, used to name the channels we
       connect — swap in the official brand assets before this goes live if
       their guidelines require it. */
    const ICONS: Record<string, ReactNode> = {
      Telefon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#010E1E" d="M6.6 3.2h3.1l1.6 3.9-2.1 1.5a10.4 10.4 0 0 0 4.6 4.6l1.5-2.1 3.9 1.6v3.1a1.6 1.6 0 0 1-1.7 1.6A14.9 14.9 0 0 1 5 4.9a1.6 1.6 0 0 1 1.6-1.7z" />
        </svg>
      ),
      SMS: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#5B8DEF" d="M12 3.4c-5 0-9 3.3-9 7.4 0 2.3 1.3 4.4 3.3 5.7l-.8 3.6 3.8-2a11 11 0 0 0 2.7.3c5 0 9-3.3 9-7.5s-4-7.5-9-7.5z" />
          <g fill="#FFFFFF"><circle cx="8.4" cy="10.8" r="1.1" /><circle cx="12" cy="10.8" r="1.1" /><circle cx="15.6" cy="10.8" r="1.1" /></g>
        </svg>
      ),
      WhatsApp: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#25D366" d="M12 2.2a9.7 9.7 0 0 0-8.3 14.7L2.4 21.8l5-1.3A9.7 9.7 0 1 0 12 2.2z" />
          <path fill="#FFFFFF" d="M9.1 7.3c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.4.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-.9 1.2c-.2.2-.3.2-.6.1a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.6-2.1c-.2-.3 0-.4.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.9z" />
        </svg>
      ),
      Viber: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#7360F2" d="M12.2 2c-2.6 0-5 .3-6.5 1.6C4.5 4.7 3.8 6.6 3.7 9v2.6c.1 2.4.8 4.3 2 5.4.6.5 1.4.9 2.3 1.1V22l2.7-2.8h1.5c2.6 0 5-.3 6.5-1.6 1.2-1.1 1.9-3 2-5.4V9c-.1-2.4-.8-4.3-2-5.4C17.2 2.3 14.8 2 12.2 2z" />
          <path fill="#FFFFFF" d="M9.6 6.7c-.2-.4-.5-.4-.7-.4-.2 0-.4 0-.6.1-.3.1-.9.6-1 1.5-.1 1 .5 2.2 1.4 3.4a11 11 0 0 0 3.4 3.1c1.1.6 2 .7 2.6.4.6-.3.9-.9.9-1.2 0-.2-.1-.4-.2-.5l-1.6-1c-.3-.2-.5-.1-.7.1l-.6.8c-.1.2-.3.2-.5.1-1.3-.7-2.3-1.7-3-3-.1-.2 0-.3.1-.5l.6-.5c.2-.2.2-.4.1-.6z" />
          <path fill="none" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" d="M12.6 5.4a4.6 4.6 0 0 1 4.3 4.4M12.6 7.5a2.6 2.6 0 0 1 2.3 2.4" />
        </svg>
      ),
      Messenger: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#0084FF" d="M12 2.3C6.5 2.3 2.3 6.3 2.3 11.7c0 2.9 1.3 5.5 3.4 7.2v3.5l3.2-1.8c.9.2 1.9.4 3.1.4 5.5 0 9.7-4 9.7-9.3s-4.2-9.4-9.7-9.4z" />
          <path fill="#FFFFFF" d="m6.4 14.4 4.8-5.1 2.5 2.6 4.1-2.6-4.8 5.1-2.5-2.6z" />
        </svg>
      ),
      Instagram: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <defs>
            <radialGradient id="dr-ig" cx="0.3" cy="1" r="1.1">
              <stop offset="0%" stopColor="#FFD776" />
              <stop offset="35%" stopColor="#F58529" />
              <stop offset="65%" stopColor="#DD2A7B" />
              <stop offset="100%" stopColor="#8134AF" />
            </radialGradient>
          </defs>
          <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4" fill="url(#dr-ig)" />
          <rect x="6.3" y="6.3" width="11.4" height="11.4" rx="3.6" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2.9" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="16.4" cy="7.6" r="1" fill="#FFFFFF" />
        </svg>
      ),
      "E-mail": (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2.4" y="5" width="19.2" height="14" rx="2.4" fill="#FFFFFF" stroke="#D1CCC2" strokeWidth="1.1" />
          <path fill="none" stroke="#EA4335" strokeWidth="1.8" strokeLinejoin="round" d="m3.2 6.4 8.8 6.6 8.8-6.6" />
        </svg>
      ),
      Webchat: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="var(--viz-cyan)" d="M4 5.6A2.4 2.4 0 0 1 6.4 3.2h11.2A2.4 2.4 0 0 1 20 5.6v8a2.4 2.4 0 0 1-2.4 2.4h-6.1L6.8 20v-4h-.4A2.4 2.4 0 0 1 4 13.6z" />
          <path fill="#FFFFFF" d="m10.6 6.6 3.4 2.9-3.4 2.9z" />
        </svg>
      ),
    };
    const CHANNELS = ["Telefon", "SMS", "WhatsApp", "Viber", "Messenger", "Instagram", "E-mail", "Webchat"];
    return (
      <div className="dr-art dr-art--chan">
        <span className="dr-art__chips">
          {CHANNELS.map((l) => <i key={l}>{ICONS[l]}{l}</i>)}
          <i className="more">+ bármi más</i>
        </span>
        <span className="dr-art__merge" aria-hidden="true">
          <svg viewBox="0 0 24 12"><path d="M3 2v3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V2M12 8v3M12 11l-2.4-2.4M12 11l2.4-2.4" /></svg>
        </span>
        <span className="dr-art__mem">Egy beszélgetés, egy memória</span>
      </div>
    );
  }
  if (area === "lang") {
    return (
      <div className="dr-art dr-art--hu">
        <span className="dr-art__flag" aria-hidden="true"><i /><i /><i /></span>
        <span className="dr-art__hu-wave" aria-hidden="true">
          {[10, 18, 26, 16, 22, 12, 20, 14].map((h, i) => (
            <i key={i} style={{ height: `${h}px`, background: i % 2 ? "var(--viz-cyan)" : "var(--viz-purple)" }} />
          ))}
        </span>
        <span className="dr-art__hu-l">Magyar hang, magyar szöveg</span>
      </div>
    );
  }
  if (area === "dash") {
    return (
      <div className="dr-art dr-art--panel" aria-hidden="true">
        <span className="dr-art__win"><i /><i /><i /></span>
        <span className="dr-art__rows">
          {[
            { l: "Hívások", c: "var(--viz-purple)", w: "82%" },
            { l: "Foglalások", c: "var(--viz-blue)", w: "58%" },
            { l: "Megrendelések", c: "var(--viz-green)", w: "40%" },
          ].map((r) => (
            <span className="dr-art__row" key={r.l}>
              <em>{r.l}</em>
              <i><b style={{ width: r.w, background: r.c }} /></i>
            </span>
          ))}
        </span>
      </div>
    );
  }
  return null;
}

export default function DirectFeatures() {
  return (
    <section className="dr-sec dr-bento-sec">
      <div className="dr-wrap">
        <div className="dr-bento">
          {TILES.map((it, i) => (
            <div className={`dr-bento__card dr-bento__card--${it.area} reveal`} data-delay={i + 1} key={it.area}>
              <div className="dr-bento__top">
                <span className="dr-bento__k">{it.k}</span>
                <h3 className="dr-bento__t">{it.t}</h3>
                <p className="dr-bento__p">{it.d}</p>
                <Art area={it.area} />
              </div>
              {it.items && (
                <ul className="dr-bento__list">
                  {it.items.map((t) => (
                    <li key={t}><Check /><span>{t}</span></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
