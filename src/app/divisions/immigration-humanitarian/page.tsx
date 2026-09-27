import DivisionDetail from "@/components/DivisionDetail";

export default function ImmigrationHumanitarianDivision() {
  return (
    <DivisionDetail
      number="04"
      sealIndex={3}
      eyebrow="IMMIGRATION & HUMANITARIAN ADVOCACY"
      title="IMMIGRATION & HUMANITARIAN ADVOCACY DIVISION"
      intro="The Immigration & Humanitarian Advocacy Division organizes immigration records, detention and custody information, procedural history, humanitarian equities, family impact, and advocacy pathways into a controlled intelligence picture."
      focus={[
        "Immigration record and procedural analysis",
        "Detention and custody record review",
        "Humanitarian and family-impact documentation",
        "Timeline, status, and filing reconstruction",
        "Advocacy briefing and escalation support",
      ]}
      mission="Preserve the human and procedural record together so immigration and humanitarian advocacy can be grounded in verified facts, chronology, documentation, and clearly defined objectives."
      approach="Reconstruct status and procedure, separate verified records from assumptions, document humanitarian equities, identify unresolved issues, and pressure-test advocacy paths before deployment."
      tone="violet"
    />
  );
}
