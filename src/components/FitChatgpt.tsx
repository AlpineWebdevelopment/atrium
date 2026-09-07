/* "Kinek való, és kinek nem" — the honest qualifier. The exclusion follows
   OpenAI's current ad policy (health, finance, legal outside the US), cited.
   Plus our own limit: one company per trade and region. */
import SourceList from "@/components/SourceList";

export default function FitChatgpt() {
  return (
    <section className="wpr cg-fit" id="kinek">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Kinek való, és kinek nem</span>
          <h2 className="dash__h">Nem minden cégnek, és egy szakmában nem mindenkinek.</h2>
        </div>

        <div className="cg-fit__grid reveal" data-delay="1">
          <div className="cg-fit__col">
            <span className="cg-fit__h">Kinek való</span>
            <p className="cg-fit__p">
              Szolgáltató cégeknek, amelyek az OpenAI jelenlegi szabályai szerint hirdethetnek a ChatGPT-ben — helyi szolgáltatások, kivitelezés és szakipar, szépségipar, oktatás, digitális termékek — és amelyeknek van kapacitásuk új ügyfeleket fogadni.
            </p>
            <p className="cg-fit__p">
              Annak, aki elsőként akar ott lenni a saját szakmájában, amíg a felület üres. Egy területen, egy régióban egy céggel dolgozunk, hogy ne saját maga ellen hirdessen.
            </p>
          </div>
          <div className="cg-fit__col cg-fit__col--no">
            <span className="cg-fit__h">Kinek nem</span>
            <p className="cg-fit__p">
              Egészségügyi, pénzügyi és jogi szolgáltatóknak egyelőre nem — az OpenAI ezekben a kategóriákban az Egyesült Államokon kívül jelenleg nem enged hirdetést. Ha Ön ilyen területen dolgozik, az ügyfélszerző rendszer többi része ettől még működik, de ChatGPT-hirdetés nélkül.
            </p>
            <p className="cg-fit__p">
              Annak sem, aki gyors eredményt vár mérés nélkül. Magyar számok a ChatGPT-hirdetésről ma még nincsenek; az első hetek mérésre mennek, és ezt előre megmondjuk.
            </p>
          </div>
        </div>

        <SourceList keys={["policies"]} delay={2} label="Forrás" />
      </div>
    </section>
  );
}
