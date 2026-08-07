import Navbar from "@/components/Navbar";

export default function ConsumerDivision() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 pt-32 pb-20">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm tracking-[0.5em] text-gray-400">
            DIVISION 03
          </p>


          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            CONSUMER
            <br />
            ADVOCACY
            <br />
            & INSTITUTIONAL
            <br />
            ACCOUNTABILITY
          </h1>


          <p className="mt-8 max-w-3xl text-lg text-gray-300">
            The Consumer Advocacy & Institutional Accountability
            Division applies intelligence methodology to examine
            consumer experiences, organizational practices, records,
            and system-level issues.
          </p>


          <div className="mt-16 border border-gray-800 p-10">

            <h2 className="text-3xl font-bold">
              Focus Areas
            </h2>


            <ul className="mt-6 space-y-3 text-gray-400">

              <li>
                • Consumer record organization and review
              </li>

              <li>
                • Institutional process analysis
              </li>

              <li>
                • Documentation and evidence management
              </li>

              <li>
                • Dispute intelligence preparation
              </li>

              <li>
                • Accountability and transparency analysis
              </li>

            </ul>

          </div>


          <div className="mt-10 border border-gray-800 p-10">

            <h2 className="text-3xl font-bold">
              Mission
            </h2>


            <p className="mt-5 text-gray-400">
              To provide structured intelligence that helps individuals
              understand complex consumer environments and evaluate
              institutional decisions through organized information
              and analytical review.
            </p>

          </div>


          <div className="mt-10 border border-gray-800 p-10">

            <h2 className="text-3xl font-bold">
              Intelligence Approach
            </h2>


            <p className="mt-5 text-gray-400">
              SIST examines available information, identifies patterns,
              evaluates inconsistencies, and develops a clearer
              understanding of complex consumer and institutional
              interactions.
            </p>

          </div>


        </div>

      </section>

    </main>
  );
}
