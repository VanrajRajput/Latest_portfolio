"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { data, getSkillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Skills() {
  const categories = getSkillCategories();
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");

  const displayedSkills =
    activeCategory === "all"
      ? Object.entries(data.skills)
      : [[activeCategory, data.skills[activeCategory]]] as [string, string[]][];

  const allSkillsFlat =
    activeCategory === "all"
      ? Object.values(data.skills).flat()
      : data.skills[activeCategory] || [];

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          tag="Skills"
          title="Technical Arsenal"
          subtitle="Technologies and tools powering AI/ML engineering at scale."
        />

        <div className="mb-10 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-xs transition-all",
              activeCategory === "all"
                ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300"
                : "border-white/10 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-400"
            )}
          >
            All ({Object.values(data.skills).flat().length})
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full border px-4 py-2 font-mono text-xs transition-all",
                activeCategory === category
                  ? "border-cyan-500/50 bg-cyan-500/20 text-cyan-300"
                  : "border-white/10 text-slate-400 hover:border-cyan-500/30 hover:text-cyan-400"
              )}
            >
              {category} ({data.skills[category].length})
            </button>
          ))}
        </div>

        <div className="relative mb-12 flex min-h-[200px] flex-wrap items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-8">
          <AnimatePresence mode="popLayout">
            {allSkillsFlat.map((skill, index) => {
              const size = 0.8 + (skill.length % 5) * 0.1;
              return (
                <motion.span
                  key={skill}
                  layout
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: size,
                    y: [0, -8, 0],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.02,
                    y: { duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: size + 0.15, color: "#00d4ff" }}
                  className="cursor-default rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 font-mono text-sm text-slate-300 transition-colors hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-300"
                >
                  {skill}
                </motion.span>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedSkills.map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.05 }}
              className="glass holographic-border rounded-2xl p-6"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
