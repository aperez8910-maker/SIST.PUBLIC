import Link from "next/link";
import Navbar from "@/components/Navbar";
import PageStructuredData from "@/components/PageStructuredData";
import { pipeline } from "@/data/pipeline";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/briefings/what-is-adversarial-review");

export default function AdversarialReviewPage() {
  return (
    <main className="sist-evo research-document-page">
      <PageStructuredData path="/briefings/what-is-adversarial-review" />
      <Navbar />
      <div className="research-document-shell">
        <header className="research-document-hero">
          <div>
            <span className="eyebrow">SIST / AIP™ FIELD NOTE 01</span>
            <h1>What is adversarial review?</h1>
            <p>A structured challenge to assumptions, evidence, and conclusions before a human approves the output.</p>
          </div>
          <aside><span>METHOD</span><strong>CHALLENGE / VERIFY / REVIEW</strong><small>Disagreement is evidence to examine, not a reason to force consensus.</small></aside>
        </header>
        <div className="research-document-grid">
          <article className="research-document-body">
            <section>
              <h2>How the review works</h2>
              <p>The Adversarial Integration Protocol (AIP™) assigns separate analytical roles to develop, challenge, and verify a working position. Review tests unsupported claims, contradictory records, alternative explanations, and missing evidence.</p>
              <p>A finding can advance, return for repair, or remain on HOLD. Agreement between AI systems is not proof. The human ENFORCER™ retains final release authority.</p>
            </section>
            <section>
              <h2>The nine-stage pipeline</h2>
              <ul>{pipeline.map(([number, title, detail]) => <li key={number}><strong>{number} / {title}</strong><br />{detail}</li>)}</ul>
            </section>
            <section>
              <h2>What a briefing preserves</h2>
              <p>The output keeps supported findings, source references, material dissent, uncertainty, and next steps together. Review can expose weaknesses; it cannot guarantee truth when the record is incomplete.</p>
              <p>SIST developed from the practical need to organize fragmented records and test conclusions under pressure.</p>
            </section>
          </article>
          <aside className="research-document-side">
            <span className="eyebrow">RELATED RESEARCH</span>
            <h2>Inspect the method</h2>
            <div className="research-doc-linkset">
              <Link href="/research/adversarial-integration-protocol">Adversarial Integration Protocol</Link>
              <Link href="/system">System architecture</Link>
              <Link href="/council">AI Council</Link>
              <Link href="/briefings">All briefings</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
