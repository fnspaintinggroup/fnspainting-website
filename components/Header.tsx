"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, Menu, Phone } from "lucide-react";
import { businessDetails } from "@/lib/business";
import { navItems } from "@/lib/site-data";

export function Header() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const closeMobileMenu = () => mobileMenuRef.current?.removeAttribute("open");

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-linen/85 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 xl:px-8 xl:py-3.5">
        <Link href="/" className="flex min-w-0 items-center gap-2 lg:gap-3" aria-label="F&S Painting home">
          <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-md bg-ink lg:h-10 lg:w-10">
            <Image
              src="/images/fs-painting-logo.png"
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden min-[380px]:block">
            <span className="block whitespace-nowrap text-base font-bold leading-none text-ink lg:text-lg">
              {businessDetails.name}
            </span>
            <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-ink/55 2xl:block">
              Sydney NSW
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-2 whitespace-nowrap text-xs font-medium text-ink/70 lg:flex xl:gap-3 xl:text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-eucalyptus">
              {item.label}
            </Link>
          ))}
          <span className="flex items-center gap-1 text-xs" aria-label="Language pages">
            <Link href="/zh" lang="zh-Hans" className="rounded px-1.5 py-1 transition hover:bg-gumleaf hover:text-eucalyptus">中文</Link>
          </span>
          <Link
            href="/contact#quote-name"
            className="inline-flex items-center gap-1.5 rounded-md bg-clay px-3 py-2 font-semibold text-white shadow-sm transition hover:bg-clay/90 xl:px-3.5"
          >
            Get a Free Quote
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <a
            href={`tel:${businessDetails.phones[0].replaceAll(" ", "")}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-eucalyptus/30 px-3 py-2 font-semibold text-eucalyptus transition hover:bg-gumleaf xl:px-3.5"
          >
            <Phone aria-hidden="true" size={16} />
            Call {businessDetails.phones[0]}
          </a>
        </nav>
        <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
          <Link
            href="/contact#quote-name"
            className="inline-flex min-h-9 items-center rounded-md bg-clay px-3 text-xs font-semibold text-white shadow-sm transition hover:bg-clay/90"
          >
            Quote
          </Link>
          <a
            href={`tel:${businessDetails.phones[0].replaceAll(" ", "")}`}
            className="inline-flex min-h-9 items-center gap-1 rounded-md border border-eucalyptus/30 px-2.5 text-xs font-semibold text-eucalyptus transition hover:bg-gumleaf"
            aria-label={`Call ${businessDetails.phones[0]}`}
          >
            <Phone aria-hidden="true" size={14} />
            Call
          </a>
          <details ref={mobileMenuRef} className="relative">
            <summary
              className="grid min-h-9 min-w-9 cursor-pointer list-none place-items-center rounded-md border border-ink/15 text-ink transition hover:bg-white/60 [&::-webkit-details-marker]:hidden"
              aria-label="Open navigation menu"
            >
              <Menu aria-hidden="true" size={17} />
            </summary>
            <nav className="absolute right-0 top-[calc(100%+0.625rem)] z-50 w-56 rounded-lg border border-ink/10 bg-linen p-2 text-sm font-medium text-ink shadow-xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block rounded-md px-3 py-2.5 transition hover:bg-gumleaf hover:text-eucalyptus"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-1 flex gap-2 border-t border-ink/10 px-3 pt-2">
                <Link href="/zh" lang="zh-Hans" onClick={closeMobileMenu} className="rounded px-2 py-1.5 hover:bg-gumleaf">中文</Link>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
