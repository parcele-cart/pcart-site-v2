"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface NumberTickerProps {
  value: number
  prefix?: string
  suffix?: string
  className?: string
  decimalPlaces?: number
}

export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  className,
  decimalPlaces = 0,
}: NumberTickerProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const hasAnimatedRef = React.useRef(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el || hasAnimatedRef.current) return

    let rafId: number

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasAnimatedRef.current = true
          observer.disconnect()

          const duration = 2000
          const startTime = performance.now()

          const tick = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = `${prefix}${(eased * value).toFixed(decimalPlaces)}${suffix}`

            if (progress < 1) {
              rafId = requestAnimationFrame(tick)
            }
          }

          rafId = requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId)
    }
  }, [value, prefix, suffix, decimalPlaces])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}{(0).toFixed(decimalPlaces)}{suffix}
    </span>
  )
}
