import Image from "next/image";
import Link from "next/link";
import LiveIntelligenceMap from "./LiveIntelligenceMap";

const method = [
  ["01", "DEFINE", "◎"], ["02", "GATHER", "◉"], ["03", "CHALLENGE", "⚔"],
  ["04", "DECONSTRUCT", "✦"], ["05", "SYNTHESIZE", "⌘"], ["06", "STRATEGIZE", "♞"],
  ["07", "EXECUTE", "⬟"], ["08", "REVIEW", "⌕"], ["09", "IMPROVE", "▥"],
] as const;

const divisions = [
  ["LEGAL INTELLIGENCE", "Exposing Weakness. Building Stronger Cases.", "⚖", "legal"],
  ["HEALTHCARE ACCOUNTABILITY", "Patient First. Always. We Hold Systems Accountable.", "⚕", "health"],
  ["CONSUMER ADVOCACY", "Protecting Rights. Demanding Fairness.", "♜", "consumer"],
  ["INSTITUTIONAL ACCOUNTABILITY", "Transparency. Integrity. Accountability.", "⌂", "institution"],
] as const;

function Eagle() {
  return <svg className="eagle" viewBox="0 0 600 360" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="2" opacity=".82"><path d="M300 78c-35-38-78-45-124-20 35 2 59 14 82 39-65-26-117-19-174 19 65-3 113 14 154 44-62-12-120 5-170 46 69-15 127-8 180 18-47 2-90 21-127 55 59-21 118-22 178-3"/><path d="M300 78c35-38 78-45 124-20-35 2-59 14-82 39 65-26 117-19 174 19-65-3-113 14-154 44 62-12 120 5 170 46-69-15-127-8-180 18 47 2 90 21 127 55-59-21-118-22-178-3"/><path d="M300 72c-24 22-34 49-31 82l31 37 31-37c3-33-7-60-31-82Z"/><path d="M270 190c-28 30-39 66-34 108 25-24 46-39 64-46"/><path d="M330 190c28 30 39 66 34 108-25-24-46-39-64-46"/><path d="M284 176h32l-16 22Z"/><circle cx="291" cy="118" r="3" fill="currentColor"/><circle cx="309" cy="118" r="3" fill="currentColor"/><path d="M300 125v28M281 154h38"/></g></svg>;
}

export default function Home() {
  return (
    <main className="poster-site">
      <header className="poster-nav"><Link href="/" className="brand-lockup"><Image src="/logo.png" alt="SIST" width={74} height={74} priority/><span><b>SIST</b><small>SYSTEM INTELLIGENCE<br/>AND STRATEGIC TACTICS</small></span></Link><nav><Link href="/">HOME</Link><Link href="/divisions">DIVISIONS</Link><Link href="/interactive">SOLUTIONS</Link><Link href="/system">ABOUT</Link><Link href="/contact">CONTACT</Link></nav></header>
      <div className="poster-grid">
        <section className="panel hero-panel"><div className="panel-corner">SIST / 001</div><div className="hero-copy"><div className="micro">SYSTEM INTELLIGENCE &amp; STRATEGIC TACTICS</div><h1>INTELLIGENCE<br/><em>UNDER PRESSURE.</em></h1><div className="gold-line"/><h2>CHALLENGE EVERYTHING. <strong>TRUST WHAT SURVIVES.</strong></h2></div><Eagle/><div className="skyline"/><div className="cap-row">{[["⌕","ADVERSARIAL","ANALYSIS"],["◌","EVIDENCE","INTELLIGENCE"],["⌘","STRATEGIC","SYNTHESIS"],["⌂","OPERATIONAL","ADVANTAGE"],["⬟","INSTITUTIONAL","ACCOUNTABILITY"]].map(([i,a,b])=><div key={a}><span>{i}</span><b>{a}<br/>{b}</b></div>)}</div><div className="panel-tagline">A N A L Y Z E . &nbsp; C H A L L E N G E . &nbsp; E X P O S E . &nbsp; A C T .</div></section>
        <section className="panel action-panel"><div className="section-label">BRAND IN ACTION</div><div className="device-scene"><div className="phone"><Image src="/logo.png" alt="SIST" width={64} height={64}/><b>SIST</b><small>ANALYZE<br/>CHALLENGE<br/>EXPOSE<br/>ACT</small></div><div className="laptop"><div className="screen"><div className="mini-nav">SIST　 HOME　 DIVISIONS　 SOLUTIONS　 ABOUT　 CONTACT</div><div className="screen-copy"><b>COMPLEX PROBLEMS.<br/>CLEARER STRATEGY.</b><small>Adversarial Intelligence. Strategic Advantage.</small><span>EXPLORE SIST</span></div><div className="screen-globe"/></div></div><div className="mug"><Image src="/logo.png" alt="SIST" width={48} height={48}/><b>SIST</b></div></div><div className="action-caption">ADVERSARIAL INTELLIGENCE. <strong>STRATEGIC ADVANTAGE.</strong></div></section>
        <section className="panel method-panel"><div className="section-label">BUILT ON THE PEREZ METHOD</div><div className="method-grid">{method.map(([n,t,i])=><div className="method-item" key={n}><div className="method-seal">{i}</div><small>{n}</small><b>{t}</b></div>)}</div><div className="method-close">DON&apos;T ACCEPT THE ANSWER. <strong>ATTACK IT.</strong></div></section>
        <section className="panel divisions-panel"><div className="section-label">SIST DIVISIONS</div><div className="division-grid">{divisions.map(([name,copy,icon,tone])=><Link href="/divisions" className={`division ${tone}`} key={name}><div className="division-seal">{icon}</div><b>{name}</b><p>{copy}</p></Link>)}</div></section>
        <section className="panel promise-panel"><div className="section-label">THE SIST PROMISE</div><div className="promise-layout"><div className="figure"><div className="figure-head"/><div className="figure-body"/></div><div className="promise-text"><div className="promise-lines">WE QUESTION.<br/>WE CHALLENGE.<br/>WE VERIFY.<br/>WE PROTECT.<br/>WE STRATEGIZE.<br/>WE DELIVER RESULTS.</div><p>SIST exists to bring truth, clarity, and strategic advantage to individuals and organizations facing the complex, the unfair, and the unquestioned.</p><strong>INTELLIGENCE IS POWER.<br/>STRATEGY IS VICTORY.</strong></div></div></section>
        <section className="panel merch-panel"><div className="merch"><div className="cap"><Image src="/logo.png" alt="SIST" width={72} height={72}/><span>SIST</span></div><div className="bottle"><Image src="/logo.png" alt="SIST" width={55} height={55}/><span>SIST</span></div><div className="hoodie"><Image src="/logo.png" alt="SIST" width={70} height={70}/><span>SIST</span><small>SYSTEM INTELLIGENCE<br/>AND STRATEGIC TACTICS</small></div></div></section>
        <section className="panel social-panel"><div className="section-label">SOCIAL MEDIA CONCEPTS</div><div className="social-grid"><div><Eagle/><b>ASSUME<br/>NOTHING.</b><strong>VERIFY EVERYTHING.</strong><small>◉ SIST</small></div><div><span className="chess">♞</span><b>STRATEGY<br/>ISN&apos;T LUCK.</b><strong>IT&apos;S INTELLIGENCE.</strong><small>◉ SIST</small></div><div><span className="search-art">⌕</span><b>COMPLEX<br/>PROBLEMS.</b><strong>STRATEGIC SOLUTIONS.</strong><small>◉ SIST</small></div><div><span className="shield-art">⬟</span><b>WE DON&apos;T<br/>FOLLOW THE NARRATIVE.</b><strong>WE TEST IT.</strong><small>◉ SIST</small></div></div></section>
      </div>
      <LiveIntelligenceMap />
      <footer className="poster-footer"><div>◉ <b>GLOBAL VISION</b><span>Local Impact</span></div><div>⬟ <b>ADVERSARIAL BY DESIGN</b><span>Strategic by Purpose</span></div><div>◎ <b>DATA. EVIDENCE. ANALYSIS.</b><span>Strategy.</span></div><div>♜ <b>FOR INDIVIDUALS.</b><span>For Organizations. For Justice.</span></div><div className="footer-claim"><b>CHALLENGE EVERYTHING.</b><strong>TRUST WHAT SURVIVES.</strong></div><Image src="/logo.png" alt="SIST" width={58} height={58}/></footer>
    </main>
  );
}
