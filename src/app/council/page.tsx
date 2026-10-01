import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata = pageMetadata("/council");

import Link from "next/link";
import Navbar from "@/components/Navbar";

const seats = [
  {id:"01",name:"INDEPENDENT ANALYSIS",designation:"COUNCILMAN 1™",tone:"gold",body:"Develops an independent position from the record before synthesis pressure is introduced."},
  {id:"02",name:"ADVERSARIAL REVIEW",designation:"COUNCILWOMAN 2™",tone:"red",body:"Targets assumptions, weak links, contradictions, alternate explanations, and unsupported confidence."},
  {id:"03",name:"RESEARCH & VERIFICATION",designation:"COUNCILMAN 3™",tone:"green",body:"Tests whether the surviving position is supported by the record and identifies material gaps before release."},
] as const;

export default function CouncilPage(){
  return <main className="sist-evo command-page command-council">
      <PageStructuredData path="/council" />
    <Navbar/>
    <div className="command-shell">
      <section className="command-hero command-hero-council">
        <div className="command-hero-copy">
          <span className="eyebrow">SIST / COUNCIL CHAMBER</span>
          <h1>INDEPENDENT<br/><em>MINDS. ONE RECORD.</em></h1>
          <p>The Council is not a vote or a collection of characters. Three AI seats perform separate analytical functions while a human ENFORCER™ remains the final authority over synthesis and deployment. Evidence, dissent, and unresolved questions stay visible.</p>
          <div className="command-actions">
            <Link href="/interactive" className="action-primary">ENTER WORK FLOOR ↗</Link>
            <Link href="/system" className="action-secondary">SYSTEM ARCHITECTURE →</Link>
          </div>
          <div className="command-metrics">
            <div><span>AI SEATS</span><strong>03</strong></div>
            <div><span>HUMAN AUTHORITY</span><strong>01</strong></div>
            <div><span>CHALLENGE</span><strong className="gold">ACTIVE</strong></div>
            <div><span>SYNTHESIS</span><strong>CONTROLLED</strong></div>
          </div>
        </div>
        <div className="council-chamber">
          <div className="council-ring council-ring-a"/><div className="council-ring council-ring-b"/>
          {seats.map((s,i)=><div key={s.id} className={`council-orbit-seat council-seat-${i+1} council-tone-${s.tone}`}>
            <span>{s.id}</span><strong>{s.name}</strong><small>{s.designation}</small>
          </div>)}
          <div className="council-core"><span>SYNTHESIS</span><small>CONTROLLED POSITION</small></div>
        </div>
      </section>

      <section className="command-signal-rail">
        <span>INDEPENDENCE / PRESERVED</span><span>SHARED RECORD / ACTIVE</span><span>DISSENT / VISIBLE</span><span>CHALLENGE / ACTIVE</span><span>SYNTHESIS / CONTROLLED</span>
      </section>

      <section className="command-section">
        <div className="command-section-head"><span className="eyebrow">COUNCIL SEATS</span><div><h2>Each seat has a different job.</h2><p>Separation matters. The value comes from independent development and structured disagreement before a single synthesis is allowed to emerge.</p></div></div>
        <div className="council-seat-grid">
          {seats.map(s=><article key={s.id} className={`council-seat-card council-tone-${s.tone}`}>
            <div className="seat-top"><span>SEAT {s.id}</span><i/></div>
            <h2>{s.name}</h2><strong>{s.designation}</strong><p>{s.body}</p>
            <div className="seat-trace"><span/><span/><span/></div>
          </article>)}
        </div>
      </section>

      <section className="council-human-authority">
        <div>
          <span className="eyebrow">SEAT 00 / HUMAN AUTHORITY</span>
          <h2>ENFORCER™</h2>
          <p>The human operator controls objectives, resolves judgment calls, reviews the synthesis, and decides whether anything is released or acted on. No AI seat has final authority.</p>
        </div>
        <div className="human-authority-status"><i/><span>FINAL APPROVAL</span><strong>HUMAN CONTROLLED</strong></div>
      </section>

      <section className="command-section council-process">
        <article><span>01</span><h3>SEPARATE</h3><p>Each seat develops before seeing a synthesized answer.</p></article>
        <article><span>02</span><h3>CONFRONT</h3><p>Conflicts and weak points are made explicit instead of blended away.</p></article>
        <article><span>03</span><h3>RECONCILE</h3><p>Support, dissent, and unresolved issues are compared against the record.</p></article>
        <article><span>04</span><h3>SYNTHESIZE</h3><p>The surviving position is assembled with limitations still visible.</p></article>
      </section>

      <section className="command-feature command-feature-gold">
        <span className="eyebrow">COUNCIL PRINCIPLE</span>
        <h2>Agreement is not the objective. Defensibility is.</h2>
        <p>A strong synthesis can include disagreement. SIST is designed to preserve material dissent and uncertainty instead of manufacturing consensus.</p>
      </section>

      <section className="command-footer"><Link href="/system">← SYSTEM</Link><span>SIST / COUNCIL CHAMBER</span><Link href="/briefings">BRIEFINGS →</Link></section>
    </div>
  </main>;
}
