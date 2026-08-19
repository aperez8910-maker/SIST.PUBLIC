import Image from "next/image";
import Link from "next/link";
import LiveIntelligenceMap from "./LiveIntelligenceMap";

const method = [
  ["01", "DEFINE", "◎"], ["02", "GATHER", "◉"], ["03", "CHALLENGE", "⚔"],
  ["04", "DECONSTRUCT", "✦"], ["05", "SYNTHESIZE", "⌘"], ["06", "STRATEGIZE", "♞"],
  ["07", "EXECUTE", "⬟"], ["08", "REVIEW", "⌕"], ["09", "IMPROVE", "▥"]
] as const;

const divisions = [
  ["LEGAL INTELLIGENCE", "Exposing weakness. Building stronger cases.", "⚖"],
  ["HEALTHCARE ACCOUNTABILITY", "Patient first. Systems accountable.", "⚕"],
  ["CONSUMER ADVOCACY", "Protecting rights. Demanding fairness.", "♜"],
  ["INSTITUTIONAL ACCOUNTABILITY", "Transparency. Integrity. Accountability.", "⌂"]
] as const;

export default function Home() {
  return (
    <main className="sist-command-site">
      <header className="command-nav">
        <Link href="/" className="command-brand">
          <Image src="/logo.png" alt="SIST" width={58} height={58} priority />
          <span><strong>SIST™</strong><small>SYSTEM INTELLIGENCE<br />AND STRATEGIC TACTICS™</small></span>
        </Link>
        <nav>
          <Link href="/">HOME</Link><Link href="/divisions">DIVISIONS</Link>
          <Link href="/interactive">SOLUTIONS</Link><Link href="/system">ABOUT</Link><Link href="/contact">CONTACT</Link>
        </nav>
      </header>

      <section className="command-hero">
        <Image className="command-art" src="/sist-command-center.svg" alt="SIST adversarial intelligence command center" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow">SYSTEM INTELLIGENCE &amp; STRATEGIC TACTICS™</div>
          <h1>ADVERSARIAL<br /><em>INTELLIGENCE.</em></h1>
          <p>REAL-WORLD RESULTS.</p>
          <div className="hero-rule" />
          <span>A record-driven intelligence system for high-stakes institutions.</span>
        </div>
        <div className="hero-badge"><i /> SYSTEM ONLINE<br /><b>LIVE INTELLIGENCE NETWORK</b></div>
      </section>

      <section className="aip-panel">
        <div className="section-kicker">THE OPERATING FRAMEWORK</div>
        <h2>ADVERSARIAL INTEGRATION PROTOCOL<span>™</span></h2>
        <p>Challenge every assumption. Deconstruct every claim. Synthesize what survives into an accountable strategic record.</p>
        <div className="protocol-grid">
          {method.map(([n, title, icon]) => <div className="protocol-node" key={n}><span>{icon}</span><small>{n}</small><b>{title}</b></div>)}
        </div>
        <div className="protocol-close">DON&apos;T ACCEPT THE ANSWER. <strong>ATTACK IT.</strong></div>
      </section>

      <section className="network-wrap">
        <div className="network-heading"><div><span>01 / LIVE SYSTEM</span><h2>INTELLIGENCE NETWORK</h2><p>Interactive nodes, routes, verification states and operational relationships remain live.</p></div><strong><i /> LIVE</strong></div>
        <LiveIntelligenceMap />
      </section>

      <section className="divisions-wrap">
        <div className="section-kicker">SIST DIVISIONS</div>
        <div className="division-grid">
          {divisions.map(([name, copy, icon]) => <Link href="/divisions" className="division-card" key={name}><span>{icon}</span><h3>{name}</h3><p>{copy}</p><b>ENTER DIVISION →</b></Link>)}
        </div>
      </section>

      <section className="promise">
        <div><span className="section-kicker">THE SIST PROMISE</span><h2>BUILD THE RECORD.<br /><em>CHANGE THE LEVERAGE.</em></h2></div>
        <div className="promise-copy"><b>WE QUESTION.<br />WE CHALLENGE.<br />WE VERIFY.<br />WE PROTECT.<br />WE STRATEGIZE.</b><p>SIST helps transform fragmented documents, filings, evidence and narrative into disciplined, reviewable written work for people facing high-stakes institutions.</p></div>
      </section>

      <footer className="command-footer"><span>SIST™</span><small>SYSTEM INTELLIGENCE AND STRATEGIC TACTICS™</small><b>ANALYZE • CHALLENGE • EXPOSE • ACT</b></footer>
    </main>
  );
}

<style>{`
:global(*){box-sizing:border-box}:global(body){margin:0;background:#020405;color:#e9e4d8}:global(a){color:inherit;text-decoration:none}
.sist-command-site{min-height:100vh;background:radial-gradient(circle at 50% 10%,#111b20 0,#030607 38%,#010202 100%);font-family:Arial,sans-serif;letter-spacing:.03em;overflow:hidden}.command-nav{height:78px;display:flex;align-items:center;justify-content:space-between;padding:10px clamp(18px,4vw,64px);border-bottom:1px solid rgba(215,173,82,.22);background:rgba(2,4,5,.92);backdrop-filter:blur(16px);position:relative;z-index:10}.command-brand{display:flex;align-items:center;gap:12px}.command-brand img{filter:drop-shadow(0 0 14px rgba(215,173,82,.3))}.command-brand strong{display:block;font:700 27px Georgia,serif;letter-spacing:.16em}.command-brand small{display:block;font-size:7px;line-height:1.45;letter-spacing:.22em;color:#aaa49a}.command-nav nav{display:flex;gap:clamp(12px,2.4vw,32px);font-size:8px;font-weight:700;letter-spacing:.16em;color:#aaa69d}.command-nav nav a:hover{color:#d9ae55}
.command-hero{position:relative;min-height:min(76vw,760px);border-bottom:1px solid rgba(215,173,82,.25);isolation:isolate}.command-art{object-fit:cover;object-position:center}.hero-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(1,3,4,.88) 0%,rgba(1,3,4,.48) 45%,rgba(1,3,4,.12) 100%),linear-gradient(0deg,#020405 0%,transparent 24%,transparent 78%,#020405 100%);z-index:1}.hero-content{position:absolute;z-index:2;left:clamp(24px,7vw,110px);top:50%;transform:translateY(-50%);max-width:620px}.eyebrow,.section-kicker{font-size:9px;font-weight:700;letter-spacing:.34em;color:#d4aa50}.hero-content h1{margin:18px 0 0;font:700 clamp(48px,7vw,92px)/.88 Arial,sans-serif;letter-spacing:.03em;text-shadow:0 10px 40px #000}.hero-content h1 em{font-style:normal;color:#d5aa50}.hero-content>p{margin:14px 0;font-size:clamp(18px,2vw,28px);font-weight:700;letter-spacing:.2em}.hero-rule{width:160px;height:1px;background:linear-gradient(90deg,#f0c966,transparent);margin:24px 0}.hero-content>span{display:block;max-width:460px;color:#aaa59b;font-size:11px;line-height:1.8;letter-spacing:.1em}.hero-badge{position:absolute;z-index:2;right:clamp(18px,5vw,70px);bottom:40px;border:1px solid rgba(215,173,82,.42);padding:12px 16px;color:#9d9a91;font-size:7px;letter-spacing:.18em;background:rgba(3,7,8,.7);backdrop-filter:blur(10px)}.hero-badge i,.network-heading i{display:inline-block;width:6px;height:6px;border-radius:50%;background:#86ae8c;box-shadow:0 0 12px #86ae8c;margin-right:8px}.hero-badge b{display:block;color:#d6ae55;margin-top:7px}
.aip-panel,.divisions-wrap,.promise{max-width:1480px;margin:auto}.aip-panel{padding:80px clamp(20px,5vw,80px) 70px;text-align:center}.aip-panel h2{margin:12px 0;font:400 clamp(32px,5vw,62px)/1 Georgia,serif;letter-spacing:.08em}.aip-panel h2 span{font:12px Arial;color:#d5aa50;vertical-align:top}.aip-panel>p{max-width:760px;margin:0 auto 42px;color:#918d85;font-size:11px;line-height:1.9}.protocol-grid{display:grid;grid-template-columns:repeat(9,1fr);border-top:1px solid rgba(215,173,82,.25);border-bottom:1px solid rgba(215,173,82,.25)}.protocol-node{min-height:125px;padding:18px 7px;position:relative;border-right:1px solid rgba(215,173,82,.12);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px}.protocol-node:last-child{border:0}.protocol-node span{width:48px;height:48px;border:1px solid #b98c3d;border-radius:50%;display:grid;place-items:center;color:#e2b85c;font-size:21px;box-shadow:inset 0 0 18px rgba(215,173,82,.08),0 0 20px rgba(215,173,82,.05)}.protocol-node small{font-size:7px;color:#77736c}.protocol-node b{font-size:7px;letter-spacing:.1em}.protocol-close{margin-top:30px;font-size:9px;letter-spacing:.3em;color:#aaa59c}.protocol-close strong{color:#d6aa51}
.network-wrap{padding:40px clamp(14px,4vw,60px) 70px;background:linear-gradient(180deg,#030506,#071014,#030506);border-top:1px solid rgba(215,173,82,.18);border-bottom:1px solid rgba(215,173,82,.18)}.network-heading{max-width:1360px;margin:0 auto 22px;display:flex;justify-content:space-between;align-items:end}.network-heading span{font-size:8px;color:#d3a74d;letter-spacing:.28em}.network-heading h2{margin:7px 0;font:400 clamp(30px,4vw,52px) Georgia,serif}.network-heading p{margin:0;color:#85827b;font-size:10px}.network-heading>strong{border:1px solid rgba(134,174,140,.35);padding:10px 14px;color:#8eb193;font-size:8px;letter-spacing:.2em}
.divisions-wrap{padding:80px clamp(20px,5vw,80px)}.division-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:25px}.division-card{min-height:250px;padding:28px 24px;border:1px solid rgba(215,173,82,.22);background:linear-gradient(145deg,rgba(17,24,27,.9),rgba(3,6,7,.96));box-shadow:inset 0 0 35px rgba(215,173,82,.025),0 20px 50px rgba(0,0,0,.35);transition:.25s transform,.25s border-color}.division-card:hover{transform:translateY(-6px);border-color:#c99d4b}.division-card>span{font-size:42px;color:#d5aa50}.division-card h3{font:700 15px/1.2 Georgia,serif;letter-spacing:.12em;margin:24px 0 10px}.division-card p{color:#88847c;font-size:10px;line-height:1.7}.division-card b{display:block;margin-top:25px;color:#d5aa50;font-size:7px;letter-spacing:.2em}
.promise{padding:80px clamp(20px,5vw,80px);display:grid;grid-template-columns:1fr 1fr;gap:70px;border-top:1px solid rgba(215,173,82,.18)}.promise h2{font:400 clamp(35px,5vw,65px)/.98 Georgia,serif;margin:18px 0}.promise h2 em{font-style:normal;color:#d5aa50}.promise-copy{border-left:1px solid #8d6828;padding-left:35px}.promise-copy>b{font-size:15px;line-height:1.9;letter-spacing:.2em}.promise-copy p{color:#8f8b83;font-size:11px;line-height:1.9;max-width:520px}.command-footer{padding:35px clamp(20px,5vw,70px);display:flex;align-items:center;gap:20px;border-top:1px solid rgba(215,173,82,.2);background:#010202}.command-footer>span{font:700 28px Georgia,serif;color:#d5aa50}.command-footer small{font-size:7px;letter-spacing:.2em;color:#77736c}.command-footer b{margin-left:auto;font-size:7px;letter-spacing:.2em;color:#d5aa50}
@media(max-width:900px){.command-nav nav{gap:12px}.protocol-grid{grid-template-columns:repeat(3,1fr)}.protocol-node:nth-child(3n){border-right:0}.division-grid{grid-template-columns:repeat(2,1fr)}.promise{gap:35px}.command-hero{min-height:620px}}@media(max-width:600px){.command-nav{height:68px}.command-brand strong{font-size:22px}.command-brand small{font-size:5px}.command-nav nav{display:none}.command-hero{min-height:680px}.hero-content{left:22px;right:22px;top:42%}.hero-content h1{font-size:48px}.hero-content>p{font-size:13px}.hero-badge{left:22px;right:auto;bottom:22px}.aip-panel{padding-top:55px}.aip-panel h2{font-size:30px}.protocol-grid{grid-template-columns:repeat(3,1fr)}.protocol-node{min-height:105px}.protocol-node span{width:40px;height:40px;font-size:17px}.protocol-node b{font-size:6px}.network-heading{display:block}.network-heading>strong{display:inline-block;margin-top:14px}.division-grid{grid-template-columns:1fr}.promise{grid-template-columns:1fr;padding-top:55px}.promise-copy{border-left:0;border-top:1px solid #8d6828;padding:25px 0 0}.command-footer{display:block}.command-footer small,.command-footer b{display:block;margin:8px 0 0}}
`}</style>
