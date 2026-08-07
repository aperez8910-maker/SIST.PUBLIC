const stages = [
  {
    number: "01",
    title: "INTAKE",
    description:
      "Collect information, define objectives, and establish the scope of analysis.",
  },
  {
    number: "02",
    title: "ORGANIZATION",
    description:
      "Structure fragmented information into an organized intelligence environment.",
  },
  {
    number: "03",
    title: "ANALYSIS",
    description:
      "Identify patterns, relationships, contradictions, and critical findings.",
  },
  {
    number: "04",
    title: "ADVERSARIAL REVIEW",
    description:
      "Challenge assumptions and test conclusions through alternative perspectives.",
  },
  {
    number: "05",
    title: "STRATEGIC SYNTHESIS",
    description:
      "Transform analysis into actionable strategic intelligence.",
  },
];

export default function Architecture() {
  return (
    <section className="bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm tracking-[0.5em] text-gray-400">
          SIST FRAMEWORK
        </p>


        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
          INTELLIGENCE
          <br />
          PIPELINE
        </h2>


        <p className="mt-8 max-w-3xl text-lg text-gray-300">
          SIST converts complex information into structured intelligence
          through a disciplined process of organization, analysis,
          challenge, and synthesis.
        </p>


        <div className="mt-16 space-y-6">

          {stages.map((stage) => (

            <div
              key={stage.number}
              className="border border-gray-800 p-8 transition hover:border-white"
            >

              <div className="flex flex-col gap-4 md:flex-row md:items-center">

                <span className="text-3xl font-bold text-gray-500">
                  {stage.number}
                </span>


                <div>

                  <h3 className="text-2xl font-bold">
                    {stage.title}
                  </h3>


                  <p className="mt-3 text-gray-400">
                    {stage.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>


      </div>

    </section>
  );
}
