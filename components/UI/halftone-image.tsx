"use client";

import React from "react";

interface HalftoneImageProps {
  className?: string;
  caption?: string;
  spec?: string;
}

export function HalftoneImage({
  className = "",
  caption = "SYS_REF // PORTRAIT_01",
  spec = "RES: 2400x3200 // MONO_64K",
}: HalftoneImageProps) {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* 4-Stripe Accent Ribbon Header Badge */}
      <div className="absolute -top-3 left-4 z-30 flex items-center h-2 w-16 stripe-bar-heath shadow-md border border-neutral-900" />

      {/* Floating Outline Triangle (Top Left) */}
      <svg
        className="absolute -top-6 -left-6 w-10 h-10 text-editorial-gray opacity-60 pointer-events-none select-none"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <polygon points="20,4 36,36 4,36" strokeDasharray="3 3" />
      </svg>

      {/* Floating Outline Concentric Rings (Top Right) */}
      <svg
        className="absolute -top-8 -right-6 w-14 h-14 text-editorial-orange/70 opacity-80 pointer-events-none select-none"
        viewBox="0 0 50 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <circle cx="25" cy="25" r="22" strokeDasharray="2 3" />
        <circle cx="25" cy="25" r="14" />
        <circle cx="25" cy="25" r="2.5" fill="#f14d05" />
      </svg>

      {/* Floating Directional Arrow Indicator (Bottom Left) */}
      <div className="absolute -bottom-5 -left-4 font-mono text-[11px] text-neutral-400 border border-neutral-800 bg-[#131615] px-2.5 py-1 rounded flex items-center gap-1.5 pointer-events-none select-none shadow">
        <span className="text-editorial-orange font-bold">↗</span>
        <span>CV_MODEL // 512D</span>
      </div>

      {/* Floating Coordinate Crosshairs (Bottom Right) */}
      <svg
        className="absolute -bottom-6 -right-6 w-12 h-12 text-editorial-gray opacity-70 pointer-events-none select-none"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        aria-hidden="true"
      >
        <line x1="20" y1="4" x2="20" y2="36" strokeDasharray="2 2" />
        <line x1="4" y1="20" x2="36" y2="20" strokeDasharray="2 2" />
        <rect x="14" y="14" width="12" height="12" stroke="currentColor" strokeWidth="0.75" />
      </svg>

      {/* Outer Technical Editorial Frame */}
      <div className="relative w-full border border-neutral-800 bg-[#1a1e1c]/80 p-3 sm:p-4 rounded-sm shadow-2xl">
        {/* Corner Technical Crosshairs with Orange Accents */}
        <div className="absolute -top-[5px] -left-[5px] text-[10px] font-mono text-editorial-orange select-none font-bold">
          +
        </div>
        <div className="absolute -top-[5px] -right-[5px] text-[10px] font-mono text-editorial-orange select-none font-bold">
          +
        </div>
        <div className="absolute -bottom-[5px] -left-[5px] text-[10px] font-mono text-editorial-orange select-none font-bold">
          +
        </div>
        <div className="absolute -bottom-[5px] -right-[5px] text-[10px] font-mono text-editorial-orange select-none font-bold">
          +
        </div>

        {/* Cutout Silhouette Container with Halftone Filter */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#131615] border border-neutral-800 flex items-center justify-center">
          {/* Base SVG Halftone Dot Matrix Pattern */}
          <div className="absolute inset-0 bg-halftone opacity-50 pointer-events-none" />

          {/* Technical Alignment Coordinates Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-3.5 pointer-events-none select-none z-10">
            <div className="flex justify-between items-start text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              <span className="text-editorial-orange font-semibold">FIG. 01 [INDEX]</span>
              <span>GRID: 0.125mm</span>
            </div>
            <div className="flex justify-between items-end text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
              <span>DEV_STAGE // PROD</span>
              <span className="text-editorial-cream font-mono">LAT: 28.6139° N</span>
            </div>
          </div>

          {/* High-Contrast Monochromatic Cutout Portrait Silhouette */}
          <svg
            className="w-4/5 h-4/5 text-editorial-cream opacity-95 transition-transform duration-700 ease-out hover:scale-105 z-0"
            viewBox="0 0 200 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Editorial technical cutout silhouette"
          >
            {/* Geometric Contour Rings & Scan Lines */}
            <circle
              cx="100"
              cy="90"
              r="45"
              stroke="#797c75"
              strokeWidth="0.8"
              strokeDasharray="2 3"
            />
            <circle
              cx="100"
              cy="90"
              r="68"
              stroke="#2d3330"
              strokeWidth="1"
            />
            <circle
              cx="100"
              cy="90"
              r="88"
              stroke="#f14d05"
              strokeWidth="0.75"
              strokeDasharray="4 4"
              opacity="0.6"
            />

            {/* Stylized Monochromatic Head & Face Contour */}
            <path
              d="M100 45 C80 45 68 58 68 84 C68 114 84 130 100 130 C116 130 132 114 132 84 C132 58 120 45 100 45 Z"
              fill="#1a1e1c"
              stroke="#797c75"
              strokeWidth="1.2"
            />

            {/* Facial Centerline & Scan Alignment Grid */}
            <line x1="100" y1="35" x2="100" y2="140" stroke="#797c75" strokeWidth="0.75" strokeDasharray="3 3" />
            <line x1="60" y1="85" x2="140" y2="85" stroke="#797c75" strokeWidth="0.75" strokeDasharray="3 3" />

            {/* Angular Shoulders and Torso Cutout */}
            <path
              d="M38 220 L38 184 C38 158 68 146 100 146 C132 146 162 158 162 184 L162 220"
              fill="#131615"
              stroke="#444b46"
              strokeWidth="1.2"
            />

            {/* Metric Feature Keypoints */}
            <circle cx="100" cy="85" r="3" fill="#f14d05" />
            <circle cx="85" cy="82" r="1.5" fill="#ebe4d4" />
            <circle cx="115" cy="82" r="1.5" fill="#ebe4d4" />
            <circle cx="100" cy="112" r="2" fill="#797c75" />
          </svg>

          {/* Halftone High-contrast Screen Texture Overlay */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, rgba(235,228,212,0.18) 1.5px, transparent 1.5px)",
              backgroundSize: "6px 6px",
            }}
          />
        </div>

        {/* Technical Footer Metadata Annotation */}
        <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-neutral-400 tracking-tight">
          <span>{caption}</span>
          <span className="hidden sm:inline-block text-editorial-gray">{spec}</span>
        </div>
      </div>
    </div>
  );
}
