import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata = pageMetadata("/contact");

import Link from "next/link";
import Navbar from "@/components/Navbar";
import IntakeForm from "@/components/IntakeForm";

export default function ContactPage() {
  return (
    <main className="sist-evo command-page command-contact">
      <PageStructuredData path="/contact" />
      <Navbar />
      <div className="command-shell">
        <section className="contact-command-hero">
          <div>
            <span className="eyebrow">SIST / REQUEST BRIEFING</span>
            <h1>OPEN AN<br/><em>INTELLIGENCE INTAKE.</em></h1>
            <p>
              Tell us the objective, operating domain, available records, and desired outcome. Keep the first message high-level.
            </p>
          </div>
          <aside className="contact-channel-card">
            <div><span>CHANNEL</span><strong>PUBLIC INTAKE</strong></div>
            <div><span>FILES</span><strong>NOT COLLECTED HERE</strong></div>
            <div><span>REVIEW</span><strong>HUMAN DIRECTED</strong></div>
            <div><span>NEXT STEP</span><strong>HANDLING METHOD CONFIRMED</strong></div>
          </aside>
        </section>

        <section className="contact-intake-layout">
          <div className="contact-intake-copy">
            <span className="eyebrow">WHAT HAPPENS NEXT</span>
            <h2>Start with the objective.</h2>
            <p>We clarify the scope, identify the division, and confirm how any sensitive records should be shared.</p>
            <div className="contact-step-grid">
              <article><span>01</span><h3>OBJECTIVE</h3><p>What question or decision needs to be resolved?</p></article>
              <article><span>02</span><h3>RECORD</h3><p>What exists, what is missing, and where are the contradictions?</p></article>
              <article><span>03</span><h3>OUTPUT</h3><p>What should the intelligence product help you decide or prepare?</p></article>
              <article><span>04</span><h3>HANDLING</h3><p>Confirm how sensitive records should be transmitted before sending them.</p></article>
            </div>
            <div className="contact-scope-card">
              <strong>INDEPENDENT PLATFORM</strong>
              <p>SIST provides AI-assisted research, record analysis, adversarial review, and decision support. It is not a government agency, law firm, medical provider, or licensed representative.</p>
            </div>
            <Link href="/divisions" className="contact-domain-link">VIEW OPERATING DIVISIONS →</Link>
          </div>
          <div className="contact-form-panel">
            <div className="contact-form-head"><span>INTAKE / PUBLIC CHANNEL</span><strong>STEP 01</strong></div>
            <IntakeForm />
          </div>
        </section>
      </div>
    </main>
  );
}
