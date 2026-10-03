export type Briefing = {
  slug: string;
  title: string;
  category: string;
  description: string;
  edition: string;
  source: string;
  reportId?: string;
  date?: string;
  sourceFile?: string;
  publicPdfStatus?: "PUBLIC" | "PUBLIC / REDACTED" | "PUBLIC / SANITIZED" | "SOURCE CONTAINS PRIVATE IDENTIFIERS";
  sections: { title: string; body: string; points?: string[] }[];
  limits: string[];
  references?: { label: string; href: string }[];
};

/*
 * IMPORTANT:
 * These entries are source-faithful reflections of actual SIST outputs.
 * Do not merge later events, founder narrative, or unrelated methodology into a report page.
 * Each page should identify what the named source document itself said at the time it was issued.
 */
export const reports: Briefing[] = [
  {
    slug: "independent-accountability-layer",
    title: "SIST as an Independent Accountability Layer",
    category: "WHITE PAPER / SANITIZED COMPARATIVE CASE STUDY",
    description: "The September 2026 SIST white paper comparing paid representation with an independent, persistent accountability layer built around record reconstruction, adversarial testing, verification, and auditable work product.",
    edition: "PUBLIC / SANITIZED • VERSION 1.0",
    source: "SIST as an Independent Accountability Layer — Sanitized Comparative Case Study: Analytical Effort, Verification, and Paid Legal Representation.",
    reportId: "PUBLIC WHITE PAPER",
    date: "September 2026",
    sourceFile: "SIST_Independent_Accountability_Layer_White_Paper.pdf",
    publicPdfStatus: "PUBLIC / SANITIZED",
    sections: [
      {
        title: "Executive Summary",
        body: "The report's core thesis is that the emerging pattern is not “AI versus lawyers.” It is verification versus assumption. SIST is described as an independent quality-control layer that reconstructs records, tests assumptions, surfaces missing evidence, and converts uncertainty into document-specific questions. The report explicitly says SIST is not a substitute for licensed counsel."
      },
      {
        title: "The Comparison That Actually Matters",
        body: "The report compares operational functions rather than credentials. Paid counsel can appear, negotiate, file, advocate, and exercise professional judgment. SIST cannot practice law; its role is to analyze records, authorities, contradictions, and unresolved questions. The combined model is counsel acting with an independent audit layer improving visibility, persistence, adversarial testing, and preparation."
      },
      {
        title: "Case Study A — Bexar County",
        body: "The sanitized criminal case study describes SIST being used to reconstruct a chronology from police, court, discovery, and operator records; compare allegations against timestamps and procedural acts; generate opposing explanations; preserve unresolved issues; and convert surviving issues into focused questions, briefing, counsel discussions, and strategic pressure. The report records that the firearm allegation was dismissed and the remaining drug matter resolved under misdemeanor-punishment treatment, while stating that the formal outcome remained the product of the court process and counsel/prosecution decisions."
      },
      {
        title: "Case Study B — Client Immigration Matter",
        body: "The active immigration case study says SIST captured the live ACIS case payload, reconstructed key dates, and converted public-facing uncertainty into document-specific verification questions. The report identifies the NTA, certificate of service, hearing notice, counsel chronology, eROP, and the separate federal habeas matter as the records or issues to verify. It expressly does not conclude that counsel failed."
      },
      {
        title: "The Emerging Cross-Case Pattern",
        body: "The report identifies repeated operational behaviors across the two matters: reconstruct from primary records, challenge the first explanation, preserve uncertainty, use the institution's own records, and convert analysis into action. It says two matters are not proof of superiority; they are enough to define what should be measured next."
      },
      {
        title: "SIST Operating Model",
        body: "The source document presents a nine-stage analytical pipeline — Intake, Librarian, Ingestor, Researcher, Analyst, Lawclerk, Countermeasures, Briefer, Deploy — and five quality-control gates for source, fact, authority, remedy, and release. Release outcomes are described as ADVANCE, REVISE, HOLD, or RETRACT."
      },
      {
        title: "Guardrails, Limitations, and Conclusion",
        body: "The report states: no unauthorized practice, no guaranteed outcome, primary records outrank inference, professional relationships should not be manufactured into conflict, and public case studies should be sanitized. Its conclusion is that independent, persistent analysis can reveal questions that are easy to miss when everyone assumes someone else already checked."
      }
    ],
    limits: [
      "The report itself says two case studies are not scientific proof.",
      "It does not allege malpractice or incompetence.",
      "It treats primary records as superior to inference and preserves unresolved issues."
    ]
  },

  {
    slug: "uscis-master-assessment",
    title: "USCIS Adjudication Ecosystem — Master Assessment Report",
    category: "INSTITUTIONAL ACCOUNTABILITY / USCIS SYSTEMS AUDIT",
    description: "The complete SIST Institutional Accountability Division assessment of the USCIS review and adjudication ecosystem: red-team assessment, algorithmic audit, systems-failure analysis, decision-impact review, case-discrepancy framework, live verification, and source register.",
    edition: "VERSION 1.0 (COMPLETE) • OSINT / PUBLIC-RECORD ANALYSIS",
    source: "USCIS Adjudication Ecosystem — Master Assessment Report.",
    reportId: "SIST-IAD-2026-017",
    date: "September 18–19, 2026",
    sourceFile: "SIST-IAD-2026-017_USCIS_Master_Report.pdf",
    publicPdfStatus: "PUBLIC",
    sections: [
      {
        title: "Master Executive Summary",
        body: "The report says it consolidates six interlocking assessments asking three questions: how USCIS automated and AI-enabled systems work, where they are documented to fail, and what those failures can do to individual decisions such as approvals, denials, RFEs, referrals, and detentions."
      },
      {
        title: "Headline Finding — Automation Structures the Decision",
        body: "The report's central position is that automation structures the decision rather than autonomously adjudicating it. It identifies identity linkage, A-Number attachment, screening flags, evidence ordering, scoring, and downstream data sharing as automated or system-mediated layers that can shape what reaches the human adjudicator."
      },
      {
        title: "Headline Finding — Documented Failure Record",
        body: "The report compiles government-documented failures involving erroneous or duplicate cards, corrupted migrations, incomplete vetting, verification failures, weak traceability, and cross-system contamination. Its point is not that every historical failure occurred in every case, but that the relevant failure classes are established rather than hypothetical."
      },
      {
        title: "Headline Finding — AI Layer",
        body: "The report characterizes the AI layer as insufficiently measurable and contestable, citing the absence of public error-rate data for decision-shaping models, limited applicant notice when algorithmic systems contribute to a process, and inconsistent rights-impacting designations."
      },
      {
        title: "Red Team / ADS / Systems Analysis",
        body: "The master report contains a red-team assessment of operational and procedural attack surfaces, an external black-box algorithmic audit, a decision-impact analysis, a systems-and-identity audit, a deep-dive record of documented system errors, and a case-discrepancy toolkit."
      },
      {
        title: "Overall Audit Opinion",
        body: "The report's stated overall opinion is QUALIFIED ADVERSE on record integrity, transparency, and contestability. It also states that no government system was accessed, tested, or probed and that case-specific causation requires case-specific records."
      }
    ],
    limits: [
      "No finding in the master report asserts causation in an individual case without case-specific evidence.",
      "The report is an external OSINT/public-record assessment, not an internal USCIS audit.",
      "No government system was accessed, tested, or probed."
    ]
  },

  {
    slug: "immigration-record-integrity",
    title: "USCIS Automated Review, Record Integrity & Error Propagation",
    category: "PUBLIC RELEASE / REDACTED USCIS RECORD-INTEGRITY ASSESSMENT",
    description: "A red-team forensic assessment of documented USCIS system failures and a redacted case pattern, using evidence labels for documented, corroborated, assessed, and unresolved findings.",
    edition: "PUBLIC / REDACTED",
    source: "USCIS Automated Review, Record Integrity & Error Propagation — Red-Team Forensic Assessment of Documented System Failures and a Redacted Case Pattern.",
    reportId: "SIST-PR-2026-09-19-USCIS-RI-01",
    date: "September 19, 2026",
    sourceFile: "SIST_Public_Report_USCIS_Record_Integrity_Redacted.pdf",
    publicPdfStatus: "PUBLIC / REDACTED",
    sections: [
      {
        title: "Executive Summary — SIST Finding",
        body: "The report states that the public record establishes a recurring USCIS failure class in which incorrect, incomplete, stale, or misrouted data can move through interconnected systems, bypass or outlive validation controls, and remain undetected until an audit, manual escalation, or the affected person identifies the inconsistency."
      },
      {
        title: "What This Report Does Not Find",
        body: "The report expressly says it does not find that a single AI system autonomously decides immigration benefits, that USCIS intentionally corrupted any record, or that automation caused the detention of Subject R. It says the case-specific causal chain remains unresolved pending source-system and enforcement records."
      },
      {
        title: "Central Thesis",
        body: "The report frames the strongest defensible issue as whether the human decision-maker received a complete and correctly linked record after automated intake, identity resolution, screening, data exchange, evidence organization, and background-check processes had already shaped the file."
      },
      {
        title: "USCIS Decision Environment",
        body: "The report describes USCIS as a federation of case-management, screening, scoring, identity-resolution, document-processing, and inter-agency systems rather than one universal automated decision engine. Human officers retain formal merits authority, but the record they receive may already have been structured by automated processes."
      },
      {
        title: "Confidence Snapshot",
        body: "The report labels cross-system and data-integrity failures, automated shaping of files, and historical control failures as DOCUMENTED / High. It labels the redacted subject's identifier discrepancy as UNRESOLVED / Medium and automation causing the subject's adverse outcome or detention as NOT ESTABLISHED / Low."
      },
      {
        title: "Evidentiary Discipline",
        body: "The report says official DHS, USCIS, OIG, GAO, policy, privacy-impact, and AI-use-case materials are weighted highest. Practitioner and secondary materials are corroborative only. Case facts are redacted and separated from system-level evidence, and architecture is treated as a possible mechanism rather than proof of case-specific causation."
      }
    ],
    limits: [
      "Subject R is anonymized in the source publication.",
      "The report separates documented system failures from unresolved case-specific causation.",
      "Historical audits establish failure classes, not proof of the same failure in every current case."
    ]
  },

  {
    slug: "systemic-due-process",
    title: "Systemic Due Process Violations and Procedural Sabotage in the Felony Prosecution of Alexander Emilio Perez",
    category: "LEGAL / SYSTEMIC DUE-PROCESS REPORT",
    description: "The April 26, 2026 report documenting and alleging a connected pattern involving unresolved motions, court access, bond surrenders, representation, evidence access, and constitutional claims across Bexar and Travis County matters.",
    edition: "SOURCE REPORT • APRIL 26, 2026",
    source: "Systemic Due Process Violations and Procedural Sabotage in the Felony Prosecution of Alexander Emilio Perez.",
    date: "April 26, 2026",
    sourceFile: "Systemic Due Process Violations and Procedural Sabotage in the Felony Prosecution of Alexander Emilio Perez.pdf",
    publicPdfStatus: "SOURCE CONTAINS PRIVATE IDENTIFIERS",
    sections: [
      {
        title: "Executive Summary — Pattern of Constitutional Erosion",
        body: "The report characterizes the matter as a pattern of constitutional erosion and alleges that unresolved constitutional motions, loss of electronic filing access, bond-surrender cycles, counsel conduct, and evidence-access problems operated together rather than as isolated events."
      },
      {
        title: "Unresolved Motions",
        body: "The report focuses on a Motion to Compel Discovery filed August 14, 2025 and a Motion to Suppress Evidence filed August 27, 2025. It states that both were clerk-stamped and entered into the record and alleges that no hearing or ruling followed during the report's evidence period."
      },
      {
        title: "Electronic Court Access",
        body: "The report records that e-filing access was revoked shortly after a September 5, 2025 grievance and characterizes the timing as a constructive denial-of-access issue. The source report argues retaliation; that characterization is an allegation in the report, not a separate adjudicated finding."
      },
      {
        title: "Bond-Surrender Chronology",
        body: "The report reconstructs multiple surety-surrender and reinstatement cycles, including two reinstatements followed by a later surrender and warrant. It argues that the sequence created a continuing procedural and liberty problem and connects the later warrant to the Travis County arrest."
      },
      {
        title: "Representation and Evidence",
        body: "The report criticizes counsel performance and describes disputes over discovery, an investigator's report, suppression analysis, plea discussions, and trial preparation. These are the report's allegations and legal analysis, not findings by a court or disciplinary body."
      },
      {
        title: "Constitutional and Statutory Theories",
        body: "The report develops Fourth, Fifth, Sixth, First, and Fourteenth Amendment theories and Texas statutory arguments, including search-and-seizure, due process, discovery, access-to-court, representation, and bond-process issues. Those legal conclusions reflect the report as issued in April 2026 and are not silently rewritten here using later case developments."
      }
    ],
    limits: [
      "This archive reflects the April 26, 2026 report as issued; it does not merge later outcomes into the source report.",
      "Allegations of retaliation, misconduct, constitutional violations, and procedural sabotage are report claims unless independently adjudicated.",
      "The source PDF contains personal and case identifiers and is not embedded in the public archive in unredacted form."
    ]
  },

  {
    slug: "consumer-dispute-accountability",
    title: "Formal Consumer Report — Netspend Corporation / Pathward, N.A. Account Dispute Analysis",
    category: "CONSUMER ADVOCACY / FORMAL CONSUMER REPORT",
    description: "The August 6, 2026 SIST report prepared for CFPB filing, documenting the dispute chronology, sixteen numbered findings, a violation matrix, requested relief, legal framework, and evidence index.",
    edition: "FORMAL CONSUMER REPORT • AUGUST 6, 2026",
    source: "Netspend Corporation / Pathward, N.A. — Account Dispute Analysis.",
    date: "August 6, 2026",
    sourceFile: "SIST_Public_Report_Netspend_CFPB_v4.pdf",
    publicPdfStatus: "SOURCE CONTAINS PRIVATE IDENTIFIERS",
    sections: [
      {
        title: "Executive Summary",
        body: "The report alleges systemic failures in the handling of disputed electronic-fund-transfer claims. It identifies inconsistent outcomes from the same compromise period, Regulation E statements the report characterizes as incorrect, missing denied claims in the consumer portal, contradictions between written communications and formal determinations, fee reversals, balance-notice problems, and alleged failure to account for submitted forensic material."
      },
      {
        title: "Chronology",
        body: "The source report builds a date-by-date chronology from late May through August 6, 2026 covering the card compromise, claim filings, forensic-evidence submission, account notices, provisional credit, determination letters, portal changes, fee reversals, new claims, and the later API extraction."
      },
      {
        title: "Documented Findings",
        body: "The report contains sixteen numbered findings. Among them are same-card split decisions, denied claims missing from the consumer portal, a written fraud statement conflicting with same-day denial language, submitted forensic evidence the report says was not addressed, Apple-ID-compromise inconsistencies, overdraft-fee reversals, Regulation E mischaracterization, balance-notice inconsistencies, contradictory fraud determinations, provisional-credit timing, stale deadlines, conflicting written-notice policies, claim-closure date differences, refusal of written communication, a disputed merchant-credit record, and negative-balance harm."
      },
      {
        title: "Violation Matrix",
        body: "The report maps each asserted issue to the legal theory and evidence the report relied on, including Regulation E / EFTA, UDAP, and Texas DTPA theories. The matrix represents the report's legal position; it is not a regulator or court finding."
      },
      {
        title: "Requested Relief",
        body: "The report asks the CFPB to investigate portal visibility and communication practices, require reinvestigation and production of investigative records, address disputed fees and balance notices, and consider enforcement or policy remedies. Those requests are reproduced as the report's requested relief rather than restated as completed outcomes."
      },
      {
        title: "Evidence Record",
        body: "The report identifies determination letters, secure messages, statements, transaction history, portal screenshots, fraud alerts, negative-balance notices, and forensic reports as the underlying evidence set."
      }
    ],
    limits: [
      "The source PDF contains account and claim identifiers and is not embedded publicly in unredacted form.",
      "The report's allegations and legal conclusions are not represented as CFPB, court, or bank findings.",
      "This page reflects the August 6 report itself and does not merge later complaint developments into it."
    ]
  },

  {
    slug: "browser-telemetry-evidence",
    title: "Technical Intelligence Report — Datadog Browser SDK Surveillance Infrastructure Discovery and Anti-Fabrication Authentication Analysis",
    category: "CONSUMER PROTECTION / TECHNICAL INTELLIGENCE REPORT",
    description: "The August 22, 2026 SIST technical report documenting the discovery and preservation of a Datadog Browser SDK artifact on Experian consumer-facing pages and the report's authentication, capability, chain-of-custody, and timeline analysis.",
    edition: "UNCLASSIFIED / CONSUMER PROTECTION",
    source: "Datadog Browser SDK Surveillance Infrastructure Discovery and Anti-Fabrication Authentication Analysis.",
    reportId: "EXP-2026-0818-DATADOG",
    date: "August 22, 2026",
    sourceFile: "SIST_Datadog_Report_ASCII.pdf",
    publicPdfStatus: "PUBLIC",
    sections: [
      {
        title: "Executive Summary",
        body: "The report says a Datadog Browser SDK v6.33.0 artifact was discovered and preserved from Experian consumer-facing credit-report pages. The report characterizes the SDK as surveillance/session-replay infrastructure and says the deployment disappeared within ninety-six hours of the regulatory complaint."
      },
      {
        title: "Discovery Methodology",
        body: "The source report describes browser developer tools being used to observe Datadog intake endpoints, locate the JavaScript bundle served from Experian's domain, download the artifact, and record connection and file characteristics."
      },
      {
        title: "Chain of Custody",
        body: "The report records the access time, artifact download, SHA-256 hashing, encrypted backup, redundant email preservation, SIST static analysis, complaint filing, and later verification steps as its chain-of-custody record."
      },
      {
        title: "Capability and Authentication Analysis",
        body: "The report maps functions it associates with session replay, request instrumentation, cookie handling, behavioral tracking, and related browser capabilities, then argues that SDK version matching, TLS provenance, hashing, and artifact structure support authenticity."
      },
      {
        title: "Responsive Change Claim",
        body: "The report states that the observed infrastructure was later removed and characterizes that timing as responsive destruction and spoliation. That characterization is the report's conclusion and is not presented here as an adjudicated legal finding."
      },
      {
        title: "Regulatory Position",
        body: "The report recommends regulatory investigation and preservation of the evidence. It was prepared as a technical consumer-protection report supporting a CFPB complaint."
      }
    ],
    limits: [
      "The page reflects the source report's conclusions; legal characterizations such as spoliation are not court findings.",
      "A software capability and a specific runtime collection event are distinct technical questions unless the source record establishes both.",
      "The report is reproduced as an SIST output, not rewritten into a later generalized privacy essay."
    ]
  },

  {
    slug: "consent-to-consequences",
    title: "Consent to Consequences: The Case for Personal Privacy Evidence Infrastructure",
    category: "SIST RESEARCH DIVISION / FINAL INTEGRATED REPORT",
    description: "The 33-page SIST proposed-system specification for user-controlled evidence infrastructure: capture, preservation, claim discipline, adversarial challenge, review, export, privacy interaction records, DriveProof, retention, failure playbooks, governance, and evaluation.",
    edition: "PUBLIC RESEARCH RELEASE • PROPOSED SYSTEM SPECIFICATION",
    source: "Consent to Consequences: The Case for Personal Privacy Evidence Infrastructure.",
    reportId: "SIST-WP-2026-002",
    date: "September 2026",
    sourceFile: "SIST_WP_2026_002_FINAL_INTEGRATED_REPORT.pdf",
    publicPdfStatus: "PUBLIC",
    sections: [
      {
        title: "Core Proposition",
        body: "The report's core proposition is that a consequential digital interaction should leave the individual with a usable, user-controlled record of what was shown, selected, submitted, and received — together with the limits of that record."
      },
      {
        title: "Executive Summary",
        body: "The report starts from an evidence asymmetry: institutions can retain policy versions, workflow states, notices, account history, and service records while individuals often retain only fragments. It proposes personal privacy evidence infrastructure to preserve material a user is permitted to retain, keep context, classify what the evidence supports, document dissent and missing information, and prepare a user-controlled packet for review."
      },
      {
        title: "Six-Stage Workflow",
        body: "The proposed workflow is Capture, Preserve, Classify, Challenge, Review, and Act. Capture is user-intentional; preservation separates originals from derivatives; classification distinguishes fact, interpretation, potential risk, and unknown; challenge applies AIP countermeasures; review exposes the source, claim, dissent, status, and export consequences; action remains user-directed."
      },
      {
        title: "Evidence Model and Claim Discipline",
        body: "The report's visual and textual rule is that output must never say more than the linked evidence permits. Supported claims require an accessible source, bounded scope, qualified time and entity, completed challenge, and visible dissent."
      },
      {
        title: "Privacy Interaction Records and DriveProof",
        body: "The report applies the evidence model to consequential digital interactions and an auto-shopping / financing workflow called DriveProof. The purpose is to preserve the user's side of an interaction without turning the system into surveillance or an automated legal-advice service."
      },
      {
        title: "Governance, Failure Playbooks, and Roadmap",
        body: "The final integrated report includes access, delegation, retention, failure playbooks, governance and evaluation, visual-authority policy, an implementation roadmap, a public commitment, and source notes. It explicitly labels itself a proposed system specification rather than a statement that every described control is implemented."
      }
    ],
    limits: [
      "The source explicitly says it is a proposed system specification.",
      "It is not a surveillance product, automated legal-advice service, credit-scoring tool, or eligibility engine.",
      "The report distinguishes design requirements from implemented controls."
    ]
  },

  {
    slug: "frontier-ai-safety",
    title: "SIST and the Frontier AI Safety Problem",
    category: "AI SAFETY / ARCHITECTURE ASSESSMENT & RESEARCH PROPOSAL",
    description: "The September 28, 2026 public disclosure assessing SIST as a governed AI control architecture and defining a research hypothesis for evidence-bound claims, defeat provenance, independent review, and human-governed action boundaries.",
    edition: "PREPARED FOR PUBLIC DISCLOSURE",
    source: "SIST and the Frontier AI Safety Problem — Architecture Assessment and Research Proposal.",
    date: "September 28, 2026",
    sourceFile: "SIST_Frontier_AI_Safety_Public_Disclosure.pdf",
    publicPdfStatus: "PUBLIC",
    sections: [
      {
        title: "Executive Assessment",
        body: "The report says SIST's central design move is to make an AI conclusion pass through a governed process before it becomes an authorized result. Source material is collected, propositions are separated from evidence, specialist roles investigate and challenge them, a gate can stop a procedurally invalid recommendation, and the human Enforcer retains release authority."
      },
      {
        title: "Implemented Record vs Blueprint",
        body: "The report says the reviewed materials include a public nine-stage / five-gate case-study architecture and a functioning three-model council dashboard. It separately identifies a richer finding lifecycle, defeat ledger, and controlled reopening mechanism as an implementation blueprint and explicitly says the blueprint alone does not prove those mechanisms have been deployed and tested."
      },
      {
        title: "The Frontier Safety Question",
        body: "The report reframes the safety question from whether a model received a good instruction to what a model can cause to happen, on what evidence, under whose authority, and with what independently enforced stop conditions. It presents SIST as a control-and-assurance architecture complementary to model training."
      },
      {
        title: "Strongest Defensible Claim",
        body: "The report calls the central claim a research hypothesis: SIST-style evidence objects, explicit defeat states, independent review, and human-governed action boundaries could reduce unsupported conclusions, repeated failed theories, and unauthorized actions in agentic systems."
      },
      {
        title: "Limits and Failure Modes",
        body: "The report lists shared error and collusion, policy gaming, reviewer capture, boundary gaps, false permanence, sensitive-record risks, and the absence of an established scaling result as major failure modes."
      },
      {
        title: "Recommendation and Claim Standard",
        body: "The report recommends a narrow publishable study: protect an autonomous coding or research agent from source laundering, repeated defeated proposals, and unauthorized high-impact tool calls; compare against a matched baseline; disclose false positives and bypasses; and invite independent attacks. It expressly says frontier-scale safety effectiveness remains an empirical question."
      }
    ],
    limits: [
      "The report does not claim SIST has been shown to reduce catastrophic AI risk.",
      "It does not claim control of a strategically deceptive superintelligence.",
      "It calls for controlled testing and independent replication."
    ]
  }
];

export const fieldNotes = [
  {
    title: "What Is Adversarial Review?",
    description: "Method note explaining the challenge / verify / human-review process.",
    href: "/briefings/what-is-adversarial-review",
    category: "METHOD NOTE"
  }
];
