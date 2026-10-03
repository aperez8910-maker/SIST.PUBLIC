import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import PageStructuredData from "@/components/PageStructuredData";
import { reports } from "@/data/briefings";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return reports.map(({ slug }) => ({ slug }));
}

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
      <Link href="/briefings" className="briefing-back">← PUBLIC REPORTS ARCHIVE</Link>

      <header className="research-document-hero">
        <div>
          <span className="eyebrow">SIST / {report.category}</span>
          <h1>{report.title}</h1>
          <p>{report.description}</p>
        </div>
        <aside>
          <span>SOURCE DOCUMENT</span>
          <strong>{report.reportId || report.edition}</strong>
          {report.date && <small>ISSUED / {report.date}</small>}
          {report.sourceFile && <small>FILE / {report.sourceFile}</small>}
          {report.publicPdfStatus && <small>STATUS / {report.publicPdfStatus}</small>}
        </aside>
      </header>

      <div className="report-source-rule">
        <strong>SOURCE-FIDELITY RULE</strong>
        <p>
          This page reflects the named SIST report only. It does not merge later outcomes, founder commentary,
          separate investigations, or conclusions from another publication into this source record.
        </p>
      </div>

      <div className="research-document-grid">
        <article className="research-document-body">
          {report.sections.map((section, index) =>
            <section id={`section-${index + 1}`} key={section.title}>
              <span className="research-section-index">{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
              {section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}
            </section>
          )}

          <section id="source-notes">
            <span className="eyebrow">ORIGINAL SOURCE RECORD</span>
            <h2>{report.source}</h2>
            {report.reportId && <p><strong>Report / release ID:</strong> {report.reportId}</p>}
            {report.date && <p><strong>Issue date:</strong> {report.date}</p>}
            {report.sourceFile && <p><strong>Original file:</strong> {report.sourceFile}</p>}
            {report.publicPdfStatus === "SOURCE CONTAINS PRIVATE IDENTIFIERS" &&
              <p>
                The underlying source contains personal, account, claim, or case identifiers.
                This public page reflects the report's substantive record without embedding the unredacted source file.
              </p>
            }
            {report.references && <ul>
              {report.references.map(ref =>
                <li key={ref.href}>
                  <a href={ref.href} target="_blank" rel="noopener noreferrer">{ref.label} ↗</a>
                </li>
              )}
            </ul>}
          </section>
        </article>

        <aside className="research-document-side">
          <nav aria-label="Report contents">
            <span className="eyebrow">IN THIS REPORT</span>
            <ol className="briefing-contents">
              {report.sections.map((section,index) =>
                <li key={section.title}><a href={`#section-${index + 1}`}>{section.title}</a></li>
              )}
              <li><a href="#source-notes">Original source record</a></li>
            </ol>
          </nav>

          <span className="eyebrow">SOURCE LIMITS</span>
          <h2>What the report itself limits.</h2>
          <ul>{report.limits.map(item => <li key={item}>{item}</li>)}</ul>

          <div className="research-doc-linkset">
            <Link href="/briefings">← REPORT ARCHIVE</Link>
            <Link href="/research">RESEARCH & METHODS →</Link>
          </div>
        </aside>
      </div>

      <section className="command-section">
        <span className="eyebrow">OTHER SIST OUTPUTS</span>
        <div className="briefing-related">
          {reports.filter(item => item.slug !== slug).slice(0,3).map(item =>
            <Link href={`/briefings/${item.slug}`} key={item.slug}>
              <small>{item.category}</small>
              <strong>{item.title}</strong>
              <span>OPEN REPORT →</span>
            </Link>
          )}
        </div>
      </section>
    </div>
  </main>;
}
