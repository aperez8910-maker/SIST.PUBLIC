# Data Processing Agreement (DPA)
**SIST™ — Adversarial Integration Protocol™**
**The Perez Method™**

*Effective Date: July 22, 2026*

This Data Processing Agreement ("DPA") is entered into between the operator ("Controller") and SIST™ ("Processor") and governs the processing of personal data submitted through the SIST platform in connection with legal analysis services.

---

## 1. Definitions

- **Controller**: The licensed attorney or authorized legal professional who creates and manages SIST sessions.
- **Processor**: SIST™, operated under The Perez Method™.
- **Personal Data**: Any information submitted via the case prompt or intake documents that may relate to an identifiable natural person.
- **Session**: A single analysis instance identified by a UUID Session ID, containing a prompt, intake documents, AI outputs, and a final verdict.
- **Destruction**: The irreversible purge of all client content from a session, as defined in Section 5.

---

## 2. Scope and Purpose

SIST processes submitted data solely to:

1. Execute the Adversarial Integration Protocol™ (multi-seat AI deliberation, adversarial gate review, synthesis)
2. Generate a final output PDF for delivery to the operator or client portal
3. Maintain an audit trail of session outcomes (no client content)

Processing is performed on documented instructions from the Controller. SIST does not process data for any independent purpose.

---

## 3. Controller Obligations

The Controller agrees to:

- Submit only data they are lawfully authorized to process
- Ensure client consent or legal basis exists for any personal data submitted
- Not submit data classified above the sensitivity threshold appropriate for cloud AI processing without explicit written authorization
- Notify SIST of any data subject rights requests that cannot be resolved by destruction confirmation

---

## 4. Processor Obligations

SIST agrees to:

- Process submitted data only as directed by this DPA and the system architecture
- Maintain technical and organizational security measures (TLS 1.2+, encrypted-at-rest MongoDB, cryptographic session IDs)
- Not engage sub-processors beyond the AI inference providers listed in Section 7
- Notify the Controller within 72 hours of becoming aware of a data breach affecting session data
- Provide destruction confirmation upon request via the session audit log

---

## 5. Data Destruction Protocol

SIST enforces **mandatory, automatic, code-level data destruction**. This is the primary privacy safeguard of the platform.

### Destruction Triggers

| Trigger | Mechanism | Reason Logged |
|---|---|---|
| Client downloads output PDF | `GET /api/client/{token}/pdf` fires `execute_destruction()` automatically | `output_delivered` |
| Session time limit expires | Sentinel fleet sweep via `sweep_expired_sessions()` | `session_expired` |
| Operator manual destroy | `POST /api/sessions/{session_id}/destroy` | `operator_manual_destroy` |

### Scope of Destruction (`execute_destruction()`)

The following are **permanently purged** from the database:

- `prompt` — replaced with `[DESTROYED]`
- `intake_documents` — cleared to empty array
- `seats` — all AI council outputs cleared
- `synthesis` — cleared
- `pipeline` — all pipeline artifacts cleared
- `events` — content stripped, only event types retained
- `run_history` — cleared
- `client_token` — replaced with `[INVALIDATED]` (portal link immediately non-functional)
- `client_pin` — cleared
- `db.retention` snapshots — deleted via `db.retention.delete_many({session_id})`

### Audit Record (Preserved)

The session document is **not deleted** — it is zeroed. The following survive as the audit trail:

- `case_ref` (operator-assigned label)
- `final_verdict`
- Gate IDs and verdicts (no report content)
- `destroyed_at`, `destruction_reason`
- Operator override log entries

### Retention Snapshots

Retention snapshots in `db.retention` are **disabled by default** (`retain_artifacts: false`). They are only written if the operator explicitly sets `retain_artifacts: true` at session creation. All retention snapshots are purged on destruction regardless.

---

## 6. Data Subject Rights

Because SIST does not link sessions to identifiable natural persons (no names, no identifiers — only operator-assigned case reference labels), individual data subject rights (access, erasure, portability) are fulfilled by:

1. Confirming that the session has been destroyed (audit log entry)
2. Confirming that no personal identifiers were stored

Operators may trigger immediate destruction at any time via `POST /api/sessions/{session_id}/destroy`.

---

## 7. Sub-Processors

SIST engages the following sub-processors for AI inference only:

| Sub-Processor | Purpose | Data Transmitted |
|---|---|---|
| OpenAI (ChatGPT) | Council Seat 1 — Creative/Narrative | Case prompt + intake context |
| Moonshot AI (Kimi) | Council Seat 2 — Technical Lead | Case prompt + intake context |
| Perplexity AI | Council Seat 3 — Truth Enforcer | Case prompt + intake context |

All sub-processors receive prompt data for inference only, under their respective API terms. SIST does not authorize sub-processors to retain, train on, or share submitted data.

---

## 8. Security Measures

- TLS 1.2+ for all data in transit
- MongoDB encrypted at rest
- Cryptographic UUID Session IDs (not guessable)
- Client tokens: `secrets.token_urlsafe(12)` (96-bit entropy)
- Optional operator-set PIN (4–8 digits) on client portal
- Time-limited portal links with automatic expiry destruction
- Sentinel Guardian: autonomous anomaly detection, room freeze, PDF block

---

## 9. Term and Termination

This DPA is effective upon first use of the SIST platform and remains in force for the duration of the operator relationship. Upon termination, all active sessions will be destroyed per Section 5.

---

*SIST™ | The Perez Method™ | Adversarial Integration Protocol™*
*All rights reserved.*
