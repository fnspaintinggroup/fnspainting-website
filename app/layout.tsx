import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTopButton } from "@/components/BackToTopButton";
import { absoluteUrl, defaultOgImage, localBusinessSchema, siteName, siteUrl, targetKeywords } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "F&S Painting | Painter Sydney",
    template: `%s | ${siteName}`,
  },
  description:
    "F&S Painting provides house painting, interior painting, exterior painting, strata painting, commercial painting, ceiling painting, and mould-damaged ceiling restoration in Sydney, NSW.",
  keywords: ["F&S Painting", ...targetKeywords],
  openGraph: {
    title: "F&S Painting | Painter Sydney",
    description:
      "Clean, professional painting services for homes, strata, and commercial spaces in Sydney, NSW.",
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
    title: "F&S Painting | Painter Sydney",
    description: "Professional house, interior, exterior, strata, commercial, and ceiling painting in Sydney, NSW.",
    images: [absoluteUrl(defaultOgImage)],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
