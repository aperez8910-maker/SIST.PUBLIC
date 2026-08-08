import Link from "next/link";
import Image from "next/image";

const nodes = [
  { label: "INTAKE", x: 50, y: 8, angle: 0 },
  { label: "ANALYZE", x: 18, y: 29, angle: -32 },
  { label: "RESEARCH", x: 82, y: 29, angle: 32 },
  { label: "INTEGRATE", x: 15, y: 62, angle: -48 },
  { label: "CHALLENGE", x: 85, y: 62, angle: 48, critical: true },
  { label: "VERIFY", x: 22, y: 88, angle: -28 },
  { label: "BRIEF", x: 78, y: 88, angle: 28 },
  { label: "DEPLOY", x: 50, y: 96, angle: 0 },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen overflow-hidden bg-black px-6 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_45%,rgba(30,120,255,0.14),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(0,80,180,0.08),transparent_40%)]" />

      <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="mx-auto flex w-full max-w-7xl items-center py-24 lg:py-28">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.8fr_1.7fr_0.65fr]">
          <div className="relative z-20 max-w-xl">
            <p className="text-xs font-medium tracking-[0.45em] text-sky-400">
              SYSTEM INTELLIGENCE &amp; STRATEGIC TACTICS
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              INTELLIGENCE
              <br />
              FOR SYSTEMS
              <br />
              <span className="text-sky-400">THAT FIGHT BACK.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
              SIST is an adversarial intelligence architecture built to organize
              complexity, challenge assumptions, expose weaknesses, verify claims,
              and produce strategic understanding.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/system"
                className="border border-sky-500/70 bg-sky-500/10 px-7 py-3 text-center text-sm font-medium tracking-wide text-white transition hover:bg-sky-400 hover:text-black"
              >
                EXPLORE ARCHITECTURE
              </Link>
              <Link
                href="/interactive"
                className="border border-white/20 px-7 py-3 text-center text-sm font-medium tracking-wide text-gray-300 transition hover:border-sky-400 hover:text-white"
              >
                LAUNCH INTERACTIVE
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[700px] select-none">
            <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/20 shadow-[0_0_80px_rgba(30,140,255,0.12)]" />
            <div className="absolute left-1/2 top-1/2 h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/30 animate-[spin_18s_linear_infinite]" />
            <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 animate-[spin_12s_linear_infinite_reverse]" />

            <div className="absolute inset-[13%]">
              <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
                <defs>
                  <filter id="sistGlow">
                    <feGaussianBlur stdDeviation="0.9" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {nodes.map((node, index) => (
                  <g key={node.label}>
                    <path
                      d={`M 50 50 L ${node.x} ${node.y}`}
                      fill="none"
                      stroke={node.critical ? "rgba(248,113,113,0.75)" : "rgba(56,189,248,0.65)"}
                      strokeWidth="0.28"
                      strokeDasharray="1.5 2"
                      className="animate-[dash_3.5s_linear_infinite]"
                      style={{ animationDelay: `${index * 0.18}s` }}
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="1.1"
                      fill={node.critical ? "#f87171" : "#38bdf8"}
                      filter="url(#sistGlow)"
                      className="animate-pulse"
                    />
                  </g>
                ))}
              </svg>
            </div>

            {nodes.map((node, index) => (
              <button
                key={node.label}
                type="button"
                aria-label={`${node.label} intelligence stage`}
                className={`group absolute -translate-x-1/2 -translate-y-1/2 ${node.critical ? "text-red-300" : "text-sky-300"}`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-xl border bg-black/80 shadow-[0_0_25px_rgba(30,140,255,0.15)] backdrop-blur transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(56,189,248,0.4)] sm:h-16 sm:w-16 ${
                    node.critical
                      ? "border-red-400/70 group-hover:shadow-[0_0_35px_rgba(248,113,113,0.35)]"
                      : "border-sky-400/50"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-current shadow-[0_0_12px_currentColor]" />
                </span>
                <span className="mt-2 block whitespace-nowrap text-[9px] font-medium tracking-[0.18em] text-gray-400 transition group-hover:text-white">
                  {node.label}
                </span>
              </button>
            ))}

            <div className="absolute left-1/2 top-1/2 flex h-[38%] w-[38%] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-sky-300/30 bg-sky-400/[0.025] shadow-[0_0_70px_rgba(56,189,248,0.16)] animate-[pulse_4s_ease-in-out_infinite]" />
              <div className="relative flex h-[72%] w-[72%] items-center justify-center rounded-full border border-white/20 bg-black/90 shadow-[inset_0_0_40px_rgba(56,189,248,0.08),0_0_50px_rgba(0,100,220,0.18)]">
                {/* The actual SIST logo is preserved unchanged. */}
                <Image
                  src="/logo.png"
                  alt="SIST Logo"
                  width={180}
                  height={180}
                  priority
                  className="h-auto w-[72%]"
                />
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[170px] text-center sm:translate-y-[205px]">
              <span className="inline-flex items-center gap-2 text-[9px] tracking-[0.3em] text-gray-500">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                SYSTEM SYNCHRONIZED
              </span>
            </div>
          </div>

          <div className="relative z-20 hidden rounded-lg border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm lg:block">
            <div className="text-[10px] tracking-[0.3em] text-gray-500">SYSTEM STATUS</div>
            <div className="mt-3 flex items-center gap-2 text-sm text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              OPERATIONAL
            </div>
            <div className="mt-7 space-y-4 text-[10px] tracking-[0.18em] text-gray-500">
              <div className="flex justify-between gap-5">
                <span>COUNCIL</span>
                <span className="text-gray-300">ONLINE</span>
              </div>
              <div className="flex justify-between gap-5">
                <span>PROCESS</span>
                <span className="text-gray-300">ACTIVE</span>
              </div>
              <div className="flex justify-between gap-5">
                <span>VERIFICATION</span>
                <span className="text-gray-300">READY</span>
              </div>
              <div className="flex justify-between gap-5">
                <span>CHALLENGE</span>
                <span className="text-red-300">ARMED</span>
              </div>
            </div>

            <div className="mt-7 border-t border-white/10 pt-4">
              <div className="text-[9px] tracking-[0.25em] text-gray-600">LIVE SIGNAL</div>
              <div className="mt-3 flex h-8 items-end gap-1">
                {[3, 7, 4, 11, 6, 15, 5, 9, 13, 7, 17, 8, 12, 5, 14, 9].map((height, index) => (
                  <span
                    key={index}
                    className="w-1 animate-pulse bg-sky-400/60"
                    style={{ height: `${height * 2}px`, animationDelay: `${index * 80}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -14;
          }
        }
      `}</style>
    </section>
  );
}
