"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary mb-8"
          >
            <Terminal size={16} />
            <span className="text-sm font-medium tracking-wide uppercase">System Online</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
          >
            Building Bridges Between <br className="hidden md:block" />
            <span className="text-gradient">Networks & Web</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Hi, I&apos;m <span className="text-foreground font-semibold">Stephen Mutili</span>. A Telecommunications & Network Engineer transitioning into modern Frontend Development. I design resilient systems and craft seamless digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-card-border hover:bg-white/5 transition-all flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
