import Link from "next/link";
import Navbar from "@/components/Navbar";

const pipeline = [
  ["01","INTAKE","Objectives, constraints, source material, and record boundaries are registered."],
  ["02","LIBRARIAN","The record is normalized, indexed, and made traceable."],
  ["03","INGESTOR","Facts, claims, dates, actors, and evidence are structured."],
  ["04","RESEARCHER","Missing context, authorities, records, and outside material are developed."],
  ["05","ANALYST","Patterns, contradictions, dependencies, and competing explanations are mapped."],
  ["06","LAWCLERK","Rules, standards, procedural posture, and legal relevance are tested."],
  ["07","COUNTERMEASURES","The working position is attacked and failure paths are surfaced."],
  ["08","BRIEFER","Surviving findings are converted into clear strategic intelligence."],
  ["09","DEPLOY MASTER","Final outputs move forward only after lineage, caveats, control state, and human release authority are preserved."],
] as const;

const gates = [
  ["G1","INTAKE","Record integrity"],
  ["G2","INGESTION","Source control"],
  ["G3","INTELLIGENCE","Analytical sufficiency"],
  ["G4","ADVERSARIAL","Challenge / defeat"],
  ["G5","DEPLOYMENT","Release authority"],
] as const;

export default function SystemPage(){
  return <main className="sist-evo command-page command-system">
    <Navbar/>
    <div className="command-shell">
      <section className="command-hero command-hero-system">
        <div className="command-hero-copy">
          <span className="eyebrow">SIST / SYSTEM ARCHITECTURE</span>
          <h1>THE SYSTEM<br/><em>UNDER LOAD.</em></h1>
          <p>SIST is a controlled multi-stage intelligence architecture designed to preserve source lineage, expose uncertainty, challenge working conclusions, and stop unsupported findings before deployment.</p>
          <div className="command-actions">
            <Link href="/interactive" className="action-primary">ENTER WORK FLOOR ↗</Link>
            <Link href="/council" className="action-secondary">VIEW COUNCIL →</Link>
          </div>
          <div className="command-metrics">
            <div><span>PIPELINE</span><strong>09 STAGES</strong></div>
            <div><span>CONTROL</span><strong>05 GATES</strong></div>
            <div><span>REVIEW</span><strong className="gold">ADVERSARIAL</strong></div>
            <div><span>STATE</span><strong>ACTIVE</strong></div>
          </div>
        </div>

        <div className="system-reactor" aria-label="SIST architecture visualization">
          <div className="reactor-orbit reactor-orbit-a"/>
          <div className="reactor-orbit reactor-orbit-b"/>
          <div className="reactor-orbit reactor-orbit-c"/>
          <div className="reactor-core"><span>SIST</span><small>INTELLIGENCE CORE</small></div>
          {["INTAKE","RESEARCH","ANALYSIS","AIP","VERIFY","DEPLOY"].map((x,i)=>
            <div key={x} className={`reactor-node reactor-node-${i+1}`}><i/>{x}</div>
          )}
          <div className="reactor-readout"><span>CONTROL STATE</span><strong>ALL GATES RESPONSIVE</strong></div>
        </div>
      </section>

      <section className="command-signal-rail">
        <span>PROVENANCE / ON</span><span>LINEAGE / ON</span><span>CHALLENGE / ON</span><span>HOLD / AVAILABLE</span><span>DEPLOY / CONTROLLED</span>
      </section>

      <section className="command-section">
        <div className="command-section-head">
          <span className="eyebrow">09-STAGE ORCHESTRATION</span>
          <div><h2>Intelligence moves through a controlled path.</h2><p>The stages do not simply produce more text. Each stage changes what the system knows, what it doubts, or what it is allowed to advance.</p></div>
        </div>
        <div className="system-pipeline">
          {pipeline.map(([n,t,d],i)=><article key={n} className={`system-stage ${i===6?"challenge":i===8?"verify":""}`}>
            <span>{n}</span><i/><h3>{t}</h3><p>{d}</p><small>{i===6?"ADVERSARIAL NODE":i===8?"CONTROLLED RELEASE":"PROCESS NODE"}</small>
          </article>)}
        </div>
      </section>

      <section className="command-section">
        <div className="command-section-head">
          <span className="eyebrow">GATE CONTROL</span>
          <div><h2>Nothing advances just because it sounds complete.</h2><p>Five control gates divide the lifecycle so a defect can be held, repaired, superseded, replaced, or stopped before deployment.</p></div>
        </div>
        <div className="gate-grid">
          {gates.map(([g,t,d],i)=><article key={g} className={`gate-card gate-${i+1}`}><span>{g}</span><h3>{t}</h3><p>{d}</p><div className="gate-status"><i/>ENFORCED</div></article>)}
        </div>
      </section>

      <section className="command-section system-dual">
        <article className="command-feature command-feature-gold">
          <span className="eyebrow">ADVERSARIAL INTEGRATION PROTOCOL</span>
          <h2>A conclusion must survive attack.</h2>
          <p>The AIP control layer forces the working position through contradiction, alternative explanations, evidentiary weakness, source problems, and failure-path analysis before it is treated as deployable intelligence.</p>
          <div className="feature-flow">{["POSITION","ATTACK","REPAIR","RE-TEST","SURVIVE / HOLD"].map(x=><span key={x}>{x}</span>)}</div>
        </article>
        <article className="command-feature command-feature-red">
          <span className="eyebrow">HOLD STATE</span>
          <h2>No evidence. No advancement.</h2>
          <p>HOLD is a deliberate system state. When a critical fact cannot be supported or a material contradiction remains unresolved, SIST can stop instead of converting uncertainty into a confident answer.</p>
          <div className="hold-indicator"><i/>HOLD AUTHORITY AVAILABLE</div>
        </article>
      </section>

      <section className="command-footer">
        <Link href="/">← HOME</Link><span>SIST / SYSTEM ARCHITECTURE</span><Link href="/council">COUNCIL →</Link>
      </section>
    </div>
  </main>;
}
