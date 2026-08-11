import Link from "next/link";
import Image from "next/image";

const gates = [
  ["G1", "SOURCE VALIDATION"],
  ["G2", "ANALYST MAPPING"],
  ["G3", "RESEARCH FACT-CHECK"],
  ["G4", "COUNTERMEASURES / RED TEAM"],
  ["G5", "BRIEF / BLUE-TEAM REVIEW"],
] as const;

export default function Home() {
  return (
    <main className="sist-page-shell min-h-screen overflow-hidden text-white">
      <style>{`
        @keyframes gatePacket { 0%{left:-4%;opacity:0;transform:scale(.65)} 10%{opacity:1} 50%{opacity:1;transform:scale(1)} 90%{opacity:1} 100%{left:104%;opacity:0;transform:scale(.65)} }
        @keyframes gateVerdict { 0%,46%{opacity:.25} 50%,68%{opacity:1} 72%,100%{opacity:.25} }
        @keyframes gateVerdictAlt { 0%,28%{opacity:.25} 32%,52%{opacity:1} 56%,100%{opacity:.25} }
        @keyframes gateVerdictAbort { 0%,60%{opacity:.25} 64%,82%{opacity:1} 86%,100%{opacity:.25} }
        .sist-live-gate{overflow:hidden}
        .sist-live-gate::before{content:"";position:absolute;left:-5%;top:50%;width:8px;height:8px;border-radius:999px;background:#d7ad4b;box-shadow:0 0 14px rgba(215,173,75,.95);transform:translateY(-50%);animation:gatePacket 7.8s linear infinite;z-index:2}
        .sist-live-gate:nth-child(3)::before{animation-delay:-2.1s;animation-duration:8.6s;background:#38e39a;box-shadow:0 0 14px rgba(56,227,154,.95)}
        .sist-live-gate:nth-child(4)::before{animation-delay:-4.4s;animation-duration:9.4s;background:#ff4d5e;box-shadow:0 0 14px rgba(255,77,94,.95)}
        .sist-live-gate:nth-child(5)::before{animation-delay:-1.3s;animation-duration:8.9s;background:#d7ad4b;box-shadow:0 0 14px rgba(215,173,75,.95)}
        .sist-live-gate:nth-child(6)::before{animation-delay:-5.2s;animation-duration:9.8s;background:#38e39a;box-shadow:0 0 14px rgba(56,227,154,.95)}
        .sist-gate-status{position:absolute;right:12px;bottom:12px;font-size:7px;font-weight:700;letter-spacing:.18em;font-style:normal;white-space:nowrap;animation:gateVerdict 8s steps(1,end) infinite;color:#38e39a}
        .sist-gate-status::after{content:"PASS"}
        .status-2{animation:gateVerdictAlt 9s steps(1,end) infinite;color:#d7ad4b}.status-2::after{content:"REVISE"}
        .status-3{animation:gateVerdictAbort 10s steps(1,end) infinite;color:#ff4d5e}.status-3::after{content:"ABORT"}
        .status-4{animation:gateVerdictAlt 11s steps(1,end) infinite;color:#d7ad4b}.status-4::after{content:"REVISE"}
        .status-5{animation:gateVerdict 12s steps(1,end) infinite;color:#38e39a}.status-5::after{content:"PASS"}
        .sist-gate-stream i{animation-duration:7.5s!important}
      `}</style>
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <div className="sist-noise pointer-events-none fixed inset-0" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(215,173,75,.15),transparent_34%)]" />

      <nav className="relative z-50 border-b border-amber-300/15 bg-[#020304]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1700px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-4"><span className="sist-brand-lockup"><Image src="/logo.png" alt="SIST" width={56} height={56} className="sist-logo sist-logo-gold" priority /></span><span className="font-semibold tracking-[.4em] text-amber-100">SIST</span></Link>
          <div className="hidden items-center gap-7 text-[9px] tracking-[.25em] text-gray-500 md:flex"><Link href="/system" className="hover:text-amber-300">SYSTEM</Link><Link href="/divisions" className="hover:text-amber-300">DIVISIONS</Link><Link href="/council" className="hover:text-amber-300">AI COUNCIL</Link><Link href="/interactive" className="text-amber-300">INTERACTIVE</Link><Link href="/research" className="hover:text-amber-300">RESEARCH</Link><Link href="/briefings" className="hover:text-amber-300">BRIEFINGS</Link><Link href="/contact" className="hover:text-amber-300">CONTACT</Link></div>
          <span className="flex items-center gap-2 text-[8px] tracking-[.25em] text-emerald-300"><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> ONLINE</span>
        </div>
      </nav>

      <section className="relative mx-auto max-w-[1700px] px-5 pb-14 pt-20 sm:px-8 lg:px-12 lg:pt-28">
        <div className="max-w-5xl"><p className="text-[9px] tracking-[.5em] text-amber-300">SYSTEMS INTELLIGENCE &amp; STRATEGIC TACTICS</p><h1 className="sist-metal mt-6 text-6xl font-semibold leading-[.86] tracking-[-.055em] sm:text-8xl lg:text-[9.5rem]">INTELLIGENCE<br />UNDER PRESSURE.</h1><p className="mt-8 max-w-2xl text-base leading-8 text-gray-500">SIST is an adversarial evidence-analysis architecture designed to prevent defective single-model reasoning from becoming institutional truth.</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/interactive" className="sist-button border border-amber-300/40 bg-amber-300/10 px-6 py-4 text-[9px] tracking-[.28em] text-amber-200">ENTER WORK FLOOR <i>↗</i></Link><Link href="/system" className="border border-white/10 bg-white/[.03] px-6 py-4 text-[9px] tracking-[.28em] text-gray-400 hover:border-amber-300/30 hover:text-amber-300">VIEW ARCHITECTURE</Link></div></div>
      </section>

      <section className="relative mx-auto max-w-[1700px] px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mb-5 flex items-center justify-between"><div><p className="text-[8px] tracking-[.4em] text-gray-600">COUNCIL / SYNTHESIS / AIP</p><p className="mt-2 text-xs text-gray-500">Independent reasoning is challenged before intelligence advances to the gated work floor.</p></div><span className="text-[8px] tracking-[.25em] text-emerald-300">3-SEAT COUNCIL / 5 GATES</span></div>
        <div className="relative overflow-hidden border border-amber-300/20 bg-black/60 p-5 shadow-[0_0_100px_rgba(215,173,75,.06)] sm:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />

          <div className="relative z-10 text-center">
            <p className="text-[10px] font-semibold tracking-[.55em] text-amber-200">SIST COUNCIL</p>
            <div className="relative mx-auto mt-8 max-w-5xl">
              <svg className="sist-council-routing pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden="true">
                <path className="sist-route sist-route-gold" d="M166 68 C166 165 360 150 500 255" />
                <path className="sist-route sist-route-red" d="M500 68 C500 145 500 180 500 255" />
                <path className="sist-route sist-route-green" d="M834 68 C834 165 640 150 500 255" />
                <path className="sist-route sist-route-gold" d="M500 285 C500 320 500 335 500 365" />
                <circle className="sist-route-node" cx="500" cy="255" r="5" />
              </svg>
              <div className="relative z-10 grid gap-4 md:grid-cols-3">
                <div className="sist-council-seat sist-seat-gold border border-amber-300/25 bg-amber-300/[.035] p-6 text-center shadow-[0_0_35px_rgba(215,173,75,.05)]">
                  <span className="sist-seat-orb mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/50 text-amber-200 shadow-[0_0_25px_rgba(215,173,75,.2)]">◉</span>
                  <p className="mt-5 text-[10px] font-bold tracking-[.2em] text-gray-200">COUNCILMAN 1</p>
                  <p className="mt-2 text-[8px] tracking-[.35em] text-amber-300">TRUTH ENFORCER</p>
                </div>
                <div className="sist-council-seat sist-seat-red border border-red-400/25 bg-red-400/[.035] p-6 text-center shadow-[0_0_35px_rgba(248,113,113,.05)]">
                  <span className="sist-seat-orb mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-red-400/50 text-red-300 shadow-[0_0_25px_rgba(248,113,113,.18)]">◉</span>
                  <p className="mt-5 text-[10px] font-bold tracking-[.2em] text-gray-200">COUNCILWOMAN 2</p>
                  <p className="mt-2 text-[8px] tracking-[.35em] text-red-300">ATTACK</p>
                </div>
                <div className="sist-council-seat sist-seat-green border border-emerald-400/25 bg-emerald-400/[.035] p-6 text-center shadow-[0_0_35px_rgba(52,211,153,.05)]">
                  <span className="sist-seat-orb mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/50 text-emerald-300 shadow-[0_0_25px_rgba(52,211,153,.18)]">◉</span>
                  <p className="mt-5 text-[10px] font-bold tracking-[.2em] text-gray-200">COUNCILMAN 3</p>
                  <p className="mt-2 text-[8px] tracking-[.35em] text-emerald-300">ENFORCER</p>
                </div>
              </div>

              <div className="mx-auto mt-8 max-w-3xl">
                <div className="mx-auto h-8 w-px bg-gradient-to-b from-amber-300/50 to-amber-300/10" />
                <div className="relative border border-amber-300/30 bg-amber-300/[.04] px-8 py-5 shadow-[0_0_45px_rgba(215,173,75,.08)]">
                  <span className="sist-synthesis-packet" aria-hidden="true" />
                  <p className="text-[8px] tracking-[.45em] text-gray-600">INTEGRATION LAYER</p>
                  <p className="mt-2 text-sm font-semibold tracking-[.35em] text-amber-200">SYNTHESIS</p>
                </div>
                <div className="mx-auto h-8 w-px bg-gradient-to-b from-amber-300/50 to-amber-300/10" />
                <div className="relative border border-white/15 bg-white/[.025] px-8 py-5">
                  <span className="sist-aip-sweep" aria-hidden="true" />
                  <p className="text-[8px] tracking-[.45em] text-gray-600">ADVERSARIAL INTEGRATION PROTOCOL</p>
                  <p className="mt-2 text-sm font-semibold tracking-[.35em] text-white">AIP ENGINE</p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 h-px max-w-5xl bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
            <div className="relative mt-7 grid gap-3 md:grid-cols-5">
              <div className="sist-gate-stream" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              {gates.map(([id, name], index) => <div key={id} className="sist-gate-frame sist-live-gate relative border border-amber-300/15 bg-[#050607]/90 p-4 text-left"><span className="text-[9px] text-amber-300">{id}</span><p className="mt-4 min-h-8 text-[8px] font-bold leading-4 tracking-[.16em] text-gray-300">{name}</p><p className="mt-3 text-[7px] tracking-[.25em] text-gray-700">GATED STAGE</p><b className={`sist-gate-status status-${index + 1}`} aria-label="Sentinel verdict" /></div>)}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-[8px] tracking-[.25em] text-gray-600"><span>HIGH REASONING RISK</span><span>→</span><span>INDEPENDENT ANALYSIS</span><span>→</span><span>ADVERSARIAL ATTACK</span><span>→</span><span>CORRECTION</span><span>→</span><span className="text-emerald-300">NO MATERIAL ERROR ESCAPES</span></div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1700px] gap-4 px-5 pb-20 sm:px-8 md:grid-cols-3 lg:px-12"><div className="border border-amber-300/15 bg-amber-300/[.025] p-7"><p className="text-[8px] tracking-[.35em] text-amber-300">01 / GENERATION</p><h2 className="mt-3 text-xl font-semibold">Independent discovery</h2><p className="mt-4 text-sm leading-6 text-gray-500">The system separates evidence, assumptions, unknowns and competing explanations before adversarial review.</p></div><div className="border border-red-400/20 bg-red-400/[.025] p-7"><p className="text-[8px] tracking-[.35em] text-red-300">02 / ATTACK</p><h2 className="mt-3 text-xl font-semibold">Adversarial exposure</h2><p className="mt-4 text-sm leading-6 text-gray-500">Independent reasoning is attacked for authority errors, contradictions, unsupported assumptions and missing environments.</p></div><div className="border border-emerald-400/20 bg-emerald-400/[.025] p-7"><p className="text-[8px] tracking-[.35em] text-emerald-300">03 / ENFORCEMENT</p><h2 className="mt-3 text-xl font-semibold">Verified release</h2><p className="mt-4 text-sm leading-6 text-gray-500">A HOLD is a successful safety state. Unsupported intelligence stops until evidence is found or the theory is reassessed.</p></div></section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-[8px] tracking-[.3em] text-gray-700">SIST — SYSTEMS INTELLIGENCE &amp; STRATEGIC TACTICS / ADVERSARIAL INTEGRATION PROTOCOL</footer>
    </main>
  );
}
