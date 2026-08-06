import { notFound } from "next/navigation";
import Portal from "../../../_demo/repasi/screens/Portal";
import { UGYFELEK, ugyfel } from "../../../_demo/repasi/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return UGYFELEK.map((u) => ({ id: u.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!ugyfel(id)) notFound();
  return <Portal ugyfelId={id} />;
}
