/* "Kinek való, és kinek nem" — the honest qualifier. The exclusion follows
   OpenAI's current ad policy (health, finance, legal outside the US), cited.
   No niche menu: the allowed list is OpenAI's category focus, not a list of
   what Atrium serves. */
import SourceList from "@/components/SourceList";

export default function FitChatgpt() {
  return (
    <section className="wpr cg-fit" id="kinek">
      <div className="wrap">
        <div className="dash__intro reveal">
          <span className="dash__eyebrow">Kinek való, és kinek nem</span>
          <h2 className="dash__h">Nem minden cég hirdethet ma a ChatGPT-ben. Ez nem rajtunk múlik.</h2>
        </div>

        <div className="cg-fit__grid reveal" data-delay="1">
          <div className="cg-fit__col">
            <span className="cg-fit__h">Kinek való</span>
            <p className="cg-fit__p">
              Szolgáltató cégeknek, amelyek az OpenAI jelenlegi szabályai szerint hirdethetnek a ChatGPT-ben — helyi szolgáltatások, kivitelezés és szakipar, szépségipar, oktatás, digitális termékek — és amelyeknek ma is érkeznek érdeklődők, csak nem mindegyikből lesz ügyfél.
            </p>
            <p className="cg-fit__p">
              A rendszer a meglévő érdeklődőket fordítja ügyféllé. A hirdetés az Ön költése, az érdeklődő az Ön érdeklődője; a rendszer arról gondoskodik, hogy egyik se vesszen el a kattintás után.
            </p>
          </div>
          <div className="cg-fit__col cg-fit__col--no">
            <span className="cg-fit__h">Kinek nem</span>
            <p className="cg-fit__p">
              Egészségügyi, pénzügyi és jogi szolgáltatóknak egyelőre nem — az OpenAI ezekben a kategóriákban az Egyesült Államokon kívül jelenleg nem enged hirdetést. Ha Ön ilyen területen dolgozik, a rendszer többi része ettől még működik, de ezen az oldalon nem erről van szó.
            </p>
            <p className="cg-fit__p">
              Annak sem, akinek az egyetlen problémája, hogy kevés az érdeklődő. A rendszer az elveszett érdeklődőt hozza vissza; új forgalmat a hirdetés hoz, és azt Ön fizeti az OpenAI-nak.
            </p>
          </div>
        </div>

        <SourceList keys={["policies"]} delay={2} label="Forrás" />
      </div>
    </section>
  );
}
