import Lecke from "../../../../_demo/feherpeter/screens/Lecke";
import { COURSES } from "../../../../_demo/feherpeter/data/courses";

export function generateStaticParams() {
  return COURSES.flatMap((c) => c.modules.flatMap((m) => m.lessons.map((l) => ({ courseSlug: c.slug, lessonSlug: l.slug }))));
}

export default async function Page({ params }: { params: Promise<{ courseSlug: string; lessonSlug: string }> }) {
  const { courseSlug, lessonSlug } = await params;
  return <Lecke courseSlug={courseSlug} lessonSlug={lessonSlug} />;
}
