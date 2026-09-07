/* "Kinek való, és kinek nem" — green check list versus red cross list. */

const YES = [
  "Szolgáltató cégeknek, amelyek az OpenAI jelenlegi szabályai szerint hirdethetnek: helyi szolgáltatások, kivitelezés és szakipar, szépségipar, oktatás, digitális termékek.",
  "Akinek van kapacitása új ügyfeleket fogadni a következő hetekben.",
  "Aki elsőként akar ott lenni a saját szakmájában, amíg a felület üres.",
  "Aki azt akarja látni, hány ügyfél jött, nem azt, hány kattintás.",
];

const NO = [
  "Egészségügyi, pénzügyi és jogi szolgáltatóknak, az OpenAI ezekben a kategóriákban az Egyesült Államokon kívül jelenleg nem enged hirdetést.",
  "Akinek a szakmájában és régiójában már dolgozunk valakivel. Egy területen egy céget viszünk.",
  "Aki gyors eredményt vár mérés nélkül. Magyar számok a ChatGPT-hirdetésről ma még nincsenek; az első hetek mérésre mennek.",
  "Aki hirdetéskezelést keres, és nem akar hozzányúlni ahhoz, mi történik a kattintás után.",
];

const X = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>;
const CHECK = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>;

export default function FitChatgpt() {
  return (
    <section className="wpr cg-fit" id="kinek">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow cg-eyebrow-txt">Kinek való, és kinek nem</span>
          <h2 className="dash__h">Nem minden cégnek, és egy szakmában nem mindenkinek.</h2>
        </div>

        <div className="cg-fit__grid reveal" data-delay="1">
          <div className="cg-fit__col cg-fit__col--yes">
            <span className="cg-fit__h"><i className="cg-mark cg-mark--ok">{CHECK}</i>Kinek való</span>
            <ul>
              {YES.map((t) => <li key={t}><i className="cg-mark cg-mark--ok">{CHECK}</i><span>{t}</span></li>)}
            </ul>
          </div>
          <div className="cg-fit__col cg-fit__col--no">
            <span className="cg-fit__h"><i className="cg-mark cg-mark--x">{X}</i>Kinek nem</span>
            <ul>
              {NO.map((t) => <li key={t}><i className="cg-mark cg-mark--x">{X}</i><span>{t}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
