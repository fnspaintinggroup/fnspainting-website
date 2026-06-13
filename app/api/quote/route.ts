import { NextResponse } from "next/server";
import { businessDetails } from "@/lib/business";

export const runtime = "nodejs";

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

  const apiKey = clean(process.env.RESEND_API_KEY).replace(/^Bearer\s+/i, "");
  const fromEmail = clean(process.env.QUOTE_FROM_EMAIL) || "F&S Painting Website <onboarding@resend.dev>";
  const toEmail = clean(process.env.QUOTE_TO_EMAIL) || businessDetails.email;

  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          "Email sending is not configured yet. Please use the email link below or contact F&S Painting directly.",
        setupHint: "Missing RESEND_API_KEY in Vercel Environment Variables.",
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

  let response: Response;

  try {
    response = await fetch("https://api.resend.com/emails", {
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
  } catch (error) {
    console.error("Quote email network error", error);

    return NextResponse.json(
      {
        message:
          "The automatic email sender is not available right now. Please use the email link below or contact us directly.",
        setupHint:
          "The Resend request failed before receiving a response. Check that RESEND_API_KEY has no quotes, no line breaks, and does not include the word Bearer.",
      },
      { status: 502 },
    );
  }

  if (!response.ok) {
    const providerError = await response.text();
    console.error("Quote email provider error", {
      status: response.status,
      providerError,
    });

    return NextResponse.json(
      {
        message:
          "The quote request could not be sent automatically. Please use the email link below while email sending is being configured.",
        setupHint:
          "Resend rejected the request. Check RESEND_API_KEY and make sure QUOTE_FROM_EMAIL uses a verified sender/domain in Resend.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Your quote request has been sent." });
}
