import DivisionDetail from "@/components/DivisionDetail";

export default function ConsumerDivision() {
  return (
    <DivisionDetail
      number="03"
      sealSrc="/division-seals/consumer-advocacy.webp"
      eyebrow="CONSUMER ADVOCACY"
      title="CONSUMER ADVOCACY DIVISION"
      intro="The Consumer Advocacy Division applies structured intelligence methods to consumer records, representations, disputes, account histories, organizational practices, and available redress pathways."
      focus={[
        "Consumer record organization and review",
        "Representation and contradiction mapping",
        "Account and dispute history reconstruction",
        "Documentation and evidence management",
        "Advocacy and escalation pathway analysis",
      ]}
      mission="Turn fragmented consumer records and institutional responses into an organized, auditable picture that supports informed advocacy and escalation."
      approach="Map representations, documents, account history, contradictions, unresolved issues, and redress options before building the final advocacy position."
      tone="blue"
    />
  );
}
