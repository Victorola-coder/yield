import "./global.css";
import { Toaster } from "sonner";
import { AOS } from "./components/global";
import { Montserrat } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import type { Metadata, Viewport } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vfat.io/yield"),
  icons: {
    icon: "/images/favicon.png",
  },
  title: "vfat - Multi-chain Yield Aggregator & Portfolio Manager",
  description:
    "vfat is a yield aggregator that simplifies and automates yield farming, manages multi-wallet portfolios, tracks lending pools and other cryptocurrency details.",
  applicationName: "vfat - Multi-chain Yield Aggregator & Portfolio Manager",
  authors: [{ name: "vfat", url: "https://vfat.io/yield" }],
  keywords: ["yield farming", "portfolio manager", "lending pools", "crypto"],
  creator: "VickyJay",
  publisher: "VickyJay",
  generator: "Next.js",
  referrer: "origin",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://vfat.io/yield",
    title: "vfat - Multi-chain Yield Aggregator & Portfolio Manager",
    siteName: "vfat - Multi-chain Yield Aggregator & Portfolio Manager",
    locale: "en_US",
    images: [
      {
        url: "https://vfat.io/yield/og.png",
        width: 1200,
        height: 630,
        alt: "vfat OG Image",
      },
    ],
  },
  twitter: {
    site: "vfat",
    creator: "vfat",
    title: "vfat - Multi-chain Yield Aggregator & Portfolio Manager",
    description:
      "vfat is a yield aggregator that simplifies and automates yield farming, manages multi-wallet portfolios, tracks lending pools and other cryptocurrency details.",
    card: "summary_large_image",
    images: ["https://vfat.io/yield/og.png"],
  },
  appleWebApp: {
    capable: true,
    title: "vfat",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract:
    "vfat is a yield aggregator that simplifies and automates yield farming, manages multi-wallet portfolios, tracks lending pools and other cryptocurrency details.",
  category: "Social",
  classification: "Social",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div className="bg-background text-primary">
          <Header />
          {children}
          <Footer />
        </div>
        <Toaster richColors />
        <AOS />
      </body>
    </html>
  );
}
