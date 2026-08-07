import Navbar from "@/components/Navbar";

const council = [
  {
    role: "Researcher",
    purpose: "Information acquisition and source development.",
    responsibilities: [
      "Gather relevant information",
      "Identify sources",
      "Establish context",
    ],
  },
  {
    role: "Analyst",
    purpose: "Pattern recognition and analytical review.",
    responsibilities: [
      "Identify relationships",
      "Detect inconsistencies",
      "Analyze findings",
    ],
  },
  {
    role: "Adversarial Reviewer",
    purpose: "Challenge assumptions and test conclusions.",
    responsibilities: [
      "Develop counterarguments",
      "Identify weaknesses",
      "Stress test analysis",
    ],
  },
  {
    role: "Strategist",
    purpose: "Strategic synthesis and decision support.",
    responsibilities: [
      "Create options",
      "Evaluate outcomes",
      "Produce intelligence",
    ],
  },
];

export default function CouncilPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 pt-32">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm tracking-[0.5em] text-gray-400">
            SIST AI COUNCIL
          </p>


          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            MULTIPLE
            <br />
            PERSPECTIVES.
            <br />
            ONE OBJECTIVE.
          </h1>


          <p className="mt-8 max-w-3xl text-lg text-gray-300">
            The SIST AI Council is a structured intelligence framework
            designed to examine information from multiple analytical
            perspectives before strategic conclusions are produced.
          </p>


          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {council.map((member) => (

              <div
                key={member.role}
                className="border border-gray-800 p-8 hover:border-white transition"
              >

                <h2 className="text-2xl font-bold">
                  {member.role}
                </h2>

                <p className="mt-4 text-gray-400">
                  {member.purpose}
                </p>


                <ul className="mt-6 space-y-2 text-sm text-gray-300">

                  {member.responsibilities.map((item) => (
                    <li key={item}>
                      • {item}
                    </li>
                  ))}

                </ul>

              </div>

            ))}

          </div>


          <div className="mt-16 border border-gray-800 p-10 text-center">

            <h2 className="text-3xl font-bold">
              Intelligence Through Examination
            </h2>

            <p className="mt-5 text-gray-400">
              Conclusions become stronger when they survive structured
              review, challenge, and analysis.
            </p>

          </div>


        </div>

      </section>

    </main>
  );
}
