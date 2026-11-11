"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio-data";
import { HalftoneImage } from "@/components/UI/halftone-image";
import { ArrowDownRight, Mail, Github, Linkedin, MessageSquare } from "lucide-react";
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

  // Smooth scroll helper for buttons
  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    selector: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", selector);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4.25rem)] flex flex-col justify-between border-b border-neutral-800 bg-[#131615]"
    >
      {/* Main Editorial Hero Body */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto py-12 md:py-20 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Typography Hierarchy & Action Triggers */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Monospaced Professional Title Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-editorial-charcoal border border-neutral-700 text-editorial-cream font-mono text-[10px] sm:text-xs tracking-wider uppercase rounded-full shadow-sm">
                <span className="inline-block h-2 w-2 bg-editorial-orange rounded-full shadow-[0_0_8px_rgba(241,77,5,0.7)]" />
                <span className="font-semibold text-editorial-cream-light">
                  {personalInfo.roleTitle}
                </span>
              </div>
            </motion.div>

            {/* Large High-Impact Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.06]">
                <span className="text-editorial-cream-light">Building digital experiences.</span>
                <br />
                <span className="text-editorial-orange font-extrabold">
                  Engineering meaningful solutions.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Introduction */}
            <motion.div variants={itemVariants}>
              <p className="max-w-2xl text-base sm:text-lg text-editorial-cream/90 leading-relaxed font-normal bg-editorial-charcoal/40 p-4 rounded-sm border-l-2 border-editorial-cream">
                {personalInfo.description}
              </p>
            </motion.div>

            {/* Action Buttons & Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary Cadmium Orange Action Button: View Projects */}
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "#projects")}
                className="group inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-white bg-editorial-orange hover:bg-editorial-orange-hover transition-all rounded-full shadow-[0_4px_20px_rgba(241,77,5,0.35)] border border-editorial-orange active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              {/* Secondary Vintage Cream Action Button: Get in Touch */}
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-wider font-bold text-editorial-black bg-editorial-cream hover:bg-editorial-cream-light transition-all rounded-full border border-editorial-cream-light shadow-[0_4px_16px_rgba(235,228,212,0.15)] active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-editorial-charcoal" />
                <span>Get in Touch</span>
              </a>

              {/* Social Profile Icon Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-editorial-charcoal border border-neutral-700 text-editorial-cream hover:text-white hover:border-editorial-orange rounded-full transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-editorial-charcoal border border-neutral-700 text-editorial-cream hover:text-white hover:border-editorial-orange rounded-full transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 bg-editorial-charcoal border border-neutral-700 text-editorial-cream hover:text-white hover:border-editorial-orange rounded-full transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Editorial Technical Meta Footnote */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-neutral-800 flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-editorial-cream/80"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-8 stripe-bar-heath inline-block rounded-xs shadow-xs" />
                <span className="font-semibold text-editorial-cream">
                  MMMUT GORAKHPUR • B.TECH CSE (2024–2028)
                </span>
              </div>
              <div className="text-neutral-400">CGPA: {personalInfo.cgpa}</div>
              <div className="text-editorial-orange font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-editorial-orange rounded-full animate-ping" />
                <span>WINNER: IIT BOMBAY TECHFEST 2025</span>
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
                caption="PORTRAIT // RITESH_YADAV"
                spec="B.TECH CSE // MMMUT"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Subtle Grid Line with 4-Stripe Accent & Charcoal Bar */}
      <div className="w-full border-t border-neutral-800 py-3 px-4 sm:px-6 lg:px-8 bg-editorial-charcoal/80">
        <div className="mx-auto max-w-7xl flex items-center justify-between text-[11px] font-mono text-editorial-cream/80">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-editorial-orange rounded-full shadow-[0_0_6px_#f14d05]" />
            <span className="font-semibold text-editorial-cream-light">
              CORE STACK: MERN (MONGODB, EXPRESS.JS, REACT, NODE.JS) • PYTHON • FASTAPI
            </span>
          </div>
          <span className="hidden sm:inline text-editorial-cream/60">
            RITESH YADAV PORTFOLIO
          </span>
        </div>
      </div>
    </section>
  );
}
