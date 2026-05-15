"use client";

import { useState, useEffect } from "react";

export default function LiveBar() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = now ? String(now.getHours()).padStart(2, "0") : "--";
  const mm = now ? String(now.getMinutes()).padStart(2, "0") : "--";
  const ss = now ? String(now.getSeconds()).padStart(2, "0") : "--";

  return (
    <div className="live-bar">
      <span className="atr-mono-xs">live · budapest · {hh}:{mm}:{ss}</span>
      <span className="live-bar__sep">·</span>
      <span className="atr-mono-xs">312 calls last week · 41 after 8pm</span>
      <span className="live-bar__sep">·</span>
      <span className="atr-mono-xs">hu · en · de</span>
    </div>
  );
}
