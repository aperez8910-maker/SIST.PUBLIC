import DivisionDetail from "@/components/DivisionDetail";

export default function LegalDivision() {
  return (
    <DivisionDetail
      number="01"
      eyebrow="LEGAL INTELLIGENCE"
      title="LEGAL INTELLIGENCE & LITIGATION STRATEGY"
      intro="The Legal Intelligence Division applies structured analysis to legal information, records, evidence, procedures, and strategic decision-making environments."
      focus={[
        "Document and record analysis",
        "Timeline reconstruction",
        "Evidence organization",
        "Procedural review",
        "Strategic intelligence preparation",
      ]}
      mission="Build a clearer, source-grounded operating picture before legal strategy is committed to action."
      approach="Separate facts, assumptions, procedural posture, contradictions, and unresolved questions before synthesis and adversarial review."
      tone="gold"
    />
  );
}
