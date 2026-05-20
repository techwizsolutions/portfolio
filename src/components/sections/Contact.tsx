"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary md:mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let&apos;s build something great.</h3>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Whether you need a modern web application, network troubleshooting, or someone who understands both the infrastructure and the interface, I&apos;m ready to help.
            </p>

            <div className="space-y-6">
              <a href="mailto:stephen@example.com" className="flex items-center gap-4 glass p-4 rounded-xl border border-card-border hover:border-primary/50 transition-colors group">
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Email</div>
                  <div className="font-medium">stevenmutili@gmail.com</div>
                </div>
              </a>

              <a href="https://wa.link/c0goxn" target="_blank" rel="noreferrer" className="flex items-center gap-4 glass p-4 rounded-xl border border-card-border hover:border-green-500/50 transition-colors group">
                <div className="p-3 bg-green-500/10 rounded-lg text-green-500 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">WhatsApp</div>
                  <div className="font-medium">+254 716 751 847</div>
                </div>
              </a>
              
              <div className="flex items-center gap-4 glass p-4 rounded-xl border border-card-border">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-foreground/60">Phone</div>
                  <div className="font-medium">+254 716 751 847</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-2xl border border-card-border space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Name</label>
              <input type="text" id="name" className="w-full bg-background/50 border border-card-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
              <input type="email" id="email" className="w-full bg-background/50 border border-card-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full bg-background/50 border border-card-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button className="w-full py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
