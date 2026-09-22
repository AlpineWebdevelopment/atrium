"use client";

import { useStore } from "../lib/store";
import { hasTier } from "../lib/access";
import { AssistantChat } from "../ui/AssistantChat";
import { Card, Eyebrow, PageHeader } from "../ui/primitives";

export default function Kerdezz() {
  const { tiers, myTier } = useStore();
  const belso = hasTier(tiers, myTier, "belso");
  return (
    <div className="fp-container py-8 md:py-10">
      <PageHeader eyebrow="Asszisztens" title="Kérdezz Pétertől" lead="A válaszok a leckéimből jönnek, és mindig megmutatom, melyikből. Ha valamit nem tudok, megmondom, hol keresd." />
      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="flex min-h-[560px] flex-col">
          <AssistantChat />
        </div>
        <aside className="space-y-4 text-sm text-(--fp-muted-fg)">
          <Card className="p-5">
            <Eyebrow className="mb-2 text-[10px]">Hogyan működik</Eyebrow>
            <p>Az asszisztens a kurzusok átirataiból válaszol, és minden válasz mellé odateszi a forrás leckét. Nem talál ki semmit: ha nincs rá anyag, azt mondja.</p>
          </Card>
          <Card className="p-5">
            <Eyebrow className="mb-2 text-[10px]">Kiemelt kérdés</Eyebrow>
            <p>{belso ? "Belső kör tagként a kérdésedet megjelölheted kiemeltként: ezt Péter személyesen olvassa el a következő kiscsoportos alkalom előtt." : "A Belső kör tagjai kiemelt kérdést is küldhetnek, amit Péter személyesen olvas el a következő kiscsoportos alkalom előtt."}</p>
          </Card>
        </aside>
      </div>
    </div>
  );
}
