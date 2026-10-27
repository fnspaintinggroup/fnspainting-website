"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { submitPrivateQuote, type PrivateUploadSession } from "@/lib/submit-private-quote";
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
  const [privateMode,setPrivateMode]=useState(false);
  const [checkingStorage,setCheckingStorage]=useState(true);
  const [storageError,setStorageError]=useState("");
  const originalFiles=useRef(new Map<string,File>());
  const uploadSession=useRef<PrivateUploadSession|null>(null);
  useEffect(()=>{let active=true;fetch("/api/quote-storage/config",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error();return r.json();}).then(data=>{if(active)setPrivateMode(Boolean(data.enabled));}).catch(()=>{if(active)setStorageError("Photo intake could not be checked. Please refresh this page or call us.");}).finally(()=>{if(active)setCheckingStorage(false);});return()=>{active=false;};},[]);
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
    if (!selected.length) return;
    setPhotoError("");
    if (photos.length + selected.length > MAX_QUOTE_PHOTOS) { setPhotoError("Please select up to 5 photos in total."); return; }
    setPreparing(true);
    try {
      if(privateMode){
        const added:PreparedQuotePhoto[]=[];
        for(const file of selected){
          if(!file.size||file.size>20*1024*1024||(!/^image\/(jpeg|png|webp|hei[cf])$/i.test(file.type)&&!/\.(jpe?g|png|webp|heic|heif)$/i.test(file.name)))throw Error(`${file.name}: choose a JPG, PNG, WebP or HEIC photo up to 20 MB.`);
          const item={id:crypto.randomUUID(),filename:file.name,bytes:file.size,content:""};
          added.push(item);
        }
        added.forEach((item,index)=>originalFiles.current.set(item.id,selected[index]));
        setPhotos([...photos,...added]);return;
      }
      const added: PreparedQuotePhoto[] = [];
      // Decode one photo at a time to avoid exhausting phone memory.
      for (const file of selected) added.push(await prepareQuotePhoto(file));
      const next = [...photos, ...added];
      if (next.reduce((sum, photo) => sum + photo.bytes, 0) > MAX_QUOTE_PHOTO_BYTES) throw new Error("These photos are too large together. Please choose fewer photos, or email the originals to us.");
      setPhotos(next);
    } catch (error) { setPhotoError(error instanceof Error ? error.message : "Unable to read the photos. Please try JPG or PNG."); }
    finally { setPreparing(false); }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (preparing || photoError || checkingStorage || storageError || status === "sending") return;
    setStatus("sending");
    setMessage("");

    try {
      const privateFields={name,email,phone,suburb,service,leadSource,details,referenceKind:reference?.kind,referenceSlug:reference?.slug};
      let privateResponse:{message:string;photoCount:number;id:string}|null=null;
      if(privateMode){
        const originals=photos.map(photo=>{const file=originalFiles.current.get(photo.id);if(!file)throw Error("Select the original photos again.");return file;});
        privateResponse=await submitPrivateQuote(privateFields,originals,uploadSession.current,value=>{uploadSession.current=value;});
      }
      const response = privateResponse ? null : await fetch("/api/quote", {
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
      const data: {message?:string;setupHint?:string} = privateResponse ?? ((await response!.json()) as { message?: string; setupHint?: string });

      if (response && !response.ok) {
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
      originalFiles.current.clear();uploadSession.current=null;
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
      <fieldset className="min-w-0 mt-5 rounded-md border border-ink/15 p-4" disabled={preparing || checkingStorage || Boolean(storageError) || status === "sending"}>
        <legend className="px-1 text-sm font-semibold">Photos (optional)</legend>
        <p id="photo-help" className="mb-3 text-sm text-ink/65">Choose up to 5 photos, up to 20 MB each (100 MB total). JPG, PNG, WebP or HEIC. {privateMode ? "Your original photos are received privately; email notifications do not contain attachments." : "We automatically resize copies for email. Your original photos stay unchanged."}</p>
        <input className="w-full min-w-0 max-w-full text-sm" aria-describedby="photo-help photo-error" aria-label="Add project photos" type="file" multiple accept="image/jpeg,image/png,image/webp,image/heic,image/heif,.heic,.heif" onChange={handlePhotos} />
        {checkingStorage ? <p role="status">Checking photo intake…</p> : null}
        {storageError ? <p role="alert">{storageError}</p> : null}
        {preparing ? <p role="status">Preparing photos…</p> : null}
        <p role="status" className="mt-3 text-sm font-semibold">{photos.length} of 5 photos ready to send</p>
        <ul className="mt-3 space-y-2">{photos.map((photo) => <li key={photo.id} className="flex flex-wrap items-center gap-3 text-sm">
          {photo.preview ? <Image unoptimized width={56} height={56} src={photo.preview} alt="Selected project photo" className="h-14 w-14 rounded object-cover" /> : null}
          <span className="break-all">{photo.filename}</span>
          <button type="button" className="underline" aria-label={`Remove ${photo.filename}`} onClick={() => { originalFiles.current.delete(photo.id);setPhotos(photos.filter((item) => item.id !== photo.id)); }}>Remove</button>
        </li>)}</ul>
        <p id="photo-error" role="alert" className="mt-2 text-sm text-clay">{photoError ? `Photos were not added. ${photoError}` : ""}</p>
        {photoError ? <button type="button" className="mt-2 text-sm underline" onClick={() => setPhotoError("")}>{photos.length ? "Continue with ready photos only" : "Continue without photos"}</button> : null}
        <p className="mt-3 text-sm text-ink/65">{privateMode ? "Photos are stored privately for quoting and transferred to our business archive. Online photo copies are removed after verified PC storage and a seven-day waiting period." : "Photos are emailed with your enquiry for quoting and are not automatically published."} Please avoid including people or sensitive documents.</p>
      </fieldset>
      <button
        className="mt-6 inline-flex rounded-md bg-clay px-6 py-3 font-semibold text-white transition hover:bg-clay/90 disabled:cursor-not-allowed disabled:bg-ink/25"
        disabled={status === "sending" || preparing || checkingStorage || Boolean(storageError) || Boolean(photoError)}
        type="submit"
      >
        {status === "sending" ? (privateMode ? "Uploading original photos..." : "Sending...") : "Send a Free Quote Request"}
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
          Open Email App — photos are not included automatically
        </a>
      ) : null}
    </form>
  );
}
