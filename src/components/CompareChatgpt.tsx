/* "Ügyfelek, nem marketing" — campaign management versus acquisition
   system. Red cross on the left, green check on the right; our column is
   tinted green. */

const ROWS: [string, string, string][] = [
  ["Amit mér",                     "Kattintás, megjelenés, kattintási ár.",                        "Érdeklődő, foglalás, megjelent ügyfél, egy ügyfél költsége."],
  ["Ahol a kattintás landol",      "Az Ön meglévő weboldalán, ahol tíz dolog közül választhat.",    "Egy erre a kérdésre írt céloldalon, egy ajánlattal, egy gombbal."],
  ["Ami a kattintás után történik", "Űrlap érkezik, valaki majd visszahívja.",                     "A rendszer percek alatt visszahív, kvalifikál, időpontot foglal."],
  ["Az ajánlat",                   "Egy szöveg, egy variáció.",                                    "Három koncepció, és az marad, amelyikre ügyfél jön."],
  ["Az Ön szakmájában",            "Ahány ügyfél, annyi kampány — egymás ellen.",                   "Egy területen, egy régióban egy céggel dolgozunk."],
  ["A fiók és az oldal",           "Gyakran a kezelő cégé.",                                       "Az Öné. A költést az OpenAI-nak fizeti, nem nekünk."],
  ["Amit a riportban lát",         "Grafikonok a kattintásokról.",                                 "Hány ügyfél jött, mennyiért, és mit változtatunk jövő hónapban."],
];

const X = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>;
const CHECK = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>;

export default function CompareChatgpt() {
  return (
    <section className="wpr cg-compare" id="ugyfelek">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow cg-eyebrow-txt" style={{ color: "var(--viz-green)" }}>Ügyfelek, nem marketing</span>
          <h2 className="dash__h">Egy hirdetéskezelő kattintást ad át. Mi ügyfelet.</h2>
          <p className="dash__p">
            Ugyanazon a felületen, ugyanabból a büdzséből két különböző dolog jöhet ki. A különbség abban van, mit mérünk, hol landol a kattintás, és ki hívja vissza az embert.
          </p>
        </div>

        <div className="cg-table reveal" data-delay="1" role="table">
          <div className="cg-table__head" role="row">
            <span role="columnheader" />
            <span role="columnheader" className="cg-table__theirs"><i className="cg-mark cg-mark--x">{X}</i>Hirdetéskezelés</span>
            <span role="columnheader" className="cg-table__ours"><i className="cg-mark cg-mark--ok">{CHECK}</i>Ügyfélszerző rendszer</span>
          </div>
          {ROWS.map(([k, a, b]) => (
            <div className="cg-table__row" role="row" key={k}>
              <span className="cg-table__k" role="rowheader">{k}</span>
              <span className="cg-table__a" role="cell"><i className="cg-mark cg-mark--x">{X}</i><span>{a}</span></span>
              <span className="cg-table__b" role="cell"><i className="cg-mark cg-mark--ok">{CHECK}</i><span>{b}</span></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
