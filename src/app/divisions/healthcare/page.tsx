import Navbar from "@/components/Navbar";

export default function HealthcareDivision() {
  return (
    <main className="min-h-screen bg-[#050810] text-white">

      <Navbar />

      <section className="px-4 sm:px-8 py-5 sm:py-6">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm tracking-[0.5em] text-[#8892a0]">
            DIVISION 02
          </p>


          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            HEALTHCARE
            <br />
            INTELLIGENCE
            <br />
            & ADVOCACY
          </h1>


          <p className="mt-8 max-w-3xl text-lg text-gray-300">
            The Healthcare Intelligence & Advocacy Division applies
            structured analysis to healthcare information, records,
            processes, and institutional systems to improve
            understanding, transparency, and accountability.
          </p>


          <div className="mt-16 border border-white/10 p-6">

            <h2 className="text-3xl font-bold">
              Focus Areas
            </h2>


            <ul className="mt-6 space-y-3 text-[#8892a0]">

              <li>
                • Medical record organization and analysis
              </li>

              <li>
                • Healthcare process review
              </li>

              <li>
                • Patient advocacy intelligence
              </li>

              <li>
                • Institutional accountability analysis
              </li>

              <li>
                • Complex healthcare information synthesis
              </li>

            </ul>

          </div>


          <div className="mt-10 border border-white/10 p-6">

            <h2 className="text-3xl font-bold">
              Mission
            </h2>


            <p className="mt-5 text-[#8892a0]">
              To help individuals and organizations better understand
              complex healthcare environments through structured
              intelligence, documentation, and analysis.
            </p>

          </div>


        </div>

      </section>

    </main>
  );
}
