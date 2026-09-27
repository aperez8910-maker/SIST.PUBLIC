import Navbar from "@/components/Navbar";
import Link from "next/link";

type Tone = "gold" | "green" | "blue" | "red" | "violet";

type DivisionDetailProps = {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  focus: string[];
  sealIndex: number;
  mission?: string;
  approach?: string;
  tone?: Tone;
};

const toneClass: Record<Tone, string> = {
  gold: "tone-gold",
  green: "tone-green",
  blue: "tone-blue",
  red: "tone-red",
  violet: "tone-violet",
};

export default function DivisionDetail({
  number,
  eyebrow,
  title,
  intro,
  focus,
  sealIndex,
  mission,
  approach,
  tone = "gold",
}: DivisionDetailProps) {
  return (
    <main className={`sist-evo division-command-page ${toneClass[tone]}`}>
      <Navbar />

      <div className="division-command-shell">
        <section className="division-command-hero">
          <div className="division-command-copy">
            <div className="division-command-kicker">
              <span className="division-live-dot" />
              <span>DIVISION {number}</span>
              <span className="division-command-slash">/</span>
              <span>{eyebrow}</span>
            </div>

            <h1>{title}</h1>
            <p className="division-command-intro">{intro}</p>

            <div className="division-command-actions">
              <Link href="/contact" className="action-primary">REQUEST BRIEFING ↗</Link>
              <Link href="/system" className="action-secondary">VIEW SYSTEM →</Link>
            </div>

            <div className="division-command-metrics">
              <div><span>STATUS</span><strong>ACTIVE</strong></div>
              <div><span>ARCHITECTURE</span><strong>AIP™</strong></div>
              <div><span>REVIEW</span><strong>ADVERSARIAL</strong></div>
              <div><span>OUTPUT</span><strong>DEPLOYABLE</strong></div>
            </div>
          </div>

          <div className="division-command-insignia">
            <div className="division-orbit division-orbit-outer" />
            <div className="division-orbit division-orbit-inner" />
            <div className="division-seal-frame division-hero-seal" role="img" aria-label={`${title} official seal`}>
              <img
                src="/division-seals.webp"
                alt=""
                className="division-seal-strip"
                style={{ transform: `translateX(-${sealIndex * 20}%)` }}
              />
            </div>
            <span className="division-insignia-label">SYSTEM INTELLIGENCE & STRATEGIC TACTICS</span>
          </div>
        </section>

        <section className="division-signal-rail" aria-label="Division operating status">
          <span>NODE-{number}</span>
          <span>PROVENANCE / ENABLED</span>
          <span>ADVERSARIAL REVIEW / ENABLED</span>
          <span>COUNCIL SYNTHESIS / CONNECTED</span>
          <span>DEPLOYMENT / READY</span>
        </section>

        <section className="division-command-section">
          <div className="division-command-heading">
            <span className="eyebrow">PRIMARY OPERATING SCOPE</span>
            <h2>Built to hold the record together under pressure.</h2>
          </div>

          <div className="division-focus-grid">
            {focus.map((item, index) => (
              <article key={item} className="division-focus-card">
                <span className="division-focus-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="division-focus-line" />
                <h3>{item}</h3>
                <span className="division-focus-status">ACTIVE DOMAIN</span>
              </article>
            ))}
          </div>
        </section>

        <section className="division-command-section division-dual-panel">
          {mission && (
            <article className="division-statement-panel">
              <span className="eyebrow">MISSION</span>
              <h2>Why this division exists.</h2>
              <p>{mission}</p>
              <div className="division-panel-mark">M</div>
            </article>
          )}

          {approach && (
            <article className="division-statement-panel">
              <span className="eyebrow">INTELLIGENCE APPROACH</span>
              <h2>How the work is structured.</h2>
              <p>{approach}</p>
              <div className="division-panel-mark">A</div>
            </article>
          )}
        </section>

        <section className="division-command-footer">
          <Link href="/divisions">← ALL DIVISIONS</Link>
          <span>DIVISION {number} / SIST NETWORK</span>
          <Link href="/system">SYSTEM ARCHITECTURE →</Link>
        </section>
      </div>
    </main>
  );
}
