import type { MetadataRoute } from "next";
import { seoPages, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Genuine per-page update dates are not maintained; omit lastModified.
  // The registry contains canonical pages only, excluding redirect aliases.
  return Object.keys(seoPages).map((path) => ({ url: path === "/" ? siteUrl : `${siteUrl}${path}` }));
}
