import NicheBlogIndex, { nicheBlogMetadata } from "@/components/blog/NicheBlogIndex";

export const metadata = nicheBlogMetadata("chatgpt-hirdetes");

export default function Page() {
  return <NicheBlogIndex slug="chatgpt-hirdetes" />;
}
