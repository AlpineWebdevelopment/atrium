/* One drawing per service. Each one explains its service rather than
   decorating it: a thread that follows a customer, a list waking up, the two
   speeds of a written answer, the hours a phone is unattended, and the shape
   of a bespoke build. No figures anywhere — every claim here is qualitative,
   because a number on a services page is a promise we cannot keep. */

type Kind = "system" | "revive" | "text" | "voice" | "custom";

/* 01 — the sales system: one thread from the first contact to the return */
function SystemArt() {
  const STEPS: [string, string][] = [
    ["Hívás érkezik", "munkaidőn kívül is felveszi"],
    ["Kikérdez, minősít", "a fontos kérdések, előre"],
    ["Időpont a naptárba", "visszaigazolással"],
    ["Emlékeztető", "hogy meg is legyen tartva"],
    ["Utánkövetés", "az ajánlat ne hűljön ki"],
    ["Visszahozza", "amikor újra esedékes"],
  ];
  return (
    <figure className="sa sa--system">
      <div className="sa__thread">
        {STEPS.map(([t, d], i) => (
          <div className="sa__node" key={t}>
            <span className="sa__dot" aria-hidden="true" />
            <div>
              <b>{t}</b>
              <em>{d}</em>
            </div>
            {i === STEPS.length - 1 && <span className="sa__loop" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <figcaption>Egy szál, az első hívástól a visszatérésig. Nem hat külön eszköz.</figcaption>
    </figure>
  );
}

/* 02 — the old list: rows that have been sitting still, and the ones that
   answer once somebody finally asks */
function ReviveArt() {
  const ROWS = [
    { s: "cold", t: "Érdeklődött, nem lett belőle semmi" },
    { s: "cold", t: "Egyszer vásárolt, azóta csend" },
    { s: "warm", t: "Válaszolt, időpontot kért" },
    { s: "cold", t: "Árajánlatot kapott, nem döntött" },
    { s: "warm", t: "Válaszolt, visszajött" },
    { s: "off", t: "Nemet mondott, lekerül a listáról" },
  ];
  return (
    <figure className="sa sa--revive">
      <div className="sa__list">
        {ROWS.map((r) => (
          <div className={`sa__row sa__row--${r.s}`} key={r.t}>
            <span className="sa__chip" aria-hidden="true" />
            <span>{r.t}</span>
          </div>
        ))}
      </div>
      <figcaption>A lista már megvan. Csak senki nem kérdezi meg őket.</figcaption>
    </figure>
  );
}

/* 03 — the written answer: the same message, two speeds */
function TextArt() {
  return (
    <figure className="sa sa--text">
      <div className="sa__lanes">
        <div className="sa__lane sa__lane--slow">
          <span className="sa__lane-k">Kézzel</span>
          <span className="sa__bar" aria-hidden="true"><i style={{ width: "100%" }} /></span>
          <span className="sa__lane-v">órák múlva, ha épp jut rá idő</span>
        </div>
        <div className="sa__lane sa__lane--fast">
          <span className="sa__lane-k">Az ügynökkel</span>
          <span className="sa__bar" aria-hidden="true"><i style={{ width: "9%" }} /></span>
          <span className="sa__lane-v">másodpercek, éjjel is</span>
        </div>
      </div>
      <figcaption>Írásban a válaszidő dönt: aki később ír vissza, a második helyre ír.</figcaption>
    </figure>
  );
}

/* 04 — the phone: the hours nobody is at the desk */
function VoiceArt() {
  const HOURS = Array.from({ length: 24 }, (_, i) => i);
  return (
    <figure className="sa sa--voice">
      <div className="sa__day">
        {HOURS.map((h) => (
          <span
            key={h}
            className={`sa__hour${h >= 8 && h < 17 ? " is-open" : ""}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="sa__day-k">
        <span>00</span><span>08</span><span>17</span><span>24</span>
      </div>
      <div className="sa__wave" aria-hidden="true">
        {[7, 13, 20, 28, 18, 24, 32, 22, 14, 26, 34, 20, 12, 22, 16, 9].map((h, i) => (
          <i key={i} style={{ height: `${h}px` }} />
        ))}
      </div>
      <figcaption>A sötét sávban is csörög a telefon. Ott is felveszi.</figcaption>
    </figure>
  );
}

/* 05 — bespoke: the shape of the work, not a feature list */
function CustomArt() {
  const STEPS = ["Felmérés", "Terv", "Megépítés", "Átadás"];
  return (
    <figure className="sa sa--custom">
      <div className="sa__flow">
        {STEPS.map((s, i) => (
          <span className="sa__step" key={s}>
            {s}
            {i < STEPS.length - 1 && <i aria-hidden="true" />}
          </span>
        ))}
      </div>
      <div className="sa__brief">
        <span className="sa__brief-k">A kiindulópont</span>
        <p>Egy ismétlődő folyamat, ami időt vagy pénzt éget.</p>
      </div>
      <figcaption>Fix ár, közösen meghatározott eredmény, és a végén a rendszer az Öné.</figcaption>
    </figure>
  );
}

export default function ServiceArt({ kind }: { kind: Kind }) {
  if (kind === "system") return <SystemArt />;
  if (kind === "revive") return <ReviveArt />;
  if (kind === "text") return <TextArt />;
  if (kind === "voice") return <VoiceArt />;
  return <CustomArt />;
}
