import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function BriefingsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm tracking-[0.5em] text-gray-400">
            SIST INTELLIGENCE BRIEFINGS
          </p>

          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            FIELD NOTES
            <br />
            FROM THE SYSTEM
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-gray-300">
            Original notes on adversarial review, structured intelligence,
            institutional analysis, and the human-directed SIST™ architecture.
          </p>

          <Link
            href="/briefings/what-is-adversarial-review"
            className="mt-16 block border border-gray-800 p-8 transition hover:border-white"
          >
            <p className="text-xs tracking-[0.25em] text-gray-500">
              AIP™ FIELD NOTE 01
            </p>

            <h2 className="mt-5 text-3xl font-bold">
              What Is Adversarial Review?
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              An introduction to the AIP™ method: structured challenge,
              verification, and human-directed strategic synthesis.
            </p>

            <p className="mt-8 text-sm font-medium text-white">
              READ BRIEFING →
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
