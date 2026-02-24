"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-100 mb-6"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 leading-relaxed space-y-4"
        >
          <p>
            I&apos;m a junior at Kean University focused on AI and natural language processing. 
            I like building tools that make workflows smarter—from contract review to password safety—and 
            I&apos;m especially interested in how small models and RAG can deliver practical value.
          </p>
          <p>
            When I&apos;m not coding, I keep exploring new datasets and frameworks to turn ideas into 
            working demos. Feel free to reach out or chat with my AI assistant below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
