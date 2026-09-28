import Link from "next/link";
import Navbar from "@/components/Navbar";

type Section = { title: string; body: string; points?: string[] };

type ResearchDocumentProps = {
  code: string;
  title: string;
  subtitle: string;
  status: string;
  sections: Section[];
  boundaries: string[];
};

export default function ResearchDocument({ code, title, subtitle, status, sections, boundaries }: ResearchDocumentProps) {
  return (
    <main className="sist-evo research-document-page">
      <Navbar />
      <div className="research-document-shell">
        <header className="research-document-hero">
          <div>
            <span className="eyebrow">SIST / PUBLIC RESEARCH DOCUMENT / {code}</span>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
          <aside>
            <span>DOCUMENT STATUS</span>
            <strong>{status}</strong>
            <small>Public description. Not an internal implementation specification.</small>
          </aside>
        </header>

        <div className="research-document-grid">
          <article className="research-document-body">
            {sections.map((section, index) => (
              <section key={section.title}>
                <span className="research-section-index">{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.points && (
                  <ul>
                    {section.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </article>

          <aside className="research-document-side">
            <span className="eyebrow">PUBLIC BOUNDARIES</span>
            <h3>What this document does not claim.</h3>
            <ul>
              {boundaries.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="research-doc-linkset">
              <Link href="/research">← RESEARCH INDEX</Link>
              <Link href="/system">SYSTEM ARCHITECTURE →</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
