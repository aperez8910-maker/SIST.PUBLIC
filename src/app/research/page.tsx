import Navbar from "@/components/Navbar";

const research = [
  {
    title: "SIST Intelligence Architecture",
    description:
      "A structured framework describing the organization, analysis, and application of intelligence methodology.",
  },

  {
    title: "Adversarial Integration Protocol",
    description:
      "A methodology designed to challenge assumptions, test conclusions, and improve analytical outcomes.",
  },

  {
    title: "Strategic Intelligence Framework",
    description:
      "A system for transforming complex information into structured strategic understanding.",
  },

  {
    title: "AI Council Model",
    description:
      "A multi-perspective reasoning framework designed to improve analysis through specialized viewpoints.",
  },
];


export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 pt-32 pb-20">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm tracking-[0.5em] text-gray-400">
            SIST RESEARCH
          </p>


          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            KNOWLEDGE
            <br />
            CENTER
          </h1>


          <p className="mt-8 max-w-3xl text-lg text-gray-300">
            Research, frameworks, and documentation supporting
            the development of System Intelligence & Strategic Tactics.
          </p>


          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {research.map((item) => (

              <div
                key={item.title}
                className="border border-gray-800 p-8 transition hover:border-white"
              >

                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>


                <p className="mt-4 text-gray-400">
                  {item.description}
                </p>


              </div>

            ))}

          </div>


        </div>

      </section>

    </main>
  );
}
