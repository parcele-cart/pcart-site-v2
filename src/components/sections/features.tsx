"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { ShineBorder } from "@/components/ui/shine-border"
import { Particles } from "@/components/ui/particles"

const features = [
  {
    number: "01",
    title: "Receitas separadas por atribuição, automaticamente",
    highlight: "Liquidação em domicílios bancários distintos",
    description:
      "Cada pagamento recebido vai direto para a conta correspondente — Notas, Protesto, Registro de Imóveis ou Registro de Títulos. A segregação contábil acontece na origem, sem planilha, sem intervenção manual, sem risco de conciliação incorreta.",
    metric: "Segregação em D+1, direto no domicílio bancário de cada atribuição.",
  },
  {
    number: "02",
    title: "Parcelamento sem cálculo manual, nunca mais",
    highlight: "Repasse automático de taxas ao usuário final",
    description:
      "A máquina e o link de pagamento calculam a taxa do parcelamento em tempo real e a aplicam diretamente ao valor cobrado do usuário. Sua equipe não calcula nada. Acontece automaticamente, em conformidade com o Provimento CNJ n. 127/2022.",
    metric: "Zero erros de cobrança. Zero cálculos manuais. Permitido pelo CNJ.",
  },
  {
    number: "03",
    title: "O cliente paga como quiser. Você recebe de qualquer jeito.",
    highlight: "Todos os meios de pagamento, presencial e digital",
    description:
      "PIX por QR Code ou link, boleto bancário, cartão de débito e crédito parcelado em até 21 vezes — disponível no POS presencial, no link de pagamento digital e via API para automação completa. Nenhum usuário sai sem pagar por falta de opção.",
    metric: "6 meios de pagamento. 1 plataforma. Credenciamento em 3 a 7 dias úteis.",
  },
  {
    number: "04",
    title: "Relatórios que o regulador aceita. Sem adaptar nada.",
    highlight: "Comprovantes e recebíveis para o setor extrajudicial",
    description:
      "Documentos de comprovação de transação, relatórios de recebíveis e controles financeiros desenvolvidos especificamente para atender às exigências regulatórias do setor extrajudicial. Prestação de contas feita uma vez, sem retrabalho.",
    metric: "Compliance regulatório nativo — sem customização adicional.",
  },
  {
    number: "05",
    title: "A mesma condição para todos os cartórios, sem exceção",
    highlight: "Tabela de taxas padronizada e isonômica",
    description:
      "Uma única tabela de taxas aplicada de forma uniforme a todos os cartórios parceiros, independente de porte, região ou atribuição. Sem negociação caso a caso, sem concorrência de preços entre colegas, sem surpresa na fatura.",
    metric: "Transparência total. Sem mensalidade. Sem aluguel de máquina.",
  },
  {
    number: "06",
    title: "Conectado ao sistema que você já usa, em minutos",
    highlight: "Integração via API com os principais sistemas cartoriais",
    description:
      "A ParceleCart se integra nativamente com Siscart, 4 Hands, CSI, Inova e VizWise — automatizando cobrança, recebimento e conciliação direto no fluxo do ato praticado. A integração é feita pelo nosso time, sem impacto na sua operação.",
    metric: "Integração em minutos. Sem equipe de TI necessária.",
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
  return (
    <div className="rounded-[2rem] p-6 sm:p-8 lg:p-10 h-full w-full relative overflow-hidden flex flex-col justify-center backdrop-blur-xl bg-brand-green dark:bg-zinc-900/90 border border-brand-green/20 dark:border-white/10 shadow-xl dark:shadow-2xl">
      <ShineBorder
        shineColor={["#3D9A64", "#5EF275", "#2F3A59"]}
        duration={12}
        borderWidth={1}
      />

      <div className="flex flex-col gap-6 lg:gap-10 relative z-10">
        {/* Header row: number + highlight badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-5xl sm:text-7xl font-display font-bold text-white dark:text-brand-green/50 leading-none">
              {feature.number}
            </span>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-white/90 dark:from-brand-green/40 to-transparent" />
          </div>
          <Badge
            className="px-4 py-1.5 text-base bg-white/80 text-[#2F3A59] border border-[#2F3A59]/15 font-medium dark:bg-transparent dark:border-brand-green/20 dark:text-brand-green"
          >
            {feature.highlight}
          </Badge>
        </div>

        {/* Title + description */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl text-dark dark:text-white leading-[1.1] tracking-tight">
            {feature.title}
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-dark/80 dark:text-gray-400 leading-relaxed max-w-4xl">
            {feature.description}
          </p>
        </div>

        {/* Metric pill */}
        <div className="inline-flex items-center gap-4 rounded-2xl bg-white dark:bg-brand-green/5 border border-white/20 dark:border-brand-green/10 p-4 pr-6 w-fit shadow-xl dark:shadow-[0_0_20px_rgba(94,242,117,0.05)]">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-green dark:bg-brand-green shadow-[0_0_10px_rgba(61,154,100,0.4)] dark:shadow-[0_0_10px_rgba(94,242,117,0.8)]" />
          <p className="text-sm sm:text-lg text-[#1A4731] dark:text-brand-green font-bold">
            {feature.metric}
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center w-full">

            {/* Left — stays fixed */}
            <div className="max-w-xl">
              <BlurFade inView>
                <Badge variant="neon" className="mb-6">
                  Diferenciais Exclusivos
                </Badge>
              </BlurFade>

              <div className="space-y-8">
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-foreground dark:text-white leading-[1.05] tracking-tighter">
                  Funcionalidades que o{" "}
                  <span className="text-brand-green">cartório precisa</span>.
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Construídas do zero para serventias extrajudiciais. Nenhuma
                  dessas funcionalidades existe em adquirentes comuns.
                </p>

                {/* Visual step indicator */}
                <div className="flex items-center gap-1.5 pt-2">
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
                </div>
              </div>
            </div>

            {/* Right — crossfading cards */}
            <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full">
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
