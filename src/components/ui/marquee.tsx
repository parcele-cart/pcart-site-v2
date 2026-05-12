"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: React.ReactNode
  speed?: number
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  speed = 40,
}: MarqueeProps) {
  const trackStyle: React.CSSProperties = {
    animationDuration: `${speed}s`,
    animationDirection: reverse ? "reverse" : "normal",
  }

  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:1rem] gap-[var(--gap)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={trackStyle}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={trackStyle}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}
