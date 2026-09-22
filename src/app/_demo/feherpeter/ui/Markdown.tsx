import type { ReactNode } from "react";

/* Renders the small markdown subset the lesson texts use: headings, lists,
   blockquote, bold, italic. No dependency, no HTML pass-through. */

function inline(s: string, key: number): ReactNode {
  const parts: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(s))) {
    if (m.index > last) parts.push(s.slice(last, m.index));
    const t = m[0];
    if (t.startsWith("**")) parts.push(<strong key={`${key}-${i++}`}>{t.slice(2, -2)}</strong>);
    else parts.push(<em key={`${key}-${i++}`}>{t.slice(1, -1)}</em>);
    last = m.index + t.length;
  }
  if (last < s.length) parts.push(s.slice(last));
  return parts;
}

export function Markdown({ text, className = "" }: { text: string; className?: string }) {
  const lines = text.replace(/\r/g, "").split("\n");
  const out: ReactNode[] = [];
  let i = 0;
  let k = 0;
  while (i < lines.length) {
    const line = lines[i]!;
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      out.push(<h3 key={k++}>{inline(line.slice(4), k)}</h3>);
      i++;
    } else if (line.startsWith("## ")) {
      out.push(<h2 key={k++}>{inline(line.slice(3), k)}</h2>);
      i++;
    } else if (line.startsWith("> ")) {
      out.push(<blockquote key={k++}>{inline(line.slice(2), k)}</blockquote>);
      i++;
    } else if (/^- /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^- /.test(lines[i]!)) items.push(lines[i++]!.slice(2));
      out.push(
        <ul key={k++}>
          {items.map((it, j) => (
            <li key={j}>{inline(it, k * 100 + j)}</li>
          ))}
        </ul>,
      );
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i]!)) items.push(lines[i++]!.replace(/^\d+\. /, ""));
      out.push(
        <ol key={k++}>
          {items.map((it, j) => (
            <li key={j}>{inline(it, k * 100 + j)}</li>
          ))}
        </ol>,
      );
    } else {
      const para: string[] = [];
      while (i < lines.length && lines[i]!.trim() && !/^(#{2,3} |> |- |\d+\. )/.test(lines[i]!)) para.push(lines[i++]!);
      out.push(<p key={k++}>{inline(para.join(" "), k)}</p>);
    }
  }
  return <div className={`fp-prose ${className}`}>{out}</div>;
}
