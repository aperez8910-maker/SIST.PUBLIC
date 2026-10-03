import { reports } from "@/data/briefings";
import type { Metadata } from "next";

export const siteUrl = "https://systemintelligenceandstrategictactics.com";
export const siteName = "System Intelligence & Strategic Tactics";
export const siteFacebook = "https://www.facebook.com/SISTprotocol/";
export const founderName = "Alexander Emilio Perez";
export const founderPath = "/alexander-emilio-perez";
export const founderLinkedIn = "https://www.linkedin.com/in/alexander-perez-a848473a4";
export const founderId = `${siteUrl}${founderPath}#person`;

type SeoPage = { title: string; description: string; article?: boolean };

// Shared canonical registry: metadata, page schemas, and sitemap stay consistent.
export const seoPages = {
  "/": {
    "title": "SIST | Alexander Emilio Perez | AI Research & Intelligence",
    "description": "SIST, founded by Alexander Emilio Perez in Austin, Texas, is an independent AI research and intelligence-analysis platform for adversarial review and decision support."
  },
  "/alexander-emilio-perez": {
    "title": "Alexander Emilio Perez — Founder & System Architect of SIST",
    "description": "Meet Alexander Emilio Perez, founder and system architect of System Intelligence & Strategic Tactics (SIST), focused on AI research and adversarial review."
  },
  "/system": {
    "title": "AI Intelligence Architecture & Review Pipeline",
    "description": "Explore SIST's nine-stage intelligence pipeline, five control gates, evidence provenance, adversarial review, and human-controlled release."
  },
  "/council": {
    "title": "AI Council & Human-Directed Adversarial Review",
    "description": "Learn how the SIST AI Council separates independent analysis, adversarial challenge, research, and verification while preserving final human authority."
  },
  "/divisions": {
    "title": "Research & Intelligence Analysis Divisions",
    "description": "Explore SIST's criminal defense, healthcare, consumer advocacy, immigration, and institutional accountability research and record-analysis divisions."
  },
  "/divisions/criminal-defense": {
    "title": "Criminal Defense Research & Evidence Analysis",
    "description": "SIST organizes criminal case records, discovery, timelines, evidence gaps, and contradictions for source-grounded research and defense strategy support."
  },
  "/divisions/healthcare": {
    "title": "Healthcare Records & Billing Intelligence",
    "description": "SIST analyzes healthcare records, billing, processes, policies, and institutional decisions to support patient advocacy and evidence-based review."
  },
  "/divisions/consumer": {
    "title": "Consumer Advocacy & Dispute Record Analysis",
    "description": "SIST organizes consumer disputes, account histories, evidence, conflicting representations, and escalation pathways into an auditable intelligence picture."
  },
  "/divisions/immigration-humanitarian": {
    "title": "Immigration & Humanitarian Record Analysis",
    "description": "SIST organizes immigration records, detention history, humanitarian equities, family impact, and procedural timelines for research and advocacy support."
  },
  "/divisions/institutional-accountability": {
    "title": "Institutional Accountability & Evidence Review",
    "description": "SIST reconstructs institutional records, timelines, decisions, and contradictions to support accountability research, strategic briefing, and escalation analysis."
  },
  "/research": {
    "title": "AI Research, Protocols & Intelligence Frameworks",
    "description": "Read SIST's public research on intelligence architecture, the Adversarial Integration Protocol, strategic analysis, AI Council methods, and validation."
  },
  "/research/system-intelligence-architecture": {
    "title": "SIST Intelligence Architecture",
    "description": "A public overview of SIST's nine-stage architecture, five control gates, evidence lineage, adversarial challenge, and human-directed decision support.",
    "article": true
  },
  "/research/adversarial-integration-protocol": {
    "title": "Adversarial Integration Protocol",
    "description": "How SIST's Adversarial Integration Protocol challenges unsupported assumptions, contradictory records, weak evidence, and fragile conclusions before release.",
    "article": true
  },
  "/research/strategic-intelligence-framework": {
    "title": "Strategic Intelligence Framework",
    "description": "Learn how SIST separates known facts, unverified claims, missing evidence, and contradictions to turn complex records into decision-relevant intelligence.",
    "article": true
  },
  "/research/ai-council-model": {
    "title": "AI Council Model",
    "description": "SIST's public AI Council model explains independent analytical seats, visible dissent, adversarial review, controlled synthesis, and final human authority.",
    "article": true
  },
  "/briefings": {
    "title": "SIST Public Reports & White Papers",
    "description": "Open the source-faithful SIST report archive: original report titles, issue dates, stated findings, source limits, and public research outputs."
  },
  "/briefings/what-is-adversarial-review": {
    "title": "What Is Adversarial Review?",
    "description": "Understand how adversarial review challenges assumptions, verifies claims, exposes weaknesses, and requires human judgment before strategic output is used.",
    "article": true
  },
  "/interactive": {
    "title": "Interactive Intelligence Pipeline & Control Gates",
    "description": "Inspect SIST's nine-stage intelligence work floor, from intake and record ingestion to adversarial countermeasures, briefing, and human-controlled release."
  },
  "/intelligence": {
    "title": "AI Intelligence Console",
    "description": "Access SIST's intelligence console for AI-assisted processing through its server-side intelligence layer."
  },
  "/contact": {
    "title": "Contact SIST & Request an Intelligence Briefing",
    "description": "Contact SIST to define your research objective, operating domain, record-analysis needs, and desired intelligence briefing before sharing sensitive records."
  },
  ...Object.fromEntries(reports.map(report => [`/briefings/${report.slug}`, { title: report.title, description: report.description, article: true }])) as Record<string, SeoPage>,
} satisfies Record<string, SeoPage>;

export type SeoPath = keyof typeof seoPages | `/briefings/${string}`;

export function pageMetadata(path: SeoPath): Metadata {
  const page: SeoPage = (seoPages as Record<string, SeoPage>)[path];
  const title = path === "/" ? page.title : `${page.title} | SIST`;
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const images = [{ url: `${siteUrl}/opengraph-image.png`, width: 1200, height: 630, alt: siteName }];
  return {
    title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: { title, description: page.description, url, siteName, locale: "en_US", type: page.article ? "article" : "website", images },
    twitter: { card: "summary_large_image", title, description: page.description, images: [images[0].url] },
  };
}

export const founderSchema = {
  "@type": "Person",
  "@id": founderId,
  name: founderName,
  url: `${siteUrl}${founderPath}`,
  jobTitle: "Founder & System Architect",
  description: "Founder and system architect of System Intelligence & Strategic Tactics (SIST), an independent AI research and intelligence-analysis platform.",
  worksFor: { "@id": `${siteUrl}/#organization` },
  sameAs: [founderLinkedIn, "https://github.com/aperez8910-maker"],
};

export function pageSchema(path: SeoPath) {
  const page: SeoPage = (seoPages as Record<string, SeoPage>)[path];
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const webPage = {
    "@type": path === founderPath ? "ProfilePage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${siteUrl}/#website` },
    publisher: { "@id": `${siteUrl}/#organization` },
    ...(path === founderPath ? { mainEntity: { "@id": founderId } } : {}),
  };
  const graph: object[] = [webPage];
  if (path === founderPath) graph.push(founderSchema);
  if (page.article) {
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.title,
      author: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: siteName },
      description: page.description,
      inLanguage: "en-US",
      mainEntityOfPage: { "@id": `${url}#webpage` },
      publisher: { "@id": `${siteUrl}/#organization` },
      ...(path === "/briefings/alexander-emilio-perez-building-sist" ? { about: { "@id": founderId } } : {}),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}
