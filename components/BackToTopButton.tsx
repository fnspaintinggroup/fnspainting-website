"use client";

import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-4 z-50 grid h-11 w-11 place-items-center rounded-full bg-ink text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-eucalyptus focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 md:bottom-5 md:right-5 md:h-12 md:w-12"
    >
      <ArrowUp aria-hidden="true" size={26} strokeWidth={2.2} />
    </button>
  );
}
