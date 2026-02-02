"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <motion.header
        className="w-full fixed top-0 z-50 bg-white/55 backdrop-blur shadow-md"
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Link href="/" className="font-serif text-xl tracking-wide">
              BloomLife
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Blog", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-sm tracking-wide text-black/80 hover:text-black"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-16 px-6 flex items-center justify-between">
              <span className="font-serif text-xl">Lilac Template</span>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
