"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolio-data";
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  ArrowUpRight,
  MessageSquare,
  Phone,
  Globe,
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
      className="relative border-b border-neutral-800 py-20 sm:py-24 md:py-32 bg-[#131615]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-neutral-800 pb-8 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-editorial-cream/70 mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-editorial-orange rounded-full shadow-[0_0_8px_#f14d05]" />
                <span className="font-bold text-editorial-cream">Section // 05</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-editorial-cream-light">
                Contact & Collaboration
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-mono text-editorial-cream/80 bg-editorial-charcoal/50 p-3 rounded-sm border border-neutral-800">
              Open to software engineering roles, full-stack development, and tech collaborations.
            </p>
          </div>
        </div>

        {/* High-Contrast CTA Container */}
        <div className="border border-neutral-800 bg-editorial-charcoal/85 p-6 sm:p-10 md:p-12 mb-12 rounded-sm relative overflow-hidden shadow-xl">
          {/* Top 4-Stripe Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 stripe-bar-heath" />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#131615] border border-neutral-700 text-editorial-cream font-mono text-[11px] uppercase tracking-wider rounded-sm shadow-xs">
              <MessageSquare className="w-3.5 h-3.5 text-editorial-orange" />
              <span className="font-semibold text-editorial-cream">Let&apos;s Connect</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-editorial-cream-light leading-snug">
              Interested in discussing software projects or technology?
            </h3>

            <p className="text-sm sm:text-base text-editorial-cream/90 leading-relaxed max-w-2xl bg-[#131615]/50 p-4 rounded-sm border-l-2 border-editorial-orange">
              I&apos;m always glad to talk about full-stack web applications, collaborative hackathons,
              or engineering challenges. Feel free to reach out directly via email, phone, or LinkedIn.
            </p>

            {/* Email & Phone Action Bar */}
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-editorial-black bg-editorial-cream hover:bg-editorial-cream-light hover:text-editorial-black border border-editorial-cream-light transition-all rounded-full shadow-[0_2px_12px_rgba(235,228,212,0.2)] active:scale-95"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-editorial-orange" />
                    <span className="text-editorial-black font-extrabold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-editorial-charcoal" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold text-editorial-cream bg-[#131615] hover:bg-editorial-charcoal border border-neutral-700 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4 text-editorial-orange" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Direct Link Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* GitHub Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-neutral-800 bg-editorial-charcoal/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-editorial-orange hover:bg-editorial-charcoal/95 rounded-sm shadow-md"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-700 mb-4">
                <span className="font-mono text-xs text-editorial-cream/70 font-semibold">REF // 01</span>
                <ArrowUpRight className="w-4 h-4 text-editorial-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-[#131615] border border-neutral-700 text-editorial-orange rounded-sm group-hover:border-editorial-orange/60 transition-colors shadow-xs">
                  <Github className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-editorial-cream-light group-hover:text-white transition-colors">
                  GitHub
                </h4>
              </div>
              <p className="text-xs text-editorial-cream/80 font-mono">
                Web application repositories, code samples, and open-source contributions.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-750 text-[11px] font-mono text-editorial-cream/60">
              github.com/{personalInfo.githubUsername}
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-neutral-800 bg-editorial-charcoal/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-editorial-orange hover:bg-editorial-charcoal/95 rounded-sm shadow-md"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-700 mb-4">
                <span className="font-mono text-xs text-editorial-cream/70 font-semibold">REF // 02</span>
                <ArrowUpRight className="w-4 h-4 text-editorial-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-[#131615] border border-neutral-700 text-editorial-orange rounded-sm group-hover:border-editorial-orange/60 transition-colors shadow-xs">
                  <Linkedin className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-editorial-cream-light group-hover:text-white transition-colors">
                  LinkedIn
                </h4>
              </div>
              <p className="text-xs text-editorial-cream/80 font-mono">
                Professional connections, academic updates, and technology networking.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-750 text-[11px] font-mono text-editorial-cream/60">
              linkedin.com/in/{personalInfo.linkedinUsername}
            </div>
          </a>

          {/* The Editorial Board Official Portal */}
          <a
            href="https://www.theeditorialboard.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-neutral-800 bg-editorial-charcoal/70 p-6 flex flex-col justify-between transition-all duration-300 hover:border-editorial-orange hover:bg-editorial-charcoal/95 rounded-sm shadow-md"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-700 mb-4">
                <span className="font-mono text-xs text-editorial-cream/70 font-semibold">REF // 03</span>
                <ArrowUpRight className="w-4 h-4 text-editorial-orange transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 bg-[#131615] border border-neutral-700 text-editorial-orange rounded-sm group-hover:border-editorial-orange/60 transition-colors shadow-xs">
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-editorial-cream-light group-hover:text-white transition-colors">
                  The Editorial Board
                </h4>
              </div>
              <p className="text-xs text-editorial-cream/80 font-mono">
                Official website of The Editorial Board, MMMUT, designed and maintained by Ritesh Yadav.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-750 text-[11px] font-mono text-editorial-orange font-bold">
              theeditorialboard.in ↗
            </div>
          </a>
        </div>

        {/* Short Professional Closing Statement */}
        <div className="mt-12 p-4 border border-neutral-800 bg-editorial-charcoal/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-editorial-cream/80 gap-2 rounded-sm shadow-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-8 stripe-bar-heath inline-block rounded-xs" />
            <span className="font-semibold text-editorial-cream">
              STATUS: COMPUTER SCIENCE UNDERGRADUATE @ MMMUT GORAKHPUR
            </span>
          </div>
          <span className="text-editorial-orange font-bold">RESPONSE LATENCY: WITHIN 24 HOURS</span>
        </div>
      </div>
    </section>
  );
}
