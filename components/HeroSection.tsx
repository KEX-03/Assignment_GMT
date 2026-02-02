"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen mt-10 mb-10 flex items-center justify-center bg-white overflow-hidden">
      <div className="max-w-7xl w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1], // soft, natural ease
          }}
        >
          <div className="relative w-full min-h-[85vh] overflow-hidden rounded-3xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1665990294064-d601f29f2fca?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Therapy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <div>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              Therapy for Anxiety, Trauma, and Burnout in Santa Monica, CA
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              Compassionate, evidence-based therapy for adults who appear capable on the outside—but feel overwhelmed, tense, or emotionally exhausted within.
            </motion.p>
          </div>

          <motion.div
            className="flex justify-center items-center"
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <a
              href="#"
              className="inline-block mt-4 px-8 py-3 rounded-full bg-accent text-white text-sm tracking-wide hover:bg-primary/90 transition"
            >
              Connect with me
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
