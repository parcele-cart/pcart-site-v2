"use client"

import { Badge } from "@/components/ui/badge"
import { ease } from "@/lib/utils"
import { motion } from "motion/react"
import { Shield, Headset, Plug, Scale } from "lucide-react"

const differentiators = [
  {
    icon: Scale,
    title: "Feita para o extrajudicial",
    description:
      "Não somos um gateway genérico adaptado. Cada funcionalidade foi desenhada para a rotina de cartórios — segregação por atribuição, repasse de taxas e relatórios regulatórios nativos.",
  },
  {
    icon: Shield,
    title: "Conformidade desde o dia zero",
    description:
      "Provimento CNJ n. 127/2022, LGPD, PCI DSS e normas das Corregedorias estaduais. A compliance não é um add-on — é a base de tudo que construímos.",
  },
  {
    icon: Headset,
    title: "Suporte que entende seu balcão",
    description:
      "Nossa equipe conhece a diferença entre um TN e um RI. Atendimento especializado por pessoas que falam a língua do cartório, não scripts genéricos.",
  },
  {
    icon: Plug,
    title: "Integração sem dor de cabeça",
    description:
      "Conectamos com Siscart, 4 Hands, CSI, Inova e VizWise. Nossa equipe faz a integração — sem necessidade de TI no cartório, sem impacto na operação.",
  },
]

export function Metrics() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 relative">
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-[#0A0F14] z-0" />

      {/* Striped Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 4px,
            #ffffff 4px,
            #ffffff 8px
          )`
        }}
      />

      {/* Fade Gradients for blending edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black z-0 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-green/20 to-transparent" />

      <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px]">
        {/* Header */}
        <div className="mb-10 sm:mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease }}
          >
            <Badge variant="neon" className="mb-4">
              Por que a ParceleCart
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, ease }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white"
          >
            O que nos torna diferentes de qualquer outro gateway
          </motion.h2>
        </div>

        {/* Differentiators List */}
        <div className="divide-y divide-white/5">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.5, ease }}
              className="py-8 sm:py-10 lg:py-12 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8"
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.12 + 0.1, duration: 0.4, ease }}
                className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center"
              >
                <item.icon className="w-6 h-6 lg:w-7 lg:h-7 text-brand-green" />
              </motion.div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2 lg:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
