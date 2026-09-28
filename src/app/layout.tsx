import type { Metadata } from "next";
import "./globals.css";
import "./sist-reference-theme.css";
import "./sist-cinematic-3d.css";
import "./sist-art.css";
import "./sist-evolution.css";
import Footer from "@/components/Footer";

const siteUrl = "https://systemintelligenceandstrategictactics.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SIST | System Intelligence & Strategic Tactics",
  description:
    "SIST is an independent AI research and intelligence-analysis platform for structured records, adversarial review, source-grounded synthesis, and human decision support.",
  keywords: [
    "System Intelligence",
    "Strategic Tactics",
    "SIST",
    "intelligence architecture",
    "adversarial review",
    "strategic analysis",
    "AI Council",
  ],
  authors: [{ name: "System Intelligence & Strategic Tactics" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "SIST | System Intelligence & Strategic Tactics",
    description:
      "Independent AI research, structured intelligence, adversarial review, and human-directed synthesis.",
    type: "website",
    siteName: "System Intelligence & Strategic Tactics",
    url: siteUrl,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "SIST - System Intelligence & Strategic Tactics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SIST | System Intelligence & Strategic Tactics",
    description: "Structured intelligence, adversarial review, and strategic synthesis.",
    images: ["/opengraph-image.png"],
  },
  icons: { icon: "/icon.png", shortcut: "/favicon.ico" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "System Intelligence & Strategic Tactics",
  alternateName: "SIST",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "An independent AI research and intelligence-analysis platform for structured records, adversarial review, strategic synthesis, and decision support.",
  email: "support@systemintelligenceandstrategictactics.com",
  sameAs: ["https://github.com/aperez8910-maker/SIST.PUBLIC"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "System Intelligence & Strategic Tactics",
  alternateName: "SIST",
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
