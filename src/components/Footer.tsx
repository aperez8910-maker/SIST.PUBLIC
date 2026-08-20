export default function Footer() {
  return (
    <footer className="border-t border-amber-300/18 bg-[#020304] px-6 py-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <h2 className="text-lg font-bold tracking-[0.18em] text-amber-200">SYSTEM INTELLIGENCE AND STRATEGIC TACTICS™</h2>
            <p className="mt-2 text-xs leading-6 text-gray-400">
              Adversarial intelligence architecture for structured research, challenge, verification, and decision support.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-[9px] font-semibold tracking-[0.32em] text-gray-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                SECURE CHANNEL
              </div>
              <div className="mt-2 text-[9px] tracking-[0.22em] text-amber-300">ALL COMMUNICATIONS ENCRYPTED</div>
              <div className="mt-1 text-[8px] tracking-[0.18em] text-gray-500">AES-256 · TLS 1.3</div>
            </div>

            <div className="rounded border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-[9px] font-semibold tracking-[0.32em] text-gray-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                SYSTEM STATUS
              </div>
              <div className="mt-2 text-[9px] tracking-[0.22em] text-emerald-300">OPERATIONAL</div>
              <div className="mt-1 text-[8px] tracking-[0.18em] text-gray-500">INTAKE ACTIVE</div>
            </div>

            <div className="rounded border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-[9px] font-semibold tracking-[0.32em] text-gray-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]" />
                AIP SENTINEL™
              </div>
              <div className="mt-2 text-[9px] tracking-[0.22em] text-amber-300">CHALLENGE ACTIVE</div>
              <div className="mt-1 text-[8px] tracking-[0.18em] text-gray-500">VERIFICATION ONLINE</div>
            </div>

            <div className="rounded border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-[9px] font-semibold tracking-[0.32em] text-gray-400">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]" />
                CHANNEL
              </div>
              <div className="mt-2 text-[9px] tracking-[0.22em] text-amber-300">
                <a href="mailto:support@systemintelligenceandstrategictactics.com" className="hover:text-amber-200">SUPPORT@SYSTEMINTELLIGENCEANDSTRATEGICTACTICS.COM</a>
              </div>
              <div className="mt-1 text-[8px] tracking-[0.18em] text-gray-500">+1 (512) 866-0147</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 md:flex-row">
          <div className="text-center text-[8px] tracking-[0.34em] text-gray-500 md:text-left">
            © {new Date().getFullYear()} SIST™ — SYSTEM INTELLIGENCE AND STRATEGIC TACTICS™. ALL RIGHTS RESERVED.
          </div>
          <div className="text-center text-[8px] tracking-[0.3em] text-gray-600 md:text-right">SECURE · INDEPENDENT · UNCOMPROMISING</div>
        </div>
      </div>
    </footer>
  );
}
