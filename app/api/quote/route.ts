import { intakeEnabled } from "@/lib/private-quote-store";
import { NextResponse } from "next/server";
import { businessDetails } from "@/lib/business";
import { resolveQuoteReference } from "@/lib/quote-reference";
import { MAX_QUOTE_REQUEST_BYTES } from "@/lib/quote-uploads";
import { validateQuotePhotos } from "@/lib/validate-quote-photos";

export const runtime = "nodejs";

function clean(value: unknown, maximum = 500) {
  return typeof value === "string" ? value.trim().slice(0, maximum) : "";
}

function cleanApiKey(value: unknown) {
  return clean(value).replace(/^Bearer\s+/i, "").replace(/^["']|["']$/g, "").replace(/\s/g, "");
}

export async function POST(request: Request) {
  if (intakeEnabled()) return NextResponse.json({message:"Please refresh this page to use private photo intake."},{status:409});
  if (Number(request.headers.get("content-length")) > MAX_QUOTE_REQUEST_BYTES) {
    return NextResponse.json({ message: "Please attach fewer photos or email the originals to us." }, { status: 413 });
  }
  let payload: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (Buffer.byteLength(raw, "utf8") > MAX_QUOTE_REQUEST_BYTES) {
      return NextResponse.json({ message: "Please attach fewer photos or email the originals to us." }, { status: 413 });
    }
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid request");
    payload = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "The request could not be read. Please try again." }, { status: 400 });
  }
  const name = clean(payload.name, 120).replace(/[\r\n]/g, " ");
  const email = clean(payload.email, 254);
  const phone = clean(payload.phone, 50);
  const suburb = clean(payload.suburb, 120);
  const service = clean(payload.service, 120);
  const leadSource = clean(payload.leadSource, 120);
  const details = clean(payload.details, 15000);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !details) {
    return NextResponse.json({ message: "Please enter your name, a valid email, and project details." }, { status: 400 });
  }
  let attachments: ReturnType<typeof validateQuotePhotos>;
  try {
    attachments = validateQuotePhotos(payload.photos);
  } catch (error) {
    return NextResponse.json({ message: error instanceof Error ? error.message : "Please check your photos." }, { status: 400 });
  }
  const referenceKind = clean(payload.referenceKind, 30);
  const referenceSlug = clean(payload.referenceSlug, 120);
  const reference = referenceKind || referenceSlug ? await resolveQuoteReference(referenceKind, referenceSlug) : null;
  if ((referenceKind || referenceSlug) && !reference) {
    return NextResponse.json({ message: "The example reference is unavailable. Please remove it and try again." }, { status: 400 });
  }
  const apiKey = cleanApiKey(process.env.RESEND_API_KEY);
  const fromEmail = clean(process.env.QUOTE_FROM_EMAIL);
  const toEmail = clean(process.env.QUOTE_TO_EMAIL) || businessDetails.email;
  if (!apiKey || !fromEmail) {
    return NextResponse.json({ message: "We could not send the request automatically. Please use the email option below or call us." }, { status: 503 });
  }
  const text = [
    "New free quote request from the F&S Painting website.", "",
    `Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "Not provided"}`,
    `Property suburb: ${suburb || "Not provided"}`, `Service: ${service || "Not selected"}`,
    `How they found us: ${leadSource || "Not selected"}`, `Attached photos: ${attachments.length}`,
    ...(reference ? ["", `Example viewed: ${reference.title}`, `Example location: ${reference.location}`,
      `Example link: https://www.fnspainting.com.au${reference.path}`, "The example is a reference, not the customer's property address."] : []),
    "", "Project details:", details,
  ].join("\n");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: fromEmail, to: [toEmail], reply_to: email,
        subject: `Free painting quote request from ${name}`, text,
        ...(attachments.length ? { attachments } : {}),
      }),
    });
    if (!response.ok) {
      console.error("Quote email provider error", { status: response.status });
      return NextResponse.json({ message: "The request could not be sent. Please try again or email us, attaching your photos manually." }, { status: 502 });
    }
  } catch {
    console.error("Quote email network error");
    return NextResponse.json({ message: "The request could not be sent. Please try again or email us, attaching your photos manually." }, { status: 502 });
  }
  return NextResponse.json({ message: attachments.length
    ? `Your quote request and ${attachments.length} photo${attachments.length === 1 ? "" : "s"} have been sent.`
    : "Your quote request has been sent.", photoCount: attachments.length });
}
