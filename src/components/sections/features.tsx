"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { ShineBorder } from "@/components/ui/shine-border"
import { Particles } from "@/components/ui/particles"
import { cn, ease } from "@/lib/utils"

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

function FeatureCard({ 
  feature, 
  index, 
  scrollYProgress 
}: { 
  feature: typeof features[0], 
  index: number, 
  scrollYProgress: any 
}) {
  const start = index * 0.15
  const end = (index + 1) * 0.15
  
  // Clean, snappy transitions
  // Entrance: Card slides up from bottom
  const y = useTransform(scrollYProgress, [start - 0.1, start], ["100%", "0%"], { clamp: true })
  
  // Depth: Card scales down slightly when next one starts coming
  const scale = useTransform(scrollYProgress, [start, end, end + 0.1], [1, 1, 0.95], { clamp: true })
  
  // Opacity: Fades in and then dims slightly when covered
  const opacity = useTransform(scrollYProgress, [start - 0.05, start, end, end + 0.1], [0, 1, 1, 0.8], { clamp: true })

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1,
        position: "absolute",
        inset: 0,
      }}
      className="flex items-center justify-center p-4 sm:p-0"
    >
      <div className={cn(
        "rounded-[2rem] p-8 sm:p-12 lg:p-16 h-full w-full relative overflow-hidden flex flex-col justify-center transition-all duration-500 backdrop-blur-xl",
        "bg-brand-green dark:bg-zinc-900/90 border border-brand-green/20 dark:border-white/10 shadow-xl dark:shadow-2xl"
      )}>
        <ShineBorder 
          shineColor={["#3D9A64", "#5EF275", "#2F3A59"]} 
          duration={12} 
          borderWidth={1}
        />
        
        <div className="flex flex-col gap-6 lg:gap-10 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-5xl sm:text-7xl font-display font-bold text-white/20 dark:text-brand-green/20 leading-none transition-colors duration-500">
                {feature.number}
              </span>
              <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-white/30 dark:from-brand-green/40 to-transparent transition-colors duration-500" />
            </div>
            <Badge variant="outline" className="px-4 py-1.5 text-xs border-white/20 text-white dark:border-brand-green/20 dark:text-brand-green">
              {feature.highlight}
            </Badge>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl text-white dark:text-white leading-[1.1] tracking-tight">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-xl text-white/90 dark:text-gray-400 leading-relaxed max-w-4xl">
              {feature.description}
            </p>
          </div>
          
          <div className="inline-flex items-center gap-4 rounded-2xl bg-white dark:bg-brand-green/5 border border-white/10 dark:border-brand-green/10 p-5 pr-8 w-fit shadow-xl dark:shadow-[0_0_20px_rgba(94,242,117,0.05)] transition-colors duration-500">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-green dark:bg-brand-green shadow-[0_0_10px_rgba(61,154,100,0.4)] dark:shadow-[0_0_10px_rgba(94,242,117,0.8)]" />
            <p className="text-sm sm:text-lg text-[#1A4731] dark:text-brand-green font-bold">
              {feature.metric}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section 
      ref={containerRef}
      id="solucao" 
      className="relative min-h-[500vh] bg-background dark:bg-brand-black"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <FeatureBackground />
        
        <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] w-full h-full max-h-[90vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-center w-full">
            
            {/* Left Side: Fixed Title */}
            <div className="max-w-xl">
              <BlurFade inView>
                <Badge variant="neon" className="mb-6">
                  Diferenciais Exclusivos
                </Badge>
              </BlurFade>
              
              <div className="space-y-8">
                <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-foreground dark:text-white leading-[1.05] tracking-tighter">
                  Funcionalidades que o <span className="text-brand-green">cartório precisa</span>.
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  Construídas do zero para serventias extrajudiciais. Nenhuma dessas funcionalidades existe em adquirentes comuns.
                </p>
                <div className="h-1 w-20 bg-gradient-to-r from-brand-green to-transparent rounded-full" />
              </div>
            </div>

            {/* Right Side: Simple Clean Stacked Cards */}
            <div className="relative h-[500px] sm:h-[600px] lg:h-[650px] w-full">
              {features.map((feature, i) => (
                <FeatureCard 
                  key={feature.number} 
                  feature={feature} 
                  index={i} 
                  scrollYProgress={scrollYProgress} 
                />
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
