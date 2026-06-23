import NicheBlogIndex, { nicheBlogMetadata } from "@/components/blog/NicheBlogIndex";

export const metadata = nicheBlogMetadata("allatorvos");

export default function Page() {
  return <NicheBlogIndex slug="allatorvos" />;
}
