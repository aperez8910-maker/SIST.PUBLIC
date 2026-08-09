"use client";

import Link from "next/link";
import Image from "next/image";

const sentinels = [
  ["INTAKE", -90, "gold"], ["ANALYZE", -45, "white"], ["RESEARCH", 0, "green"], ["INTEGRATE", 45, "gold"],
  ["CHALLENGE", 90, "red"], ["VERIFY", 135, "green"], ["BRIEF", 180, "white"], ["DEPLOY", 225, "gold"],
] as const;

const tone = {
  gold: "border-[#d7ad4b]/70 text-[#f0c75e]",
  white: "border-white/30 text-white/85",
  green: "border-[#38e39a]/65 text-[#65f0b0]",
  red: "border-[#ff4d5e]/80 text-[#ff6674]",
};

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#020304] px-6 text-white">
      <div className="sist-noise pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_52%_50%,rgba(213,169,62,.10),transparent_19%),radial-gradient(circle_at_52%_50%,rgba(56,227,154,.035),transparent_35%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,.025),transparent_55%)]" />
      <div className="sist-scan pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto flex min-h-screen w-full max-w-[1540px] items-center py-16 lg:py-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[.68fr_1.9fr_.48fr]">
          <div className="relative z-30 max-w-xl">
            <div className="sist-kicker flex items-center gap-3 text-[9px] font-semibold tracking-[.5em] text-[#d7ad4b]"><span className="h-px w-9 bg-[#d7ad4b]" />SYSTEM / 01</div>
            <h1 className="mt-6 text-[clamp(3.3rem,5.8vw,6.4rem)] font-medium leading-[.86] tracking-[-.055em]">INTELLIGENCE<br /><span className="sist-metal">WITHOUT</span><br /><span className="text-[#d7ad4b]">CONSENSUS.</span></h1>
            <p className="mt-7 max-w-md text-[14px] leading-7 text-white/52 sm:text-[15px]">SIST is an adversarial intelligence architecture built to force independent reasoning paths into structured challenge, integration, and verification.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/system" className="sist-button group border border-[#d7ad4b]/70 bg-[#d7ad4b]/[.055] px-7 py-3 text-[10px] font-semibold tracking-[.22em] text-[#f0c75e]"><span>EXPLORE SYSTEM</span><i>↗</i></Link><Link href="/interactive" className="border border-white/12 px-7 py-3 text-[10px] font-semibold tracking-[.22em] text-white/55 transition hover:border-white/35 hover:text-white">ENTER CORE</Link></div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[790px] select-none">
            <div className="sist-reactor absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[.07]" />
            <div className="absolute left-1/2 top-1/2 h-[54%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7ad4b]/20" />
            <div className="absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#38e39a]/15" />

            <svg viewBox="0 0 100 100" className="absolute inset-[5%] h-[90%] w-[90%] overflow-visible" aria-hidden="true">
              <defs>
                <filter id="sist-glow"><feGaussianBlur stdDeviation=".55" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                <linearGradient id="goldLine"><stop stopColor="#d7ad4b" stopOpacity=".05" /><stop offset=".5" stopColor="#d7ad4b" stopOpacity=".8" /><stop offset="1" stopColor="#d7ad4b" stopOpacity=".05" /></linearGradient>
              </defs>
              {sentinels.map(([label, angle, t], index) => {
                const r = 36, x = 50 + r * Math.cos(angle * Math.PI / 180), y = 50 + r * Math.sin(angle * Math.PI / 180);
                const c = t === "red" ? "#ff4d5e" : t === "green" ? "#38e39a" : t === "gold" ? "#d7ad4b" : "#d9dde2";
                return <g key={label}>
                  <path d={`M50 50 L ${x} ${y}`} fill="none" stroke={c} strokeOpacity=".14" strokeWidth=".18" />
                  <path d={`M50 50 L ${x} ${y}`} fill="none" stroke="url(#goldLine)" strokeWidth=".28" strokeDasharray=".7 3.2" className="sist-data-line" style={{ animationDelay: `${index * 260}ms` }} />
                  <circle cx={x} cy={y} r="1.05" fill={c} filter="url(#sist-glow)" className="sist-node" style={{ animationDelay: `${index * 430}ms` }} />
                </g>;
              })}
              <circle cx="50" cy="50" r="24" fill="none" stroke="#d7ad4b" strokeOpacity=".16" strokeWidth=".22" strokeDasharray=".5 2.5" className="sist-ring-spin" />
              <circle cx="50" cy="50" r="31" fill="none" stroke="#38e39a" strokeOpacity=".08" strokeWidth=".16" strokeDasharray=".4 4" className="sist-ring-spin reverse" />
            </svg>

            <div className="absolute inset-[8%] sist-orbit">
              {sentinels.map(([label, angle, t]) => {
                const left = 50 + 36 * Math.cos(angle * Math.PI / 180), top = 50 + 36 * Math.sin(angle * Math.PI / 180);
                return <div key={label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${left}%`, top: `${top}%` }}><div className={`sist-sentinel flex min-w-[98px] items-center justify-center gap-2 rounded-[2px] border bg-[#050708]/95 px-3 py-2.5 text-[7px] font-semibold tracking-[.22em] backdrop-blur ${tone[t]}`}><span className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor]" />{label}</div></div>;
              })}
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-[37%] w-[37%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <div className="sist-core-aura absolute inset-[-16%] rounded-full" />
              <div className="absolute inset-0 rounded-full border border-[#d7ad4b]/35 bg-[#050607] shadow-[0_0_90px_rgba(215,173,75,.14),inset_0_0_60px_rgba(215,173,75,.08)]" />
              <div className="absolute inset-[6%] rounded-full border border-white/[.10]" />
              <div className="absolute inset-[12%] rounded-full border border-[#38e39a]/20 border-dashed" />
              <div className="relative flex h-[72%] w-[72%] items-center justify-center rounded-full border border-[#d7ad4b]/45 bg-[#020304] shadow-[inset_0_0_45px_rgba(215,173,75,.10)]"><Image src="/logo.png" alt="SIST logo" width={220} height={220} priority className="h-auto w-[70%]" /></div>
            </div>

            <div className="absolute left-1/2 top-[5%] -translate-x-1/2 whitespace-nowrap text-[7px] font-semibold tracking-[.42em] text-white/25">ADVERSARIAL INTELLIGENCE ARRAY</div>
            <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[7px] font-semibold tracking-[.34em] text-white/30"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#38e39a] shadow-[0_0_10px_#38e39a]" />08 SENTINELS · 09 GATES · VERIFICATION LIVE</div>
          </div>

          <div className="relative z-30 hidden lg:block"><div className="border-l border-white/[.08] pl-5"><div className="text-[8px] font-semibold tracking-[.35em] text-white/25">ARCHITECTURE</div><div className="mt-5 space-y-5 text-[8px] tracking-[.17em]"><div><span className="block text-white/25">REASONING PATHS</span><span className="mt-1 block text-white/75">MULTIPLE / INDEPENDENT</span></div><div><span className="block text-white/25">CHALLENGE</span><span className="mt-1 block text-[#ff6674]">ADVERSARIAL / ACTIVE</span></div><div><span className="block text-white/25">INTEGRATION</span><span className="mt-1 block text-[#f0c75e]">GATED / STRUCTURED</span></div><div><span className="block text-white/25">VERIFICATION</span><span className="mt-1 block text-[#65f0b0]">CROSS-SENTINEL</span></div></div><div className="mt-8 h-px bg-white/[.08]" /><div className="mt-4 text-[7px] leading-5 tracking-[.15em] text-white/22">NOT A CHAT WINDOW.<br />NOT A SINGLE PASS.<br />A SYSTEM FOR PRESSURE.</div></div></div>
        </div>
      </div>
    </section>
  );
}
