"use client";

import { useState } from "react";

export default function OpenAIConsole() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function runIntelligence() {
    const value = input.trim();
    if (!value || loading) return;

    setLoading(true);
    setError("");
    setOutput("");

    try {
      const response = await fetch("/api/intelligence", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: value }),
      });

      const data = (await response.json()) as { output?: string; error?: string };
      if (!response.ok) throw new Error(data.error || "Intelligence request failed");
      setOutput(data.output || "No response returned.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Intelligence request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-8 border border-amber-300/20 bg-black/60 shadow-[0_0_80px_rgba(215,173,75,.06)]">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
        <span className="text-[8px] tracking-[.35em] text-gray-500">OPENAI / SIST INTELLIGENCE CHANNEL</span>
        <span className="text-[8px] tracking-[.25em] text-emerald-300">SERVER-SIDE CREDENTIAL</span>
      </div>
      <div className="grid gap-6 p-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-[9px] tracking-[.35em] text-amber-300">TASK INTAKE</p>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if ((event.metaKey || event.ctrlKey) && event.key === "Enter") runIntelligence();
            }}
            placeholder="Enter an intelligence task, question, theory, or evidence summary..."
            className="mt-4 min-h-44 w-full resize-y border border-white/10 bg-[#050607] p-4 text-sm leading-6 text-gray-200 outline-none placeholder:text-gray-700 focus:border-amber-300/40"
          />
          <button
            type="button"
            onClick={runIntelligence}
            disabled={!input.trim() || loading}
            className="mt-4 border border-amber-300/40 px-5 py-3 text-[8px] font-bold tracking-[.25em] text-amber-300 transition hover:border-amber-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? "PROCESSING / OPENAI" : "RUN INTELLIGENCE ↗"}
          </button>
          <span className="ml-4 text-[7px] tracking-[.15em] text-gray-700">⌘/CTRL + ENTER</span>
        </div>

        <div className="min-h-44 border border-white/10 bg-[#030405] p-5">
          <p className="text-[9px] tracking-[.35em] text-emerald-300">SURVIVING INTELLIGENCE</p>
          {error ? (
            <p className="mt-5 text-xs leading-6 text-red-300">{error}</p>
          ) : output ? (
            <pre className="mt-5 whitespace-pre-wrap font-sans text-xs leading-6 text-gray-300">{output}</pre>
          ) : (
            <p className="mt-5 text-xs leading-6 text-gray-700">Awaiting an intelligence task.</p>
          )}
        </div>
      </div>
    </section>
  );
}
