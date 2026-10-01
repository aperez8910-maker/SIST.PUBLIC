import { pageSchema, type SeoPath } from "@/lib/seo";

export default function PageStructuredData({ path }: { path: SeoPath }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema(path)).replace(/</g, "\\u003c") }} />;
}

