const stages = [
  { number: "01", title: "INTAKE", description: "Collect information, define objectives, identify the relevant record, and establish the scope of analysis before conclusions are formed." },
  { number: "02", title: "ORGANIZATION", description: "Structure fragmented information into an organized intelligence environment so sources, facts, claims, and unknowns can be distinguished." },
  { number: "03", title: "ANALYSIS", description: "Examine relationships, patterns, contradictions, dependencies, and critical findings while keeping observations tied to the available evidence." },
  { number: "04", title: "ADVERSARIAL REVIEW", description: "Challenge assumptions and test conclusions through alternative perspectives designed to expose weak evidence, unsupported inference, and overlooked counterarguments." },
  { number: "05", title: "STRATEGIC SYNTHESIS", description: "Transform the reviewed analysis into a concise strategic output that identifies what is established, what remains uncertain, and what decisions follow." },
];

export default function Architecture() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-[0.5em] text-gray-400">SIST FRAMEWORK</p>
        <h2 className="mt-6 text-4xl font-bold md:text-6xl">How does the SIST intelligence pipeline work?</h2>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          The SIST intelligence pipeline is a staged workflow for converting complex information into structured, challenged, and synthesized intelligence. Each stage has a defined purpose: establish the record, organize the material, analyze it, challenge the emerging conclusion, and produce a final synthesis. The public implementation exposes this architecture so visitors can understand the methodology instead of treating SIST as an opaque AI answer generator. The stages can be extended or specialized for different analytical environments without changing the underlying discipline of intake, organization, analysis, adversarial review, and synthesis.
        </p>
        <div className="mt-16 space-y-6">
          {stages.map((stage) => (
            <div key={stage.number} className="border border-gray-800 p-8 transition hover:border-white">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <span className="text-3xl font-bold text-gray-500">{stage.number}</span>
                <div>
                  <h3 className="text-2xl font-bold">{stage.title}</h3>
                  <p className="mt-3 text-gray-400 leading-7">{stage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
