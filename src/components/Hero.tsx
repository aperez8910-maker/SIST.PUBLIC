"use client";

import Link from "next/link";
import Image from "next/image";

const traces = [
  "M 50 50 L 50 8 L 72 8",
  "M 50 50 L 78 22 L 92 22",
  "M 50 50 L 92 50",
  "M 50 50 L 80 78 L 94 78",
  "M 50 50 L 50 92 L 30 92",
  "M 50 50 L 20 76 L 8 76",
  "M 50 50 L 8 50",
  "M 50 50 L 22 22 L 8 22",
];

const signalDots = [
  { x: 72, y: 8, delay: "0s" },
  { x: 92, y: 22, delay: ".45s" },
  { x: 92, y: 50, delay: ".9s" },
  { x: 94, y: 78, delay: "1.35s" },
  { x: 30, y: 92, delay: "1.8s" },
  { x: 8, y: 76, delay: "2.25s" },
  { x: 8, y: 50, delay: "2.7s" },
  { x: 8, y: 22, delay: "3.15s" },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen overflow-hidden bg-[#030609] px-6 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_48%,rgba(0,148,255,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(0,70,140,0.12),transparent_48%)]" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="scanline absolute inset-x-0 top-0 -z-10 h-px bg-sky-400/30" />

      <div className="mx-auto flex w-full max-w-[1500px] items-center py-20 lg:py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.8fr_1.5fr_0.55fr]">
          <div className="relative z-20 max-w-xl">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.42em] text-sky-400">
              <span className="h-px w-8 bg-sky-400/70" />
              SIST / SYSTEM INTELLIGENCE
            </div>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Intelligence<br />
              <span className="text-white/90">under pressure.</span>
            </h1>
            <p className="mt-7 max-w-lg text-[15px] leading-7 text-white/45 sm:text-base">
              An adversarial intelligence architecture engineered to organize complexity, challenge assumptions, verify claims, and expose weak points before they become failures.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/system" className="group inline-flex items-center gap-3 border border-sky-400/50 bg-sky-400/[0.06] px-6 py-3 text-[11px] tracking-[0.16em] text-white transition hover:border-sky-300 hover:bg-sky-300 hover:text-black">
                ARCHITECTURE <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/interactive" className="inline-flex items-center gap-3 border border-white/10 px-6 py-3 text-[11px] tracking-[0.16em] text-white/55 transition hover:border-white/30 hover:text-white">
                ENTER CORE
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[720px] select-none">
            <div className="absolute inset-[7%] rounded-full border border-sky-400/[0.06]" />
            <div className="absolute inset-[14%] rounded-full border border-sky-400/[0.11]" />
            <div className="absolute inset-[22%] rounded-full border border-white/[0.08]" />
            <div className="absolute inset-[31%] rounded-full border border-sky-300/[0.18] shadow-[0_0_100px_rgba(0,145,255,0.08)]" />

            <div className="absolute inset-[5%] animate-[spin_36s_linear_infinite] rounded-full border border-transparent border-t-sky-400/30 border-r-sky-400/10" />
            <div className="absolute inset-[17%] animate-[spin_22s_linear_infinite_reverse] rounded-full border border-transparent border-b-white/20 border-l-sky-300/20" />
            <div className="absolute inset-[27%] animate-[spin_14s_linear_infinite] rounded-full border border-transparent border-t-sky-300/25" />

            <div className="absolute inset-[10%]">
              <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
                <defs>
                  <filter id="coreGlow"><feGaussianBlur stdDeviation="0.7" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                  <linearGradient id="trace" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#38bdf8" stopOpacity=".15" /><stop offset=".5" stopColor="#38bdf8" stopOpacity=".8" /><stop offset="1" stopColor="#38bdf8" stopOpacity=".15" /></linearGradient>
                </defs>
                {traces.map((d, i) => (
                  <g key={i}>
                    <path d={d} fill="none" stroke="url(#trace)" strokeWidth=".24" />
                    <path d={d} fill="none" stroke="#38bdf8" strokeOpacity=".55" strokeWidth=".5" strokeDasharray="2 8" className="animate-[dash_4s_linear_infinite]" style={{ animationDelay: `${i * 0.25}s` }} />
                  </g>
                ))}
                {signalDots.map((dot, i) => (
                  <circle key={i} cx={dot.x} cy={dot.y} r=".9" fill="#38bdf8" filter="url(#coreGlow)" className="animate-pulse" style={{ animationDelay: dot.delay }} />
                ))}
                <circle cx="50" cy="50" r="19" fill="none" stroke="#38bdf8" strokeOpacity=".12" strokeWidth=".5" strokeDasharray=".8 2.8" />
              </svg>
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <div className="absolute inset-[-22%] rounded-full border border-sky-400/10 bg-sky-400/[0.015] shadow-[0_0_100px_rgba(0,145,255,0.18)] animate-[pulse_4s_ease-in-out_infinite]" />
              <div className="absolute inset-[-8%] rounded-full border border-sky-300/20" />
              <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/15 bg-[#03080d]/95 shadow-[inset_0_0_45px_rgba(56,189,248,0.08),0_0_70px_rgba(0,120,220,0.2)]">
                <Image src="/logo.png" alt="SIST Logo" width={260} height={260} priority className="h-auto w-[68%] object-contain" />
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 translate-y-[190px] items-center gap-3 text-[8px] tracking-[0.32em] text-white/30 sm:translate-y-[230px]">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
              CORE SYNCHRONIZED / 09 NODES
            </div>
          </div>

          <div className="relative z-20 hidden lg:block">
            <div className="border-l border-white/10 pl-5">
              <div className="text-[9px] tracking-[0.32em] text-white/25">LIVE SYSTEM</div>
              <div className="mt-3 flex items-center gap-2 text-[11px] tracking-[0.12em] text-emerald-400">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                OPERATIONAL
              </div>
              <div className="mt-8 space-y-5 text-[9px] tracking-[0.2em] text-white/25">
                <div><div className="mb-2 flex justify-between"><span>COUNCIL</span><span className="text-white/50">ONLINE</span></div><div className="h-px bg-white/10"><div className="h-px w-[91%] bg-sky-400/60" /></div></div>
                <div><div className="mb-2 flex justify-between"><span>INTEGRATION</span><span className="text-white/50">ACTIVE</span></div><div className="h-px bg-white/10"><div className="h-px w-[84%] bg-sky-400/60" /></div></div>
                <div><div className="mb-2 flex justify-between"><span>VERIFICATION</span><span className="text-white/50">READY</span></div><div className="h-px bg-white/10"><div className="h-px w-[97%] bg-sky-400/60" /></div></div>
                <div><div className="mb-2 flex justify-between"><span>ADVERSARIAL</span><span className="text-red-300/80">ARMED</span></div><div className="h-px bg-white/10"><div className="h-px w-[76%] bg-red-400/60" /></div></div>
              </div>
              <div className="mt-9 font-mono text-[8px] leading-5 tracking-[0.15em] text-white/15">
                SYS // 09-STAGE ORCHESTRATION<br />
                SIGNAL // CONTINUOUS<br />
                MODE // ADVERSARIAL<br />
                STATUS // NOMINAL
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash { to { stroke-dashoffset: -40; } }
        .scanline { animation: scan 7s linear infinite; }
        @keyframes scan { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: .5; } 90% { opacity: .5; } 100% { transform: translateY(100vh); opacity: 0; } }
      `}</style>
    </section>
  );
}
