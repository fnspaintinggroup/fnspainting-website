import type { Metadata } from "next";
import Link from "next/link";
import { StudioShell } from "./StudioShell";

export default function StudioPage() {
  const requiredSettings = [
    {
      name: "NEXT_PUBLIC_SANITY_PROJECT_ID",
      configured: Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID),
    },
    {
      name: "NEXT_PUBLIC_SANITY_DATASET",
      configured: Boolean(process.env.NEXT_PUBLIC_SANITY_DATASET),
    },
  ];
  const isConfigured = requiredSettings.every((setting) => setting.configured);

  if (isConfigured) {
    return <StudioShell />;
  }

  return (
    <section className="bg-mist px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-md border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">
          Website Admin
        </p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-ink">
          CMS setup is required before the admin mode can open
        </h1>
        <p className="mt-4 text-base leading-7 text-ink/70">
          The website already includes admin mode for projects, gallery collections, painting tips,
          reviews, and services. To switch it on, add the Sanity project settings in Vercel and
          redeploy the website.
        </p>
        <div className="mt-6 rounded-md border border-ink/10 bg-mist p-4">
          <p className="font-semibold text-ink">Missing setup values</p>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            {requiredSettings.map((setting) => (
              <li key={setting.name} className="flex items-center justify-between gap-4">
                <span className="font-mono">{setting.name}</span>
                <span className={setting.configured ? "text-eucalyptus" : "text-clay"}>
                  {setting.configured ? "Ready" : "Missing"}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex justify-center rounded-md bg-eucalyptus px-5 py-3 font-semibold text-white transition hover:bg-eucalyptus/90"
          >
            Back to Website
          </Link>
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-md border border-ink/15 px-5 py-3 font-semibold text-eucalyptus transition hover:border-eucalyptus"
          >
            Contact Page
          </Link>
        </div>
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "F&S Painting Admin",
  robots: {
    index: false,
    follow: false,
  },
};
