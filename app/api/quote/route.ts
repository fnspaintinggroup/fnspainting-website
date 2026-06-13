import { NextResponse } from "next/server";
import { businessDetails } from "@/lib/business";

type QuoteRequestPayload = {
  name?: string;
  email?: string;
  phone?: string;
  suburb?: string;
  service?: string;
  details?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const payload = (await request.json()) as QuoteRequestPayload;
  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const suburb = clean(payload.suburb);
  const service = clean(payload.service);
  const details = clean(payload.details);

  if (!name || !email || !details) {
    return NextResponse.json(
      { message: "Please enter your name, email, and project details." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.QUOTE_FROM_EMAIL || "F&S Painting Website <onboarding@resend.dev>";
  const toEmail = process.env.QUOTE_TO_EMAIL || businessDetails.email;

  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          "Email sending is not configured yet. Please call or email F&S Painting directly.",
      },
      { status: 503 },
    );
  }

  const text = [
    "New free quote request from the F&S Painting website.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Suburb: ${suburb || "Not provided"}`,
    `Service: ${service || "Not selected"}`,
    "",
    "Project details:",
    details,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Free painting quote request from ${name}`,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "The quote request could not be sent. Please try again or contact us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Your quote request has been sent." });
}
