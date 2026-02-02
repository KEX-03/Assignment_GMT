"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do you take insurance?",
    answer:
      "I am an out-of-network provider. I can provide documentation for clients who wish to seek reimbursement from their insurance company.",
  },
  {
    question: "What are your rates?",
    answer:
      "Session fees vary depending on the type of service. Please reach out directly for current rates and availability.",
  },
  {
    question: "Do you have any openings?",
    answer:
      "Availability changes periodically. I encourage you to contact me to inquire about current openings or to join a waitlist.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <motion.div
            className="w-full max-w-md h-110 overflow-hidden rounded-3xl"
            initial={{ opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1637580678284-da66cab7cd95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="FAQs"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* FAQ Content */}
          <motion.div
            className="max-w-xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-4xl text-primary mb-10">
              FAQs
            </h2>

            <div className="divide-y divide-borderSubtle">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={item.question} className="py-4">
                    {/* Question */}
                    <button
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      className="w-full flex items-center justify-between text-left text-textPrimary font-medium"
                    >
                      <span className="pl-2">{item.question}</span>

                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="ml-4 text-xl"
                      >
                        +
                      </motion.span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.3, ease: "easeOut" },
                            opacity: { duration: 0.2, ease: "easeOut" },
                          }}
                          className="overflow-hidden"
                        >
                          <p className="pl-2 pt-4 text-textMuted leading-relaxed max-w-sm">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
