import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import IntakeForm from "./IntakeForm";

export const metadata: Metadata = {
  title: "Secure Intake | SIST",
  description: "Submit a matter for preliminary review by System Intelligence & Strategic Tactics.",
  alternates: { canonical: "/intake" },
};

export default function IntakePage() {
  return (
    <main className="sist-page-shell min-h-screen">
      <div className="sist-grid pointer-events-none fixed inset-0" />
      <Navbar />

      <section className="relative px-4 py-8 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_390px] lg:items-end">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.4em] text-amber-300">SIST / STAGE 01</p>
              <h1 className="sist-metal mt-5 text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
                MATTER<br />INTAKE
              </h1>
              <p className="mt-7 max-w-3xl text-base leading-8 text-[#9ba4b0] md:text-lg">
                Establish the record before analysis begins. Give SIST the facts, objective, known deadline, and available source material needed to scope the matter.
              </p>
            </div>

            <div className="border border-emerald-400/20 bg-emerald-400/[0.025] p-6">
              <div className="flex items-center justify-between text-[10px] tracking-[0.28em]">
                <span className="text-[#8892a0]">INTAKE STATUS</span>
                <span className="text-emerald-300">OPEN</span>
              </div>
              <ol className="mt-6 space-y-4 text-sm text-[#aeb5bf]">
                <li><span className="mr-3 text-amber-300">01</span>Submit the matter</li>
                <li><span className="mr-3 text-amber-300">02</span>Scope and conflict review</li>
                <li><span className="mr-3 text-amber-300">03</span>Response with next action</li>
              </ol>
              <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-[#7f8996]">
                Do not send passwords, Social Security numbers, payment-card data, medical records, or unredacted evidence through this form. SIST will provide a controlled follow-up channel if records are needed.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
            <IntakeForm />

            <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
              <div className="border border-white/10 bg-[#060a10]/80 p-5">
                <p className="text-[10px] font-semibold tracking-[0.28em] text-amber-300">STRONG INTAKE</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[#929ca8]">
                  <li>Use exact dates when known.</li>
                  <li>Separate facts from assumptions.</li>
                  <li>Name the decision or outcome needed.</li>
                  <li>Identify the controlling deadline.</li>
                  <li>List evidence without pasting sensitive contents.</li>
                </ul>
              </div>
              <div className="border border-red-400/20 bg-red-400/[0.025] p-5">
                <p className="text-[10px] font-semibold tracking-[0.28em] text-red-300">NO EMERGENCY MONITORING</p>
                <p className="mt-4 text-sm leading-6 text-[#929ca8]">
                  This channel is not monitored continuously. If someone is in immediate danger, contact local emergency services. Court, filing, or removal deadlines must be stated clearly in the form.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
