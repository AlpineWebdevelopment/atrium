/* The closing CTA panel on /chatgpt-hirdetes. The offer itself is stated in
   the hero, so this one only has to ask for the meeting. */

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
};

export default function CtaPanelChatgpt({ id, eyebrow, title, body }: Props) {
  return (
    <section className="final-cta cg-final" id={id}>
      <div className="wrap">
        <div className="final-cta__panel cg-final__panel reveal">
          <span className="dash__eyebrow cg-eyebrow-txt">{eyebrow}</span>
          <h2 className="final-cta__h">{title}</h2>
          <p className="final-cta__p">{body}</p>
          <a className="btn btn--lg final-cta__btn cg-btn" href="#kapcsolat">Foglaljon időpontot.</a>
          <span className="final-cta__note">Nincs kötelezettség · nincs sürgetés · az Atrium nem áll kapcsolatban az OpenAI-jal</span>
        </div>
      </div>
    </section>
  );
}
