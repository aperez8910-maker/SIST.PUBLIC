import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 pt-32 pb-20">

        <div className="mx-auto max-w-5xl">

          <p className="text-sm tracking-[0.5em] text-gray-400">
            CONTACT SIST
          </p>


          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            CONNECT
            <br />
            WITH SIST
          </h1>


          <p className="mt-8 max-w-3xl text-lg text-gray-300">
            For inquiries regarding System Intelligence &
            Strategic Tactics, research, partnerships, and
            intelligence framework discussions.
          </p>


          <div className="mt-16 border border-gray-800 p-10">

            <h2 className="text-3xl font-bold">
              General Inquiries
            </h2>


            <p className="mt-6 text-gray-400">
              Email
            </p>


            <a
              href="mailto:support@systemintelligenceandstrategictactics.com"
              className="mt-2 block text-lg text-white hover:underline"
            >
              support@systemintelligenceandstrategictactics.com
            </a>


          </div>


          <div className="mt-10 border border-gray-800 p-10">

            <h2 className="text-3xl font-bold">
              Areas of Interest
            </h2>


            <ul className="mt-6 space-y-3 text-gray-400">

              <li>
                • Research collaboration
              </li>

              <li>
                • Strategic intelligence discussions
              </li>

              <li>
                • Framework development
              </li>

              <li>
                • Institutional partnerships
              </li>

            </ul>

          </div>


        </div>

      </section>

    </main>
  );
}
