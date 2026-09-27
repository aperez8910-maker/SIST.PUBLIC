"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SystemLattice from "@/components/home/SystemLattice";
import { divisions } from "@/data/divisions";

const nav = [
  ["SYSTEM", "/system"],
  ["DIVISIONS", "/divisions"],
  ["COUNCIL", "/council"],
  ["BRIEFINGS", "/briefings"],
  ["RESEARCH", "/research"],
] as const;

const pipeline = [
  ["01", "DEFINE", "Mission, scope, actors, objectives, and decision boundary.", "BASELINE"],
  ["02", "GATHER", "Acquire the record and separate source material from assertion.", "EVIDENCE"],
  ["03", "INGEST", "Normalize evidence, preserve provenance, and expose gaps.", "STRUCTURE"],
  ["04", "ANALYZE", "Build competing explanations, relationships, and critical findings.", "MULTI-PATH"],
  ["05", "SYNTHESIZE", "Fuse supported findings into a working council position.", "COUNCIL"],
  ["06", "CHALLENGE", "Attack assumptions, contradictions, and fragile conclusions.", "ADVERSARIAL"],
  ["07", "VERIFY", "Trace critical claims to source before release.", "SENTINEL"],
  ["08", "BRIEF", "Compress surviving intelligence into a usable decision product.", "OUTPUT"],
  ["09", "DEPLOY", "Move the verified product into the next strategic action.", "EXECUTION"],
] as const;

const capabilities = [
  {
    n: "01 / ARCHITECTURE",
    title: "Parallel reasoning without losing the chain of evidence.",
    body: "SIST separates collection, research, analysis, challenge, verification, and synthesis into controlled stages. The point is not more output. The point is to preserve lineage while forcing competing paths to survive pressure.",
    large: true,
  },
  {
    n: "02 / ADVERSARIAL",
    title: "A system that attacks its own position.",
    body: "Gate review is not decorative QA. Findings can be challenged, suspended for repair, superseded, replaced through lineage, or reopened through a controlled event.",
  },
  {
    n: "03 / COUNCIL",
    title: "Multiple seats. One auditable synthesis.",
    body: "Independent analytical roles contribute to the position while the synthesis layer records what survived, what failed, and why.",
  },
  {
    n: "04 / PROVENANCE",
    title: "Every serious claim should have somewhere to point.",
    body: "Evidence, source context, contradictions, unresolved questions, and finding state are treated as part of the intelligence product rather than hidden behind the final answer.",
  },
  {
    n: "05 / DEPLOYMENT",
    title: "Designed to move from analysis into action.",
    body: "The final product is structured for decisions, filings, briefings, investigations, negotiations, escalation, or further collection—not just reading.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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

      <nav className="evo-nav" aria-label="Primary navigation">
        <Link href="/" className="evo-brand" aria-label="SIST home">
          <Image src="/logo.png" alt="SIST" width={43} height={43} priority />
          <span className="evo-brand-copy">
            <strong>SIST™</strong>
            <span>SYSTEM INTELLIGENCE & STRATEGIC TACTICS</span>
          </span>
        </Link>

        <div className="evo-nav-center">
          {nav.map(([label, href]) => (
            <Link key={label} href={href}>{label}</Link>
          ))}
        </div>

        <Link href="/contact" className="evo-briefing">REQUEST BRIEFING</Link>

        <button
          type="button"
          className="evo-nav-trigger"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "×" : "≡"}
        </button>
      </nav>

      {menuOpen && (
        <div className="evo-mobile-menu">
          {nav.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>REQUEST BRIEFING</Link>
        </div>
      )}

      <div className="evo-shell">
        <section className="evo-hero" aria-labelledby="hero-title">
          <div className="hero-command">
            <div className="hero-insignia" aria-hidden="true">
              <Image src="/logo.png" alt="" width={320} height={320} priority />
              <span>SIST CORE / SYSTEM MARK</span>
            </div>
            <div>
              <span className="eyebrow">ADVERSARIAL INTELLIGENCE ARCHITECTURE / AUSTIN, TEXAS</span>
              <h1 id="hero-title">
                Intelligence
                <em>under pressure.</em>
              </h1>
              <p className="hero-copy">
                SIST is a staged intelligence architecture built to collect, structure, challenge,
                verify, and synthesize complex information. It is designed for situations where a
                single-pass answer is not enough and the reasoning itself must withstand scrutiny.
              </p>
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
              <h2>Not a chat window. A system with gates.</h2>
              <p>
                Information moves through explicit stages rather than disappearing into a single
                prompt-response cycle. Each stage has a job. Each transition creates a place to
                inspect the record, challenge a theory, or stop weak intelligence before it moves forward.
              </p>
            </div>
          </div>

          <div className="pipeline" aria-label="Nine-stage SIST workflow">
            {pipeline.map(([n, title, body, state], index) => (
              <article
                key={n}
                className={`pipe-stage ${index === 5 ? "challenge" : ""} ${index === 6 ? "verify" : ""}`}
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
              <h2>The interface exposes the discipline behind the answer.</h2>
              <p>
                SIST is presented as an operating architecture because that is what the methodology
                depends on: separation of roles, controlled finding states, evidence lineage,
                adversarial pressure, and a final synthesis that records what survived.
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
            <span className="eyebrow">DIVISION ROUTING</span>
            <div>
              <h2>Five divisions. One intelligence architecture.</h2>
              <p>
                The same controlled SIST methodology is applied across criminal defense, healthcare,
                consumer advocacy, immigration and humanitarian advocacy, and institutional accountability.
                Each division has its own operating identity while preserving a common evidentiary and adversarial core.
              </p>
            </div>
          </div>

          <div className="division-home-grid">
            {divisions.map((division) => (
              <Link key={division.number} href={division.href} className="division-home-card">
                <div className="division-home-seal division-seal" data-seal={division.sealIndex} aria-hidden="true" />
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
                The briefing library exposes methodology, case-oriented analysis, and system concepts
                so the architecture can be examined through actual written products instead of marketing language alone.
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
