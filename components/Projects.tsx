"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Banking System",
    description:
      "Full-stack web application with user login, registration, and core banking flows. Built to practice end-to-end development and secure session handling.",
    tags: ["Full-stack", "Auth", "Login / Register"],
  },
  {
    title: "AI Safety — Password Strength",
    description:
      "Trained small models on public datasets to analyze the relationship between passwords and user habits (e.g., site context, personal patterns). The system evaluates password safety and outputs a clear risk assessment.",
    tags: ["ML", "NLP", "Security", "Small models"],
  },
  {
    title: "Contract Review (Capgemini)",
    description:
      "RAG workflow on the Dify platform for automated review of commercial contracts. Helps users quickly search clauses, retrieve relevant content, and list supporting evidence.",
    tags: ["Dify", "RAG", "Workflow", "Contract auditing"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-100 mb-14"
        >
          Projects
        </motion.h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {projects.map((proj, i) => (
            <motion.article
              key={proj.title}
              variants={item}
              className="rounded-xl bg-[#262626] border border-gray-600/60 p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-[#333] text-gray-400 text-xs border border-gray-600/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
