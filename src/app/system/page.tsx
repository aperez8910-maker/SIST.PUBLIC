import Navbar from "@/components/Navbar";

const methodology = [
  {
    number: "01",
    title: "INTELLIGENCE COLLECTION",
    description:
      "Gather relevant information from available sources and establish the foundation for analysis.",
  },

  {
    number: "02",
    title: "INFORMATION ORGANIZATION",
    description:
      "Structure fragmented information into a clear and organized intelligence environment.",
  },

  {
    number: "03",
    title: "ANALYTICAL PROCESSING",
    description:
      "Evaluate relationships, patterns, inconsistencies, and important findings.",
  },

  {
    number: "04",
    title: "ADVERSARIAL INTEGRATION",
    description:
      "Challenge assumptions, test conclusions, and introduce alternative perspectives.",
  },

  {
    number: "05",
    title: "STRATEGIC OUTPUT",
    description:
      "Transform analyzed information into structured intelligence and strategic understanding.",
  },
];


export default function SystemPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 pt-32 pb-20">

        <div className="mx-auto max-w-6xl">


          <p className="text-sm tracking-[0.5em] text-gray-400">
            SIST FRAMEWORK
          </p>


          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            THE SYSTEM
            <br />
            METHODOLOGY
          </h1>


          <p className="mt-8 max-w-3xl text-lg text-gray-300">
            SIST applies a structured intelligence methodology designed
            to transform complex information into organized analysis
            and strategic understanding.
          </p>


          <div className="mt-16 space-y-6">

            {methodology.map((step) => (

              <div
                key={step.number}
                className="border border-gray-800 p-8 transition hover:border-white"
              >

                <p className="text-sm tracking-widest text-gray-500">
                  PHASE {step.number}
                </p>


                <h2 className="mt-3 text-2xl font-bold">
                  {step.title}
                </h2>


                <p className="mt-4 text-gray-400">
                  {step.description}
                </p>


              </div>

            ))}

          </div>


        </div>

      </section>

    </main>
  );
}
