import Link from "next/link";
import { Terminal, Code2, Briefcase, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-[#050505] py-12 mt-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        <Link href="/" className="flex items-center gap-2 mb-6">
          <Terminal className="text-primary" size={24} />
          <span className="font-bold text-xl tracking-tight">
            Tech<span className="text-primary">Wiz</span>
          </span>
        </Link>
        
        <p className="text-foreground/60 text-center max-w-md mb-8">
          Bridging the gap between robust telecommunications infrastructure and modern, dynamic web experiences.
        </p>

        <div className="flex gap-4 mb-8">
          {[
            { icon: Code2, href: "https://github.com" },
            { icon: Briefcase, href: "https://linkedin.com" },
            { icon: Globe, href: "https://twitter.com" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-colors border border-card-border"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        <div className="text-sm text-foreground/40 flex flex-col md:flex-row items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Stephen Mutili.</span>
          <span className="hidden md:inline">•</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
