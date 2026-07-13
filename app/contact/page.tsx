import type { Metadata } from "next";
import { Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import { PageIntroHero } from "@/components/PageIntroHero";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { businessDetails, formatAddress } from "@/lib/business";
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
      <PageIntroHero
        eyebrow="Contact"
        title="Get a free painting quote"
        description={
          <>
            Tell F&amp;S Painting what you need painted, where the property is located, and your
            preferred timing.
          </>
        }
        image="/images/page-heroes/contact-hero.jpg"
        imageAlt="Customer comparing paint colour samples for a painting consultation"
        imagePosition="center 46%"
      />
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
          <QuoteRequestForm />
        </div>
      </section>
      <section className="bg-mist py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mb-6 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
              Google Map
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Find F&amp;S Painting Services in Chatswood
            </h2>
            <p className="mt-4 text-base leading-7 text-ink/70">
              Use the map for directions to the Chatswood location or contact us for painting work
              across Sydney.
            </p>
          </div>
          <div className="overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm">
            <iframe
              className="h-[22rem] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={businessDetails.googleMapEmbedUrl}
              title="F&S Painting Services Google Map"
            />
          </div>
        </div>
      </section>
    </>
  );
}
