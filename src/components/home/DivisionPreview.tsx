import Link from "next/link";
import { divisions } from "@/data/divisions";

export default function DivisionPreview() {
  return (
    <section className="bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm tracking-[0.5em] text-gray-400">
          SPECIALIZED DIVISIONS
        </p>


        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
          FIVE DOMAINS.
          <br />
          ONE ARCHITECTURE.
        </h2>


        <p className="mt-8 max-w-3xl text-lg text-gray-300">
          SIST applies a unified intelligence methodology across
          specialized divisions designed for different analytical
          environments.
        </p>


        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {divisions.map((division) => (

            <Link
              key={division.number}
              href={division.href}
              className="border border-gray-800 p-8 transition hover:border-white"
            >

              <p className="text-sm tracking-widest text-gray-500">
                DIVISION {division.number}
              </p>


              <h3 className="mt-4 text-xl font-bold">
                {division.title}
              </h3>


              <p className="mt-4 text-gray-400">
                {division.description}
              </p>


              <p className="mt-6 text-sm tracking-wider text-white">
                EXPLORE DIVISION →
              </p>


            </Link>

          ))}

        </div>


        <div className="mt-12">

          <Link
            href="/divisions"
            className="inline-block border border-white px-8 py-3 tracking-wider transition hover:bg-white hover:text-black"
          >
            VIEW ALL DIVISIONS
          </Link>

        </div>


      </div>

    </section>
  );
}
