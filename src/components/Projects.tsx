"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { data } from "@/lib/data";
import type { Project } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass holographic-border group relative overflow-hidden rounded-2xl transition-shadow duration-300 hover:glow-accent"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 backdrop-blur-sm"
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-white hover:bg-cyan-500/30"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-3 text-white hover:bg-cyan-500/30"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-xs text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.features.length > 0 && (
          <ul className="mb-4 space-y-1">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex gap-2 text-xs text-slate-500">
                <span className="text-cyan-500">▸</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-lg font-bold text-gradient">{metric.value}</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { projects } = data;

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          tag="Projects"
          title="AI Engineering Portfolio"
          subtitle="Production systems, research implementations, and agentic architectures."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
