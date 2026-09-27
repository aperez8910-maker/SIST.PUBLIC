import DivisionDetail from "@/components/DivisionDetail";

export default function ConsumerDivision() {
  return (
    <DivisionDetail
      number="03"
      eyebrow="CONSUMER ADVOCACY"
      title="CONSUMER ADVOCACY & INSTITUTIONAL ACCOUNTABILITY"
      intro="The Consumer Advocacy & Institutional Accountability Division applies intelligence methodology to examine consumer experiences, organizational practices, records, disputes, and system-level issues."
      focus={[
        "Consumer record organization and review",
        "Institutional process analysis",
        "Documentation and evidence management",
        "Dispute intelligence preparation",
        "Accountability and transparency analysis",
      ]}
      mission="Provide structured intelligence that helps people understand complex consumer environments and evaluate institutional decisions through organized evidence and analytical review."
      approach="Map representations, account history, documents, contradictions, and redress paths into a single escalation-ready operating picture."
      tone="blue"
    />
  );
}
