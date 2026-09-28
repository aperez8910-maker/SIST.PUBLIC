import ResearchDocument from "@/components/ResearchDocument";

export default function Page() {
  return <ResearchDocument
    code="R-04"
    title="AI Council Model"
    subtitle="A public description of independent analytical seats, visible disagreement, controlled synthesis, and final human authority."
    status="IMPLEMENTED / PUBLIC OVERVIEW"
    sections={[
      { title:"The Council is not a vote", body:"The value of the Council does not come from majority agreement. Separate seats are used to develop different analytical functions before synthesis so the final position is less likely to inherit one model's first framing without challenge." },
      { title:"Functional separation", body:"The public Council presents three AI functions: independent analysis, adversarial review, and research/verification. SIST also preserves a human ENFORCER™ authority responsible for objectives, judgment, and final release.", points:["Independent analysis develops a position from the record.","Adversarial review targets weak assumptions and alternate explanations.","Research and verification tests support, sourcing, and material gaps.","Human authority decides whether the synthesis is accepted, revised, held, or deployed."] },
      { title:"Dissent is information", body:"A disagreement between seats should not be averaged away merely to create a clean answer. Material dissent can reveal ambiguity, missing evidence, or a hidden dependency. The synthesis layer should preserve that information when it matters." },
      { title:"Synthesis", body:"Synthesis is the controlled act of reconciling the record, the analytical positions, the challenge findings, and unresolved uncertainty into a usable decision product. It is not permission to erase contrary evidence." },
      { title:"Why human control remains", body:"Consequential decisions require context, accountability, and judgment beyond automated pattern generation. SIST is designed to extend analytical capacity while keeping final authority with a human operator." },
    ]}
    boundaries={[
      "The Council does not imply that three AI systems are always better than one.",
      "Agreement is not treated as proof.",
      "The public document does not disclose private prompts or exact orchestration logic.",
      "No AI seat has autonomous authority to make consequential decisions.",
    ]}
  />;
}
