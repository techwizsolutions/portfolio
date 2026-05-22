"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Certificate } from "node:crypto";

const experienceData = [
  {
    role: "Infrastructure Fiber Technician",
    company: "Syokinet Solutions Ltd · Contract",
    period: "Sep 2025 - Present",
    location: "Nairobi County, Kenya · On-site",
    description:
      "Responsible for the deployment and maintenance of fiber optic infrastructure in Nairobi. Handles end-to-end fiber installations, splicing, testing, and troubleshooting to ensure reliable connectivity for enterprise and residential clients.",
  },
  {
    role: "Network Field Technician",
    company: "iNet Africa · Contract",
    period: "Jul 2022 - Jul 2025",
    location: "Malindi, Kilifi County, Kenya · On-site",
    description:
      "Conducted network troubleshooting and maintenance for fiber and wireless internet services. Installed and configured networking equipment such as routers, switches, and access points. Managed router configuration and server administration to ensure optimal network performance.",
  },
  {
    role: "IT Support Intern",
    company: "Kenafric Industries Ltd · Internship",
    period: "Sep 2021 - Dec 2021",
    location: "Babadogo, Nairobi · On-site",
    description:
      "Responsible for troubleshooting technical issues, assisting with software updates, network support, and hardware setup. Provided helpdesk support, documented IT requests, and helped maintain system security across the corporate environment.",
  },
];

const educationData = [
  {
    degree: "BSc Telecommunications & Information Technology",
    institution: "Pwani University",
    period: "July 2018 to February 2022",
  },
  {
    Certificate: "Fiber Optics Technology (FOT) Training",
    institution: "VISCAR INDUSTRIAL CAPACITY LIMITED",
    period: "20th may to 23rd may, 2026"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Briefcase className="text-primary" /> Work Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-card-border before:to-transparent">
              {experienceData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-card-border bg-black text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-card-border hover:border-primary/50 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                      <h4 className="font-bold text-lg">{item.role}</h4>
                      <span className="text-sm text-primary flex items-center gap-1">
                        <Calendar size={14} /> {item.period}
                      </span>
                    </div>
                    <div className="text-foreground/80 font-medium mb-1">{item.company}</div>
                    <div className="text-foreground/50 text-xs flex items-center gap-1 mb-3">
                      <MapPin size={12} /> {item.location}
                    </div>
                    <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2 mt-12 md:mt-0">
              <Briefcase className="text-primary" /> Education & Certifications
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-card-border before:to-transparent">
              {educationData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-card-border bg-black text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-card-border hover:border-primary/50 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                      <h4 className="font-bold text-lg">{item.degree}</h4>
                      <span className="text-sm text-primary flex items-center gap-1">
                        <Calendar size={14} /> {item.period}
                      </span>
                    </div>
                    <div className="text-foreground/80 font-medium">{item.institution}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
