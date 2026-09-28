import ResearchDocument from "@/components/ResearchDocument";

export default function Page() {
  return <ResearchDocument
    code="R-02"
    title="Adversarial Integration Protocol™"
    subtitle="The public theory behind SIST's challenge layer: a working conclusion should be exposed to structured opposition before it is treated as deployable intelligence."
    status="IMPLEMENTED / VALIDATION ONGOING"
    sections={[
      { title:"Why adversarial review exists", body:"A coherent answer can still be wrong. Early assumptions can propagate through later reasoning and become harder to notice because the final narrative sounds internally consistent. AIP places challenge inside the reasoning path rather than treating review as a final cosmetic check." },
      { title:"What gets challenged", body:"The challenge layer is aimed at the working position, not at producing disagreement for its own sake.", points:["Unsupported assumptions and missing premises.","Contradictory dates, records, or representations.","Alternative explanations that fit the known facts.","Weak authority or procedural dependencies.","Evidence that should exist if the theory is true but is missing.","Failure conditions that would materially change the conclusion."] },
      { title:"Possible outcomes", body:"A challenged finding does not have to be forced into a yes-or-no result. The system can preserve states such as repairable, superseded, replaced, withdrawn, or reopened under controlled conditions. HOLD is a valid result when the record is insufficient." },
      { title:"What success means", body:"AIP is successful when it changes the treatment of weak intelligence: catching an unsupported claim, forcing a revision, surfacing missing evidence, narrowing confidence, or stopping release. Agreement between models is not itself the objective." },
      { title:"Validation path", body:"A stronger public validation program compares the same seeded cases under a single-model baseline, independent multi-seat analysis, and the full adversarial control layer. Useful measures include defect discovery, correction rate, error escape, HOLD decisions, reproducibility, cost, and latency." },
    ]}
    boundaries={[
      "The public site does not claim statistical superiority across all tasks.",
      "AIP does not guarantee factual truth when ground truth is missing.",
      "Adversarial review can fail when multiple systems share the same blind spot.",
      "Challenge output still requires human review.",
    ]}
  />;
}
