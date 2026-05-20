"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Box } from "lucide-react";

const projectsData = [
  {
    title: "ISP Monitoring Dashboard",
    description: "A real-time dashboard for monitoring network uptime, latency, and bandwidth usage. Built with Next.js, WebSockets, and Recharts.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
    image: "/api/placeholder/600/400", // We will use a placeholder
    github: "#",
    demo: "#",
  },
  {
    title: "Fiber Fault Tracking System",
    description: "An internal tool to log, track, and assign fiber optic cuts and faults to field technicians with geolocation mapping.",
    techStack: ["React", "Node.js", "MongoDB", "Leaflet.js"],
    image: "/api/placeholder/600/400",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A highly interactive, modern portfolio designed to showcase the intersection of telecommunications and frontend engineering.",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/api/placeholder/600/400",
    github: "#",
    demo: "#",
  },
  {
    title: "Network Visualization Tool",
    description: "Interactive graph visualizer for enterprise LAN/WAN topologies using D3.js and React.",
    techStack: ["React", "D3.js", "Tailwind CSS"],
    image: "/api/placeholder/600/400",
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden border border-card-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 bg-foreground/5 flex items-center justify-center overflow-hidden">
                {/* Fallback pattern since we don't have actual images yet */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <Box className="w-20 h-20 text-foreground/20 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-foreground/70 mb-6 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, j) => (
                    <span key={j} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Code2 size={16} /> Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
