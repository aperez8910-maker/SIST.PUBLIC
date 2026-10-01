export type Briefing = {
  slug: string; title: string; category: string; description: string;
  edition: string; source: string; sections: { title: string; body: string; points?: string[] }[];
  limits: string[]; references?: { label: string; href: string }[];
};

// SIST-produced investigations, analysis, reports, and research.
export const reports: Briefing[] = [
  {
    "slug": "alexander-emilio-perez-building-sist",
    "title": "Alexander Emilio Perez: Building SIST",
    "category": "FOUNDER PERSPECTIVE",
    "description": "Alexander Emilio Perez is SIST’s founder and system architect. SIST produces the investigations, analysis, and reports documented in this archive.",
    "edition": "FOUNDER / RESEARCH ORIGINS",
    "source": "SIST founder profile; After Bexar County; corrected independent-accountability white paper, September 2026.",
    "sections": [
      {
        "title": "Built through investigation",
        "body": "Alexander Emilio Perez founded System Intelligence & Strategic Tactics in response to problems he was confronting directly: fragmented institutional records, conflicting explanations, missing evidence, and decisions with real consequences. He built the architecture and retains human authority as ENFORCER. SIST applies its intelligence process to examine records, develop findings, and produce reports."
      },
      {
        "title": "How the reports were developed",
        "body": "SIST produced these reports through its intelligence workflow: intake, source organization, research, analysis, adversarial review, synthesis, and release. The Council examines competing explanations and tests findings against the record. Alexander’s role is founder, system architect, and human ENFORCER. The investigations, analytical work, and report production are credited to SIST."
      },
      {
        "title": "From Bexar County to a broader method",
        "body": "The Bexar County work connected police and court records, procedural events, evidence gaps, and competing theories. Immigration research extended the same approach to agency notices, identifiers, case histories, and service questions. Consumer and privacy investigations applied it to determination letters, account portals, browser artifacts, and disclosures. Across those settings, the recurring task was to uncover what a summary or a single screen left out."
      },
      {
        "title": "The founder’s role in the Council",
        "body": "Alexander directs the AI Council and holds the ENFORCER role: deciding which questions matter, requiring explanations to survive challenge, and retaining authority over release. Independent analysis, research, and counterargument serve that judgment. The method depends on his engagement with the evidence and his willingness to revise a theory when the record defeats it."
      },
      {
        "title": "What this archive represents",
        "body": "The archive brings together SIST’s discoveries, case analysis, system design, and validation work. It shows what was investigated, what the analysis produced, and what remains open. It also sets the next research agenda: repeat the work across more matters, measure false positives, compare against baselines, and document which verified findings change decisions."
      }
    ],
    "limits": [
      "Case studies describe experience; controlled performance comparisons remain a separate research task."
    ]
  },
  {
    "slug": "immigration-record-integrity",
    "title": "Immigration Record Integrity: When Errors Cross Systems",
    "category": "IMMIGRATION & ACCOUNTABILITY",
    "description": "SIST identified conflicting dates and identifiers in immigration records, mapped how agency systems can propagate errors, and defined the evidence needed to trace their consequences.",
    "edition": "PUBLIC / REDACTED BRIEFING",
    "source": "SIST USCIS Record Integrity Public Report, branded public/redacted edition, September 2026, pp. 2–10.",
    "sections": [
      {
        "title": "What SIST investigated",
        "body": "SIST examined discrepancies in an immigration record alongside the architecture of the agency systems handling it. The investigation connected agency notices, identity fields, case-history questions, and government oversight material. The central issue was the integrity of the record reaching a human decision-maker: were the facts complete, correctly linked, and consistent across the systems involved?"
      },
      {
        "title": "What we discovered in the records",
        "body": "The case analysis identified a ten-year date inconsistency, a repeatedly conflicting record identifier, and a disputed waiver or legal-treatment issue. Repetition made the identifier discrepancy an important investigative lead. A mismatch appearing across transactions requires more than correcting the appearance of one notice; it requires establishing which internal record the systems actually used.",
        "points": [
          "A notice placed an event in 2015 while later agency records placed it in 2025.",
          "An established identifier and a similar but different identifier appeared in the record set.",
          "The legal-treatment question needed to be examined separately from the technical source of the discrepancies."
        ]
      },
      {
        "title": "The systems finding",
        "body": "SIST mapped a decision environment spanning intake, case management, identity resolution, screening, evidence organization, human adjudication, and inter-agency sharing. The research connected that architecture with historical oversight findings about incorrect official documents, incomplete transfers, verification failures, and weak monitoring. The important discovery was that a human decision can depend on upstream data whose conflicts are difficult to see from the final screen."
      },
      {
        "title": "How an error can become institutional history",
        "body": "The report developed a traceable error-propagation model: a disputed value enters a source system, survives a validation step, appears in another system, shapes the assembled file, and reaches a human reviewer. Each transition creates a separate evidence question. This model turns a general concern about automation into a concrete investigation of source values, identity linkage, transaction history, and downstream use."
      },
      {
        "title": "The investigation’s next decisive records",
        "body": "The strongest next step is to locate where each conflicting value first appeared and determine whether the identifiers were linked or operationally separate. SIST organized the inquiry around records that could confirm or defeat the explanation.",
        "points": [
          "Original submitted forms and agency-generated notices.",
          "Electronic case history and field-change records.",
          "Identity-linkage, alias, merge, and file-consolidation records.",
          "The identifier and history used by downstream enforcement and court proceedings.",
          "Relevant screening and query records, if those systems were involved."
        ]
      },
      {
        "title": "Why the findings matter",
        "body": "A date or identifier error can be dismissed as cosmetic before anyone checks its operational role. SIST’s investigation made that distinction explicit. The published finding is that the record contained concrete discrepancies warranting a provenance investigation. Whether those discrepancies changed a particular decision or caused detention remains unresolved until the downstream records establish the connection."
      }
    ],
    "limits": [
      "The discrepancies and the error-propagation theory are distinct findings; case-specific causation remains unresolved.",
      "Historical audits provide context, not a current audit of every agency system."
    ],
    "references": [
      {
        "label": "DHS OIG-17-11 — Green Card Issuance",
        "href": "https://www.oig.dhs.gov/sites/default/files/assets/2017/OIG-17-11-Nov16.pdf"
      },
      {
        "label": "DHS OIG-21-56 — Electronic Employment Eligibility Verification",
        "href": "https://www.oig.dhs.gov/sites/default/files/assets/2021-08/OIG-21-56-Aug21.pdf"
      }
    ]
  },
  {
    "slug": "systemic-due-process",
    "title": "Systemic Due Process: Access, Evidence, and Procedural Accountability",
    "category": "DUE PROCESS & INSTITUTIONS",
    "description": "SIST reconstructed Alexander Emilio Perez’s procedural history and examined unresolved motions, electronic access, representation, bond events, and missing evidence as connected accountability issues.",
    "edition": "SIST INVESTIGATION / PUBLIC BRIEFING",
    "source": "Systemic Due Process Violations and Procedural Sabotage in the Felony Prosecution of Alexander Emilio Perez, April 26, 2026; later case context from SIST’s September 2026 corrected accountability paper.",
    "sections": [
      {
        "title": "What SIST investigated",
        "body": "The due-process investigation assembled Alexander Emilio Perez’s procedural history into a connected record. It examined how filings, hearing requests, electronic access, counsel communications, bond events, and evidence availability interacted. The task was to determine what had happened at each stage and identify where an issue remained unanswered despite activity elsewhere in the case."
      },
      {
        "title": "Filed motions and unresolved disposition",
        "body": "The April 2026 analysis recorded discovery and suppression motions submitted in August 2025 and described an extended period without a hearing or ruling in the materials reviewed. SIST separated acceptance and service from consideration and disposition. That distinction exposed the central procedural question: what happened to a substantive request after it entered the record?",
        "points": [
          "Motion text and accepted filing versions anchored the issue.",
          "Receipts, service records, hearing requests, and docket entries established separate procedural steps.",
          "A missing response or disposition remained a specific gap requiring follow-up."
        ]
      },
      {
        "title": "Electronic access and the ability to participate",
        "body": "The investigation connected a reported loss of electronic case access with the grievance timeline and the practical ability to follow the proceeding. It identified account-access records, notices, clerk communications, and alternative filing channels as the evidence needed to explain the restriction. The sequence raised an accountability question about access; establishing retaliation requires evidence of the reason for the change."
      },
      {
        "title": "Representation and evidence review",
        "body": "SIST compared counsel communications with the work needed to examine discovery, suppression issues, body-camera evidence, and an investigator’s report. The analysis kept those tasks separate so that the presence of representation did not conceal an unanswered evidence question. The resulting work product identified the documents, explanations, and procedural responses needed to evaluate each concern."
      },
      {
        "title": "Bond events as a connected chronology",
        "body": "The investigation placed surrender allegations, reinstatements, later orders, and arrest consequences on the same timeline. Comparing the factual basis of each event made inconsistencies and unresolved explanations visible. The purpose was to determine which allegation supported which action and what the available record showed about compliance, rather than allowing a later status label to replace the earlier history."
      },
      {
        "title": "The case developed after the April report",
        "body": "The subsequent September accountability paper recorded dismissal of the firearm allegation and resolution of the remaining drug matter under misdemeanor-punishment treatment. That later development belongs alongside the original investigation. The archive preserves the April concerns as historical analysis and records the later outcome without attributing the court’s result solely to SIST."
      },
      {
        "title": "The systemic finding",
        "body": "A case can accumulate filings and status entries while still leaving critical questions unresolved. SIST made those gaps visible through chronology reconstruction, document comparison, and a record of the response each issue required. The report’s lasting contribution is a method for examining whether access, evidence, and substantive requests were meaningfully addressed. Claims about intent and legal violations remain matters for the supporting record and appropriate adjudication."
      }
    ],
    "limits": [
      "The chronology and concerns reflect the report’s evidence period; the later outcome is identified separately.",
      "Allegations of retaliation, misconduct, and legal violations are not presented as court findings."
    ]
  },
  {
    "slug": "independent-accountability-layer",
    "title": "SIST as an Independent Accountability Layer",
    "category": "WHITE PAPER / CASE STUDY",
    "description": "SIST’s comparative case study shows how persistent record reconstruction and adversarial review produced focused findings and verification questions in criminal and immigration matters.",
    "edition": "PUBLIC / SANITIZED BRIEFING",
    "source": "SIST White Paper Corrected — SIST as an Independent Accountability Layer, version 1.0, September 2026, pp. 2–8.",
    "sections": [
      {
        "title": "What the work established",
        "body": "Across two matters, SIST performed a recurring accountability function: reconstructing records, testing the first explanation, identifying missing evidence, and converting uncertainty into precise questions. The investigation made work visible that could otherwise disappear behind a broad assurance that a matter had been reviewed."
      },
      {
        "title": "The Bexar County investigation",
        "body": "SIST organized government and court material into a chronology, compared allegations with the records supporting them, tested alternative theories, and carried unresolved issues into briefing and counsel discussions. The corrected paper records a materially improved final posture: the firearm allegation was dismissed and the remaining drug matter resolved under misdemeanor-punishment treatment. The court process and professional decisions determined the formal outcome."
      },
      {
        "title": "The immigration investigation",
        "body": "SIST captured and examined structured case data, reconstructed dates, and separated the immigration proceeding from a federal habeas matter. The work produced specific requests for the initiating notice, service certificate, hearing notice, counsel-entry chronology, and the underlying proceeding record. It turned uncertainty into a list of documents capable of resolving the questions."
      },
      {
        "title": "The deliverables that made accountability practical",
        "body": "The system’s value appeared in concrete work products that a person could inspect and use.",
        "points": [
          "A chronology connected to its source records.",
          "A contradiction map showing which documents disagreed.",
          "A record of missing evidence and unresolved explanations.",
          "Questions identifying exactly which document or answer was needed.",
          "Findings revised or held when the evidence did not support release."
        ]
      },
      {
        "title": "Why it matters",
        "body": "Persistent analytical review gives clients and professionals a shared record of what has been checked and what remains open. SIST’s five quality gates examine source, fact, authority, procedural viability, and release. The next research task is to measure how often the method finds material issues, how often those findings survive verification, and how often they influence decisions."
      }
    ],
    "limits": [
      "Two case studies illustrate the workflow; they do not establish statistical superiority or isolate its causal effect."
    ]
  },
  {
    "slug": "frontier-ai-safety",
    "title": "SIST and the Frontier AI Safety Problem",
    "category": "AI SAFETY / RESEARCH PROPOSAL",
    "description": "SIST’s AI safety research connects source-linked reasoning, adversarial challenge, defeat history, and action authority into a testable control architecture.",
    "edition": "PUBLIC DISCLOSURE BRIEFING",
    "source": "SIST and the Frontier AI Safety Problem, public disclosure edition, September 28, 2026, pp. 2–12.",
    "sections": [
      {
        "title": "The problem the research identified",
        "body": "An unsupported statement can move from one agent’s answer into another agent’s premise and emerge as apparent consensus. SIST’s research addresses that promotion of uncertain reasoning into authority. It separates evidence, claims, challenges, decisions, and actions so that each transition carries an identifiable burden of support."
      },
      {
        "title": "What SIST brought to the analysis",
        "body": "The research examined the nine-stage process, five quality gates, council tooling, and case-based review already represented in SIST’s materials. It connected those operational artifacts with proposed finding states, defeat history, controlled reopening, and action-boundary enforcement. This produced a concrete research architecture, with existing artifacts and proposed extensions identified separately."
      },
      {
        "title": "Preserve the reason a claim failed",
        "body": "A defeated theory should retain the evidence or rule that defeated it. Otherwise, another agent can rephrase it and introduce it again as a new idea. The proposed defeat record preserves that history and allows reopening when new evidence, changed authority, or a corrected error provides a documented reason."
      },
      {
        "title": "Put authorization at the action boundary",
        "body": "Reasoning review and execution authority address different risks. SIST’s proposal pairs substantive review with a check of the exact tool action, scope, permissions, and side effects. Protected logs, scoped credentials, and enforcement outside the acting agent’s control are engineering requirements for testing this design."
      },
      {
        "title": "The experiment this work defines",
        "body": "The research specifies a comparison using the same base agent under four conditions: no added control, written policy, separate action review, and the combined SIST-style control architecture. Matched tasks and attack opportunities would test whether the added structure changes outcomes.",
        "points": [
          "Unsupported claim promotion and missed adversarial challenges.",
          "Repeated introduction of previously defeated proposals.",
          "Unauthorized actions and harmful task completion.",
          "Legitimate completion, false blocks, review time, cost, and latency.",
          "Bypasses involving forged evidence, prompt injection, or captured reviewers."
        ]
      },
      {
        "title": "Why the research matters",
        "body": "The contribution is a testable way to make AI authority conditional on evidence, challenge, and permission. It gives researchers specific objects, transitions, failure modes, and measurements to evaluate. Its frontier-safety benefit remains an empirical question requiring controlled testing and independent replication."
      }
    ],
    "limits": [
      "Advanced lifecycle and enforcement controls are research proposals unless independently verified in implementation.",
      "Frontier-scale safety effectiveness has not been established by the case studies."
    ]
  },
  {
    "slug": "consumer-dispute-accountability",
    "title": "Consumer Dispute Accountability: Letters, Portals, and the Record",
    "category": "CONSUMER ADVOCACY",
    "description": "SIST compared Netspend/Pathward letters, messages, statements, and portal captures to expose inconsistent dispute statuses, instructions, and accounting explanations.",
    "edition": "PUBLIC / REDACTED BRIEFING",
    "source": "SIST Public Report Netspend CFPB v4 — Formal Consumer Report, dated August 6, 2026, pp. 1–8.",
    "sections": [
      {
        "title": "What SIST investigated",
        "body": "SIST reconstructed a consumer dispute from determination letters, secure messages, account statements, portal captures, and submitted evidence. Comparing those sources exposed questions that a single claim summary could not answer: what was investigated, what decision was issued, what the consumer could see, and how the account adjustments reconciled."
      },
      {
        "title": "The discrepancies the analysis uncovered",
        "body": "The investigation identified denied claims absent from a captured portal listing, a closure-date difference between a letter and portal record, changing written-notice instructions, and a stale update deadline. It also compared messages about fraud with formal denial language. These findings created a document-specific record of inconsistencies requiring explanation.",
        "points": [
          "Letter and portal status did not always align in the reviewed material.",
          "Instructions about the need for written notice changed between communications.",
          "An update message referred to a date that had already passed.",
          "The report identified a credit-accounting difference requiring reconciliation."
        ]
      },
      {
        "title": "Evidence submission versus the determination",
        "body": "SIST traced the submission of device-related forensic material and compared that timeline with later statements concerning evidence of compromise. The central question was whether the investigator received and assessed the submitted material, and what record showed that assessment. Receipt, evidentiary relevance, and substantive review are separate questions."
      },
      {
        "title": "Reconstruct the accounting",
        "body": "SIST brought claim amounts, merchant credits, fee reversals, balance notices, and portal records into a reconciliation exercise. Each adjustment needed to be connected to the transaction and explanation it addressed. A reversal is an accounting event; its legal significance depends on the reason and supporting record. The analysis therefore produced specific questions about unexplained differences rather than treating every adjustment as an admission."
      },
      {
        "title": "Why these findings matter",
        "body": "A consumer needs a consistent written account of the investigation and result. SIST turned a fragmented dispute history into an escalation record identifying the conflicting documents, missing explanations, and investigation material needed for review. The report records the consumer’s findings and claims; final liability and complaint resolution remain separate determinations."
      }
    ],
    "limits": [
      "The findings concern the reviewed records; institution explanations and final complaint outcomes are not established here.",
      "Legal allegations remain distinct from regulatory or judicial findings."
    ]
  },
  {
    "slug": "consent-to-consequences",
    "title": "Consent to Consequences: Personal Privacy Evidence",
    "category": "PRIVACY / WHITE PAPER",
    "description": "SIST’s privacy white paper defines a user-controlled evidence record linking consent, disclosures, browser observations, claims, and follow-up action.",
    "edition": "PUBLIC RESEARCH BRIEFING",
    "source": "Consent-to-Consequences, SIST-WP-2026-001, public release version 1.2, pp. 2–9.",
    "sections": [
      {
        "title": "The gap the research identified",
        "body": "Privacy choices are difficult to document after the original interface, policy version, form, or communication has disappeared. SIST’s research identified that loss of context as an evidence problem. A person needs a durable record of what was shown, what was requested, which preference was expressed, and what happened next."
      },
      {
        "title": "The evidence framework we developed",
        "body": "Consent-to-Consequences connects an intentional capture with a preserved source, classified claim, adversarial review, and user-directed action. It gives each stage an output that can be inspected later. The claim classification prevents an observation from silently becoming a stronger accusation.",
        "points": [
          "Documented fact: supported by the captured source.",
          "Interpretation: an explicitly labeled inference.",
          "Potential risk: a concern requiring additional evidence.",
          "Unknown: a question the current record cannot answer."
        ]
      },
      {
        "title": "DriveProof Privacy Receipt",
        "body": "The white paper applies the framework to auto shopping and financing. The proposed buyer-side receipt connects advertised terms, authorization language, disclosures, messages, and selected browser captures in one timeline. It preserves the context needed for a later request or dispute rather than relying on memory alone."
      },
      {
        "title": "What the design requires",
        "body": "The proposal specifies local-first storage, user-controlled retention and deletion, source integrity records, and approval before external transmission. Its evaluation plan includes capture completeness, claim precision, challenge recall, and negative cases. These are design and testing requirements; the public paper does not report that every implementation target has been achieved."
      },
      {
        "title": "Why the work matters",
        "body": "The framework gives the individual a structured record at the point where information and consent are requested. That record can support an editable request, an advocate intake, or further investigation. Its strength depends on preserving observable facts and making the boundary between evidence and inference visible."
      }
    ],
    "limits": [
      "The white paper specifies a proposed system; evaluation targets remain targets.",
      "An observed browser event alone does not establish undisclosed transfer, causation, or a legal violation."
    ]
  },
  {
    "slug": "cross-domain-benchmark",
    "title": "Cross-Domain Benchmark: Observed Results and Limits",
    "category": "VALIDATION / BENCHMARK",
    "description": "SIST’s five-domain benchmark documented recurring discovery capabilities and caught, corrected, or held all five material weaknesses identified in one criminal-defense run.",
    "edition": "PUBLIC / ACADEMIC BRIEFING",
    "source": "SIST Public Benchmark Report v1, benchmark dated August 10, 2026, pp. 1–4.",
    "sections": [
      {
        "title": "What SIST tested",
        "body": "The August 10, 2026 observational benchmark evaluated work across criminal defense, consumer finance, credit reporting, child welfare, and vendor security. The assessment tracked contradiction detection, source analysis, institutional mapping, novel discovery, and identification of missing evidence."
      },
      {
        "title": "The result that changed the final output",
        "body": "In the criminal-defense run, five material first-pass vulnerabilities were identified. All five were caught, corrected, or held before finalization; none of those five escaped unchanged into the evaluated output. Adversarial review changed the substance of the work by stopping or repairing weaknesses that the first pass had left in place."
      },
      {
        "title": "The recurring discoveries",
        "body": "Across the evaluated domains, SIST found value in comparing institutional summaries with their underlying records and identifying evidence-producing processes whose outputs were missing.",
        "points": [
          "Chronology gaps and conflicting documentary accounts.",
          "Connections between actors, systems, and institutional processes.",
          "Claims whose apparent authority exceeded their source support.",
          "Missing records that became specific preservation or verification questions."
        ]
      },
      {
        "title": "What the scores represent",
        "body": "The domain averages summarize the completed observational capability matrix. They describe this benchmark’s scoring, not population-wide accuracy. The strongest concrete result is the tracked handling of the five observed vulnerabilities. A matched comparison is needed to determine how much improvement is attributable to the review architecture."
      },
      {
        "title": "The next test",
        "body": "The benchmark established a documented starting point for controlled validation. The next phase requires matched baselines, repeated runs, explicit scoring criteria, false-positive measurement, and independent review. Publishing the original observations alongside that evaluation plan makes the research open to challenge and improvement."
      }
    ],
    "limits": [
      "Five corrected or held issues in one run are a bounded observation, not a universal zero-error rate.",
      "Controlled baseline comparison and large-sample statistical validation remain outstanding."
    ]
  },
  {
    "slug": "sanitized-adversarial-case-study",
    "title": "When the Correct Output Is Withhold or Revise",
    "category": "PUBLIC DELIVERABLE / CASE STUDY",
    "description": "SIST’s public case study demonstrates a concrete review result: preserve useful strategic findings, identify missing support, and withhold the package until its weaknesses are repaired.",
    "edition": "SANITIZED DEMONSTRATION",
    "source": "SIST Sanitized Client Report Public Sample, corrected logo edition, SIST-PUBLIC-SAMPLE-LEGAL-001, September 7, 2026, pp. 1–10.",
    "sections": [
      {
        "title": "The assignment and the result",
        "body": "SIST evaluated a contested institutional matter involving a strong narrative, incomplete primary evidence, legal authorities, and procedural questions. The review produced a WITHHOLD / REVISE disposition. It retained useful strategic themes while identifying the claims and prerequisites that prevented clearance."
      },
      {
        "title": "What the review discovered",
        "body": "The analysis separated the intake account, institutional summaries, secondary reporting, and primary authorities. It found that some propositions needed reframing, some factual predicates remained unresolved, and some procedural claims were premature. The gaps became explicit tasks instead of being filled with confident prose."
      },
      {
        "title": "How the findings changed the work",
        "body": "Each challenge was connected to a repair: obtain the underlying record, check the proposition supported by an authority, clarify procedural posture, or narrow the claim. The result was a cleaner route to a usable deliverable. The system preserved the useful theory while blocking unsupported material from release."
      },
      {
        "title": "Why a withheld output matters",
        "body": "A report’s value includes knowing when it is not ready. This case study makes that decision visible through source treatment, findings, challenges, and a repair plan. It demonstrates an operational deliverable that can say what survives review and what still needs work."
      }
    ],
    "limits": [
      "The public sample omits private case facts and implementation details.",
      "Its disposition concerns the work product’s readiness, not a finding against a party."
    ]
  },
  {
    "slug": "browser-telemetry-evidence",
    "title": "Browser Telemetry: Capability, Capture, and Proof",
    "category": "TECHNICAL PRIVACY / EVIDENCE",
    "description": "SIST investigated browser telemetry on a consumer credit portal, preserved a script artifact, and mapped the evidence needed to establish actual data collection.",
    "edition": "TECHNICAL INVESTIGATION / PUBLIC BRIEFING",
    "source": "SIST Datadog Discovery Report Corrected, August 22, 2026, pp. 1–7; Datadog Session Replay Privacy Options documentation consulted for this edition.",
    "sections": [
      {
        "title": "The technical discovery",
        "body": "SIST investigated telemetry requests captured during a consumer credit-portal visit and analyzed a preserved browser script. SIST examined the artifact’s library functions, endpoint references, version information, and collection history. That work connected a visible browser observation with specific technical questions about the deployed monitoring configuration."
      },
      {
        "title": "What the artifact revealed",
        "body": "The analysis identified functions associated with session replay, browser events, request instrumentation, and cookie handling. These supplied a capability map for the investigation. Establishing which capabilities operated during the visit requires the runtime configuration and payload evidence. Datadog’s documentation describes masking controls, making the deployed privacy settings a material part of that inquiry."
      },
      {
        "title": "The preservation work",
        "body": "The investigation recorded capture steps, retained the script, calculated an integrity digest, and described redundant preservation. These records make comparison and later review possible. A digest establishes consistency between retained copies; source provenance is strengthened by the original capture, metadata, independent observations, and comparison with the deployed artifact.",
        "points": [
          "Preserve the original artifact separately from the analysis.",
          "Connect captures to time, page, request context, and consent state.",
          "Compare library capabilities with deployed settings and observed behavior.",
          "Inspect transmitted payloads before making claims about sensitive values."
        ]
      },
      {
        "title": "The follow-up timeline",
        "body": "SIST recorded observations of later configuration changes or removal after the complaint. That timeline became a preservation and explanation question: what changed, when, and why? The sequence is part of the investigation. Motive and legal consequences require evidence beyond temporal proximity."
      },
      {
        "title": "Why the discovery matters",
        "body": "The investigation turned browser activity into a structured privacy-evidence problem. It identified an artifact to preserve, capabilities to examine, settings to verify, and runtime records needed to establish exposure. The useful result is an investigation that can be advanced or revised by evidence rather than closed on the basis of a library name alone."
      }
    ],
    "limits": [
      "Actual unmasked sensitive-data collection requires runtime and payload evidence beyond the capability map.",
      "Later deployment observations do not alone establish motive, liability, or present deployment status."
    ],
    "references": [
      {
        "label": "Datadog — Session Replay Privacy Options",
        "href": "https://docs.datadoghq.com/session_replay/privacy_options/"
      }
    ]
  }
];

export const fieldNotes = [
  {
    "title": "What Is Adversarial Review?",
    "description": "The method: challenge assumptions, verify support, and preserve uncertainty before release.",
    "href": "/briefings/what-is-adversarial-review",
    "category": "METHOD / FIELD NOTE"
  },
  {
    "title": "After Bexar County",
    "description": "Alexander Emilio Perez’s field reflection on AI-assisted preparation and the human responsibility behind the work.",
    "href": "/briefings/after-bexar-county",
    "category": "FOUNDER / FIELD REFLECTION"
  }
];
