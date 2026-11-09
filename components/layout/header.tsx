"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio-data";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const CATEGORY_PILLS = [
  { label: "Engineering", href: "#expertise" },
  { label: "AI & ML", href: "#projects" },
  { label: "Systems", href: "#projects" },
];

const NAV_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Engineering");

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Smooth scroll handler for anchor links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-[#131615]/95 backdrop-blur-md">
      {/* Editorial Decorative 4-Stripe Top Bar */}
      <div className="h-[3px] w-full stripe-bar-heath" aria-hidden="true" />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
        {/* Left Section: Brand Pill + Filter/Category Pills */}
        <div className="flex items-center gap-3">
          {/* Brand Pill: [ Name ] in Charcoal & Cream */}
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-neutral-700 bg-editorial-charcoal text-editorial-cream font-mono text-xs uppercase tracking-wider hover:border-editorial-orange hover:text-white transition-all shadow-sm"
            aria-label="Home"
          >
            <span className="text-editorial-orange font-bold text-sm">[</span>
            <span className="font-semibold text-editorial-cream-light group-hover:text-white">
              {personalInfo.name}
            </span>
            <span className="text-editorial-orange font-bold text-sm">]</span>
          </Link>

          {/* Editorial Category / Filter Pills */}
          <div className="hidden lg:flex items-center gap-1.5 pl-3 border-l border-neutral-800">
            {CATEGORY_PILLS.map((pill) => {
              const isActive = activeCategory === pill.label;
              return (
                <a
                  key={pill.label}
                  href={pill.href}
                  onClick={(e) => {
                    setActiveCategory(pill.label);
                    handleNavClick(e, pill.href);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-mono tracking-tight transition-all border ${
                    isActive
                      ? "bg-editorial-orange text-white font-semibold border-editorial-orange shadow-[0_0_12px_rgba(241,77,5,0.35)]"
                      : "bg-editorial-charcoal text-editorial-cream-muted border-neutral-700/80 hover:border-editorial-orange hover:text-white"
                  }`}
                >
                  {pill.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Section: Anchor Nav + Download Resume Button */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <nav className="flex items-center gap-6" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-editorial-cream/80 hover:text-editorial-orange transition-colors font-medium tracking-tight text-xs uppercase font-mono py-1 border-b border-transparent hover:border-editorial-orange"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* High-Contrast Cream & Cadmium Orange "Download Resume" Action Button */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-editorial-black bg-editorial-cream hover:bg-editorial-orange hover:text-white transition-all rounded-full border border-editorial-cream-light shadow-[0_2px_10px_rgba(235,228,212,0.15)] active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-editorial-charcoal group-hover:text-white transition-colors" aria-hidden="true" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger & Quick Resume Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-editorial-black bg-editorial-cream hover:bg-editorial-orange hover:text-white rounded-full transition-colors"
          >
            CV
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-editorial-cream hover:text-editorial-orange focus:outline-none focus:ring-1 focus:ring-editorial-orange bg-editorial-charcoal border border-neutral-700 rounded-sm"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-editorial-orange" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden border-b border-neutral-800 bg-editorial-charcoal/95 backdrop-blur px-6 py-6"
          >
            {/* Mobile Category Pills */}
            <div className="flex flex-wrap gap-2 pb-4 mb-4 border-b border-neutral-800">
              {CATEGORY_PILLS.map((pill) => (
                <a
                  key={pill.label}
                  href={pill.href}
                  onClick={(e) => {
                    setActiveCategory(pill.label);
                    handleNavClick(e, pill.href);
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-mono border ${
                    activeCategory === pill.label
                      ? "bg-editorial-orange text-white border-editorial-orange font-semibold"
                      : "bg-[#131615] text-editorial-cream border-neutral-700"
                  }`}
                >
                  {pill.label}
                </a>
              ))}
            </div>

            <nav className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-medium text-editorial-cream hover:text-editorial-orange transition-colors py-1.5 flex items-center justify-between border-b border-neutral-800/60"
                >
                  <span>{link.label}</span>
                  <span className="text-editorial-orange text-xs">→</span>
                </a>
              ))}
              <div className="pt-4">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 text-xs font-mono uppercase tracking-widest text-editorial-black bg-editorial-cream hover:bg-editorial-orange hover:text-white transition-colors rounded-full font-bold shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
