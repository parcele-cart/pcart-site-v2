"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react"
import { BlurFade } from "@/components/ui/blur-fade"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Check, X } from "lucide-react"

const problems = [
  {
    number: "01",
    title: "Conciliação manual, ITBI e ITCMD na conta da serventia, e ato que não se conclui.",
    description:
      "Dezenas de Pix de recebidos sem identificação, com o mesmo valor, conferidos um a um. O orçamento de escritura fica parado, você examina o caso, calcula o valor, envia ao cliente e fica sem resposta, porque o cliente não tem o valor para pagar à vista.",
  },
  {
    number: "02",
    title: "A rotina da serventia não cabe em solução genérica — e quem opera cartório sabe.",
    description:
      "Atendimento ao público regulado, emolumentos por ato, segregação por atribuição, repasse para o estado. A solução de pagamento da serventia precisa entender tudo isso.",
  },
  {
    number: "03",
    title: "A infraestrutura de pagamentos feita para cartório.",
    description:
      "Construída por quem conhece o setor por dentro. Integra ao seu sistema de gestão, calcula o repasse de taxas conforme o Provimento 127 e segrega cada atribuição em seu próprio domicílio bancário.",
  },
  {
    number: "04",
    title: "Você passa a operar uma serventia à frente do setor.",
    description:
      "Quando a operação financeira flui sem fricção, a serventia inteira muda de patamar. Você fica conhecido pelo cartório que atende bem, recebe rápido e fecha o mês sem planilha.",
  },
  {
    number: "05",
    title: "Fim de mês sem planilha, sem conciliação manual, sem caixa errado.",
    description:
      "Pix com confirmação imediata. Cartão liquidando segregado por atribuição. ITBI e ITCMD no trilho correto, fora da conta da serventia. Você fecha o mês conferindo o relatório, não montando.",
  },
]

// Visual do card. Cards 01 e 02 são a dor ("Sem ParceleCart" — X cinza/
// desabilitado); 03, 04 e 05 são a solução ("Com ParceleCart" — check verde).
// `className` é usado para forçar `h-full` no deck animado.
function ProblemCard({
  problem,
  index,
  className,
}: {
  problem: (typeof problems)[number]
  index: number
  className?: string
}) {
  const isNegative = index < 2
  return (
    <div
      className={cn(
        "relative mx-auto flex w-full flex-col overflow-hidden rounded-3xl border bg-white p-6 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.75)] dark:bg-[#111A2E] lg:p-7",
        isNegative ? "border-gray-400/20" : "border-brand-green/20",
        className
      )}
    >
      {/* accents */}
      <div
        className={cn(
          "pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl",
          isNegative ? "bg-gray-400/10" : "bg-brand-green/10"
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b",
          isNegative ? "from-gray-400 to-gray-400/0" : "from-brand-green to-brand-green/0"
        )}
      />

      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
            isNegative ? "bg-red-500/10 text-red-500 dark:bg-red-500/15 dark:text-red-400" : "bg-brand-green/15 text-brand-green"
          )}
        >
          {isNegative ? (
            <X className="h-5 w-5" strokeWidth={3} />
          ) : (
            <Check className="h-5 w-5" strokeWidth={3} />
          )}
        </span>
        <span
          className={cn(
            "font-display text-sm font-bold uppercase tracking-wide lg:text-base",
            isNegative ? "text-gray-400" : "text-brand-green"
          )}
        >
          {isNegative ? "Sem ParceleCart" : "Com ParceleCart"}
        </span>
      </div>
      <h3 className="mt-3 mb-2 font-display text-base font-semibold leading-snug text-foreground dark:text-white lg:text-lg">
        {problem.title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {problem.description}
      </p>
    </div>
  )
}

function StackCard({
  problem,
  index,
  total,
  progress,
}: {
  problem: (typeof problems)[number]
  index: number
  total: number
  progress: MotionValue<number>
}) {
  // If it's the first card, make it fully visible immediately on arrival
  if (index === 0) {
    return (
      <motion.div
        style={{ y: "0%", scale: 1, opacity: 1, zIndex: 0 }}
        className="absolute inset-0"
      >
        <ProblemCard problem={problem} index={index} className="h-full" />
      </motion.div>
    )
  }

  // Scroll-driven deck for remaining cards.
  // The first card (index 0) is already showing. The remaining cards (1 to total-1)
  // slide in one by one. The transitions occupy [0, 0.9] of the scroll progress;
  // the final [0.9, 1.0] section holds the fully assembled deck.
  const launchSpan = 0.9
  const seg = launchSpan / (total - 1)
  const enterStart = (index - 1) * seg
  const enterEnd = index * seg

  // Sobe de fora da tela (110%) até cobrir (0%), com leve scale de entrada.
  // O card entra translúcido e vai ficando sólido enquanto sobe e cobre o
  // anterior — fica 100% opaco um pouco antes de assentar.
  const y = useTransform(progress, [enterStart, enterEnd], ["110%", "0%"])
  const scale = useTransform(progress, [enterStart, enterEnd], [0.98, 1])
  const opacity = useTransform(
    progress,
    [enterStart, enterStart + seg * 0.85],
    [0, 1]
  )
  return (
    <motion.div
      style={{ y, scale, opacity, zIndex: index }}
      className="absolute inset-0"
    >
      <ProblemCard problem={problem} index={index} className="h-full" />
    </motion.div>
  )
}

export function Problems() {
  const cardsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start start", "end end"],
  })
  // Suaviza o scroll bruto (passos de roda/trackpad) num movimento contínuo e liso.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.0005,
  })

  return (
    <section ref={cardsRef} className="relative lg:min-h-[500vh]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background dark:from-brand-black via-background dark:via-[#0F1419] to-background dark:to-brand-black" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 lg:opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, var(--brand-green) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(1100px circle at 50% 30%, white, transparent)",
          WebkitMaskImage: "radial-gradient(1100px circle at 50% 30%, white, transparent)",
        }}
      />

      {/* Desktop/tablet: sticky wrapper */}
      <div className="sticky top-20 min-h-[calc(100vh-5rem)] flex flex-col justify-center overflow-visible hidden lg:flex">
        <div className="relative z-10 mx-auto w-full max-w-8xl px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px]">
          {/* Header centered above */}
          <div className="text-center mb-3 lg:mb-4">
            <BlurFade inView>
              <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tighter text-foreground dark:text-white sm:text-4xl lg:text-5xl">
                Da conciliação manual ao<br className="hidden sm:inline" /> fim de mês{" "}
                <span className="text-brand-green">sem planilha</span>.
              </h2>
            </BlurFade>
          </div>

          <div className="grid grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            {/* LEFT: computer image */}
            <div className="flex justify-center">
              <BlurFade inView delay={0.1}>
                <div className="group relative w-full max-w-[760px]">
                  <div className="absolute -inset-4 rounded-full bg-brand-green/10 opacity-50 blur-3xl" />
                  <Image
                    src="/images/iMac-24-inch-v2.png"
                    alt="Recebíveis Cartórios"
                    width={1500}
                    height={1125}
                    sizes="(min-width: 1024px) 616px, (min-width: 640px) 448px, 100vw"
                    className="relative h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </BlurFade>
            </div>

            {/* RIGHT: stacking cards container */}
            <div className="relative w-full min-h-[320px]">
              {/* Régua invisível: o primeiro card (o mais alto) em fluxo normal
                  define a altura do bloco; todos os cards animados são
                  absolute inset-0 + h-full, então ficam com essa mesma altura. */}
              <div className="invisible pointer-events-none" aria-hidden>
                <ProblemCard problem={problems[0]} index={0} />
              </div>
              {problems.map((problem, i) => (
                <StackCard
                  key={problem.number}
                  problem={problem}
                  index={i}
                  total={problems.length}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: simple stacked list */}
      <div className="relative z-10 px-5 pb-20 pt-24 sm:px-8 lg:hidden">
        <div className="mb-10 text-center">
          <BlurFade inView>
            <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tighter text-foreground dark:text-white sm:text-4xl text-center">
              Da conciliação manual ao<br /> fim de mês{" "}
              <span className="text-brand-green">sem planilha</span>.
            </h2>
          </BlurFade>
          <BlurFade inView delay={0.1}>
            <div className="relative mx-auto mt-8 w-full max-w-md">
              <div className="absolute -inset-4 rounded-full bg-brand-green/10 opacity-50 blur-3xl" />
              <Image
                src="/images/iMac-24-inch-v2.png"
                alt="Recebíveis Cartórios"
                width={1500}
                height={1125}
                sizes="(min-width: 640px) 448px, 100vw"
                className="relative h-auto w-full object-cover"
              />
            </div>
          </BlurFade>
        </div>
        <div className="flex flex-col gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 56, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl border bg-white p-6 shadow-lg dark:bg-[#111A2E]",
                  i < 2 ? "border-gray-400/15" : "border-brand-green/15"
                )}
              >
                <div
                  className={cn(
                    "absolute left-0 top-0 h-full w-0.5",
                    i < 2 ? "bg-gray-400" : "bg-brand-green"
                  )}
                />
                <div className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                      i < 2 ? "bg-red-500/10 text-red-500 dark:bg-red-500/15 dark:text-red-400" : "bg-brand-green/15 text-brand-green"
                    )}
                  >
                    {i < 2 ? (
                      <X className="h-4 w-4" strokeWidth={3} />
                    ) : (
                      <Check className="h-4 w-4" strokeWidth={3} />
                    )}
                  </span>
                  <span
                    className={cn(
                      "font-display text-sm font-bold uppercase tracking-wide",
                      i < 2 ? "text-gray-400" : "text-brand-green"
                    )}
                  >
                    {i < 2 ? "Sem ParceleCart" : "Com ParceleCart"}
                  </span>
                </div>
                <h3 className="mt-3 mb-3 text-lg font-semibold text-foreground dark:text-white">
                  {problem.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400">{problem.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
