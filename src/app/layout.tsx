import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, JetBrains_Mono, Lora } from "next/font/google";
import "./globals.css";
import { landing } from "@/content/landing";
import { allowSearchIndexing, getSiteUrl } from "@/lib/site-url";
import StitchesRegistry from "./stitches-registry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const index = allowSearchIndexing();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: landing.site.title,
    template: `%s | ${landing.person.name}`,
  },
  description: landing.site.description,
  keywords: [...landing.site.keywords],
  authors: [{ name: landing.person.name, url: siteUrl }],
  creator: landing.person.name,
  publisher: landing.person.name,
  category: "Marketing",
  applicationName: landing.site.serviceName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index,
    follow: index,
    googleBot: {
      index,
      follow: index,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: landing.site.serviceName,
    title: landing.site.title,
    description: landing.site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: landing.site.title,
    description: landing.site.description,
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F9F8F6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${lora.variable} ${jetbrains.variable}`}
      >
        <StitchesRegistry>{children}</StitchesRegistry>
        <Analytics />
      </body>
    </html>
  );
}
