"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { MagicCard } from "@/components/ui/magic-card"
import { CreditCard, QrCode, Link2, ShieldCheck } from "lucide-react"
import { useTheme } from "next-themes"

const floatingCards = [
  { icon: QrCode, title: "Pix QR Code grátis", subtitle: "confirmação na hora, sem caçar comprovante" },
  { icon: CreditCard, title: "Crédito em até 21x", subtitle: "a serventia recebe em D+1" },
  { icon: Link2, title: "Link de pagamento", subtitle: "cobre no WhatsApp, confirmação imediata" },
  { icon: ShieldCheck, title: "PCI DSS", subtitle: "segurança certificada" },
]

export function Hero() {
  const partners = ["Siscart", "4 Hands", "CSI", "Inova", "VizWise"]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient (responsive) */}
      <div className="absolute inset-0 bg-gradient-to-b from-background dark:from-brand-black via-background dark:via-[#0A0F14] to-background dark:to-brand-black" />

      {/* Desktop Background gradients (Heavy Blur) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-green/5 dark:bg-brand-green/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-blue/10 dark:bg-brand-blue/15 rounded-full blur-[80px]" />
      </div>


      {/* Desktop Background Dots (CSS Pattern) */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, var(--brand-green) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(1000px circle at center, white, transparent)',
          WebkitMaskImage: 'radial-gradient(1000px circle at center, white, transparent)',
        }}
      />

      {/* Mobile Background Dots (Pure CSS Pattern) */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, var(--brand-green) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(100% 100% at center, white, transparent)',
          WebkitMaskImage: 'radial-gradient(100% 100% at center, white, transparent)'
        }}
      />

      <div className="relative z-10 max-w-8xl mx-auto px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-4 items-center">

          {/* ── Left: copy ── */}
          <div className="contents lg:flex lg:flex-col lg:items-start lg:order-1">

            <div className="flex flex-col items-start order-1 lg:order-none mt-4 lg:mt-0 w-full">
              <BlurFade delay={0} inView>
                <Badge variant="neon" className="mb-6">
                  Exclusivo para o setor extrajudicial
                </Badge>
              </BlurFade>

              <TextAnimate
                as="h1"
                by="word"
                animation="blurInUp"
                duration={0.4}
                className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.1] text-foreground dark:text-white mb-6"
              >
                A infraestrutura de pagamentos feita para cartório.
              </TextAnimate>

              <BlurFade delay={0.3} inView>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 max-w-xl mb-4 lg:mb-8">
                  Pix, cartão e parcelamento integrados ao seu sistema de gestão. Repasse de taxas automático conforme o Provimento 127 — e ITBI e ITCMD nunca passam pela conta da serventia.
                </p>
              </BlurFade>
            </div>

            <div className="flex flex-col items-center sm:items-start order-3 lg:order-none w-full">
              <BlurFade delay={0.4} inView>
                <div className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-12">
                  <Button size="lg" asChild>
                    <a href="/#solucao">Ver como funciona</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/contato">Falar com especialista</a>
                  </Button>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-600 mb-10">
                  <ShieldCheck className="h-5 w-5 text-brand-green" aria-hidden="true" />
                  <span>Operando desde 2022, em conformidade com o Provimento 127 do CNJ e certificação PCI DSS.</span>
                </div>
              </BlurFade>

              {/* Trust line */}
              {/* <BlurFade delay={0.6} inView>
                <div className="flex flex-col gap-3">
                  <span className="text-xs text-gray-600 uppercase tracking-widest">
                    Integrado com
                  </span>
                  <div className="flex flex-wrap gap-5">
                    {partners.map((p) => (
                      <span key={p} className="text-normal text-gray-500 font-bold">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade> */}
            </div>
          </div>

          {/* ── Right: POS image + feature cards ── */}
          <motion.div
            className="relative flex flex-col items-center justify-center order-2 lg:order-2 w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Glow behind the device */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-brand-green/10 dark:bg-brand-green/10 rounded-full blur-[100px] hidden sm:block" />
              <div
                className="w-[280px] h-[360px] opacity-20 dark:opacity-30 sm:hidden"
                style={{ background: `radial-gradient(circle, var(--brand-green) 1%, rgba(94, 242, 117, 0) 70%)` }}
              />
            </div>

            {/* 2-column layout: [image | cards column] */}
            <div className="relative z-10 flex justify-center sm:grid sm:grid-cols-[1fr_auto] items-center gap-1 w-full">

              {/* POS image with floating animation */}
              <motion.div
                className="flex items-center justify-center"
                whileInView={{ y: [0, -8, 0] }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/smartpos hero.png"
                  alt="SmartPOS ParceleCart"
                  width={1200}
                  height={1200}
                  className="h-[380px] sm:h-[460px] lg:h-[580px] w-auto object-contain drop-shadow-none sm:drop-shadow-[0_0_80px_rgba(94,242,117,0.2)]"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGNgYGD4z8DAwMDAxMDAwMDAwPD/PwMDA8N/BgYGBob/DAwMDP8ZGBgYABuOBgVnK+XrAAAAAElFTkSuQmCC"
                />
              </motion.div>

              {/* Right column: all 4 cards stacked */}
              <div className="hidden sm:flex flex-col gap-3 z-20 -ml-24 md:-ml-32">
                {floatingCards.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      opacity: { duration: 0.4, delay: 0.7 + i * 0.12 },
                      x: { duration: 0.4, delay: 0.7 + i * 0.12 },
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileInView={{ y: [0, -4, 0] }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{
                        y: {
                          duration: 3 + i * 0.4,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          delay: 1.0 + i * 0.25,
                        },
                      }}
                    >
                      <MagicCard
                        className="rounded-xl"
                        gradientFrom="#5EF275"
                        gradientTo="#2F3A59"
                        gradientColor="var(--magic-card-gradient)"
                        gradientSize={195}
                      >
                        <div className="glass rounded-xl px-5 py-4 flex items-center gap-4 w-[280px]">
                          <card.icon className="h-8 w-8 text-brand-green shrink-0" />
                          <div>
                            <p className="text-base font-semibold text-foreground dark:text-white leading-tight">{card.title}</p>
                            <p className="text-sm text-gray-500 leading-tight">{card.subtitle}</p>
                          </div>
                        </div>
                      </MagicCard>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* Mobile floating cards - 2x2 Grid with staggered fade-in */}
            <div className="sm:hidden grid grid-cols-2 gap-3 mt-6 w-full px-2">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="glass rounded-xl px-3 py-4 flex flex-col items-center justify-center gap-2 text-center"
                >
                  <card.icon className="h-5 w-5 text-brand-green mb-1" />
                  <div className="flex flex-col items-center">
                    <p className="text-[12px] font-semibold text-foreground dark:text-white leading-tight">{card.title}</p>
                    <p className="text-[10px] text-gray-600 dark:text-gray-400 mt-1 leading-tight">{card.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
