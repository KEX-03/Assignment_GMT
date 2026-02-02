"use client";

import { motion } from "framer-motion";

const specialties = [
  {
    title: "Anxiety & Stress Therapy",
    description:
      "Support for adults experiencing persistent worry, overthinking, panic symptoms, or chronic stress. This work focuses on understanding how anxiety shows up both mentally and physically, and developing tools to feel more grounded, regulated, and present in daily life. Sessions integrate evidence-based approaches such as CBT, mindfulness, and body-oriented techniques.",
    image:
      "https://plus.unsplash.com/premium_photo-1664284793428-df1f205642f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Trauma-Informed Therapy",
    description:
      "Therapy for adults impacted by past experiences, including single-incident trauma or long-standing patterns related to childhood, relationships, or chronic stress. This approach is paced carefully, with an emphasis on safety, stabilization, and nervous system regulation. Trauma work may include EMDR and somatic practices to support healing without re-traumatization.",
    image:
      "https://plus.unsplash.com/premium_photo-1672292536199-7a4cf2b78318?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Burnout & High-Achiever Support",
    description:
      "Designed for professionals, creatives, and high-functioning individuals experiencing emotional exhaustion, perfectionism, or internal pressure. Therapy provides space to slow down, reconnect with yourself, and explore more sustainable ways of working and living—without sacrificing your values or well-being.",
    image:
      "https://plus.unsplash.com/premium_photo-1710361778521-255f338ad5d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Services() {
  return (
    <section className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">

        <motion.p
          className="text-center font-serif text-4xl text-primary mb-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Areas I support
        </motion.p>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {specialties.map((item) => (
            <motion.li
              key={item.title}
              className="border border-borderSubtle bg-accent/30 p-6 flex flex-col justify-between"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, ease: "easeOut" },
                },
              }}
              whileHover={{
                  transform: "translateY(-4px)",
                }}
              transition={{
                  type: "tween",
                  duration: 0.18,
                  ease: "easeOut",
                }}
            >

              <div>
                <h3 className="font-serif text-2xl text-primary">
                  {item.title}
                </h3>

                <p className="text-textMuted mt-6 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

      </div>
    </section>
  );
}
