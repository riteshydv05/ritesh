"use client";

import React, { useEffect, useRef } from "react";
import { Project } from "@/types";
import { Badge } from "@/components/UI/badge";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ExternalLink,
  Github,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  UserCheck,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface CaseStudyModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      // Focus trapping within modal
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length > 0) {
          const first = focusableElements[0];
          const last = focusableElements[focusableElements.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          {/* Dimmed Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal Container with 4-Stripe Accent Header */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#131615] border border-neutral-800 shadow-2xl text-neutral-100 overflow-hidden rounded-sm"
          >
            {/* Top 4-Stripe Color Bar */}
            <div className="h-[3px] w-full stripe-bar-heath" aria-hidden="true" />

            {/* Header: Title, Tagline, Stack Badges & Live/GitHub Buttons */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-neutral-800 bg-[#131615]/95 backdrop-blur px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-editorial-orange rounded-full" />
                <span className="font-mono text-xs uppercase tracking-widest text-editorial-cream font-semibold">
                  CASE STUDY // {project.id.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-white bg-editorial-orange hover:bg-editorial-orange-hover transition-colors rounded-sm font-semibold shadow"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white bg-[#1a1e1c] border border-neutral-700 hover:border-editorial-orange transition-colors rounded-sm"
                  >
                    <Github className="w-3.5 h-3.5 text-editorial-orange" />
                    <span className="hidden sm:inline">Repository</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1.5 text-neutral-400 hover:text-editorial-orange hover:bg-[#1a1e1c] border border-neutral-800 transition-colors rounded-sm"
                  aria-label="Close case study dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto px-6 py-8 sm:px-8 space-y-10 text-neutral-300">
              {/* Overview & Stack Badges */}
              <div>
                <h2
                  id="case-study-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-editorial-cream mb-2"
                >
                  {project.title}
                </h2>
                <p className="text-base sm:text-lg text-editorial-gray font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-3xl">
                  {project.tagline}
                </p>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {project.tags.map((tag, idx) => (
                    <Badge
                      key={tag}
                      variant={idx === 0 ? "orange" : "default"}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* System Architecture Diagram */}
              <div className="border border-neutral-800 bg-[#1a1e1c]/60 p-5 sm:p-6 rounded-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-4 h-4 text-editorial-orange" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-editorial-cream font-semibold">
                    System Architecture Workflow
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 mb-6 font-mono leading-relaxed">
                  {project.systemArchitecture.summary}
                </p>

                {/* Monospaced Pipeline Sequence */}
                <div className="space-y-3">
                  {project.systemArchitecture.nodes.map((node) => (
                    <div
                      key={node.step}
                      className="flex flex-col md:flex-row md:items-center gap-3 p-3.5 bg-[#131615] border border-neutral-800/80 rounded-sm hover:border-neutral-700 transition-colors"
                    >
                      <div className="flex items-center gap-3 md:w-1/3 shrink-0">
                        <span className="flex items-center justify-center w-6 h-6 text-[11px] font-mono font-bold bg-[#1a1e1c] text-editorial-orange border border-neutral-700 rounded-sm">
                          0{node.step}
                        </span>
                        <span className="text-xs font-semibold text-editorial-cream font-mono uppercase">
                          {node.title}
                        </span>
                      </div>

                      <div className="text-xs text-neutral-400 md:w-2/3 leading-relaxed">
                        {node.description}
                      </div>

                      {node.technologies && node.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1 md:w-auto shrink-0">
                          {node.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-mono px-1.5 py-0.5 bg-[#1a1e1c] text-editorial-gray border border-neutral-800 rounded-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem Statement & Proposed Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="border border-neutral-800 bg-[#1a1e1c]/30 p-5 rounded-sm">
                  <div className="font-mono text-xs uppercase tracking-widest text-editorial-gray mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-editorial-gray rounded-full" />
                    Problem Statement
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="border border-neutral-800 bg-[#1a1e1c]/30 p-5 rounded-sm">
                  <div className="font-mono text-xs uppercase tracking-widest text-editorial-cream mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-editorial-orange rounded-full" />
                    Proposed Solution
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Implementation Pipeline Notes */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="w-4 h-4 text-editorial-orange" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-editorial-cream font-semibold">
                    Implementation Pipeline Notes
                  </h3>
                </div>
                <div className="border border-neutral-800 bg-[#131615] divide-y divide-neutral-900 rounded-sm">
                  {project.implementationDetails.map((detail, idx) => (
                    <div key={idx} className="p-4 flex items-start gap-3">
                      <span className="font-mono text-xs text-editorial-orange shrink-0 pt-0.5 font-bold">
                        [{String(idx + 1).padStart(2, "0")}]
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-editorial-cream" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-editorial-cream font-semibold">
                    Key Features
                  </h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="border border-neutral-800 bg-[#1a1e1c]/40 p-3.5 text-xs sm:text-sm text-neutral-300 flex items-start gap-2.5 rounded-sm"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-editorial-orange shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Challenges & Trade-offs */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 text-editorial-orange" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-editorial-cream font-semibold">
                    Technical Challenges & Trade-offs
                  </h3>
                </div>
                <div className="space-y-3">
                  {project.technicalChallenges.map((challenge, idx) => (
                    <div
                      key={idx}
                      className="border-l-2 border-editorial-orange bg-[#1a1e1c]/40 p-4 pl-5 text-xs sm:text-sm text-neutral-300 leading-relaxed rounded-r-sm"
                    >
                      {challenge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Contribution & Results */}
              <div className="border border-neutral-800 bg-[#1a1e1c]/60 p-5 sm:p-6 space-y-4 rounded-sm">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-editorial-orange" />
                  <h3 className="font-mono text-xs uppercase tracking-widest text-editorial-cream font-semibold">
                    Personal Engineering Contribution
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {project.personalContribution}
                </p>

                {project.metricsOrResults && project.metricsOrResults.length > 0 && (
                  <div className="pt-3 border-t border-neutral-800">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-3.5 h-3.5 text-editorial-orange" />
                      <span className="font-mono text-[11px] uppercase tracking-wider text-editorial-cream font-semibold">
                        Observed Results & Metrics
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs font-mono text-neutral-400">
                      {project.metricsOrResults.map((metric, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-editorial-orange">→</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Bottom Actions Bar */}
            <div className="border-t border-neutral-800 bg-[#131615] px-6 py-4 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-500">ESC TO CLOSE</span>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-editorial-cream text-neutral-950 font-semibold uppercase tracking-wider hover:bg-editorial-orange hover:text-white transition-colors rounded-sm"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
