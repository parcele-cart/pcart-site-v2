"use client"

import { Badge } from "@/components/ui/badge"
import { ease } from "@/lib/utils"
import { motion } from "motion/react"
import { Shield, Headset, Plug, Scale } from "lucide-react"
import { useTheme } from "next-themes"

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
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const patternColor = isDark ? "#ffffff" : "#000000"

  return (
    <section className="py-16 sm:py-20 lg:py-32 relative">
      {/* Base Dark Background */}
      <div className="absolute inset-0 bg-background dark:bg-[#0A0F14] z-0" />

      {/* Striped Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${patternColor}, ${patternColor} 1px, transparent 1px, transparent 10px)`
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <Badge variant="neon" className="mb-6 uppercase tracking-widest">
              Diferenciais que importam
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground dark:text-white mb-6">
              Por que os maiores cartórios<br className="hidden md:block" /> escolhem a ParceleCart?
            </h2>
            <p className="max-w-2xl text-lg text-gray-500 dark:text-gray-400">
              Mais que tecnologia, entregamos a segurança jurídica e a eficiência operacional que sua serventia exige.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease }}
              className="group"
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground dark:text-white mb-3 group-hover:text-brand-green transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
