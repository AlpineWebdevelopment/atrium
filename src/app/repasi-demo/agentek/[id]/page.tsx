import { notFound } from "next/navigation";
import AgentReszletek from "../../../_demo/repasi/screens/AgentReszletek";
import { AGENTEK, agent } from "../../../_demo/repasi/lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return AGENTEK.map((a) => ({ id: a.id }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!agent(id)) notFound();
  return <AgentReszletek agentId={id} />;
}
