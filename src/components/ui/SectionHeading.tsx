"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ tag, title, subtitle, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12 md:mb-16", className)}
    >
      <span className="mb-3 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan-400">
        {tag}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-slate-400 md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
