# Terms of Service
**SIST™ — Adversarial Integration Protocol™**
**The Perez Method™**

*Effective Date: July 22, 2026*

---

## 1. Acceptance

By accessing or using SIST™, you ("Operator") agree to these Terms of Service. Use of the platform constitutes acceptance. If you do not agree, do not use the platform.

---

## 2. Eligibility

SIST is designed for use by **licensed attorneys and authorized legal professionals** only. By using the platform, you represent that:

- You hold a valid law license in your jurisdiction or are authorized by a licensed attorney to operate the platform
- You have the lawful right to submit the data contained in any case prompt or intake documents
- You will use the platform solely for legitimate legal analysis purposes

---

## 3. The Adversarial Integration Protocol™

SIST delivers legal analysis through the Adversarial Integration Protocol™:

1. A multi-seat AI council (ChatGPT, Kimi, Perplexity) independently analyzes the submitted matter
2. Alexander (Synthesis Commander) produces a Command Synthesis
3. Adversarial gates challenge the synthesis
4. A final verdict is issued: **HOLD**, **REVISE**, or **RETRACT**
5. Output is delivered via PDF to the operator or time-limited client portal

**SIST output is AI-generated analysis — not legal advice.** The operator is solely responsible for independent review, professional judgment, and any decisions made based on SIST output.

---

## 4. Data & Destruction

### 4.1 What You Submit

You submit case prompts and intake documents. You represent you are authorized to submit this data and that it does not violate applicable law or third-party rights.

### 4.2 Automatic Destruction

SIST enforces **mandatory, automatic, irreversible data destruction**. The following triggers purge all client content permanently:

| Trigger | Mechanism |
|---|---|
| Client downloads output PDF | `GET /api/client/{token}/pdf` fires `execute_destruction()` automatically |
| Session time limit expires | Sentinel fleet sweep destroys all expired sessions |
| Operator manual destroy | `POST /api/sessions/{session_id}/destroy` |

Upon destruction, the case prompt, intake documents, all AI outputs, synthesis, gate reports, pipeline artifacts, and the client portal token are permanently purged. **This cannot be reversed.** The surviving audit record contains no client content.

### 4.3 No Retention Default

Retention snapshots are **disabled by default**. The `retain_artifacts` flag is `false` unless explicitly set by the operator at session creation. Even if enabled, retention snapshots are purged on destruction.

### 4.4 Operator Responsibility for Destruction

You may manually destroy any session at any time via `POST /api/sessions/{session_id}/destroy`. You are responsible for setting appropriate expiry windows on client portals. SIST is not liable for any data that persists because an operator failed to set an expiry or trigger destruction.

---

## 5. Intellectual Property

- **SIST™**, **Adversarial Integration Protocol™**, and **The Perez Method™** are proprietary marks and systems. All rights reserved.
- The Operator retains ownership of all data submitted to SIST.
- SIST output (synthesis, verdicts, gate reports) is delivered to the Operator as work product. SIST claims no ownership of output content.
- The platform code, architecture, protocol design, and AI council configuration are proprietary and may not be copied, reverse-engineered, or replicated without written authorization.

---

## 6. Prohibited Use

You may not use SIST to:

- Submit data you are not authorized to process
- Circumvent the privilege protection architecture (e.g., sharing operator-level API access with clients)
- Attempt to extract internal deliberation content from the client portal
- Use the platform for any purpose other than legitimate legal analysis
- Violate any applicable law or professional conduct rule

---

## 7. Disclaimers

- SIST output is AI-generated and does not constitute legal advice
- SIST does not guarantee any particular outcome, verdict, or analysis quality
- AI models may produce errors, hallucinations, or incomplete analysis
- The Operator is solely responsible for independent professional review of all SIST output

---

## 8. Limitation of Liability

To the maximum extent permitted by law, SIST and its operators shall not be liable for any indirect, incidental, consequential, or punitive damages arising from use of the platform, including reliance on AI-generated output.

---

## 9. Governing Law

These Terms are governed by the laws of the State of Texas, without regard to conflict of law principles.

---

## 10. Changes

We may update these Terms. Material changes will be communicated via the platform. Continued use after notice constitutes acceptance.

---

*SIST™ | The Perez Method™ | Adversarial Integration Protocol™*
*All rights reserved.*
