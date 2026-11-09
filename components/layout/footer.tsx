"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio-data";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-700 bg-editorial-charcoal-dark py-8 text-editorial-cream">
      {/* 4-Stripe Heath Color Accent Line */}
      <div className="h-[2px] w-full stripe-bar-heath mb-6 opacity-85" aria-hidden="true" />

      <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 text-xs font-mono">
        {/* Left: Copyright & Engineering Tag */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-center sm:text-left">
          <span className="text-editorial-cream-light font-bold">
            © {currentYear} {personalInfo.name}
          </span>
          <span className="text-neutral-500 hidden sm:inline">•</span>
          <span className="text-editorial-cream font-medium">
            Built with Next.js & Tailwind CSS
          </span>
        </div>

        {/* Right: System Status Badge & Back to Top Trigger */}
        <div className="flex items-center gap-6">
          {/* System Status Badge with Heath Orange Pulse */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-editorial-charcoal border border-neutral-700 text-editorial-cream-light text-[10px] rounded-full font-semibold shadow-xs">
            <span className="w-1.5 h-1.5 bg-editorial-orange rounded-full animate-pulse shadow-[0_0_6px_#f14d05]" />
            <span>SYS_ALL_SYSTEMS_OPERATIONAL</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 text-editorial-cream-light hover:text-editorial-orange transition-colors uppercase tracking-wider text-[11px] font-bold"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-editorial-orange" />
          </button>
        </div>
      </div>
    </footer>
  );
}
