import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { businessDetails, formatAddress } from "@/lib/business";
import { getGalleryAreaHref } from "@/lib/gallery-areas";
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

type SocialLink = {
  label: string;
  href: string;
  image: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fns_painting/",
    image: "/images/footer/instagram-icon.svg",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/fnspainting",
    image: "/images/footer/facebook-icon.svg",
  },
  {
    label: "Google",
    href: businessDetails.googleReviewsUrl,
    image: "/images/footer/google-icon.svg",
  },
];

const featuredAreaLinks = [
  { label: "Chatswood", href: "/painters-chatswood" },
  { label: "Willoughby", href: "/painters-willoughby" },
  { label: "Lindfield & East Lindfield", href: "/painters-lindfield" },
];

const featuredAreaNames = new Set(["Chatswood", "Willoughby", "Lindfield"]);

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
              <p className="text-sm text-white/60">
                Professional painters in Sydney, NSW
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
            Clean, reliable painting services for homes, strata properties, and
            commercial spaces across Sydney.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/70">
            <a
              className="flex items-center gap-2 hover:text-white"
              href={`mailto:${businessDetails.email}`}
            >
              <Mail aria-hidden="true" size={16} /> {businessDetails.email}
            </a>
            <p className="flex items-center gap-2">
              <Phone aria-hidden="true" size={16} />{" "}
              {businessDetails.phones.join(" / ")}
            </p>
            {businessDetails.addresses.map((address) => (
              <p key={address.label} className="flex items-start gap-2">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                  size={16}
                />
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
            <div className="grid max-w-sm grid-cols-2 gap-2.5">
              {footerLogos.map((logo) => (
                <span
                  key={logo.src}
                  className="flex h-14 w-full items-center justify-center rounded bg-white p-3 shadow-sm"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="h-8 w-full object-contain"
                  />
                </span>
              ))}
            </div>
            <p className="mt-3 max-w-sm text-xs leading-5 text-white/50">
              F&amp;S Painting is operated by F&amp;S Painting Group, a licensed
              and insured painting company serving Chatswood, the North Shore,
              and Sydney.
            </p>
          </div>
        </div>
        <div>
          <p className="mb-4 font-semibold">Pages</p>
          <div className="grid gap-2 text-sm text-white/70">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/about" className="hover:text-white">
              About F&amp;S Painting
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/workmanship-warranty" className="hover:text-white">
              Workmanship Warranty
            </Link>
            <Link href="/zh" lang="zh-Hans" className="hover:text-white">中文介绍</Link>
          </div>
          <div className="mt-7">
            <p className="mb-3 font-semibold">Social</p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((item) => {
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
                    <Image
                      src={item.image}
                      alt=""
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <p className="mb-4 font-semibold">Local Painting Areas</p>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gumleaf">
            Featured local pages
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            {featuredAreaLinks.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="rounded border border-gumleaf/55 bg-gumleaf/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-gumleaf hover:text-ink"
              >
                {area.label}
              </Link>
            ))}
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Other Sydney service areas
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.filter((area) => !featuredAreaNames.has(area)).map((area, index) => {
              const galleryHref = getGalleryAreaHref(area);
              const className =
                "rounded border border-white/15 px-2.5 py-1 text-[11px] leading-5 text-white/70";

              return galleryHref ? (
                <Link
                  key={`${area}-${index}`}
                  href={galleryHref}
                  aria-label={`View ${area} painting gallery`}
                  className={`${className} transition hover:border-gumleaf hover:bg-white/5 hover:text-white`}
                >
                  {area}
                </Link>
              ) : (
                <span key={`${area}-${index}`} className={className}>
                  {area}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        &copy; {new Date().getFullYear()} {businessDetails.name}. Professional
        painting services in Sydney, NSW.{" "}
        <Link
          href="/privacy-policy"
          className="underline underline-offset-4 hover:text-white"
        >
          Privacy Policy
        </Link>
        {" | "}
        <Link
          href="/workmanship-warranty"
          className="underline underline-offset-4 hover:text-white"
        >
          Workmanship Warranty
        </Link>
      </div>
    </footer>
  );
}
