/* Visible source line under a factual block — the honesty rule made visible.
   Renders the cited OpenAI / press links from src/lib/chatgptHirdetes.ts. */
import { SOURCES, type SourceKey } from "@/lib/chatgptHirdetes";

export default function SourceList({ keys, delay, label = "Források" }: { keys: SourceKey[]; delay?: number; label?: string }) {
  return (
    <div className="cg-sources reveal" data-delay={delay}>
      <span className="cg-sources__label">{label}</span>
      <ul className="cg-sources__list">
        {keys.map((k) => (
          <li key={k}>
            <a href={SOURCES[k].url} target="_blank" rel="noopener noreferrer">{SOURCES[k].label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
