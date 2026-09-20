import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactRequest from "./ContactRequest";

export const metadata: Metadata = {
  title: "Contact Request | SIST",
  description: "Request a reply from SIST by email to discuss next steps.",
  alternates: { canonical: "/intake" },
};

export default function IntakePage() {
  return (
    <main className="min-h-screen bg-[#050810] px-4 pb-16 pt-28 text-white sm:px-8">
      <Navbar />
      <section className="mx-auto max-w-5xl">
        <p className="text-sm tracking-[0.2em] text-amber-300">SIST / FIRST CONTACT</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Let’s connect.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">Start with a contact request. SIST can reply to discuss your needs before you share details or records.</p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <ContactRequest />
          <aside className="self-start border border-white/10 p-6">
            <h2 className="text-lg font-semibold text-amber-100">What happens next</h2>
            <ol className="mt-5 list-decimal space-y-4 pl-5 text-base leading-7 text-gray-300">
              <li>Review and send your email.</li>
              <li>SIST reviews your contact request.</li>
              <li>Continue the conversation by email and arrange any further information needed.</li>
            </ol>
            <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-6 text-gray-400">This is an initial contact request. It does not confirm acceptance of a matter or guarantee a response before a deadline.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
