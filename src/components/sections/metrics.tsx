"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ease } from "@/lib/utils"
import { motion } from "motion/react"
import { Shield, Headset, Plug, Scale, DollarSign, CreditCard, GitBranch, Sliders } from "lucide-react"

const differentiators = [
  {
    icon: Scale,
    title: "01 · Conforme o CNJ, por construção",
    description:
      "A ParceleCart foi desenhada a partir do Provimento 127 do CNJ e da Lei 14.382. Certificação PCI DSS no padrão internacional para transações com cartão.",
  },
  {
    icon: DollarSign,
    title: "02 · ITBI e ITCMD nunca transitam pela conta da serventia",
    description:
      "Cada imposto vai pelo trilho correto, sem passar pela conta do cartório. Zero risco fiscal, zero trabalho para o financeiro, zero conciliação de terceiro.",
  },
  {
    icon: CreditCard,
    title: "03 · Todos os meios, uma plataforma",
    description:
      "Pix por QR Code (gratuito), boleto, débito e crédito em até 21x — no POS presencial, no link de pagamento e via API. Ninguém sai sem pagar por falta de opção.",
  },
  {
    icon: Plug,
    title: "04 · Integrada ao seu sistema de gestão",
    description:
      "Integração via API com os principais sistemas notariais e registrais. Número de pedido na maquininha e no link, taxas discriminadas no comprovante, conciliação automática.",
  },
  {
    icon: GitBranch,
    title: "05 · Cada atribuição liquida no domicílio certo",
    description:
      "A ParceleCart liquida em domicílios bancários separados por atribuição ou operação (notas/protesto, depósito prévio/emolumentos), sem te obrigar a abrir conta em banco específico. Sua contabilidade recebe os valores já segregados.",
  },
  {
    icon: Sliders,
    title: "06 · Você no controle, sem amarras",
    description:
      "Você define o que repassa e o que absorve em cada meio — Pix, débito, crédito à vista, parcelado — e o usuário vê o valor antes de confirmar, conforme o Provimento 127. Pix QR Code gratuito, taxas padronizadas para qualquer cartório e nenhuma fidelidade: se não fizer sentido, você sai sem multa.",
  },
]

export function Metrics() {
  return (
    // Seção alta cria o "trilho" de scroll; o wrapper sticky pina o conteúdo
    <section className="relative bg-background min-h-[200vh]">
      <div className="sticky top-0 min-h-screen w-full flex items-center overflow-x-clip py-16">
        {/* Background gradients */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[140px] pointer-events-none" />

        {/* Striped Pattern Overlay */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--foreground), var(--foreground) 1px, transparent 1px, transparent 10px)`
          }}
        />

        <div className="container relative z-10 mx-auto py-20 px-6 sm:px-10 lg:px-16 w-full">
        {/* Content Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Column: Header + Cards (2 por linha, sem scroll) */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Header - stays fixed */}
            <div className="flex flex-col items-start text-left max-w-3xl pb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
              >
                <Badge variant="neon" className="mb-4 uppercase tracking-widest px-4 py-1">
                  Diferenciais que importam
                </Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-display font-bold text-foreground dark:text-white mb-4 leading-tight">
                  Por que dizemos <span className="text-brand-green">"feito para cartório"</span>
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
                    className="group relative flex flex-col py-6 px-0"
                  >
                    {/* Linha de cima: ícone + título */}
                    <div className="flex items-center gap-6">
                      <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-green/10 text-brand-green border border-brand-green/30 group-hover:bg-brand-green group-hover:text-white group-hover:border-brand-green transition-all duration-500 shadow-sm">
                        <item.icon size={18} />
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-foreground dark:text-white group-hover:text-brand-green transition-colors duration-300">
                        {item.title.split(" · ")[1]}
                      </h3>
                    </div>

                    {/* Descrição: largura total, abaixo do ícone e do título */}
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mt-4">
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
            className="lg:col-span-5 relative flex justify-center w-full items-center"
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

            <div className="relative z-10 w-full">
              <Image
                src="/images/hero-metrics.png"
                alt="Dashboard ParceleCart"
                width={800}
                height={800}
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
