import NicheBlogIndex, { nicheBlogMetadata } from "@/components/blog/NicheBlogIndex";

export const metadata = nicheBlogMetadata("kormos");

export default function Page() {
  return <NicheBlogIndex slug="kormos" />;
}
