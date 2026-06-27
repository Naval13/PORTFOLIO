import { NextResponse } from "next/server";
import { contact } from "@/lib/data";

export const runtime = "edge";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Naval Aggarwal Portfolio <onboarding@resend.dev>",
      to: contact.email,
      reply_to: email,
      subject: `New enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    return NextResponse.json({ error: "Failed to send", detail }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
