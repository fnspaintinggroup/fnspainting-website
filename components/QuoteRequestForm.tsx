"use client";

import { FormEvent, useMemo, useState } from "react";
import { businessDetails } from "@/lib/business";

const services = [
  "Residential painting",
  "Interior painting",
  "Exterior painting",
  "Strata painting",
  "Commercial painting",
  "Ceiling repainting",
  "Mould-damaged ceiling restoration",
];

export function QuoteRequestForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [suburb, setSuburb] = useState("");
  const [service, setService] = useState("");
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
      "Project details:",
      details,
      "",
    ].join("\n");

    return `mailto:${businessDetails.email}?subject=${encodeURIComponent(
      "Free painting quote request",
    )}&body=${encodeURIComponent(body)}`;
  }, [details, email, name, phone, service, suburb]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, suburb, service, details }),
      });
      const data = (await response.json()) as { message?: string; setupHint?: string };

      if (!response.ok) {
        throw new Error(
          [data.message || "Unable to send the quote request.", data.setupHint]
            .filter(Boolean)
            .join(" "),
        );
      }

      setStatus("sent");
      setMessage(data.message || "Your quote request has been sent.");
      setName("");
      setEmail("");
      setPhone("");
      setSuburb("");
      setService("");
      setDetails("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send the quote request.");
    }
  }

  return (
    <form className="rounded-md border border-ink/10 bg-white p-6 shadow-sm sm:p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Name
          <input
            className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus"
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
      <button
        className="mt-6 inline-flex rounded-md bg-clay px-6 py-3 font-semibold text-white transition hover:bg-clay/90 disabled:cursor-not-allowed disabled:bg-ink/25"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending..." : "Send a Free Quote Request"}
      </button>
      <p
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
          Send by Email Instead
        </a>
      ) : null}
    </form>
  );
}
