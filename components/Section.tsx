import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section className={`py-14 sm:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-clay">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-3xl font-semibold leading-tight text-ink sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-4 text-base leading-7 text-ink/70">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
