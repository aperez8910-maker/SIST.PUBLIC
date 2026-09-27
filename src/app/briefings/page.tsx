import Link from "next/link";
import Navbar from "@/components/Navbar";

const records=[
  {id:"01",type:"AIP™ FIELD NOTE",title:"What Is Adversarial Review?",desc:"An introduction to structured challenge, verification, controlled uncertainty, and human-directed synthesis.",href:"/briefings/what-is-adversarial-review",tone:"gold"},
  {id:"02",type:"COUNCIL RECORD",title:"After Bexar County",desc:"A field record examining what the Council observed across a prolonged real-world adversarial process.",href:"/briefings/after-bexar-county",tone:"red"},
] as const;

export default function BriefingsPage(){
  return <main className="sist-evo command-page command-briefings">
    <Navbar/>
    <div className="command-shell">
      <section className="command-hero command-hero-briefings">
        <div className="command-hero-copy">
          <span className="eyebrow">SIST / INTELLIGENCE BRIEFINGS</span>
          <h1>FIELD NOTES<br/><em>FROM THE SYSTEM.</em></h1>
          <p>Briefings document methods, field observations, adversarial lessons, and the reasoning architecture behind SIST without exposing proprietary orchestration instructions.</p>
          <div className="command-actions"><Link href="/research" className="action-primary">OPEN RESEARCH ↗</Link><Link href="/system" className="action-secondary">VIEW SYSTEM →</Link></div>
          <div className="command-metrics">
            <div><span>PUBLISHED</span><strong>02</strong></div><div><span>FORMAT</span><strong>FIELD RECORD</strong></div><div><span>REVIEW</span><strong className="gold">SOURCE-GROUNDED</strong></div><div><span>ARCHIVE</span><strong>ACTIVE</strong></div>
          </div>
        </div>
        <div className="briefing-archive-visual">
          <div className="archive-grid"/>
          <div className="archive-file archive-file-a"><span>AIP / 01</span><strong>ADVERSARIAL REVIEW</strong><i/></div>
          <div className="archive-file archive-file-b"><span>COUNCIL / 02</span><strong>FIELD RECORD</strong><i/></div>
          <div className="archive-stamp">SIST<br/><small>ARCHIVE</small></div>
        </div>
      </section>

      <section className="command-signal-rail"><span>ARCHIVE / ONLINE</span><span>PROVENANCE / TRACKED</span><span>FIELD NOTES / 02</span><span>RESEARCH LINK / ACTIVE</span><span>PUBLIC RECORD / OPEN</span></section>

      <section className="command-section">
        <div className="command-section-head"><span className="eyebrow">PUBLISHED RECORDS</span><div><h2>Intelligence worth keeping leaves a trace.</h2><p>Each briefing is presented as a record—not a disposable post—with context, source discipline, and a clear relationship to the broader SIST architecture.</p></div></div>
        <div className="briefing-record-grid">
          {records.map(r=><Link key={r.id} href={r.href} className={`briefing-record briefing-tone-${r.tone}`}>
            <div className="briefing-record-head"><span>{r.type}</span><strong>{r.id}</strong></div>
            <div className="briefing-record-body"><small>PUBLIC INTELLIGENCE RECORD</small><h2>{r.title}</h2><p>{r.desc}</p><b>READ FULL RECORD →</b></div>
            <div className="briefing-record-mark">{r.id}</div>
          </Link>)}
        </div>
      </section>

      <section className="command-feature command-feature-gold">
        <span className="eyebrow">ARCHIVE STANDARD</span><h2>Method, observation, and consequence.</h2><p>Briefings are intended to show how the architecture behaves in practice: what was challenged, what changed, what survived, and what still requires caution.</p>
      </section>

      <section className="command-footer"><Link href="/council">← COUNCIL</Link><span>SIST / INTELLIGENCE BRIEFINGS</span><Link href="/research">RESEARCH →</Link></section>
    </div>
  </main>;
}
