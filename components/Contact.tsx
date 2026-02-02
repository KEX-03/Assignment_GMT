"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="w-full bg-accent/60">
      <motion.div
        className="max-w-4xl mx-auto px-6 py-28 text-center"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.h3
          className="font-serif text-3xl md:text-4xl text-black mb-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Begin at your own pace.
        </motion.h3>

        <motion.p
          className="text-black-300 leading-relaxed max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Therapy doesn’t require having everything figured out. If you’re feeling overwhelmed or stretched thin, support is available.
          If you’re ready to take a first step toward feeling more grounded, supported, and at ease, I invite you to reach out.
        </motion.p>

        <motion.p
          className="text-black-300 leading-relaxed max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          You’re welcome to contact me to schedule an initial consultation and explore whether working together feels like a good fit.
        </motion.p>

        <motion.a
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black font-medium hover:text-white hover:bg-primary transition"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          whileHover={{ y: -2 }}
        >
          Request a Consultation
        </motion.a>
      </motion.div>
    </section>
  );
}
