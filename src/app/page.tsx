import Link from "next/link";
import Image from "next/image";

const stages = [
  ["01", "INTAKE", "amber"], ["02", "ANALYZE", "amber"], ["03", "RESEARCH", "amber"], ["04", "INTEGRATE", "amber"],
  ["05", "CHALLENGE", "red"], ["06", "VERIFY", "green"], ["07", "BRIEF", "green"], ["08", "DEPLOY", "amber"],
] as const;

export default function Home() {
  return (
    <main className="sist-page-shell min-h-screen overflow-hidden text-white">
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
        <div className="mb-5 flex items-center justify-between"><div><p className="text-[8px] tracking-[.4em] text-gray-600">AIP SIGNATURE / CONTROLLED ROUTE</p><p className="mt-2 text-xs text-gray-500">High reasoning risk → independent analysis → adversarial attack → correction → verification</p></div><span className="text-[8px] tracking-[.25em] text-emerald-300">8 GATES / 2 SENTINELS</span></div>
        <div className="relative overflow-hidden border border-amber-300/20 bg-black/60 p-5 shadow-[0_0_100px_rgba(215,173,75,.06)] sm:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
          <div className="sist-beacon-track" aria-hidden="true"><span className="sist-beacon sist-beacon-1" /><span className="sist-beacon sist-beacon-2" /><span className="sist-beacon sist-beacon-3 sist-beacon-red" /><span className="sist-beacon sist-beacon-4 sist-beacon-green" /><span className="sist-beacon sist-beacon-5" /></div>
          <div className="absolute left-10 right-10 top-[106px] hidden h-[2px] bg-gradient-to-r from-amber-300/20 via-amber-300/60 via-red-400/80 to-emerald-400/50 lg:block" />
          <div className="relative z-10 grid gap-3 md:grid-cols-4 lg:grid-cols-8">
            {stages.map(([id, name, kind]) => <div key={id} className={`sist-gate sist-gate-frame relative min-h-[150px] border bg-[#050607]/90 p-4 ${kind === "red" ? "border-red-400/30" : kind === "green" ? "border-emerald-400/30" : "border-amber-300/15"}`}><div className="flex justify-between"><span className={`text-[9px] ${kind === "red" ? "text-red-300" : kind === "green" ? "text-emerald-300" : "text-amber-300"}`}>{id}</span><span className={`h-2 w-2 rounded-full ${kind === "red" ? "bg-red-400" : kind === "green" ? "bg-emerald-400" : "bg-amber-300"}`} /></div><p className="mt-9 text-[10px] font-bold tracking-[.2em] text-gray-300">{name}</p><p className="absolute bottom-4 left-4 text-[7px] tracking-[.25em] text-gray-700">GATED STAGE</p></div>)}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 text-[8px] tracking-[.25em]"><span className="text-amber-300">● PRIMARY INTELLIGENCE FLOW</span><span className="text-red-300">● ADVERSARIAL SENTINEL / ORBIT</span><span className="text-emerald-300">● VERIFICATION SENTINEL / ORBIT</span></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1700px] gap-4 px-5 pb-20 sm:px-8 md:grid-cols-3 lg:px-12"><div className="border border-amber-300/15 bg-amber-300/[.025] p-7"><p className="text-[8px] tracking-[.35em] text-amber-300">01 / GENERATION</p><h2 className="mt-3 text-xl font-semibold">Independent discovery</h2><p className="mt-4 text-sm leading-6 text-gray-500">The system separates evidence, assumptions, unknowns and competing explanations before adversarial review.</p></div><div className="border border-red-400/20 bg-red-400/[.025] p-7"><p className="text-[8px] tracking-[.35em] text-red-300">02 / ATTACK</p><h2 className="mt-3 text-xl font-semibold">Adversarial exposure</h2><p className="mt-4 text-sm leading-6 text-gray-500">Independent reasoning is attacked for authority errors, contradictions, unsupported assumptions and missing environments.</p></div><div className="border border-emerald-400/20 bg-emerald-400/[.025] p-7"><p className="text-[8px] tracking-[.35em] text-emerald-300">03 / ENFORCEMENT</p><h2 className="mt-3 text-xl font-semibold">Verified release</h2><p className="mt-4 text-sm leading-6 text-gray-500">A HOLD is a successful safety state. Unsupported intelligence stops until evidence is found or the theory is reassessed.</p></div></section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-[8px] tracking-[.3em] text-gray-700">SIST — SYSTEMS INTELLIGENCE &amp; STRATEGIC TACTICS / ADVERSARIAL INTEGRATION PROTOCOL</footer>
    </main>
  );
}
