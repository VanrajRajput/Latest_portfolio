"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { data } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Certifications() {
  const { certifications } = data;

  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          tag="Certifications"
          title="Credentials & Certifications"
          subtitle="Validated expertise in data science, machine learning, and backend engineering."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <GlassCard key={cert.id} delay={index * 0.1} className="flex flex-col">
              <div className="mb-4 flex items-start gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/5">
                  <Image
                    src={cert.logo}
                    alt={cert.organization}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold leading-snug text-white">{cert.name}</h3>
                  <p className="mt-1 text-sm text-cyan-400">{cert.organization}</p>
                </div>
              </div>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
                {cert.description}
              </p>

              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                {cert.issueDate ? (
                  <span className="font-mono text-xs text-slate-500">{cert.issueDate}</span>
                ) : (
                  <span className="flex items-center gap-1 font-mono text-xs text-emerald-400/70">
                    <Award className="h-3 w-3" />
                    Verified
                  </span>
                )}

                {cert.credentialLink ? (
                  <motion.a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs text-cyan-400 hover:bg-cyan-500/20"
                  >
                    Verify
                    <ExternalLink className="h-3 w-3" />
                  </motion.a>
                ) : (
                  <span className="rounded-lg border border-slate-700/50 px-3 py-1.5 text-xs text-slate-500">
                    Credential link pending
                  </span>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
