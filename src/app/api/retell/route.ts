import { NextResponse } from "next/server";

// Creates a Retell web call and returns the access token for the browser SDK.
export async function POST() {
  const apiKey = process.env.RETELL_API_KEY;
  const agentId = process.env.NEXT_PUBLIC_RETELL_AGENT_ID;

  if (!apiKey || !agentId) {
    return NextResponse.json(
      { error: "Missing RETELL_API_KEY or NEXT_PUBLIC_RETELL_AGENT_ID" },
      { status: 500 }
    );
  }

  const res = await fetch("https://api.retellai.com/v2/create-web-call", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ agent_id: agentId }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to create call" }, { status: 500 });
  }

  const data = await res.json();
  return NextResponse.json({ accessToken: data.access_token });
}
