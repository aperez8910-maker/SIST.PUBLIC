import Navbar from "@/components/Navbar";

export default function LegalDivision() {
  return (
    <main className="min-h-screen bg-[#050810] text-white">

      <Navbar />

      <section className="px-4 sm:px-8 py-5 sm:py-6">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm tracking-[0.5em] text-[#8892a0]">
            DIVISION 01
          </p>


          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            LEGAL
            <br />
            INTELLIGENCE
            <br />
            & LITIGATION STRATEGY
          </h1>


          <p className="mt-8 max-w-3xl text-lg text-gray-300">
            The Legal Intelligence Division applies structured
            analysis to legal information, records, evidence,
            procedures, and strategic decision-making environments.
          </p>


          <div className="mt-16 border border-white/10 p-6">

            <h2 className="text-3xl font-bold">
              Focus Areas
            </h2>

            <ul className="mt-6 space-y-3 text-[#8892a0]">

              <li>• Document and record analysis</li>

              <li>• Timeline reconstruction</li>

              <li>• Evidence organization</li>

              <li>• Procedural review</li>

              <li>• Strategic intelligence preparation</li>

            </ul>

          </div>


        </div>

      </section>

    </main>
  );
}
