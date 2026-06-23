import NicheBlogIndex, { nicheBlogMetadata } from "@/components/blog/NicheBlogIndex";

export const metadata = nicheBlogMetadata("klima");

export default function Page() {
  return <NicheBlogIndex slug="klima" />;
}
