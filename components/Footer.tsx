"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="w-full bg-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Top */}
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

            <div>
              <h3 className="font-serif text-4xl mb-4">
                BloomLife
              </h3>

              <h3 className="font-serif text-2xl mb-4">
                Dr. Maya Reynolds, PsyD
              </h3>

              <p className="text-textMuted leading-relaxed">
                123th Street 45 W,
                <br />
                Santa Monica, CA 90401
                <br />
                <br />
                <a href="mailto:email@example.com" className="hover:underline">
                  email@example.com
                </a>
                <br />
                <a href="tel:5555555555" className="hover:underline">
                  (555) 555-5555
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-4">
                Hours
              </h4>

              <p className="text-textMuted">
                Monday – Friday
                <br />
                10am – 6pm
              </p>
            </div>

            <div className="md:text-right">
              <h4 className="font-medium mb-4">
                Find
              </h4>

              <nav className="text-textMuted space-y-1">
                <a href="/home" className="block hover:underline">
                  Home
                </a>
                <a href="/contact" className="block hover:underline">
                  Contact
                </a>
                <a href="/blog" className="block hover:underline">
                  Blog
                </a>
              </nav>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom */}
      <section className="w-full">
        <div className="max-w-5xl mx-auto px-6 py-10 text-center">
          <p className="text-xs text-textMuted space-x-4 mb-4">
            <a href="/privacy-policy" className="hover:underline">
              Privacy & Cookies Policy
            </a>
            <a href="/good-faith-estimate" className="hover:underline">
              Good Faith Estimate
            </a>
            <a href="/terms-conditions" className="hover:underline">
              Website Terms & Conditions
            </a>
            <a href="/disclaimer" className="hover:underline">
              Disclaimer
            </a>
          </p>

          <p className="text-xs text-textMuted">
            All Rights Reserved © 2024 Grow My Therapy, LLC.
          </p>
        </div>
      </section>
    </motion.footer>
  );
}
