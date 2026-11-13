"use client";

import React from "react";
import { Project } from "@/types";
import { Badge } from "@/components/UI/badge";
import { ArrowRight, Cpu, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export function ProjectCard({
  project,
  index,
  onOpenCaseStudy,
}: ProjectCardProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpenCaseStudy(project);
    }
  };

  return (
    <article
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="group relative border border-neutral-800 bg-editorial-charcoal/60 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-editorial-orange hover:bg-editorial-charcoal/90 focus:outline-none focus:ring-2 focus:ring-editorial-orange rounded-sm shadow-md"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* 4-Stripe Left Accent Border on Hover */}
      <div className="absolute top-0 left-0 w-1.5 h-full stripe-bar-heath opacity-70 group-hover:opacity-100 transition-opacity" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pl-2 sm:pl-3">
        {/* Left Section: Information Hierarchy */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            {/* Numbered Indicator with Heath Orange Accent */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest mb-4">
              <span className="text-editorial-orange font-bold text-sm">{formattedIndex} / PROJECT</span>
              <span className="h-px flex-1 max-w-[60px] bg-neutral-700" />
              <span className="text-editorial-cream/70 font-semibold">{project.id.toUpperCase()}</span>
              {project.achievementBadge && (
                <span className="px-2.5 py-0.5 text-[10px] font-bold text-white bg-editorial-orange border border-editorial-orange rounded-full shadow-[0_0_8px_rgba(241,77,5,0.4)]">
                  ★ {project.achievementBadge}
                </span>
              )}
            </div>

            {/* Project Title & Subtitle */}
            <h3
              id={`project-title-${project.id}`}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-editorial-cream-light group-hover:text-white transition-colors"
            >
              {project.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-mono text-editorial-cream/70 font-medium">
              {project.subtitle}
            </p>

            {/* Tagline / Short Description in High Contrast */}
            <p className="mt-4 text-sm sm:text-base text-editorial-cream/90 leading-relaxed font-normal bg-[#131615]/50 p-3.5 rounded-sm border border-neutral-800">
              {project.tagline}
            </p>
          </div>

          {/* Technology Badges with Cream and Orange Accents */}
          <div className="space-y-2.5">
            <div className="text-[11px] font-mono text-editorial-cream/80 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-editorial-orange rounded-full shadow-[0_0_6px_#f14d05]" />
              <span className="font-semibold text-editorial-cream">Core Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, tagIdx) => (
                <Badge
                  key={tag}
                  variant={tagIdx === 0 ? "orange" : tagIdx % 3 === 0 ? "cream" : "default"}
                  className="group-hover:border-neutral-600 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Trigger Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenCaseStudy(project)}
              className="group/btn inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-editorial-black bg-editorial-cream hover:bg-editorial-orange hover:text-white transition-all border border-editorial-cream-light focus:outline-none focus:ring-2 focus:ring-editorial-orange rounded-full shadow-[0_2px_12px_rgba(235,228,212,0.18)] active:scale-95"
              aria-label={`View Architecture and Case Study for ${project.title}`}
            >
              <span>View Architecture & Case Study</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Section: Visual Schematic with Subtle Hover Zoom */}
        <div className="lg:col-span-5 flex flex-col space-y-3">
          <div
            onClick={() => onOpenCaseStudy(project)}
            className="cursor-pointer relative aspect-[16/10] w-full overflow-hidden border border-neutral-700 bg-[#131615] p-3 sm:p-4 rounded-sm group-hover:border-editorial-orange/60 transition-colors shadow-inner"
          >
            {/* SVG Halftone Screen Texture */}
            <div className="absolute inset-0 bg-halftone opacity-40 pointer-events-none" />

            {/* Inner Visual Canvas with Charcoal & Orange Accent */}
            <div className="relative h-full w-full border border-neutral-800 bg-editorial-charcoal/80 p-4 flex flex-col justify-between overflow-hidden rounded-xs">
              {/* Header Wireframe Tags */}
              <div className="flex justify-between items-center text-[10px] font-mono uppercase">
                <span className="flex items-center gap-1.5 text-editorial-cream font-bold">
                  <span className="w-1.5 h-1.5 bg-editorial-orange rounded-full shadow-[0_0_6px_#f14d05]" />
                  SCHEMATIC_VIEW
                </span>
                <span className="text-editorial-cream font-semibold">
                  PIPELINE: {project.systemArchitecture.nodes.length} STAGES
                </span>
              </div>

              {/* Central Stylized Architectural Node Graphic with Hover Zoom */}
              <div className="my-auto py-2 flex flex-col items-center justify-center text-center space-y-2.5 transition-transform duration-500 ease-out group-hover:scale-105">
                <div className="p-3 bg-[#131615] border border-neutral-700 text-editorial-orange rounded-sm shadow-md">
                  <Cpu className="w-7 h-7" />
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-editorial-cream font-bold">
                  {project.systemArchitecture.nodes[0]?.title ?? "System Pipeline"}
                </div>
                <div className="font-mono text-[11px] text-editorial-cream/70 max-w-[220px] line-clamp-1">
                  {project.systemArchitecture.summary}
                </div>
              </div>

              {/* Bottom Metadata Annotation */}
              <div className="pt-2 border-t border-neutral-700/80 flex items-center justify-between text-[10px] font-mono text-editorial-cream/70">
                <div className="flex items-center gap-1">
                  <Layers className="w-3 h-3 text-editorial-orange" />
                  <span className="font-semibold text-editorial-cream">ARCHITECTURE VERIFIED</span>
                </div>
                <span className="text-editorial-orange font-bold font-mono">ID: {project.id}</span>
              </div>
            </div>
          </div>

          {/* Technical Blueprint Footnote */}
          <div className="flex items-center justify-between text-[11px] font-mono text-editorial-cream/70 px-1">
            <span className="text-editorial-cream/60">{`SPEC // FIG. ${formattedIndex}`}</span>
            <span className="text-editorial-orange font-bold">STATUS: PRODUCTION_READY</span>
          </div>
        </div>
      </div>
    </article>
  );
}
