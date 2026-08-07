import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "What Is Adversarial Review? | SIST Intelligence Briefings",
  description:
    "How SIST™ uses structured adversarial review, verification, and human judgment to strengthen strategic output.",
};

const stages = [
  ["01", "INTAKE", "Raw chaos enters the system. Charges, deadlines, evidence, fear."],
  ["02", "DECONSTRUCTION", "The council breaks the case into moving parts. What is real? What is bluff?"],
  ["03", "THREAT MAPPING", "Every player, deadline, and procedural vulnerability is catalogued."],
  ["04", "ADVERSARIAL STRESS TEST", "The initial strategy is attacked. If it breaks here, it rebuilds."],
  ["05", "COUNCIL DEBATE", "Specialized perspectives challenge the work. No consensus, no advancement."],
  ["06", "RED TEAM ATTACK", "A second round of destruction: pre-mortem analysis of how the strategy could fail."],
  ["07", "HARDENING", "The document is fortified with citations, procedural armor, and contingency planning."],
  ["08", "ENFORCER REVIEW", "Human eyes and human judgment modify and approve the final output."],
  ["09", "DEPLOYMENT", "The output is filed, sent, or presented—court-hardened and battle-ready."],
];

export default function AdversarialReviewPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <article className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm tracking-[0.5em] text-gray-400">
            SIST INTELLIGENCE BRIEFINGS · AIP™ FIELD NOTE 01
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            WHAT IS
            <br />
            ADVERSARIAL REVIEW?
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-gray-300">
            A disciplined process that challenges assumptions, verifies claims,
            exposes weaknesses, and requires human approval before strategic
            output is used.
          </p>

          <div className="mt-14 border-l-2 border-white pl-6 text-2xl font-semibold leading-relaxed md:text-3xl">
            “The AI agents fight each other so the human doesn&apos;t have to fight alone.”
          </div>

          <section className="mt-16 space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              Standard AI use is often single-shot: a person asks a question,
              receives an answer, and has to decide whether it can be trusted.
              SIST™ approaches complex institutional problems differently.
            </p>

            <p>
              The Adversarial Integration Protocol (AIP™) gives specialized
              analytical roles the job of challenging, checking, and refining
              one another&apos;s work before the human ENFORCER™ reviews the result.
              Disagreement is surfaced, not hidden.
            </p>

            <p>
              AIP™ is not a chatbot, a legal template, or an AI assistant. It
              is a human-directed process for converting fragmented information
              into strategically tested output.
            </p>
          </section>

          <section className="mt-20">
            <p className="text-sm tracking-[0.5em] text-gray-400">
              THE 9-STAGE PIPELINE
            </p>

            <div className="mt-8 divide-y divide-gray-800 border-y border-gray-800">
              {stages.map(([number, title, description]) => (
                <div key={number} className="grid gap-4 py-7 md:grid-cols-[92px_1fr_1.4fr] md:gap-8">
                  <p className="text-2xl font-bold text-gray-500">{number}</p>
                  <h2 className="text-xl font-bold">{title}</h2>
                  <p className="text-gray-400">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 border border-gray-800 p-8 md:p-12">
            <p className="text-sm tracking-[0.5em] text-gray-400">
              WHY IT MATTERS
            </p>

            <h2 className="mt-6 text-3xl font-bold md:text-4xl">
              Pressure-test the work before the institution does.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Institutions often depend on confusion, delay, fragmented records,
              and unchallenged assumptions. Adversarial review helps turn that
              chaos into a structured record, a clearer strategy, and an output
              tested for its weak points before deployment.
            </p>
          </section>

          <section className="mt-20 space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              SIST™ was built through a 16-month legal fight in Bexar County,
              Texas. Its architecture was developed around the practical need to
              organize information, identify procedural pressure points, and
              make a human being less alone when facing a large system.
            </p>

            <p className="text-2xl font-semibold text-white">
              This is not research assistance. This is institutional warfare coordination.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
