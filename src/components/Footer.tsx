import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sist-footer">
      <div className="sist-footer-inner">
        <div className="sist-footer-main">
          <div className="sist-footer-brand">
            <div className="sist-footer-lockup">
              <Image src="/logo.png" alt="SIST™" width={52} height={52} priority />
              <div>
                <strong>SIST™</strong>
                <span>SYSTEM INTELLIGENCE & STRATEGIC TACTICS</span>
              </div>
            </div>
            <p>
              Independent AI research and intelligence-analysis platform for structured records,
              adversarial review, source-grounded synthesis, and human decision support.
            </p>
          </div>

          <div className="sist-footer-grid">
            <Link href="/system" className="sist-footer-card">
              <span>PUBLIC ARCHITECTURE</span>
              <strong>09-STAGE PIPELINE</strong>
              <small>IMPLEMENTED / HUMAN CONTROLLED</small>
            </Link>
            <Link href="/research" className="sist-footer-card">
              <span>RESEARCH</span>
              <strong>METHODS & LIMITS</strong>
              <small>PUBLIC DOCUMENTS / VALIDATION</small>
            </Link>
            <Link href="/briefings" className="sist-footer-card">
              <span>FIELD RECORDS</span>
              <strong>BRIEFINGS</strong>
              <small>METHOD IN PRACTICE</small>
            </Link>
            <Link href="/contact" className="sist-footer-card">
              <span>REQUEST BRIEFING</span>
              <strong>OPEN INTAKE</strong>
              <small>HIGH-LEVEL FIRST CONTACT</small>
            </Link>
          </div>
        </div>

        <div className="sist-footer-security">
          <div>
            <span>DATA SECURITY</span>
            <strong>AES-256 AT REST</strong>
            <small>Encrypted data at rest</small>
          </div>
          <div>
            <span>TRANSPORT SECURITY</span>
            <strong>HTTPS / TLS 1.2+</strong>
            <small>TLS 1.3 supported for secure transport</small>
          </div>
          <span className="sist-security-note">INFRASTRUCTURE PROVIDER DETAILS NOT PUBLICLY DISCLOSED</span>
        </div>

        <div className="sist-footer-scope">
          <strong>OPERATING SCOPE</strong>
          <p>
            SIST is not a government agency, law firm, medical provider, or licensed representative.
            The platform provides AI-assisted research, record analysis, adversarial review, and decision support.
            Human users remain responsible for professional review and consequential decisions.
          </p>
        </div>

        <div className="sist-footer-links">
          <a href="https://github.com/aperez8910-maker/SIST.PUBLIC" target="_blank" rel="noopener noreferrer">PUBLIC REPOSITORY ↗</a>
          <a href="mailto:support@systemintelligenceandstrategictactics.com">SUPPORT@SYSTEMINTELLIGENCEANDSTRATEGICTACTICS.COM</a>
        </div>

        <div className="sist-footer-bottom">
          <span>© {new Date().getFullYear()} SIST™ — SYSTEM INTELLIGENCE & STRATEGIC TACTICS™. ALL RIGHTS RESERVED.</span>
          <span>INDEPENDENT · HUMAN-DIRECTED · SOURCE-GROUNDED</span>
        </div>
      </div>
    </footer>
  );
}
