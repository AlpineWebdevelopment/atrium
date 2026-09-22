import { notFound } from "next/navigation";
import Kurzus from "../../../_demo/feherpeter/screens/Kurzus";
import { COURSES } from "../../../_demo/feherpeter/data/courses";

/* Seed courses are prerendered; courses created in the admin panel live only
   in the browser, so those ids resolve client-side (dynamicParams stays on). */
export function generateStaticParams() {
  return COURSES.map((c) => ({ courseSlug: c.slug }));
}

export default async function Page({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params;
  if (!courseSlug) notFound();
  return <Kurzus courseSlug={courseSlug} />;
}
