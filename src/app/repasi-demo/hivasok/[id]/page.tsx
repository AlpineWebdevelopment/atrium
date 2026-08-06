import { notFound } from "next/navigation";
import HivasReszletek from "../../../_demo/repasi/screens/HivasReszletek";
import { HIVASOK, hivas } from "../../../_demo/repasi/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return HIVASOK.map((h) => ({ id: h.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!hivas(id)) notFound();
  return <HivasReszletek hivasId={id} />;
}
