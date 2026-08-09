"use client";

import Link from "next/link";
import Image from "next/image";

const stages = [
  ["01", "INTAKE", "gold", "INPUT"],
  ["02", "ANALYZE", "white", "DECOMPOSE"],
  ["03", "RESEARCH", "green", "EXPAND"],
  ["04", "INTEGRATE", "gold", "FUSE"],
  ["05", "CHALLENGE", "red", "ATTACK"],
  ["06", "VERIFY", "green", "TEST"],
  ["07", "BRIEF", "white", "SYNTHESIZE"],
  ["08", "DEPLOY", "gold", "OUTPUT"],
] as const;

const tone = {
  gold: { border: "border-[#d7ad4b]/65", text: "text-[#f0c75e]", line: "bg-[#d7ad4b]" },
  white: { border: "border-white/25", text: "text-white/80", line: "bg-white" },
  green: { border: "border-[#38e39a]/60", text: "text-[#65f0b0]", line: "bg-[#38e39a]" },
  red: { border: "border-[#ff4d5e]/75", text: "text-[#ff6674]", line: "bg-[#ff4d5e]" },
};

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#020304] px-6 text-white">
      <div className="sist-noise pointer-events-none absolute inset-0 -z-20" />
      <div className="sist-grid pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_58%_52%,rgba(215,173,75,.055),transparent_30%),linear-gradient(90deg,rgba(255,255,255,.016),transparent_22%,transparent_78%,rgba(255,255,255,.016))]" />
      <div className="sist-scan pointer-events-none absolute inset-x-0 top-0 -z-10" />

      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] items-center py-14 lg:py-20">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[.62fr_2.35fr_.38fr]">
          <div className="relative z-30 max-w-xl">
            <div className="flex items-center gap-3 text-[9px] font-semibold tracking-[.5em] text-[#d7ad4b]"><span className="h-px w-9 bg-[#d7ad4b]" />SYSTEM / 01</div>
            <h1 className="mt-6 text-[clamp(3.2rem,5.5vw,6.1rem)] font-medium leading-[.86] tracking-[-.055em]">INTELLIGENCE<br /><span className="sist-metal">WITHOUT</span><br /><span className="text-[#d7ad4b]">CONSENSUS.</span></h1>
            <p className="mt-7 max-w-md text-[14px] leading-7 text-white/52 sm:text-[15px]">SIST is an adversarial intelligence architecture that drives independent reasoning paths through controlled gates, active challenge, integration, and verification.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href="/system" className="sist-button border border-[#d7ad4b]/70 bg-[#d7ad4b]/[.055] px-7 py-3 text-[10px] font-semibold tracking-[.22em] text-[#f0c75e]"><span>EXPLORE SYSTEM</span><i>↗</i></Link><Link href="/interactive" className="border border-white/12 px-7 py-3 text-[10px] font-semibold tracking-[.22em] text-white/55 transition hover:border-white/35 hover:text-white">ENTER CORE</Link></div>
          </div>

          <div className="relative mx-auto h-[650px] w-full max-w-[1040px] select-none lg:h-[720px]">
            <div className="absolute left-[2%] right-[2%] top-[51%] h-px bg-white/[.045]" />
            <div className="absolute left-[2%] right-[2%] top-[43%] h-px bg-white/[.025]" />
            <div className="absolute left-[2%] right-[2%] top-[59%] h-px bg-white/[.025]" />

            <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 1040 720" aria-hidden="true">
              <defs>
                <linearGradient id="mainTrack" x1="0" x2="1"><stop stopColor="#d7ad4b" stopOpacity="0" /><stop offset=".12" stopColor="#d7ad4b" stopOpacity=".5" /><stop offset=".5" stopColor="#fff" stopOpacity=".18" /><stop offset=".88" stopColor="#38e39a" stopOpacity=".5" /><stop offset="1" stopColor="#38e39a" stopOpacity="0" /></linearGradient>
                <linearGradient id="challengeTrack" x1="0" x2="1"><stop stopColor="#ff4d5e" stopOpacity="0" /><stop offset=".5" stopColor="#ff4d5e" stopOpacity=".65" /><stop offset="1" stopColor="#ff4d5e" stopOpacity="0" /></linearGradient>
                <filter id="softGlow"><feGaussianBlur stdDeviation="2.2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>

              <path d="M20 367 H1020" fill="none" stroke="url(#mainTrack)" strokeWidth="2" strokeOpacity=".28" />
              <path d="M20 367 H1020" fill="none" stroke="url(#mainTrack)" strokeWidth="1" strokeDasharray="3 15" className="sist-data-track" />

              <path d="M120 367 C185 367 190 295 250 295 H430 C485 295 495 367 555 367" fill="none" stroke="#38e39a" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3 11" className="sist-data-track" />
              <path d="M120 367 C185 367 190 439 250 439 H430 C485 439 495 367 555 367" fill="none" stroke="#d7ad4b" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3 11" className="sist-data-track" />
              <path d="M540 367 C590 367 600 286 660 286 H780 C835 286 845 367 900 367" fill="none" stroke="#ff4d5e" strokeOpacity=".24" strokeWidth="1" strokeDasharray="3 10" className="sist-data-track" />
              <path d="M540 367 C590 367 600 448 660 448 H780 C835 448 845 367 900 367" fill="none" stroke="#38e39a" strokeOpacity=".16" strokeWidth="1" strokeDasharray="3 10" className="sist-data-track" />

              {stages.map(([num, , color], i) => {
                const x = 45 + i * 136;
                const c = color === "red" ? "#ff4d5e" : color === "green" ? "#38e39a" : color === "gold" ? "#d7ad4b" : "#d9dde2";
                return <g key={num}>
                  <path d={`M${x} 327 V407 M${x + 52} 327 V407`} stroke={c} strokeOpacity=".18" strokeWidth="1" />
                  <path d={`M${x + 26} 327 V407`} stroke="#fff" strokeOpacity=".045" strokeWidth="1" strokeDasharray="2 7" />
                  <circle cx={x + 26} cy="367" r="3.2" fill="#020304" stroke={c} strokeOpacity=".8" filter="url(#softGlow)" />
                </g>;
              })}

              <path d="M935 367 H1012" stroke="#38e39a" strokeOpacity=".65" strokeWidth="1.5" />
              <path d="M1005 359 L1017 367 L1005 375" fill="none" stroke="#38e39a" strokeWidth="1.5" />
            </svg>

            <div className="absolute left-1/2 top-[8%] -translate-x-1/2 text-center">
              <div className="text-[7px] font-semibold tracking-[.48em] text-white/22">SYSTEM INTELLIGENCE &amp; STRATEGIC TACTICS</div>
              <div className="mt-3 text-[10px] tracking-[.28em] text-[#d7ad4b]/70">MULTI-PATH / GATED / ADVERSARIAL</div>
            </div>

            <div className="absolute left-[1%] top-[51%] z-30 -translate-y-1/2">
              <div className="flex h-[104px] w-[82px] flex-col items-center justify-center border border-[#d7ad4b]/55 bg-[#020304] shadow-[0_0_45px_rgba(215,173,75,.08)] sm:h-[120px] sm:w-[92px]">
                <div className="mb-2 text-[6px] tracking-[.25em] text-white/25">SYSTEM CORE</div>
                <Image src="/logo.png" alt="SIST logo" width={220} height={220} priority className="h-auto w-[58%]" />
                <div className="mt-2 text-[6px] tracking-[.2em] text-[#65f0b0]">ONLINE</div>
              </div>
            </div>

            <div className="absolute left-[10%] right-[2%] top-[51%] -translate-y-1/2">
              <div className="grid grid-cols-8 gap-2 sm:gap-3">
                {stages.map(([num, label, color, sub], index) => {
                  const t = tone[color];
                  return <div key={label} className="relative">
                    <div className={`sist-gate relative h-[122px] border bg-[#030506]/96 p-3 backdrop-blur sm:h-[142px] ${t.border}`}>
                      <div className="flex items-center justify-between text-[6px] tracking-[.18em] text-white/25"><span>GATE</span><span>{num}</span></div>
                      <div className="absolute left-0 top-1/2 h-7 w-px -translate-y-1/2 bg-white/10" />
                      <div className="absolute right-0 top-1/2 h-7 w-px -translate-y-1/2 bg-white/10" />
                      <div className="mt-8"><span className={`mb-2 block h-1.5 w-1.5 rounded-full ${t.line} shadow-[0_0_12px_currentColor]`} /><span className={`block text-[7px] font-semibold tracking-[.12em] ${t.text}`}>{label}</span><span className="mt-2 block text-[5px] tracking-[.16em] text-white/20">{sub}</span></div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-[5px] tracking-[.12em] text-white/18"><span className="h-px flex-1 bg-white/10" /><span>{index === 4 ? "RED" : "PASS"}</span></div>
                    </div>
                  </div>;
                })}
              </div>
            </div>

            <div className="absolute left-[18%] top-[22%] text-[6px] tracking-[.3em] text-[#38e39a]/55">INDEPENDENT REASONING PATH A</div>
            <div className="absolute left-[18%] top-[78%] text-[6px] tracking-[.3em] text-[#d7ad4b]/50">INDEPENDENT REASONING PATH B</div>
            <div className="absolute left-[58%] top-[20%] text-[6px] tracking-[.3em] text-[#ff4d5e]/55">ADVERSARIAL CHALLENGE LOOP</div>
            <div className="absolute left-[58%] top-[81%] text-[6px] tracking-[.3em] text-[#38e39a]/45">CROSS-SENTINEL VERIFICATION</div>

            <div className="absolute bottom-[10%] left-[12%] right-[4%] flex items-center gap-3">
              <span className="text-[6px] font-semibold tracking-[.28em] text-white/20">OUTPUT CONTROL</span><span className="h-px flex-1 bg-white/[.07]" /><span className="border border-[#38e39a]/30 px-3 py-2 text-[6px] tracking-[.2em] text-[#65f0b0]">VERIFIED</span><span className="border border-[#d7ad4b]/30 px-3 py-2 text-[6px] tracking-[.2em] text-[#f0c75e]">BRIEF</span>
            </div>
            <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 whitespace-nowrap text-[7px] font-semibold tracking-[.34em] text-white/22"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#38e39a] shadow-[0_0_10px_#38e39a]" />08 STAGES · 09 GATES · CONTROLLED PIPELINE</div>
          </div>

          <div className="relative z-30 hidden lg:block"><div className="border-l border-white/[.08] pl-5"><div className="text-[8px] font-semibold tracking-[.35em] text-white/25">CONTROL MODEL</div><div className="mt-5 space-y-5 text-[8px] tracking-[.17em]"><div><span className="block text-white/25">PATHS</span><span className="mt-1 block text-white/75">MULTIPLE / INDEPENDENT</span></div><div><span className="block text-white/25">GATES</span><span className="mt-1 block text-[#f0c75e]">SEQUENTIAL / CONTROLLED</span></div><div><span className="block text-white/25">RED TEAM</span><span className="mt-1 block text-[#ff6674]">ADVERSARIAL / ACTIVE</span></div><div><span className="block text-white/25">VERIFY</span><span className="mt-1 block text-[#65f0b0]">CROSS-SENTINEL</span></div></div><div className="mt-8 h-px bg-white/[.08]" /><div className="mt-4 text-[7px] leading-5 tracking-[.15em] text-white/22">NOT A CHAT WINDOW.<br />NOT A CIRCLE.<br />A CONTROLLED INTELLIGENCE PIPELINE.</div></div></div>
        </div>
      </div>
    </section>
  );
}
