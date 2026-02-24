"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-100 mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-8"
        >
          Open to internships, collaborations, or a quick chat.
        </motion.p>
        <motion.a
          href="mailto:liuyuan@kean.edu"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#262626] border border-gray-600 text-gray-200 hover:border-emerald-500/60 hover:text-emerald-400 transition-colors"
        >
          <span aria-hidden>✉</span>
          liuyuan@kean.edu
        </motion.a>
      </div>
    </section>
  );
}
