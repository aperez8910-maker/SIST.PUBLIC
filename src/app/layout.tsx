import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata: Metadata = {

  metadataBase: new URL(
    "https://systemintelligenceandstrategictactics.com"
  ),

  title: "SIST | System Intelligence & Strategic Tactics",

  description:
    "System Intelligence & Strategic Tactics provides structured intelligence frameworks, strategic analysis, and decision methodology.",

  keywords: [
    "System Intelligence",
    "Strategic Tactics",
    "Intelligence Framework",
    "Strategic Analysis",
    "SIST",
  ],

  authors: [
    {
      name: "System Intelligence & Strategic Tactics",
    },
  ],

  openGraph: {
    title: "SIST | System Intelligence & Strategic Tactics",

    description:
      "Transforming information into strategic intelligence.",

    type: "website",

    siteName:
      "System Intelligence & Strategic Tactics",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "SIST - System Intelligence & Strategic Tactics",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "SIST | System Intelligence & Strategic Tactics",

    description:
      "Transforming information into strategic intelligence.",

    images: [
      "/opengraph-image.png",
    ],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="en">

      <body className="antialiased">

        {children}

        <Footer />

      </body>

    </html>

  );
}
