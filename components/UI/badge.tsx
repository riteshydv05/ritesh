import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "active" | "orange" | "cream" | "charcoal";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-mono tracking-tight transition-colors rounded-xs",
        {
          "bg-editorial-charcoal text-editorial-cream border border-neutral-700/80":
            variant === "default",
          "bg-transparent text-editorial-cream border border-neutral-700":
            variant === "outline",
          "bg-editorial-cream text-editorial-black font-semibold border border-editorial-cream shadow-sm":
            variant === "active",
          "bg-editorial-orange/20 text-editorial-orange border border-editorial-orange/60 font-semibold shadow-[0_0_8px_rgba(241,77,5,0.2)]":
            variant === "orange",
          "bg-editorial-cream/20 text-editorial-cream-light border border-editorial-cream/40 font-medium":
            variant === "cream",
          "bg-[#242926] text-neutral-300 border border-[#333935]":
            variant === "charcoal",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
