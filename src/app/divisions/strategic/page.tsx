import DivisionDetail from "@/components/DivisionDetail";

export default function StrategicDivision() {
  return (
    <DivisionDetail
      number="05"
      eyebrow="STRATEGIC INTELLIGENCE"
      title="STRATEGIC INTELLIGENCE & DECISION ANALYSIS"
      intro="The Strategic Intelligence & Decision Analysis Division converts structured findings into decision support, sequencing, risk awareness, escalation options, and operational priorities."
      focus={[
        "Strategic option development",
        "Risk and consequence mapping",
        "Decision sequencing",
        "Escalation pathway analysis",
        "Operational briefing and synthesis",
      ]}
      mission="Turn verified intelligence into practical next moves without losing the evidence, uncertainty, and counterarguments that shaped the recommendation."
      approach="Compare viable paths, pressure-test likely failure modes, and package surviving options into a clear decision product."
      tone="violet"
    />
  );
}
