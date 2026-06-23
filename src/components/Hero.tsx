"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { data } from "@/lib/data";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-32 w-32 animate-pulse rounded-full bg-cyan-500/20" />
    </div>
  ),
});

export function Hero() {
  const { personal } = data;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5"
          >
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="font-mono text-xs text-cyan-400">{"Let's Build"}</span>
            </motion.div>

          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-white">{personal.name}</span>
          </h1>

          <p className="mb-6 text-xl font-medium text-gradient md:text-2xl">
            {personal.position}
          </p>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            {personal.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/25"
            >
              View Projects
            </motion.a>
            <motion.a
              href={personal.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white hover:glow-accent"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-cyan-400 hover:glow-accent"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 hidden lg:block"
          >
            <a href="#experience" className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400">
              <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 h-[400px] lg:order-2 lg:h-[600px]"
        >
          <div className="absolute inset-0 z-10">
            <HeroScene className="h-full w-full" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
          >
            <div className="glass-strong holographic-border relative h-28 w-28 overflow-hidden rounded-2xl md:h-36 md:w-36">
              <Image
                src={personal.profileImage}
                alt={personal.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
