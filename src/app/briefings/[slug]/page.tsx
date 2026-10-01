import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageStructuredData from "@/components/PageStructuredData";
import { reports } from "@/data/briefings";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() { return reports.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!reports.some((report) => report.slug === slug)) notFound();
  return pageMetadata(`/briefings/${slug}`);
}
export default async function BriefingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const report = reports.find((item) => item.slug === slug);
  if (!report) notFound();
  return <main className="sist-evo research-document-page briefing-document">
    <PageStructuredData path={`/briefings/${slug}`} />
    <Navbar />
    <div className="research-document-shell">
      <Link href="/briefings" className="briefing-back">← ALL BRIEFINGS & REPORTS</Link>
      <header className="research-document-hero">
        <div><span className="eyebrow">SIST / {report.category}</span><h1>{report.title}</h1><p>{report.description}</p></div>
        <aside><span>PUBLICATION TYPE</span><strong>{report.edition}</strong><small>Published by System Intelligence & Strategic Tactics.<br />Founded by <Link href="/alexander-emilio-perez">Alexander Emilio Perez</Link>.</small></aside>
      </header>
      <div className="research-document-grid">
        <article className="research-document-body">
          {report.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.title}>
            <span className="research-section-index">{String(index + 1).padStart(2, "0")}</span>
            <h2>{section.title}</h2><p>{section.body}</p>
            {section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}
          </section>)}
          <section id="source-notes"><span className="eyebrow">SOURCE & EDITION NOTES</span><h2>About this public edition</h2><p>{report.source}</p><p>This webpage is an editorial briefing derived from the listed source material. It preserves the report’s main questions and limitations; it is not a reproduction of the original paper or its private exhibits. The source document’s date describes its evidence context, not the current status of a proceeding or system.</p>
            {report.references && <ul>{report.references.map(ref => <li key={ref.href}><a href={ref.href} target="_blank" rel="noopener noreferrer">{ref.label} ↗</a></li>)}</ul>}
          </section>
        </article>
        <aside className="research-document-side">
          <nav aria-label="Briefing contents"><span className="eyebrow">IN THIS BRIEFING</span><ol className="briefing-contents">{report.sections.map((section,index) => <li key={section.title}><a href={`#section-${index + 1}`}>{section.title}</a></li>)}<li><a href="#source-notes">Source & edition notes</a></li></ol></nav>
          <span className="eyebrow">EVIDENCE LIMITS</span><h2>Scope of the findings</h2><ul>{report.limits.map(item => <li key={item}>{item}</li>)}</ul>
          <div className="research-doc-linkset"><Link href="/briefings">← REPORT ARCHIVE</Link><Link href="/alexander-emilio-perez">MEET THE FOUNDER →</Link><Link href="/research">RESEARCH & METHODS →</Link></div>
        </aside>
      </div>
      <section className="command-section"><span className="eyebrow">CONTINUE READING</span><div className="briefing-related">{reports.filter(item => item.slug !== slug).slice(0,3).map(item => <Link href={`/briefings/${item.slug}`} key={item.slug}><small>{item.category}</small><strong>{item.title}</strong><span>READ BRIEFING →</span></Link>)}</div></section>
    </div>
  </main>;
}
