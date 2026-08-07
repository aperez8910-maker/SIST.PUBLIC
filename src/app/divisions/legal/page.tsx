import Navbar from "@/components/Navbar";

export default function LegalDivision() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 pt-32 pb-20">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm tracking-[0.5em] text-gray-400">
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


          <div className="mt-16 border border-gray-800 p-10">

            <h2 className="text-3xl font-bold">
              Focus Areas
            </h2>

            <ul className="mt-6 space-y-3 text-gray-400">

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
