import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageStructuredData from "@/components/PageStructuredData";
import { founderLinkedIn, pageMetadata, siteFacebook } from "@/lib/seo";

export const metadata = pageMetadata("/alexander-emilio-perez");

export default function FounderPage() {
  return (
    <main className="sist-evo research-document-page">
      <PageStructuredData path="/alexander-emilio-perez" />
      <Navbar />
      <div className="research-document-shell">
        <header className="research-document-hero">
          <div>
            <span className="eyebrow">SIST / FOUNDER & SYSTEM ARCHITECT</span>
            <h1>Alexander Emilio Perez</h1>
            <p>Founder and system architect of System Intelligence & Strategic Tactics (SIST), an independent AI research and intelligence-analysis platform based in Austin, Texas.</p>
          </div>
          <aside>
            <span>SYSTEM INTELLIGENCE & STRATEGIC TACTICS</span>
            <strong>FOUNDER / HUMAN AUTHORITY</strong>
            <small>Structured evidence. Adversarial review. Human-directed decisions.</small>
          </aside>
        </header>
        <div className="research-document-grid">
          <article className="research-document-body">
            <section>
              <h2>Building SIST</h2>
              <p>Alexander Emilio Perez created SIST to bring structure to difficult matters involving fragmented records, conflicting claims, missing evidence, and complex institutional processes. As founder, system architect, and ENFORCER, he retains human judgment and release authority. SIST performs the structured research, analysis, adversarial review, and report production documented in its public archive.</p>
            </section>
            <section>
              <h2>AI research and adversarial review</h2>
              <p>SIST combines independent AI analysis, research and verification, and adversarial review through a controlled intelligence pipeline. Its public architecture describes nine operating stages and five control gates, with a human ENFORCER responsible for judgment and release.</p>
              <p>The Adversarial Integration Protocol examines weak assumptions, contradictions, alternative explanations, and missing support before a finding advances. The public research documents describe the method and its limits.</p>
            </section>
            <section>
              <h2>Public reports and research</h2>
              <p>The SIST archive includes immigration record integrity, systemic due-process analysis, independent accountability, consumer disputes, privacy evidence infrastructure, and frontier AI safety. Public editions retain their sources, uncertainty, and evidence limits.</p>
              <ul>
                <li><Link href="/briefings">SIST briefings, reports, and white papers</Link></li>
                <li><Link href="/briefings/alexander-emilio-perez-building-sist">Alexander Emilio Perez: Building SIST</Link></li>
                <li><Link href="/system">SIST intelligence architecture and operating pipeline</Link></li>
                <li><Link href="/council">AI Council and human authority</Link></li>
                <li><Link href="/research/adversarial-integration-protocol">Adversarial Integration Protocol</Link></li>
                <li><Link href="/research">Public research and intelligence frameworks</Link></li>
                <li><Link href="/divisions">Research and record-analysis divisions</Link></li>
              </ul>
            </section>
          </article>
          <aside className="research-document-side">
            <span className="eyebrow">OFFICIAL LINKS</span>
            <h2>Connect with Alexander Emilio Perez</h2>
            <div className="research-doc-linkset">
              <a href={founderLinkedIn} target="_blank" rel="noopener noreferrer">Alexander Emilio Perez on LinkedIn</a>
              <a href={siteFacebook} target="_blank" rel="noopener noreferrer">SIST on Facebook</a>
              <a href="https://github.com/aperez8910-maker/SIST.PUBLIC" target="_blank" rel="noopener noreferrer">SIST public GitHub repository</a>
              <Link href="/contact">Contact SIST</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
