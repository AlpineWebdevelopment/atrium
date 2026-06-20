/* ATRIUM-EDIT MEG2 — two points salvaged from the deleted "Miért éri meg" block.
   (The other two — "A méretére szabva" and "A saját rendszerét használja tovább"
   — were dropped as duplicates of the FullSystem scaling line and the
   "A meglévő eszközeit nem kell lecserélnie" line.) */

const POINTS = [
  {
    t: "Mindig elérhető",
    d: "A rendszer a nap minden órájában dolgozik: szabadnap, betegszabadság és kiesés nélkül.",
    ico: <g><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></g>,
  },
  {
    t: "Több időpont, ugyanannyi érdeklődőből",
    d: "Mert egy megkeresés sem vész el útközben.",
    ico: <g><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="M8.5 15l2.5 2.5 4.5-5" /></g>,
  },
];

export default function ValueStrip() {
  return (
    <section className="benr">
      <div className="wrap">
        <div className="benr__grid benr__grid--2 reveal">
          {POINTS.map((p, i) => (
            <div className="benr__item" key={i}>
              <span className="benr__ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{p.ico}</svg>
              </span>
              <b className="benr__t">{p.t}</b>
              <span className="benr__d">{p.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
