import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-black px-6 text-white">

      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col items-center text-center">


          <Image
            src="/logo.png"
            alt="SIST Logo"
            width={140}
            height={140}
            priority
            className="mb-10"
          />


          <p className="text-sm tracking-[0.6em] text-gray-400">
            SIST
          </p>


          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-8xl">

            SYSTEM
            <br />
            INTELLIGENCE
            <br />
            &
            <br />
            STRATEGIC TACTICS

          </h1>


          <p className="mt-8 max-w-3xl text-lg text-gray-300 md:text-xl">

            An intelligence architecture designed to organize
            information, analyze complexity, challenge assumptions,
            and produce strategic understanding.

          </p>


          <div className="mt-12 flex flex-col gap-4 sm:flex-row">


            <Link
              href="/system"
              className="border border-white px-8 py-3 transition hover:bg-white hover:text-black"
            >
              EXPLORE SYSTEM
            </Link>


            <Link
              href="/divisions"
              className="border border-gray-700 px-8 py-3 transition hover:border-white"
            >
              VIEW DIVISIONS
            </Link>


          </div>


        </div>

      </div>


    </section>
  );
}
