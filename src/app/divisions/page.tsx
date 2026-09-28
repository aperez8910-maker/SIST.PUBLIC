import Navbar from "@/components/Navbar";
import Link from "next/link";
import { divisions } from "@/data/divisions";

export default function DivisionsPage() {
  return (
    <main className="sist-evo divisions-command-page">
      <Navbar />

      <div className="divisions-command-shell">
        <section className="divisions-command-hero">
          <div>
            <span className="eyebrow">SIST / SPECIALIZED INTELLIGENCE NETWORK</span>
            <h1>DIVISIONAL<br/><em>COMMAND.</em></h1>
            <p>
              Five specialized operating environments connected to one adversarial intelligence architecture.
              Different institutions create different rules and records, but the underlying intelligence problem is often the same:
              fragmented evidence, conflicting claims, procedural complexity, missing information, and asymmetric access to the record.
            </p>
          </div>

          <div className="divisions-network-status">
            <div className="divisions-network-top">
              <span>NETWORK STATUS</span>
              <strong>ONLINE</strong>
            </div>
            <div className="divisions-network-bars">
              {divisions.map((division) => <i key={division.number} />)}
            </div>
            <div className="divisions-network-readout">
              <strong>05</strong>
              <span>ACTIVE DIVISIONS<br/>ONE CONTROLLED ARCHITECTURE</span>
            </div>
          </div>
        </section>

        <section className="divisions-command-grid">
          {divisions.map((division) => (
            <Link key={division.number} href={division.href} className="division-command-card">
              <div className="division-card-topline">
                <span>DIVISION {division.number}</span>
                <span className="division-card-live"><i /> ACTIVE</span>
              </div>

              <div className="division-card-main">
                <div className="division-seal-frame division-card-seal-large" aria-hidden="true">
                  <img
                    src={division.sealSrc}
                    alt=""
                    className="division-seal-image"
                  />
                </div>

                <div className="division-card-copy">
                  <h2>{division.title}</h2>
                  <p>{division.description}</p>
                  <span className="division-card-access">ENTER DIVISION →</span>
                </div>
              </div>

              <div className="division-card-gridmark" aria-hidden="true" />
            </Link>
          ))}
        </section>

        <section className="division-command-section division-domain-rationale">
          <div className="division-command-heading">
            <span className="eyebrow">WHY FIVE DIVISIONS</span>
            <h2>Different domains. The same intelligence discipline.</h2>
          </div>
          <div className="division-rationale-grid">
            <article><span>01</span><h3>FRAGMENTED RECORDS</h3><p>Important facts are spread across documents, systems, people, and timelines.</p></article>
            <article><span>02</span><h3>CONFLICTING CLAIMS</h3><p>The record can contain competing accounts, omissions, and institutional narratives.</p></article>
            <article><span>03</span><h3>PROCEDURAL COMPLEXITY</h3><p>Rules, deadlines, standards, and decision points can matter as much as the underlying facts.</p></article>
            <article><span>04</span><h3>ASYMMETRIC INFORMATION</h3><p>Institutions often control more records, expertise, and process knowledge than the person confronting them.</p></article>
          </div>
          <div className="division-scope-note">
            <strong>OPERATING SCOPE</strong>
            <p>SIST is an independent AI research and intelligence-analysis platform. Its divisions are analytical operating domains—not government agencies, law firms, medical providers, or licensed representatives.</p>
          </div>
        </section>

        <section className="division-command-footer">
          <Link href="/">← HOME</Link>
          <span>SIST / DIVISION NETWORK</span>
          <Link href="/system">SYSTEM ARCHITECTURE →</Link>
        </section>
      </div>
    </main>
  );
}
