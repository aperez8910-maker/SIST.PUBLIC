"use client";

import { useMemo, useState } from "react";

type Stage = {
  id: string;
  label: string;
  short: string;
  x: number;
  y: number;
  tone: "gold" | "red" | "green";
};

const stages: Stage[] = [
  { id: "01", label: "INTAKE", short: "Scope, objectives, actors, evidence", x: 84, y: 225, tone: "gold" },
  { id: "02", label: "INGESTION", short: "Normalize records and preserve provenance", x: 212, y: 120, tone: "gold" },
  { id: "03", label: "INTELLIGENCE", short: "Parallel research and analytical paths", x: 372, y: 86, tone: "gold" },
  { id: "04", label: "SYNTHESIS", short: "Fuse supported findings into position", x: 520, y: 166, tone: "gold" },
  { id: "05", label: "ADVERSARIAL", short: "Attack assumptions and weak theories", x: 677, y: 92, tone: "red" },
  { id: "06", label: "VERIFY", short: "Trace critical claims back to source", x: 806, y: 210, tone: "green" },
  { id: "07", label: "BRIEF", short: "Compress surviving intelligence", x: 662, y: 324, tone: "green" },
  { id: "08", label: "DEPLOY", short: "Move verified output into action", x: 470, y: 342, tone: "gold" },
];

const links = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
  [1, 3], [2, 4], [3, 5], [4, 6], [2, 6], [0, 3], [3, 7],
];

const toneClass = {
  gold: "lattice-gold",
  red: "lattice-red",
  green: "lattice-green",
};

export default function SystemLattice() {
  const [active, setActive] = useState(4);
  const selected = stages[active];

  const pathData = useMemo(
    () =>
      links.map(([a, b]) => {
        const A = stages[a];
        const B = stages[b];
        const mx = (A.x + B.x) / 2;
        return `M ${A.x} ${A.y} C ${mx} ${A.y}, ${mx} ${B.y}, ${B.x} ${B.y}`;
      }),
    []
  );

  return (
    <div className="system-lattice" aria-label="Interactive SIST system architecture">
      <div className="lattice-toolbar">
        <div>
          <span className="eyebrow">LIVE ARCHITECTURE MODEL</span>
          <strong>{selected.id} / {selected.label}</strong>
        </div>
        <div className="lattice-status">
          <span className="status-pulse" />
          INTERACTIVE MODEL
        </div>
      </div>

      <div className="lattice-canvas">
        <svg viewBox="0 0 900 430" role="img" aria-label="SIST staged intelligence lattice">
          <defs>
            <linearGradient id="goldFlow" x1="0" x2="1">
              <stop offset="0" stopColor="#7f6527" />
              <stop offset=".5" stopColor="#f1d17a" />
              <stop offset="1" stopColor="#7f6527" />
            </linearGradient>
            <radialGradient id="coreGlow">
              <stop offset="0" stopColor="#f1d17a" stopOpacity=".92" />
              <stop offset=".22" stopColor="#c9a84c" stopOpacity=".35" />
              <stop offset="1" stopColor="#c9a84c" stopOpacity="0" />
            </radialGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <g className="lattice-grid">
            {Array.from({ length: 18 }).map((_, i) => <line key={`v-${i}`} x1={i * 52} y1="0" x2={i * 52} y2="430" />)}
            {Array.from({ length: 10 }).map((_, i) => <line key={`h-${i}`} x1="0" y1={i * 48} x2="900" y2={i * 48} />)}
          </g>

          <circle cx="460" cy="214" r="182" className="lattice-orbit orbit-a" />
          <circle cx="460" cy="214" r="126" className="lattice-orbit orbit-b" />

          <g className="lattice-links">
            {pathData.map((d, i) => (
              <path key={i} d={d} className={i < 7 ? "primary-link" : "secondary-link"} />
            ))}
          </g>

          <g className="lattice-packets" aria-hidden="true">
            {pathData.slice(0, 7).map((d, i) => (
              <circle key={i} r="2.8" className={i === 4 ? "packet packet-red" : i === 5 ? "packet packet-green" : "packet"}>
                <animateMotion dur={`${4.4 + i * .35}s`} repeatCount="indefinite" path={d} begin={`-${i * .7}s`} />
              </circle>
            ))}
          </g>

          <g className="lattice-core">
            <circle cx="460" cy="214" r="60" fill="url(#coreGlow)" opacity=".28" />
            <circle cx="460" cy="214" r="34" className="core-ring" />
            <circle cx="460" cy="214" r="18" className="core-dot" filter="url(#softGlow)" />
            <text x="460" y="208" textAnchor="middle">SIST</text>
            <text x="460" y="225" textAnchor="middle" className="core-sub">CORE</text>
          </g>

          {stages.map((stage, i) => (
            <g
              key={stage.id}
              className={`lattice-node ${toneClass[stage.tone]} ${active === i ? "is-active" : ""}`}
              transform={`translate(${stage.x} ${stage.y})`}
              onClick={() => setActive(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActive(i);
              }}
              aria-label={`${stage.id} ${stage.label}: ${stage.short}`}
            >
              <circle r="25" className="node-halo" />
              <circle r="14" className="node-shell" />
              <circle r="4" className="node-dot" />
              <text y="39" textAnchor="middle" className="node-id">{stage.id}</text>
              <text y="53" textAnchor="middle" className="node-label">{stage.label}</text>
            </g>
          ))}
        </svg>

        <aside className="lattice-readout">
          <span className="readout-index">{selected.id}</span>
          <div>
            <p>ACTIVE NODE</p>
            <h3>{selected.label}</h3>
            <span>{selected.short}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
