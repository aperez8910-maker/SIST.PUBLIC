import Navbar from "@/components/Navbar";
import Link from "next/link";
import { divisions } from "@/data/divisions";

export default function DivisionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 pt-32 pb-20">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm tracking-[0.5em] text-gray-400">
            SIST DIVISIONS
          </p>


          <h1 className="mt-6 text-5xl font-bold md:text-7xl">
            SPECIALIZED
            <br />
            INTELLIGENCE
          </h1>


          <p className="mt-8 max-w-3xl text-lg text-gray-300">
            SIST operates through specialized divisions that apply
            the intelligence architecture across different analytical
            environments.
          </p>


          <div className="mt-16 grid gap-8 md:grid-cols-2">

            {divisions.map((division) => (

              <Link
                key={division.number}
                href={division.href}
                className="border border-gray-800 p-8 transition hover:border-white"
              >

                <p className="text-sm tracking-widest text-gray-500">
                  DIVISION {division.number}
                </p>


                <h2 className="mt-4 text-2xl font-bold">
                  {division.title}
                </h2>


                <p className="mt-5 text-gray-400">
                  {division.description}
                </p>


                <p className="mt-6 text-sm tracking-wider text-white">
                  ACCESS DIVISION →
                </p>


              </Link>

            ))}

          </div>


        </div>

      </section>

    </main>
  );
}
