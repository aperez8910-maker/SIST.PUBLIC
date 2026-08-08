"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const stages = [
  { id: "01", name: "INTAKE", role: "Capture the problem", detail: "Define the mission, scope, constraints, actors, and available evidence before analysis begins." },
  { id: "02", name: "ANALYZE", role: "Break the problem apart", detail: "Separate facts, assumptions, dependencies, unknowns, and competing explanations." },
  { id: "03", name: "RESEARCH", role: "Acquire external signal", detail: "Pull relevant sources and intelligence, then distinguish sourced facts from inference." },
  { id: "04", name: "INTEGRATE", role: "Build the picture", detail: "Fuse internal and external evidence into a coherent operating model." },
  { id: "05", name: "CHALLENGE", role: "Attack the conclusion", detail: "Red-team the working theory. Search for contradictions, failure modes, and unsupported claims." },
  { id: "06", name: "VERIFY", role: "Test the record", detail: "Trace important claims back to evidence and identify what remains unverified." },
  { id: "07", name: "BRIEF", role: "Produce decision intelligence", detail: "Convert the verified picture into a concise, decision-ready intelligence product." },
  { id: "08", name: "DEPLOY", role: "Put intelligence to work", detail: "Deliver the result into the next operational step while preserving provenance and status." },
];

export default function InteractivePage() {
  const [active, setActive] = useState("05");
  const selected = useMemo(() => stages.find((stage) => stage.id === active) ?? stages[4], [active]);

  return (
    <main className="min-h-screen overflow-hidden bg-black px-6 py-10 text-white sm:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="SIST Logo" width={48} height={48} priority />
            <div>
              <p className="text-xs tracking-[0.4em] text-sky-400">SIST</p>
              <p className="mt-1 text-[10px] tracking-[0.25em] text-gray-500">INTERACTIVE INTELLIGENCE CORE</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 text-[10px] tracking-[0.25em] text-emerald-400 sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            SYSTEM ONLINE
          </div>
        </header>

        <section className="grid min-h-[calc(100vh-130px)] items-center gap-12 py-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative mx-auto aspect-square w-full max-w-[720px]">
            <div className="absolute inset-[8%] rounded-full border border-sky-400/10" />
            <div className="absolute inset-[17%] animate-[spin_22s_linear_infinite] rounded-full border border-sky-400/20 border-dashed" />
            <div className="absolute inset-[29%] animate-[spin_14s_linear_infinite_reverse] rounded-full border border-white/10" />

            <svg viewBox="0 0 100 100" className="absolute inset-[8%] h-[84%] w-[84%] overflow-visible">
              {stages.map((stage, index) => {
                const angle = (index / stages.length) * Math.PI * 2 - Math.PI / 2;
                const x = 50 + Math.cos(angle) * 43;
                const y = 50 + Math.sin(angle) * 43;
                return (
                  <line
                    key={stage.id}
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke={active === stage.id ? "rgba(56,189,248,0.9)" : "rgba(56,189,248,0.22)"}
                    strokeWidth={active === stage.id ? "0.5" : "0.25"}
                    strokeDasharray="1.5 2"
                  />
                );
              })}
            </svg>

            {stages.map((stage, index) => {
              const angle = (index / stages.length) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 43;
              const y = 50 + Math.sin(angle) * 43;
              const isActive = active === stage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActive(stage.id)}
                  aria-pressed={isActive}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border bg-black/90 transition-all duration-300 sm:h-16 sm:w-16 ${isActive ? "scale-110 border-sky-300 shadow-[0_0_45px_rgba(56,189,248,0.35)]" : "border-white/15 group-hover:border-sky-400/60"}`}>
                    <span className={`h-2.5 w-2.5 rounded-full transition ${isActive ? "bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,1)]" : "bg-gray-600 group-hover:bg-sky-400"}`} />
                  </span>
                  <span className={`mt-2 block whitespace-nowrap text-[9px] font-medium tracking-[0.2em] ${isActive ? "text-sky-300" : "text-gray-500 group-hover:text-gray-300"}`}>
                    {stage.name}
                  </span>
                </button>
              );
            })}

            <div className="absolute left-1/2 top-1/2 flex h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sky-300/20 bg-black/90 shadow-[0_0_100px_rgba(30,120,255,0.16)]">
              <div className="absolute inset-[12%] animate-pulse rounded-full border border-sky-400/20" />
              <Image src="/logo.png" alt="SIST Logo" width={180} height={180} className="relative h-auto w-[58%]" />
            </div>
          </div>

          <aside className="relative border border-white/10 bg-white/[0.025] p-7 shadow-2xl backdrop-blur sm:p-9">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-[10px] tracking-[0.35em] text-sky-400">ACTIVE NODE</p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">{selected.name}</p>
              </div>
              <span className="font-mono text-xs text-gray-600">{selected.id}/08</span>
            </div>

            <p className="mt-7 text-sm font-medium tracking-wide text-gray-300">{selected.role}</p>
            <p className="mt-4 text-sm leading-7 text-gray-500">{selected.detail}</p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-[10px] tracking-[0.2em]">
              <div className="flex justify-between"><span className="text-gray-600">PROCESS STATE</span><span className="text-emerald-400">ACTIVE</span></div>
              <div className="flex justify-between"><span className="text-gray-600">EVIDENCE LINK</span><span className="text-gray-300">CONNECTED</span></div>
              <div className="flex justify-between"><span className="text-gray-600">CHALLENGE LAYER</span><span className={selected.id === "05" ? "text-red-300" : "text-gray-300"}>{selected.id === "05" ? "ARMED" : "READY"}</span></div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-[9px] tracking-[0.3em] text-gray-600">COUNCIL FLOW</p>
              <div className="mt-4 grid grid-cols-8 gap-1">
                {stages.map((stage) => (
                  <button key={stage.id} type="button" onClick={() => setActive(stage.id)} aria-label={`Select ${stage.name}`} className={`h-1.5 transition ${stage.id === active ? "bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" : "bg-white/10 hover:bg-white/30"}`} />
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
