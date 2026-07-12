import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTopButton } from "@/components/BackToTopButton";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { absoluteUrl, defaultOgImage, localBusinessSchema, siteName, siteUrl, targetKeywords } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "F&S Painting | Painter Chatswood & Sydney - Interior, Exterior, Strata & Commercial",
    template: `%s | ${siteName}`,
  },
  description:
    "Licensed and insured painters in Chatswood, North Shore and Sydney. Residential, interior, exterior, strata and commercial painting with free on-site quotes, 20 years of experience, and quality Dulux products.",
  keywords: ["F&S Painting", ...targetKeywords],
  openGraph: {
    title: "F&S Painting | Painter Chatswood & Sydney - Interior, Exterior, Strata & Commercial",
    description:
      "Licensed and insured painters for residential, interior, exterior, strata, and commercial painting across Chatswood, the North Shore, and Sydney.",
    url: siteUrl,
    siteName,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        alt: "F&S Painting team repainting an interior hallway in Sydney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "F&S Painting | Painter Chatswood & Sydney - Interior, Exterior, Strata & Commercial",
    description:
      "Free on-site quotes, 20 years of experience, and quality Dulux products for painting across Chatswood, the North Shore, and Sydney.",
    images: [absoluteUrl(defaultOgImage)],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className="font-sans antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-K75HEPTK9Y" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K75HEPTK9Y');
          `}
        </Script>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Header />
        <main className="site-photo-brightness">{children}</main>
        <Footer />
        <AnalyticsEvents />
        <BackToTopButton />
      </body>
    </html>
  );
}
