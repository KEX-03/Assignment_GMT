"use client";

import { useState } from "react";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full fixed top-0 z-50 bg-white/55 backdrop-blur shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">

          {/* Left — Mobile Burger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col justify-center gap-1.5"
            aria-label="Open menu"
          >
            <span className="block w-5 h-px bg-black" />
            <span className="block w-5 h-px bg-black" />
            <span className="block w-5 h-px bg-black" />
          </button>

          {/* Center / Left — Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Link
              href="/"
              className="font-serif text-xl tracking-wide"
            >
              BloomLife
            </Link>
          </div>

          {/* Right — Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/blog"
              className="text-sm tracking-wide hover:opacity-70"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-wide hover:opacity-70"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="h-16 px-6 flex items-center justify-between">
            <span className="font-serif text-xl">
              Lilac Template
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-sm"
            >
              Close
            </button>
          </div>

          <nav className="mt-16 flex flex-col gap-8 px-6 text-lg">
            <Link href="/blog" onClick={() => setOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
