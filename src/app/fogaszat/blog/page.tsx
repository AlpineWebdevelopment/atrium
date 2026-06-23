import NicheBlogIndex, { nicheBlogMetadata } from "@/components/blog/NicheBlogIndex";

export const metadata = nicheBlogMetadata("fogaszat");

export default function Page() {
  return <NicheBlogIndex slug="fogaszat" />;
}
