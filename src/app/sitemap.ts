import type { MetadataRoute } from "next";

const base = "https://systemintelligenceandstrategictactics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/system", "/council", "/divisions", "/research", "/briefings", "/interactive", "/contact"];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: "weekly", priority: route === "/" ? 1 : 0.7 }));
}
