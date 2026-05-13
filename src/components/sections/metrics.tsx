"use client"

import Image from "next/image"
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
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Striped Pattern Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, var(--foreground), var(--foreground) 1px, transparent 1px, transparent 10px)`
        }}
      />

      <div className="container relative z-10 mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header - Aligned to the left to match the content below */}
        <div className="flex flex-col items-start text-left mb-16 lg:mb-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
          >
            <Badge variant="neon" className="mb-6 uppercase tracking-widest px-4 py-1">
              Diferenciais que importam
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground dark:text-white mb-6 leading-tight">
              Por que os maiores cartórios escolhem a ParceleCart?
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Mais que tecnologia, entregamos a segurança jurídica e a eficiência operacional que sua serventia exige.
            </p>
          </motion.div>
        </div>

        {/* Content Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: 2x2 Grid of Items */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease }}
                  className="group relative"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-500 shadow-sm">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground dark:text-white mb-3 group-hover:text-brand-green transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm lg:text-base">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Dashboard Image */}
          <motion.div 
            className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            {/* Pulsing background effect centered on the right side */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[140%] aspect-square bg-brand-green/10 dark:bg-brand-green/5 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute w-[100%] aspect-square border border-brand-green/20 rounded-full animate-[ping_3s_infinite]" />
            </div>
            
            <div className="relative z-10 w-full">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Image
                  src="/images/hero-mobile-01.webp"
                  alt="Dashboard ParceleCart"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_20px_50px_rgba(94,242,117,0.15)]"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
