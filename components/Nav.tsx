"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors",
        scrolled ? "bg-bg/90 backdrop-blur-xl border-b border-border" : "border-b border-transparent"
      )}
    >
      <nav className="max-w-content mx-auto flex items-center justify-between h-[58px] px-6 sm:px-8">
        <a href="#" className="font-display font-bold text-lg">
          NA<span className="text-amber">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-text transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-block font-mono text-xs px-4 py-1.5 border border-teal rounded-input text-teal hover:bg-teal hover:text-bg transition-colors"
        >
          Hire me
        </a>

        <button
          className="md:hidden text-text"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-b border-border px-6 pb-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-text transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-mono text-xs px-4 py-2 border border-teal rounded-input text-teal text-center"
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
