export default function LiveIntelligenceMap() {
  const nodes = [
    [90, 110, "SOURCE", "amber"], [250, 70, "EVIDENCE", "amber"], [410, 125, "ANALYSIS", "gold"],
    [570, 72, "COUNCIL", "gold"], [730, 128, "SYNTHESIS", "gold"], [890, 76, "AIP", "gold"],
    [1050, 130, "CHALLENGE", "red"], [1210, 78, "VERIFY", "green"], [1370, 130, "RELEASE", "green"],
  ] as const;
  return (
    <section className="live-map-panel" aria-label="Live intelligence network">
      <div className="live-map-header">
        <div><span className="section-label">LIVE INTELLIGENCE NETWORK</span><h2>THE OPERATING PICTURE.</h2><p>Evidence moves through the intelligence architecture. Nodes pulse, routes advance, and adversarial oversight remains visible.</p></div>
        <div className="live-status"><i /> LIVE NODES / ROUTING ACTIVE</div>
      </div>
      <div className="live-map-stage">
        <div className="map-grid" /><div className="map-orbit orbit-one" /><div className="map-orbit orbit-two" />
        <svg viewBox="0 0 1460 210" className="network-svg" role="img" aria-label="SIST live evidence and verification route">
          <defs><linearGradient id="routeGold" x1="0" x2="1"><stop offset="0" stopColor="#8c6926"/><stop offset=".5" stopColor="#e0bd68"/><stop offset="1" stopColor="#8c6926"/></linearGradient><linearGradient id="routeGreen" x1="0" x2="1"><stop offset="0" stopColor="#c89a3d"/><stop offset="1" stopColor="#6f9a78"/></linearGradient></defs>
          <path className="network-route" d="M90 110 L250 70 L410 125 L570 72 L730 128 L890 76 L1050 130 L1210 78 L1370 130" />
          <path className="network-route secondary" d="M90 110 C260 185 420 185 570 72 C720 -10 930 195 1050 130 C1160 80 1260 185 1370 130" />
          <path className="network-route verification" d="M730 128 C850 175 920 170 1050 130 L1210 78 L1370 130" />
          <circle className="route-packet packet-one" r="4" cx="90" cy="110" /><circle className="route-packet packet-two" r="4" cx="410" cy="125" /><circle className="route-packet packet-three" r="4" cx="890" cy="76" /><circle className="route-packet packet-four" r="4" cx="1210" cy="78" />
          {nodes.map(([x,y,label,tone]) => <g key={label} className={`network-node node-${tone}`} transform={`translate(${x} ${y})`}><circle r="17" className="node-halo"/><circle r="7" className="node-core"/><circle r="3" className="node-center"/><text x="0" y="34" textAnchor="middle">{label}</text></g>)}
        </svg>
        <div className="map-legend"><span><i className="legend-gold"/> PRIMARY FLOW</span><span><i className="legend-red"/> ADVERSARIAL SENTINEL</span><span><i className="legend-green"/> VERIFICATION</span></div>
      </div>
    </section>
  );
}
