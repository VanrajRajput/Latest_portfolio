"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Trophy } from "lucide-react";
import { data } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Experience() {
  const { experience } = data;

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          tag="Experience"
          title="Professional Journey"
          subtitle="Building production-grade AI systems that scale."
        />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent md:left-1/2 md:-translate-x-px" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative mb-12 flex flex-col md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden w-1/2 md:block" />

              <div className="absolute left-6 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2">
                <motion.div
                  whileHover={{ scale: 1.5 }}
                  className="h-4 w-4 rounded-full border-2 border-cyan-400 bg-cyan-400/30 shadow-lg shadow-cyan-500/50"
                />
              </div>

              <div className="w-full pl-12 md:w-1/2 md:pl-0">
                <GlassCard delay={index * 0.1} className="md:mx-8">
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="mt-1 flex items-center gap-2 text-cyan-400">
                        <Briefcase className="h-4 w-4" />
                        {exp.company}
                      </p>
                    </div>
                    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-mono text-xs text-violet-300">
                      {exp.duration}
                    </span>
                  </div>

                  {exp.location && (
                    <p className="mb-4 flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </p>
                  )}

                  <div className="mb-4">
                    <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-500">
                      Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-500">
                      <Trophy className="h-3.5 w-3.5" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-emerald-300/80">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
