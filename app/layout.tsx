import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Sinhala } from "next/font/google";
import "./globals.css";
import { seoKeywords, siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const notoSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  variable: "--font-noto-sinhala",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "ගීතිකා සහ බයිබල් පද | Sinhala Christian Hymns & Bible Verses",
  description:
    "Download Geethika Bible Verses app for Sinhala Christian hymns, Bible verses, daily Bible quotes, and spiritual encouragement.",
  keywords: seoKeywords,
  applicationName: siteConfig.appNameEnglish,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "ගීතිකා සහ බයිබල් පද | Sinhala Christian Hymns & Bible Verses",
    description:
      "Download Geethika Bible Verses app for Sinhala Christian hymns, Bible verses, daily Bible quotes, and spiritual encouragement.",
    url: "/",
    siteName: siteConfig.appNameEnglish,
    images: [
      {
        url: siteConfig.heroImage,
        width: 1680,
        height: 900,
        alt: "Geethika Bible Verses Sinhala Christian app preview"
      }
    ],
    locale: "si_LK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ගීතිකා සහ බයිබල් පද | Sinhala Christian Hymns & Bible Verses",
    description:
      "Sinhala Christian hymns, Bible verses, daily Bible quotes, favourites, and spiritual encouragement.",
    images: [siteConfig.heroImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#101828",
  colorScheme: "light"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="si" className={`${inter.variable} ${notoSinhala.variable}`}>
      <body>{children}</body>
    </html>
  );
}
