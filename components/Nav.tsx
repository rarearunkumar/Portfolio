"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/lib/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-(--color-line) bg-(--color-bg)/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-edge flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-serif text-xl tracking-tight"
          aria-label="Back to top"
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-1 md:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-(--color-muted) transition-colors hover:bg-(--color-card) hover:text-(--color-fg)"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-1 md:ml-3">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
