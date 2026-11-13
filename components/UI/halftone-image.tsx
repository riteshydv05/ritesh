"use client";

import React from "react";
import Image from "next/image";

interface HalftoneImageProps {
  className?: string;
  caption?: string;
  spec?: string;
}

const PORTRAIT_URL =
  "https://res.cloudinary.com/s2tcil9t/image/upload/v1794239964/Monochrome_Halftone_Portrait_with_Geometric_Accents.png";

export function HalftoneImage({
  className = "",
  caption = "HEATH_EDITION // PORTRAIT_01",
  spec = "RES: 2400x3200 // MONO_64K",
}: HalftoneImageProps) {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* 4-Stripe Accent Ribbon Header Badge */}
      <div className="absolute -top-3 left-4 z-30 flex items-center h-2 w-16 stripe-bar-heath shadow-md border border-neutral-900" />

      {/* Floating Outline Triangle (Top Left) */}
      <svg
        className="absolute -top-6 -left-6 w-10 h-10 text-editorial-gray opacity-60 pointer-events-none select-none z-20"
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
        className="absolute -top-8 -right-6 w-14 h-14 text-editorial-orange/70 opacity-80 pointer-events-none select-none z-20"
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
      <div className="absolute -bottom-5 -left-4 font-mono text-[11px] text-editorial-cream border border-neutral-700 bg-editorial-charcoal px-2.5 py-1 rounded flex items-center gap-1.5 pointer-events-none select-none shadow z-20">
        <span className="text-editorial-orange font-bold">↗</span>
        <span>CV_MODEL // 512D</span>
      </div>

      {/* Floating Coordinate Crosshairs (Bottom Right) */}
      <svg
        className="absolute -bottom-6 -right-6 w-12 h-12 text-editorial-gray opacity-70 pointer-events-none select-none z-20"
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
      <div className="relative w-full border border-neutral-800 bg-editorial-charcoal/80 p-3 sm:p-4 rounded-sm shadow-2xl">
        {/* Corner Technical Crosshairs with Orange Accents */}
        <div className="absolute -top-[5px] -left-[5px] text-[10px] font-mono text-editorial-orange select-none font-bold z-20">
          +
        </div>
        <div className="absolute -top-[5px] -right-[5px] text-[10px] font-mono text-editorial-orange select-none font-bold z-20">
          +
        </div>
        <div className="absolute -bottom-[5px] -left-[5px] text-[10px] font-mono text-editorial-orange select-none font-bold z-20">
          +
        </div>
        <div className="absolute -bottom-[5px] -right-[5px] text-[10px] font-mono text-editorial-orange select-none font-bold z-20">
          +
        </div>

        {/* Portrait Silhouette Container */}
        <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-[#131615] border border-neutral-800 flex items-center justify-center rounded-xs group">
          {/* Technical Alignment Coordinates Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-3.5 pointer-events-none select-none z-20">
            <div className="flex justify-between items-start text-[10px] font-mono uppercase tracking-widest bg-editorial-charcoal/90 px-2 py-0.5 rounded-xs border border-neutral-700/80 w-fit">
              <span className="text-editorial-orange font-semibold">FIG. 01 [INDEX]</span>
            </div>
            <div className="flex justify-between items-end text-[10px] font-mono uppercase tracking-widest bg-editorial-charcoal/90 px-2 py-0.5 rounded-xs border border-neutral-700/80 w-fit self-end">
              <span className="text-editorial-cream font-mono">LAT: 28.6139° N</span>
            </div>
          </div>

          {/* Portrait Image (uses Cloudinary link directly, no local asset) */}
          <div className="relative w-full h-full min-h-[360px] sm:min-h-[420px]">
            <Image
              src={PORTRAIT_URL}
              alt="Monochrome Halftone Portrait with Geometric Accents"
              fill
              priority
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 450px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* Technical Footer Metadata Annotation */}
        <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-editorial-cream/70 tracking-tight">
          <span>{caption}</span>
          <span className="hidden sm:inline-block text-editorial-orange font-semibold">
            {spec}
          </span>
        </div>
      </div>
    </div>
  );
}
