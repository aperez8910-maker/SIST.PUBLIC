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
  ["01", "INTAKE", "Define the objective, scope, actors, constraints, and record boundary.", "GATE 1"],
  ["02", "LIBRARIAN", "Normalize, index, and preserve the source record so every important claim can be traced.", "RECORD"],
  ["03", "INGESTOR", "Extract facts, claims, dates, entities, contradictions, and evidence gaps into structured intelligence.", "GATE 2"],
  ["04", "RESEARCHER", "Develop missing context, external sources, authorities, and expected evidence.", "COLLECTION"],
  ["05", "ANALYST", "Build competing explanations, relationships, timelines, and critical findings.", "GATE 3"],
  ["06", "LAWCLERK", "Test rules, standards, procedure, authority, and decision relevance where the matter requires it.", "APPLIED"],
  ["07", "COUNTERMEASURES", "Attack the working position for contradictions, weak links, alternate explanations, and failure paths.", "GATE 4"],
  ["08", "BRIEFER", "Convert surviving findings, uncertainty, and options into a usable intelligence product.", "SYNTHESIS"],
  ["09", "DEPLOY MASTER", "Release only what survives the record, challenge, and human-controlled deployment gate.", "GATE 5"],
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
              <span className="eyebrow">INDEPENDENT AI RESEARCH & INTELLIGENCE-ANALYSIS PLATFORM / AUSTIN, TEXAS</span>
              <h1 id="hero-title">
                Intelligence
                <em>under pressure.</em>
              </h1>
              <p className="hero-copy">
                SIST is an independent AI research and intelligence-analysis platform for difficult matters where
                records are fragmented, claims conflict, institutions hold more information than the individual,
                or a single-pass answer is not enough. The system structures the record, develops missing context,
                attacks its own working position, and produces a source-grounded intelligence brief for human review.
              </p>
              <p className="hero-copy">Founded by <Link href="/alexander-emilio-perez">Alexander Emilio Perez</Link>, SIST connects structured evidence, adversarial AI review, and final human judgment.</p>
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
            <span className="eyebrow">HOW AN ENGAGEMENT WORKS</span>
            <div>
              <h2>Bring the record. SIST turns it into an intelligence problem.</h2>
              <p>
                The platform is designed to make the engagement model clear: what enters the system,
                what the architecture does with it, and what a human decision-maker receives at the other end.
              </p>
            </div>
          </div>
          <div className="engagement-grid">
            <article className="engagement-card">
              <span>01 / WHO USES IT</span>
              <h3>People and teams facing complex records or institutional decisions.</h3>
              <p>Individuals, advocates, researchers, attorneys, operators, and organizations can use the methodology as decision support.</p>
            </article>
            <article className="engagement-card">
              <span>02 / WHAT YOU BRING</span>
              <h3>A question, objective, timeline, records, and the known gaps.</h3>
              <p>The intake starts with the problem and the available record—not a request for the system to guess what happened.</p>
            </article>
            <article className="engagement-card">
              <span>03 / WHAT SIST DOES</span>
              <h3>Reconstruct, research, challenge, verify, and synthesize.</h3>
              <p>The system develops competing explanations, expected evidence, contradictions, and failure paths before a position is released.</p>
            </article>
            <article className="engagement-card">
              <span>04 / WHAT YOU RECEIVE</span>
              <h3>An auditable intelligence brief with evidence, uncertainty, and options.</h3>
              <p>The product is structured for human judgment, further collection, escalation, negotiation, filing preparation, or strategic planning.</p>
            </article>
          </div>
        </section>

        <section className="evo-section">
          <div className="evo-section-head">
            <span className="eyebrow">PUBLIC PROOF LAYER</span>
            <div>
              <h2>The architecture should be inspectable—not just impressive.</h2>
              <p>
                SIST separates what is implemented, what is documented publicly, and what still requires broader validation.
                The public site is designed to make that distinction visible.
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
              SIST is a working architecture, but public materials do not claim universal superiority,
              zero-error operation, or statistical proof across every domain. Those are validation questions,
              not marketing conclusions.
            </p>
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
