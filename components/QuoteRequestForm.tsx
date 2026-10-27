"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import { businessDetails } from "@/lib/business";

import type { QuoteReference } from "@/lib/quote-reference";
import { prepareQuotePhoto } from "@/lib/prepare-quote-photos";
import { MAX_QUOTE_PHOTOS, MAX_QUOTE_PHOTO_BYTES, type PreparedQuotePhoto } from "@/lib/quote-uploads";

const services = [
  "Timber window painting",
  "Residential painting",
  "Interior painting",
  "Exterior painting",
  "Strata painting",
  "Commercial painting",
  "Ceiling repainting",
  "Mould-damaged ceiling restoration",
];

function trackQuoteFormSuccess(service: string, suburb: string, leadSource: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "quote_form_success", {
    form_id: "quote-form",
    form_name: "free_quote_request",
    service,
    suburb,
    lead_source: leadSource || "not_selected",
    page_path: window.location.pathname,
  });
}

function trackQuoteEmailFallback(service: string, suburb: string, leadSource: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "quote_email_fallback", {
    form_id: "quote-form",
    form_name: "free_quote_request",
    service,
    suburb,
    lead_source: leadSource || "not_selected",
    page_path: window.location.pathname,
  });
}

export function QuoteRequestForm({ initialReference = null }: { initialReference?: QuoteReference | null }) {
  const [reference, setReference] = useState(initialReference);
  const [photos, setPhotos] = useState<PreparedQuotePhoto[]>([]);
  const [preparing, setPreparing] = useState(false);
  const [photoError, setPhotoError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [suburb, setSuburb] = useState("");
  const [service, setService] = useState(initialReference?.service || "");
  const [leadSource, setLeadSource] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  const fallbackEmailHref = useMemo(() => {
    const body = [
      "Hi F&S Painting,",
      "",
      "I would like a free painting quote.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Suburb: ${suburb}`,
      `Service needed: ${service}`,
      `How they found us: ${leadSource}`,
      ...(reference ? [`Example viewed: ${reference.title}`, `Example link: https://www.fnspainting.com.au${reference.path}`] : []),
      "Project details:",
      details,
      "",
    ].join("\n");

    return `mailto:${businessDetails.email}?subject=${encodeURIComponent(
      "Free painting quote request",
    )}&body=${encodeURIComponent(body)}`;
  }, [details, email, leadSource, name, phone, service, suburb, reference]);

  async function handlePhotos(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files || []);
    event.target.value = "";
    setPhotoError("");
    if (photos.length + selected.length > MAX_QUOTE_PHOTOS) { setPhotoError("Please select up to 5 photos in total."); return; }
    setPreparing(true);
    try {
      const added = await Promise.all(selected.map(prepareQuotePhoto));
      const next = [...photos, ...added];
      if (next.reduce((sum, photo) => sum + photo.bytes, 0) > MAX_QUOTE_PHOTO_BYTES) throw new Error("These photos are too large together. Please choose fewer photos, or email the originals to us.");
      setPhotos(next);
    } catch (error) { setPhotoError(error instanceof Error ? error.message : "Unable to read the photos. Please try JPG or PNG."); }
    finally { setPreparing(false); }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (preparing || status === "sending") return;
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          suburb,
          service,
          leadSource,
          details,
          photos: photos.map(({ filename, content }) => ({ filename, content })),
          referenceKind: reference?.kind,
          referenceSlug: reference?.slug,
        }),
      });
      const data = (await response.json()) as { message?: string; setupHint?: string };

      if (!response.ok) {
        throw new Error(
          [data.message || "Unable to send the quote request.", data.setupHint]
            .filter(Boolean)
            .join(" "),
        );
      }

      trackQuoteFormSuccess(service, suburb, leadSource);
      setStatus("sent");
      setMessage(data.message || "Your quote request has been sent.");
      setName("");
      setEmail("");
      setPhone("");
      setSuburb("");
      setService("");
      setLeadSource("");
      setDetails("");
      setPhotos([]);
      setPhotoError("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send the quote request.");
      trackQuoteEmailFallback(service, suburb, leadSource);

    }
  }

  return (
    <form
      id="quote-form"
      className="min-w-0 scroll-mt-28 rounded-md border border-ink/10 bg-white p-6 shadow-sm sm:p-8"
      onSubmit={handleSubmit}
    >
      {reference ? <div className="mb-6 rounded-md bg-gumleaf p-4 text-sm">
        <p className="font-semibold">Example you viewed</p>
        <a className="underline" href={reference.path}>{reference.title}</a>
        <p>{reference.location} — reference only. Enter your own property suburb below.</p>
        <button type="button" className="mt-2 underline" onClick={() => setReference(null)}>Remove example</button>
      </div> : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Name
          <input
            id="quote-name"
            className="scroll-mt-32 rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus"
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            required
            value={name}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email
          <input
            className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
            type="email"
            value={email}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Phone
          <input
            className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus"
            onChange={(event) => setPhone(event.target.value)}
            placeholder="0452 209 113"
            type="tel"
            value={phone}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Suburb
          <input
            className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus"
            onChange={(event) => setSuburb(event.target.value)}
            placeholder="Chatswood"
            value={suburb}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
          How did you find us?
          <select
            className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus"
            onChange={(event) => setLeadSource(event.target.value)}
            value={leadSource}
          >
            <option value="">Select an option</option>
            <option>Google Search</option>
            <option>Google Maps</option>
            <option>ChatGPT Search</option>
            <option>Recommendation or referral</option>
            <option>Other</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
          Service
          <select
            className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus"
            onChange={(event) => setService(event.target.value)}
            value={service}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
          Project details
          <textarea
            className="min-h-36 rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus"
            onChange={(event) => setDetails(event.target.value)}
            placeholder="Tell us about the property and painting work needed."
            required
            value={details}
          />
        </label>
      </div>
      <fieldset className="min-w-0 mt-5 rounded-md border border-ink/15 p-4" disabled={preparing || status === "sending"}>
        <legend className="px-1 text-sm font-semibold">Photos (optional)</legend>
        <p id="photo-help" className="mb-3 text-sm text-ink/65">Add up to 5 photos. JPG, PNG, WebP or HEIC. Large JPG/PNG/WebP photos are resized automatically; prepared attachments must total 3 MB or less.</p>
        <input className="w-full min-w-0 max-w-full text-sm" aria-describedby="photo-help photo-error" aria-label="Add project photos" type="file" multiple accept="image/jpeg,image/png,image/webp,image/heic,image/heif,.heic,.heif" onChange={handlePhotos} />
        {preparing ? <p role="status">Preparing photos…</p> : null}
        <ul className="mt-3 space-y-2">{photos.map((photo) => <li key={photo.id} className="flex flex-wrap items-center gap-3 text-sm">
          {photo.preview ? <Image unoptimized width={56} height={56} src={photo.preview} alt="Selected project photo" className="h-14 w-14 rounded object-cover" /> : null}
          <span className="break-all">{photo.filename}</span>
          <button type="button" className="underline" aria-label={`Remove ${photo.filename}`} onClick={() => setPhotos(photos.filter((item) => item.id !== photo.id))}>Remove</button>
        </li>)}</ul>
        <p id="photo-error" role="alert" className="mt-2 text-sm text-clay">{photoError}</p>
        <p className="mt-3 text-sm text-ink/65">Photos are emailed with your enquiry for quoting and are not automatically published. Please avoid including people or sensitive documents.</p>
      </fieldset>
      <button
        className="mt-6 inline-flex rounded-md bg-clay px-6 py-3 font-semibold text-white transition hover:bg-clay/90 disabled:cursor-not-allowed disabled:bg-ink/25"
        disabled={status === "sending" || preparing}
        type="submit"
      >
        {status === "sending" ? "Sending..." : "Send a Free Quote Request"}
      </button>
      <p
        role="status"
        className={`mt-4 text-sm ${
          status === "sent" ? "text-eucalyptus" : status === "error" ? "text-clay" : "text-ink/55"
        }`}
      >
        {message || `Your quote request will be sent to ${businessDetails.email}.`}
      </p>
      {status === "error" ? (
        <a
          className="mt-3 inline-flex rounded-md border border-eucalyptus px-4 py-2 text-sm font-semibold text-eucalyptus transition hover:bg-gumleaf"
          href={fallbackEmailHref}
        >
          Open Email App — attach photos manually
        </a>
      ) : null}
    </form>
  );
}
