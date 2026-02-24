// components/Hero.tsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center relative pt-14">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold tracking-tight">
          Hello, I'm <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">Yuan Liu</span>.
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-400 max-w-lg mx-auto"
        >
          Junior at Kean University. 
          Focusing on <span className="text-gray-100">AI/NLP</span> and building the next generation of intelligent tools.
        </motion.p>
      </motion.div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[120px] -z-10" />
    </section>
  );
}