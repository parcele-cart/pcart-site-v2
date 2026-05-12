"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"
import { TextAnimate } from "@/components/ui/text-animate"
import { MagicCard } from "@/components/ui/magic-card"
import { CreditCard, QrCode, Link2, ShieldCheck } from "lucide-react"

const floatingCards = [
  { icon: CreditCard, title: "Crédito em até 21x", subtitle: "Receba em D+1" },
  { icon: QrCode, title: "Pix QR Code", subtitle: "Cai na hora, sem taxa" },
  { icon: Link2, title: "Link de pagamento", subtitle: "Cobre a distância" },
  { icon: ShieldCheck, title: "PCI DSS", subtitle: "Segurança certificada" },
]

const partners = ["Siscart", "4 Hands", "CSI", "Inova", "VizWise"]

export function Hero() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Desktop Background gradients (Heavy Blur) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-green/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-blue/15 rounded-full blur-[80px]" />
      </div>


      {/* Desktop Background Dots (CSS Pattern) */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #5EF275 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(1000px circle at center, white, transparent)',
          WebkitMaskImage: 'radial-gradient(1000px circle at center, white, transparent)',
        }}
      />

      {/* Mobile Background Dots (Pure CSS Pattern) */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #5EF275 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          maskImage: 'radial-gradient(100% 100% at center, white, transparent)',
          WebkitMaskImage: 'radial-gradient(100% 100% at center, white, transparent)'
        }}
      />

      <div className="relative z-10 px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-16 w-full">
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
                className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.1] text-white mb-6"
              >
                Pagamentos eletrônicos para cartórios. Do jeito que o setor precisa.
              </TextAnimate>

              <BlurFade delay={0.3} inView>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400 max-w-xl mb-4 lg:mb-8">
                  Pix, cartão parcelado em até 21x e boleto — com repasse automático
                  de taxas, conforme o Provimento nº&nbsp;127/2022 do CNJ. Sem
                  mensalidade. Sem fidelidade.
                </p>
              </BlurFade>
            </div>

            <div className="flex flex-col items-center sm:items-start order-3 lg:order-none w-full">
              <BlurFade delay={0.4} inView>
                <div className="flex flex-col sm:flex-row gap-4 mb-10 lg:mb-12">
                  <Button size="lg" asChild>
                    <a href="/contato">Fale com um Especialista</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#solucao">Ver como funciona</a>
                  </Button>
                </div>
              </BlurFade>

              {/* Trust line */}
              <BlurFade delay={0.6} inView>
                <div className="flex flex-col gap-3">
                  <span className="text-xs text-gray-600 uppercase tracking-widest">
                    Integrado com
                  </span>
                  <div className="flex flex-wrap gap-5">
                    {partners.map((p) => (
                      <span key={p} className="text-sm text-gray-500 font-medium">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
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
              <div className="w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] hidden sm:block" />
              <div
                className="w-[280px] h-[360px] opacity-30 sm:hidden"
                style={{ background: 'radial-gradient(circle, rgba(94, 242, 117, 1) 0%, rgba(94, 242, 117, 0) 70%)' }}
              />
            </div>

            {/* 3-column grid: [left cards | image | right cards] */}
            <div className="relative z-10 flex justify-center sm:grid sm:grid-cols-[auto_1fr_auto] items-center gap-1 w-full">

              {/* Left cards */}
              <div className="hidden sm:flex flex-col gap-30 -mr-3 z-20">
                {[floatingCards[0], floatingCards[2]].map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      opacity: { duration: 0.4, delay: 0.8 + i * 0.15 },
                      x: { duration: 0.4, delay: 0.8 + i * 0.15 },
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileInView={{ y: [0, -4, 0] }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{
                        y: {
                          duration: 3 + i * 0.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          delay: 1.2 + i * 0.3,
                        },
                      }}
                    >
                      <MagicCard
                        className="rounded-xl"
                        gradientFrom="#5EF275"
                        gradientTo="#2F3A59"
                        gradientColor="#111827"
                        gradientSize={150}
                      >
                        <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 w-[180px]">
                          <card.icon className="h-6 w-6 text-brand-green shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-white leading-tight">{card.title}</p>
                            <p className="text-xs text-gray-500 leading-tight">{card.subtitle}</p>
                          </div>
                        </div>
                      </MagicCard>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

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
                  className="h-[340px] sm:h-[400px] lg:h-[500px] w-auto object-contain drop-shadow-none sm:drop-shadow-[0_0_80px_rgba(94,242,117,0.2)]"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGNgYGD4z8DAwMDAxMDAwMDAwPD/PwMDA8N/BgYGBob/DAwMDP8ZGBgYABuOBgVnK+XrAAAAAElFTkSuQmCC"
                />
              </motion.div>

              {/* Right cards */}
              <div className="hidden sm:flex flex-col gap-30 -ml-3 z-20">
                {[floatingCards[1], floatingCards[3]].map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      opacity: { duration: 0.4, delay: 0.9 + i * 0.15 },
                      x: { duration: 0.4, delay: 0.9 + i * 0.15 },
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      whileInView={{ y: [0, -5, 0] }}
                      viewport={{ once: false, amount: 0.1 }}
                      transition={{
                        y: {
                          duration: 3.5 + i * 0.5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut",
                          delay: 1.0 + i * 0.4,
                        },
                      }}
                    >
                      <MagicCard
                        className="rounded-xl"
                        gradientFrom="#5EF275"
                        gradientTo="#2F3A59"
                        gradientColor="#111827"
                        gradientSize={150}
                      >
                        <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 w-[180px]">
                          <card.icon className="h-6 w-6 text-brand-green shrink-0" />
                          <div>
                            <p className="text-sm font-semibold text-white leading-tight">{card.title}</p>
                            <p className="text-xs text-gray-500 leading-tight">{card.subtitle}</p>
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
                    <p className="text-[12px] font-semibold text-white leading-tight">{card.title}</p>
                    <p className="text-[10px] text-gray-400 mt-1 leading-tight">{card.subtitle}</p>
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
