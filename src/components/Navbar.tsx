"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "SYSTEM", href: "/system" },
    { name: "DIVISIONS", href: "/divisions" },
    { name: "BRIEFINGS", href: "/briefings" },
    { name: "RESEARCH", href: "/research" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-amber-300/15 bg-[#020304]/85 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="sist-brand-lockup">
            <img src="/logo.png" alt="SIST Logo" className="sist-logo sist-logo-gold h-9 w-auto" />
          </span>
          <span className="font-bold tracking-[0.35em] text-amber-100">SIST™</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[10px] font-semibold tracking-[0.28em] text-gray-300 transition hover:text-amber-300">
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="ml-2 border border-amber-300/50 px-5 py-2 text-[9px] font-bold tracking-[0.32em] text-amber-300 transition hover:bg-amber-300/10">
            REQUEST BRIEFING
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Link href="/contact" className="border border-amber-300/50 px-4 py-2 text-[9px] font-bold tracking-[0.28em] text-amber-300">
            BRIEFING
          </Link>
          <button onClick={() => setOpen(!open)} className="text-xl text-amber-300" aria-label="Toggle Menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-amber-300/10 bg-[#020304]/95 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm tracking-[0.22em] text-gray-300 hover:text-amber-300">
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 border border-amber-300/50 px-5 py-3 text-center text-[10px] font-bold tracking-[0.3em] text-amber-300">
              REQUEST BRIEFING
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
