import NicheBlogIndex, { nicheBlogMetadata } from "@/components/blog/NicheBlogIndex";

export const metadata = nicheBlogMetadata("szepsegszalon");

export default function Page() {
  return <NicheBlogIndex slug="szepsegszalon" />;
}
