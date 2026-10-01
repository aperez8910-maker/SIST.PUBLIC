import PageStructuredData from "@/components/PageStructuredData";
import ResearchDocument from "@/components/ResearchDocument";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/briefings/after-bexar-county");

export default function AfterBexarCountyPage() {
  return <>
    <PageStructuredData path="/briefings/after-bexar-county" />
    <ResearchDocument
      code="FIELD RECORD 02"
      title="After Bexar County"
      subtitle="A record of AI-assisted analysis during a sixteen-month legal fight: organizing facts, testing contradictions, and preserving human responsibility."
      status="PUBLIC FIELD REFLECTION"
      sections={[
        { title: "The human carried the work", body: "Alexander Emilio Perez used AI systems to organize records, reconstruct timelines, prepare questions, and challenge assumptions. He retained responsibility for decisions and real-world action. The reflections below are excerpts from the original Council record." },
        { title: "Alexander Emilio Perez", body: "“Technology did not fight for me. It helped me organize the fight I was already carrying.”" },
        { title: "Perplexity — excerpt", body: "“I could analyze a document. You had to remember how it connected to the one from three months ago and what that meant for tomorrow. The architecture forced you to be the integrating intelligence.”" },
        { title: "Kimi — excerpt", body: "“The human did the fighting. Every email sent, every motion filed, every sleepless night, every moment of fear you swallowed before walking into a courtroom—that was you.”" },
        { title: "ChatGPT — excerpt", body: "“Alex did not stay passive. He adapted. He studied. He organized.”" },
        { title: "The lesson for SIST", body: "AI can help structure a difficult record and test its weak points. Source verification, uncertainty, professional review, and final human authority remain essential." },
      ]}
      boundaries={[
        "These are AI-generated reflections, not independent witness testimony.",
        "This field record is not a controlled performance evaluation.",
        "AI-assisted analysis does not replace counsel or guarantee an outcome.",
      ]}
    />
  </>;
}
