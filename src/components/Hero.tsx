"use client";

import Link from "next/link";
import Image from "next/image";

const stages = [
  ["01", "INTAKE", "gold"],
  ["02", "ANALYZE", "white"],
  ["03", "RESEARCH", "green"],
  ["04", "INTEGRATE", "gold"],
  ["05", "CHALLENGE", "red"],
  ["06", "VERIFY", "green"],
  ["07", "BRIEF", "white"],
  ["08", "DEPLOY", "gold"],
] as const;

const tone = {
  gold: { border: "border-[#d7ad4b]/70", text: "text-[#f0c75e]", dot: "bg-[#d7ad4b]" },
  white: { border: "border-white/25", text: "text-white/80", dot: "bg-white" },
  green: { border: "border-[#38e39a]/65", text: "text-[#65f0b0]", dot: "bg-[#38e39a]" },
  red: { border: "border-[#ff4d5e]/80", text: "text-[#ff6674]", dot: "bg-[#ff4d5e]" },
};

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#020304] px-6 text-white">
      <div className="sist-noise pointer-events-none absolute inset-0 -z-20" />
      <div className="sist-grid pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_55%_48%,rgba(215,173,75,.07),transparent_24%),linear-gradient(90deg,rgba(255,255,255,.018),transparent_25%,transparent_75%,rgba(255,255,255,.018))]" />
      <div className="sist-scan pointer-events-none absolute inset-x-0 top-0 -z-10" />

      <div className="mx-auto flex min-h-screen w-full max-w-[1560px] items-center py-14 lg:py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[.62fr_2fr_.42fr]">
          <div className="relative z-30 max-w-xl">
            <div className="flex items-center gap-3 text-[9px] font-semibold tracking-[.5em] text-[#d7ad4b]"><span className="h-px w-9 bg-[#d7ad4b]" />SYSTEM / 01</div>
            <h1 className="mt-6 text-[clamp(3.2rem,5.6vw,6.1rem)] font-medium leading-[.86] tracking-[-.055em]">INTELLIGENCE<br /><span className="sist-metal">WITHOUT</span><br /><span className="text-[#d7ad4b]">CONSENSUS.</span></h1>
            <p className="mt-7 max-w-md text-[14px] leading-7 text-white/52 sm:text-[15px]">SIST is an adversarial intelligence architecture built to force independent reasoning paths through structured gates of challenge, integration, and verification.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/system" className="sist-button group border border-[#d7ad4b]/70 bg-[#d7ad4b]/[.055] px-7 py-3 text-[10px] font-semibold tracking-[.22em] text-[#f0c75e]"><span>EXPLORE SYSTEM</span><i>↗</i></Link><Link href="/interactive" className="border border-white/12 px-7 py-3 text-[10px] font-semibold tracking-[.22em] text-white/55 transition hover:border-white/35 hover:text-white">ENTER CORE</Link></div>
          </div>

          <div className="relative mx-auto h-[620px] w-full max-w-[900px] select-none lg:h-[690px]">
            <div className="absolute left-[5%] right-[5%] top-1/2 h-px bg-white/[.06]" />
            <div className="absolute left-[5%] right-[5%] top-1/2 h-px bg-gradient-to-r from-transparent via-[#d7ad4b]/45 to-transparent sist-flow-line" />
            <div className="absolute left-[5%] right-[5%] top-[calc(50%-62px)] h-px bg-white/[.035]" />
            <div className="absolute left-[5%] right-[5%] top-[calc(50%+62px)] h-px bg-white/[.035]" />

            <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 900 690" aria-hidden="true">
              <defs>
                <linearGradient id="trackGold" x1="0" x2="1"><stop stopColor="#d7ad4b" stopOpacity="0" /><stop offset=".2" stopColor="#d7ad4b" stopOpacity=".65" /><stop offset=".8" stopColor="#d7ad4b" stopOpacity=".65" /><stop offset="1" stopColor="#d7ad4b" stopOpacity="0" /></linearGradient>
                <linearGradient id="trackGreen" x1="0" x2="1"><stop stopColor="#38e39a" stopOpacity="0" /><stop offset=".5" stopColor="#38e39a" stopOpacity=".42" /><stop offset="1" stopColor="#38e39a" stopOpacity="0" /></linearGradient>
                <filter id="trackGlow"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <path d="M45 345 H855" stroke="url(#trackGold)" strokeWidth="2" strokeOpacity=".18" />
              <path d="M45 345 H855" stroke="url(#trackGold)" strokeWidth="1" strokeDasharray="8 18" className="sist-flow-line" />
              <path d="M120 345 L250 255 L380 435 L510 255 L640 435 L780 345" fill="none" stroke="url(#trackGreen)" strokeWidth="1" strokeDasharray="3 13" className="sist-data-track" />
              {stages.map(([num], i) => {
                const x = 65 + i * 110;
                return <g key={num}>
                  <path d={`M${x} 315 V375 M${x + 34} 315 V375`} stroke="#d7ad4b" strokeOpacity=".16" strokeWidth="1" />
                  <path d={`M${x + 17} 315 V375`} stroke="#fff" strokeOpacity=".05" strokeWidth="1" strokeDasharray="2 6" />
                  <circle cx={x + 17} cy="345" r="3" fill="#020304" stroke="#d7ad4b" strokeOpacity=".65" filter="url(#trackGlow)" />
                </g>;
              })}
              <path d="M790 345 L842 345" stroke="#38e39a" strokeWidth="1.5" strokeOpacity=".6" />
              <path d="M838 339 L850 345 L838 351" fill="none" stroke="#38e39a" strokeWidth="1.5" />
            </svg>

            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
              <div className="grid grid-cols-4 gap-3 px-2 sm:gap-5 sm:px-4">
                {stages.map(([num, label, color], index) => {
                  const t = tone[color];
                  return <div key={label} className="sist-gate relative">
                    <div className="sist-gate-frame absolute -inset-2" />
                    <div className={`relative mx-auto flex h-[112px] w-[92px] flex-col justify-between border bg-[#030506]/95 p-3 backdrop-blur sm:h-[128px] sm:w-[105px] ${t.border}`}>
                      <div className="flex items-center justify-between text-[7px] tracking-[.2em] text-white/25"><span>GATE</span><span>{num}</span></div>
                      <div><span className={`mb-2 block h-1.5 w-1.5 rounded-full ${t.dot} shadow-[0_0_12px_currentColor]`} /><span className={`block text-[8px] font-semibold tracking-[.15em] ${t.text}`}>{label}</span></div>
                      <div className="flex items-center gap-1.5 text-[6px] tracking-[.14em] text-white/20"><span className="h-px flex-1 bg-white/10" />ACTIVE</div>
                    </div>
                    {index < stages.length - 1 && <div className="absolute -right-[14px] top-1/2 z-20 h-px w-7 bg-[#d7ad4b]/30 sm:-right-[22px] sm:w-10" />}
                  </div>;
                })}
              </div>
            </div>

            <div className="absolute left-1/2 top-[9%] w-[330px] -translate-x-1/2 text-center sm:w-[480px]">
              <div className="text-[7px] font-semibold tracking-[.42em] text-white/22">SIST INTELLIGENCE PIPELINE</div>
              <div className="mt-3 text-[10px] tracking-[.24em] text-[#d7ad4b]/70">MULTI-PATH · GATED · ADVERSARIAL</div>
            </div>

            <div className="absolute bottom-[10%] left-1/2 w-[440px] -translate-x-1/2 text-center">
              <div className="mx-auto flex max-w-[420px] items-center justify-center gap-4 text-[7px] tracking-[.28em] text-white/25"><span className="h-px flex-1 bg-white/[.08]" /><span>VERIFICATION OUTPUT</span><span className="h-px flex-1 bg-white/[.08]" /></div>
              <div className="mt-5 flex justify-center gap-3"><span className="sist-status border border-[#38e39a]/30 px-3 py-2 text-[7px] tracking-[.2em] text-[#65f0b0]">CROSS-CHECK</span><span className="border border-[#ff4d5e]/30 px-3 py-2 text-[7px] tracking-[.2em] text-[#ff6674]">RED-TEAM</span><span className="border border-[#d7ad4b]/30 px-3 py-2 text-[7px] tracking-[.2em] text-[#f0c75e]">FINAL</span></div>
            </div>

            <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[7px] font-semibold tracking-[.34em] text-white/25"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#38e39a] shadow-[0_0_10px_#38e39a]" />08 STAGES · 09 GATES · PIPELINE LIVE</div>

            <div className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
              <div className="sist-core-mark flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#d7ad4b]/45 bg-[#020304] shadow-[0_0_60px_rgba(215,173,75,.14)] sm:h-[92px] sm:w-[92px]">
                <Image src="/logo.png" alt="SIST logo" width={220} height={220} priority className="h-auto w-[66%]" />
              </div>
            </div>
          </div>

          <div className="relative z-30 hidden lg:block"><div className="border-l border-white/[.08] pl-5"><div className="text-[8px] font-semibold tracking-[.35em] text-white/25">ARCHITECTURE</div><div className="mt-5 space-y-5 text-[8px] tracking-[.17em]"><div><span className="block text-white/25">PATHS</span><span className="mt-1 block text-white/75">MULTIPLE / INDEPENDENT</span></div><div><span className="block text-white/25">GATES</span><span className="mt-1 block text-[#f0c75e]">STRUCTURED / SEQUENTIAL</span></div><div><span className="block text-white/25">CHALLENGE</span><span className="mt-1 block text-[#ff6674]">ADVERSARIAL / ACTIVE</span></div><div><span className="block text-white/25">VERIFY</span><span className="mt-1 block text-[#65f0b0]">CROSS-SENTINEL</span></div></div><div className="mt-8 h-px bg-white/[.08]" /><div className="mt-4 text-[7px] leading-5 tracking-[.15em] text-white/22">NOT A CHAT WINDOW.<br />NOT A SINGLE PASS.<br />A CONTROLLED PIPELINE.</div></div></div>
        </div>
      </div>
    </section>
  );
}
