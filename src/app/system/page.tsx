import Navbar from "@/components/Navbar";

const seats = [
  { name: "COUNCILMAN 1", role: "TRUTH", tone: "gold", index: "01" },
  { name: "COUNCILWOMAN 2", role: "ATTACK", tone: "red", index: "02" },
  { name: "COUNCILMAN 3", role: "ENFORCER", tone: "green", index: "03" },
];

const deliberation = ["INDEPENDENT ANALYSIS", "CHALLENGE", "CROSS-EXAMINATION", "SYNTHESIS"];

export default function SystemPage() {
  return (
    <main className="sist-page-shell min-h-screen overflow-hidden">
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <Navbar />
      <section className="relative px-6 pb-28 pt-32 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-[9px] tracking-[0.45em] text-amber-300">SIST FRAMEWORK / COUNCIL DELIBERATION</p>
            <h1 className="sist-metal mt-5 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">THE SYSTEM<br />IN MOTION</h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">Three independent seats interrogate the working theory, route competing interpretations through deliberation, and converge only after adversarial scrutiny. The AIP governs what survives.</p>
          </div>

          <section className="relative mt-16 border border-white/10 bg-white/[0.018] px-5 py-10 sm:px-10 sm:py-14">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent" />
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[9px] tracking-[0.35em] text-gray-600">LIVE COUNCIL / DELIBERATION CHANNELS</p>
                <p className="mt-2 text-xs tracking-[0.18em] text-gray-500">INDEPENDENT SEATS · ADVERSARIAL ROUTING · SYNTHESIS</p>
              </div>
              <span className="flex items-center gap-2 text-[8px] tracking-[0.25em] text-emerald-300"><i className="sist-live-dot" /> LIVE</span>
            </div>

            <div className="relative mt-12 min-h-[430px]">
              <svg className="sist-deliberation-map absolute inset-0 h-full w-full" viewBox="0 0 1000 430" preserveAspectRatio="none" aria-hidden="true">
                <path className="sist-deliberation-route sist-deliberation-gold" d="M170 95 C300 95 330 190 500 215" />
                <path className="sist-deliberation-route sist-deliberation-red" d="M500 95 C500 145 500 175 500 215" />
                <path className="sist-deliberation-route sist-deliberation-green" d="M830 95 C700 95 670 190 500 215" />
                <path className="sist-deliberation-return sist-deliberation-gold" d="M500 215 C390 260 280 280 170 330" />
                <path className="sist-deliberation-return sist-deliberation-red" d="M500 215 C500 270 500 300 500 330" />
                <path className="sist-deliberation-return sist-deliberation-green" d="M500 215 C610 260 720 280 830 330" />
              </svg>

              <div className="relative grid gap-5 md:grid-cols-3">
                {seats.map((seat) => (
                  <article key={seat.name} className={`sist-council-seat sist-seat-${seat.tone} border bg-black/80 p-6 backdrop-blur`}>
                    <div className="flex items-center justify-between"><span className="font-mono text-[10px] text-gray-600">SEAT {seat.index}</span><span className="sist-seat-orb h-2.5 w-2.5 rounded-full" /></div>
                    <h2 className="mt-8 text-sm font-semibold tracking-[0.12em] text-gray-200">{seat.name}</h2>
                    <p className="mt-2 text-[9px] tracking-[0.32em] text-gray-500">{seat.role}</p>
                    <div className="mt-7 flex items-center gap-2 text-[8px] tracking-[0.22em] text-gray-600"><span className="sist-route-pulse-line flex-1" /> ROUTING <span className="sist-route-pulse-line flex-1" /></div>
                  </article>
                ))}
              </div>

              <div className="relative mx-auto mt-24 max-w-xl">
                <div className="sist-deliberation-core border border-amber-300/25 bg-black/90 px-7 py-8 text-center shadow-[0_0_70px_rgba(215,173,75,.08)]">
                  <p className="text-[8px] tracking-[0.4em] text-amber-300">DELIBERATION / ACTIVE</p>
                  <h2 className="mt-3 text-lg font-semibold tracking-[0.22em] text-gray-200">SYNTHESIS</h2>
                  <div className="mt-5 flex flex-wrap justify-center gap-2">{deliberation.map((item) => <span key={item} className="border border-white/10 px-3 py-1.5 text-[7px] tracking-[0.2em] text-gray-500">{item}</span>)}</div>
                  <span className="sist-synthesis-orbit sist-synthesis-orbit-a" /><span className="sist-synthesis-orbit sist-synthesis-orbit-b" />
                </div>
              </div>
            </div>
          </section>

          <section className="relative mx-auto mt-8 max-w-4xl">
            <div className="sist-aip-bridge" />
            <div className="sist-aip-engine border border-amber-300/25 bg-black/90 p-7 text-center">
              <p className="text-[8px] tracking-[0.4em] text-amber-300">ADVERSARIAL INTEGRATION PROTOCOL</p>
              <h2 className="mt-3 text-xl font-semibold tracking-[0.2em] text-gray-200">AIP ENGINE</h2>
              <p className="mx-auto mt-3 max-w-2xl text-xs leading-6 text-gray-600">Deliberation is not the endpoint. The AIP challenges the integrated theory, exposes vulnerabilities, forces correction, and controls what is allowed to advance.</p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-[8px] tracking-[0.18em]">
                {[["HIGH RISK", "amber"], ["INDEPENDENT ANALYSIS", "gold"], ["VULNERABILITIES EXPOSED", "red"], ["ADVERSARIAL ATTACK", "red"], ["CORRECTION", "gold"], ["SURVIVES", "green"]].map(([label, tone], i) => <span key={label} className={`sist-aip-step sist-aip-${tone}`}><b>{String(i + 1).padStart(2, "0")}</b>{label}</span>)}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
