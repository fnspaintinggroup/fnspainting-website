"use client";

import { useMemo, useState } from "react";
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
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");

  const emailHref = useMemo(() => {
    const body = [
      "Hi F&S Painting,",
      "",
      "I would like a free painting quote.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Service needed: ${service}`,
      "Project details:",
      details,
      "",
    ].join("\n");

    return `mailto:${businessDetails.email}?subject=${encodeURIComponent(
      "Free painting quote request",
    )}&body=${encodeURIComponent(body)}`;
  }, [details, email, name, service]);

  return (
    <form className="rounded-md border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Name
          <input
            className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus"
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            value={name}
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email
          <input
            className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus"
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            type="email"
            value={email}
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
            value={details}
          />
        </label>
      </div>
      <a
        className="mt-6 inline-flex rounded-md bg-clay px-6 py-3 font-semibold text-white transition hover:bg-clay/90"
        href={emailHref}
      >
        Send a Free Quote Request
      </a>
      <p className="mt-4 text-sm text-ink/55">
        This opens an email to {businessDetails.email} with your quote details ready to send.
      </p>
    </form>
  );
}
