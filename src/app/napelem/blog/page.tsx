import NicheBlogIndex, { nicheBlogMetadata } from "@/components/blog/NicheBlogIndex";

export const metadata = nicheBlogMetadata("napelem");

export default function Page() {
  return <NicheBlogIndex slug="napelem" />;
}
