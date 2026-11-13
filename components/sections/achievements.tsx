"use client";

import React from "react";
import { achievements } from "@/data/portfolio-data";
import { Award, Trophy } from "lucide-react";

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative border-b border-neutral-800 py-20 sm:py-24 md:py-32 bg-[#131615]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="border-b border-neutral-800 pb-8 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-editorial-cream/70 mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-editorial-orange rounded-full shadow-[0_0_8px_#f14d05]" />
                <span className="font-bold text-editorial-cream">Honors & Competitions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-editorial-cream-light">
                ACHIEVEMENTS & RECOGNITION
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm font-mono text-editorial-cream/80 bg-editorial-charcoal/50 p-3 rounded-sm border border-neutral-800">
              National hackathons and collegiate technology competitions.
            </p>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item, index) => {
            const isWinner = item.badge === "WINNER";
            const formattedIndex = String(index + 1).padStart(2, "0");

            return (
              <div
                key={item.id}
                className={`group border ${
                  isWinner
                    ? "border-editorial-orange bg-editorial-charcoal/90 shadow-[0_4px_24px_rgba(241,77,5,0.2)]"
                    : "border-neutral-800 bg-editorial-charcoal/70"
                } p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-editorial-orange hover:bg-editorial-charcoal/95 rounded-sm relative overflow-hidden`}
              >
                {/* Left Stripe Indicator */}
                <div
                  className={`absolute top-0 left-0 w-1.5 h-full ${
                    isWinner ? "bg-editorial-orange" : "stripe-bar-heath opacity-70"
                  }`}
                />

                <div className="pl-2">
                  {/* Card Header with Badges */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-700/80 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`p-2 rounded-sm border ${
                          isWinner
                            ? "bg-editorial-orange text-white border-editorial-orange shadow-[0_0_10px_rgba(241,77,5,0.5)]"
                            : "bg-[#131615] text-editorial-orange border-neutral-700"
                        }`}
                      >
                        {isWinner ? (
                          <Trophy className="w-4 h-4" />
                        ) : (
                          <Award className="w-4 h-4" />
                        )}
                      </div>
                      <span className="font-mono text-xs text-editorial-cream font-bold">
                        {`HONOR // ${formattedIndex}`}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full border ${
                        isWinner
                          ? "bg-editorial-orange text-white border-editorial-orange shadow-[0_0_8px_#f14d05]"
                          : "bg-editorial-cream text-editorial-black border-editorial-cream font-extrabold"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-bold tracking-tight text-editorial-cream-light mb-1.5 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-editorial-orange font-semibold mb-4">
                    <span>{item.organization}</span>
                    {item.year && (
                      <>
                        <span className="text-neutral-500">•</span>
                        <span className="text-editorial-cream/70">{item.year}</span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-editorial-cream/85 leading-relaxed bg-[#131615]/50 p-3.5 rounded-sm border border-neutral-800">
                    {item.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-3 border-t border-neutral-750 flex items-center justify-between text-[11px] font-mono text-editorial-cream/60 pl-2">
                  <span>VERIFIED COMPETITIVE MILESTONE</span>
                  <span className="text-editorial-orange font-semibold">STATUS: VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

