/* The CTA panel, used twice on /chatgpt-hirdetes: once directly under
   the hero as the early conversion point, and once at the end as the close.
   Same shape, different copy, so the second one does not read as a repeat. */

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  variant?: "top" | "end";
};

export default function CtaPanelChatgpt({ id, eyebrow, title, body, variant = "end" }: Props) {
  return (
    <section className={"final-cta cg-final" + (variant === "top" ? " cg-final--top" : "")} id={id}>
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
