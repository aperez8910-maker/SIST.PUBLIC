import type { MetadataRoute } from "next";

const base = "https://systemintelligenceandstrategictactics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
  "/", "/system", "/council", "/divisions", "/research", "/briefings", "/interactive", "/contact",
  "/research/system-intelligence-architecture",
  "/research/adversarial-integration-protocol",
  "/research/strategic-intelligence-framework",
  "/research/ai-council-model",
  "/briefings/what-is-adversarial-review",
  "/briefings/after-bexar-county",
  "/divisions/criminal-defense",
  "/divisions/healthcare",
  "/divisions/consumer",
  "/divisions/immigration-humanitarian",
  "/divisions/institutional-accountability",
];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: "weekly", priority: route === "/" ? 1 : 0.7 }));
}
