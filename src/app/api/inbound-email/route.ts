import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Resend's inbound webhook. When an email lands on the receiving domain, Resend
// POSTs an `email.received` event here. That event only carries metadata (no
// body), so we verify the Svix signature, then fetch the full message and
// re-send it to the Gmail inbox with `reply_to` pointing back at the original
// sender — i.e. a forwarding relay.
//
// Required env vars (see .env.local):
//   RESEND_API_KEY        — Resend API key (re_...)
//   RESEND_WEBHOOK_SECRET — webhook signing secret (whsec_...)
//   EMAIL_FORWARD_FROM    — sender on a verified Resend domain, e.g. "Atrium <forward@yourdomain.com>"
//   EMAIL_FORWARD_TO      — the Gmail address to forward to

type InboundEvent = {
  type: string;
  data?: { email_id?: string };
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;
  const forwardFrom = process.env.EMAIL_FORWARD_FROM;
  const forwardTo = process.env.EMAIL_FORWARD_TO;

  if (!apiKey || !webhookSecret || !forwardFrom || !forwardTo) {
    return NextResponse.json(
      { error: "Email forwarding is not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  // Verification needs the raw, unparsed body — read it as text.
  const payload = await req.text();

  let event: InboundEvent;
  try {
    event = (await resend.webhooks.verify({
      payload,
      headers: {
        id: req.headers.get("svix-id") ?? "",
        timestamp: req.headers.get("svix-timestamp") ?? "",
        signature: req.headers.get("svix-signature") ?? "",
      },
      webhookSecret,
    })) as InboundEvent;
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  // Ignore any non-inbound events (sent/delivered/bounced/etc.).
  if (event.type !== "email.received") {
    return NextResponse.json({ ok: true, ignored: event.type });
  }

  const emailId = event.data?.email_id;
  if (!emailId) {
    return NextResponse.json({ error: "Missing email_id" }, { status: 400 });
  }

  // Webhook is metadata-only; pull the full message body.
  const received = await resend.emails.receiving.get(emailId);
  if (received.error || !received.data) {
    return NextResponse.json(
      { error: "Could not retrieve received email" },
      { status: 502 }
    );
  }

  const email = received.data;
  const originalFrom = Array.isArray(email.from) ? email.from[0] : email.from;
  const attachmentNote =
    email.attachments && email.attachments.length > 0
      ? `\n\n[${email.attachments.length} attachment(s) not forwarded: ${email.attachments
          .map((a) => a.filename)
          .join(", ")}]`
      : "";

  // Re-send to the Gmail inbox. `from` must be on a verified Resend domain;
  // `reply_to` is the real sender so replies route back to them.
  const sent = await resend.emails.send({
    from: forwardFrom,
    to: forwardTo,
    replyTo: originalFrom,
    subject: email.subject ?? "(no subject)",
    ...(email.html
      ? { html: email.html }
      : { text: (email.text ?? "") + attachmentNote }),
  });

  if (sent.error) {
    return NextResponse.json({ error: "Failed to forward email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true, forwarded: sent.data?.id });
}
