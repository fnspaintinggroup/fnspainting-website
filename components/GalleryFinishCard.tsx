"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Expand, MapPin, Paintbrush, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { GalleryImage } from "@/lib/gallery";
import { createUrlSlug } from "@/lib/url-slug";

type GalleryFinishCardProps = {
  item: GalleryImage;
};

function CardContent({ item }: GalleryFinishCardProps) {
  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {item.photoCount ? (
          <span className="absolute right-3 top-3 rounded bg-ink/80 px-2.5 py-1 text-xs font-semibold text-white">
            {item.photoCount} photos
          </span>
        ) : null}
      </div>
      <div className="p-5 text-left">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-clay">
          <Paintbrush aria-hidden="true" size={15} />
          {item.category}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-tight text-ink">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-ink/65">{item.caption}</p>
        {item.suburb ? (
          <p className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ink/55">
            <MapPin aria-hidden="true" size={16} />
            {item.suburb}
          </p>
        ) : null}
        <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-eucalyptus">
          {item.collectionSlug ? "View location gallery" : "View finished photo"}
          {item.collectionSlug ? (
            <ArrowRight aria-hidden="true" size={16} />
          ) : (
            <Expand aria-hidden="true" size={16} />
          )}
        </p>
      </div>
    </>
  );
}

export function GalleryFinishCard({ item }: GalleryFinishCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  if (item.collectionSlug) {
    return (
      <article
        id={createUrlSlug(item.title)}
        className="group scroll-mt-24 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
      >
        <Link href={`/painting-gallery/${item.collectionSlug}`} className="block h-full">
          <CardContent item={item} />
        </Link>
      </article>
    );
  }

  return (
    <>
      <article
        id={createUrlSlug(item.title)}
        className="group scroll-mt-24 overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="block h-full w-full"
          aria-label={`View finished photo: ${item.title}`}
        >
          <CardContent item={item} />
        </button>
      </article>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-ink/92 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} finished photo`}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-lg transition hover:bg-gumleaf"
            aria-label="Close finished photo"
          >
            <X aria-hidden="true" size={22} />
          </button>
          <div
            className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-xl bg-white/5"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              priority
              sizes="95vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
