"use client"

import { motion } from "motion/react"
import { Check } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { ease } from "@/lib/utils"

const problems = [
  {
    number: "01",
    title: "Receitas misturadas, controles confusos",
    description:
      "Notas, Protesto, RI e RT na mesma conta geram conciliação manual todo mês — e risco real na prestação de contas regulatória.",
    solution:
      "Segregação automática por atribuição desde o primeiro pagamento recebido.",
  },
  {
    number: "02",
    title: "Calcular repasse de taxas consome tempo que você não tem",
    description:
      "A cada parcelamento, alguém calcula manualmente o repasse de taxas. Lento, sujeito a erro e completamente desnecessário.",
    solution:
      "O sistema calcula e aplica o repasse automaticamente, sem intervenção humana.",
  },
  {
    number: "03",
    title: "Usuários que não conseguem pagar — e atos que não se concretizam",
    description:
      "Sem parcelamento, o usuário sem saldo integral vai embora e o ato não se pratica. Custo real, invisível nos relatórios.",
    solution:
      "PIX, boleto, débito e crédito parcelado em até 21x, presencial e digital, em um único lugar.",
  },
  {
    number: "04",
    title: "Relatórios que não atendem o que o regulador exige",
    description:
      "Comprovantes feitos para o varejo não atendem o extrajudicial. Adaptar documentos a cada prestação de contas é retrabalho constante e evitável.",
    solution:
      "Relatórios de recebíveis desenvolvidos especificamente para as demandas regulatórias dos cartórios.",
  },
]

export function Problems() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background dark:from-brand-black via-background dark:via-[#0F1419] to-background dark:to-brand-black" />

      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #5EF275 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Desktop layout (lg+): sticky title + scrolling cards */}
      <div className="hidden lg:block">
        <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] w-full">
          <div className="grid grid-cols-2 gap-12 items-start">
            {/* LEFT column: sticky heading */}
            <div className="lg:sticky lg:top-[30vh] self-start">
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground dark:text-white mb-4">
                Nenhum sistema genérico entende como um cartório funciona.
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400">
                Maquininhas comuns pedem &ldquo;contrato social&rdquo;, não conhecem as diferentes
                atribuições e cobram com pouca transparência. Depois, sua equipe
                passa horas conciliando. Todo mês.
              </p>
            </div>

            {/* RIGHT column: naturally scrolling problem cards */}
            <div className="flex flex-col gap-6 pt-8 pb-16">
              {problems.map((problem, i) => (
                <motion.div
                  key={problem.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                  className="pl-6 py-4 relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-brand-green" />
                  <span className="text-3xl font-bold text-brand-green glow-green-text opacity-70 font-display">
                    {problem.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-white mt-3 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4">{problem.description}</p>
                  <div className="border-t border-foreground/5 dark:border-white/5 pt-4 flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-green glow-green-text shrink-0 mt-0.5" />
                    <p className="text-base font-medium text-brand-green glow-green-text">
                      {problem.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout (below lg): simple stacked with BlurFade */}
      <div className="lg:hidden">
        <div className="relative z-10 px-5 sm:px-8">
          {/* Header */}
          <div className="max-w-5xl mb-10 sm:mb-12">
            <BlurFade inView>
              <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground dark:text-white mb-4">
                Nenhum sistema genérico entende como um cartório funciona.
              </h2>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Maquininhas comuns pedem &ldquo;contrato social&rdquo;, não conhecem as diferentes
                atribuições e cobram com pouca transparência. Depois, sua equipe
                passa horas conciliando. Todo mês.
              </p>
            </BlurFade>
          </div>

          {/* Stacked problems */}
          <div className="flex flex-col gap-6">
            {problems.map((problem, i) => (
              <BlurFade key={problem.number} delay={i * 0.1} inView>
                <div className="border-l-2 border-brand-green/40 pl-6 py-4">
                  <span className="text-3xl font-bold text-brand-green glow-green-text opacity-70 font-display">
                    {problem.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground dark:text-white mt-3 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4">{problem.description}</p>
                  <div className="border-t border-foreground/5 dark:border-white/5 pt-4 flex items-start gap-3">
                    <Check className="h-5 w-5 text-brand-green glow-green-text shrink-0 mt-0.5" />
                    <p className="text-base font-medium text-brand-green glow-green-text">
                      {problem.solution}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
