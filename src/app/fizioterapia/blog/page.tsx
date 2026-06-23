import NicheBlogIndex, { nicheBlogMetadata } from "@/components/blog/NicheBlogIndex";

export const metadata = nicheBlogMetadata("fizioterapia");

export default function Page() {
  return <NicheBlogIndex slug="fizioterapia" />;
}
