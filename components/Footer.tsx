import Link from "next/link";
import { Mail, MapPin, PaintBucket } from "lucide-react";
import { navItems, serviceAreas } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-gumleaf text-ink">
              <PaintBucket aria-hidden="true" size={22} />
            </span>
            <div>
              <p className="text-lg font-bold">F&amp;S Painting</p>
              <p className="text-sm text-white/60">Professional painters in Sydney, NSW</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
            Clean, reliable painting services for homes, strata properties, and commercial spaces
            across Sydney.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/70">
            <p className="flex items-center gap-2">
              <Mail aria-hidden="true" size={16} /> Email: placeholder@example.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin aria-hidden="true" size={16} /> Address: Sydney, NSW placeholder
            </p>
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
        </div>
        <div>
          <p className="mb-4 font-semibold">Service Areas</p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded-md border border-white/15 px-3 py-1 text-sm text-white/75">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} F&amp;S Painting. Contact details are placeholders.
      </div>
    </footer>
  );
}
