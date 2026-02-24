"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  const technologies = ["Java", "Python", "R", "JavaScript", "TypeScript"];
  const software = [
    "Visual Studio Code",
    "Visual Paradigm",
    "IntelliJ",
    "PyCharm",
    "RStudio",
    "LM Studio",
    "Docker",
  ];
  const operatingSystems = [
    "Windows",
    "macOS",
    "Linux (Ubuntu, Fedora, Kali)",
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-100 mb-14"
        >
          Skills & Tools
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-12 sm:grid-cols-1 md:grid-cols-3"
        >
          <motion.div
            variants={item}
            className="rounded-xl bg-[#262626] border border-gray-600/60 p-6 shadow-lg"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400/90 mb-4">
              Programming Languages
            </h3>
            <ul className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <li
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-[#333] text-gray-300 text-sm border border-gray-600/50"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-xl bg-[#262626] border border-gray-600/60 p-6 shadow-lg"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400/90 mb-4">
              Software
            </h3>
            <ul className="flex flex-wrap gap-2">
              {software.map((sw) => (
                <li
                  key={sw}
                  className="px-3 py-1.5 rounded-lg bg-[#333] text-gray-300 text-sm border border-gray-600/50"
                >
                  {sw}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={item}
            className="rounded-xl bg-[#262626] border border-gray-600/60 p-6 shadow-lg md:col-span-1"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400/90 mb-4">
              Operating Systems
            </h3>
            <ul className="flex flex-wrap gap-2">
              {operatingSystems.map((os) => (
                <li
                  key={os}
                  className="px-3 py-1.5 rounded-lg bg-[#333] text-gray-300 text-sm border border-gray-600/50"
                >
                  {os}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
