"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const BackgroundEffects = dynamic(() => import("@/components/BackgroundEffects"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
    </main>
  );
}
