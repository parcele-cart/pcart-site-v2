"use client"

import Image from "next/image"
import { BlurFade } from "@/components/ui/blur-fade"
import { motion } from "motion/react"
import { ease } from "@/lib/utils"

export function NotGeneric() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background dark:from-brand-black via-background dark:via-[#0D1117] to-background dark:to-brand-black" />
      
      <div className="relative z-10 max-w-8xl mx-auto px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <BlurFade inView delay={0.1}>
              <div className="relative group">
                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-brand-green/10 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease }}
                  className="relative rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl"
                >
                  <Image
                    src="/images/hero-receivables.webp"
                    alt="Recebíveis Cartórios"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </BlurFade>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <BlurFade inView delay={0.2}>
              <div className="max-w-xl">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground dark:text-white mb-8 leading-tight tracking-tight">
                  Nenhum sistema genérico entende como um <span className="text-brand-green">cartório funciona</span>.
                </h2>
                
                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Maquininhas comuns pedem <span className="text-foreground dark:text-white font-medium">“contrato social”</span>, não conhecem as diferentes atribuições e cobram com pouca transparência.
                  </p>
                  
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Depois, sua equipe passa horas conciliando. <span className="text-brand-green font-semibold">Todo mês.</span>
                  </p>
                </div>

                {/* Decorative element */}
                <div className="mt-10 h-px w-20 bg-gradient-to-r from-brand-green to-transparent" />
              </div>
            </BlurFade>
          </div>
          
        </div>
      </div>
    </section>
  )
}
