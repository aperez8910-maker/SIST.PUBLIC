import OpenAIConsole from "@/components/OpenAIConsole";

export default function IntelligencePage() {
  return (
    <main className="min-h-screen bg-[#020304] px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <header className="border-b border-amber-300/15 pb-6">
          <p className="text-[9px] tracking-[.42em] text-amber-300">SIST / LIVE INTELLIGENCE</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-.04em] text-gray-100 sm:text-7xl">INTELLIGENCE CONSOLE</h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500">
            Server-side OpenAI processing for the SIST intelligence layer. The API credential never enters the browser.
          </p>
        </header>
        <OpenAIConsole />
      </div>
    </main>
  );
}
