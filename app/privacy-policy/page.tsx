import type { Metadata } from "next";
import Link from "next/link";
import { PageIntroHero } from "@/components/PageIntroHero";
import { businessDetails } from "@/lib/business";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Read how F&S Painting collects, uses, stores, and protects information submitted through this website and its quote forms.",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Information we collect",
    paragraphs: [
      "When you request a quote or contact us, we may collect your name, email address, phone number, suburb, property details, service needs, preferred timing, and any photos or information you choose to provide.",
      "The website may also collect basic usage information such as pages viewed, approximate location, device type, browser information, referral source, and interactions with phone, email, or quote buttons.",
    ],
  },
  {
    title: "How we use information",
    paragraphs: [
      "We use information to respond to enquiries, prepare and follow up painting quotes, arrange site visits, provide services, keep appropriate business records, improve the website, measure marketing results, and protect the website from misuse.",
      "F&S Painting does not sell personal information. We only share information when it is reasonably needed to provide or support our services, when you ask us to, or when required by law.",
    ],
  },
  {
    title: "Website analytics and cookies",
    paragraphs: [
      "We use Google Analytics to understand how people find and use the website. Google may process information such as device identifiers, IP address, page activity, and cookies according to its own privacy terms. You can limit cookies through your browser settings.",
      "If Google advertising is enabled on this website, third-party vendors including Google may use cookies to serve and measure ads based on visits to this and other websites. Visitors can manage personalised advertising in Google Ads Settings. Advertising will not change the information you choose to submit directly to F&S Painting.",
    ],
  },
  {
    title: "Service providers and storage",
    paragraphs: [
      "We may use trusted service providers for website hosting, analytics, email, forms, maps, and content management. These providers may process information in Australia or overseas under their own security and privacy practices.",
      "We keep information only for as long as reasonably needed for enquiries, services, business records, dispute prevention, and legal obligations. We take reasonable steps to protect it, but no internet service can guarantee complete security.",
    ],
  },
  {
    title: "Access, correction, and questions",
    paragraphs: [
      "You may contact us to ask what personal information we hold about you, request a correction, or ask us to delete information where it is no longer reasonably required. Some records may need to be retained for business or legal reasons.",
      "This policy may be updated when our website, providers, or legal requirements change. The current version will remain available on this page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntroHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="This page explains how F&S Painting handles information received through our website, quote requests, and digital services."
        image="/images/page-heroes/contact-hero.jpg"
        imageAlt="Paint colour samples used during an F&S Painting consultation"
        imagePosition="center 46%"
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-ink/55">Effective date: 14 July 2026</p>
          <p className="mt-5 text-base leading-8 text-ink/72">
            F&amp;S Painting is the public trading name used by F&amp;S Painting Group. We aim to
            handle personal information carefully and only for clear business purposes.
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold leading-tight text-ink">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-ink/72">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-md bg-gumleaf p-6">
            <h2 className="text-2xl font-semibold text-ink">Contact F&amp;S Painting</h2>
            <p className="mt-3 leading-7 text-ink/72">
              Email{" "}
              <a className="font-semibold text-eucalyptus hover:text-clay" href={`mailto:${businessDetails.email}`}>
                {businessDetails.email}
              </a>{" "}
              or call{" "}
              <a
                className="font-semibold text-eucalyptus hover:text-clay"
                href={`tel:${businessDetails.phones[0].replaceAll(" ", "")}`}
              >
                {businessDetails.phones[0]}
              </a>
              .
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/65">
              You can also review{" "}
              <Link
                className="font-semibold text-eucalyptus hover:text-clay"
                href="https://policies.google.com/technologies/partner-sites"
              >
                how Google uses information from partner sites
              </Link>
              .
            </p>
          </section>
        </div>
      </section>
    </>
  );
}
