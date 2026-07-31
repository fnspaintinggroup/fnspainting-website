import type { Metadata } from "next";
import {
  BadgeCheck,
  Clock3,
  MapPinned,
  MessageSquareWarning,
  ShieldCheck,
} from "lucide-react";

const timeClockUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfBRkwN72j7mSeG-ty3Kf9LODy18HcoD_hTdM4fnxA68mh37A/viewform";

const siteRecordUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScDk_pvb9mwBu46C-k_aJlmvjM9JEGs2Xup05mDMtjdUArDjA/viewform";

export const metadata: Metadata = {
  title: "F&S Team Entry",
  description: "F&S Painting staff mobile entry page.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function TeamEntryPage() {
  return (
    <section className="min-h-[70vh] bg-mist py-10 sm:py-14">
      <div className="mx-auto max-w-xl px-5 sm:px-6">
        <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">
            F&amp;S Painting Team
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-ink">Mobile entry</h1>
          <p className="mt-3 leading-7 text-ink/65">
            Use the time clock every workday. Use site records only at the start,
            when Caleb is needed, or at final completion.
          </p>

          <div className="mt-7 grid gap-4">
            <a
              className="flex min-h-24 items-center gap-4 rounded-xl bg-eucalyptus px-5 py-4 text-white shadow-sm transition hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-eucalyptus/25"
              href={timeClockUrl}
            >
              <Clock3 className="h-8 w-8 shrink-0" aria-hidden="true" />
              <span>
                <strong className="block text-lg">START / FINISH</strong>
                <span className="mt-1 block text-sm text-white/85">Daily time clock</span>
              </span>
            </a>

            <a
              className="flex min-h-24 items-center gap-4 rounded-xl border-2 border-eucalyptus bg-white px-5 py-4 text-eucalyptus shadow-sm transition hover:bg-eucalyptus/5 focus:outline-none focus:ring-4 focus:ring-eucalyptus/20"
              href={siteRecordUrl}
            >
              <MapPinned className="h-8 w-8 shrink-0" aria-hidden="true" />
              <span>
                <strong className="block text-lg">CALEB SITE START</strong>
                <span className="mt-1 block text-sm text-ink/60">
                  First-day scope, colour, access, protection and safety check
                </span>
              </span>
            </a>

            <a
              className="flex min-h-24 items-center gap-4 rounded-xl border border-clay/40 bg-clay/5 px-5 py-4 text-clay shadow-sm transition hover:bg-clay/10 focus:outline-none focus:ring-4 focus:ring-clay/20"
              href={siteRecordUrl}
            >
              <MessageSquareWarning className="h-8 w-8 shrink-0" aria-hidden="true" />
              <span>
                <strong className="block text-lg">REQUEST FOR CALEB</strong>
                <span className="mt-1 block text-sm text-ink/60">
                  Materials, equipment, client decision, access or blocked work
                </span>
              </span>
            </a>

            <a
              className="flex min-h-24 items-center gap-4 rounded-xl bg-ink px-5 py-4 text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-ink/20"
              href={siteRecordUrl}
            >
              <BadgeCheck className="h-8 w-8 shrink-0" aria-hidden="true" />
              <span>
                <strong className="block text-lg">CALEB JOB COMPLETION</strong>
                <span className="mt-1 block text-sm text-white/75">
                  Final check, variation, payment, paint, photos and review status
                </span>
              </span>
            </a>
          </div>

          <div className="mt-6 flex gap-3 rounded-xl bg-mist p-4 text-sm leading-6 text-ink/65">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-eucalyptus" aria-hidden="true" />
            <p>
              Site records are for approved F&amp;S team members only. In the form,
              select the Record Type that matches the button you used.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
