"use client"

import { ArrowUpRight, Headset, ShieldCheck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"

const highlights = [
  {
    icon: ShieldCheck,
    title: "Risco zero",
    description:
      "Sem fidelidade. Se não fizer sentido, você sai sem multa.",
  },
  {
    icon: Wrench,
    title: "Setup feito pelo nosso time",
    description:
      "Você não monta integração sozinho. A gente configura repasse, domicílios e integração ao seu sistema de gestão.",
  },
  {
    icon: Headset,
    title: "Conversa com quem entende cartório",
    description:
      "Não é call center de varejo. Quem atende conhece atribuição, ITBI, Provimento 127.",
  },
]

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <BlurFade delay={0.1} inView>
            <div className="space-y-10">
              <div className="space-y-6 max-w-xl">
                <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground leading-tight tracking-tight">
                  Sua serventia operando em outra velocidade<br/>— sem mensalidade, sem complicação.
                </h2>
                <div className="border-l-2 border-brand-green/70 pl-5">
                  <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
                    Se você quer um cartório que recebe rápido e concilia sozinho, falar com a ParceleCart é a decisão certa.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {highlights.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-foreground">{item.title}</p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="pt-2 flex flex-col items-start gap-2">
                <Button asChild size="lg" variant="outline" className="inline-flex">
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Conversar pelo WhatsApp
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </Button>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Resposta direta de quem opera o setor.
                </span>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <div className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-brand-green/10 backdrop-blur-xl dark:bg-black/60">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-semibold text-foreground">Conte sobre a sua serventia</h3>
                </div>

                <div className="grid gap-4">
                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                    Nome
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="mt-2 h-12 w-full rounded-xl border border-foreground/10 bg-background px-4 text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/10"
                    />
                  </label>

                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                    Cartório / Nome da serventia
                    <input
                      type="text"
                      placeholder="Ex.: 2º Tabelião de Notas"
                      className="mt-2 h-12 w-full rounded-xl border border-foreground/10 bg-background px-4 text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/10"
                    />
                  </label>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      E-mail
                      <input
                        type="email"
                        placeholder="voce@cartorio.com.br"
                        className="mt-2 h-12 w-full rounded-xl border border-foreground/10 bg-background px-4 text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/10"
                      />
                    </label>

                    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                      WhatsApp
                      <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="mt-2 h-12 w-full rounded-xl border border-foreground/10 bg-background px-4 text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/10"
                      />
                    </label>
                  </div>

                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                    Sistema de gestão usado (opcional)
                    <input
                      type="text"
                      placeholder="Ex.: Siscart, 4 Hands, CSI..."
                      className="mt-2 h-12 w-full rounded-xl border border-foreground/10 bg-background px-4 text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/10"
                    />
                  </label>

                  <label className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                    Atribuição principal (opcional)
                    <select
                      className="mt-2 h-12 w-full rounded-xl border border-foreground/10 bg-background px-4 text-foreground outline-none transition focus:border-brand-green focus:ring-2 focus:ring-brand-green/10"
                    >
                      <option>Selecione</option>
                      <option>Atos de Notas</option>
                      <option>Atos de Registro</option>
                      <option>Atos de Protesto</option>
                    </select>
                  </label>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button type="button" size="lg">
                    Quero começar agora
                  </Button>
                  <Button type="button" variant="outline" size="lg">
                    Marcar uma demonstração
                  </Button>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Seus dados ficam com a gente, conforme a LGPD.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
