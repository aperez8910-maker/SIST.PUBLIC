import Navbar from "@/components/Navbar";

export default function StrategicDivision() {
  return (
    <main className="min-h-screen bg-[#050810] text-white">

      <Navbar />

      <section className="px-4 sm:px-8 py-5 sm:py-6">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm tracking-[0.5em] text-[#8892a0]">
            DIVISION 05
          </p>


          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            STRATEGIC
            <br />
            INTELLIGENCE
            <br />
            & DECISION
            <br />
            ANALYSIS
          </h1>


          <p className="mt-8 max-w-3xl text-lg text-gray-300">
            The Strategic Intelligence & Decision Analysis Division
            transforms analyzed information into structured insights,
            strategic options, and informed decision support.
          </p>


          <div className="mt-16 border border-white/10 p-6">

            <h2 className="text-3xl font-bold">
              Focus Areas
            </h2>


            <ul className="mt-6 space-y-3 text-[#8892a0]">

              <li>
                • Strategic planning analysis
              </li>

              <li>
                • Risk and opportunity assessment
              </li>

              <li>
                • Scenario evaluation
              </li>

              <li>
                • Decision support intelligence
              </li>

              <li>
                • Long-term strategic development
              </li>

            </ul>

          </div>


          <div className="mt-10 border border-white/10 p-6">

            <h2 className="text-3xl font-bold">
              Mission
            </h2>


            <p className="mt-5 text-[#8892a0]">
              To convert intelligence findings into strategic
              understanding that supports better decisions,
              planning, and organizational direction.
            </p>

          </div>


          <div className="mt-10 border border-white/10 p-6">

            <h2 className="text-3xl font-bold">
              Intelligence Approach
            </h2>


            <p className="mt-5 text-[#8892a0]">
              Strategic intelligence requires more than collecting
              information. SIST combines analysis, challenge,
              verification, and synthesis to develop meaningful
              strategic perspectives.
            </p>

          </div>


        </div>

      </section>

    </main>
  );
}
