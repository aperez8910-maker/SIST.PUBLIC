import DivisionDetail from "@/components/DivisionDetail";

export default function InstitutionalAccountabilityDivision() {
  return (
    <DivisionDetail
      number="05"
      sealIndex={4}
      eyebrow="INSTITUTIONAL ACCOUNTABILITY"
      title="INSTITUTIONAL ACCOUNTABILITY DIVISION"
      intro="The Institutional Accountability Division combines evidence reconstruction, process analysis, contradiction mapping, institutional review, and strategic escalation to examine how organizations act, document decisions, and respond under scrutiny."
      focus={[
        "Institutional record and process analysis",
        "Evidence and timeline reconstruction",
        "Consistency, contradiction, and failure mapping",
        "Accountability pathway and escalation analysis",
        "Strategic briefing and decision support",
      ]}
      mission="Transform fragmented records, institutional actions, and competing explanations into an auditable accountability picture that can withstand adversarial review."
      approach="Reconstruct facts and process, identify failures and inconsistencies, test institutional explanations against the record, pressure-test findings, and translate surviving intelligence into escalation or decision support."
      tone="red"
    />
  );
}
