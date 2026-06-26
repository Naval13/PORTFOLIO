import { contact } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-6 border-t border-border">
      <div className="max-w-content mx-auto flex items-center justify-between flex-wrap gap-3">
        <div className="font-display font-bold text-sm">
          NA<span className="text-amber">.</span>{" "}
          <span className="font-body font-normal text-muted ml-2">Naval Aggarwal</span>
        </div>
        <div className="font-mono text-[0.62rem] text-muted/40">{contact.location} · 2026</div>
        <div className="flex gap-5 font-mono text-[0.62rem] text-muted">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal">
            GitHub
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-teal">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
