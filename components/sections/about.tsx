"use client";

import React from "react";
import { aboutNarrative, educationList, leadershipRole, personalInfo } from "@/data/portfolio-data";
import {
  GraduationCap,
  Award,
  Terminal,
  Check,
  Compass,
  Globe,
  Calendar,
} from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-b border-neutral-800 py-20 sm:py-24 md:py-32 bg-[#131615]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-neutral-800 pb-8 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-editorial-cream/70 mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-editorial-orange rounded-full shadow-[0_0_8px_#f14d05]" />
                <span className="font-bold text-editorial-cream">Section // 03</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-editorial-cream-light">
                ABOUT & EDUCATION
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-mono text-editorial-cream/80 bg-editorial-charcoal/50 p-3 rounded-sm border border-neutral-800">
              Academic background, engineering interests, and technical leadership contributions.
            </p>
          </div>
        </div>

        {/* Professional Introduction Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-7 bg-editorial-charcoal/70 border border-neutral-800 p-6 sm:p-8 rounded-sm shadow-md space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-neutral-700/80 mb-2">
              <Compass className="w-4 h-4 text-editorial-orange" />
              <span className="font-mono text-xs uppercase tracking-wider text-editorial-cream font-bold">
                Professional Journey & Philosophy
              </span>
            </div>

            <p className="text-sm sm:text-base text-editorial-cream-light leading-relaxed">
              {aboutNarrative.paragraph1}
            </p>
            <p className="text-sm sm:text-base text-editorial-cream/90 leading-relaxed">
              {aboutNarrative.paragraph2}
            </p>
            <p className="text-sm sm:text-base text-editorial-cream/90 leading-relaxed">
              {aboutNarrative.paragraph3}
            </p>
            <p className="text-sm sm:text-base text-editorial-cream/90 leading-relaxed bg-[#131615]/50 p-4 rounded-sm border-l-2 border-editorial-orange">
              {aboutNarrative.paragraph4}
            </p>
          </div>

          {/* Leadership & Technical Responsibility Card */}
          <div className="lg:col-span-5 bg-editorial-charcoal/70 border border-neutral-800 p-6 sm:p-8 rounded-sm shadow-md flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-700/80 mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-editorial-orange font-bold">
                  Leadership & Responsibility
                </span>
                <span className="text-[10px] font-mono text-editorial-cream/60 uppercase">
                  UNIVERSITY CONTRIBUTIONS
                </span>
              </div>

              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-[#131615] border border-neutral-700 text-editorial-orange rounded-sm shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-editorial-cream-light">
                    {leadershipRole.role}
                  </h3>
                  <p className="text-xs font-mono text-editorial-cream/80 font-semibold">
                    {leadershipRole.organization}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-editorial-cream/85 leading-relaxed mb-4">
                {leadershipRole.description}
              </p>

              <div className="space-y-2 border-t border-neutral-750 pt-3">
                {leadershipRole.keyContributions.map((contribution, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs font-mono text-editorial-cream/90"
                  >
                    <Check className="w-3.5 h-3.5 text-editorial-orange shrink-0 mt-0.5" />
                    <span>{contribution}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[10px] font-mono text-editorial-cream/60 pt-3 border-t border-neutral-800">
              STATUS: ACTIVE CAMPUS DIGITAL INITIATIVE
            </div>
          </div>
        </div>

        {/* Education Timeline / Grid Section */}
        <div className="border border-neutral-800 bg-editorial-charcoal/80 p-6 sm:p-8 md:p-10 rounded-sm relative overflow-hidden shadow-lg">
          {/* Top 4-Stripe Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 stripe-bar-heath" />

          <div className="flex items-center justify-between gap-2 mb-8 pb-4 border-b border-neutral-700">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-editorial-orange" />
              <h3 className="font-mono text-xs uppercase tracking-widest text-editorial-cream-light font-bold">
                Academic Background & Qualifications
              </h3>
            </div>
            <span className="font-mono text-xs text-editorial-orange font-bold">
              MMMUT GORAKHPUR
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationList.map((edu, index) => (
              <div
                key={edu.degree}
                className="border-l-2 border-editorial-orange pl-4 sm:pl-5 space-y-2.5 bg-[#131615]/50 py-3 pr-3 rounded-r-sm"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-editorial-orange font-bold">// 0{index + 1}</span>
                  <span className="text-editorial-cream/70 flex items-center gap-1 font-semibold">
                    <Calendar className="w-3 h-3 text-editorial-orange" />
                    {edu.duration}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-editorial-cream-light leading-snug">
                  {edu.degree}
                </h4>
                <p className="text-xs text-editorial-cream/75 leading-relaxed font-mono">
                  {edu.institution}
                </p>
                <div className="inline-block pt-1">
                  <span className="px-2.5 py-0.5 text-xs font-mono font-bold text-editorial-black bg-editorial-cream rounded-xs shadow-xs">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Technical Seal */}
          <div className="mt-8 pt-6 border-t border-neutral-700 flex flex-wrap items-center justify-between text-[11px] font-mono text-editorial-cream/80 gap-2">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-editorial-orange" />
              <span className="font-semibold text-editorial-cream">
                INSTITUTION: MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY, GORAKHPUR
              </span>
            </span>
            <span className="text-editorial-orange font-bold">
              DEGREE: B.TECH COMPUTER SCIENCE AND ENGINEERING (2024–2028)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
