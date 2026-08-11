import Navbar from "@/components/Navbar";

const seats = [
  { name: "COUNCILMAN 1", role: "TRUTH", tone: "gold", index: "01" },
  { name: "COUNCILWOMAN 2", role: "ATTACK", tone: "red", index: "02" },
  { name: "COUNCILMAN 3", role: "ENFORCER", tone: "green", index: "03" },
];

const deliberation = ["INDEPENDENT ANALYSIS", "CHALLENGE", "CROSS-EXAMINATION", "SYNTHESIS"];
const benchmarkDomains = [
  ["CRIMINAL DEFENSE", "9.5", "FULL AIP + 3-SEAT COUNCIL"],
  ["CONSUMER FINANCE", "3.0", "2-SEAT TECHNICAL"],
  ["CREDIT REPORTING", "2.0", "SINGLE-PASS + VERIFY"],
  ["CHILD WELFARE", "1.5", "EXHIBIT / DISCREPANCY"],
  ["VENDOR SECURITY", "1.0", "RECON + VERIFY"],
];

const motionStyles = `
@keyframes councilRoute { to { stroke-dashoffset: -56; } }
@keyframes councilReturn { to { stroke-dashoffset: 56; } }
@keyframes councilPacket { 0%,100% { opacity:.2; transform:scale(.65); } 50% { opacity:1; transform:scale(1.15); } }
@keyframes synthesisPulse { 0%,100% { box-shadow:0 0 30px rgba(215,173,75,.05), inset 0 0 20px rgba(215,173,75,.03); } 50% { box-shadow:0 0 75px rgba(215,173,75,.18), inset 0 0 35px rgba(215,173,75,.08); } }
@keyframes synthesisOrbit { from { transform:rotate(0deg) translateX(105px) rotate(0deg); } to { transform:rotate(360deg) translateX(105px) rotate(-360deg); } }
@keyframes aipSweep { 0% { left:-15%; opacity:0; } 12% { opacity:.8; } 72% { opacity:.8; } 100% { left:110%; opacity:0; } }
@keyframes aipStep { 0%,18% { opacity:.3; transform:translateY(2px); } 24%,42% { opacity:1; transform:translateY(0); } 48%,100% { opacity:.35; transform:translateY(2px); } }
@keyframes liveDot { 0%,100% { opacity:.35; box-shadow:0 0 3px currentColor; } 50% { opacity:1; box-shadow:0 0 12px currentColor; } }
@keyframes evidenceFlow { to { stroke-dashoffset:-44; } }
@keyframes holdPulse { 0%,100% { opacity:.35; } 50% { opacity:1; } }
.sist-deliberation-route { fill:none; stroke-width:2; stroke-dasharray:5 14; animation:councilRoute 2.4s linear infinite; }
.sist-deliberation-return { fill:none; stroke-width:1.4; stroke-dasharray:3 15; animation:councilReturn 2.9s linear infinite; opacity:.55; }
.sist-deliberation-gold { stroke:rgba(215,173,75,.78); }
.sist-deliberation-red { stroke:rgba(255,77,94,.78); animation-delay:-.8s; }
.sist-deliberation-green { stroke:rgba(56,227,154,.78); animation-delay:-1.5s; }
.sist-council-seat { box-shadow:inset 0 0 30px rgba(255,255,255,.015); }
.sist-seat-gold { border-color:rgba(215,173,75,.22); }
.sist-seat-red { border-color:rgba(255,77,94,.22); }
.sist-seat-green { border-color:rgba(56,227,154,.22); }
.sist-seat-gold .sist-seat-orb { background:#d7ad4b; box-shadow:0 0 14px rgba(215,173,75,.75); }
.sist-seat-red .sist-seat-orb { background:#ff4d5e; box-shadow:0 0 14px rgba(255,77,94,.75); }
.sist-seat-green .sist-seat-orb { background:#38e39a; box-shadow:0 0 14px rgba(56,227,154,.75); }
.sist-route-pulse-line { height:1px; background:linear-gradient(90deg,transparent,currentColor,transparent); opacity:.35; animation:councilPacket 2.2s ease-in-out infinite; }
.sist-deliberation-core { position:relative; animation:synthesisPulse 3.5s ease-in-out infinite; }
.sist-synthesis-orbit { position:absolute; left:50%; top:50%; width:6px; height:6px; margin:-3px; border-radius:999px; pointer-events:none; }
.sist-synthesis-orbit-a { background:#d7ad4b; box-shadow:0 0 12px #d7ad4b; animation:synthesisOrbit 7s linear infinite; }
.sist-synthesis-orbit-b { background:#ff4d5e; box-shadow:0 0 12px #ff4d5e; animation:synthesisOrbit 10s linear infinite reverse; }
.sist-aip-engine { position:relative; overflow:hidden; }
.sist-aip-engine::after { content:""; position:absolute; top:0; bottom:0; width:14%; background:linear-gradient(90deg,transparent,rgba(215,173,75,.16),transparent); animation:aipSweep 4.8s linear infinite; pointer-events:none; }
.sist-aip-step { display:inline-flex; align-items:center; gap:7px; border:1px solid rgba(255,255,255,.08); padding:7px 9px; transition:opacity .2s; animation:aipStep 5.4s ease-in-out infinite; }
.sist-aip-step b { font-family:monospace; font-size:7px; opacity:.45; }
.sist-aip-step:nth-child(2){animation-delay:.35s}.sist-aip-step:nth-child(3){animation-delay:.7s}.sist-aip-step:nth-child(4){animation-delay:1.05s}.sist-aip-step:nth-child(5){animation-delay:1.4s}.sist-aip-step:nth-child(6){animation-delay:1.75s}
.sist-aip-amber { color:#d7ad4b; border-color:rgba(215,173,75,.2); }.sist-aip-gold { color:#e4c56e; border-color:rgba(215,173,75,.2); }.sist-aip-red { color:#ff7884; border-color:rgba(255,77,94,.2); }.sist-aip-green { color:#38e39a; border-color:rgba(56,227,154,.2); }
.sist-aip-bridge { width:1px; height:34px; margin:0 auto; background:linear-gradient(transparent,rgba(215,173,75,.55),transparent); position:relative; }
.sist-aip-bridge::after { content:""; position:absolute; top:12px; left:-3px; width:7px; height:7px; border-radius:999px; background:#d7ad4b; box-shadow:0 0 14px #d7ad4b; animation:councilPacket 1.8s ease-in-out infinite; }
.sist-live-dot { width:6px; height:6px; border-radius:999px; background:#38e39a; animation:liveDot 1.8s ease-in-out infinite; }
.sist-evidence-route { fill:none; stroke:rgba(215,173,75,.55); stroke-width:1.5; stroke-dasharray:4 12; animation:evidenceFlow 2.5s linear infinite; }
.sist-hold { animation:holdPulse 2.2s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) { .sist-deliberation-route,.sist-deliberation-return,.sist-route-pulse-line,.sist-deliberation-core,.sist-synthesis-orbit,.sist-aip-engine::after,.sist-aip-step,.sist-aip-bridge::after,.sist-live-dot,.sist-evidence-route,.sist-hold { animation:none !important; } }
`;

export default function SystemPage() {
  return (
    <main className="sist-page-shell min-h-screen overflow-hidden">
      <style>{motionStyles}</style>
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <Navbar />
      <section className="relative px-6 pb-28 pt-32 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-[9px] tracking-[0.45em] text-amber-300">SIST FRAMEWORK / COUNCIL DELIBERATION</p>
            <h1 className="sist-metal mt-5 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">THE SYSTEM<br />IN MOTION</h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">SIST is built around a simple premise: plausible reasoning can still fail. The system separates discovery from challenge, exposes uncertainty, and controls what is allowed to advance.</p>
          </div>

          <section className="relative mt-16 border border-white/10 bg-white/[0.018] px-5 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
            <div className="flex items-center justify-between gap-4">
              <div><p className="text-[9px] tracking-[0.35em] text-gray-600">LIVE COUNCIL / DELIBERATION CHANNELS</p><p className="mt-2 text-xs tracking-[0.18em] text-gray-500">INDEPENDENT SEATS · ADVERSARIAL ROUTING · SYNTHESIS</p></div>
              <span className="flex items-center gap-2 text-[8px] tracking-[0.25em] text-emerald-300"><i className="sist-live-dot" /> LIVE</span>
            </div>
            <div className="relative mt-12 min-h-[430px]">
              <svg className="sist-deliberation-map absolute inset-0 h-full w-full" viewBox="0 0 1000 430" preserveAspectRatio="none" aria-hidden="true">
                <path className="sist-deliberation-route sist-deliberation-gold" d="M170 95 C300 95 330 190 500 215" /><path className="sist-deliberation-route sist-deliberation-red" d="M500 95 C500 145 500 175 500 215" /><path className="sist-deliberation-route sist-deliberation-green" d="M830 95 C700 95 670 190 500 215" /><path className="sist-deliberation-return sist-deliberation-gold" d="M500 215 C390 260 280 280 170 330" /><path className="sist-deliberation-return sist-deliberation-red" d="M500 215 C500 270 500 300 500 330" /><path className="sist-deliberation-return sist-deliberation-green" d="M500 215 C610 260 720 280 830 330" />
              </svg>
              <div className="relative grid gap-5 md:grid-cols-3">
                {seats.map((seat) => <article key={seat.name} className={`sist-council-seat sist-seat-${seat.tone} border bg-black/80 p-6 backdrop-blur`}><div className="flex items-center justify-between"><span className="font-mono text-[10px] text-gray-600">SEAT {seat.index}</span><span className="sist-seat-orb h-2.5 w-2.5 rounded-full" /></div><h2 className="mt-8 text-sm font-semibold tracking-[0.12em] text-gray-200">{seat.name}</h2><p className="mt-2 text-[9px] tracking-[0.32em] text-gray-500">{seat.role}</p><div className="mt-7 flex items-center gap-2 text-[8px] tracking-[0.22em] text-gray-600"><span className="sist-route-pulse-line flex-1" /> ROUTING <span className="sist-route-pulse-line flex-1" /></div></article>)}
              </div>
              <div className="relative mx-auto mt-24 max-w-xl"><div className="sist-deliberation-core border border-amber-300/25 bg-black/90 px-7 py-8 text-center"><p className="text-[8px] tracking-[0.4em] text-amber-300">DELIBERATION / ACTIVE</p><h2 className="mt-3 text-lg font-semibold tracking-[0.22em] text-gray-200">SYNTHESIS</h2><div className="mt-5 flex flex-wrap justify-center gap-2">{deliberation.map((item) => <span key={item} className="border border-white/10 px-3 py-1.5 text-[7px] tracking-[0.2em] text-gray-500">{item}</span>)}</div><span className="sist-synthesis-orbit sist-synthesis-orbit-a" /><span className="sist-synthesis-orbit sist-synthesis-orbit-b" /></div></div>
            </div>
          </section>

          <section className="relative mx-auto mt-8 max-w-4xl"><div className="sist-aip-bridge" /><div className="sist-aip-engine border border-amber-300/25 bg-black/90 p-7 text-center"><p className="text-[8px] tracking-[0.4em] text-amber-300">ADVERSARIAL INTEGRATION PROTOCOL</p><h2 className="mt-3 text-xl font-semibold tracking-[0.2em] text-gray-200">AIP ENGINE</h2><p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-gray-600">Deliberation is not the endpoint. The AIP challenges the integrated theory, exposes vulnerabilities, forces correction, and controls what is allowed to advance.</p><div className="mt-7 flex flex-wrap justify-center gap-2 text-[8px] tracking-[0.18em]">{[["HIGH RISK", "amber"], ["INDEPENDENT ANALYSIS", "gold"], ["VULNERABILITIES EXPOSED", "red"], ["ADVERSARIAL ATTACK", "red"], ["CORRECTION", "gold"], ["SURVIVES", "green"]].map(([label, tone], i) => <span key={label} className={`sist-aip-step sist-aip-${tone}`}><b>{String(i + 1).padStart(2, "0")}</b>{label}</span>)}</div></div></section>

          <section className="mt-24 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
            <div className="border border-white/10 bg-white/[.018] p-7 sm:p-9">
              <p className="text-[9px] tracking-[.4em] text-amber-300">WHY SIST EXISTS</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-.03em] text-gray-200">A plausible answer can still be wrong.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500">SIST is designed for environments where an unsupported intermediate conclusion can propagate through otherwise competent reasoning. Instead of treating completion as success, the architecture introduces deliberate points of challenge, correction, and controlled release.</p>
              <div className="mt-8 grid gap-2 sm:grid-cols-4">{["DISCOVER", "CHALLENGE", "REASSESS", "RELEASE"].map((x, i) => <div key={x} className="border border-white/10 bg-black/40 p-4"><span className="font-mono text-[8px] text-gray-700">0{i+1}</span><p className="mt-3 text-[9px] tracking-[.2em] text-gray-300">{x}</p></div>)}</div>
            </div>
            <div className="border border-amber-300/15 bg-amber-300/[.025] p-7 sm:p-9">
              <p className="text-[9px] tracking-[.4em] text-amber-300">PUBLIC PRINCIPLE</p>
              <h2 className="mt-4 text-2xl font-semibold text-gray-200">Failure must encounter resistance.</h2>
              <p className="mt-5 text-sm leading-7 text-gray-500">The public architecture shows the principle without exposing proprietary prompts, thresholds, routing heuristics, model-selection logic, or internal orchestration.</p>
              <div className="mt-7 border-l border-amber-300/40 pl-5 text-[10px] leading-6 tracking-[.12em] text-gray-400">GENERATION ≠ ATTACK ≠ ENFORCEMENT</div>
            </div>
          </section>

          <section className="mt-24 border border-white/10 bg-black/30 p-7 sm:p-9">
            <div className="max-w-3xl"><p className="text-[9px] tracking-[.4em] text-amber-300">EVIDENCE SHADOW MAP</p><h2 className="mt-4 text-3xl font-semibold text-gray-200">Don't only ask what is present. Ask what should exist.</h2><p className="mt-4 text-sm leading-7 text-gray-500">SIST publicly exposes the investigative concept: known evidence is compared with expected evidence, missing evidence, and conditions that could falsify the working theory.</p></div>
            <div className="relative mt-10 overflow-hidden border border-white/10 p-5"><svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 130" preserveAspectRatio="none" aria-hidden="true"><path className="sist-evidence-route" d="M60 65 H940" /></svg><div className="relative grid gap-3 sm:grid-cols-4">{[["KNOWN", "what is established"], ["EXPECTED", "what should exist"], ["MISSING", "what is absent"], ["FALSIFICATION", "what could break the theory"]].map(([a,b],i)=><div key={a} className="border border-white/10 bg-[#050607]/95 p-4"><span className="font-mono text-[8px] text-amber-300">0{i+1}</span><p className="mt-3 text-[9px] font-semibold tracking-[.18em] text-gray-200">{a}</p><p className="mt-2 text-[9px] leading-5 text-gray-600">{b}</p></div>)}</div></div>
          </section>

          <section className="mt-24">
            <div className="flex flex-wrap items-end justify-between gap-6"><div><p className="text-[9px] tracking-[.4em] text-amber-300">BENCHMARK / OBSERVATIONAL EVIDENCE</p><h2 className="mt-4 text-3xl font-semibold text-gray-200">Architecture changes with the problem.</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500">The benchmark tested five domains with different adversarial needs. The public result is not a claim of universal superiority; it demonstrates that SIST can vary its architecture rather than forcing one workflow onto every problem.</p></div><span className="border border-white/10 px-4 py-2 text-[8px] tracking-[.25em] text-gray-600">5 DOMAINS</span></div>
            <div className="mt-8 grid gap-3 md:grid-cols-5">{benchmarkDomains.map(([domain, score, architecture])=><div key={domain} className="border border-white/10 bg-white/[.018] p-5"><p className="text-[8px] tracking-[.2em] text-gray-500">{domain}</p><p className="mt-5 text-3xl font-semibold text-amber-200">{score}</p><p className="mt-1 text-[7px] tracking-[.18em] text-gray-700">ADVERSARIAL NECESSITY</p><p className="mt-5 border-t border-white/10 pt-4 text-[8px] leading-4 tracking-[.14em] text-gray-400">{architecture}</p></div>)}</div>
          </section>

          <section className="mt-24 grid gap-5 md:grid-cols-3">
            <div className="border border-emerald-400/15 bg-emerald-400/[.02] p-7"><p className="text-[8px] tracking-[.35em] text-emerald-300">NOVEL DISCOVERY</p><p className="mt-3 text-4xl font-semibold text-gray-200">8.0–9.5</p><p className="mt-3 text-xs leading-6 text-gray-600">A recurring benchmark strength: discovering important facts, discrepancies, or environments that were not simply handed to the system.</p></div>
            <div className="border border-red-400/15 bg-red-400/[.02] p-7"><p className="text-[8px] tracking-[.35em] text-red-300">HOLD</p><p className="mt-3 text-4xl font-semibold text-gray-200">SAFE STATE</p><p className="mt-3 text-xs leading-6 text-gray-600">When evidence is insufficient, stopping advancement is treated as a successful intervention rather than a failed answer.</p></div>
            <div className="border border-amber-300/15 bg-amber-300/[.02] p-7"><p className="text-[8px] tracking-[.35em] text-amber-300">NEXT BENCHMARK</p><p className="mt-3 text-4xl font-semibold text-gray-200">20 CASES</p><p className="mt-3 text-xs leading-6 text-gray-600">A controlled comparison should test single-model, independent SIST, and full AIP conditions with seeded traps and measurable error escape rates.</p></div>
          </section>

          <section className="mt-24 border border-amber-300/15 bg-amber-300/[.02] p-7 sm:p-10"><div className="max-w-4xl"><p className="text-[9px] tracking-[.4em] text-amber-300">THE PUBLIC THESIS</p><h2 className="mt-5 text-3xl font-semibold leading-tight text-gray-200 md:text-5xl">SIST is not built on the assumption that reasoning will never fail.</h2><p className="mt-6 text-base leading-8 text-gray-500">It is built on the opposite assumption: failure is possible, so the architecture must make failure visible, challengeable, containable, and measurable before defective intelligence becomes the final product.</p></div></section>
        </div>
      </section>
    </main>
  );
}
