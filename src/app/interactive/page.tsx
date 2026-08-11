"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const stages = [
  ["01", "INTAKE", "Mission, scope, actors and evidence enter the system.", "amber"],
  ["02", "ANALYZE", "Facts, assumptions, unknowns and competing explanations are separated.", "amber"],
  ["03", "RESEARCH", "External signal is acquired and source provenance is tracked.", "amber"],
  ["04", "INTEGRATE", "Evidence is fused into a working operating picture.", "amber"],
  ["05", "CHALLENGE", "The working theory is attacked for contradictions and failure modes.", "red"],
  ["06", "VERIFY", "Critical claims are traced back to evidence before release.", "green"],
  ["07", "BRIEF", "The surviving intelligence is compressed into a decision product.", "green"],
  ["08", "DEPLOY", "The intelligence product moves into the next operational step.", "amber"],
] as const;

const colors = {
  amber: { border: "border-amber-300/40", text: "text-amber-300", dot: "bg-amber-300", line: "bg-amber-300", glow: "shadow-[0_0_30px_rgba(215,173,75,.20)]" },
  red: { border: "border-red-400/50", text: "text-red-300", dot: "bg-red-400", line: "bg-red-400", glow: "shadow-[0_0_30px_rgba(255,77,94,.20)]" },
  green: { border: "border-emerald-400/50", text: "text-emerald-300", dot: "bg-emerald-400", line: "bg-emerald-400", glow: "shadow-[0_0_30px_rgba(56,227,154,.18)]" },
};

export default function InteractivePage() {
  const [active, setActive] = useState(4);
  const selected = stages[active];
  const c = colors[selected[3]];
  const progress = useMemo(() => Math.round(((active + 1) / stages.length) * 100), [active]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020304] text-white">
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <div className="sist-noise pointer-events-none fixed inset-0" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(215,173,75,.10),transparent_30%)]" />
      <div className="relative mx-auto max-w-[1600px] px-5 py-7 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-4"><Image src="/logo.png" alt="SIST" width={54} height={54} className="sist-logo" priority /><div><p className="text-xs tracking-[0.45em] text-amber-300">SIST</p><p className="mt-1 text-[9px] tracking-[0.3em] text-gray-600">INTERACTIVE INTELLIGENCE WORK FLOOR</p></div></div>
          <div className="hidden items-center gap-3 border border-emerald-400/20 bg-emerald-400/[0.04] px-4 py-2 text-[9px] tracking-[0.25em] text-emerald-300 sm:flex"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> SYSTEM ONLINE</div>
        </header>

        <div className="py-10">
          <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="text-[9px] tracking-[0.4em] text-amber-300">CONTROLLED PIPELINE / LIVE MODEL</p><h1 className="sist-metal mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">INTELLIGENCE<br />WORK FLOOR</h1><p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500">Eight gated stages move intelligence forward. The pipeline stays linear; only the Sentinel layers orbit the work floor to challenge and verify the route.</p></div><div className="w-full max-w-sm border border-white/10 bg-white/[0.02] p-5"><div className="flex justify-between text-[9px] tracking-[0.25em]"><span className="text-gray-600">PIPELINE PROGRESS</span><span className={c.text}>{progress}%</span></div><div className="mt-4 h-1 bg-white/10"><div className={`h-full ${c.line} transition-all duration-500`} style={{ width: `${progress}%` }} /></div></div></div>

          <section className="relative overflow-hidden border border-amber-300/15 bg-black/50 p-5 shadow-[0_0_100px_rgba(215,173,75,.06)] sm:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
            <div className="absolute inset-x-0 top-1/2 hidden h-px bg-amber-300/5 lg:block" />
            <div className="mb-8 flex items-center justify-between text-[8px] tracking-[0.3em]"><span className="text-gray-600">PRIMARY INTELLIGENCE ROUTE</span><span className="text-emerald-300">GATES ACTIVE / 08</span></div>

            <div className="relative overflow-x-auto pb-8 pt-10">
              <div className="absolute left-8 right-8 top-[92px] hidden h-px bg-gradient-to-r from-amber-300/20 via-amber-300/60 via-red-400/70 to-emerald-400/50 lg:block" />
              <div className="relative grid min-w-[1040px] grid-cols-8 gap-3">
                {stages.map(([id, name, detail, kind], index) => { const tone = colors[kind]; const isActive = active === index; const isPast = index < active; return <button key={id} type="button" onClick={() => setActive(index)} className={`sist-gate-frame group relative min-h-[210px] border bg-black/80 p-4 text-left backdrop-blur transition-all duration-300 ${isActive ? `${tone.border} ${tone.glow} -translate-y-2` : "border-white/10 hover:border-white/25"}`}><div className="flex items-center justify-between"><span className={`font-mono text-[10px] ${tone.text}`}>{id}</span><span className={`h-2 w-2 rounded-full ${isPast || isActive ? tone.dot : "bg-gray-700"} ${isActive ? "animate-pulse shadow-[0_0_14px_currentColor]" : ""}`} /></div><div className="mt-7 flex items-center gap-2"><span className={`h-3 w-3 rounded-full border ${isActive ? tone.border : "border-white/15"} ${isPast ? tone.dot : "bg-black"}`} /><span className="h-px flex-1 bg-white/10" /></div><p className={`mt-6 text-[10px] font-semibold tracking-[0.18em] ${isActive ? tone.text : "text-gray-300"}`}>{name}</p><p className="mt-3 text-[11px] leading-5 text-gray-600">{detail}</p><span className="absolute bottom-4 left-4 text-[7px] tracking-[0.25em] text-gray-700">{isActive ? "ACTIVE GATE" : isPast ? "CLEARED" : "LOCKED"}</span></button>; })}
              </div>
            </div>

            <div className="relative mt-3 border-t border-white/10 pt-6">
              <div className="grid gap-5 md:grid-cols-3"><div className="border border-amber-300/15 bg-amber-300/[0.025] p-5"><p className="text-[8px] tracking-[0.3em] text-amber-300">PRIMARY ROUTE</p><p className="mt-3 text-xs leading-6 text-gray-500">Sequential gated reasoning moves left to right. No stage is skipped without a recorded state.</p></div><div className="border border-red-400/20 bg-red-400/[0.025] p-5"><p className="text-[8px] tracking-[0.3em] text-red-300">ADVERSARIAL SENTINEL</p><p className="mt-3 text-xs leading-6 text-gray-500">Orbits the work floor and monitors the route for unsupported conclusions, contradictions and failure modes.</p></div><div className="border border-emerald-400/20 bg-emerald-400/[0.025] p-5"><p className="text-[8px] tracking-[0.3em] text-emerald-300">VERIFICATION SENTINEL</p><p className="mt-3 text-xs leading-6 text-gray-500">Orbits independently and watches the verification gate before intelligence is released.</p></div></div>
            </div>

            <div className="sist-sentinel-orbit sist-sentinel-orbit-a" aria-hidden="true"><span className="sist-sentinel sist-sentinel-green" /></div>
            <div className="sist-sentinel-orbit sist-sentinel-orbit-b" aria-hidden="true"><span className="sist-sentinel sist-sentinel-red" /></div>
            <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[7px] tracking-[0.25em] text-gray-700 lg:block">SENTINEL OPERATING RADIUS</div>
          </section>

          <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]"><div className={`border ${c.border} bg-white/[0.02] p-7 ${c.glow}`}><div className="flex items-start justify-between"><div><p className={`text-[8px] tracking-[0.35em] ${c.text}`}>ACTIVE GATE</p><h2 className="mt-3 text-2xl font-semibold">{selected[1]}</h2></div><span className="font-mono text-xs text-gray-600">{selected[0]} / 08</span></div><p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500">{selected[2]}</p><div className="mt-7 grid grid-cols-8 gap-2">{stages.map(([id,, ,kind], i) => <button key={id} type="button" onClick={() => setActive(i)} className={`h-1.5 ${i === active ? colors[kind].dot : i < active ? "bg-white/25" : "bg-white/10"}`} aria-label={`Activate stage ${id}`} />)}</div></div><div className="border border-white/10 bg-white/[0.02] p-7"><p className="text-[8px] tracking-[0.35em] text-gray-600">WORK FLOOR STATUS</p><div className="mt-6 space-y-4 text-[9px] tracking-[0.18em]"><div className="flex justify-between"><span className="text-gray-600">PIPELINE</span><span className="text-amber-300">RUNNING</span></div><div className="flex justify-between"><span className="text-gray-600">RED TEAM</span><span className="text-red-300">ARMED</span></div><div className="flex justify-between"><span className="text-gray-600">VERIFICATION</span><span className="text-emerald-300">READY</span></div><div className="flex justify-between"><span className="text-gray-600">SENTINELS</span><span className="text-white">2 ACTIVE</span></div></div></div></section>
        </div>
      </div>
    </main>
  );
}
