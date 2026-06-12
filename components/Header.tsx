import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { businessDetails } from "@/lib/business";
import { navItems } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-linen/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="F&S Painting home">
          <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-md bg-ink">
            <Image
              src="/images/fs-painting-logo.png"
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </span>
          <span>
            <span className="block text-lg font-bold leading-none text-ink">{businessDetails.name}</span>
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-ink/55">
              Sydney NSW
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-ink/70">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-eucalyptus">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-clay px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-clay/90"
          >
            Get a Free Quote
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
