import Navbar from "@/components/Navbar";
import Link from "next/link";

type Tone = "gold" | "green" | "blue" | "red" | "violet";

type DivisionDetailProps = {
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  focus: string[];
  mission?: string;
  approach?: string;
  tone?: Tone;
};

const toneMap: Record<Tone, { text: string; border: string; glow: string; dot: string }> = {
  gold: { text: "text-amber-300", border: "border-amber-300/25", glow: "shadow-[0_0_55px_rgba(215,173,75,.08)]", dot: "bg-amber-300" },
  green: { text: "text-emerald-300", border: "border-emerald-300/25", glow: "shadow-[0_0_55px_rgba(56,227,154,.07)]", dot: "bg-emerald-300" },
  blue: { text: "text-sky-300", border: "border-sky-300/25", glow: "shadow-[0_0_55px_rgba(56,189,248,.07)]", dot: "bg-sky-300" },
  red: { text: "text-red-300", border: "border-red-300/25", glow: "shadow-[0_0_55px_rgba(255,77,94,.07)]", dot: "bg-red-300" },
  violet: { text: "text-violet-300", border: "border-violet-300/25", glow: "shadow-[0_0_55px_rgba(167,139,250,.07)]", dot: "bg-violet-300" },
};

export default function DivisionDetail({
  number,
  eyebrow,
  title,
  intro,
  focus,
  mission,
  approach,
  tone = "gold",
}: DivisionDetailProps) {
  const t = toneMap[tone];

  return (
    <main className="sist-page-shell sist-modern-page min-h-screen text-white">
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <div className="sist-modern-radial pointer-events-none fixed inset-0" />
      <Navbar />

      <section className="relative mx-auto max-w-[1500px] px-4 pb-20 pt-28 sm:px-8 sm:pt-32">
        <div className="grid gap-8 border-b border-white/10 pb-12 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <div className={`flex items-center gap-3 text-[9px] tracking-[.34em] ${t.text}`}>
              <span className={`h-2 w-2 rounded-full ${t.dot} shadow-[0_0_14px_currentColor]`} />
              DIVISION {number} / {eyebrow}
            </div>
            <h1 className="sist-metal mt-5 max-w-5xl text-5xl font-semibold leading-[.93] tracking-[-.045em] sm:text-6xl lg:text-8xl">
              {title}
            </h1>
            <p className="mt-7 max-w-4xl text-base leading-8 text-[#a8b1bc] md:text-lg">
              {intro}
            </p>
          </div>

          <aside className={`sist-modern-card ${t.border} ${t.glow}`}>
            <div className="flex items-center justify-between text-[8px] tracking-[.28em]">
              <span className="text-[#929daa]">DIVISION NODE</span>
              <span className={t.text}>ONLINE</span>
            </div>
            <div className="mt-6 grid grid-cols-5 gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`h-1.5 ${i < Number(number) ? t.dot : "bg-white/10"}`} />
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-[#98a3af]">
              Specialized operating environment connected to the common SIST intelligence architecture.
            </p>
          </aside>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
          <section className={`sist-modern-card min-h-[430px] ${t.border} ${t.glow}`}>
            <div className="flex items-center justify-between">
              <span className={`text-[8px] tracking-[.32em] ${t.text}`}>PRIMARY OPERATING SCOPE</span>
              <span className="font-mono text-[9px] text-[#6f7986]">NODE-{number}</span>
            </div>
            <h2 className="mt-5 font-serif text-3xl font-normal tracking-[-.03em] text-[#f3eee4] sm:text-4xl">Focus areas</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {focus.map((item, index) => (
                <div key={item} className="group border border-white/10 bg-white/[.025] p-4 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[.045]">
                  <div className="flex items-start gap-3">
                    <span className={`mt-1 font-mono text-[9px] ${t.text}`}>{String(index + 1).padStart(2, "0")}</span>
                    <p className="m-0 text-sm leading-6 text-[#b1bac5]">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-5">
            {mission && (
              <section className="sist-modern-card">
                <span className="text-[8px] tracking-[.32em] text-[#8893a0]">MISSION</span>
                <h2 className="mt-4 font-serif text-2xl font-normal text-[#f3eee4]">Why this division exists.</h2>
                <p className="mt-4 text-sm leading-7 text-[#a1abb7]">{mission}</p>
              </section>
            )}

            {approach && (
              <section className="sist-modern-card">
                <span className="text-[8px] tracking-[.32em] text-[#8893a0]">INTELLIGENCE APPROACH</span>
                <h2 className="mt-4 font-serif text-2xl font-normal text-[#f3eee4]">How the work is structured.</h2>
                <p className="mt-4 text-sm leading-7 text-[#a1abb7]">{approach}</p>
              </section>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-7">
          <Link href="/divisions" className="sist-modern-link">← ALL DIVISIONS</Link>
          <Link href="/system" className="sist-modern-link">SYSTEM ARCHITECTURE →</Link>
        </div>
      </section>
    </main>
  );
}
