import Link from "next/link";
import Navbar from "@/components/Navbar";

const research = [
  ["01","SIST Intelligence Architecture","How the controlled multi-stage system organizes evidence, reasoning, challenge, and deployment.","ARCHITECTURE","gold"],
  ["02","Adversarial Integration Protocol","The challenge layer used to expose unsupported assumptions, weak evidence, and fragile conclusions.","PROTOCOL","red"],
  ["03","Strategic Intelligence Framework","Methods for converting complex records into structured, decision-relevant intelligence.","FRAMEWORK","green"],
  ["04","AI Council Model","Independent analytical seats, visible dissent, adversarial review, and controlled synthesis.","COUNCIL MODEL","blue"],
] as const;

export default function ResearchPage(){
  return <main className="sist-evo command-page command-research">
    <Navbar/>
    <div className="command-shell">
      <section className="command-hero command-hero-research">
        <div className="command-hero-copy">
          <span className="eyebrow">SIST / RESEARCH & FRAMEWORKS</span>
          <h1>THE KNOWLEDGE<br/><em>BEHIND THE SYSTEM.</em></h1>
          <p>Research documents the public methods, control concepts, analytical frameworks, and validation questions behind System Intelligence & Strategic Tactics.</p>
          <div className="command-actions"><Link href="/system" className="action-primary">VIEW ARCHITECTURE ↗</Link><Link href="/briefings" className="action-secondary">FIELD BRIEFINGS →</Link></div>
          <div className="command-metrics">
            <div><span>NODES</span><strong>04</strong></div><div><span>METHOD</span><strong>STRUCTURED</strong></div><div><span>VALIDATION</span><strong className="gold">ONGOING</strong></div><div><span>ACCESS</span><strong>PUBLIC</strong></div>
          </div>
        </div>
        <div className="research-lab">
          <div className="research-axis research-axis-x"/><div className="research-axis research-axis-y"/>
          <div className="research-ring research-ring-a"/><div className="research-ring research-ring-b"/>
          {research.map(([n,,,kind],i)=><div key={n} className={`research-node research-node-${i+1}`}><span>{n}</span><strong>{kind}</strong><i/></div>)}
          <div className="research-core">SIST<small>KNOWLEDGE GRAPH</small></div>
        </div>
      </section>

      <section className="command-signal-rail"><span>METHODS / PUBLIC</span><span>PROTOCOLS / DOCUMENTED</span><span>VALIDATION / ACTIVE</span><span>FIELD LINK / CONNECTED</span><span>REVISION / CONTROLLED</span></section>

      <section className="command-section">
        <div className="command-section-head"><span className="eyebrow">RESEARCH NODES</span><div><h2>Architecture should be explainable.</h2><p>The public research layer documents what SIST is designed to do, where its limits are, and how stronger validation can test the claims made about the architecture.</p></div></div>
        <div className="research-node-grid">
          {research.map(([n,title,desc,kind,tone])=><article key={n} className={`research-card research-tone-${tone}`}>
            <div className="research-card-top"><span>{n}</span><small>{kind}</small><i/></div>
            <h2>{title}</h2><p>{desc}</p>
            <div className="research-card-foot"><span>RESEARCH NODE</span><b>OPEN / DOCUMENTED</b></div>
          </article>)}
        </div>
      </section>

      <section className="command-section research-validation">
        <article><span className="eyebrow">VALIDATION QUESTION</span><h2>Can the architecture catch defects a single pass misses?</h2><p>Controlled comparison should measure discovery, correction, error escape, HOLD behavior, reproducibility, cost, and latency across the same seeded cases.</p></article>
        <article><span className="eyebrow">RESEARCH PRINCIPLE</span><h2>Claims should be testable.</h2><p>SIST should not rely on visual sophistication or confident language as proof. Architecture claims become stronger when they can be reproduced and challenged against a defined baseline.</p></article>
      </section>

      <section className="command-footer"><Link href="/briefings">← BRIEFINGS</Link><span>SIST / RESEARCH & FRAMEWORKS</span><Link href="/system">SYSTEM →</Link></section>
    </div>
  </main>;
}
