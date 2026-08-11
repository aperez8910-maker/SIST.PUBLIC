import Navbar from "@/components/Navbar";

const methodology = [
  ["01", "INTELLIGENCE COLLECTION", "Gather relevant information and establish the mission, scope, constraints, actors, and evidence base."],
  ["02", "INFORMATION ORGANIZATION", "Structure fragmented material into an operating picture while separating fact, inference, assumption, and unknown."],
  ["03", "ANALYTICAL PROCESSING", "Evaluate relationships, patterns, inconsistencies, dependencies, and competing explanations."],
  ["04", "ADVERSARIAL INTEGRATION", "Introduce independent perspectives, challenge the working theory, and actively search for failure points."],
  ["05", "STRATEGIC OUTPUT", "Synthesize what survives scrutiny into a traceable intelligence product designed for the next decision."],
];

const states = ["COLLECT", "STRUCTURE", "ANALYZE", "CHALLENGE", "VERIFY", "SYNTHESIZE"];

export default function SystemPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020304] text-white">
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(215,173,75,.12),transparent_34%)]" />
      <Navbar />

      <section className="relative px-6 pb-24 pt-32 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_430px] lg:items-end">
            <div>
              <p className="text-[10px] tracking-[0.4em] text-amber-300">SIST FRAMEWORK / CONTROLLED INTELLIGENCE PIPELINE</p>
              <h1 className="sist-metal mt-6 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">THE SYSTEM<br />IN MOTION</h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">SIST is structured as a controlled pipeline: information enters, competing interpretations are developed, conclusions are challenged, evidence is verified, and the surviving intelligence is synthesized for action.</p>
            </div>

            <div className="relative h-64 overflow-hidden border border-amber-400/20 bg-white/[0.025] p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(215,173,75,.12),transparent_55%)]" />
              <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/20 shadow-[0_0_55px_rgba(215,173,75,.12)]" />
              <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/20 animate-[spin_12s_linear_infinite]" />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 shadow-[0_0_25px_rgba(215,173,75,.9)]" />
              <span className="absolute left-6 top-5 text-[9px] tracking-[0.3em] text-gray-600">LIVE ARCHITECTURE</span>
              <span className="absolute bottom-5 right-6 text-[9px] tracking-[0.3em] text-emerald-300">PIPELINE ACTIVE</span>
            </div>
          </div>

          <div className="mt-16 overflow-hidden border border-white/10 bg-white/[0.02]">
            <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.025] text-[9px] tracking-[0.3em] text-gray-500 md:grid-cols-6">
              {states.map((state, i) => <div key={state} className="relative border-r border-white/10 px-4 py-4 last:border-0"><span className={i === 3 ? "text-red-300" : i === 4 ? "text-emerald-300" : "text-amber-300"}>0{i + 1}</span><br />{state}</div>)}
            </div>
            <div className="grid lg:grid-cols-[1fr_280px]">
              <div className="relative p-6 sm:p-8">
                <div className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-amber-400/10 via-amber-300/50 to-emerald-400/20" />
                <div className="relative grid gap-4 sm:grid-cols-5">
                  {methodology.map(([number, title], index) => (
                    <div key={number} className="sist-gate relative border border-white/10 bg-black/80 p-5 backdrop-blur">
                      <span className={`text-[9px] tracking-[0.25em] ${index === 3 ? "text-red-300" : index === 4 ? "text-emerald-300" : "text-amber-300"}`}>{number}</span>
                      <div className="mt-5 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_15px_rgba(215,173,75,.8)]" />
                      <p className="mt-4 text-[10px] font-medium leading-5 tracking-[0.12em] text-gray-300">{title}</p>
                    </div>
                  ))}
                </div>
              </div>
              <aside className="border-t border-white/10 bg-black/30 p-7 lg:border-l lg:border-t-0">
                <p className="text-[9px] tracking-[0.3em] text-gray-600">CONTROL LAYERS</p>
                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-amber-300" /><span className="text-xs text-gray-400">Primary reasoning</span></div>
                  <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-red-400" /><span className="text-xs text-gray-400">Adversarial challenge</span></div>
                  <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-emerald-400" /><span className="text-xs text-gray-400">Verification gate</span></div>
                </div>
              </aside>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {methodology.map(([number, title, description], index) => (
              <article key={number} className={`border bg-white/[0.02] p-7 ${index === 3 ? "border-red-400/20" : index === 4 ? "border-emerald-400/20" : "border-white/10"}`}>
                <div className="flex items-center justify-between"><span className={`font-mono text-xs ${index === 3 ? "text-red-300" : index === 4 ? "text-emerald-300" : "text-amber-300"}`}>{number}</span><span className="text-[9px] tracking-[0.25em] text-gray-600">PIPELINE NODE</span></div>
                <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-gray-500">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
