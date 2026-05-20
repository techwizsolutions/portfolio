"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "glass border-card-border py-3 shadow-lg" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Terminal className="text-primary group-hover:text-primary-dark transition-colors" size={28} />
          <span className="font-bold text-xl tracking-tight">
            Tech<span className="text-primary">Wiz</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all font-medium text-sm"
          >
            Hire Me
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 glass border-b border-card-border shadow-xl flex flex-col items-center py-6 gap-6"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 mt-2 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Hire Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
