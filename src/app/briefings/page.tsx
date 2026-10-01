import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageStructuredData from "@/components/PageStructuredData";
import { reports, fieldNotes } from "@/data/briefings";
import { pageMetadata, siteUrl } from "@/lib/seo";

export const metadata = pageMetadata("/briefings");
const methodPaths = ["/research/system-intelligence-architecture", "/research/adversarial-integration-protocol", "/research/strategic-intelligence-framework", "/research/ai-council-model"] as const;
const methodTitles = ["Intelligence Architecture", "Adversarial Integration Protocol", "Strategic Intelligence Framework", "AI Council Model"];
const categories = [...new Set(reports.map(report => report.category))];
const count = reports.length + fieldNotes.length;
const archiveSchema = {
  "@context":"https://schema.org", "@type":"CollectionPage", "@id":`${siteUrl}/briefings#webpage`,
  name:"SIST Briefings & Report Archive", url:`${siteUrl}/briefings`,
  mainEntity:{"@type":"ItemList", numberOfItems:count, itemListElement:[...reports.map(report=>({title:report.title,href:`/briefings/${report.slug}`})),...fieldNotes].map((item,index)=>({"@type":"ListItem",position:index+1,name:item.title,url:`${siteUrl}${item.href}`}))},
};
export default function BriefingsPage() {
  return <main className="sist-evo command-page command-briefings">
    <PageStructuredData path="/briefings" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(archiveSchema).replace(/</g,"\\u003c")}} />
    <Navbar />
    <div className="command-shell">
      <section className="command-hero command-hero-briefings">
        <div className="command-hero-copy"><span className="eyebrow">SIST / BRIEFINGS & REPORT ARCHIVE</span>
          <h1>THE WORK.<br /><em>THE EVIDENCE.</em></h1>
          <p>Investigations, discoveries, white papers, and field reports produced by System Intelligence & Strategic Tactics (SIST). See what we examined, what we found, and why it matters.</p>
          <div className="command-actions"><a href="#published-reports" className="action-primary">EXPLORE REPORTS ↓</a><Link href="/alexander-emilio-perez" className="action-secondary">MEET THE FOUNDER →</Link></div>
          <div className="command-metrics"><div><span>BRIEFINGS</span><strong>{String(count).padStart(2,"0")}</strong></div><div><span>COVERAGE</span><strong>RESEARCH & FIELD</strong></div><div><span>EDITION</span><strong className="gold">PUBLIC</strong></div><div><span>METHODS</span><strong>{methodPaths.length} DOCUMENTS</strong></div></div>
        </div>
        <div className="briefing-archive-visual" aria-hidden="true"><div className="archive-grid" /><div className="archive-file archive-file-a"><span>IMMIGRATION / REPORT</span><strong>RECORD INTEGRITY</strong><i /></div><div className="archive-file archive-file-b"><span>DUE PROCESS / REPORT</span><strong>PROCEDURAL ACCOUNTABILITY</strong><i /></div><div className="archive-stamp">SIST<br /><small>ARCHIVE</small></div></div>
      </section>
      <section className="command-signal-rail"><span>IMMIGRATION</span><span>DUE PROCESS</span><span>AI SAFETY</span><span>CONSUMER ADVOCACY</span><span>PRIVACY & VALIDATION</span></section>
      <section className="command-feature command-feature-gold briefing-founder"><span className="eyebrow">FOUNDER / ALEXANDER EMILIO PEREZ</span><h2>The person behind the process.</h2><p>Alexander Emilio Perez founded and designed SIST and retains human authority as ENFORCER. SIST conducts the analysis and produces the investigations, reports, research frameworks, and public findings collected here.</p><div className="command-actions"><Link href="/briefings/alexander-emilio-perez-building-sist" className="action-primary">READ THE FOUNDER PERSPECTIVE →</Link><Link href="/alexander-emilio-perez" className="action-secondary">FOUNDER PROFILE ↗</Link></div></section>
      <section className="command-section" id="published-reports"><div className="command-section-head"><span className="eyebrow">PUBLIC REPORTS & WHITE PAPERS</span><div><h2>The investigations behind the findings.</h2><p>Each briefing explains the investigation, the discoveries, and their significance. Explore immigration record errors, procedural accountability, consumer disputes, privacy evidence, AI safety, and the results of adversarial review.</p></div></div>
        <nav className="briefing-topic-nav" aria-label="Report topics">{categories.map((category,index)=><a href={`#report-${index}`} key={category}>{category}</a>)}</nav>
        <div className="briefing-record-grid">{reports.map((report,index)=><Link id={`report-${categories.indexOf(report.category)}`} key={report.slug} href={`/briefings/${report.slug}`} className={`briefing-record briefing-tone-${index%2?"red":"gold"}`}><div className="briefing-record-head"><span>{report.category}</span><strong>{String(index+1).padStart(2,"0")}</strong></div><div className="briefing-record-body"><small>{report.edition}</small><h2>{report.title}</h2><p>{report.description}</p><b>READ PUBLIC BRIEFING →</b></div></Link>)}</div>
      </section>
      <section className="command-section"><div className="command-section-head"><span className="eyebrow">METHOD & FIELD REFLECTIONS</span><div><h2>How the work gets done.</h2><p>Understand adversarial review and the human responsibility behind the analysis.</p></div></div><div className="briefing-related">{fieldNotes.map(note=><Link key={note.href} href={note.href}><small>{note.category}</small><strong>{note.title}</strong><p>{note.description}</p><span>READ FIELD NOTE →</span></Link>)}</div></section>
      <section className="command-section"><div className="command-section-head"><span className="eyebrow">RESEARCH DOCUMENTS</span><div><h2>The architecture behind the reports.</h2><p>Public methods remain available alongside the archive.</p></div></div><div className="briefing-related">{methodPaths.map((path,index)=><Link key={path} href={path}><small>PUBLIC METHOD DOCUMENT</small><strong>{methodTitles[index]}</strong><span>OPEN RESEARCH →</span></Link>)}</div></section>
      <section className="command-feature command-feature-gold"><span className="eyebrow">THE SIST METHOD</span><h2>Discover. Verify. Challenge. Explain.</h2><p>We reconstruct the record, compare conflicting accounts, test alternative explanations, and publish findings with the sources that support them. Where the work identifies an unanswered question or a proposed design, the briefing states that directly.</p></section>
      <section className="command-footer"><Link href="/alexander-emilio-perez">← FOUNDER</Link><span>SIST / BRIEFINGS & REPORTS</span><Link href="/research">RESEARCH →</Link></section>
    </div>
  </main>;
}
