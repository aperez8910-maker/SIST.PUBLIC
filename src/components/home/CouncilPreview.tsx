import Link from "next/link";

const councilRoles = [
  { title: "Researcher", description: "Collects information, identifies sources, and establishes context before analysis begins." },
  { title: "Analyst", description: "Examines relationships, patterns, inconsistencies, and findings while separating evidence from inference." },
  { title: "Adversarial Reviewer", description: "Challenges assumptions and tests conclusions through structured review intended to expose weak reasoning." },
  { title: "Strategist", description: "Transforms reviewed intelligence findings into strategic options, priorities, and action-oriented outputs." },
];

export default function CouncilPreview() {
  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-[0.5em] text-gray-400">AI COUNCIL</p>
        <h2 className="mt-6 text-4xl font-bold md:text-6xl">How does the SIST AI Council work?</h2>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          The SIST AI Council is a multi-perspective review model in which distinct analytical roles examine the same information from different positions. The public architecture describes research, analysis, adversarial review, and strategy as separate responsibilities rather than asking one perspective to perform every function. This separation creates explicit opportunities to challenge assumptions, compare interpretations, identify uncertainty, and strengthen the final synthesis. The Council is therefore a methodological component of SIST: its value comes from structured disagreement and review, not from presenting a collection of generic AI personas.
        </p>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {councilRoles.map((role) => (
            <div key={role.title} className="border border-gray-800 p-8 transition hover:border-white">
              <h3 className="text-2xl font-bold">{role.title}</h3>
              <p className="mt-4 leading-7 text-gray-400">{role.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link href="/council" className="inline-block border border-white px-8 py-3 tracking-wider transition hover:bg-white hover:text-black">EXPLORE AI COUNCIL</Link>
          <Link href="/interactive" className="inline-block border border-gray-700 px-8 py-3 tracking-wider transition hover:border-white">LAUNCH INTERACTIVE EXPERIENCE</Link>
        </div>
      </div>
    </section>
  );
}
