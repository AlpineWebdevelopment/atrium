/* Left-column section label for the /direct editorial grid. */
export default function DirectKicker({ n, label }: { n: string; label: string }) {
  return (
    <div className="dr-kicker reveal">
      <span className="dr-kicker__n">{n}</span>
      <span className="dr-kicker__l">{label}</span>
    </div>
  );
}
