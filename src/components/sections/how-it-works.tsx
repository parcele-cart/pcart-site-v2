"use client"

import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { ease } from "@/lib/utils"
import { motion } from "motion/react"
import { Settings, Smartphone, BarChart3 } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Configure seu cartório",
    description:
      "Informe suas atribuições (Notas, Protesto, Registro) e domicílios bancários. Fazemos a integração com seu sistema em minutos.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Receba por qualquer canal",
    description:
      "POS na serventia, Link enviado pelo WhatsApp ou integração via API. O cartório escolhe, a ParceleCart processa.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Conciliação automática",
    description:
      "Cada pagamento liquidado no domicílio correto, relatório pronto para a prestação de contas. Zero planilha.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background dark:from-brand-black via-background dark:via-[#0D1117] to-background dark:to-brand-black" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #5EF275 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px]">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <BlurFade inView>
            <Badge variant="neon" className="mb-4">
              Como funciona
            </Badge>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground dark:text-white mb-4">
              Três passos para simplificar tudo
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">
              Da integração ao primeiro recebimento em minutos, não meses.
            </p>
          </BlurFade>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-20 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-brand-green/0 via-brand-green/30 to-brand-green/0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, duration: 0.5, ease }}
              className="relative"
            >
              <div className="glass rounded-2xl p-6 lg:p-8 text-center h-full">
                {/* Number + Icon */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-brand-green/10 border border-brand-green/20 mb-6 z-10">
                  <step.icon className="w-7 h-7 lg:w-8 lg:h-8 text-brand-green" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background dark:bg-brand-black border border-brand-green/30 flex items-center justify-center text-xs font-bold text-brand-green font-display">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg lg:text-xl text-foreground dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
