"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolio-data";
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  FileText,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative border-b border-neutral-700 py-20 sm:py-24 md:py-32 bg-editorial-charcoal-dark"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-neutral-700 pb-8 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-editorial-cream mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-editorial-orange rounded-full shadow-[0_0_8px_#f14d05]" />
                <span className="font-bold text-editorial-cream-light">Section // 04</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-editorial-cream-light">
                Contact & Collaboration
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-mono text-editorial-cream bg-editorial-charcoal p-3.5 rounded-sm border border-neutral-700 shadow-sm">
              Open to technical engineering roles, distributed systems consulting, and applied AI initiatives.
            </p>
          </div>
        </div>

        {/* High-Contrast CTA Container in Charcoal with Cream & Orange Elements */}
        <div className="border border-neutral-700 bg-editorial-charcoal p-6 sm:p-10 md:p-12 mb-12 rounded-sm relative overflow-hidden shadow-2xl">
          {/* Top 4-Stripe Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 stripe-bar-heath" />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-editorial-charcoal-dark border border-neutral-600 text-editorial-cream font-mono text-[11px] uppercase tracking-wider rounded-sm shadow-xs">
              <MessageSquare className="w-3.5 h-3.5 text-editorial-orange" />
              <span className="font-bold text-editorial-cream-light">Inquiries & Architecture Discussions</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-editorial-cream-light leading-snug">
              Interested in discussing technical architecture or collaboration?
            </h3>

            <div className="bg-editorial-charcoal-dark p-5 rounded-sm border-l-4 border-editorial-orange shadow-inner">
              <p className="text-sm sm:text-base text-editorial-cream-light leading-relaxed max-w-2xl font-normal">
                Whether you are architecting a high-throughput computer vision pipeline,
                digitizing legacy document corpora, or building resilient full-stack systems—I am
                always interested in discussing ambitious engineering problems.
              </p>
            </div>

            {/* Email Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-white bg-editorial-orange hover:bg-editorial-orange-hover transition-all border border-editorial-orange rounded-full shadow-[0_4px_20px_rgba(241,77,5,0.4)] active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>{personalInfo.email}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-editorial-charcoal-dark bg-editorial-cream hover:bg-editorial-cream-light hover:text-editorial-charcoal-dark border border-editorial-cream-light transition-all rounded-full shadow-[0_2px_12px_rgba(235,228,212,0.25)] active:scale-95"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-editorial-orange" />
                    <span className="text-editorial-charcoal-dark font-extrabold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-editorial-charcoal-dark" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Direct Link Cards Grid in Charcoal & Cream */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* GitHub Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-neutral-700 bg-editorial-charcoal p-6 flex flex-col justify-between transition-all duration-300 hover:border-editorial-orange hover:bg-editorial-charcoal-card rounded-sm shadow-md"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-700 mb-4">
                <span className="font-mono text-xs text-editorial-cream font-bold">REF // 01</span>
                <ArrowUpRight className="w-4 h-4 text-editorial-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-editorial-charcoal-dark border border-neutral-600 text-editorial-orange rounded-sm group-hover:border-editorial-orange/60 transition-colors shadow-xs">
                  <Github className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-editorial-cream-light group-hover:text-white transition-colors">
                  GitHub
                </h4>
              </div>
              <p className="text-xs text-editorial-cream font-mono font-medium">
                Source code repositories, neural experiments, and open-source contributions.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-700 text-[11px] font-mono text-editorial-cream/70 font-semibold">
              github.com/aditya
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-neutral-700 bg-editorial-charcoal p-6 flex flex-col justify-between transition-all duration-300 hover:border-editorial-orange hover:bg-editorial-charcoal-card rounded-sm shadow-md"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-700 mb-4">
                <span className="font-mono text-xs text-editorial-cream font-bold">REF // 02</span>
                <ArrowUpRight className="w-4 h-4 text-editorial-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-editorial-charcoal-dark border border-neutral-600 text-editorial-orange rounded-sm group-hover:border-editorial-orange/60 transition-colors shadow-xs">
                  <Linkedin className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-editorial-cream-light group-hover:text-white transition-colors">
                  LinkedIn
                </h4>
              </div>
              <p className="text-xs text-editorial-cream font-mono font-medium">
                Professional engineering trajectory, network connections, and updates.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-700 text-[11px] font-mono text-editorial-cream/70 font-semibold">
              linkedin.com/in/aditya
            </div>
          </a>

          {/* Resume Card */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-neutral-700 bg-editorial-charcoal p-6 flex flex-col justify-between transition-all duration-300 hover:border-editorial-orange hover:bg-editorial-charcoal-card rounded-sm shadow-md"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-700 mb-4">
                <span className="font-mono text-xs text-editorial-cream font-bold">REF // 03</span>
                <ArrowUpRight className="w-4 h-4 text-editorial-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-editorial-charcoal-dark border border-neutral-600 text-editorial-cream rounded-sm group-hover:border-editorial-orange/60 transition-colors shadow-xs">
                  <FileText className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-editorial-cream-light group-hover:text-white transition-colors">
                  Resume
                </h4>
              </div>
              <p className="text-xs text-editorial-cream font-mono font-medium">
                Printable PDF summary of technical competencies, education, and experience.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-700 text-[11px] font-mono text-editorial-orange font-bold">
              PDF // 2026 EDITION
            </div>
          </a>
        </div>

        {/* Short Professional Closing Statement */}
        <div className="mt-12 p-4 border border-neutral-700 bg-editorial-charcoal flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-editorial-cream gap-2 rounded-sm shadow-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-8 stripe-bar-heath inline-block rounded-xs shadow-xs" />
            <span className="font-bold text-editorial-cream-light">
              CURRENT FOCUS: FULL-STACK ARCHITECTURE & APPLIED AI SYSTEMS
            </span>
          </div>
          <span className="text-editorial-orange font-bold">RESPONSE LATENCY: WITHIN 24 HOURS</span>
        </div>
      </div>
    </section>
  );
}
