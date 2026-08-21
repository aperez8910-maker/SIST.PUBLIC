import Navbar from "@/components/Navbar";
import Link from "next/link";
import { divisions } from "@/data/divisions";

const accents = [
  { edge: "border-amber-400/30", glow: "shadow-[0_0_45px_rgba(215,173,75,0.10)]", label: "text-amber-300", dot: "bg-amber-300" },
  { edge: "border-emerald-400/30", glow: "shadow-[0_0_45px_rgba(56,227,154,0.08)]", label: "text-emerald-300", dot: "bg-emerald-300" },
  { edge: "border-red-400/30", glow: "shadow-[0_0_45px_rgba(255,77,94,0.08)]", label: "text-red-300", dot: "bg-red-300" },
  { edge: "border-sky-400/30", glow: "shadow-[0_0_45px_rgba(56,189,248,0.08)]", label: "text-sky-300", dot: "bg-sky-300" },
  { edge: "border-violet-400/30", glow: "shadow-[0_0_45px_rgba(167,139,250,0.08)]", label: "text-violet-300", dot: "bg-violet-300" },
];

export default function DivisionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050810] text-white">
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(215,173,75,.10),transparent_34%)]" />
      <Navbar />

      <section className="relative px-4 sm:px-8 py-5 sm:py-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <div className="flex items-center gap-3 text-[10px] tracking-[0.35em] text-amber-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(56,227,154,.8)]" />
                SIST / SPECIALIZED INTELLIGENCE NETWORK
              </div>
              <h1 className="sist-metal mt-6 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">DIVISIONAL<br />INTELLIGENCE</h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-[#8892a0] md:text-lg">
                Specialized environments operating on one common intelligence architecture. Each division applies the same disciplined pipeline while adapting its evidence, risks, and decision requirements to the mission.
              </p>
            </div>

            <div className="border border-white/10 bg-white/[0.025] p-6 backdrop-blur">
              <div className="flex justify-between text-[9px] tracking-[0.3em] text-[#8892a0]"><span>NETWORK STATUS</span><span className="text-emerald-300">ONLINE</span></div>
              <div className="mt-5 flex items-center gap-2">
                {divisions.map((division, i) => <span key={division.number} className={`h-1.5 flex-1 ${accents[i % accents.length].dot} opacity-70`} />)}
              </div>
              <p className="mt-5 text-xs leading-6 text-[#8892a0]">Five specialized domains. One controlled intelligence architecture.</p>
            </div>
          </div>

          <div className="relative mt-16 grid gap-5 md:grid-cols-2">
            {divisions.map((division, index) => {
              const accent = accents[index % accents.length];
              return (
                <Link key={division.number} href={division.href} className={`group relative overflow-hidden border ${accent.edge} ${accent.glow} bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05] ${index === divisions.length - 1 ? "md:col-span-2 md:mx-auto md:w-[calc(50%-10px)]" : ""}`}>
                  <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/[0.02] blur-2xl transition group-hover:bg-white/[0.06]" />
                  <div className="relative flex items-start justify-between">
                    <span className={`font-mono text-xs ${accent.label}`}>DIVISION {division.number}</span>
                    <span className={`h-2 w-2 rounded-full ${accent.dot} shadow-[0_0_12px_currentColor]`} />
                  </div>
                  <h2 className="relative mt-6 text-2xl font-semibold tracking-tight">{division.title}</h2>
                  <p className="relative mt-4 max-w-xl text-sm leading-7 text-[#8892a0]">{division.description}</p>
                  <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                    <span className="text-[9px] tracking-[0.3em] text-[#8892a0]">SPECIALIZED NODE</span>
                    <span className={`text-[10px] tracking-[0.2em] ${accent.label}`}>ACCESS →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
