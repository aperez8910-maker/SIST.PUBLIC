# Public intake release gates

Status: **closed**. The route returns HTTP 503 without reading the request body,
logging its contents, or making any outbound request. The public page contains a local email-draft helper for name, reply email, and a general topic only. It uses no fetch, storage, or website submission. The visitor reviews and sends through their own email app; email remains subject to their provider and the SIST mailbox provider. It is not represented as a DPA-governed legal intake or a secure evidence channel.
Setting `WEB3FORMS_ACCESS_KEY` cannot enable delivery.

The previous Web3Forms receiver conflicts with DPA sections 4 and 7. The DPA,
privacy policy, retention promises, and privilege statements have not been amended
or implicitly waived. A generic consent checkbox does not authorize a new processor.

Before replacing the closed handler:

1. Identify and approve an intake receiver with documented purpose, access,
   retention, deletion, and processing instructions. Do not send intake to an AI
   inference provider merely because it appears in DPA section 7; approval there
   is for inference only. If a new processor is necessary, obtain the required
   approval and update governing terms and informed consent before enabling it.
2. Enforce a shared, atomic server-side rate limit before forwarding (including
   per-client and global quotas), or a server-verified challenge. It must fail
   closed on missing configuration or verification failure. An in-memory counter
   is insufficient across Vercel instances; a client honeypot is only supplemental.
   Review any abuse-control service as part of processor approval as well.
3. Reject oversized, malformed, or invalid input; never silently truncate the
   factual record. Do not log narratives, provider response bodies, or credentials.
4. Test direct callers, omitted honeypots, bursts, replay where applicable,
   receiver failures, and unavailable abuse controls. Rejected requests must make
   zero calls to the receiver. Confirm retention and deletion before using real data.
5. Restore the form and open status only after these gates pass. Confirm receipt
   only after the approved receiver accepts the submission.

The closed handler removes the mailbox-flood and provider-quota attack path. It is
not a rate limiter for future intake and does not prevent traffic to the hosting
platform itself.
