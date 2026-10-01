import type { Metadata } from "next";
import "./globals.css";
import "./sist-reference-theme.css";
import "./sist-cinematic-3d.css";
import "./sist-art.css";
import "./sist-evolution.css";
import Footer from "@/components/Footer";
import { founderId, founderSchema, pageMetadata, siteFacebook, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata("/"),
  metadataBase: new URL(siteUrl),
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
  icons: { icon: "/icon.png", shortcut: "/favicon.ico" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "System Intelligence & Strategic Tactics",
  alternateName: "SIST",
  founder: { "@id": founderId },
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "An independent AI research and intelligence-analysis platform for structured records, adversarial review, strategic synthesis, and decision support.",
  email: "support@systemintelligenceandstrategictactics.com",
  sameAs: ["https://github.com/aperez8910-maker/SIST.PUBLIC", siteFacebook],
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...founderSchema }).replace(/</g, "\\u003c") }} />
      </head>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
