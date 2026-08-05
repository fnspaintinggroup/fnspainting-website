"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import { businessDetails } from "@/lib/business";

const promoVideoSrc = "/videos/fns-painting-promo.mp4";

export function HomePromoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasEnded, setHasEnded] = useState(false);

  const replayVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      void video.play();
    }
    setHasEnded(false);
  };

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <Image
        src="/images/fs-painting-hero-real.jpeg"
        alt="F&S Painting team repainting an interior hallway in Sydney"
        fill
        priority
        className="object-cover object-center lg:object-[calc(50%+8cm)_center]"
        sizes="100vw"
      />
      <div className="absolute inset-x-0 top-0 z-10 h-[34svh] overflow-hidden bg-ink sm:inset-0 sm:h-auto">
        <video
          ref={videoRef}
          className="h-full w-full object-contain sm:object-cover"
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-label="F&S Painting short promotional video"
          onEnded={() => setHasEnded(true)}
        >
          <source src={promoVideoSrc} type="video/mp4" />
        </video>
        {hasEnded ? (
          <button
            type="button"
            onClick={replayVideo}
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-ink/75 px-3 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-ink/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Watch F&S Painting promo video again"
          >
            <RotateCcw aria-hidden="true" size={14} />
            Watch again
          </button>
        ) : null}
      </div>
      <div className="absolute inset-y-0 left-0 hidden w-[36%] bg-ink/18 backdrop-blur-md lg:block" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/62 to-ink/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-ink/25" />
      <div className="relative z-20 mx-auto grid min-h-[90svh] max-w-6xl content-end px-5 pb-8 pt-[35svh] sm:min-h-[78vh] sm:content-center sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-5xl">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-gumleaf sm:mb-5 sm:text-sm sm:tracking-[0.22em]">
            Licensed &amp; insured Sydney painters
          </p>
          <h1 className="max-w-4xl text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            <span className="block">Professional house painting</span>
            <span className="block">&amp; commercial painting</span>
          </h1>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-6 text-white/90 sm:mt-7 sm:text-xl sm:leading-7">
            Reliable, clean, high-quality painting service for homes,
            apartments, offices and shops across Sydney.
          </p>
          <Link
            href="/workmanship-warranty"
            data-analytics-event="warranty_details_click"
            className="mt-5 flex max-w-3xl items-center justify-between gap-4 rounded-xl border border-gumleaf/45 bg-ink/55 px-4 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-gumleaf hover:bg-ink/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:mt-6 sm:text-base"
          >
            <span className="uppercase">
              Up to 5-year written workmanship warranty*
            </span>
            <span className="inline-flex shrink-0 items-center gap-1 text-gumleaf">
              Details <ArrowRight aria-hidden="true" size={16} />
            </span>
          </Link>
          <div className="mt-5 grid max-w-3xl grid-cols-3 gap-2 text-xs font-semibold text-white sm:mt-7 sm:gap-3 sm:text-sm">
            <p className="rounded-xl border border-white/20 bg-white/10 px-2 py-2 backdrop-blur sm:px-4 sm:py-3">
              License 478497C
            </p>
            <p className="rounded-xl border border-white/20 bg-white/10 px-2 py-2 backdrop-blur sm:px-4 sm:py-3">
              20 years experience
            </p>
            <p className="rounded-xl border border-white/20 bg-white/10 px-2 py-2 backdrop-blur sm:px-4 sm:py-3">
              Public liability insured
            </p>
          </div>
          <p className="mt-2 max-w-3xl text-[11px] leading-5 text-white/65 sm:text-xs">
            *5 years for qualifying interior repaint work. Exterior periods are
            surface-specific and stated in the written quote.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:gap-3">
            <Link
              href="/contact#quote-name"
              className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-clay px-3 py-3 text-center text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-clay/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:text-base"
            >
              Free On-Site Quote
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a
              href={`tel:${businessDetails.phones[0].replaceAll(" ", "")}`}
              className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-3 text-center text-xs font-semibold text-eucalyptus transition hover:-translate-y-0.5 hover:bg-gumleaf focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-6 sm:text-base"
            >
              <Phone aria-hidden="true" size={18} />
              Call {businessDetails.phones[0]}
            </a>
            <Link
              href="/services"
              className="col-span-2 inline-flex items-center justify-center gap-1 px-2 py-2 text-sm font-semibold text-white/90 underline decoration-white/40 underline-offset-4 transition hover:text-white sm:col-auto sm:py-3"
            >
              View Services
              <ArrowRight aria-hidden="true" size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
