import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Search } from "lucide-react";
import { businessDetails, formatAddress } from "@/lib/business";
import { navItems, serviceAreas } from "@/lib/site-data";

const footerLogos = [
  {
    src: "/images/footer/dulux.jpg",
    alt: "Dulux",
    width: 132,
    height: 42,
  },
  {
    src: "/images/footer/lj-hooker.avif",
    alt: "LJ Hooker",
    width: 118,
    height: 42,
  },
  {
    src: "/images/footer/ebix-trades-monitor.avif",
    alt: "Ebix Trades Monitor",
    width: 150,
    height: 42,
  },
  {
    src: "/images/footer/first-national.avif",
    alt: "First National",
    width: 132,
    height: 42,
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fns_painting/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/fnspainting",
    icon: Facebook,
  },
  {
    label: "Google",
    href: businessDetails.googleReviewsUrl,
    icon: Search,
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[92rem] gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.9fr_0.45fr_2fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-md bg-white">
              <Image
                src="/images/fs-painting-logo.png"
                alt=""
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </span>
            <div>
              <p className="text-lg font-bold">{businessDetails.name}</p>
              <p className="text-sm text-white/60">Professional painters in Sydney, NSW</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
            Clean, reliable painting services for homes, strata properties, and commercial spaces
            across Sydney.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/70">
            <a className="flex items-center gap-2 hover:text-white" href={`mailto:${businessDetails.email}`}>
              <Mail aria-hidden="true" size={16} /> {businessDetails.email}
            </a>
            <p className="flex items-center gap-2">
              <Phone aria-hidden="true" size={16} /> {businessDetails.phones.join(" / ")}
            </p>
            {businessDetails.addresses.map((address) => (
              <p key={address.label} className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0" size={16} />
                <span>
                  {address.label}: {formatAddress(address)}
                </span>
              </p>
            ))}
          </div>
          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Quality products and property networks
            </p>
            <div className="flex max-w-md flex-wrap gap-2.5">
              {footerLogos.map((logo) => (
                <span
                  key={logo.src}
                  className="flex h-11 items-center rounded bg-white px-3 shadow-sm"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="max-h-7 w-auto object-contain"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="mb-4 font-semibold">Pages</p>
          <div className="grid gap-2 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-7">
            <p className="mb-3 font-semibold">Social</p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${businessDetails.name} on ${item.label}`}
                    title={item.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white/75 transition hover:border-gumleaf hover:bg-gumleaf hover:text-ink"
                  >
                    <Icon aria-hidden="true" size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <p className="mb-4 font-semibold">Service Areas - All of Sydney wide</p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded border border-white/15 px-2.5 py-1 text-[11px] leading-5 text-white/70">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} {businessDetails.name}. Professional painting services in Sydney, NSW.
      </div>
    </footer>
  );
}
