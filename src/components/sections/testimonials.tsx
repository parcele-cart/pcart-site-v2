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
import { Button } from "@/components/ui/button"
import { ease } from "@/lib/utils"
import { Quote } from "lucide-react"

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

      <div className="sticky top-0 min-h-screen flex flex-col justify-between">
        <div className="relative z-10 py-24 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] w-full">
          <div className="mx-auto max-w-7xl space-y-10 text-center">
            <div className="max-w-3xl mx-auto">
              <BlurFade inView>
                <Badge variant="neon" className="mb-4">
                  Prova social
                </Badge>
              </BlurFade>
              <BlurFade delay={0.1} inView>
                <h2 className="font-bold text-3xl sm:text-4xl lg:text-4xl text-foreground dark:text-white mb-4 leading-tight">
                  Os cartórios que já transformaram<br />
sua operação financeira.
                </h2>
              </BlurFade>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.45, ease }}
                  className={`glass rounded-[2rem] border border-white/10 p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.18)] transition-transform duration-500 ${
                    index === activeIndex
                      ? "scale-[1.02] ring-2 ring-brand-green/30 bg-white/5"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 text-brand-green">
                      <Quote className="w-7 h-7" />
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-foreground dark:text-white leading-relaxed mb-8 text-left">
                    {item.quote}
                  </p>
                  <div className="border-t border-white/10 pt-6">
                    <p className="font-semibold text-foreground dark:text-white text-base text-left">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 text-left">
                      {item.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] pb-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              Fale com a gente e conheça como podemos ajudar seu cartório.
            </p>
            <Button size="lg" asChild>
              <a href="/contato">Fale com a gente</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
