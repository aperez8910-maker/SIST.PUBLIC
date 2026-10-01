import { pageMetadata } from "@/lib/seo";
import PageStructuredData from "@/components/PageStructuredData";

export const metadata = pageMetadata("/research/strategic-intelligence-framework");

import ResearchDocument from "@/components/ResearchDocument";

export default function Page() {
  return <>
    <PageStructuredData path="/research/strategic-intelligence-framework" />
    <ResearchDocument
    code="R-03"
    title="Strategic Intelligence Framework"
    subtitle="A framework for converting complicated records into an operating picture that distinguishes what is known, what is claimed, what is missing, and what decision paths remain."
    status="PUBLIC FRAMEWORK"
    sections={[
      { title:"From information to intelligence", body:"A large record is not automatically useful. The framework organizes raw documents, statements, timelines, authorities, and institutional responses around the decision that actually has to be made." },
      { title:"Core operating picture", body:"The framework separates categories that are often blurred together in ordinary analysis.", points:["Known: supported by the current record.","Claimed: asserted but not yet sufficiently verified.","Expected: evidence or behavior that should exist if a theory is true.","Missing: a material gap in the record.","Contradicted: evidence materially conflicts with the working account.","Decision-relevant: facts or rules that can change available options."] },
      { title:"Evidence shadow map", body:"Research does not only ask what documents already exist. It asks what should exist, who should possess it, what event would normally create it, and what absence could mean. This reduces the risk of treating an incomplete record as a complete world." },
      { title:"Strategic output", body:"The end product should help a human decide what to do next. Depending on the matter, that may mean obtaining a missing record, testing an assertion, narrowing a theory, preparing questions, escalating a complaint, supporting counsel, or documenting why no action is yet justified." },
      { title:"Domain portability", body:"Criminal defense, healthcare, consumer disputes, immigration, and institutional accountability involve different substantive rules. The common intelligence problem is fragmented records, conflicting claims, procedural complexity, and information asymmetry. SIST applies one evidentiary discipline while keeping domain-specific standards separate." },
    ]}
    boundaries={[
      "The framework does not make domain expertise interchangeable.",
      "It does not turn incomplete evidence into certainty.",
      "It does not replace licensed professional services where those are required.",
      "Strategic options are decision support, not guaranteed outcomes.",
    ]}
  /></>;
}
