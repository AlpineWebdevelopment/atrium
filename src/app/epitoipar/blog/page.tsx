import NicheBlogIndex, { nicheBlogMetadata } from "@/components/blog/NicheBlogIndex";

export const metadata = nicheBlogMetadata("epitoipar");

export default function Page() {
  return <NicheBlogIndex slug="epitoipar" />;
}
