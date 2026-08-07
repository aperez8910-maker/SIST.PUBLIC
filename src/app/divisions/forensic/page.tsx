import Navbar from "@/components/Navbar";

export default function ForensicDivision() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 pt-32 pb-20">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm tracking-[0.5em] text-gray-400">
            DIVISION 04
          </p>


          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            FORENSIC
            <br />
            INTELLIGENCE
            <br />
            & EVIDENCE
            <br />
            ANALYSIS
          </h1>


          <p className="mt-8 max-w-3xl text-lg text-gray-300">
            The Forensic Intelligence & Evidence Analysis Division
            applies structured intelligence methods to organize,
            examine, and interpret complex information environments.
          </p>


          <div className="mt-16 border border-gray-800 p-10">

            <h2 className="text-3xl font-bold">
              Focus Areas
            </h2>


            <ul className="mt-6 space-y-3 text-gray-400">

              <li>
                • Evidence organization and classification
              </li>

              <li>
                • Timeline reconstruction
              </li>

              <li>
                • Document analysis and comparison
              </li>

              <li>
                • Information consistency review
              </li>

              <li>
                • Pattern and relationship identification
              </li>

            </ul>

          </div>


          <div className="mt-10 border border-gray-800 p-10">

            <h2 className="text-3xl font-bold">
              Mission
            </h2>


            <p className="mt-5 text-gray-400">
              To transform fragmented information into organized
              intelligence by applying structured review,
              analytical methods, and evidence-based evaluation.
            </p>

          </div>


          <div className="mt-10 border border-gray-800 p-10">

            <h2 className="text-3xl font-bold">
              Intelligence Approach
            </h2>


            <p className="mt-5 text-gray-400">
              SIST evaluates information through organization,
              analysis, verification, and structured challenge to
              develop clearer intelligence outcomes.
            </p>

          </div>


        </div>

      </section>

    </main>
  );
}
