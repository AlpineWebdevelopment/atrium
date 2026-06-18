import { NextResponse } from "next/server";

export async function POST() {
  const res = await fetch("https://api.retellai.com/v2/create-web-call", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.RETELL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      agent_id: process.env.NEXT_PUBLIC_RETELL_AGENT_ID,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to create call" }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json({ accessToken: data.access_token });
}
