import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type IconName = "search" | "evidence" | "strategy" | "operations" | "institution" | "scales" | "health" | "consumer" | "court" | "target" | "binoculars" | "cross" | "puzzle" | "network" | "chess" | "shield" | "review" | "chart";

const methods: [string, string, IconName][] = [
  ["01", "DEFINE", "target"], ["02", "GATHER", "binoculars"], ["03", "CHALLENGE", "cross"],
  ["04", "DECONSTRUCT", "puzzle"], ["05", "SYNTHESIZE", "network"], ["06", "STRATEGIZE", "chess"],
  ["07", "EXECUTE", "shield"], ["08", "REVIEW", "review"], ["09", "IMPROVE", "chart"],
];

const divisions: [string, string, string, IconName][] = [
  ["LEGAL INTELLIGENCE", "Exposing weakness. Building stronger cases.", "gold", "scales"],
  ["HEALTHCARE ACCOUNTABILITY", "Patient first. Always. We hold systems accountable.", "green", "health"],
  ["CONSUMER ADVOCACY", "Protecting rights. Demanding fairness.", "blue", "consumer"],
  ["INSTITUTIONAL ACCOUNTABILITY", "Transparency. Integrity. Accountability.", "silver", "court"],
];

const social = [
  ["ASSUME NOTHING.", "VERIFY EVERYTHING.", "eagle"],
  ["STRATEGY ISN'T LUCK.", "IT'S INTELLIGENCE.", "chess"],
  ["COMPLEX PROBLEMS.", "STRATEGIC SOLUTIONS.", "search"],
  ["WE DON'T FOLLOW THE NARRATIVE.", "WE TEST IT.", "shield"],
];

function Icon({ name, size = 44 }: { name: IconName | "eagle"; size?: number }) {
  const common = { width: size, height: size, viewBox: "0 0 64 64", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "eagle") return <svg {...common}><path d="M8 23c8-8 17-11 24-8 7-3 16 0 24 8-8-2-14 0-19 5l-5 8-5-8c-5-5-11-7-19-5Z"/><path d="M24 25c4 3 7 5 8 10 1-5 4-7 8-10"/><circle cx="42" cy="24" r="1.5" fill="currentColor" stroke="none"/><path d="M31 35l-5 13M35 35l5 13"/></svg>;
  const paths: Record<string, ReactNode> = {
    search: <><circle cx="28" cy="28" r="14"/><path d="m39 39 14 14"/><path d="M28 20v16M20 28h16"/></>,
    evidence: <><circle cx="32" cy="32" r="22"/><circle cx="24" cy="28" r="5"/><circle cx="41" cy="21" r="3"/><circle cx="42" cy="42" r="5"/><path d="M28 30l10-7M28 34l9 6"/></>,
    strategy: <><path d="m17 48 30-32M19 18l27 28"/><path d="M11 14h12M41 50h12"/><path d="M17 10v8M47 46v8"/></>,
    operations: <><path d="M10 46h44M16 46V26h32v20M22 26v-8h20v8M32 18V10"/><circle cx="32" cy="38" r="5"/></>,
    institution: <><path d="M9 25h46L32 10 9 25Z"/><path d="M14 27v22M24 27v22M32 27v22M40 27v22M50 27v22M8 52h48"/></>,
    scales: <><path d="M32 11v41M18 18h28M11 52h42"/><path d="m18 19-9 17h18l-9-17ZM46 19l-9 17h18l-9-17Z"/><path d="M26 52h12"/></>,
    health: <><path d="M32 54V11M23 18h18M17 28h30"/><path d="M13 31c7-9 13-6 19 3 6-9 12-12 19-3"/><path d="M20 36c4 9 9 14 12 18 3-4 8-9 12-18"/></>,
    consumer: <><path d="M32 10 50 17v13c0 12-7 20-18 25-11-5-18-13-18-25V17l18-7Z"/><circle cx="25" cy="28" r="4"/><circle cx="39" cy="28" r="4"/><path d="M20 43c4-6 20-6 24 0"/></>,
    court: <><path d="M8 24h48M13 24l19-13 19 13M14 29v19M24 29v19M40 29v19M50 29v19M8 52h48"/></>,
    target: <><circle cx="32" cy="32" r="21"/><circle cx="32" cy="32" r="11"/><circle cx="32" cy="32" r="3"/><path d="m46 18 8-8M49 10h5v5"/></>,
    binoculars: <><circle cx="20" cy="34" r="10"/><circle cx="44" cy="34" r="10"/><path d="M26 29c3-5 9-5 12 0M16 25l-2-10h9l3 10M48 25l2-10h-9l-3 10M20 44v8M44 44v8"/></>,
    cross: <><path d="M22 14v36M42 14v36M14 22h36M14 42h36"/></>,
    puzzle: <><path d="M18 18h12c0-5 3-8 7-8s7 3 7 8h2v12c5 0 8 3 8 7s-3 7-8 7v2H34c0 5-3 8-7 8s-7-3-7-8h-2V34c5 0 8-3 8-7s-3-7-8-7Z"/></>,
    network: <><circle cx="32" cy="12" r="5"/><circle cx="14" cy="42" r="5"/><circle cx="50" cy="42" r="5"/><circle cx="32" cy="32" r="5"/><path d="m29 16-12 22M35 16l12 22M19 42h8M37 42h8M32 17v10"/></>,
    chess: <><path d="M25 12h14l-3 8 6 7H22l6-7-3-8ZM24 27l-4 17h24l-4-17M18 50h28"/></>,
    shield: <><path d="M32 8 51 16v14c0 13-8 22-19 27-11-5-19-14-19-27V16l19-8Z"/><path d="m23 32 6 6 13-14"/></>,
    review: <><circle cx="29" cy="29" r="15"/><path d="m40 40 12 12M22 29h14M29 22v14"/></>,
    chart: <><path d="M10 52h44M16 46V34h8v12M28 46V25h8v21M40 46V16h8v30"/></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}

export default function Home() {
  return (
    <main className="sist-home">
      <div className="sist-bg-grid" />
      <div className="sist-bg-glow" />

      <nav className="sist-nav">
        <div className="sist-nav-inner">
          <Link href="/" className="sist-brand"><Image src="/logo.png" alt="SIST" width={72} height={72} priority /><span><strong>SIST</strong><small>SYSTEM INTELLIGENCE<br />AND STRATEGIC TACTICS</small></span></Link>
          <div className="sist-nav-links"><Link href="/">HOME</Link><Link href="/divisions">DIVISIONS</Link><Link href="/interactive">SOLUTIONS</Link><Link href="/system">ABOUT</Link><Link href="/contact">CONTACT</Link></div>
        </div>
      </nav>

      <section className="sist-hero">
        <div className="sist-hero-copy">
          <p className="eyebrow">SYSTEM INTELLIGENCE &amp; STRATEGIC TACTICS</p>
          <h1>INTELLIGENCE<br /><span>UNDER PRESSURE.</span></h1>
          <div className="gold-rule" />
          <h2>CHALLENGE EVERYTHING. <b>TRUST WHAT SURVIVES.</b></h2>
          <p className="hero-body">Adversarial intelligence. Strategic advantage. Evidence-driven analysis for individuals, organizations, and institutions facing complex problems.</p>
          <div className="hero-actions"><Link href="/interactive" className="gold-button">EXPLORE SIST <span>↗</span></Link><Link href="/system" className="text-link">VIEW THE METHOD</Link></div>
        </div>
        <div className="sist-hero-art"><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-globe"><div /><div /><div /></div><div className="art-eagle"><Icon name="eagle" size={280} /></div><div className="art-city" /></div>
      </section>

      <section className="sist-capabilities">
        {["ADVERSARIAL ANALYSIS", "EVIDENCE INTELLIGENCE", "STRATEGIC SYNTHESIS", "OPERATIONAL ADVANTAGE", "INSTITUTIONAL ACCOUNTABILITY"].map((item, i) => <div key={item} className="capability"><Icon name={(["search", "evidence", "strategy", "operations", "institution"] as IconName[])[i]} size={40} /><span>{item}</span></div>)}
      </section>

      <section className="sist-method section-pad">
        <div className="section-heading"><p className="eyebrow">BUILT ON THE PEREZ METHOD</p><h2>NINE STEPS. <span>ONE DISCIPLINE.</span></h2></div>
        <div className="method-track">{methods.map(([num, title, icon], i) => <div className="method-step" key={num}><div className="method-icon"><Icon name={icon} size={40} /></div><span className="method-num">{num}</span><strong>{title}</strong>{i < methods.length - 1 && <i className="method-arrow">→</i>}</div>)}</div>
        <p className="method-close">DON&apos;T ACCEPT THE ANSWER. <b>ATTACK IT.</b></p>
      </section>

      <section className="sist-main-grid section-pad">
        <div className="promise-panel"><p className="eyebrow">THE SIST PROMISE</p><div className="promise-grid"><div className="promise-list">{["WE QUESTION.", "WE CHALLENGE.", "WE VERIFY.", "WE PROTECT.", "WE STRATEGIZE.", "WE DELIVER RESULTS."].map(x => <strong key={x}>{x}</strong>)}</div><div className="promise-copy"><p>SIST exists to bring truth, clarity, and strategic advantage to individuals and organizations facing the complex, the unfair, and the unquestioned.</p><b>INTELLIGENCE IS POWER.<br />STRATEGY IS VICTORY.</b></div></div></div>
        <div className="brand-panel"><div className="brand-products"><Image src="/logo.png" alt="SIST mark" width={150} height={150} /><div className="product-bottle">SIST<br /><small>CHALLENGE<br />EVERYTHING.</small></div><div className="product-shirt">SIST<small>SYSTEM INTELLIGENCE<br />AND STRATEGIC TACTICS</small></div></div></div>
      </section>

      <section className="sist-divisions section-pad"><div className="section-heading centered"><p className="eyebrow">SIST DIVISIONS</p><h2>INTELLIGENCE <span>IN ACTION.</span></h2></div><div className="division-grid">{divisions.map(([name, copy, tone, icon]) => <Link href="/divisions" className={`division-card ${tone}`} key={name}><div className="division-icon"><Icon name={icon} size={68} /></div><h3>{name}</h3><p>{copy}</p><span className="division-arrow">↗</span></Link>)}</div></section>

      <section className="sist-social section-pad"><div className="section-heading centered"><p className="eyebrow">SOCIAL MEDIA CONCEPTS</p><h2>THE BRAND <span>IN MOTION.</span></h2></div><div className="social-grid">{social.map(([a, b, icon]) => <div className="social-card" key={a}><div className="social-art"><Icon name={icon as "eagle" | IconName} size={90} /></div><h3>{a}<br /><span>{b}</span></h3><small>◉ SIST</small></div>)}</div></section>

      <section className="sist-bottom"><div><Icon name="institution" size={44} /><span><b>GLOBAL VISION</b>Local Impact</span></div><div><Icon name="shield" size={44} /><span><b>ADVERSARIAL BY DESIGN</b>Strategic by Purpose</span></div><div><Icon name="target" size={44} /><span><b>DATA. EVIDENCE. ANALYSIS.</b>Strategy.</span></div><div><Icon name="consumer" size={44} /><span><b>FOR INDIVIDUALS.</b>For Organizations. For Justice.</span></div><div className="bottom-tag"><b>CHALLENGE EVERYTHING.</b><span>TRUST WHAT SURVIVES.</span></div><Image src="/logo.png" alt="SIST" width={62} height={62} /></section>

      <footer className="sist-footer"><div><strong>SIST</strong> — SYSTEM INTELLIGENCE &amp; STRATEGIC TACTICS</div><div>ANALYZE. CHALLENGE. EXPOSE. ACT.</div><div>© 2026 SIST</div></footer>
    </main>
  );
}
