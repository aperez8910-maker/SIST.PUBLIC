"use client";

import { FormEvent, useState } from "react";

export default function IntakeForm() {
  const [prepared, setPrepared] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) || "").trim();
    const subject = `SIST Intake — ${value("domain") || "General"} — ${value("name") || "New Inquiry"}`;
    const body = [
      "SIST PUBLIC INTAKE",
      "",
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Organization / role: ${value("organization") || "Not provided"}`,
      `Domain: ${value("domain")}`,
      `Urgency: ${value("urgency")}`,
      "",
      "INTELLIGENCE OBJECTIVE",
      value("objective"),
      "",
      "CURRENT RECORD / KNOWN FACTS",
      value("record"),
      "",
      "DESIRED OUTCOME",
      value("outcome"),
      "",
      "Note: No files are attached through the public intake page. Sensitive records should be shared only after a channel and handling method are confirmed."
    ].join("\n");

    setPrepared(true);
    window.location.href = `mailto:support@systemintelligenceandstrategictactics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="intake-form" onSubmit={submit}>
      <div className="intake-form-grid">
        <label><span>NAME *</span><input name="name" required autoComplete="name" /></label>
        <label><span>EMAIL *</span><input name="email" type="email" required autoComplete="email" /></label>
        <label><span>ORGANIZATION / ROLE</span><input name="organization" autoComplete="organization" /></label>
        <label><span>DOMAIN *</span>
          <select name="domain" required defaultValue="">
            <option value="" disabled>Select operating domain</option>
            <option>Criminal Defense</option>
            <option>Healthcare Intelligence</option>
            <option>Consumer Advocacy</option>
            <option>Immigration & Humanitarian Advocacy</option>
            <option>Institutional Accountability</option>
            <option>Research / Partnership</option>
            <option>Other</option>
          </select>
        </label>
        <label><span>URGENCY *</span>
          <select name="urgency" required defaultValue="Standard">
            <option>Standard</option>
            <option>Time-sensitive</option>
            <option>Immediate deadline exists</option>
          </select>
        </label>
      </div>

      <label className="intake-wide"><span>INTELLIGENCE OBJECTIVE *</span><textarea name="objective" required rows={4} placeholder="What question or decision needs to be resolved?" /></label>
      <label className="intake-wide"><span>CURRENT RECORD / KNOWN FACTS *</span><textarea name="record" required rows={6} placeholder="Summarize available records, key gaps, and contradictions. Omit sensitive identifiers." /></label>
      <label className="intake-wide"><span>DESIRED OUTCOME *</span><textarea name="outcome" required rows={4} placeholder="What would a useful intelligence product help you decide, prepare, verify, or challenge?" /></label>

      <div className="intake-privacy-note">
        <strong>PUBLIC INTAKE BOUNDARY</strong>
        <p>This form prepares an email in your mail app; it does not send or upload records. Confirm a handling method before sharing sensitive information.</p>
      </div>

      <button type="submit" className="intake-submit">PREPARE INTAKE EMAIL ↗</button>
      {prepared && <p className="intake-prepared">Your mail client should open with the structured intake. If it does not, email support@systemintelligenceandstrategictactics.com.</p>}
    </form>
  );
}
