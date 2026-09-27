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
              Each division preserves the same evidentiary discipline, lineage controls, challenge process,
              and deployable output standard.
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
                    src="/division-seals.webp"
                    alt=""
                    className="division-seal-strip"
                    style={{ transform: `translateX(-${division.sealIndex * 20}%)` }}
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

        <section className="division-command-footer">
          <Link href="/">← HOME</Link>
          <span>SIST / DIVISION NETWORK</span>
          <Link href="/system">SYSTEM ARCHITECTURE →</Link>
        </section>
      </div>
    </main>
  );
}
