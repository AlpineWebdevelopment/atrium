/* ÚJ — fast "what you get" payoff row near the top (review tag included). */

const BENEFITS = [
  {
    t: "Egyetlen hívás sem vész el",
    d: "Éjjel, hétvégén, csúcsidőben is felveszi — a kihagyott hívás kihagyott bevétel.",
    ico: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />,
  },
  {
    t: "Percekben, nem napokban",
    d: "Minden új érdeklődőt azonnal utánkövet, amíg még forró — itt dől el a foglalás.",
    ico: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  },
  {
    t: "Visszahozott bevétel",
    d: "Az elmaradt időpontokat és a rég nem látott ügyfeleket magától visszaszerzi.",
    ico: <g><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></g>,
  },
  {
    t: "Egy csapat töredékéért",
    d: "A nap minden órájában dolgozik, emberi kiesés nélkül, kiszámítható díjért.",
    ico: <g><rect x="2" y="6" width="20" height="13" rx="2" /><circle cx="12" cy="12.5" r="3" /></g>,
  },
];

export default function Benefits() {
  return (
    <section className="benr" id="elonyok">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow"><span className="newtag">új</span> Miért éri meg</span>
          <h2 className="dash__h">Amit a rendszer Önnek hoz.</h2>
        </div>
        <div className="benr__grid reveal" data-delay="1">
          {BENEFITS.map((b, i) => (
            <div className="benr__item" key={i}>
              <span className="benr__ico">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{b.ico}</svg>
              </span>
              <b className="benr__t">{b.t}</b>
              <span className="benr__d">{b.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
