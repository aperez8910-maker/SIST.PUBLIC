import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageStructuredData from "@/components/PageStructuredData";
import { reports, fieldNotes } from "@/data/briefings";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata = pageMetadata("/briefings");

const categories = [...new Set(reports.map(report => report.category))];
const archiveSchema = {
  "@context":"https://schema.org",
  "@type":"CollectionPage",
  "@id":`${siteUrl}/briefings#webpage`,
  name:"SIST Public Reports Archive",
  url:`${siteUrl}/briefings`,
  mainEntity:{
    "@type":"ItemList",
    numberOfItems:reports.length,
    itemListElement:reports.map((report,index)=>({
      "@type":"ListItem",
      position:index+1,
      name:report.title,
      url:`${siteUrl}/briefings/${report.slug}`
    }))
  },
};

export default function BriefingsPage() {
  return <main className="sist-evo command-page command-briefings">
    <PageStructuredData path="/briefings" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(archiveSchema).replace(/</g,"\u003c")}} />
    <Navbar />

    <div className="command-shell">
      <section className="command-hero command-hero-briefings">
        <div className="command-hero-copy">
          <span className="eyebrow">SIST / PUBLIC REPORTS ARCHIVE</span>
          <h1>THE ACTUAL<br/><em>SIST OUTPUTS.</em></h1>
          <p>
            This archive reflects the reports as they were written. Each entry is tied to one named SIST source document,
            its issue date, its stated findings, and its own limitations. Later events, founder narrative, and unrelated reports
            are not blended into the source document.
          </p>
          <div className="command-actions">
            <a href="#published-reports" className="action-primary">OPEN REPORT ARCHIVE ↓</a>
            <Link href="/research" className="action-secondary">RESEARCH & METHODS →</Link>
          </div>
          <div className="command-metrics">
            <div><span>REPORTS</span><strong>{String(reports.length).padStart(2,"0")}</strong></div>
            <div><span>STANDARD</span><strong>SOURCE-FAITHFUL</strong></div>
            <div><span>EDITION</span><strong className="gold">PUBLIC ARCHIVE</strong></div>
            <div><span>METHOD NOTES</span><strong>{String(fieldNotes.length).padStart(2,"0")}</strong></div>
          </div>
        </div>

        <div className="briefing-archive-visual" aria-hidden="true">
          <div className="archive-grid" />
          <div className="archive-file archive-file-a"><span>SIST-IAD-2026-017</span><strong>USCIS MASTER ASSESSMENT</strong><i /></div>
          <div className="archive-file archive-file-b"><span>SIST-WP-2026-002</span><strong>CONSENT TO CONSEQUENCES</strong><i /></div>
          <div className="archive-stamp">SIST<br/><small>REPORTS</small></div>
        </div>
      </section>

      <section className="command-signal-rail">
        <span>SOURCE DOCUMENT</span>
        <span>REPORT ID</span>
        <span>ISSUE DATE</span>
        <span>STATED FINDINGS</span>
        <span>STATED LIMITATIONS</span>
      </section>

      <section className="command-section" id="published-reports">
        <div className="command-section-head">
          <span className="eyebrow">PUBLICATIONS & REPORTS</span>
          <div>
            <h2>One report. One source record.</h2>
            <p>
              The archive does not rewrite multiple matters into a new story. Every page below reflects the named SIST report itself:
              what it said, what it concluded, what it expressly did not conclude, and what remained unresolved when that document was issued.
            </p>
          </div>
        </div>

        <nav className="briefing-topic-nav" aria-label="Report topics">
          {categories.map((category,index)=><a href={`#report-${index}`} key={category}>{category}</a>)}
        </nav>

        <div className="briefing-record-grid">
          {reports.map((report,index)=>
            <Link
              id={`report-${categories.indexOf(report.category)}`}
              key={report.slug}
              href={`/briefings/${report.slug}`}
              className={`briefing-record briefing-tone-${index%2?"red":"gold"}`}
            >
              <div className="briefing-record-head">
                <span>{report.category}</span>
                <strong>{report.reportId || String(index+1).padStart(2,"0")}</strong>
              </div>
              <div className="briefing-record-body">
                <small>{report.edition}{report.date ? ` / ${report.date}` : ""}</small>
                <h2>{report.title}</h2>
                <p>{report.description}</p>
                <div className="briefing-source-chip">SOURCE: {report.sourceFile || report.source}</div>
                <b>OPEN REPORT REFLECTION →</b>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section className="command-section">
        <div className="command-section-head">
          <span className="eyebrow">METHOD NOTES</span>
          <div>
            <h2>Separate from the report archive.</h2>
            <p>Method explanations are kept outside the report record so they cannot be mistaken for part of a source publication.</p>
          </div>
        </div>
        <div className="briefing-related">
          {fieldNotes.map(note=>
            <Link key={note.href} href={note.href}>
              <small>{note.category}</small>
              <strong>{note.title}</strong>
              <p>{note.description}</p>
              <span>READ METHOD NOTE →</span>
            </Link>
          )}
        </div>
      </section>

      <section className="command-feature command-feature-gold">
        <span className="eyebrow">ARCHIVE RULE</span>
        <h2>No blended narrative.</h2>
        <p>
          A report page should never quietly import facts, outcomes, or conclusions from another document.
          If a later report changes, narrows, or supersedes an earlier position, both records should remain distinguishable.
        </p>
      </section>

      <section className="command-footer">
        <Link href="/">← HOME</Link>
        <span>SIST / PUBLIC REPORTS ARCHIVE</span>
        <Link href="/research">RESEARCH →</Link>
      </section>
    </div>
  </main>;
}
