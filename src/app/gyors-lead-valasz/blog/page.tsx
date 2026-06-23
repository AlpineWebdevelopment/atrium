import NicheBlogIndex, { nicheBlogMetadata } from "@/components/blog/NicheBlogIndex";

export const metadata = nicheBlogMetadata("gyors-lead-valasz");

export default function Page() {
  return <NicheBlogIndex slug="gyors-lead-valasz" />;
}
