"use client";

import { pipeline } from "@/data/pipeline";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import SystemLattice from "@/components/home/SystemLattice";
import { divisions } from "@/data/divisions";





const capabilities = [
  {
    n: "01 / ARCHITECTURE",
    title: "Independent reasoning. Traceable evidence.",
    body: "Separate research, analysis, challenge, and synthesis while preserving the evidence behind each finding.",
    large: true,
  },
  {
    n: "02 / ADVERSARIAL",
    title: "A system that attacks its own position.",
    body: "Control gates can hold weak findings for repair, revision, replacement, or withdrawal.",
  },
  {
    n: "03 / COUNCIL",
    title: "Multiple seats. One auditable synthesis.",
    body: "Independent analytical roles contribute to the position while the synthesis layer records what survived, what failed, and why.",
  },
  {
    n: "04 / PROVENANCE",
    title: "Claims stay connected to sources.",
    body: "Sources, contradictions, unresolved questions, and finding states remain part of the final record.",
  },
  {
    n: "05 / DEPLOYMENT",
    title: "Intelligence for the next decision.",
    body: "Briefings support further research, professional review, strategic planning, and escalation.",
  },
];

export default function Home() {

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? (window.scrollY / max) * 100 : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${value}%`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <main className="sist-evo">
      <div className="evo-progress" />

      <Navbar />

      <div className="evo-shell">
        <section className="evo-hero" aria-labelledby="hero-title">
          <div className="hero-command">
            <div className="hero-insignia" aria-hidden="true">
              <Image src="/logo.png" alt="" width={320} height={320} priority />
              <span>SIST CORE / SYSTEM MARK</span>
            </div>
            <div>
              <span className="eyebrow">INDEPENDENT AI RESEARCH & INTELLIGENCE-ANALYSIS PLATFORM / AUSTIN, TEXAS</span>
              <h1 id="hero-title">
                Intelligence
                <em>under pressure.</em>
              </h1>
              <p className="hero-copy">
                SIST organizes fragmented records, researches missing context, and challenges conflicting claims. The result is a source-grounded intelligence brief for human review.
              </p>
              <p className="hero-copy">Founded by <Link href="/alexander-emilio-perez">Alexander Emilio Perez</Link> in Austin, Texas.</p>
              <div className="hero-actions">
                <Link href="/system" className="action-primary">
                  ENTER SYSTEM <span aria-hidden="true">↗</span>
                </Link>
                <Link href="/interactive" className="action-secondary">
                  OPEN WORK FLOOR <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="hero-metrics" aria-label="SIST operating model">
              <div className="hero-metric">
                <span>MODEL</span>
                <strong>MULTI-STAGE</strong>
              </div>
              <div className="hero-metric">
                <span>REVIEW</span>
                <strong className="gold">ADVERSARIAL</strong>
              </div>
              <div className="hero-metric">
                <span>TRACE</span>
                <strong>PROVENANCE</strong>
              </div>
              <div className="hero-metric">
                <span>OUTPUT</span>
                <strong>DEPLOYABLE</strong>
              </div>
            </div>
          </div>

          <div className="hero-lattice">
            <SystemLattice />
          </div>
        </section>

        <section className="evo-section" id="pipeline">
          <div className="evo-section-head">
            <span className="eyebrow">AIP™ / CONTROLLED PIPELINE</span>
            <div>
              <h2>Nine stages. Five control gates.</h2>
              <p>
                Each stage has a defined role. Control gates test the record and can stop unsupported findings before release.
              </p>
            </div>
          </div>

          <div className="pipeline" aria-label="Nine-stage SIST workflow">
            {pipeline.map(([n, title, body, state], index) => (
              <article
                key={n}
                className={`pipe-stage ${index === 6 ? "challenge" : ""} ${index === 8 ? "verify" : ""}`}
              >
                <span className="n">{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <span className="pipe-state">{state}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="evo-section">
          <div className="evo-section-head">
            <span className="eyebrow">SYSTEM DIFFERENTIATORS</span>
            <div>
              <h2>Evidence, challenge, and human control.</h2>
              <p>
                Separate analytical roles test the record and preserve what supports the final position.
              </p>
            </div>
          </div>

          <div className="capability-grid">
            {capabilities.map((cap) => (
              <article key={cap.n} className={`evo-panel ${cap.large ? "large" : ""}`}>
                <span className="panel-number">{cap.n}</span>
                <h3>{cap.title}</h3>
                <p>{cap.body}</p>
                <div className="panel-orbit" aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section className="evo-section">
          <div className="evo-section-head">
            <span className="eyebrow">HOW AN ENGAGEMENT WORKS</span>
            <div>
              <h2>Define the objective. Build the record.</h2>
              <p>
                Start with the question, available records, and known gaps. SIST structures the analysis for human review.
              </p>
            </div>
          </div>
          <div className="engagement-grid">
            <article className="engagement-card">
              <span>01 / WHO USES IT</span>
              <h3>People and teams with complex records.</h3>
              <p>Individuals, advocates, researchers, attorneys, operators, and organizations can use the methodology as decision support.</p>
            </article>
            <article className="engagement-card">
              <span>02 / WHAT YOU BRING</span>
              <h3>A clear objective and available records.</h3>
              <p>The intake starts with the problem and the available record—not a request for the system to guess what happened.</p>
            </article>
            <article className="engagement-card">
              <span>03 / WHAT SIST DOES</span>
              <h3>Reconstruct, research, challenge, verify, and synthesize.</h3>
              <p>The system develops competing explanations, expected evidence, contradictions, and failure paths before a position is released.</p>
            </article>
            <article className="engagement-card">
              <span>04 / WHAT YOU RECEIVE</span>
              <h3>A traceable briefing with findings and options.</h3>
              <p>The product is structured for human judgment, further collection, escalation, negotiation, filing preparation, or strategic planning.</p>
            </article>
          </div>
        </section>

        <section className="evo-section">
          <div className="evo-section-head">
            <span className="eyebrow">PUBLIC PROOF LAYER</span>
            <div>
              <h2>Inspect the methods and their limits.</h2>
              <p>
                Explore the implemented architecture, public methodology, and questions still under validation.
              </p>
            </div>
          </div>
          <div className="proof-grid">
            <Link href="/system" className="proof-card">
              <span>IMPLEMENTED ARCHITECTURE</span>
              <h3>Pipeline, control gates, challenge states, and human-directed deployment.</h3>
              <p>See the public operating model and how the stages fit together.</p>
              <b>INSPECT SYSTEM →</b>
            </Link>
            <Link href="/research" className="proof-card">
              <span>PUBLIC METHODOLOGY</span>
              <h3>Framework documents explain the design claims and their limits.</h3>
              <p>Read the architecture, AIP, Council, and validation framework as actual documents.</p>
              <b>OPEN RESEARCH →</b>
            </Link>
            <Link href="/briefings" className="proof-card">
              <span>FIELD RECORDS</span>
              <h3>Briefings show how adversarial review changes the intelligence product.</h3>
              <p>Method in practice, including what changed, what survived, and what remains uncertain.</p>
              <b>OPEN BRIEFINGS →</b>
            </Link>
          </div>
          <div className="proof-caveat">
            <strong>VALIDATION STATUS</strong>
            <p>
              SIST is a working architecture. Broader performance claims require controlled validation; errors remain possible.
            </p>
          </div>
        </section>

        <section className="evo-section">
          <div className="evo-section-head">
            <span className="eyebrow">DIVISION ROUTING</span>
            <div>
              <h2>Five divisions. One intelligence architecture.</h2>
              <p>
                Five operating domains share the same evidence discipline, adversarial review, and human release authority.
              </p>
            </div>
          </div>

          <div className="division-home-grid">
            {divisions.map((division) => (
              <Link key={division.number} href={division.href} className="division-home-card">
                <div className="division-seal-frame division-home-seal" aria-hidden="true">
                  <img
                    src={division.sealSrc}
                    alt=""
                    className="division-seal-image"
                  />
                </div>
                <div className="division-home-copy">
                  <span className="panel-number">DIVISION {division.number}</span>
                  <h3>{division.title}</h3>
                  <p>{division.description}</p>
                  <span className="division-home-access">ENTER DIVISION →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="evo-section">
          <div className="case-strip">
            <div>
              <span className="eyebrow">PUBLIC BRIEFINGS / METHOD IN PRACTICE</span>
              <h3>See how adversarial review changes the intelligence product.</h3>
              <p>
                Read field notes on evidence, adversarial review, and human-directed decisions.
              </p>
            </div>
            <Link href="/briefings">OPEN BRIEFING LIBRARY →</Link>
          </div>
        </section>

        <div className="evo-footer-note">
          <span>SIST™ / SYSTEM INTELLIGENCE & STRATEGIC TACTICS</span>
          <span>STRUCTURED RESEARCH · ADVERSARIAL REVIEW · STRATEGIC SYNTHESIS</span>
        </div>
      </div>
    </main>
  );
}
