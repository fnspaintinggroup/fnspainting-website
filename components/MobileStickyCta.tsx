import Link from "next/link";
import { ClipboardPenLine, Phone } from "lucide-react";
import { businessDetails } from "@/lib/business";

export function MobileStickyCta() {
  const phoneHref = `tel:${businessDetails.phones[0].replaceAll(" ", "")}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-ink/10 bg-white/96 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_rgba(17,35,31,0.14)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-eucalyptus bg-white px-3 py-3 text-sm font-bold text-eucalyptus"
          aria-label={`Call F&S Painting on ${businessDetails.phones[0]}`}
        >
          <Phone aria-hidden="true" size={19} />
          Call Now
        </a>
        <Link
          href="/contact#quote-name"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-clay px-3 py-3 text-sm font-bold text-white shadow-sm"
        >
          <ClipboardPenLine aria-hidden="true" size={19} />
          Free Quote
        </Link>
      </div>
    </div>
  );
}
