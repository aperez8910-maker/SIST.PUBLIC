"use client";

import Link from "next/link";
import Image from "next/image";

const sentinels = [
  ["INTAKE", -90, "gold"], ["ANALYZE", -45, "white"], ["RESEARCH", 0, "green"], ["INTEGRATE", 45, "gold"],
  ["CHALLENGE", 90, "red"], ["VERIFY", 135, "green"], ["BRIEF", 180, "white"], ["DEPLOY", 225, "gold"],
] as const;

const tone = { gold: "border-amber-400/70 text-amber-300", white: "border-white/35 text-white", green: "border-emerald-400/60 text-emerald-300", red: "border-red-500/80 text-red-400" };

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#030303] px-6 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_48%,rgba(190,150,55,.09),transparent_25%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,.025),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.16] [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="mx-auto flex min-h-screen w-full max-w-[1500px] items-center py-20 lg:py-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[.72fr_1.65fr_.55fr]">
          <div className="relative z-30 max-w-xl">
            <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[.45em] text-amber-300/80"><span className="h-px w-8 bg-amber-400/70" /> SIST</div>
            <h1 className="mt-6 text-5xl font-medium leading-[.94] tracking-[-.04em] sm:text-6xl lg:text-7xl">SYSTEM<br />INTELLIGENCE<br /><span className="text-amber-300">UNDER PRESSURE.</span></h1>
            <p className="mt-7 max-w-lg text-[15px] leading-7 text-white/55 sm:text-base">An adversarial intelligence architecture designed to decompose complexity, challenge assumptions, synchronize independent reasoning, and verify the result.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/system" className="border border-amber-400/60 bg-amber-400/[.07] px-7 py-3 text-xs font-semibold tracking-[.18em] text-amber-200 transition hover:bg-amber-300 hover:text-black">EXPLORE SYSTEM</Link><Link href="/interactive" className="border border-white/15 px-7 py-3 text-xs font-semibold tracking-[.18em] text-white/65 transition hover:border-white/45 hover:text-white">ENTER CORE</Link></div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[760px] select-none">
            <div className="absolute left-1/2 top-1/2 h-[73%] w-[73%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/20 shadow-[0_0_80px_rgba(245,158,11,.04)]" />
            <div className="absolute left-1/2 top-1/2 h-[59%] w-[59%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute left-1/2 top-1/2 h-[43%] w-[43%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/15" />
            <svg viewBox="0 0 100 100" className="absolute inset-[7%] h-[86%] w-[86%] overflow-visible" aria-hidden="true"><defs><filter id="sist-glow"><feGaussianBlur stdDeviation=".7" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs>{sentinels.map(([label,angle,t])=>{const r=36,x=50+r*Math.cos(angle*Math.PI/180),y=50+r*Math.sin(angle*Math.PI/180);const c=t==="red"?"rgba(239,68,68,.7)":t==="green"?"rgba(16,185,129,.5)":t==="gold"?"rgba(245,158,11,.6)":"rgba(255,255,255,.3)";return <g key={label}><path d={`M50 50 L ${x} ${y}`} fill="none" stroke={c} strokeWidth=".24" strokeDasharray="1 2.2" /><circle cx={x} cy={y} r="1.15" fill={c} filter="url(#sist-glow)" className="animate-pulse" /><path d={`M50 50 L ${x} ${y}`} fill="none" stroke={c} strokeWidth=".45" strokeDasharray=".5 10" className="sist-track" /></g>})}</svg>
            <div className="absolute inset-[9%] sist-orbit">{sentinels.map(([label,angle,t])=>{const left=50+36*Math.cos(angle*Math.PI/180),top=50+36*Math.sin(angle*Math.PI/180);return <div key={label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{left:`${left}%`,top:`${top}%`}}><div className={`flex min-w-[92px] items-center justify-center gap-2 rounded-sm border bg-black/90 px-3 py-2 text-[8px] font-semibold tracking-[.2em] shadow-[0_0_22px_rgba(0,0,0,.8)] backdrop-blur ${tone[t]}`}><span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_9px_currentColor]" />{label}</div></div>})}</div>
            <div className="absolute left-1/2 top-1/2 flex h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 items-center justify-center"><div className="absolute inset-0 rounded-full border border-amber-300/30 bg-amber-300/[.025] shadow-[0_0_100px_rgba(245,158,11,.12)] sist-pulse" /><div className="absolute inset-[8%] rounded-full border border-red-500/20" /><div className="relative flex h-[72%] w-[72%] items-center justify-center rounded-full border border-amber-300/40 bg-[#050505] shadow-[inset_0_0_50px_rgba(245,158,11,.08),0_0_65px_rgba(245,158,11,.14)]"><Image src="/logo.png" alt="SIST logo" width={220} height={220} priority className="h-auto w-[72%]" /></div></div>
            <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-semibold tracking-[.32em] text-white/35"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,.8)]" />COUNCIL SYNCHRONIZED · GATES ACTIVE</div>
          </div>
          <div className="relative z-30 hidden lg:block"><div className="border-l border-white/10 pl-5"><div className="text-[9px] font-semibold tracking-[.3em] text-white/30">SIST / CORE STATUS</div><div className="mt-4 space-y-4 text-[9px] tracking-[.18em]"><div className="flex justify-between gap-5"><span className="text-white/35">SENTINELS</span><span className="text-emerald-300">08 ONLINE</span></div><div className="flex justify-between gap-5"><span className="text-white/35">GATES</span><span className="text-amber-300">ARMED</span></div><div className="flex justify-between gap-5"><span className="text-white/35">VERIFY</span><span className="text-emerald-300">READY</span></div><div className="flex justify-between gap-5"><span className="text-white/35">CHALLENGE</span><span className="text-red-400">LIVE</span></div></div><div className="mt-8 h-px w-full bg-white/10" /><div className="mt-4 text-[8px] leading-5 tracking-[.14em] text-white/25">MULTI-PATH REASONING<br />CROSS-SENTINEL VALIDATION<br />ADVERSARIAL INTEGRATION</div></div></div>
        </div>
      </div>
    </section>
  );
}
