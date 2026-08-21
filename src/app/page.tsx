"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const networkNodes = [
  { id: "1", label: "VERIFIED", top: "10%", left: "52%" },
  { id: "2", label: "SIGNAL", top: "16%", left: "42%" },
  { id: "3", label: "REVIEW", top: "26%", left: "41%" },
  { id: "4", label: "VERIFIED", top: "38%", left: "45%" },
  { id: "5", label: "SIGNAL", top: "46%", left: "54%" },
  { id: "6", label: "REVIEW", top: "42%", left: "67%" },
  { id: "8", label: "SIGNAL", top: "26%", left: "77%" },
  { id: "9", label: "REVIEW", top: "12%", left: "73%" },
];

const nodeLinks = [
  ["52", "10", "42", "16"],
  ["42", "16", "41", "26"],
  ["41", "26", "45", "38"],
  ["45", "38", "54", "46"],
  ["54", "46", "67", "42"],
  ["67", "42", "77", "26"],
  ["77", "26", "73", "12"],
  ["73", "12", "52", "10"],
];

const steps = [
  { n: "1", label: "DEFINE" },
  { n: "2", label: "GATHER" },
  { n: "3", label: "CHALLENGE" },
  { n: "4", label: "DECONSTRUCT" },
  { n: "5", label: "SYNTHESIZE" },
  { n: "6", label: "STRATEGIZE" },
  { n: "7", label: "EXECUTE" },
  { n: "8", label: "REVIEW" },
  { n: "9", label: "IMPROVE" },
];

const divisions = [
  {
    title: "LEGAL INTELLIGENCE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    desc: "Deep legal and regulatory intelligence to expose risk, strengthen position, and drive strategic advantage.",
    items: [
      "Litigation Intelligence",
      "Regulatory & Compliance Analysis",
      "Legal Risk Assessments",
      "Case Strategy Support",
    ],
    href: "/divisions/legal",
  },
  {
    title: "HEALTHCARE ACCOUNTABILITY",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    desc: "Exposing waste, abuse, and system failures. Advancing transparency. Protecting patients.",
    items: [
      "Billing & Coding Analysis",
      "Overpayment & Recovery",
      "Compliance & Fraud Investigations",
      "Policy & Systemic Reform Support",
    ],
    href: "/divisions/healthcare",
  },
  {
    title: "CONSUMER ADVOCACY",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    desc: "Empowering consumers with intelligence that holds organizations accountable and levels the playing field.",
    items: [
      "Consumer Harm Analysis",
      "Deceptive Practice Investigations",
      "Financial & Contract Review",
      "Resolution & Redress Strategy",
    ],
    href: "/divisions/consumer",
  },
  {
    title: "INSTITUTIONAL ACCOUNTABILITY",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6" />
      </svg>
    ),
    desc: "Investigating systemic failures and misconduct. Promoting integrity and public trust.",
    items: [
      "Government & Public Entity Oversight",
      "Ethics & Integrity Investigations",
      "Policy & Governance Analysis",
      "Whistleblower & Retaliation Support",
    ],
    href: "/divisions/strategic",
  },
];

const inquiries = [
  { label: "LEGAL INTELLIGENCE", count: 14, color: "bg-[#c9a84c]" },
  { label: "HEALTHCARE ACCOUNTABILITY", count: 9, color: "bg-emerald-500" },
  { label: "CONSUMER ADVOCACY", count: 7, color: "bg-blue-500" },
  { label: "INSTITUTIONAL ACCOUNTABILITY", count: 11, color: "bg-purple-500" },
];

const feed = [
  { time: "09:42", text: "Activity detected: Regulatory filing anomaly identified." },
  { time: "09:31", text: "New signal captured: Healthcare billing pattern." },
  { time: "09:17", text: "Legal motion flagged for inconsistency review." },
  { time: "09:03", text: "Source validation: Financial disclosure mismatch." },
];

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "DIVISIONS", href: "/divisions" },
  { label: "BRIEFINGS", href: "/briefings" },
  { label: "RESEARCH", href: "/research" },
  { label: "CONTACT", href: "/contact" },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [pulse, setPulse] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => setPulse((p) => !p), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050810] font-sans text-[#f0f0f0] antialiased overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 sm:px-6 lg:px-10 border-b border-white/[0.12] bg-[#050810]/85 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10">
            <Image src="/logo.png" alt="SIST™" width={40} height={40} priority className="object-contain" />
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-[0.15em] text-white">SIST™</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-9">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-[11px] tracking-[0.12em] font-medium text-[#8892a0] hover:text-[#c9a84c] transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/contact" className="px-4 sm:px-5 py-2 text-[11px] tracking-[0.08em] font-semibold border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] transition-all duration-300 rounded">
            REQUEST BRIEFING
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded border border-white/10 text-[#c9a84c]"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050810]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center gap-6 h-full">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.14em] text-[#8892a0] hover:text-[#c9a84c] transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-2 px-6 py-3 text-sm tracking-[0.1em] font-semibold border border-[#c9a84c]/40 text-[#c9a84c] hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] transition-all rounded">
              REQUEST BRIEFING
            </Link>
          </div>
        </div>
      )}

      {/* ===== MAIN CONTENT ===== */}
      <div className="xl:pr-72">
        {/* ===== HERO ===== */}
        <section className="relative min-h-[100svh] pt-14 sm:pt-16 flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(10,20,40,0.6)_0%,transparent_60%)]" />

          <div className="absolute right-[-10%] sm:right-[-5%] top-0 w-[85%] sm:w-[70%] h-full z-[1] opacity-90">
            <Image src="/hero-eagle-austin.jpg" alt="Adversarial intelligence command center — eagle, Austin skyline, network graph" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-transparent to-[#050810]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050810] via-transparent to-transparent" />
          </div>

          <svg className="absolute inset-0 w-full h-full z-[4] pointer-events-none opacity-25" viewBox="0 0 100 100" preserveAspectRatio="none">
            {nodeLinks.map((link, idx) => (
              <line key={idx} x1={link[0]} y1={link[1]} x2={link[2]} y2={link[3]} stroke="#c9a84c" strokeWidth="0.18" className="animate-pulse" style={{ animationDelay: `${idx * 0.3}s` }} />
            ))}
          </svg>

          {mounted &&
            networkNodes.map((node, idx) => (
              <div key={node.id} className="absolute flex flex-col items-center gap-1 z-[5] pointer-events-none hidden lg:flex" style={{ top: node.top, left: node.left }}>
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full border border-[#c9a84c]/30 animate-ping" style={{ animationDelay: `${idx * 0.4}s` }} />
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#c9a84c]/60 bg-[#050810]/80 flex items-center justify-center text-xs font-bold text-[#c9a84c] shadow-[0_0_18px_rgba(201,168,76,0.25)]">
                    {node.id}
                  </div>
                </div>
                <span className="text-[7px] tracking-[0.15em] text-[#c9a84c]/80 font-medium">{node.label}</span>
              </div>
            ))}

          <div className="relative z-10 px-5 sm:px-10 lg:px-14 max-w-xl pt-6 sm:pt-0">
            <div className="text-[8px] sm:text-[9px] font-bold tracking-[0.36em] text-[#c9a84c] mb-3 sm:mb-4">SYSTEM INTELLIGENCE & STRATEGIC TACTICS™</div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white mb-4 sm:mb-5">
              INTELLIGENCE
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e8d5a3] to-[#c9a84c]">UNDER PRESSURE.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#8892a0] font-light mb-6 sm:mb-10">Challenge everything. Trust what survives.</p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-14">
              <Link href="/system" className="group px-5 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-br from-[#c9a84c] to-[#8a7030] text-[#050810] text-xs font-bold tracking-wide rounded hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)] transition-all flex items-center gap-2">
                EXPLORE SIST
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/interactive" className="px-5 sm:px-7 py-3 sm:py-3.5 border border-white/20 text-white text-xs font-semibold tracking-wide rounded hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all flex items-center gap-2">
                VIEW WORKFLOW
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg">
              <svg className="w-4 h-4 text-[#c9a84c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <div className="text-xs font-semibold tracking-wide text-white">AUSTIN, TEXAS</div>
                <div className="text-[10px] text-[#8892a0] font-mono">30.2672° N, 97.7431° W</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== WORKFLOW ===== */}
        <section className="py-5 sm:py-6 px-4 sm:px-8 lg:px-10 bg-white/[0.03] border-y border-white/[0.12] flex flex-col md:flex-row md:items-center gap-6 sm:gap-8">
          <div className="md:w-40 flex-shrink-0">
            <h3 className="text-xs sm:text-sm font-bold tracking-wide text-white mb-1">AIP™ ADVERSARIAL INTEGRATION PROTOCOL</h3>
            <p className="text-[10px] sm:text-xs text-[#8892a0] leading-relaxed">
              A rigorous process.
              <br />
              Built for clarity in complexity.
            </p>
          </div>
          <div className="flex-1 overflow-x-auto pb-2">
            <div className="flex items-center min-w-max gap-0">
              {steps.map((s, i, arr) => (
                <div key={s.n} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 group cursor-default">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#c9a84c]/40 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/10 transition-all flex items-center justify-center text-sm font-bold text-[#c9a84c] bg-[#050810]/50">
                      {s.n}
                    </div>
                    <span className="text-[7px] sm:text-[9px] tracking-[0.12em] text-[#8892a0] group-hover:text-white transition-colors font-medium">{s.label}</span>
                  </div>
                  {i < arr.length - 1 && <div className="w-5 sm:w-6 lg:w-10 h-px mx-1 bg-gradient-to-r from-[#c9a84c]/30 to-[#c9a84c]/10 mb-4 sm:mb-5" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== DIVISIONS ===== */}
        <section id="divisions" className="p-3 sm:p-4 lg:p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
          {divisions.map((d) => (
            <div key={d.title} className="group relative rounded-lg border border-white/[0.12] bg-white/[0.06] overflow-hidden hover:border-[#c9a84c]/30 hover:shadow-[0_0_30px_rgba(201,168,76,0.08),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-400 cursor-pointer min-h-[220px] sm:min-h-[260px] flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/85 to-[#050810]/50" />
              <div className="relative z-10 p-4 sm:p-6 flex flex-col h-full">
                <div className="flex items-start gap-3 sm:gap-3.5 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/5 flex items-center justify-center text-[#c9a84c] flex-shrink-0">{d.icon}</div>
                  <h3 className="text-sm font-bold tracking-wide text-white leading-tight pt-1">{d.title}</h3>
                </div>
                <p className="text-xs text-[#8892a0] leading-relaxed mb-3 sm:mb-4">{d.desc}</p>
                <ul className="list-none flex-1 space-y-1.5">
                  {d.items.map((item) => (
                    <li key={item} className="text-[10px] sm:text-[11px] text-[#8892a0] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-sm bg-[#c9a84c] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={d.href} className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] tracking-[0.12em] text-[#c9a84c] font-semibold group-hover:text-[#e8d5a3] transition-colors">
                  VIEW DIVISION
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="bg-white/[0.03] border-t border-white/[0.12] px-4 sm:px-8 lg:px-10 py-5 sm:py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-4 sm:mb-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#c9a84c]/25 flex items-center justify-center text-[#c9a84c]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.2em] text-white font-medium">SECURE. INDEPENDENT. UNCOMPROMISING.</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#c9a84c]/25 flex items-center justify-center text-[#c9a84c]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] text-[#8892a0]">ALL COMMUNICATIONS ENCRYPTED</div>
                <div className="text-[10px] text-[#c9a84c]/60 font-mono">AES-256 • TLS 1.3</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#c9a84c]/25 flex items-center justify-center text-[#c9a84c]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] text-[#8892a0]">SYSTEM STATUS</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)] animate-pulse" />
                  <span className="text-[10px] text-white tracking-wide">OPERATIONAL</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#c9a84c]/25 flex items-center justify-center text-[#c9a84c]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] text-[#8892a0]">SUPPORT@SYSTEMINTELLIGENCEANDSTRATEGICTACTICS.COM</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 sm:pt-5 border-t border-white/5">
            <div className="flex items-center gap-2 text-[9px] tracking-[0.1em] text-[#8892a0]">
              <svg className="w-3 h-3 text-[#c9a84c]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7h7l9-11h-7z" />
              </svg>
              <span>INTELLIGENCE NETWORK</span>
              <span className="text-[#c9a84c] font-mono font-semibold">128 SOURCES ACTIVE</span>
            </div>
            <div className="text-[9px] text-[#8892a0]/40 tracking-wider">© {new Date().getFullYear()} SIST™. ALL RIGHTS RESERVED.</div>
          </div>
        </footer>
      </div>

      {/* ===== LIVE INTELLIGENCE SIDEBAR ===== */}
      <aside className="fixed top-0 right-0 bottom-0 w-72 sm:w-80 bg-[#050810]/95 backdrop-blur-3xl border-l border-white/[0.12] z-40 hidden xl:flex flex-col">
        <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-white/[0.12] flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[11px] font-bold tracking-[0.1em] text-white">LIVE INTELLIGENCE</span>
          </div>
          <div className={`w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] ${pulse ? "animate-pulse" : "opacity-50"}`} />
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 sm:space-y-6">
          <div>
            <h4 className="text-[8px] sm:text-[9px] tracking-[0.2em] text-[#8892a0] mb-2 sm:mb-3 font-semibold">THREAT LANDSCAPE</h4>
            <div className="h-28 sm:h-32 rounded border border-white/[0.12] bg-[#020304] relative overflow-hidden">
              <svg viewBox="0 0 220 80" className="h-full w-full" aria-hidden="true">
                <circle cx="38" cy="28" r="2" className="fill-[#c9a84c]/90 animate-pulse" />
                <circle cx="72" cy="52" r="1.5" className="fill-[#c9a84c]/75 animate-pulse" style={{ animationDelay: "0.4s" }} />
                <circle cx="106" cy="22" r="2" className="fill-[#10b981]/90 animate-pulse" style={{ animationDelay: "0.8s" }} />
                <circle cx="138" cy="46" r="1.5" className="fill-[#c9a84c]/75 animate-pulse" style={{ animationDelay: "1.2s" }} />
                <circle cx="170" cy="30" r="2" className="fill-[#3b82f6]/90 animate-pulse" style={{ animationDelay: "1.6s" }} />
                <circle cx="192" cy="58" r="1.5" className="fill-[#a855f7]/80 animate-pulse" style={{ animationDelay: "2s" }} />
                <path d="M38 28 C60 14 88 42 106 22 S152 18 170 30 S188 48 192 58" fill="none" stroke="#c9a84c" strokeOpacity="0.28" strokeWidth="1" />
                <path d="M38 28 C80 60 120 30 138 46 S172 54 192 58" fill="none" stroke="#10b981" strokeOpacity="0.22" strokeWidth="1" />
              </svg>
            </div>
          </div>

          <div>
            <h4 className="text-[8px] sm:text-[9px] tracking-[0.2em] text-[#8892a0] mb-2 sm:mb-3 font-semibold">ACTIVE INQUIRIES</h4>
            <div className="space-y-1.5">
              {inquiries.map((q) => (
                <div key={q.label} className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-sm ${q.color}`} />
                    <span className="text-[10px] text-[#8892a0] tracking-wide">{q.label}</span>
                  </div>
                  <span className="text-[11px] text-white font-mono font-semibold">{q.count.toString().padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[8px] sm:text-[9px] tracking-[0.2em] text-[#8892a0] mb-2 sm:mb-3 font-semibold">INTELLIGENCE FEED</h4>
            <div className="space-y-0">
              {feed.map((f, i) => (
                <div key={i} className="py-2 border-b border-white/[0.02] last:border-0">
                  <div className="flex items-start gap-2">
                    <span className="text-[9px] text-[#c9a84c]/60 font-mono mt-0.5 flex-shrink-0">{f.time}</span>
                    <span className="text-[10px] text-[#8892a0] leading-snug">{f.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-5 py-3 sm:py-3.5 border-t border-white/[0.12]">
          <Link href="/briefings" className="w-full flex items-center justify-between text-[8px] sm:text-[9px] tracking-[0.15em] text-[#8892a0] hover:text-[#c9a84c] transition-colors">
            VIEW FULL FEED
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </aside>
    </main>
  );
}
