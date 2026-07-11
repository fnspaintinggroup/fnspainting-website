"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { businessDetails } from "@/lib/business";

const promoVideoSrc = "/videos/fns-painting-promo.mp4";

export function HomePromoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    if (isDocked) return;
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        setIsDocked(true);
      }
    };

    void playVideo();
  }, [isDocked]);

  const replayVideo = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
    }
    setIsDocked(false);
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
      <div
        className={
          isDocked
            ? "fixed right-3 top-24 z-40 h-24 w-40 overflow-hidden rounded-md border border-white/25 bg-ink shadow-2xl transition-all duration-700 sm:right-5 sm:h-28 sm:w-48"
            : "absolute inset-0 z-10 overflow-hidden bg-ink transition-all duration-700"
        }
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="metadata"
          aria-label="F&S Painting short promotional video"
          onEnded={() => setIsDocked(true)}
        >
          <source src={promoVideoSrc} type="video/mp4" />
        </video>
        {isDocked ? (
          <button
            type="button"
            onClick={replayVideo}
            className="absolute inset-0 flex items-end justify-start bg-gradient-to-t from-ink/85 via-ink/15 to-transparent p-3 text-left text-sm font-bold text-white"
            aria-label="Watch F&S Painting promo video again"
          >
            <span className="rounded bg-ink/75 px-2 py-1">▶ Watch again</span>
          </button>
        ) : null}
      </div>
      <div className="absolute inset-y-0 left-0 hidden w-[36%] bg-ink/18 backdrop-blur-md lg:block" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/62 to-ink/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-transparent to-ink/25" />
      <div className="relative z-20 mx-auto grid min-h-[78vh] max-w-6xl content-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-gumleaf">
            Licensed &amp; insured Sydney painters
          </p>
          <h1 className="max-w-4xl text-3xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            <span className="block">Professional house painting</span>
            <span className="block">&amp; commercial painting</span>
          </h1>
          <p className="mt-7 max-w-3xl text-base font-medium leading-7 text-white/90 sm:text-xl">
            Reliable, clean, high-quality painting service for homes, apartments, offices and shops
            across Sydney.
          </p>
          <p className="mt-2 text-base font-semibold text-white/90 sm:text-xl">
            Careful preparation, tidy work, and quality Dulux paint systems.
          </p>
          <div className="mt-7 grid max-w-3xl gap-3 text-sm font-semibold text-white sm:grid-cols-3">
            <p className="rounded-md border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
              License 478497C
            </p>
            <p className="rounded-md border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
              20 years experience
            </p>
            <p className="rounded-md border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
              Public liability insured
            </p>
          </div>
          <p className="mt-9 max-w-3xl text-xl font-black uppercase leading-tight text-white sm:text-2xl lg:text-3xl">
            <span className="block">Call {businessDetails.phones.join(" or ")}</span>
            <span className="block">for a free quote today.</span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#quote-name"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-clay/90"
            >
              Get a Free Quote
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <a
              href={`tel:${businessDetails.phones[0].replaceAll(" ", "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-eucalyptus transition hover:bg-gumleaf"
            >
              <Phone aria-hidden="true" size={18} />
              Call {businessDetails.phones[0]}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
            <p className="flex items-center gap-2">
              <CheckCircle2 aria-hidden="true" size={18} /> Residential, strata, and commercial
            </p>
            <p className="flex items-center gap-2">
              <ShieldCheck aria-hidden="true" size={18} /> Careful preparation and clean finishes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
