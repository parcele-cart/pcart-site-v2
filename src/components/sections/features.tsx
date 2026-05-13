"use client"

import { useState, useRef, useCallback } from "react"
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from "motion/react"
import { useTheme } from "next-themes"
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
    metric:
      "6 meios de pagamento. 1 plataforma. Credenciamento em 3 a 7 dias úteis.",
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

const featureThresholds = features.map((_, i) => i / features.length)

function FeatureBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-background dark:from-brand-black via-background dark:via-[#0D1117] to-background dark:to-brand-black" />
      <Particles
        className="absolute inset-0"
        quantity={50}
        staticity={70}
        color="#3D9A64" // Using static green, Particles will adjust opacity
        opacity={0.6}
        size={0.6}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-green/10 dark:bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-brand-blue/15 dark:bg-brand-blue/10 rounded-full blur-[80px] pointer-events-none" />
    </>
  )
}

function FeatureProgressBar({
  index,
  activeIndex,
  scrollYProgress,
}: {
  index: number
  activeIndex: number
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  const zoneStart = index / features.length
  const zoneEnd = (index + 1) / features.length

  // Progress within this feature's scroll zone (0 to 1)
  const progress = useTransform(scrollYProgress, [zoneStart, zoneEnd], [0, 1], { clamp: true })

  const isPast = index < activeIndex
  const isCurrent = index === activeIndex

  return (
    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-foreground/10 overflow-hidden rounded-full">
      <motion.div
        className="w-full bg-brand-green origin-top"
        style={{
          height: isPast ? "100%" : isCurrent ? undefined : "0%",
          scaleY: isCurrent ? progress : undefined,
        }}
        initial={!isPast && !isCurrent ? { scaleY: 0 } : undefined}
      />
    </div>
  )
}

function FeatureContent({
  activeIndex,
  active,
  onTabClick,
  scrollYProgress,
}: {
  activeIndex: number
  active: typeof features[number]
  onTabClick: (i: number) => void
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"]
}) {
  return (
    <>
      {/* Header */}
      <div className="max-w-5xl mb-10 sm:mb-12 lg:mb-16">
        <BlurFade inView>
          <Badge variant="neon" className="mb-4">
            O que você ganha com a ParceleCart
          </Badge>
        </BlurFade>
        <BlurFade delay={0.1} inView>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground dark:text-white mb-4">
            Seis funcionalidades que os gateways genéricos não têm — e o
            cartório precisa.
          </h2>
        </BlurFade>
        <BlurFade delay={0.2} inView>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">
            Construídas do zero para serventias extrajudiciais. Nenhuma dessas
            funcionalidades existe em Stone, Cielo ou InfinitePay.
          </p>
        </BlurFade>
        <p className="text-sm text-gray-600 mt-2 lg:hidden">
          Toque em cada item para ver os detalhes
        </p>
      </div>

      {/* Feature selector + detail */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Feature list with progress bars */}
        <div className="space-y-2">
          {features.map((feature, i) => (
            <button
              key={feature.number}
              onClick={() => onTabClick(i)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 cursor-pointer relative ${i === activeIndex
                ? "bg-foreground/5 shadow-[inset_0_0_20px_rgba(94,242,117,0.1)] dark:shadow-[inset_0_0_20px_rgba(94,242,117,0.05)]"
                : "hover:bg-[var(--card-bg-hover)]"
                }`}
            >
              <FeatureProgressBar
                index={i}
                activeIndex={activeIndex}
                scrollYProgress={scrollYProgress}
              />
              <div className="flex items-start gap-3 pl-3">
                <span
                  className={`text-sm font-bold transition-colors duration-300 ${i === activeIndex ? "text-brand-green" : "text-gray-600"
                    }`}
                >
                  {feature.number}
                </span>
                <span
                  className={`text-base font-medium transition-colors duration-300 ${i === activeIndex ? "text-foreground dark:text-white" : "text-gray-600 dark:text-gray-400"
                    }`}
                >
                  {feature.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Right: Detail */}
        <div className="relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-10 relative overflow-hidden"
            >
              <ShineBorder />
              <span className="text-xs text-brand-green font-semibold uppercase tracking-widest">
                {active.highlight}
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-foreground dark:text-white mt-3 mb-4">
                {active.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {active.description}
              </p>
              <div className="rounded-xl bg-brand-green/5 border border-brand-green/10 p-4">
                <p className="text-sm text-brand-green font-medium">
                  {active.metric}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export function Features() {
  const [activeIndex, setActiveIndex] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(0)
  const active = features[activeIndex]

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    let newIndex = 0
    for (let i = featureThresholds.length - 1; i >= 0; i--) {
      if (latest >= featureThresholds[i]) {
        newIndex = i
        break
      }
    }
    const clamped = Math.max(0, Math.min(features.length - 1, newIndex))
    if (clamped !== activeIndexRef.current) {
      activeIndexRef.current = clamped
      setActiveIndex(clamped)
    }
  })

  const handleManualClick = useCallback((i: number) => {
    activeIndexRef.current = i
    setActiveIndex(i)
  }, [])

  return (
    <>
      {/* Desktop: scroll-driven wrapper */}
      <div ref={wrapperRef} className="hidden lg:block min-h-[300vh] relative">
        <section id="solucao" className="sticky top-0 min-h-screen flex items-center py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <FeatureBackground />
          <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] w-full">
            <FeatureContent
              activeIndex={activeIndex}
              active={active}
              onTabClick={handleManualClick}
              scrollYProgress={scrollYProgress}
            />
          </div>
        </section>
      </div>

      {/* Mobile: standard layout, no scroll-driven switching */}
      <section id="solucao-mobile" className="lg:hidden py-16 sm:py-20 relative overflow-hidden">
        <FeatureBackground />
        <div className="relative z-10 px-5 sm:px-8">
          <FeatureContent
            activeIndex={activeIndex}
            active={active}
            onTabClick={(i) => setActiveIndex(i)}
            scrollYProgress={scrollYProgress}
          />
        </div>
      </section>
    </>
  )
}
