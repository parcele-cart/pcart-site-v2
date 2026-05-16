"use client"

import { useRef, useState, useEffect } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { ease } from "@/lib/utils"

const testimonials = [
  {
    quote:
      "Adotamos a ParceleCart e o retorno foi imediato: nossos clientes estão muito mais satisfeitos com a variedade de formas de pagamento disponível. É uma solução que recomendo com convicção aos colegas do setor.",
    name: "Olavo Pires de Camargo Filho",
    role: "3º Tabelião de Notas e de Protesto · São Caetano do Sul, SP",
  },
  {
    quote:
      "A ParceleCart presta um serviço que nenhuma outra operadora pensou em oferecer para o nosso segmento. Eles entendem todas as nossas necessidades — e isso faz toda a diferença no dia a dia do cartório.",
    name: "Marcelo",
    role: "Oficial, 15º Subdistrito · Bom Retiro, São Paulo, SP",
  },
  {
    quote:
      "Estamos muito satisfeitos em utilizar os serviços da ParceleCart. Desde que implementamos, a procura dos clientes por opções de parcelamento aumentou visivelmente.",
    name: "Paulo Augusto Rodrigues Cruz",
    role: "11º Tabelião de Notas · São Paulo, SP",
  },
]

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const activeIndexRef = useRef(0)
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const scrollIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, testimonials.length - 1]
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  useMotionValueEvent(scrollIndex, "change", (latest) => {
    const rounded = Math.max(0, Math.min(testimonials.length - 1, Math.round(latest)))
    if (rounded !== activeIndexRef.current) {
      activeIndexRef.current = rounded
      setActiveIndex(rounded)
    }
  })

  if (!mounted) {
    return (
      <section ref={sectionRef} className="min-h-[400vh] relative">
        <div className="sticky top-0 min-h-screen flex items-center justify-center">
          <div className="animate-pulse bg-foreground/5 w-24 h-8 rounded-full" />
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} className="min-h-[400vh] relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background dark:from-brand-black via-background dark:via-[#0F1419] to-background dark:to-brand-black" />
      
      {/* Dot pattern - Using CSS variable to prevent hydration mismatch */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, var(--brand-green) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="sticky top-0 min-h-screen flex items-center justify-center">
        <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] w-full">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16">
            <BlurFade inView>
              <Badge variant="neon" className="mb-4">
                O que dizem os tabeliães
              </Badge>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground dark:text-white mb-4">
                Os cartórios que já transformaram sua operação financeira
              </h2>
            </BlurFade>
          </div>

          {/* Quote area */}
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-7xl font-display text-brand-green/15">
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease }}
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-foreground dark:text-white leading-relaxed mb-8">
                  {testimonials[activeIndex].quote}
                </p>
                <p className="text-sm sm:text-base font-semibold text-foreground dark:text-white">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {testimonials[activeIndex].role}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Animated progress dots */}
            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  aria-label={`Ver depoimento ${i + 1}`}
                  animate={{
                    width: i === activeIndex ? 24 : 8,
                    backgroundColor: i === activeIndex ? "var(--brand-neon)" : "var(--dot-inactive)",
                  }}
                  transition={{ duration: 0.3, ease }}
                  className="h-2 rounded-full cursor-pointer transition-colors border-none outline-none"
                  onClick={() => {
                    if (sectionRef.current) {
                      const sectionTop = sectionRef.current.offsetTop;
                      const sectionHeight = sectionRef.current.offsetHeight;
                      const scrollTarget = sectionTop + (i / (testimonials.length - 1)) * (sectionHeight - window.innerHeight);
                      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
