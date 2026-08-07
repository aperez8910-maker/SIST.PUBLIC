# Attorney-Client Privilege & Work Product Protection Statement
**SIST™ — Adversarial Integration Protocol™**
**The Perez Method™**

*Effective Date: July 22, 2026*

---

## 1. Purpose

This statement describes the technical and operational measures SIST™ uses to protect attorney-client privilege and attorney work product doctrine for all legal analysis sessions conducted on the platform.

---

## 2. Architecture of Privilege Protection

### Session ID Isolation

Every SIST session is identified by a **cryptographically random UUID Session ID**. No session is ever identified by client name, matter number, court case number, or any other identifying label. The operator assigns a case reference label — this label is entirely under the operator's control and carries no system meaning.

### Operator / Client Separation

The SIST platform enforces a strict two-layer access model:

| Layer | Access | Sees |
|---|---|---|
| **Operator (Attorney)** | Full API access | All deliberation, seat outputs, synthesis, gates, verdicts, pipeline artifacts |
| **Client Portal** | Token + optional PIN | Final verdict, gate verdicts only (no reports), synthesis excerpt, status |

The client **never** sees:
- Individual AI seat outputs (internal deliberation)
- Gate challenge reports
- Pipeline agent reports
- Synthesis content beyond a 400-character excerpt
- Session events (stripped to type-only before client delivery)

This mirrors the distinction between privileged work product (attorney-only) and the final deliverable (client-facing).

### Encrypted Portal Links

Client portal access is delivered via a **time-limited encrypted token link** (`secrets.token_urlsafe(12)`). The operator may additionally set a **4–8 digit PIN**. Expired links return HTTP 410 Gone and trigger automatic session destruction.

---

## 3. Destruction as Privilege Enforcement

The most powerful privilege protection in SIST is **mandatory, automatic, irreversible data destruction**. Once the output is delivered, the underlying privileged work — the deliberation, the intake documents, the AI analysis — is permanently destroyed.

### Destruction Triggers

| Trigger | How It Works |
|---|---|
| **Output delivered** | Client downloads PDF → `GET /api/client/{token}/pdf` → `execute_destruction()` fires automatically via `asyncio.create_task` |
| **Session expires** | Sentinel fleet sweep calls `sweep_expired_sessions()` → any session past `client_expires_at` is destroyed |
| **Operator manual destroy** | `POST /api/sessions/{session_id}/destroy` → immediate full purge |

### What Is Destroyed

- Case prompt and all intake documents
- All AI council seat outputs
- Command Synthesis
- All adversarial gate reports
- All pipeline agent reports
- All session events (content)
- All retention snapshots (`db.retention`)
- Client portal token (link invalidated instantly)

### What Survives

Only the **audit shell** survives destruction:
- Case reference label
- Final verdict
- Gate IDs and verdicts (no reports)
- Destruction timestamp and reason
- Operator override log

This audit record contains **zero privileged content**.

---

## 4. No Retention by Default

SIST does **not** retain pipeline artifacts or AI outputs after a session completes. The `db.retention` collection is only written if the operator explicitly enables `retain_artifacts: true` at session creation — which defaults to `false`. Even if enabled, all retention snapshots are purged on destruction.

This means: **there is nothing to subpoena** after destruction. The privileged work product no longer exists on any SIST server.

---

## 5. Sentinel Guardian

The Sentinel Guardian system provides an additional layer of privilege protection:

- **Room Freeze**: Sentinel can freeze the client portal if an anomaly is detected, preventing premature output delivery
- **PDF Block**: Sentinel can block PDF export pending operator review
- **Abort**: Sentinel can abort a running session if a critical threshold is crossed
- **Fleet Sweep**: Sentinel's fleet scan automatically destroys all expired sessions

Sentinel actions are logged to `db.sentinel_log` as a permanent audit record.

---

## 6. Privilege Waiver Risk Mitigation

SIST is designed to minimize inadvertent privilege waiver:

- Client portal never exposes deliberation content
- Destruction eliminates the underlying privileged materials after delivery
- Session IDs prevent associating analysis with specific clients in the event of any unauthorized access
- No client names, identifiers, or contact information are ever stored on the SIST platform

---

## 7. Operator Responsibility

The attorney/operator remains the privilege holder. SIST is a tool — the attorney controls:

- What is submitted as the case prompt and intake documents
- Whether and when to share the client portal link
- The PIN and expiry window for the client portal
- Manual destruction at any time via `POST /api/sessions/{session_id}/destroy`
- Whether to enable retention snapshots (strongly discouraged for sensitive matters)

---

*SIST™ | The Perez Method™ | Adversarial Integration Protocol™*
*All rights reserved.*
