import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { scrollToSection } from "../hooks/useScrollUtils";

const NAV_ITEMS = [
  { id: "lead-story", label: "Lead Story" },
  { id: "columns", label: "Columns" },
  { id: "featured", label: "Featured" },
  { id: "classifieds", label: "Classifieds" },
];

export default function Masthead() {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header
      className={`sticky top-0 z-[45] will-change-[padding]
                  bg-paper/95 dark:bg-paper-dark/95 backdrop-blur-sm
                  border-b border-rule dark:border-rule-dark
                  transition-[padding] duration-300 ease-out
                  ${shrink ? "py-2" : "py-4 md:py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Top info bar — collapses via CSS only */}
        <div
          className={`flex items-center justify-between text-[10px] md:text-[11px] font-mono
                     text-ink-muted dark:text-ink-muted-dark tracking-wider uppercase
                     overflow-hidden transition-all duration-300 ease-out
                     ${shrink ? "max-h-0 opacity-0 mb-0" : "max-h-8 opacity-100 mb-1"}`}
        >
          <span>{dateStr}</span>
          <span>Casablanca, Morocco</span>
          <span>Issue No. 01 — Vol. I</span>
        </div>

        {/* Title — pure CSS size transition, no Framer layout */}
        <div className="flex items-center justify-between gap-4">
          <h1
            className={`font-serif font-black masthead-text leading-none text-ink dark:text-ink-dark
                        transition-[font-size] duration-300 ease-out
                        ${shrink ? "text-xl md:text-2xl" : "text-3xl md:text-5xl lg:text-6xl"}`}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer bg-transparent border-none p-0"
            >
              The Haitam Chronicle
            </button>
          </h1>

          <DarkModeToggle />
        </div>

        {/* Tagline — collapses via CSS only */}
        <p
          className={`text-xs md:text-sm italic text-ink-muted dark:text-ink-muted-dark font-serif
                     overflow-hidden transition-all duration-300 ease-out
                     ${shrink ? "max-h-0 opacity-0 mt-0" : "max-h-12 opacity-100 mt-1"}`}
        >
          "All the Code That's Fit to Ship" — Full-Stack Developer &amp;
          Creative Engineer
        </p>

        {/* Nav */}
        <nav
          className="flex items-center gap-4 md:gap-6 mt-2 text-[11px] md:text-xs uppercase tracking-widest font-semibold"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-ink-muted dark:text-ink-muted-dark hover:text-accent dark:hover:text-accent-dark
                         transition-colors cursor-pointer bg-transparent border-none p-0"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
