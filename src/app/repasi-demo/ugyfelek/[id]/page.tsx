import { notFound } from "next/navigation";
import UgyfelReszletek from "../../../_demo/repasi/screens/UgyfelReszletek";
import { UGYFELEK, ugyfel } from "../../../_demo/repasi/lib/data";

/* The data is static, so every client page is prerendered and any other id is
   a 404 rather than a request-time render. */
export const dynamicParams = false;

export function generateStaticParams() {
  return UGYFELEK.map((u) => ({ id: u.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!ugyfel(id)) notFound();
  return <UgyfelReszletek ugyfelId={id} />;
}
