"use client";

import Image from "next/image";
import { pipeline } from "@/data/pipeline";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const stages = pipeline.map(([id, name, detail], index) => [id, name, detail, index === 6 ? "red" : index >= 7 ? "green" : "amber"] as const);

type Kind = "amber" | "red" | "green";
const tone: Record<Kind, { border: string; text: string; dot: string; glow: string }> = {
  amber: { border: "border-amber-300/50", text: "text-amber-300", dot: "bg-amber-300", glow: "shadow-[0_0_35px_rgba(215,173,75,.22)]" },
  red: { border: "border-red-400/60", text: "text-red-300", dot: "bg-red-400", glow: "shadow-[0_0_35px_rgba(255,77,94,.25)]" },
  green: { border: "border-emerald-400/60", text: "text-emerald-300", dot: "bg-emerald-400", glow: "shadow-[0_0_35px_rgba(56,227,154,.22)]" },
};

export default function InteractivePage() {
  const [active, setActive] = useState(6);
  const selected = stages[active];
  const kind = selected[3] as Kind;
  const t = tone[kind];

  return (
    <main className="sist-page-shell sist-modern-page min-h-screen text-white">
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <div className="sist-modern-radial pointer-events-none fixed inset-0" />
      <Navbar />
      <div className="sist-noise pointer-events-none fixed inset-0" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(215,173,75,.13),transparent_34%)]" />
      <div className="intelligence-shell">
        <header className="flex items-center justify-between border-b border-amber-300/15 pb-6">
          <div className="flex items-center gap-4"><span className="sist-brand-lockup"><Image src="/logo.png" alt="SIST" width={62} height={62} className="sist-logo sist-logo-gold" priority /></span><div><p className="text-xs tracking-[0.5em] text-amber-300">SIST</p><p className="mt-1 text-xs tracking-[0.28em] text-[#8892a0]">ADVERSARIAL INTELLIGENCE WORK FLOOR</p></div></div>
          <div className="flex items-center gap-2 border border-emerald-400/25 bg-emerald-400/[.04] px-4 py-2 text-xs tracking-[.25em] text-emerald-300"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> PIPELINE EXPLORER</div>
        </header>

        <section className="py-5 sm:py-6"><div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end"><div><p className="text-xs tracking-[.42em] text-amber-300">CONTROLLED PIPELINE / AIP</p><h1 className="sist-metal mt-4 text-5xl font-semibold leading-[.92] tracking-[-.05em] sm:text-7xl lg:text-8xl">INTELLIGENCE<br />WORK FLOOR</h1><p className="mt-6 max-w-3xl text-sm leading-7 text-[#8892a0]">Select a stage to explore the SIST pipeline. This view illustrates the public operating model.</p></div><div className="border border-white/10 bg-white/[.025] p-6"><div className="flex justify-between text-xs tracking-[.3em]"><span className="text-[#8892a0]">SELECTED STAGE</span><span className={t.text}>{selected[0]} / 09</span></div><p className={`mt-3 text-2xl font-semibold ${t.text}`}>{selected[1]}</p><div className="mt-5 grid grid-cols-9 gap-1">{stages.map(([id,, ,k], i) => <button key={id} onClick={() => setActive(i)} aria-label={`Select stage ${id}`} aria-pressed={active === i} className={`h-2 ${i <= active ? tone[k as Kind].dot : "bg-white/10"}`} />)}</div></div></div></section>

        <section className="relative overflow-hidden border border-amber-300/20 bg-[#050810]/60 shadow-[0_0_120px_rgba(215,173,75,.07)]"><div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" /><div className="flex items-center justify-between border-b border-white/10 px-6 py-4"><span className="text-xs tracking-[.35em] text-[#8892a0]">PRIMARY INTELLIGENCE ROUTE</span><span className="text-xs tracking-[.35em] text-amber-300">09 STAGES / 05 CONTROL GATES</span></div>
          <div className="relative overflow-x-auto px-6 py-16"><div className="pointer-events-none absolute left-10 right-10 top-[143px] h-[2px] bg-gradient-to-r from-amber-300/30 via-amber-300/70 via-red-400/80 to-emerald-400/60" /><div className="sist-beacon-track" aria-hidden="true"><span className="sist-beacon sist-beacon-1" /><span className="sist-beacon sist-beacon-2" /><span className="sist-beacon sist-beacon-3 sist-beacon-red" /><span className="sist-beacon sist-beacon-4 sist-beacon-green" /><span className="sist-beacon sist-beacon-5" /></div><div className="relative z-10 grid min-w-[1380px] grid-cols-9 gap-3">{stages.map(([id, name, detail, k], i) => { const activeGate = active === i; const past = i < active; const x = tone[k as Kind]; return <button key={id} type="button" onClick={() => setActive(i)} aria-pressed={active === i} className={`sist-gate sist-gate-frame group relative min-h-[240px] border bg-[#050607]/95 p-5 text-left backdrop-blur-xl transition-all duration-300 ${activeGate ? `${x.border} ${x.glow} -translate-y-3` : "border-white/10 hover:border-amber-300/30"}`}><div className="flex items-center justify-between"><span className={`font-mono text-xs ${x.text}`}>{id}</span><span className={`h-2.5 w-2.5 rounded-full ${past || activeGate ? x.dot : "bg-gray-800"}`} /></div><div className="mt-9 flex items-center gap-2"><span className={`h-3 w-3 rounded-full border ${activeGate ? x.border : "border-white/20"} ${past ? x.dot : "bg-[#050607]"}`} /><span className="h-px flex-1 bg-white/10" /></div><p className={`mt-7 text-sm font-bold tracking-[.22em] ${activeGate ? x.text : "text-gray-300"}`}>{name}</p><p className="mt-3 text-sm leading-5 text-[#8892a0]">{detail}</p><p className="absolute bottom-5 left-5 text-xs tracking-[.28em] text-gray-700">{activeGate ? "SELECTED" : past ? "PREVIOUS" : "UP NEXT"}</p></button>; })}</div></div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[520px] w-[1160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-amber-300/10 lg:block" /><div className="sist-sentinel-orbit sist-sentinel-orbit-a"><span className="sist-sentinel sist-sentinel-green" /></div><div className="sist-sentinel-orbit sist-sentinel-orbit-b"><span className="sist-sentinel sist-sentinel-red" /></div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3"><div className="border border-amber-300/15 bg-amber-300/[.025] p-6"><p className="text-xs tracking-[.35em] text-amber-300">GOLD / CONTROLLED PIPELINE</p><p className="mt-3 text-xs leading-6 text-[#8892a0]">Stages organize the record, analysis, challenge, and final briefing.</p></div><div className="border border-red-400/20 bg-red-400/[.025] p-6"><p className="text-xs tracking-[.35em] text-red-300">RED / ADVERSARIAL SENTINEL</p><p className="mt-3 text-xs leading-6 text-[#8892a0]">Countermeasures challenges assumptions, contradictions, and failure paths.</p></div><div className="border border-emerald-400/20 bg-emerald-400/[.025] p-6"><p className="text-xs tracking-[.35em] text-emerald-300">GREEN / VERIFICATION SENTINEL</p><p className="mt-3 text-xs leading-6 text-[#8892a0]">Briefer and Deploy Master prepare reviewed findings for final human approval.</p></div></section>
      </div>
    </main>
  );
}
