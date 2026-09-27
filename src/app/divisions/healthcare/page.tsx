import DivisionDetail from "@/components/DivisionDetail";

export default function HealthcareDivision() {
  return (
    <DivisionDetail
      number="02"
      eyebrow="HEALTHCARE INTELLIGENCE"
      title="HEALTHCARE INTELLIGENCE & ADVOCACY"
      intro="The Healthcare Intelligence & Advocacy Division applies structured analysis to healthcare information, records, processes, and institutional systems to improve understanding, transparency, and accountability."
      focus={[
        "Medical record organization and analysis",
        "Healthcare process review",
        "Patient advocacy intelligence",
        "Institutional accountability analysis",
        "Complex healthcare information synthesis",
      ]}
      mission="Help individuals and organizations understand complex healthcare environments through disciplined documentation, structured intelligence, and evidence-based analysis."
      approach="Connect records, billing, process, policy, and institutional decisions while preserving uncertainty and source provenance."
      tone="green"
    />
  );
}
