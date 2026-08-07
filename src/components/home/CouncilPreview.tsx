import Link from "next/link";

const councilRoles = [
  {
    title: "Researcher",
    description:
      "Collects information, identifies sources, and establishes context.",
  },
  {
    title: "Analyst",
    description:
      "Examines relationships, patterns, inconsistencies, and findings.",
  },
  {
    title: "Adversarial Reviewer",
    description:
      "Challenges assumptions and tests conclusions through structured review.",
  },
  {
    title: "Strategist",
    description:
      "Transforms intelligence findings into strategic options and action.",
  },
];

export default function CouncilPreview() {
  return (
    <section className="bg-black px-6 py-24 text-white">

      <div className="mx-auto max-w-6xl">

        <p className="text-sm tracking-[0.5em] text-gray-400">
          AI COUNCIL
        </p>


        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
          MULTIPLE
          <br />
          PERSPECTIVES.
          <br />
          ONE OBJECTIVE.
        </h2>


        <p className="mt-8 max-w-3xl text-lg text-gray-300">
          The SIST AI Council applies structured perspectives to
          examine information, challenge conclusions, and strengthen
          intelligence output.
        </p>


        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {councilRoles.map((role) => (

            <div
              key={role.title}
              className="border border-gray-800 p-8 transition hover:border-white"
            >

              <h3 className="text-2xl font-bold">
                {role.title}
              </h3>


              <p className="mt-4 text-gray-400">
                {role.description}
              </p>

            </div>

          ))}

        </div>


        <div className="mt-12">

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/council"
              className="inline-block border border-white px-8 py-3 tracking-wider transition hover:bg-white hover:text-black"
            >
              EXPLORE AI COUNCIL
            </Link>

            <a
              href="/interactive"
              className="inline-block border border-gray-700 px-8 py-3 tracking-wider transition hover:border-white"
            >
              LAUNCH INTERACTIVE EXPERIENCE
            </a>
          </div>

        </div>


      </div>

    </section>
  );
}
