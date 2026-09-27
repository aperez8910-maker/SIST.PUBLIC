import DivisionDetail from "@/components/DivisionDetail";

export default function HealthcareDivision() {
  return (
    <DivisionDetail
      number="02"
      sealSrc="/division-seals/healthcare-intelligence.webp"
      eyebrow="HEALTHCARE INTELLIGENCE"
      title="HEALTHCARE INTELLIGENCE DIVISION"
      intro="The Healthcare Intelligence Division applies structured analysis to healthcare records, billing, processes, policy, institutional decisions, and patient-advocacy environments."
      focus={[
        "Medical record organization and analysis",
        "Healthcare process and billing review",
        "Patient advocacy intelligence",
        "Institutional decision analysis",
        "Complex healthcare information synthesis",
      ]}
      mission="Create a disciplined, evidence-based picture of complex healthcare environments so records, process failures, institutional decisions, and accountability questions can be evaluated together."
      approach="Connect records, billing, process, policy, and institutional decisions while preserving source provenance, uncertainty, contradictions, and unresolved questions."
      tone="green"
    />
  );
}
