"use client";

import { motion } from "framer-motion";
import {
  Code,
  Github,
  Globe,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import { data } from "@/lib/data";
import type { SocialLink } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { CopyButton } from "@/components/ui/CopyButton";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  github: Github,
  x: XIcon,
  twitter: XIcon,
  code: Code,
  globe: Globe,
  external: ExternalLink,
};

function getSocialIcon(social: SocialLink) {
  return iconMap[social.icon] || Globe;
}

export function Contact() {
  const { contact, socials, personal } = data;

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cyan-950/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          tag="Contact"
          title="Let's Build Something Intelligent"
          subtitle="Open to AI/ML engineering roles, collaborations, and challenging projects."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <GlassCard hover={false}>
            <h3 className="mb-6 text-xl font-bold text-white">Get In Touch</h3>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-500/10 p-2">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-sm text-white hover:text-cyan-400">
                      {contact.email}
                    </a>
                  </div>
                </div>
                <CopyButton text={contact.email} />
              </div>

              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-violet-500/10 p-2">
                    <Phone className="h-5 w-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Phone</p>
                    <a href={`tel:${contact.phone}`} className="text-sm text-white hover:text-cyan-400">
                      {contact.phone}
                    </a>
                  </div>
                </div>
                <CopyButton text={contact.phone} />
              </div>

              {contact.location && (
                <p className="text-sm text-slate-400">
                  📍 {contact.location} · {contact.availability}
                </p>
              )}
            </div>

            <motion.a
              href={`mailto:${contact.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 py-4 font-medium text-white shadow-lg shadow-cyan-500/25"
            >
              <Mail className="h-5 w-5" />
              Send Message
            </motion.a>
          </GlassCard>

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Connect</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {socials.filter((social) => social.url).map((social, index) => {
                const Icon = getSocialIcon(social);
                return (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass holographic-border group flex items-center gap-4 rounded-2xl p-5 transition-shadow hover:glow-accent"
                  >
                    <div className="rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-3 transition-colors group-hover:from-cyan-500/30 group-hover:to-violet-500/30">
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{social.name}</p>
                      <p className="text-xs text-slate-500">View profile</p>
                    </div>
                    <ExternalLink className="ml-auto h-4 w-4 text-slate-600 transition-colors group-hover:text-cyan-400" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-white/5 pt-8 text-center">
        <p className="font-mono text-sm text-slate-500">
          © {new Date().getFullYear()} {personal.name} · {personal.position}
        </p>
        <p className="mt-2 font-mono text-xs text-slate-600">
          Built with Next.js · Three.js · Framer Motion
        </p>
      </footer>
    </section>
  );
}
