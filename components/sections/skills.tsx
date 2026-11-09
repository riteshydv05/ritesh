"use client";

import React from "react";
import {
  Code,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Terminal,
} from "lucide-react";

interface SkillItem {
  name: string;
  context: string;
}

interface SkillCategory {
  title: string;
  categoryTag: string;
  icon: React.ElementType;
  description: string;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    categoryTag: "LANGUAGES",
    icon: Code,
    description: "Core languages for systems architecture, typed contracts, and neural inference.",
    skills: [
      { name: "Java", context: "Object-oriented systems, concurrent processing, and enterprise services" },
      { name: "Python", context: "AsyncIO, PyTorch neural models, computer vision, and data pipelines" },
      { name: "JavaScript", context: "Modern ESNext runtimes, event loop handling, and async patterns" },
      { name: "TypeScript", context: "Strict static typing, complex generic interfaces, and AST validation" },
    ],
  },
  {
    title: "Frontend",
    categoryTag: "CLIENT_SIDE",
    icon: Layout,
    description: "Performant, accessible, and high-fidelity editorial user interfaces.",
    skills: [
      { name: "React", context: "Concurrent mode, functional hooks, and custom component primitives" },
      { name: "Next.js", context: "App Router, streaming SSR, Server Components, and edge optimization" },
      { name: "HTML", context: "Semantic document structure, accessibility (a11y), and standard DOM APIs" },
      { name: "CSS", context: "Modern layouts, grid systems, animations, and container queries" },
      { name: "Tailwind CSS", context: "Utility-first design tokens, high-contrast themes, and layout rules" },
    ],
  },
  {
    title: "Backend",
    categoryTag: "DISTRIBUTED_SERVICES",
    icon: Server,
    description: "High-throughput asynchronous services and resilient interface contracts.",
    skills: [
      { name: "FastAPI", context: "Asynchronous REST services, Pydantic type validation, and OpenAPI specs" },
      { name: "REST APIs", context: "Idempotent endpoints, HTTP semantics, rate-limiting, and error handling" },
    ],
  },
  {
    title: "Database",
    categoryTag: "STORAGE_TIER",
    icon: Database,
    description: "Relational modeling, geospatial indexing, and distributed object storage.",
    skills: [
      { name: "PostgreSQL", context: "ACID transactions, relational schema design, and query optimization" },
      { name: "Redis", context: "In-memory caching, message broker queues, and distributed key locks" },
      { name: "PostGIS", context: "Spatial database engine, polygon intersection predicates, and GIST indexing" },
      { name: "MinIO", context: "S3-compatible distributed object storage and presigned streaming URLs" },
    ],
  },
  {
    title: "AI / ML",
    categoryTag: "APPLIED_INTELLIGENCE",
    icon: BrainCircuit,
    description: "Applied computer vision, OCR extraction, and precision statistical modeling.",
    skills: [
      { name: "OCR", context: "PaddleOCR text localization and TrOCR sequence-to-sequence handwritten models" },
      { name: "NLP", context: "LayoutLMv3 multimodal document layout analysis and token classification" },
      { name: "Computer Vision", context: "RetinaFace facial landmark alignment and ArcFace 512-d metric embeddings" },
      { name: "Machine Learning", context: "Stratified cross-validation, feature normalization, and F0.5 score calibration" },
    ],
  },
  {
    title: "Infrastructure",
    categoryTag: "DEV_OPERATIONS",
    icon: Wrench,
    description: "Containerization, version control, and dependable deployment workflows.",
    skills: [
      { name: "Docker", context: "Multi-stage container builds, reproducible environments, and service isolation" },
      { name: "Git", context: "Trunk-based development, atomic commits, and interactive rebase workflows" },
      { name: "GitHub", context: "CI/CD automated testing workflows, pull request reviews, and releases" },
      { name: "Cloud Deployment", context: "Linux VPS environments, reverse proxy configs, and production pipelines" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section
      id="expertise"
      className="relative border-b border-neutral-700 py-20 sm:py-24 md:py-32 bg-editorial-charcoal-dark"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-neutral-700 pb-8 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-editorial-cream mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-editorial-orange rounded-full shadow-[0_0_8px_#f14d05]" />
                <span className="font-bold text-editorial-cream-light">Section // 02</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-editorial-cream-light">
                TECHNICAL EXPERTISE
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-mono text-editorial-cream bg-editorial-charcoal p-3.5 rounded-sm border border-neutral-700 shadow-sm">
              Categorized tools, frameworks, and system building blocks. Zero arbitrary percentage bars.
            </p>
          </div>
        </div>

        {/* 6-Card Grid in Rich Charcoal & Cream */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            const formattedIndex = String(index + 1).padStart(2, "0");

            return (
              <div
                key={category.title}
                className="group border border-neutral-700 bg-editorial-charcoal p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-editorial-orange hover:bg-editorial-charcoal-card rounded-sm shadow-md"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-700 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-editorial-charcoal-dark border border-neutral-600 text-editorial-orange rounded-sm group-hover:border-editorial-orange/60 transition-colors shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs text-editorial-cream-light font-bold">
                        {formattedIndex} // {category.categoryTag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-editorial-orange font-bold uppercase bg-editorial-orange/15 px-2.5 py-1 rounded-full border border-editorial-orange/40">
                      {category.skills.length} MODULES
                    </span>
                  </div>

                  {/* Category Title & Description */}
                  <h3 className="text-lg font-bold tracking-tight text-editorial-cream-light mb-2 group-hover:text-white transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-editorial-cream font-mono mb-6 leading-relaxed font-medium">
                    {category.description}
                  </p>

                  {/* Clean Monospaced Technology Tags with Context Notes */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="border border-neutral-700/80 bg-editorial-charcoal-dark p-3.5 hover:border-editorial-cream transition-colors rounded-sm shadow-xs"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold text-editorial-cream-light font-mono tracking-tight">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 bg-editorial-orange rounded-full shadow-[0_0_4px_#f14d05]" />
                        </div>
                        <p className="text-[11px] text-editorial-cream leading-snug font-medium">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Footnote */}
                <div className="mt-6 pt-4 border-t border-neutral-700 flex items-center justify-between text-[10px] font-mono text-editorial-cream">
                  <span className="flex items-center gap-1.5 font-bold text-editorial-cream-light">
                    <Terminal className="w-3.5 h-3.5 text-editorial-orange" />
                    <span>SYS_STACK</span>
                  </span>
                  <span className="text-editorial-orange font-bold">PRODUCTION_VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
