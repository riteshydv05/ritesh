"use client";

import React from "react";
import { skillCategories } from "@/data/portfolio-data";
import {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
  Terminal,
} from "lucide-react";

const CATEGORY_META: Record<
  string,
  { tag: string; icon: React.ElementType; description: string }
> = {
  "Programming Languages": {
    tag: "LANGUAGES",
    icon: Code,
    description: "Core languages for building robust web applications, data workflows, and algorithms.",
  },
  Frontend: {
    tag: "CLIENT_SIDE",
    icon: Layout,
    description: "Modern component-driven interfaces, high-fidelity responsive styling, and accessible layouts.",
  },
  Backend: {
    tag: "BACKEND_SERVICES",
    icon: Server,
    description: "RESTful architecture, asynchronous runtime environments, and scalable server routing.",
  },
  Databases: {
    tag: "DATABASE_TIER",
    icon: Database,
    description: "Document-oriented NoSQL storage, schema modeling, and realtime cloud synchronization.",
  },
  "Tools and Technologies": {
    tag: "DEV_TOOLS",
    icon: Wrench,
    description: "Version control workflows, data analytics dashboards, UI wireframing, and productivity tools.",
  },
};

export function SkillsSection() {
  return (
    <section
      id="expertise"
      className="relative border-b border-neutral-800 py-20 sm:py-24 md:py-32 bg-[#131615]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-neutral-800 pb-8 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-editorial-cream/70 mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-editorial-orange rounded-full shadow-[0_0_8px_#f14d05]" />
                <span className="font-bold text-editorial-cream">Section // 02</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-editorial-cream-light">
                TECHNICAL SKILLS
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-mono text-editorial-cream/80 bg-editorial-charcoal/50 p-3 rounded-sm border border-neutral-800">
              Verified technical capabilities across programming, web development, data analysis, and tooling.
            </p>
          </div>
        </div>

        {/* 5-Card Grid in Charcoal & Cream */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => {
            const meta = CATEGORY_META[category.categoryName] ?? {
              tag: "TECH_STACK",
              icon: Code,
              description: "Technical tools and frameworks.",
            };
            const Icon = meta.icon;
            const formattedIndex = String(index + 1).padStart(2, "0");

            return (
              <div
                key={category.categoryName}
                className="group border border-neutral-800 bg-editorial-charcoal/70 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-editorial-orange hover:bg-editorial-charcoal/95 rounded-sm shadow-md"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-700/80 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-[#131615] border border-neutral-700 text-editorial-orange rounded-sm group-hover:border-editorial-orange/60 transition-colors shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs text-editorial-cream font-bold">
                        {formattedIndex} // {meta.tag}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-editorial-orange font-bold uppercase bg-editorial-orange/15 px-2 py-0.5 rounded-full border border-editorial-orange/30">
                      {category.skills.length} MODULES
                    </span>
                  </div>

                  {/* Category Title & Description */}
                  <h3 className="text-lg font-bold tracking-tight text-editorial-cream-light mb-2 group-hover:text-white transition-colors">
                    {category.categoryName}
                  </h3>
                  <p className="text-xs text-editorial-cream/70 font-mono mb-6 leading-relaxed">
                    {meta.description}
                  </p>

                  {/* Clean Monospaced Technology Tags with Context Notes */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="border border-neutral-700/70 bg-[#131615]/80 p-3 hover:border-editorial-orange/50 transition-colors rounded-sm"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-editorial-cream font-mono tracking-tight">
                            {skill.name}
                          </span>
                          <span className="w-1.5 h-1.5 bg-editorial-orange rounded-full shadow-[0_0_4px_#f14d05]" />
                        </div>
                        <p className="text-[11px] text-editorial-cream/80 leading-snug">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Footnote */}
                <div className="mt-6 pt-4 border-t border-neutral-700/70 flex items-center justify-between text-[10px] font-mono text-editorial-cream/70">
                  <span className="flex items-center gap-1.5 font-semibold text-editorial-cream">
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
