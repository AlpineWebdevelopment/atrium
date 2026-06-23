import NicheBlogIndex, { nicheBlogMetadata } from "@/components/blog/NicheBlogIndex";

export const metadata = nicheBlogMetadata("szepsegipar");

export default function Page() {
  return <NicheBlogIndex slug="szepsegipar" />;
}
