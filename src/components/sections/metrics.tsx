"use client"

import Image from "next/image"
import { ease } from "@/lib/utils"
import { motion } from "motion/react"
import { Shield, Headset, Plug, Scale, DollarSign, CreditCard, GitBranch, Sliders } from "lucide-react"

const differentiators = [
  {
    icon: Scale,
    title: "01 · Conforme o CNJ, por construção",
    description:
      "Desenhada a partir do Provimento 127 do CNJ e da Lei 14.382, com certificação PCI DSS.",
  },
  {
    icon: DollarSign,
    title: "02 · ITBI e ITCMD nunca transitam pela conta da serventia",
    description:
      "Cada imposto segue pelo trilho correto, fora da conta da serventia. Zero risco fiscal.",
  },
  {
    icon: CreditCard,
    title: "03 · Todos os meios, uma plataforma",
    description:
      "Pix QR Code grátis, boleto, débito e crédito em até 21x — no POS, no link e via API.",
  },
  {
    icon: Plug,
    title: "04 · Integrada ao seu sistema de gestão",
    description:
      "Integração via API com os principais sistemas notariais, com taxas no comprovante e conciliação automática.",
  },
  {
    icon: GitBranch,
    title: "05 · Cada atribuição liquida no domicílio certo",
    description:
      "Liquida em domicílios bancários separados por atribuição, sem te obrigar a abrir conta em banco específico.",
  },
  {
    icon: Sliders,
    title: "06 · Você no controle, sem amarras",
    description:
      "Você define o que repassa e o que absorve em cada meio, com o valor exibido ao usuário antes de confirmar.",
  },
]

export function Metrics() {
  return (
    // Seção alta cria o "trilho" de scroll; o wrapper sticky pina o conteúdo
    <section className="relative bg-background min-h-[200vh]">
      <div className="sticky top-0 min-h-screen w-full flex items-start overflow-x-clip pt-24">
        {/* Background gradients */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Striped Pattern Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--foreground), var(--foreground) 1px, transparent 1px, transparent 10px)`
          }}
        />

        <div className="container relative z-10 mx-auto py-2 px-6 sm:px-10 lg:px-16 w-full">
        {/* Content Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Column: Header + Cards (2 por linha, sem scroll) */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Header - stays fixed */}
            <div className="flex flex-col items-start text-left max-w-3xl pb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-foreground dark:text-white mb-4 leading-tight">
                  Por que dizemos <span className="text-brand-green">"feita para cartório"</span>
                </h2>
                <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400">
                  Não é gateway adaptado. É infraestrutura desenhada do zero para a rotina do cartório.
                </p>
              </motion.div>
            </div>

            {/* Cards List — 2 por linha, sem scroll */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {differentiators.map((item, index) => {
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease }}
                    className="group relative flex flex-col py-3 px-0"
                  >
                    {/* Linha de cima: ícone + título */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-green/10 text-brand-green border border-brand-green/30 group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green transition-all duration-500 shadow-sm">
                        <item.icon size={18} />
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-foreground dark:text-white group-hover:text-brand-green transition-colors duration-300">
                        {item.title.split(" · ")[1]}
                      </h3>
                    </div>

                    {/* Descrição: largura total, abaixo do ícone e do título */}
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mt-2">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Dashboard Image */}
          <motion.div
            className="lg:col-span-6 relative flex justify-center w-full items-center"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            {/* Pulsing background effect centered on the right side */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[140%] aspect-square bg-brand-green/30 dark:bg-brand-green/5 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute w-[110%] aspect-square border-2 border-brand-green/50 dark:border-brand-green/20 rounded-full animate-[ping_3s_infinite]" />
              <div className="absolute w-[80%] aspect-square border border-brand-green/30 dark:border-brand-green/10 rounded-full animate-[ping_4s_1.5s_infinite]" />
            </div>

            <div className="relative z-10 w-full mx-auto">
              <Image
                src="/images/hero-metrics-v2.png"
                alt="Dashboard ParceleCart"
                width={800}
                height={600}
                sizes="(min-width: 1024px) 640px, 100vw"
                className="w-full h-auto object-contain mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_20px_50px_rgba(94,242,117,0.15)]"
                priority
              />
            </div>
          </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
