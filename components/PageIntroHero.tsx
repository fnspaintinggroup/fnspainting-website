import Image from "next/image";
import type { ReactNode } from "react";

type PageIntroHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  children?: ReactNode;
};

export function PageIntroHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "center",
  children,
}: PageIntroHeroProps) {
  return (
    <section className="overflow-hidden bg-ink px-5 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.86fr)] lg:gap-12">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gumleaf">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            {description}
          </p>
          {children}
        </div>

        <div className="relative aspect-[16/10] min-h-0 overflow-hidden rounded-md border border-white/15 bg-white/5 shadow-2xl shadow-black/30 lg:aspect-[4/3]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
