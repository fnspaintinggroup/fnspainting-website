import type { Metadata } from "next";
import { Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import { businessDetails, formatAddress, quoteEmailHref } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Painter Sydney",
  description:
    "Contact F&S Painting for a free quote from a professional painter in Sydney, NSW for house painting, interior painting, exterior painting, strata, commercial, and ceiling painting.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink px-5 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
            Contact
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Get a free painting quote
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Tell F&amp;S Painting what you need painted, where the property is located, and your
            preferred timing.
          </p>
        </div>
      </section>
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="space-y-4">
            <div className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
              <Mail className="text-eucalyptus" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold">Email</h2>
              <a className="mt-2 block text-ink/65 hover:text-eucalyptus" href={`mailto:${businessDetails.email}`}>
                {businessDetails.email}
              </a>
            </div>
            <div className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
              <Phone className="text-eucalyptus" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold">Contact</h2>
              <div className="mt-2 grid gap-1 text-ink/65">
                {businessDetails.phones.map((phone) => (
                  <a key={phone} className="hover:text-eucalyptus" href={`tel:${phone.replaceAll(" ", "")}`}>
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
              <MapPin className="text-eucalyptus" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold">Locations</h2>
              <div className="mt-2 grid gap-2 text-ink/65">
                {businessDetails.addresses.map((address) => (
                  <p key={address.label}>
                    <span className="font-semibold text-ink">{address.label}:</span> {formatAddress(address)}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
              <MessageSquareText className="text-eucalyptus" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-semibold">Quote details</h2>
              <p className="mt-2 text-ink/65">
                Include rooms, exterior areas, ceiling issues, access notes, and any preferred dates.
              </p>
            </div>
          </div>
          <form className="rounded-md border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Name
                <input className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink">
                Email
                <input type="email" className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
                Service
                <select className="rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Residential painting</option>
                  <option>Interior painting</option>
                  <option>Exterior painting</option>
                  <option>Strata painting</option>
                  <option>Commercial painting</option>
                  <option>Ceiling repainting</option>
                  <option>Mould-damaged ceiling restoration</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
                Project details
                <textarea className="min-h-36 rounded-md border border-ink/15 px-4 py-3 font-normal outline-none focus:border-eucalyptus" placeholder="Tell us about the property and painting work needed." />
              </label>
            </div>
            <a
              className="mt-6 inline-flex rounded-md bg-clay px-6 py-3 font-semibold text-white transition hover:bg-clay/90"
              href={quoteEmailHref}
            >
              Get a Free Quote
            </a>
            <p className="mt-4 text-sm text-ink/55">
              Clicking the quote button opens an email to {businessDetails.email}.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
