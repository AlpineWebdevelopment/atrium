import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Server-side booking proxy. The browser posts here instead of hitting the CRM
// directly. We forward the booking to the CRM and ONLY send confirmation emails
// when the CRM accepts a real booking. That means this endpoint is no more
// abusable than the CRM's own /api/book (slot availability, 409s, etc.) — there
// is no standalone "send me an email" surface to spam.
//
// Required env vars (see .env.local):
//   RESEND_API_KEY          — Resend API key (re_...)
//   EMAIL_BOOKING_FROM      — sender on a verified Resend domain, e.g. "Atrium <idopont@atriumscaling.com>"
//   EMAIL_BOOKING_NOTIFY_TO — internal recipient for new-booking alerts
//   EMAIL_REPLY_TO          — (optional) reply-to for the customer mail; defaults to the notify address
//   NEXT_PUBLIC_CRM_URL     — CRM base URL (optional; falls back to the prod CRM)

// The CRM is the dashboard's Atrium CRM, not the old standalone deployment, and
// its booking route lives under /api/atrium. A booking therefore lands as a lead
// in the same CRM the pipeline is worked in, rather than in a second system it
// had to be copied out of by hand.
const CRM_URL =
  process.env.NEXT_PUBLIC_CRM_URL ?? "https://granturismo.vercel.app";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function sendBookingEmails(p: {
  name: string;
  email: string;
  phone?: string;
  company_name?: string | null;
  role?: string | null;
  source_niche?: string;
  slotLabel: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_BOOKING_FROM;
  const notifyTo = process.env.EMAIL_BOOKING_NOTIFY_TO;
  const replyTo = process.env.EMAIL_REPLY_TO ?? notifyTo;
  if (!apiKey || !from || !notifyTo) return; // not configured — skip silently

  const resend = new Resend(apiKey);

  const customer = resend.emails.send({
    from,
    to: p.email,
    replyTo,
    subject: "Időpontfoglalás megerősítése — Atrium",
    html: `
      <div style="font-family:system-ui,Arial,sans-serif;font-size:15px;line-height:1.6;color:#1a1a1a">
        <p>Kedves ${esc(p.name)}!</p>
        <p>Köszönjük a foglalását. Az időpontját rögzítettük:</p>
        <p style="font-size:17px;font-weight:600;margin:16px 0">${esc(p.slotLabel)}</p>
        <p>30 perc, kötelezettség nélküli megbeszélés. </p>
        <p style="margin-top:24px">Üdvözlettel,<br/>az Atrium csapata</p>
      </div>
    `,
  });

  const rows: [string, string][] = [
    ["Név", p.name],
    ["E-mail", p.email],
    ["Telefon", p.phone?.trim() || "—"],
    ["Cég", p.company_name?.trim() || "—"],
    ["Beosztás", p.role?.trim() || "—"],
    ["Terület", p.source_niche || "—"],
    ["Időpont", p.slotLabel],
  ];
  const internal = resend.emails.send({
    from,
    to: notifyTo,
    replyTo: p.email,
    subject: `Új foglalás — ${p.name} (${p.slotLabel})`,
    html: `
      <div style="font-family:system-ui,Arial,sans-serif;font-size:14px;line-height:1.6;color:#1a1a1a">
        <h2 style="margin:0 0 12px">Új időpontfoglalás</h2>
        <table style="border-collapse:collapse">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:4px 12px 4px 0;color:#666">${esc(k)}</td><td style="padding:4px 0;font-weight:600">${esc(v)}</td></tr>`
            )
            .join("")}
        </table>
      </div>
    `,
  });

  // Await so the serverless function doesn't freeze before the mail goes out.
  await Promise.allSettled([customer, internal]);
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // `slot_label` is for the email only — strip it before forwarding to the CRM.
  const { slot_label, ...bookingPayload } = body as {
    slot_label?: string;
    [k: string]: unknown;
  };

  // Forward the booking to the CRM (authoritative: validation, availability, 409).
  let crmRes: Response;
  try {
    crmRes = await fetch(`${CRM_URL}/api/atrium/book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingPayload),
    });
  } catch {
    return NextResponse.json({ error: "Booking service unavailable" }, { status: 502 });
  }

  // Slot taken / validation errors — pass the CRM's status straight back so the
  // existing client handling (e.g. 409) still works. No email on a failed booking.
  if (!crmRes.ok) {
    return new NextResponse(await crmRes.text(), {
      status: crmRes.status,
      headers: { "Content-Type": crmRes.headers.get("Content-Type") ?? "application/json" },
    });
  }

  // Booking confirmed — now (and only now) send the emails.
  const name = typeof bookingPayload.name === "string" ? bookingPayload.name.trim() : "";
  const email = typeof bookingPayload.email === "string" ? bookingPayload.email.trim() : "";
  if (name && email && slot_label?.trim()) {
    await sendBookingEmails({
      name,
      email,
      phone: bookingPayload.phone as string | undefined,
      company_name: bookingPayload.company_name as string | null | undefined,
      role: bookingPayload.role as string | null | undefined,
      source_niche: bookingPayload.source_niche as string | undefined,
      slotLabel: slot_label.trim(),
    });
  }

  return NextResponse.json({ ok: true });
}
