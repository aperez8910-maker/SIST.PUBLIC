"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "SYSTEM", href: "/system" },
    { name: "DIVISIONS", href: "/divisions" },
    { name: "AI COUNCIL", href: "/council" },
    { name: "INTERACTIVE DEMO", href: "/interactive" },
    { name: "RESEARCH", href: "/research" },
    { name: "BRIEFINGS", href: "/briefings" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-amber-300/10 bg-[#020304]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <span className="sist-brand-lockup">
            <img src="/logo.png" alt="SIST Logo" className="sist-logo sist-logo-gold h-10 w-auto" />
          </span>
          <span className="font-bold tracking-[0.3em] text-amber-100">SIST</span>
        </Link>
        <div className="hidden gap-8 text-sm md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-400 transition hover:text-amber-300">
              {link.name}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="text-2xl text-amber-300 md:hidden" aria-label="Toggle Menu">{open ? "✕" : "☰"}</button>
      </div>
      {open && (
        <div className="border-t border-amber-300/10 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm tracking-wider text-gray-300 hover:text-amber-300">{link.name}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
