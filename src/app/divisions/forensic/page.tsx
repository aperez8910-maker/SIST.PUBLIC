import DivisionDetail from "@/components/DivisionDetail";

export default function ForensicDivision() {
  return (
    <DivisionDetail
      number="04"
      eyebrow="FORENSIC INTELLIGENCE"
      title="FORENSIC INTELLIGENCE & EVIDENCE ANALYSIS"
      intro="The Forensic Intelligence & Evidence Analysis Division applies structured intelligence methods to organize, examine, compare, and interpret complex information environments."
      focus={[
        "Evidence organization and classification",
        "Timeline reconstruction",
        "Document analysis and comparison",
        "Information consistency review",
        "Pattern and relationship identification",
      ]}
      mission="Transform fragmented information into organized intelligence through structured review, analytical methods, and evidence-based evaluation."
      approach="Separate observation from inference, preserve competing explanations, and verify important conclusions against the underlying record."
      tone="red"
    />
  );
}
