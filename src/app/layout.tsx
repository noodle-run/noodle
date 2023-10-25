import { CookieBanner, NoodleAnalytics } from "@/components/cookie-banner";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "./config";
import "./globals.css";
import { Providers } from "./providers";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "variable",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "variable",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name + " - " + siteConfig.tagline,
    template: "%s - " + siteConfig.name,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.name + " - " + siteConfig.tagline,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/preview_card.png`,
        width: 1200,
        height: 628,
        alt: siteConfig.name + " - " + siteConfig.tagline,
      },
    ],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{ baseTheme: dark, variables: { colorPrimary: "#F9617B" } }}
    >
      <html lang="en">
        <body className={`${sans.variable} ${mono.variable} font-sans`}>
          <Providers>{children}</Providers>
          <CookieBanner />
          <NoodleAnalytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
