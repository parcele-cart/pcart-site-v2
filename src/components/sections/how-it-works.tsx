"use client"

import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { cn, ease } from "@/lib/utils"
import Image from "next/image"
import { motion, useScroll, useSpring, useMotionValueEvent } from "motion/react"
import { Settings, Rocket, Headset } from "lucide-react"
import { useRef, useState, useCallback } from "react"

const steps = [
  {
    number: "01",
    icon: Headset,
    title: "Passo 01 — Converse com o time",
    description:
      "A gente entende a sua atribuição, seu volume de atos e qual sistema de gestão você usa. Conversa direta com quem conhece o setor — sem formulário de varejo, sem documento que serventia não tem.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Passo 02 — Receba tudo pronto",
    description:
      "Repasse ou absorção de taxas, domicílios bancários por atribuição e integração com o seu sistema de gestão. Tudo ajustado para a sua serventia antes da primeira transação.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Passo 03 — Conciliação automática",
    description:
      "Maquininha, link de pagamento ou API. Pix e cartão com confirmação imediata, liquidados no domicílio de cada atribuição, ITBI e ITCMD pelo trilho correto, sem passar pela sua conta. Conciliação rodando integrada ao seu sistema, sem planilhas.",
  },
]

function StepCard({
  step,
  index,
  total,
  activeIndex,
}: {
  step: (typeof steps)[0]
  index: number
  total: number
  activeIndex: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const isActive = activeIndex === index || isHovered
  const isPast = activeIndex > index && !isHovered

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5, ease }}
        className={cn(
          "glass rounded-2xl p-6 lg:p-8 text-center h-full relative z-10 transition-all duration-700 overflow-hidden border cursor-default",
          isActive
            ? "ring-2 ring-brand-green/50 border-brand-green/30 bg-gradient-to-br from-brand-green/20 via-brand-green/5 to-transparent shadow-[0_0_50px_-12px_rgba(94,242,117,0.4)] scale-[1.05]"
            : isPast
              ? "opacity-60 grayscale-[0.5] border-transparent"
              : "opacity-40 border-transparent"
        )}
      >
        {/* Glow behind icon */}
        {isActive && (
          <motion.div
            layoutId="active-glow-bg"
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(94,242,117,0.15)_0%,transparent_70%)] pointer-events-none"
          />
        )}

        {/* Number + Icon */}
        <div className="relative inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full mb-6 z-10 transition-all duration-500">
          <motion.div
            animate={{
              backgroundColor: isActive
                ? "var(--brand-green)"
                : "rgba(94, 242, 117, 0.1)",
              boxShadow: isActive
                ? "0 0 30px rgba(94, 242, 117, 0.6)"
                : "none",
              scale: isActive ? 1.1 : 1,
            }}
            className="absolute inset-0 rounded-full border border-brand-green/20"
          />
          <step.icon
            className={cn(
              "w-7 h-7 lg:w-8 lg:h-8 transition-colors duration-500 z-20",
              isActive ? "text-[#0E182A]" : "text-brand-green"
            )}
          />
          <span
            className={cn(
              "absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background dark:bg-brand-black border border-brand-green/30 flex items-center justify-center text-xs font-bold font-display transition-all duration-500 z-30",
              isActive
                ? "text-brand-green border-brand-green scale-110"
                : "text-brand-green/60"
            )}
          >
            {step.number}
          </span>
        </div>

        <h3
          className={cn(
            "font-display text-base sm:text-lg lg:text-xl mb-3 transition-colors duration-500",
            isActive ? "text-foreground dark:text-white" : "text-gray-500"
          )}
        >
          {step.title}
        </h3>
        <p
          className={cn(
            "text-xs sm:text-sm transition-colors duration-500 max-w-xs mx-auto",
            isActive ? "text-gray-600 dark:text-gray-300" : "text-gray-500/60"
          )}
        >
          {step.description}
        </p>

        {/* Bottom active line */}
        <motion.div
          animate={{
            width: isActive ? "60%" : "0%",
            opacity: isActive ? 1 : 0,
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-brand-green rounded-t-full shadow-[0_0_10px_rgba(94,242,117,0.8)]"
        />
      </motion.div>
    </div>
  )
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(-1)
  // Prevent multiple auto-scrolls
  const hasAdvanced = useRef(false)

  // The section is tall (300vh) so we have room to scroll through all 3 cards
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // start tracking when top of section hits top of viewport,
    // stop tracking when bottom of section leaves viewport
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  })

  // Advance to the next section after the 3rd card is shown
  const advanceToNextSection = useCallback(() => {
    if (hasAdvanced.current) return
    hasAdvanced.current = true

    // Find the next sibling section in the DOM
    const section = sectionRef.current
    if (!section) return

    const nextSection = section.nextElementSibling as HTMLElement | null
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    } else {
      // Fallback: scroll past this section
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
    }
  }, [])

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    // Card thresholds spread evenly across the scroll range
    if (latest < 0.12) {
      setActiveIndex(-1)
      hasAdvanced.current = false // reset if scrolled back up
    } else if (latest < 0.38) {
      setActiveIndex(0)
    } else if (latest < 0.65) {
      setActiveIndex(1)
    } else if (latest < 0.92) {
      setActiveIndex(2)
    } else {
      // Past the last card — advance to next section
      setActiveIndex(2)
      advanceToNextSection()
    }
  })

  return (
    // Tall section creates scroll "room" for the sticky effect
    <section
      ref={sectionRef}
      id="como-funciona"
      className="relative"
      style={{ minHeight: "300vh" }}
    >
      {/* Sticky wrapper — stays visible while the tall section scrolls */}
      <div className="sticky top-0 min-h-screen flex flex-col justify-between overflow-visible">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background dark:from-brand-black via-background dark:via-[#0D1117] to-background dark:to-brand-black" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #5EF275 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-16 sm:py-24 lg:py-32">
          {/* Header — fixed inside the sticky container */}
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            <BlurFade inView>
              <Badge variant="neon" className="mb-4">
                Como funciona
              </Badge>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-foreground dark:text-white mb-6 tracking-tight">
                Mude a rotina financeira<br/> do {" "}
                <span className="text-brand-green">seu cartório</span> agora
              </h2>
            </BlurFade>
          </div>

          {/* Steps Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                total={steps.length}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] pb-16 sm:pb-24 lg:pb-32 flex flex-col items-center gap-8">
 
          <Button size="lg" asChild>
            <a href="/contato">Fale com o time</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
