"use client"

import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Particles } from "@/components/ui/particles"
import { useTheme } from "next-themes"

interface InstitutionalHeaderProps {
  title: string
  subtitle?: string
  lastUpdated?: string
  centered?: boolean
}

export function InstitutionalHeader({
  title,
  subtitle = "INSTITUCIONAL PARCELECART",
  lastUpdated,
  centered = false,
}: InstitutionalHeaderProps) {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const particleColor = isDark ? "#5EF275" : "#3D9A64"

  return (
    <section className="relative pt-32 pb-12 lg:pt-48 lg:pb-16 overflow-hidden border-b border-foreground/5 dark:border-white/5">
      {/* Background System */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-brand-green/5 dark:from-brand-black dark:via-brand-black dark:to-brand-green/10" />

      <Particles
        className="absolute inset-0"
        quantity={30}
        staticity={80}
        color={particleColor}
        opacity={isDark ? 0.3 : 0.5}
        size={0.5}
      />

      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className={`relative z-10 max-w-8xl mx-auto px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] ${centered ? "text-center" : ""}`}>
        <div className={`max-w-4xl ${centered ? "mx-auto" : ""}`}>
          <BlurFade delay={0.1} inView>
            <Badge variant="neon" className="mb-4 text-sm">
              {subtitle}
            </Badge>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl text-foreground dark:text-white mb-4 leading-[1.1] tracking-tight">
              {title}
            </h1>
          </BlurFade>

          {lastUpdated && (
            <BlurFade delay={0.3} inView>
              <div className={`flex items-center gap-2 text-gray-400 dark:text-gray-500 ${centered ? "justify-center" : ""}`}>
                {!centered && <div className="w-8 h-px bg-brand-green/40" />}
                <p className="text-sm sm:text-base font-medium tracking-wide">
                  Última atualização em {lastUpdated}
                </p>
                {centered && <div className="w-8 h-px bg-brand-green/40 mx-auto" />}
              </div>
            </BlurFade>
          )}
        </div>
      </div>
    </section>
  )
}
