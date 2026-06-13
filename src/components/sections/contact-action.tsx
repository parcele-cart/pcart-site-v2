"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"

export function ContactAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-brand-black/50 to-brand-black py-24">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-green/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(94,242,117,0.18),_transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10 lg:px-16 text-center">
        <BlurFade delay={0.1} inView>
          <h2 className="text-4xl sm:text-3xl lg:text-3xl font-display font-bold tracking-tight text-white">
            Pagamento entra, <span className="text-brand-green">concilia sozinho</span>, recebível cai segregado.
          </h2>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <p className="mx-auto mt-8 max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">
            Fale com o time que já implementa conciliação automática e entrega resultados rápidos para cartórios.
          </p>
        </BlurFade>

        <BlurFade delay={0.3} inView>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="rounded-full px-10 py-4">
              <a href="/contato" className="inline-flex items-center gap-3">
                Falar com o time
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
