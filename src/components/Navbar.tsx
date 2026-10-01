"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { name: "SYSTEM", href: "/system" },
  { name: "DIVISIONS", href: "/divisions" },
  { name: "COUNCIL", href: "/council" },
  { name: "BRIEFINGS", href: "/briefings" },
  { name: "RESEARCH", href: "/research" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sist-global-nav" aria-label="Primary navigation">
      <div className="sist-global-nav-inner">
        <Link href="/" className="sist-global-brand" aria-label="SIST home">
          <Image src="/logo.png" alt="SIST Logo" width={58} height={58} priority />
          <span>
            <b>SIST™</b>
            <small>SYSTEM INTELLIGENCE & STRATEGIC TACTICS</small>
          </span>
        </Link>

        <div className="sist-global-links">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link key={link.href} href={link.href} className={active ? "is-active" : ""} aria-current={active ? "page" : undefined}>
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link href="/contact" className="sist-global-briefing">REQUEST BRIEFING</Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="sist-global-trigger"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open && (
        <div className="sist-global-mobile">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>REQUEST BRIEFING</Link>
        </div>
      )}
    </nav>
  );
}
