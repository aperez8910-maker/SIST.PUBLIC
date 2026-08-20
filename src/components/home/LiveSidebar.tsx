"use client";

import { useEffect, useMemo, useState } from "react";

export type FeedItem = {
  time: string;
  text: string;
};

const STATUS_TONE: Record<string, { border: string; text: string; bg: string; bar: string }> = {
  amber: { border: "border-amber-400/40", text: "text-amber-300", bg: "bg-amber-400/[0.08]", bar: "bg-amber-400" },
  green: { border: "border-emerald-400/40", text: "text-emerald-300", bg: "bg-emerald-400/[0.08]", bar: "bg-emerald-400" },
  red: { border: "border-red-400/40", text: "text-red-300", bg: "bg-red-400/[0.08]", bar: "bg-red-400" },
  teal: { border: "border-sky-400/40", text: "text-sky-300", bg: "bg-sky-400/[0.08]", bar: "bg-sky-400" },
};

const STATUS_ITEMS = [
  { label: "LEGAL INTELLIGENCE", count: 14, tone: "amber" },
  { label: "HEALTHCARE ACCOUNTABILITY", count: 9, tone: "green" },
  { label: "CONSUMER ADVOCACY", count: 7, tone: "teal" },
  { label: "INSTITUTIONAL ACCOUNTABILITY", count: 11, tone: "red" },
];

const BASE_FEED: FeedItem[] = [
  { time: "09:42", text: "Activity detected: Regulatory filing anomaly identified" },
  { time: "09:31", text: "New signal captured: Healthcare billing pattern" },
  { time: "09:17", text: "Legal motion flagged for inconsistency review" },
  { time: "09:03", text: "Source validation: Financial disclosure mismatch" },
];

const EXTRA_FEED: FeedItem[] = [
  { time: "09:43", text: "AIP gate 04 cleared: DECONSTRUCT advanced" },
  { time: "09:44", text: "Signal anomaly: timeline gap identified" },
  { time: "09:45", text: "Synthesis node updated: new evidence incorporated" },
  { time: "09:46", text: "Challenge stage escalated: adversarial review active" },
  { time: "09:47", text: "Release hold reviewed: verified output queued" },
  { time: "09:48", text: "Live map refresh: route verification updated" },
];

export default function LiveSidebar() {
  const [feed, setFeed] = useState<FeedItem[]>(BASE_FEED);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(true);
      setFeed((items) => {
        const next = [...items];
        const extra = EXTRA_FEED[Math.floor(Math.random() * EXTRA_FEED.length)];
        next.unshift({ time: extra.time, text: extra.text });
        if (next.length > 10) next.pop();
        return next;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const liveDot = useMemo(() => (
    <span className={`inline-block h-1.5 w-1.5 rounded-full ${active ? "bg-emerald-400 shadow-[0_0_10px_#34d399]" : "bg-emerald-500/60"}`} />
  ), [active]);

  return (
    <aside className="flex h-full flex-col rounded border border-white/10 bg-black/40">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <div className="text-[9px] font-bold tracking-[0.38em] text-amber-300">LIVE INTELLIGENCE</div>
          <div className="mt-1 text-[8px] tracking-[0.22em] text-gray-500">AUSTIN OPERATIONS</div>
        </div>
        <div className="flex items-center gap-2 text-[8px] tracking-[0.28em] text-emerald-300">
          {liveDot}
          <span className="uppercase">Live</span>
        </div>
      </div>

      <div className="border-b border-white/10 p-4">
        <div className="text-[8px] font-semibold tracking-[0.34em] text-gray-500">THREAT LANDSCAPE</div>
        <div className="mt-3 h-20 w-full overflow-hidden rounded border border-white/10 bg-[#050607]">
          <svg viewBox="0 0 220 80" className="h-full w-full" aria-hidden="true">
            <circle cx="38" cy="28" r="2" className="fill-amber-400/80" />
            <circle cx="72" cy="52" r="1.5" className="fill-amber-400/70" />
            <circle cx="106" cy="22" r="2" className="fill-red-400/80" />
            <circle cx="138" cy="46" r="1.5" className="fill-amber-400/70" />
            <circle cx="170" cy="30" r="2" className="fill-emerald-400/80" />
            <circle cx="192" cy="58" r="1.5" className="fill-amber-400/60" />
            <path d="M38 28 C60 14 88 42 106 22 S152 18 170 30 S188 48 192 58" fill="none" stroke="#f0c75e" strokeOpacity="0.22" strokeWidth="1" />
            <path d="M38 28 C80 60 120 30 138 46 S172 54 192 58" fill="none" stroke="#34d399" strokeOpacity="0.18" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="border-b border-white/10 p-4">
        <div className="flex items-center justify-between text-[8px] tracking-[0.34em] text-gray-500">
          <span>ACTIVE INQUIRIES</span>
          <span className="text-amber-300">LIVE</span>
        </div>
        <div className="mt-3 space-y-2">
          {STATUS_ITEMS.map((item) => {
            const t = STATUS_TONE[item.tone];
            return (
              <div key={item.label} className={`flex items-center justify-between rounded border ${t.border} ${t.bg} px-3 py-2`}>
                <span className={`text-[8px] font-semibold tracking-[0.24em] ${t.text}`}>{item.label}</span>
                <span className={`text-[8px] font-mono tracking-[0.2em] text-white/70`}>{String(item.count).padStart(2, "0")}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between text-[8px] tracking-[0.34em] text-gray-500">
          <span>INTELLIGENCE FEED</span>
          <span className="text-white/25">AIP™</span>
        </div>
        <div className="mt-3 flex-1 space-y-2">
          {feed.map((item, index) => (
            <div
              key={`${item.time}-${item.text}-${index}`}
              className={`flex gap-3 border-b border-white/5 pb-2 last:border-0 ${index === 0 ? "animate-pulse" : ""}`}
            >
              <span className="mt-px font-mono text-[8px] tracking-[0.18em] text-white/25">{item.time}</span>
              <span className="text-[9px] leading-5 text-gray-400">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 p-4">
        <a
          href="/briefings"
          className="flex items-center justify-between text-[9px] font-semibold tracking-[0.28em] text-amber-300 transition hover:text-amber-200"
        >
          <span>VIEW FULL FEED</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </aside>
  );
}
