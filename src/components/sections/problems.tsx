"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { ease } from "@/lib/utils"
import Image from "next/image"

const problems = [
  {
    number: "01",
    title: "Conciliação manual, ITBI e ITCMD na conta da serventia, e ato que não se conclui.",
    description:
      "Fim de mês vira caça ao comprovante: dezenas de Pix de certidão com o mesmo valor, conferidos um a um. Cada cartão é uma conta de cabeça para chegar ao repasse. E o orçamento de escritura fica parado — você levanta as certidões, faz o trabalho, envia o valor e só recebe de volta as duas marcas azuis no WhatsApp, porque o cliente não tem o valor à vista.",
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

export function Problems() {
  return (
    <section className="relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background dark:from-brand-black via-background dark:via-[#0F1419] to-background dark:to-brand-black" />

      {/* Dot pattern — desktop */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, var(--brand-green) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(1000px circle at center, white, transparent)',
          WebkitMaskImage: 'radial-gradient(1000px circle at center, white, transparent)',
        }}
      />

      {/* Dot pattern — mobile */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, var(--brand-green) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(100% 100% at center, white, transparent)',
          WebkitMaskImage: 'radial-gradient(100% 100% at center, white, transparent)',
        }}
      />

      {/* Desktop layout (lg+): sticky title + scrolling cards */}
      <div className="hidden lg:block">
        <div className="relative z-10 max-w-8xl mx-auto px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] w-full">
          <div className="grid grid-cols-2 gap-12 items-start">
            {/* LEFT column: sticky heading — fills viewport height, content centred */}
            <div className="sticky top-24 h-[calc(100vh-6rem)] flex items-center self-start">
              <div className="w-full">
                <Badge variant="neon" className="mb-6">
                  A virada
                </Badge>
                <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground dark:text-white leading-[1.05] tracking-tighter mb-4">
                  Da conciliação manual ao<br /> fim de mês{" "}
                  <span className="text-brand-green">sem planilha</span>.
                </h2>
                <BlurFade inView delay={0.1}>
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-brand-green/10 blur-3xl rounded-full opacity-50" />
                    <div className="relative py-12">
                      <Image
                        src="/images/hero-dashboards.png"
                        alt="Recebíveis Cartórios"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </BlurFade>
              </div>
            </div>

            {/* RIGHT column: naturally scrolling problem cards */}
            <div className="flex flex-col gap-6 py-32">
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
                  <p className="text-base text-gray-600 dark:text-gray-400">{problem.description}</p>
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
              <Badge variant="neon" className="mb-6">
                A virada
              </Badge>
              <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-foreground dark:text-white leading-[1.05] tracking-tighter mb-4">
                Da conciliação manual ao<br /> fim de mês{" "}
                <span className="text-brand-green">sem planilha</span>.
              </h2>
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
                  <p className="text-base text-gray-600 dark:text-gray-400">{problem.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
