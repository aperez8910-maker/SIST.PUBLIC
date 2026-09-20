"use client";

import { type FormEvent, useState } from "react";

export default function ContactRequest() {
  const [opened, setOpened] = useState(false);
  const inputClass = "mt-2 w-full rounded-sm border border-white/20 bg-[#060a10] px-4 py-3 text-base text-white focus:outline-2 focus:outline-amber-300";

  function openDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const topic = String(data.get("topic") || "General inquiry");
    const subject = encodeURIComponent(`SIST contact request — ${topic}`);
    const body = encodeURIComponent(`Name: ${name}\nReply email: ${email}\nTopic: ${topic}\n\nPlease contact me about next steps. I will provide further details after we connect.`);
    window.location.href = `mailto:support@systemintelligenceandstrategictactics.com?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  return (
    <form onSubmit={openDraft} className="space-y-6 border border-amber-300/25 bg-white/[0.02] p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-amber-100">Request a reply</h2>
      <p id="contact-instructions" className="text-base leading-7 text-gray-300">
        Enter your contact information below. We will open a draft in your email app for you to review and send to SIST.
        Your information is not submitted to the website or Web3Forms.
      </p>
      <label className="block text-sm font-medium text-gray-200">
        Name (required)
        <input name="name" autoComplete="name" required maxLength={120} className={inputClass} aria-describedby="contact-instructions" />
      </label>
      <label className="block text-sm font-medium text-gray-200">
        Reply email (required)
        <input name="email" type="email" autoComplete="email" required maxLength={180} className={inputClass} />
      </label>
      <label className="block text-sm font-medium text-gray-200">
        General topic
        <select name="topic" className={inputClass} defaultValue="General inquiry">
          <option>General inquiry</option>
          <option>Request a consultation</option>
          <option>Research collaboration</option>
          <option>Partnership</option>
        </select>
      </label>
      <p className="text-sm leading-6 text-gray-400">
        Keep case details and evidence out of this first email. SIST can reply to discuss next steps and an appropriate way to share records.
        Email is handled by your email provider and SIST’s mailbox provider.
      </p>
      <button type="submit" className="w-full border border-amber-300/60 bg-amber-300/10 px-6 py-4 text-base font-semibold text-amber-200 hover:bg-amber-300/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300">
        Open email draft
      </button>
      {opened && <p role="status" className="text-sm leading-6 text-amber-100">An email draft was requested. Nothing has been sent by this website. Review and send it in your email app. If no app opened, use the address below in your usual email service.</p>}
      <p className="text-sm leading-6 text-gray-400">
        You can also email <a href="mailto:support@systemintelligenceandstrategictactics.com" className="break-all text-amber-200 underline underline-offset-4">support@systemintelligenceandstrategictactics.com</a> directly.
      </p>
      <noscript><p className="text-sm text-amber-100">To contact SIST, use the email address above. This draft helper requires JavaScript.</p></noscript>
    </form>
  );
}
