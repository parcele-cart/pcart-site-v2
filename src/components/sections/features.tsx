"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { ShineBorder } from "@/components/ui/shine-border"
import { Particles } from "@/components/ui/particles"

const features = [
  {
    number: "01 / 05",
    title: "Conciliação manual, ITBI e ITCMD na conta da serventia, e ato que não se conclui.",
    description:
      "Fim de mês vira caça ao comprovante: dezenas de Pix de certidão com o mesmo valor, conferidos um a um. Cada cartão é uma conta de cabeça para chegar ao repasse. E o orçamento de escritura fica parado — você levanta as certidões, faz o trabalho, envia o valor e só recebe de volta as duas marcas azuis no WhatsApp, porque o cliente não tem o valor à vista.",
    feature: false,
  },
  {
    number: "02 / 05",
    title: "A rotina da serventia não cabe em solução genérica — e quem opera cartório sabe.",
    description:
      "Atendimento ao público regulado, emolumentos por ato, segregação por atribuição, repasse para o estado. A solução de pagamento da serventia precisa entender tudo isso.",
    feature: false,
  },
  {
    number: "03 / 05",
    title: "A infraestrutura de pagamentos feita para cartório.",
    description:
      "Construída por quem conhece o setor por dentro. Integra ao seu sistema de gestão, calcula o repasse de taxas conforme o Provimento 127 e segrega cada atribuição em seu próprio domicílio bancário.",
    feature: true,
  },
  {
    number: "04 / 05",
    title: "Você passa a operar uma serventia à frente do setor.",
    description:
      "Quando a operação financeira flui sem fricção, a serventia inteira muda de patamar. Você fica conhecido pelo cartório que atende bem, recebe rápido e fecha o mês sem planilha.",
    feature: false,
  },
  {
    number: "05 / 05",
    title: "Fim de mês sem planilha, sem conciliação manual, sem caixa errado.",
    description:
      "Pix com confirmação imediata. Cartão liquidando segregado por atribuição. ITBI e ITCMD no trilho correto, fora da conta da serventia. Você fecha o mês conferindo o relatório, não montando.",
    feature: false,
  },
]

function FeatureBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-brand-black dark:via-[#0D1117] dark:to-brand-black" />
      <Particles
        className="absolute inset-0"
        quantity={50}
        staticity={70}
        color="#3D9A64"
        opacity={0.6}
        size={0.6}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-green/10 dark:bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-brand-blue/15 dark:bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none" />
    </>
  )
}

function FeatureCard({ feature }: { feature: (typeof features)[0] }) {
  const featured = feature.feature;

  return (
    <div className={`rounded-[2rem] p-6 sm:p-8 lg:p-10 h-full w-full max-w-[900px] mx-auto relative overflow-hidden flex flex-col justify-center backdrop-blur-xl border shadow-xl transition-all duration-200 ${
      featured
        ? "bg-brand-green/95 dark:bg-brand-green/20 border-brand-green/40 shadow-[0_0_80px_rgba(94,242,117,0.25)]"
        : "bg-brand-green dark:bg-zinc-900/90 border border-brand-green/20 dark:border-white/10 shadow-xl dark:shadow-2xl"
    }`}>
      <ShineBorder
        shineColor={["#3D9A64", "#5EF275", "#2F3A59"]}
        duration={12}
        borderWidth={1}
      />

      <div className="flex flex-col gap-6 lg:gap-10 relative z-10">
        {/* Header row: number */}
        <div className="flex items-center gap-4">
          <span className="text-3xl sm:text-3xl font-display font-bold text-white dark:text-brand-green/50 leading-none">
            {feature.number}
          </span>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-white/90 dark:from-brand-green/40 to-transparent" />
        </div>

        {/* Title + description */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-dark dark:text-white leading-[1.1] tracking-tight">
            {feature.title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-dark/80 dark:text-gray-400 leading-relaxed max-w-4xl">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Smooth spring so transitions aren't jumpy
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    // Clamp into [0, features.length - 1]
    const raw = Math.floor(latest * features.length)
    setActiveIndex(Math.min(features.length - 1, Math.max(0, raw)))
  })

  return (
    // Each feature gets ~1 viewport of scroll room
    <section
      ref={containerRef}
      id="solucao"
      className="relative bg-background dark:bg-brand-black"
      style={{ minHeight: `${features.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <FeatureBackground />

        <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] w-full h-full max-h-[90vh] flex items-center">
          <div className="grid grid-cols-1 gap-10 items-center w-full">

            {/* Left — stays fixed */}
            <div className="max-w-xl mx-auto text-center">
              <BlurFade inView>
                <Badge variant="neon" className="mb-6 mx-auto">
                  A virada
                </Badge>
              </BlurFade>

              <div className="space-y-12 text-center">
                <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-4xl text-foreground dark:text-white leading-[1.05] tracking-tighter">
                  Da conciliação manual ao<br/> fim de mês{" "}
                  <span className="text-brand-green">sem planilha</span>.
                </h2>

                {/* Visual step indicator */}
                {/* <div className="flex justify-center items-center gap-1.5 pt-2">
                  {features.map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        width: activeIndex === i ? 28 : 8,
                        backgroundColor:
                          i <= activeIndex
                            ? "var(--brand-green)"
                            : "rgba(94,242,117,0.15)",
                        opacity: i <= activeIndex ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="h-1.5 rounded-full"
                    />
                  ))}
                </div> */}
              </div>
            </div>

            {/* Right — crossfading cards */}
            <div className="relative h-[420px] sm:h-[420px] lg:h-[420px] w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <FeatureCard feature={features[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
