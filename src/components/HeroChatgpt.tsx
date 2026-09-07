/* Hero for /chatgpt-hirdetes — fixed lead-in + rotating leak slot (fade, not
   typewriter), and a right-side "egy ChatGPT-s érdeklődő útja" journey.

   The rotating set is this landing's own: concrete leaks a service-business
   owner already feels after a ChatGPT click. No numbers, no AI in the H1 —
   AI is named in the eyebrow (category line) and the subhead only.

   Signal rule: the wordmark dot in the nav is this page's one Signal moment,
   so the rotating slot and the canvas indicator are Ink here (see the
   .page--chatgpt-hirdetes overrides in globals.css). */
"use client";
import { useEffect, useRef, useState } from "react";

const ICONS: Record<string, React.ReactNode> = {
  spark:    <g><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="M19 17l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" /></g>,
  form:     <g><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></g>,
  callback: <g><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /><path d="M16 8 22 2M22 8V2h-6" /></g>,
  qualify:  <g><rect x="5" y="4" width="14" height="18" rx="2" /><path d="M9 4V2.5h6V4" /><path d="M8.5 13l2 2 4-4.5" /></g>,
  calendar: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></g>,
  refresh:  <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  bars:     <path d="M12 20V10M18 20V4M6 20v-6" />,
};

/* Journey of one ChatGPT-sourced inquiry — illustrative, no numbers. */
const JOURNEY = [
  { k: "spark",    c: "#628FBC", step: "Kattintás",         t: "Egy kérdés a ChatGPT-ben, a válasz alatt az Ön kártyája. Kattint." },
  { k: "form",     c: "#62BCAC", step: "Beérkezés",         t: "Űrlap, hívás vagy e-mail — a rendszer azonnal látja." },
  { k: "callback", c: "#9662BC", step: "Visszahívás",       t: "Percek alatt, magyarul, az Ön cége nevében." },
  { k: "qualify",  c: "#AD83CC", step: "Kvalifikálva",      t: "Mit szeretne, mikorra, mekkora munka. Eldől, komoly-e." },
  { k: "calendar", c: "#BCA162", step: "Időpont",           t: "Az Ön meglévő naptárába. Az ügyfél visszaigazolást kap." },
  { k: "refresh",  c: "#628FBC", step: "Utánkövetés",       t: "Ha nem válaszol, a rendszer más csatornán, más ütemben próbál újra." },
  { k: "bars",     c: "#010E1E", step: "Látható",           t: "A havi képben ott van: ez az érdeklődő a ChatGPT-ből jött." },
];

const LEAKS = [
  "a ChatGPT-ből érkező érdeklődő, akit csak másnap hív vissza valaki.",
  "az este beérkező ajánlatkérés, ami reggelig áll.",
  "a kattintás, ami egy űrlapban végzi, és ott is marad.",
  "az érdeklődő, aki közben a következő céget is megkérdezi.",
  "az elküldött árajánlat, amire senki nem kérdez rá.",
  "a visszahívást kérő ügyfél, akit senki nem hív vissza.",
  "a hirdetési költés, amiből nem látszik, mi lett.",
  "a lemondott időpont, ami üresen marad.",
];

const ROTATE_MS = 3400;

export default function HeroChatgpt() {
  /* pause both motions once the hero scrolls out of view */
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(true);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* prefers-reduced-motion: show the first leak statically, no rotation */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const [leak, setLeak] = useState(0);
  useEffect(() => {
    if (!active || reduced) return;
    const t = setInterval(() => setLeak((i) => (i + 1) % LEAKS.length), ROTATE_MS);
    return () => clearInterval(t);
  }, [active, reduced]);

  const [cur, setCur] = useState(JOURNEY.length - 1);
  useEffect(() => {
    if (!active || reduced) return;
    const t = setInterval(() => setCur((c) => (c + 1) % JOURNEY.length), 1800);
    return () => clearInterval(t);
  }, [active, reduced]);

  return (
    <section className="hero" id="rendszer" ref={sectionRef}>
      <div className="wrap">
        <div className="hero__grid">
          <div className="hero__content reveal reveal--instant visible">
            <span className="hero__eyebrow">AI értékesítési rendszer ChatGPT-ben hirdető szolgáltató cégeknek.</span>
            <h1 className="hero__title">
              <span className="cg-hero__lead">Ne veszítsen több bevételt:</span>
              <span className="cg-hero__slot" aria-live="polite">
                <span className="cg-hero__leak" key={leak}>{LEAKS[leak]}</span>
              </span>
            </h1>
            <p className="hero__sub">
              Az Atrium egy magyar nyelvű AI-alapú értékesítési rendszer — minden ChatGPT-ből érkező érdeklődőt percek alatt visszahív, minden ajánlatkérést utánkövet, és megmutatja, mi lett a hirdetési költésből.
            </p>
            <div className="hero__actions">
              <a className="btn" href="#kapcsolat">Foglaljon időpontot.</a>
              <a className="btn btn--ghost" href="#rendszer-teljes">
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                A rendszerről
              </a>
            </div>
          </div>

          <div className="canvas reveal reveal--instant visible" aria-hidden="true">
            <div className="canvas__bar">
              <span className="canvas__dot" /><span className="canvas__dot" /><span className="canvas__dot" />
              <span className="canvas__bar-label">atrium · egy ChatGPT-s érdeklődő útja</span>
            </div>
            <div className="canvas__stage canvas__stage--con">
              <div className="hcon__head2">
                <span className="hcon__title"><i /> Egy ChatGPT-s érdeklődő útja</span>
                <span className="cg-caption">szemléltető</span>
              </div>
              <div className="hcon__cols">
                {[JOURNEY.slice(0, 4), JOURNEY.slice(4)].map((col, ci) => (
                  <div className="hcon__col" key={ci}>
                    {col.map((d, ri) => {
                      const gi = ci === 0 ? ri : 4 + ri;
                      const state = gi < cur ? "done" : gi === cur ? "now" : "up";
                      return (
                        <div className={"hcon__row hcon__row--" + state} key={gi}>
                          <span className="hcon__ico" style={{ background: `color-mix(in srgb, ${d.c} 22%, var(--bone))`, color: d.c, border: `1px solid color-mix(in srgb, ${d.c} 50%, transparent)` }}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{ICONS[d.k]}</svg>
                          </span>
                          <span className="hcon__txt">
                            <span className="hcon__time">{d.step}</span>
                            <span className="hcon__ev">{d.t}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <div className="hcon__foot">A hirdetés megveszi a pillanatot. A rendszer nem engedi el.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
