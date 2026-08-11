"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const stages = [
  { id: "01", name: "INTAKE", role: "Capture the problem", detail: "Define mission, scope, constraints, actors, and available evidence before analysis begins.", tone: "amber" },
  { id: "02", name: "ANALYZE", role: "Break the problem apart", detail: "Separate facts, assumptions, dependencies, unknowns, and competing explanations.", tone: "amber" },
  { id: "03", name: "RESEARCH", role: "Acquire external signal", detail: "Pull relevant sources and distinguish sourced facts from inference.", tone: "amber" },
  { id: "04", name: "INTEGRATE", role: "Build the operating picture", detail: "Fuse internal and external evidence into a coherent model.", tone: "amber" },
  { id: "05", name: "CHALLENGE", role: "Attack the conclusion", detail: "Red-team the working theory and search for contradictions, failure modes, and unsupported claims.", tone: "red" },
  { id: "06", name: "VERIFY", role: "Test the record", detail: "Trace important claims back to evidence and identify what remains unverified.", tone: "green" },
  { id: "07", name: "BRIEF", role: "Produce decision intelligence", detail: "Convert the verified picture into a concise intelligence product.", tone: "green" },
  { id: "08", name: "DEPLOY", role: "Put intelligence to work", detail: "Deliver the result into the next operational step while preserving provenance and status.", tone: "amber" },
];

const tone = {
  amber: { text: "text-amber-300", border: "border-amber-300/40", dot: "bg-amber-300", glow: "shadow-[0_0_35px_rgba(215,173,75,.25)]" },
  red: { text: "text-red-300", border: "border-red-400/50", dot: "bg-red-400", glow: "shadow-[0_0_35px_rgba(255,77,94,.25)]" },
  green: { text: "text-emerald-300", border: "border-emerald-400/50", dot: "bg-emerald-400", glow: "shadow-[0_0_35px_rgba(56,227,154,.22)]" },
};

export default function InteractivePage() {
  const [active, setActive] = useState("05");
  const selected = useMemo(() => stages.find((stage) => stage.id === active) ?? stages[4], [active]);
  const selectedTone = tone[selected.tone as keyof typeof tone];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020304] text-white">
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(215,173,75,.09),transparent_34%)]" />
      <div className="pointer-events-none fixed left-1/2 top-[42%] h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />

      <div className="relative mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="SIST Logo" width={56} height={56} priority className="sist-logo" />
            <div><p className="text-xs tracking-[0.4em] text-amber-300">SIST</p><p className="mt-1 text-[9px] tracking-[0.3em] text-gray-600">INTERACTIVE INTELLIGENCE WORK FLOOR</p></div>
          </div>
          <div className="hidden items-center gap-3 border border-emerald-400/20 bg-emerald-400/[0.04] px-4 py-2 text-[9px] tracking-[0.25em] text-emerald-300 sm:flex"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> SYSTEM ONLINE</div>
        </header>

        <div className="grid min-h-[calc(100vh-120px)] items-center gap-8 py-10 xl:grid-cols-[minmax(0,1fr)_390px]">
          <section className="relative min-h-[680px] overflow-hidden border border-white/10 bg-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(215,173,75,.10),transparent_36%)]" />
            <div className="absolute left-5 top-5 text-[9px] tracking-[0.3em] text-gray-600">LIVE PIPELINE / 08 NODES</div>
            <div className="absolute right-5 top-5 font-mono text-[9px] text-emerald-300">STATUS: ACTIVE</div>

            <div className="absolute left-[8%] right-[8%] top-1/2 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
            <div className="absolute left-[14%] right-[14%] top-1/2 h-[100px] -translate-y-1/2 border-y border-amber-300/10" />
            <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/10" />
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-emerald-300/10" />
            <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 animate-[spin_18s_linear_infinite_reverse] rounded-full border border-red-300/10" />

            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/30 bg-black/90 shadow-[0_0_100px_rgba(215,173,75,.18)] sm:h-52 sm:w-52">
              <div className="absolute inset-3 rounded-full border border-amber-300/10" />
              <div className="absolute inset-8 rounded-full border border-emerald-300/10 animate-pulse" />
              <Image src="/logo.png" alt="SIST Core" width={180} height={180} className="relative mx-auto mt-[16%] h-auto w-[68%] sist-logo" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] tracking-[0.3em] text-amber-300">SIST CORE</span>
            </div>

            <div className="absolute left-1/2 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 animate-[spin_11s_linear_infinite] rounded-full">
              <span className="absolute left-1/2 top-0 -ml-2 h-4 w-4 rounded-full border border-white bg-emerald-400 shadow-[0_0_25px_rgba(56,227,154,.8)]" title="Verification Sentinel" />
            </div>
            <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite_reverse] rounded-full">
              <span className="absolute left-1/2 top-0 -ml-2 h-4 w-4 rounded-full border border-white bg-red-400 shadow-[0_0_25px_rgba(255,77,94,.8)]" title="Adversarial Sentinel" />
            </div>

            {stages.map((stage, index) => {
              const angle = (index / stages.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 40;
              const y = 50 + Math.sin(angle) * 40;
              const isActive = active === stage.id;
              const c = tone[stage.tone as keyof typeof tone];
              return <button key={stage.id} type="button" onClick={() => setActive(stage.id)} aria-pressed={isActive} className="group absolute -translate-x-1/2 -translate-y-1/2 text-center" style={{ left: `${x}%`, top: `${y}%` }}>
                <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border bg-black/90 transition duration-300 sm:h-14 sm:w-14 ${isActive ? `${c.border} ${c.glow} scale-125` : "border-white/10 group-hover:border-white/30"}`}>
                  <span className={`h-2.5 w-2.5 rounded-full ${isActive ? c.dot : "bg-gray-600"} ${isActive ? "animate-pulse" : ""}`} />
                </span>
                <span className={`mt-2 block whitespace-nowrap text-[8px] tracking-[0.18em] ${isActive ? c.text : "text-gray-600 group-hover:text-gray-300"}`}>{stage.name}</span>
              </button>;
            })}

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/10 pt-4 text-[8px] tracking-[0.25em] text-gray-600"><span>PRIMARY ROUTE</span><span className="text-red-300">ADVERSARIAL LAYER ARMED</span><span className="text-emerald-300">VERIFICATION READY</span></div>
          </section>

          <aside className={`border ${selectedTone.border} bg-white/[0.025] p-7 backdrop-blur-xl ${selectedTone.glow}`}>
            <div className="flex items-start justify-between border-b border-white/10 pb-6">
              <div><p className={`text-[9px] tracking-[0.35em] ${selectedTone.text}`}>ACTIVE NODE</p><h1 className="mt-2 text-2xl font-semibold">{selected.name}</h1></div>
              <span className="font-mono text-xs text-gray-600">{selected.id}/08</span>
            </div>
            <p className="mt-7 text-sm font-medium text-gray-300">{selected.role}</p>
            <p className="mt-4 text-sm leading-7 text-gray-500">{selected.detail}</p>

            <div className="mt-8 space-y-4 border-y border-white/10 py-6 text-[9px] tracking-[0.2em]">
              <div className="flex justify-between"><span className="text-gray-600">PROCESS STATE</span><span className="text-emerald-300">ACTIVE</span></div>
              <div className="flex justify-between"><span className="text-gray-600">EVIDENCE LINK</span><span className="text-gray-300">CONNECTED</span></div>
              <div className="flex justify-between"><span className="text-gray-600">ADVERSARIAL LAYER</span><span className={selected.id === "05" ? "text-red-300" : "text-gray-400"}>{selected.id === "05" ? "ENGAGED" : "STANDBY"}</span></div>
            </div>

            <div className="mt-7"><p className="text-[9px] tracking-[0.3em] text-gray-600">SELECT PIPELINE NODE</p><div className="mt-4 grid grid-cols-8 gap-1.5">{stages.map((stage) => <button key={stage.id} type="button" onClick={() => setActive(stage.id)} className={`h-2 transition ${stage.id === active ? tone[stage.tone as keyof typeof tone].dot : "bg-white/10 hover:bg-white/25"}`} aria-label={`Select ${stage.name}`} />)}</div></div>

            <div className="mt-8 border border-white/10 bg-black/30 p-5"><div className="flex items-center gap-3"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /><span className="text-[9px] tracking-[0.25em] text-gray-400">SENTINEL MONITORING ACTIVE</span></div><p className="mt-3 text-xs leading-6 text-gray-600">Independent challenge and verification layers remain active around the work floor.</p></div>
          </aside>
        </div>
      </div>
    </main>
  );
}
