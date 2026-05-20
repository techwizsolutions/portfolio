"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML & CSS", level: 95 },
    ],
  },
  {
    category: "Networking & IT",
    skills: [
      { name: "Fiber Optics", level: 95 },
      { name: "Network Troubleshooting", level: 90 },
      { name: "Wireshark", level: 85 },
      { name: "Nmap", level: 80 },
      { name: "Cybersecurity Fundamentals", level: 75 },
      { name: "System Administration", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {skillsData.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="glass p-8 rounded-2xl border border-card-border"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-primary rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 blur-sm" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
