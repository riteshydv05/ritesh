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
          "bg-editorial-cream/15 text-editorial-cream-light border border-editorial-cream/40 font-semibold":
            variant === "default",
          "bg-transparent text-editorial-cream border border-editorial-cream/30":
            variant === "outline",
          "bg-editorial-cream text-editorial-charcoal-dark font-bold border border-editorial-cream shadow-sm":
            variant === "active",
          "bg-editorial-orange/20 text-editorial-orange border border-editorial-orange/60 font-bold shadow-[0_0_8px_rgba(241,77,5,0.25)]":
            variant === "orange",
          "bg-editorial-cream text-editorial-charcoal-dark border border-editorial-cream font-bold":
            variant === "cream",
          "bg-editorial-charcoal text-editorial-cream border border-neutral-700":
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
