"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio-data";
import { HalftoneImage } from "@/components/UI/halftone-image";
import { ArrowDownRight, FileText } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants supporting reduced motion preferences
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: "easeOut",
      },
    },
  };

  // Smooth scroll helper for primary button
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#projects");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between border-b border-neutral-700 bg-editorial-charcoal-dark"
    >
      {/* Main Editorial Hero Body with Generous Cream & Charcoal Atmosphere */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto py-16 md:py-24 lg:py-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Typography Hierarchy & Action Triggers */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Monospaced Category Tag in Rich Charcoal with Cream & Orange Accent */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-editorial-charcoal border border-editorial-cream/30 text-editorial-cream font-mono text-[10px] sm:text-xs tracking-wider uppercase rounded-full shadow-sm">
                <span className="inline-block h-2 w-2 bg-editorial-orange rounded-full shadow-[0_0_8px_rgba(241,77,5,0.7)]" />
                <span className="font-bold text-editorial-cream-light">
                  SOFTWARE ENGINEERING • ARTIFICIAL INTELLIGENCE • FULL-STACK
                </span>
              </div>
            </motion.div>

            {/* Large High-Impact Headline with High-Contrast Cream & Orange Accents */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.06]">
                <span className="text-editorial-cream-light">Building intelligent software.</span>
                <br />
                <span className="text-editorial-orange font-extrabold">
                  Solving real-world problems.
                </span>
              </h1>
            </motion.div>

            {/* Sub-paragraph in Warm Cream on a Charcoal Slate Card */}
            <motion.div variants={itemVariants}>
              <div className="bg-editorial-charcoal/90 p-5 sm:p-6 rounded-sm border-l-4 border-editorial-cream shadow-md">
                <p className="text-base sm:text-lg text-editorial-cream-light leading-relaxed font-normal">
                  {personalInfo.description} Specialized in high-throughput computer vision
                  pipelines, document intelligence architectures, and resilient full-stack web platforms.
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary Cadmium Orange Action Button */}
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-white bg-editorial-orange hover:bg-editorial-orange-hover transition-all rounded-full shadow-[0_4px_20px_rgba(241,77,5,0.35)] border border-editorial-orange active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              {/* Secondary Vintage Cream Action Button */}
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-editorial-charcoal-dark bg-editorial-cream hover:bg-editorial-cream-light transition-all rounded-full border border-editorial-cream-light shadow-[0_4px_16px_rgba(235,228,212,0.25)] active:scale-95"
              >
                <FileText className="w-4 h-4 text-editorial-charcoal-dark" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Editorial Technical Meta Footnote with 4-Stripe Color Stamp */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-neutral-700/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-editorial-cream"
            >
              <div className="flex items-center gap-2 bg-editorial-charcoal px-3 py-1 rounded-full border border-neutral-700">
                <span className="h-2 w-8 stripe-bar-heath inline-block rounded-xs shadow-xs" />
                <span className="font-bold text-editorial-cream-light">NEW DELHI, INDIA</span>
              </div>
              <div className="text-editorial-cream/90 font-medium">SPECIALTY: AI / SYSTEMS ARCHITECTURE</div>
              <div className="text-editorial-orange font-bold flex items-center gap-1.5 bg-editorial-charcoal px-3 py-1 rounded-full border border-neutral-700">
                <span className="w-1.5 h-1.5 bg-editorial-orange rounded-full animate-ping" />
                <span>AVAILABILITY: OPEN FOR ROLES</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Monochrome Halftone Cutout Silhouette Container */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm sm:max-w-md">
              <HalftoneImage
                caption="HEATH_EDITION // PORTRAIT_01"
                spec="LATENT_DIM: 512-D // PYTORCH_MODEL"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Charcoal Bar with Cream & Orange Accents */}
      <div className="w-full border-t border-neutral-700 py-3.5 px-4 sm:px-6 lg:px-8 bg-editorial-charcoal">
        <div className="mx-auto max-w-7xl flex items-center justify-between text-[11px] font-mono text-editorial-cream">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-editorial-orange rounded-full shadow-[0_0_6px_#f14d05]" />
            <span className="font-bold text-editorial-cream-light">
              PIPELINES: FASTAPI • NEXT.JS 15 • PYTORCH • POSTGIS
            </span>
          </div>
          <span className="hidden sm:inline text-editorial-cream/80 font-medium">
            EDITORIAL PALETTE: CHARCOAL GREY • VINTAGE CREAM • CADMIUM ORANGE
          </span>
        </div>
      </div>
    </section>
  );
}
