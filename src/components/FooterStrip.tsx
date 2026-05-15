const CAPABILITIES = [
  { num: "01", text: "Answer the call — 24/7, in HU · EN · DE" },
  { num: "02", text: "Book the appointment — direct into your scheduler" },
  { num: "03", text: "Recover the no-show — in the high-recovery window" },
];

export default function FooterStrip() {
  return (
    <div className="capability-strip">
      {CAPABILITIES.map(({ num, text }) => (
        <div key={num} className="capability">
          <span className="atr-mono-xs capability__num">{num}</span>
          <span className="capability__text">{text}</span>
        </div>
      ))}
    </div>
  );
}
