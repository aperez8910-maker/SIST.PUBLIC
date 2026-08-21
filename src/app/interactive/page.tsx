"use client";

import Image from "next/image";
import { useState } from "react";

const stages = [
  ["01", "INTAKE", "Mission, scope, actors and evidence enter the system.", "amber"],
  ["02", "ANALYZE", "Separate facts, assumptions, unknowns and competing explanations.", "amber"],
  ["03", "RESEARCH", "Acquire external signal and track source provenance.", "amber"],
  ["04", "INTEGRATE", "Fuse evidence into a working operating picture.", "amber"],
  ["05", "CHALLENGE", "Attack the working theory for contradictions and failure modes.", "red"],
  ["06", "VERIFY", "Trace critical claims back to evidence before release.", "green"],
  ["07", "BRIEF", "Compress surviving intelligence into a decision product.", "green"],
  ["08", "DEPLOY", "Move verified intelligence into the next operational step.", "amber"],
] as const;

type Kind = "amber" | "red" | "green";
const tone: Record<Kind, { border: string; text: string; dot: string; glow: string }> = {
  amber: { border: "border-amber-300/50", text: "text-amber-300", dot: "bg-amber-300", glow: "shadow-[0_0_35px_rgba(215,173,75,.22)]" },
  red: { border: "border-red-400/60", text: "text-red-300", dot: "bg-red-400", glow: "shadow-[0_0_35px_rgba(255,77,94,.25)]" },
  green: { border: "border-emerald-400/60", text: "text-emerald-300", dot: "bg-emerald-400", glow: "shadow-[0_0_35px_rgba(56,227,154,.22)]" },
};

export default function InteractivePage() {
  const [active, setActive] = useState(4);
  const selected = stages[active];
  const kind = selected[3] as Kind;
  const t = tone[kind];

  return (
    <main className="sist-page-shell min-h-screen text-white">
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <div className="sist-noise pointer-events-none fixed inset-0" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(215,173,75,.13),transparent_34%)]" />
      <div className="relative mx-auto max-w-[1700px] px-4 sm:px-8 py-5 sm:py-6">
        <header className="flex items-center justify-between border-b border-amber-300/15 pb-6">
          <div className="flex items-center gap-4"><span className="sist-brand-lockup"><Image src="/logo.png" alt="SIST" width={62} height={62} className="sist-logo sist-logo-gold" priority /></span><div><p className="text-xs tracking-[0.5em] text-amber-300">SIST</p><p className="mt-1 text-[9px] tracking-[0.28em] text-[#8892a0]">ADVERSARIAL INTELLIGENCE WORK FLOOR</p></div></div>
          <div className="flex items-center gap-2 border border-emerald-400/25 bg-emerald-400/[.04] px-4 py-2 text-[9px] tracking-[.25em] text-emerald-300"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> LIVE SYSTEM</div>
        </header>

        <section className="py-5 sm:py-6"><div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end"><div><p className="text-[9px] tracking-[.42em] text-amber-300">CONTROLLED PIPELINE / AIP</p><h1 className="sist-metal mt-4 text-5xl font-semibold leading-[.92] tracking-[-.05em] sm:text-7xl lg:text-8xl">INTELLIGENCE<br />WORK FLOOR</h1><p className="mt-6 max-w-3xl text-sm leading-7 text-[#8892a0]">The route is linear. Gates advance intelligence. Beacons show live flow. The Adversarial and Verification Sentinels are the only moving oversight layers.</p></div><div className="border border-white/10 bg-white/[.025] p-6"><div className="flex justify-between text-[9px] tracking-[.3em]"><span className="text-[#8892a0]">CURRENT GATE</span><span className={t.text}>{selected[0]} / 08</span></div><p className={`mt-3 text-2xl font-semibold ${t.text}`}>{selected[1]}</p><div className="mt-5 grid grid-cols-8 gap-1">{stages.map(([id,, ,k], i) => <button key={id} onClick={() => setActive(i)} aria-label={`Activate ${id}`} className={`h-2 ${i <= active ? tone[k as Kind].dot : "bg-white/10"}`} />)}</div></div></div></section>

        <section className="relative overflow-hidden border border-amber-300/20 bg-[#050810]/60 shadow-[0_0_120px_rgba(215,173,75,.07)]"><div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" /><div className="flex items-center justify-between border-b border-white/10 px-6 py-4"><span className="text-[8px] tracking-[.35em] text-[#8892a0]">PRIMARY INTELLIGENCE ROUTE</span><span className="text-[8px] tracking-[.35em] text-amber-300">FLOW ACTIVE / BEACONS LIVE</span></div>
          <div className="relative overflow-x-auto px-6 py-16"><div className="pointer-events-none absolute left-10 right-10 top-[143px] h-[2px] bg-gradient-to-r from-amber-300/30 via-amber-300/70 via-red-400/80 to-emerald-400/60" /><div className="sist-beacon-track" aria-hidden="true"><span className="sist-beacon sist-beacon-1" /><span className="sist-beacon sist-beacon-2" /><span className="sist-beacon sist-beacon-3 sist-beacon-red" /><span className="sist-beacon sist-beacon-4 sist-beacon-green" /><span className="sist-beacon sist-beacon-5" /></div><div className="relative z-10 grid min-w-[1180px] grid-cols-8 gap-3">{stages.map(([id, name, detail, k], i) => { const activeGate = active === i; const past = i < active; const x = tone[k as Kind]; return <button key={id} type="button" onClick={() => setActive(i)} className={`sist-gate sist-gate-frame group relative min-h-[240px] border bg-[#050607]/95 p-5 text-left backdrop-blur-xl transition-all duration-300 ${activeGate ? `${x.border} ${x.glow} -translate-y-3` : "border-white/10 hover:border-amber-300/30"}`}><div className="flex items-center justify-between"><span className={`font-mono text-[10px] ${x.text}`}>{id}</span><span className={`h-2.5 w-2.5 rounded-full ${past || activeGate ? x.dot : "bg-gray-800"}`} /></div><div className="mt-9 flex items-center gap-2"><span className={`h-3 w-3 rounded-full border ${activeGate ? x.border : "border-white/20"} ${past ? x.dot : "bg-[#050607]"}`} /><span className="h-px flex-1 bg-white/10" /></div><p className={`mt-7 text-[11px] font-bold tracking-[.22em] ${activeGate ? x.text : "text-gray-300"}`}>{name}</p><p className="mt-3 text-[11px] leading-5 text-[#8892a0]">{detail}</p><p className="absolute bottom-5 left-5 text-[7px] tracking-[.28em] text-gray-700">{activeGate ? "ACTIVE GATE" : past ? "CLEARED" : "LOCKED"}</p></button>; })}</div></div>
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[520px] w-[1160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-amber-300/10 lg:block" /><div className="sist-sentinel-orbit sist-sentinel-orbit-a"><span className="sist-sentinel sist-sentinel-green" /></div><div className="sist-sentinel-orbit sist-sentinel-orbit-b"><span className="sist-sentinel sist-sentinel-red" /></div>
        </section>

        <section className="mt-6 grid gap-4 md:grid-cols-3"><div className="border border-amber-300/15 bg-amber-300/[.025] p-6"><p className="text-[8px] tracking-[.35em] text-amber-300">GOLD / PRIMARY FLOW</p><p className="mt-3 text-xs leading-6 text-[#8892a0]">Evidence and reasoning move gate-to-gate. A stage records its state before the product advances.</p></div><div className="border border-red-400/20 bg-red-400/[.025] p-6"><p className="text-[8px] tracking-[.35em] text-red-300">RED / ADVERSARIAL SENTINEL</p><p className="mt-3 text-xs leading-6 text-[#8892a0]">The red Sentinel challenges unsupported conclusions, contradictions and failure modes.</p></div><div className="border border-emerald-400/20 bg-emerald-400/[.025] p-6"><p className="text-[8px] tracking-[.35em] text-emerald-300">GREEN / VERIFICATION SENTINEL</p><p className="mt-3 text-xs leading-6 text-[#8892a0]">The green Sentinel independently monitors the verification gate before release.</p></div></section>
      </div>
    </main>
  );
}
