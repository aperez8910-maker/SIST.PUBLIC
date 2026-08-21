import Navbar from "@/components/Navbar";

export default function ConsumerDivision() {
  return (
    <main className="min-h-screen bg-[#050810] text-white">

      <Navbar />

      <section className="px-4 sm:px-8 py-5 sm:py-6">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm tracking-[0.5em] text-[#8892a0]">
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


          <div className="mt-16 border border-white/10 p-6">

            <h2 className="text-3xl font-bold">
              Focus Areas
            </h2>


            <ul className="mt-6 space-y-3 text-[#8892a0]">

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


          <div className="mt-10 border border-white/10 p-6">

            <h2 className="text-3xl font-bold">
              Mission
            </h2>


            <p className="mt-5 text-[#8892a0]">
              To provide structured intelligence that helps individuals
              understand complex consumer environments and evaluate
              institutional decisions through organized information
              and analytical review.
            </p>

          </div>


          <div className="mt-10 border border-white/10 p-6">

            <h2 className="text-3xl font-bold">
              Intelligence Approach
            </h2>


            <p className="mt-5 text-[#8892a0]">
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
