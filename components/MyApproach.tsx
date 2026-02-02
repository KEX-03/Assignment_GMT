"use client";

import { motion } from "framer-motion";

export function MyApproach() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            className="w-full h-130 lg:h-180 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1664378617229-c61c6fa13d91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex flex-col gap-6 max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
          >
            <motion.h2
              className="font-serif text-4xl text-primary leading-tight"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              A Grounded, Collaborative Approach to Therapy
            </motion.h2>

            <motion.p
              className="text-textMuted leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              Therapy should feel both supportive and practical. 
              My approach balances structure with reflection, helping clients feel held without being rushed or overwhelmed.
            </motion.p>

            <motion.p
              className="text-textMuted leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              I draw from well-established, research-supported methods while remaining responsive to each client’s unique needs. 
              Sessions focus on:
            </motion.p>

            {/* List */}
            <motion.ul
              className="list-disc pl-6 text-textMuted space-y-2"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              {[
                "Building emotional and physiological regulation",
                "Developing insight into recurring patterns",
                "Strengthening internal resilience",
                "Creating tools that extend beyond the therapy room",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -8 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className="text-textMuted leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              Rather than focusing only on symptom relief, therapy becomes a process of understanding yourself more deeply and responding to life with greater flexibility.
            </motion.p>

            <motion.a
              href="/contact"
              className="inline-flex justify-center items-center mt-6 px-10 py-4 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.15, ease: "easeOut" },
                },
              }}
            >
              Schedule a Free Consultation
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
