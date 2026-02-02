"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const backgroundItems = [
  {
    title: "Education",
    content:
      "Doctor of Psychology (PsyD) in Clinical Psychology, with advanced training in trauma-informed care and evidence-based treatment approaches.",
  },
  {
    title: "Licensure",
    content:
      "Licensed Clinical Psychologist in California with a focus on providing compassionate, evidence-based care to adults.",
  },
  {
    title: "Certifications",
    content:
      "Ongoing training in EMDR, mindfulness-based interventions, and body-oriented therapeutic techniques.",
  },
];

export function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-secondary">
      <motion.div
        className="max-w-3xl mx-auto px-6 py-24"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h3 className="text-center font-serif text-3xl text-primary mb-12">
          My Professional Background
        </h3>

        <div className="divide-y divide-borderSubtle">
          {backgroundItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.title} className="py-4">
                {/* Trigger */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left text-textPrimary font-medium cursor-pointer"
                >

                  <span>{item.title}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="text-lg"
                  >
                    +
                  </motion.span>
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.28, ease: "easeOut" },
                        opacity: { duration: 0.2, ease: "easeOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-textMuted max-w-sm leading-relaxed">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
