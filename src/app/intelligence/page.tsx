import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata = pageMetadata("/intelligence");

import Navbar from "@/components/Navbar";
import OpenAIConsole from "@/components/OpenAIConsole";

export default function IntelligencePage() {
  return (
    <main className="sist-page-shell sist-modern-page min-h-screen text-white">
      <PageStructuredData path="/intelligence" />
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <div className="sist-modern-radial pointer-events-none fixed inset-0" />
      <Navbar />

      <section className="intelligence-shell">
        <header className="grid gap-8 border-b border-amber-300/15 pb-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="text-xs tracking-[.42em] text-amber-300">SIST / INTELLIGENCE CONSOLE</p>
            <h1 className="sist-metal mt-4 text-5xl font-semibold leading-[.94] tracking-[-.04em] text-gray-100 sm:text-7xl">
              INTELLIGENCE<br />CONSOLE
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-[#a8b1bc]">
              Enter a question or record summary for AI-assisted analysis. Review the response against your sources.
            </p>
          </div>

          <aside className="sist-modern-card border-emerald-300/20">
            <div className="flex items-center justify-between text-xs tracking-[.28em]">
              <span className="text-[#929daa]">PROCESSING</span>
              <span className="text-emerald-300">AI-ASSISTED</span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,.8)]" />
              <span className="text-xs text-[#a8b1bc]">HUMAN REVIEW REQUIRED</span>
            </div>
          </aside>
        </header>

        <div className="mt-8">
          <OpenAIConsole />
        </div>
      </section>
    </main>
  );
}
