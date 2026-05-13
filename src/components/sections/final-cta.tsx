"use client"

import { Button } from "@/components/ui/button"
import { Meteors } from "@/components/ui/meteors"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { ShineBorder } from "@/components/ui/shine-border"
import { Zap, ArrowRight, Headphones } from "lucide-react"
import { useTheme } from "next-themes"

const trustBadges = [
  { icon: Zap, label: "Implantação em dias" },
  { icon: ArrowRight, label: "Sem interrupção da operação" },
  { icon: Headphones, label: "Suporte especializado" },
]

export function FinalCTA() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const blueOpacity = isDark ? "via-brand-blue/30" : "via-brand-blue/10"

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b from-background dark:from-brand-black ${blueOpacity} to-background dark:to-brand-black`} />

      {/* Meteors background */}
      <Meteors number={30} />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-12 lg:px-16 py-10 sm:py-16 text-center glass rounded-3xl overflow-hidden">
        <ShineBorder />
        <TextAnimate
          as="h2"
          by="word"
          animation="blurInUp"
          duration={0.4}
          className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground dark:text-white mb-6"
        >
          Sem mensalidade. Sem fidelidade. Sem volume mínimo. Só uma conversa.
        </TextAnimate>

        <BlurFade delay={0.3} inView>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Credenciamento em até 7 dias úteis. O nosso time conhece o setor
            extrajudicial — não vai pedir contrato social nem questionar sua
            estrutura de atribuições. Uma conversa é o suficiente.
          </p>
        </BlurFade>

        <BlurFade delay={0.4} inView>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <a href="/contato">Fale com um Especialista</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#solucao">Conhecer a Solução</a>
            </Button>
          </div>
        </BlurFade>

        {/* Trust badges */}
        <BlurFade delay={0.5} inView>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2">
                <badge.icon className="h-4 w-4 text-brand-green" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{badge.label}</span>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
