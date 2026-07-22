# Privacy Policy
**SIST™ — Adversarial Integration Protocol™**
**The Perez Method™**

*Effective Date: July 22, 2026*

---

## 1. Who We Are

SIST™ (Strategic Intelligence Synthesis Technology) is a privileged legal analysis platform developed under The Perez Method™. SIST is operated by its founder and is designed exclusively for use by licensed attorneys and authorized legal professionals.

---

## 2. What We Collect

When a session is initiated, the following data is submitted by the operator (attorney):

- **Case reference identifier** (operator-assigned, non-identifying label)
- **Case prompt** — the factual or legal question submitted for analysis
- **Intake documents** — evidentiary or background materials uploaded for AI review

We do **not** collect:
- Client names, addresses, Social Security numbers, or other personal identifiers
- Billing information beyond what a third-party payment processor collects independently
- Device fingerprints or persistent tracking identifiers

---

## 3. How Data Is Used

All submitted data is used **solely** to execute the Adversarial Integration Protocol™:

1. Routed to AI council seats for adversarial analysis
2. Synthesized into a Command Synthesis by Alexander (Synthesis Commander)
3. Challenged through adversarial gates
4. Assembled into a final output PDF delivered to the operator or client portal

No submitted data is used for model training, sold to third parties, shared with advertisers, or retained beyond the session lifecycle defined in Section 5.

---

## 4. Privilege & Confidentiality

SIST operates under a strict attorney-client privilege protection architecture:

- All sessions are identified by a randomly generated **Session ID** — never by client name or matter number
- Client portal access requires a **time-limited encrypted link** + optional **operator-set PIN**
- Operator and client data are **logically isolated** — the client portal exposes only output, never internal deliberation, seat outputs, or gate reports
- All AI council deliberations are privileged work product and are never surfaced to the client

---

## 5. Data Destruction Protocol

SIST enforces **mandatory, automatic, irreversible data destruction**. This is not a policy option — it is built into the system as code.

### Destruction Triggers

| Trigger | Endpoint | Reason Logged |
|---|---|---|
| Client downloads output PDF | `GET /api/client/{token}/pdf` | `output_delivered` |
| Session time limit expires | Sentinel fleet sweep / expiry check | `session_expired` |
| Operator manual destroy | `POST /api/sessions/{session_id}/destroy` | `operator_manual_destroy` |

### What Is Destroyed

Upon any trigger, the following are **permanently purged**:

- Case prompt and all intake documents
- All AI seat outputs, synthesis, and gate reports
- All session events and pipeline artifacts
- The `db.retention` snapshot (if any)
- The client portal token (link is immediately invalidated)
- The client PIN

### What Is Preserved (Audit Trail Only)

- Case reference label
- Final verdict (HOLD / REVISE / RETRACT)
- Gate IDs and verdicts (no report content)
- Destruction timestamp and reason
- Operator override log entries

The audit record contains **no client content** — only the administrative outcome.

### Retention Snapshots

By default (`retain_artifacts: false`), **no retention snapshot is written to `db.retention`**. Snapshots are only written if the operator explicitly enables `retain_artifacts: true` at session creation — and even those snapshots are purged upon destruction.

---

## 6. Data Security

- All data in transit is encrypted via TLS 1.2+
- MongoDB collections are encrypted at rest
- Session IDs are cryptographically random UUIDs
- Client tokens are generated via `secrets.token_urlsafe(12)` — not guessable
- The Sentinel Guardian system monitors sessions for anomalies and can freeze or block output independently

---

## 7. No Third-Party Sharing

SIST does not share, sell, license, or disclose any session data to any third party, except:

- **AI inference providers** (OpenAI, Moonshot/Kimi, Perplexity) — prompts are transmitted for inference only, under their API terms, and are not retained by SIST
- **Legal obligation** — if compelled by a valid court order, we will notify the operator to the extent permitted by law before disclosure

---

## 8. Your Rights

Operators may at any time:

- Manually destroy a session via `POST /api/sessions/{session_id}/destroy`
- Request confirmation of destruction via the audit log at `GET /api/sessions/{session_id}/audit`
- Set a session expiry window to enforce automatic time-limited destruction

Because client content is not tied to any personal identifier, individual data subject requests (e.g. GDPR access requests) are fulfilled by confirming destruction, not by producing records.

---

## 9. Changes to This Policy

Material changes will be communicated to operators via the platform. Continued use after notice constitutes acceptance.

---

*SIST™ | The Perez Method™ | Adversarial Integration Protocol™*
*All rights reserved.*
