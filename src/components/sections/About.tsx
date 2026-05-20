"use client";

import { motion } from "framer-motion";
import { Network, Code2, Server } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-lg text-foreground/70 leading-relaxed"
          >
            <p>
              My journey began in the world of telecommunications. From splicing fiber optics in the field to configuring enterprise networks, I developed a deep understanding of how data physically moves across the globe.
            </p>
            <p>
              While working as a Field Technician and IT Specialist, I realized that the user-facing side of these networks—the applications people interact with daily—fascinated me just as much as the infrastructure powering them.
            </p>
            <p>
              Today, I&apos;m leveraging my rigorous troubleshooting skills and systems-level thinking to build modern, responsive web applications. I bridge the gap between backend reliability and frontend aesthetics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            {[
              {
                icon: Network,
                title: "Network Infrastructure",
                desc: "Expertise in Fiber Optics, LAN/WAN, and network diagnostics.",
              },
              {
                icon: Code2,
                title: "Frontend Engineering",
                desc: "Building dynamic interfaces with React, Next.js, and Tailwind CSS.",
              },
              {
                icon: Server,
                title: "IT Operations",
                desc: "System administration, technical support, and troubleshooting.",
              },
            ].map((item, i) => (
              <div key={i} className="glass p-6 rounded-2xl flex gap-4 items-start border border-card-border hover:border-primary/50 transition-colors">
                <div className="p-3 bg-primary/10 rounded-lg text-primary shrink-0">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-foreground/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
