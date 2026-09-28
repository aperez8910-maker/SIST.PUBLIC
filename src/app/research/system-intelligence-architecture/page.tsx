import ResearchDocument from "@/components/ResearchDocument";

export default function Page() {
  return <ResearchDocument
    code="R-01"
    title="SIST Intelligence Architecture"
    subtitle="A public description of the controlled multi-stage architecture used to organize records, develop intelligence, challenge working conclusions, and preserve human authority."
    status="IMPLEMENTED / PUBLIC OVERVIEW"
    sections={[
      { title:"Purpose", body:"SIST exists for problems where the record is too fragmented, contested, consequential, or procedurally complex for a single prompt-response cycle. The architecture separates functions so collection, interpretation, challenge, and release do not collapse into one opaque step." },
      { title:"Canonical operating pipeline", body:"The public operating model uses nine stages: Intake, Librarian, Ingestor, Researcher, Analyst, Lawclerk, Countermeasures, Briefer, and Deploy Master. The names describe functional stages; the public site does not expose proprietary prompts, routing rules, thresholds, or private orchestration instructions.", points:["Intake defines the mission and boundary.","Librarian and Ingestor preserve and structure the record.","Researcher and Analyst develop context and competing explanations.","Lawclerk tests rules and procedural relevance where applicable.","Countermeasures attacks the working position.","Briefer converts surviving findings into usable intelligence.","Deploy Master keeps release under controlled human authority."] },
      { title:"Control gates", body:"Five gates divide the lifecycle so weak intelligence can be stopped before it moves forward. Gates are control points, not decorative progress indicators. Depending on the state of the record, a finding can advance, be revised, be held for repair, be replaced, or be withdrawn." },
      { title:"Evidence lineage", body:"The architecture treats provenance, contradictions, unresolved questions, and finding state as part of the intelligence product. The objective is not simply to provide an answer, but to preserve enough of the chain behind the answer that a reviewer can inspect how it was reached." },
      { title:"Human authority", body:"SIST is decision support. Human authority remains responsible for objectives, judgment, release, and consequential action. The architecture is designed to resist unsupported confidence, not to replace accountable human decisions." },
    ]}
    boundaries={[
      "No claim of zero-error operation.",
      "No claim that more agents automatically produce better intelligence.",
      "No disclosure of private prompts, routing logic, thresholds, or credentials.",
      "No claim that the architecture replaces professional judgment or institutional authority.",
    ]}
  />;
}
