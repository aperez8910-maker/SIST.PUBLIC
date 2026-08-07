export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black px-6 py-10 text-white">

      <div className="mx-auto max-w-6xl">

        <h2 className="text-xl font-bold">
          SYSTEM INTELLIGENCE & STRATEGIC TACTICS
        </h2>

        <p className="mt-3 text-gray-400">
          Transforming information into strategic intelligence.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          support@systemintelligenceandstrategictactics.com
        </p>

        <p className="mt-6 text-sm text-gray-600">
          © {new Date().getFullYear()} SIST. All rights reserved.
        </p>

      </div>

    </footer>
  );
}
