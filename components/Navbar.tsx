"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const menuRef = useRef<HTMLDetailsElement | null>(null);

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.removeAttribute("open");
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // highlight active section
      let current = "";
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = l.href;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-gold/40 bg-gold/10 font-serif text-sm font-semibold text-gold transition-colors group-hover:bg-gold/20">
            {profile.monogram}
          </span>
          <span className="hidden font-serif text-lg tracking-wide text-ivory sm:block">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active === l.href
                    ? "text-gold"
                    : "text-stone hover:text-ivory"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumePdf}
            download="Souham_Ghosh_Resume.pdf"
            className="hidden items-center gap-2 rounded-md border border-gold/50 bg-gold/10 px-4 py-2 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-ink sm:inline-flex"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
            Resume
          </a>
          {/* Mobile menu */}
          <details className="group relative md:hidden" ref={menuRef}>
            <summary
              aria-label="Open menu"
              className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md border border-line text-stone hover:text-ivory"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <div className="absolute right-0 top-11 w-52 rounded-lg border border-line bg-ink-2 p-2 shadow-xl">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-2.5 text-sm text-stone transition-colors hover:bg-ink-3 hover:text-ivory"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={profile.resumePdf}
                download="Souham_Ghosh_Resume.pdf"
                onClick={closeMenu}
                className="mt-1 block rounded-md border border-gold/50 bg-gold/10 px-3 py-2.5 text-center text-sm font-medium text-gold"
              >
                Resume (PDF)
              </a>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
