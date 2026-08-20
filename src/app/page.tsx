import Image from "next/image";
import Link from "next/link";
import LiveSidebar from "@/components/home/LiveSidebar";

const stages = [
  ["01", "DEFINE", "VERIFIED"],
  ["02", "GATHER", "SIGNAL"],
  ["03", "CHALLENGE", "REVIEW"],
  ["04", "DECONSTRUCT", "SIGNAL"],
  ["05", "SYNTHESIZE", "VERIFIED"],
  ["06", "STRATEGIZE", "REVIEW"],
  ["07", "EXECUTE", "VERIFIED"],
  ["08", "REVIEW", "SIGNAL"],
  ["09", "IMPROVE", "REVIEW"],
] as const;

const divisions = [
  ["LEGAL INTELLIGENCE", "Exposing weakness. Building stronger cases.", "⚖", "/divisions/legal"],
  ["HEALTHCARE ACCOUNTABILITY", "Patient first. Systems accountable.", "⚕", "/divisions/healthcare"],
  ["CONSUMER ADVOCACY", "Protecting rights. Demanding fairness.", "♜", "/divisions/consumer"],
  ["INSTITUTIONAL ACCOUNTABILITY", "Transparency. Integrity. Accountability.", "⌂", "/divisions/strategic"],
] as const;

export default function Home() {
  return (
    <main className="sist-command-site">
      <header className="command-nav">
        <Link href="/" className="command-brand">
          <Image src="/logo.png" alt="SIST™" width={58} height={58} priority />
          <span>
            <strong>SIST™</strong>
            <small>SYSTEM INTELLIGENCE<br />AND STRATEGIC TACTICS™</small>
          </span>
        </Link>
        <nav>
          <Link href="/">HOME</Link>
          <Link href="/divisions">DIVISIONS</Link>
          <Link href="/briefings">BRIEFINGS</Link>
          <Link href="/research">RESEARCH</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href="/contact" className="command-cta">REQUEST BRIEFING</Link>
        </nav>
      </header>

      <section className="command-hero">
        <div className="hero-media">
          <Image className="hero-eagle" src="/hero-eagle-austin.jpg" alt="Adversarial intelligence command center — eagle, Austin skyline, network graph" fill priority sizes="100vw" />
          <div className="hero-gradient" />
        </div>

        <div className="hero-content">
          <div className="eyebrow">SYSTEM INTELLIGENCE &amp; STRATEGIC TACTICS™</div>
          <h1>INTELLIGENCE<br />UNDER<br /><em>PRESSURE.</em></h1>
          <p>Challenge everything. Trust what survives.</p>
          <div className="hero-actions">
            <Link href="/system" className="sist-button"><span>EXPLORE SIST</span><i>↗</i></Link>
            <Link href="/interactive" className="sist-button secondary">VIEW WORKFLOW</Link>
          </div>
        </div>

        <div className="hero-side">
          <LiveSidebar />
        </div>
      </section>

      <section className="method-panel">
        <div className="method-header">
          <div>
            <span className="section-kicker">THE OPERATING FRAMEWORK</span>
            <h2>AIP™ ADVERSARIAL INTEGRATION PROTOCOL</h2>
          </div>
          <p className="method-sub">A rigorous process. Built for clarity in complexity.</p>
        </div>

        <div className="method-track">
          <div className="method-line" />
          {stages.map(([n, title, label]) => (
            <button key={n} className="method-node" type="button">
              <span className="method-ring"><span className="method-inner">{n}</span></span>
              <span className="method-title">{title}</span>
              <span className="method-label">{label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="divisions-wrap">
        <div className="section-kicker">SIST™ DIVISIONS</div>
        <div className="division-grid">
          {divisions.map(([name, copy, icon, href]) => (
            <Link href={href} className="division-card" key={name}>
              <span className="division-seal">{icon}</span>
              <h3>{name}</h3>
              <p>{copy}</p>
              <span className="division-cta">VIEW DIVISION <i aria-hidden="true">→</i></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="promise">
        <div>
          <span className="section-kicker">THE SIST™ PROMISE</span>
          <h2>BUILD THE RECORD.<br /><em>CHANGE THE LEVERAGE.</em></h2>
        </div>
        <div className="promise-copy">
          <b>WE QUESTION.<br />WE CHALLENGE.<br />WE VERIFY.<br />WE PROTECT.<br />WE STRATEGIZE.</b>
          <p>SIST™ helps transform fragmented documents, filings, evidence and narrative into disciplined, reviewable written work for people facing high-stakes institutions.</p>
        </div>
      </section>

      <footer className="command-footer">
        <div className="footer-block">
          <span>SIST™</span>
          <small>SYSTEM INTELLIGENCE<br />AND STRATEGIC TACTICS™</small>
        </div>
        <div className="footer-block">
          <b>ALL COMMUNICATIONS ENCRYPTED</b>
          <span>AES-256 · TLS 1.3</span>
        </div>
        <div className="footer-block">
          <b><span className="footer-dot" /> SYSTEM STATUS OPERATIONAL</b>
          <span>INTAKE ACTIVE</span>
        </div>
        <div className="footer-block">
          <b>AIP™ SENTINEL™</b>
          <span>128 SOURCES ACTIVE</span>
        </div>
        <div className="footer-block footer-contact">
          <b>CONTACT@SIST.INT.EL</b>
          <span>+1 (512) 866-0147</span>
        </div>
      </footer>
    </main>
  );
}

<style>{`
:global(*){box-sizing:border-box}:global(body){margin:0;background:#020304;color:#e9e4d8}:global(a){color:inherit;text-decoration:none}
.sist-command-site{min-height:100vh;background:#020304;font-family:Arial,sans-serif;letter-spacing:.03em;overflow-x:hidden}
.command-nav{position:relative;z-index:20;height:78px;display:flex;align-items:center;justify-content:space-between;padding:10px clamp(18px,4vw,64px);border-bottom:1px solid rgba(215,173,82,.18);background:rgba(2,3,4,.92);backdrop-filter:blur(18px)}.command-brand{display:flex;align-items:center;gap:12px}.command-brand img{filter:drop-shadow(0 0 14px rgba(215,173,82,.28))}.command-brand strong{display:block;font:700 27px Georgia,serif;letter-spacing:.16em}.command-brand small{display:block;font-size:7px;line-height:1.45;letter-spacing:.22em;color:#aaa49a}.command-nav nav{display:flex;align-items:center;gap:clamp(12px,2.2vw,28px);font-size:8px;font-weight:700;letter-spacing:.16em;color:#aaa69d}.command-nav nav a:hover{color:#d9ae55}.command-cta{border:1px solid rgba(215,173,82,.45);padding:10px 14px;color:#d6ae55!important}
.command-hero{position:relative;min-height:min(88vw,820px);border-bottom:1px solid rgba(215,173,82,.18);isolation:isolate;display:grid;grid-template-columns:1.1fr 1.4fr .9fr}.hero-media{position:relative;overflow:hidden}.hero-eagle{object-fit:cover;object-position:center}.hero-gradient{position:absolute;inset:0;background:linear-gradient(90deg,rgba(2,3,4,.9) 0%,rgba(2,3,4,.55) 42%,rgba(2,3,4,.18) 100%),linear-gradient(0deg,#020304 0%,transparent 22%,transparent 78%,#020304 100%);z-index:1}.hero-content{position:relative;z-index:2;display:flex;flex-direction:column;justify-content:center;padding:clamp(30px,6vw,110px);max-width:720px}.eyebrow,.section-kicker{font-size:9px;font-weight:700;letter-spacing:.36em;color:#d4aa50}.hero-content h1{margin:18px 0 0;font:700 clamp(46px,6.4vw,92px)/.88 Arial,sans-serif;letter-spacing:.02em;text-shadow:0 10px 40px #000}.hero-content h1 em{font-style:normal;color:#d5aa50}.hero-content>p{margin:16px 0;font-size:clamp(16px,1.8vw,22px);font-weight:700;letter-spacing:.22em;color:#c8c3b8}.hero-actions{margin-top:26px;display:flex;flex-wrap:gap:10px}.hero-side{position:relative;z-index:2;border-left:1px solid rgba(215,173,82,.18);background:rgba(2,3,4,.55);backdrop-filter:blur(14px)}
.method-panel{max-width:1560px;margin:auto;padding:72px clamp(18px,4vw,64px);border-top:1px solid rgba(215,173,82,.18);border-bottom:1px solid rgba(215,173,82,.18);background:linear-gradient(180deg,#020304,#050708,#020304)}.method-header{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:44px}.method-header h2{margin:10px 0 0;font:400 clamp(30px,4.2vw,58px)/1.08 Georgia,serif;letter-spacing:.08em}.method-header h2 span{font:14px Arial;color:#d5aa50;vertical-align:top}.method-sub{max-width:520px;color:#918d85;font-size:11px;line-height:1.9}.method-track{position:relative;display:grid;grid-template-columns:repeat(9,1fr);gap:0}.method-line{position:absolute;left:4.5%;right:4.5%;top:30px;height:1px;background:linear-gradient(90deg,rgba(215,173,82,.32),rgba(215,173,82,.08))}.method-node{position:relative;display:flex;flex-direction:column;align-items:center;gap:14px;padding:0 6px;background:transparent;border:0;color:inherit;cursor:pointer}.method-ring{position:relative;z-index:2;display:grid;place-items:center;width:60px;height:60px;border-radius:50%;border:1px solid rgba(184,138,45,.55);background:radial-gradient(circle,rgba(201,154,61,.12),transparent 60%)}.method-inner{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(184,138,45,.35);font:700 13px Georgia,serif;color:#e2b85c;letter-spacing:.04em}.method-title{font-size:7px;font-weight:700;letter-spacing:.14em;color:#ddd8ce}.method-label{font-size:6px;letter-spacing:.24em;color:#d6aa51}
.divisions-wrap{max-width:1480px;margin:auto;padding:80px clamp(18px,5vw,80px)}.division-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:28px}.division-card{min-height:250px;padding:28px 24px;border:1px solid rgba(215,173,82,.22);background:linear-gradient(145deg,rgba(17,24,27,.9),rgba(3,6,7,.96));box-shadow:inset 0 0 35px rgba(215,173,82,.025),0 20px 50px rgba(0,0,0,.35);transition:.25s transform,.25s border-color}.division-card:hover{transform:translateY(-6px);border-color:#c99d4b}.division-card>span{font-size:42px;color:#d5aa50}.division-card h3{font:700 15px/1.2 Georgia,serif;letter-spacing:.12em;margin:24px 0 10px}.division-card p{color:#88847c;font-size:10px;line-height:1.7}.division-cta{display:block;margin-top:26px;color:#d5aa50;font-size:7px;letter-spacing:.22em}.division-cta i{margin-left:6px}
.promise{max-width:1480px;margin:auto;padding:80px clamp(18px,5vw,80px);display:grid;grid-template-columns:1fr 1fr;gap:70px;border-top:1px solid rgba(215,173,82,.18)}.promise h2{font:400 clamp(34px,5vw,64px)/.98 Georgia,serif;margin:18px 0}.promise h2 em{font-style:normal;color:#d5aa50}.promise-copy{border-left:1px solid #8d6828;padding-left:35px}.promise-copy>b{font-size:15px;line-height:1.9;letter-spacing:.2em}.promise-copy p{color:#8f8b83;font-size:11px;line-height:1.9;max-width:520px}.command-footer{position:relative;z-index:3;display:grid;grid-template-columns:repeat(5,1fr);align-items:center;gap:0;min-height:88px;background:#010202;border-top:1px solid rgba(215,173,82,.22);padding:8px clamp(18px,5vw,70px)}.footer-block{min-height:54px;padding:10px 16px;border-right:1px solid rgba(201,154,61,.25);color:#d5aa50}.footer-block:last-child{border:0}.footer-block span,.footer-block small{display:block;color:#8d8c86;font-size:7px;letter-spacing:.12em;margin-top:5px}.footer-block b{display:block;color:#ddd8ce;font:600 8px Arial;letter-spacing:.14em}.footer-contact b{color:#d5aa50;font-size:9px;letter-spacing:.16em}.footer-dot{display:inline-block;height:6px;width:6px;border-radius:50%;background:#34d399;box-shadow:0 0 10px #34d399;margin-right:6px;vertical-align:middle}
@media(max-width:1100px){.command-hero{grid-template-columns:1fr .9fr}.hero-side{display:none}}
@media(max-width:900px){.command-nav nav{gap:12px}.method-track{grid-template-columns:repeat(3,1fr);row-gap:18px}.division-grid{grid-template-columns:repeat(2,1fr)}.promise{gap:35px}.command-footer{grid-template-columns:1fr 1fr}}
@media(max-width:680px){.command-nav{height:68px;padding:8px 14px}.command-brand strong{font-size:22px}.command-brand small{font-size:5px}.command-nav nav{display:none}.command-hero{min-height:720px}.hero-content{padding:24px 22px}.hero-content h1{font-size:48px}.hero-content>p{font-size:13px}.method-panel{padding:56px 16px}.method-track{grid-template-columns:repeat(3,1fr);gap:14px 0}.method-ring{width:48px;height:48px}.method-inner{width:36px;height:36px;font-size:11px}.method-title{font-size:6px}.method-label{font-size:5px}.divisions-wrap{padding:56px 16px}.division-grid{grid-template-columns:1fr}.promise{grid-template-columns:1fr;padding:56px 16px}.promise-copy{border-left:0;border-top:1px solid #8d6828;padding:24px 0 0}.command-footer{grid-template-columns:1fr;min-height:auto}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;animation-iteration-count:1!important;transition:none!important}}
`}</style>