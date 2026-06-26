import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "group relative inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-foreground/10 dark:border-white/10 border-b-0 bg-background dark:bg-[#0D0D0D] px-8 py-2 text-sm font-semibold text-foreground dark:text-white outline-none transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue-light/20 active:scale-[0.96] active:translate-y-0 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          /* Rainbow border effect layers (bottom curve only via mask) */
          "before:absolute before:inset-[-2px] before:-z-10 before:rounded-[13px] before:animate-rainbow before:bg-[linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5))] before:bg-[length:200%] before:opacity-100 before:[mask-image:linear-gradient(to_bottom,transparent_calc(100%-2px),white_calc(100%-2px))] before:[mask-composite:exclude] before:[mask-clip:padding-box]",
          /* Base sizing and flex properties */
          "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
          /* Outer glow (bottom only) */
          "after:absolute after:bottom-[-2px] after:left-[5%] after:right-[5%] after:-z-20 after:h-[10px] after:rounded-b-xl after:animate-rainbow after:bg-[linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5))] after:bg-[length:200%] after:blur-[14px]",
          className
        )}
        {...props}
      />
    )
  }
)

RainbowButton.displayName = "RainbowButton"

export { RainbowButton }
