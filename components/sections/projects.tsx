"use client";

import React, { useState } from "react";
import { projects } from "@/data/portfolio-data";
import { Project } from "@/types";
import { ProjectCard } from "@/components/UI/project-card";
import { CaseStudyModal } from "@/components/UI/case-study-modal";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      id="projects"
      className="relative border-b border-neutral-800 py-20 sm:py-24 md:py-32 bg-[#131615]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Cream & Orange Emphasis */}
        <div className="border-b border-neutral-800 pb-8 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-editorial-cream/70 mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-editorial-orange rounded-full shadow-[0_0_8px_#f14d05]" />
                <span className="font-bold text-editorial-cream">Section // 01</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-editorial-cream-light">
                Selected Engineering Projects
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-mono text-editorial-cream/80 bg-editorial-charcoal/50 p-3 rounded-sm border border-neutral-800">
              In-depth production architectures spanning computer vision, document
              intelligence, and precision machine learning pipelines.
            </p>
          </div>
        </div>

        {/* Projects Sequence List */}
        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <ProjectCard
                project={project}
                index={index}
                onOpenCaseStudy={handleOpenCaseStudy}
              />
              {index < projects.length - 1 && (
                <div
                  className="flex items-center justify-between text-[11px] font-mono px-4 select-none"
                  aria-hidden="true"
                >
                  <span className="text-editorial-orange font-bold">// SYSTEM DELIMITER</span>
                  <span className="h-px flex-1 mx-4 bg-neutral-800" />
                  <span className="text-editorial-cream/70 font-semibold">0{index + 1} ↔ 0{index + 2}</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
