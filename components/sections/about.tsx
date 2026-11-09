"use client";

import React from "react";
import {
  Compass,
  GitBranch,
  Cpu,
  Check,
  ShieldCheck,
  Terminal,
} from "lucide-react";

interface Pillar {
  number: string;
  title: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  keyPoints: string[];
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Software Engineering & Architecture",
    tagline: "Designing resilient pipelines, asynchronous job processing, and clean domain boundaries.",
    icon: GitBranch,
    description:
      "Modern applications succeed or degrade at their architectural boundaries. I prioritize isolating heavy neural workloads behind asynchronous queue brokers (Celery + Redis), optimizing spatial query paths via PostGIS, and ensuring deterministic, type-safe data contracts across services.",
    keyPoints: [
      "Decoupled synchronous REST handlers from compute-bound inference jobs",
      "Strict data validation with TypeScript generics and Pydantic schemas",
      "Deterministic database modeling, spatial indexing, and query plan profiling",
    ],
  },
  {
    number: "02",
    title: "Practical AI & Real-World Domain Impact",
    tagline: "Solving concrete domain challenges rather than wrapping superficial API endpoints.",
    icon: Compass,
    description:
      "Engineering begins with domain realities: degraded archival land deeds, unindexed cloud photo libraries, and noisy catalog data. I focus on developing hybrid machine learning systems that pair deep learning models with deterministic verification checks and human-in-the-loop review interfaces.",
    keyPoints: [
      "Addressing raw data noise, OCR degradation, and edge-case anomalies",
      "Designing confidence thresholds and deterministic fallback mechanisms",
      "Interactive human-in-the-loop workspaces for high-stakes audits",
    ],
  },
  {
    number: "03",
    title: "Continuous Learning & Performance",
    tagline: "Deep technical exploration across AI research, system performance, and clean code.",
    icon: Cpu,
    description:
      "Staying effective requires rigorous foundational study and hands-on synthesis. From sequence-to-sequence handwritten OCR and deep metric face clustering to Next.js 15 App Router streaming SSR, I focus on transforming cutting-edge techniques into maintainable, performant software.",
    keyPoints: [
      "Translating empirical AI research papers into clean production code",
      "Profiling runtime bottlenecks across CPU, GPU, and network tiers",
      "Balancing modern frameworks with battle-tested distributed patterns",
    ],
  },
];

const ENGINEERING_COMMITMENTS = [
  {
    title: "System Scalability",
    description:
      "Architecting asynchronous worker pools, distributed object storage, and spatial indexes that sustain high-throughput data volumes gracefully.",
  },
  {
    title: "Code Maintainability",
    description:
      "Enforcing strict static typings, modular single-responsibility units, comprehensive docstrings, and deterministic directory layouts.",
  },
  {
    title: "Pragmatic AI Integration",
    description:
      "Deploying machine learning models as purposeful components within verified systems—paired with confidence bounds, fallback routes, and audit trails.",
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative border-b border-neutral-700 py-20 sm:py-24 md:py-32 bg-editorial-charcoal-dark"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-neutral-700 pb-8 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-editorial-cream mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-editorial-orange rounded-full shadow-[0_0_8px_#f14d05]" />
                <span className="font-bold text-editorial-cream-light">Section // 03</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-editorial-cream-light">
                ENGINEERING PHILOSOPHY & ABOUT
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-mono text-editorial-cream bg-editorial-charcoal p-3.5 rounded-sm border border-neutral-700 shadow-sm">
              Foundational principles guiding system architecture, pragmatic intelligence, and craftsmanship.
            </p>
          </div>
        </div>

        {/* Editorial 3-Pillar Grid in Rich Charcoal with Cream Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group border border-neutral-700 bg-editorial-charcoal p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-editorial-orange hover:bg-editorial-charcoal-card rounded-sm shadow-md"
              >
                <div>
                  {/* Pillar Number & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-700 mb-6">
                    <span className="font-mono text-sm font-extrabold text-editorial-orange">
                      PILLAR // {pillar.number}
                    </span>
                    <div className="p-2 bg-editorial-charcoal-dark border border-neutral-600 text-editorial-orange rounded-sm group-hover:border-editorial-orange/60 transition-colors shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold tracking-tight text-editorial-cream-light mb-2 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-editorial-cream mb-4 leading-relaxed font-bold">
                    {pillar.tagline}
                  </p>

                  {/* Description in High-Contrast Cream on Charcoal Box */}
                  <div className="bg-editorial-charcoal-dark p-4 rounded-sm border border-neutral-700 mb-6 shadow-inner">
                    <p className="text-sm text-editorial-cream-light leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Key Highlights with Orange Checks */}
                <div className="pt-4 border-t border-neutral-700 space-y-2.5">
                  {pillar.keyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs font-mono text-editorial-cream font-medium"
                    >
                      <Check className="w-4 h-4 text-editorial-orange shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Commitments Matrix in Cream Surface & Charcoal */}
        <div className="border border-neutral-700 bg-editorial-charcoal p-6 sm:p-8 md:p-10 rounded-sm relative overflow-hidden shadow-xl">
          {/* Top 4-Stripe Line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 stripe-bar-heath" />

          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-5 h-5 text-editorial-orange" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-editorial-cream-light font-bold">
              Core Engineering Commitments
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ENGINEERING_COMMITMENTS.map((commitment, index) => (
              <div
                key={commitment.title}
                className="border-l-3 border-editorial-orange pl-4 sm:pl-6 space-y-2 bg-editorial-charcoal-dark p-4 rounded-r-sm shadow-sm"
              >
                <div className="font-mono text-xs text-editorial-orange font-bold">
                  // 0{index + 1}
                </div>
                <h4 className="text-base font-bold text-editorial-cream-light">
                  {commitment.title}
                </h4>
                <p className="text-xs sm:text-sm text-editorial-cream leading-relaxed font-medium">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Technical Seal */}
          <div className="mt-8 pt-6 border-t border-neutral-700 flex flex-wrap items-center justify-between text-[11px] font-mono text-editorial-cream gap-2">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-editorial-orange" />
              <span className="font-bold text-editorial-cream-light">
                DISCIPLINE: APPLIED AI & FULL-STACK SYSTEMS ARCHITECTURE
              </span>
            </span>
            <span className="text-editorial-orange font-bold">
              STANDARDS: STRICT PRODUCTION EXCELLENCE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
