"use client";

import { FormEvent, useState } from "react";

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; reference: string }
  | { status: "error"; message: string };

const fieldClass =
  "mt-2 w-full rounded-sm border border-white/15 bg-[#060a10] px-4 py-3 text-base text-[#f0f0f0] outline-none transition placeholder:text-[#59616d] focus:border-amber-300/70 focus:ring-2 focus:ring-amber-300/10";

const labelClass = "block text-sm font-medium text-[#d7dbe0]";

export default function IntakeForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmission({ status: "submitting" });

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; reference?: string; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "The intake channel did not accept the submission.");
      }

      form.reset();
      setSubmission({ status: "success", reference: result.reference || "RECEIVED" });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "The intake channel is temporarily unavailable. Please try again.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <fieldset className="border border-white/10 bg-white/[0.018] p-5 sm:p-7">
        <legend className="px-3 text-[10px] font-semibold tracking-[0.32em] text-amber-300">
          01 / CONTACT
        </legend>
        <div className="grid gap-5 md:grid-cols-2">
          <label className={labelClass}>
            Full name <span className="text-amber-300">*</span>
            <input className={fieldClass} name="name" autoComplete="name" required maxLength={120} />
          </label>
          <label className={labelClass}>
            Email address <span className="text-amber-300">*</span>
            <input className={fieldClass} name="email" type="email" autoComplete="email" required maxLength={180} />
          </label>
          <label className={labelClass}>
            Phone number
            <input className={fieldClass} name="phone" type="tel" autoComplete="tel" maxLength={40} />
          </label>
          <label className={labelClass}>
            Organization or firm
            <input className={fieldClass} name="organization" autoComplete="organization" maxLength={160} />
          </label>
          <label className={labelClass}>
            Preferred response
            <select className={fieldClass} name="contact_preference" defaultValue="Email">
              <option>Email</option>
              <option>Phone</option>
              <option>Either</option>
            </select>
          </label>
          <label className={labelClass}>
            City, state, or jurisdiction
            <input className={fieldClass} name="jurisdiction" maxLength={160} placeholder="Austin, Texas" />
          </label>
        </div>
      </fieldset>

      <fieldset className="border border-white/10 bg-white/[0.018] p-5 sm:p-7">
        <legend className="px-3 text-[10px] font-semibold tracking-[0.32em] text-amber-300">
          02 / MATTER
        </legend>
        <div className="grid gap-5 md:grid-cols-2">
          <label className={labelClass}>
            Matter type <span className="text-amber-300">*</span>
            <select className={fieldClass} name="matter_type" required defaultValue="">
              <option value="" disabled>Select one</option>
              <option>Civil Litigation</option>
              <option>Criminal or Defense</option>
              <option>Immigration</option>
              <option>Family or CPS</option>
              <option>Consumer or Credit</option>
              <option>Healthcare Accountability</option>
              <option>Government or Institutional</option>
              <option>Business or Strategic</option>
              <option>Research or Other</option>
            </select>
          </label>
          <label className={labelClass}>
            Urgency <span className="text-amber-300">*</span>
            <select className={fieldClass} name="urgency" required defaultValue="Routine — no deadline within 7 days">
              <option>Routine — no deadline within 7 days</option>
              <option>Time-sensitive — deadline within 3–7 days</option>
              <option>Urgent — deadline within 72 hours</option>
            </select>
          </label>
          <label className={labelClass}>
            Confidentiality level <span className="text-amber-300">*</span>
            <select className={fieldClass} name="confidentiality" required defaultValue="Standard">
              <option>Standard</option>
              <option>Sensitive — request restricted handling</option>
              <option>Attorney-directed — counsel is involved</option>
            </select>
          </label>
          <label className={labelClass}>
            Known deadline or hearing date
            <input className={fieldClass} name="deadline" maxLength={120} placeholder="Date, time, and what is due" />
          </label>
        </div>

        <label className={`${labelClass} mt-5`}>
          Other parties, agencies, or organizations involved
          <textarea className={`${fieldClass} min-h-24 resize-y`} name="parties" maxLength={1500} placeholder="Names only. Do not include Social Security numbers, account numbers, or passwords." />
        </label>
      </fieldset>

      <fieldset className="border border-white/10 bg-white/[0.018] p-5 sm:p-7">
        <legend className="px-3 text-[10px] font-semibold tracking-[0.32em] text-amber-300">
          03 / MISSION
        </legend>
        <div className="space-y-5">
          <label className={labelClass}>
            What happened? <span className="text-amber-300">*</span>
            <textarea className={`${fieldClass} min-h-40 resize-y`} name="message" required maxLength={6000} placeholder="Give the core facts in date order. Separate what you know from what you suspect." />
          </label>
          <label className={labelClass}>
            What result do you need? <span className="text-amber-300">*</span>
            <textarea className={`${fieldClass} min-h-28 resize-y`} name="objective" required maxLength={2500} placeholder="State the decision, answer, strategy, or work product you need from SIST." />
          </label>
          <label className={labelClass}>
            Evidence and records available
            <textarea className={`${fieldClass} min-h-28 resize-y`} name="evidence" maxLength={2500} placeholder="List notices, court records, correspondence, screenshots, reports, recordings, or other source material. Do not upload or paste sensitive records here." />
          </label>
        </div>
      </fieldset>

      <div className="border border-amber-300/20 bg-amber-300/[0.025] p-5 sm:p-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#aeb5bf]">
          <input className="mt-1 h-4 w-4 accent-[#c9a84c]" type="checkbox" name="consent" value="Agreed" required />
          <span>
            I am authorized to submit this information. I understand this intake is for preliminary review, is not an emergency channel, does not create an attorney-client relationship, and does not guarantee SIST will accept or act on the matter. <span className="text-amber-300">*</span>
          </span>
        </label>
      </div>

      {submission.status === "success" && (
        <div className="border border-emerald-400/35 bg-emerald-400/[0.05] p-5" role="status" aria-live="polite">
          <p className="text-[10px] font-semibold tracking-[0.28em] text-emerald-300">INTAKE RECEIVED</p>
          <p className="mt-2 text-sm text-[#c8d0d8]">Reference: {submission.reference}. Keep this number for follow-up.</p>
        </div>
      )}

      {submission.status === "error" && (
        <div className="border border-red-400/35 bg-red-400/[0.05] p-5" role="alert">
          <p className="text-[10px] font-semibold tracking-[0.28em] text-red-300">SUBMISSION NOT SENT</p>
          <p className="mt-2 text-sm text-[#c8d0d8]">{submission.message}</p>
          <a className="mt-3 inline-block text-sm text-amber-300 underline underline-offset-4" href="mailto:support@systemintelligenceandstrategictactics.com">
            Contact SIST support
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={submission.status === "submitting"}
        className="w-full border border-amber-300/60 bg-amber-300/[0.08] px-6 py-4 text-sm font-bold tracking-[0.22em] text-amber-200 transition hover:border-amber-200 hover:bg-amber-300/[0.14] disabled:cursor-wait disabled:opacity-60"
      >
        {submission.status === "submitting" ? "TRANSMITTING INTAKE…" : "SUBMIT INTAKE"}
      </button>
    </form>
  );
}
