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
    <nav className="fixed top-0 z-50 w-full border-b border-gray-800 bg-black/90 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


        <Link
          href="/"
          className="flex items-center gap-3"
        >

          <img
            src="/logo.png"
            alt="SIST Logo"
            className="h-10 w-auto"
          />

          <span className="font-bold tracking-[0.3em]">
            SIST
          </span>

        </Link>


        {/* Desktop Navigation */}

        <div className="hidden gap-8 text-sm md:flex">

          {links.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-gray-400"
            >
              {link.name}
            </Link>

          ))}

        </div>


        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>


      </div>


      {/* Mobile Menu */}

      {open && (

        <div className="border-t border-gray-800 px-6 py-6 md:hidden">

          <div className="flex flex-col gap-5">

            {links.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wider"
              >
                {link.name}
              </Link>

            ))}

          </div>

        </div>

      )}

    </nav>
  );
}
