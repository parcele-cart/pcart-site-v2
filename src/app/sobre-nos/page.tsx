import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós — ParceleCart",
  description: "Conheça a história da ParceleCart: tecnologia de ponta criada por quem entende de cartórios.",
};

export default function SobreNosPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] pt-32 pb-24">
      {/* Section 1: Hero */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] mb-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <BlurFade inView>
            <Badge variant="neon" className="mb-6">
              Quem somos
            </Badge>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground dark:text-white leading-[1.1] mb-12">
              Prazer,<br />somos a ParceleCart
            </h1>
          </BlurFade>
          <div className="w-full h-px bg-foreground/5 dark:bg-white/5 mb-16" />
        </div>

        <BlurFade delay={0.2} inView>
          <div className="relative aspect-[16/9] w-full max-w-6xl mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556740734-7f1a0297ba16?q=80&w=2070&auto=format&fit=crop"
              alt="Terminal ParceleCart"
              fill
              className="object-cover"
              priority
            />
          </div>
        </BlurFade>
      </section>

      {/* Section 2: Origin */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] mb-32">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <BlurFade inView>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground dark:text-white leading-tight">
              Nascida e criada com muita dedicação por quem conhece cartórios e tecnologia
            </h2>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          <BlurFade delay={0.3} inView>
            <div className="space-y-6">
              <h3 className="font-display text-2xl sm:text-3xl text-foreground dark:text-white font-bold">
                Conhecemos suas dores
              </h3>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                <p>
                  Durante nossos primeiros anos neste mercado, precisamos explicar diversas vezes aos usuários do cartório em que trabalhamos os motivos pelos quais não aceitávamos cartão de crédito.
                </p>
                <p>
                  Quando o CNPJ publicou o Provimento nº 127/22, o Oficial Registrador responsável pelo cartório prontamente nos avisou e incentivou o desenvolvimento de uma solução específica para cartórios.
                </p>
                <p>
                  Nascia ali a ParceleCart, dentro de um cartório na capital de São Paulo, a partir das dores de um delegatário inovador, que durante anos dedicou sua vida ao desenvolvimento do ofício.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
                alt="Trabalhando em tecnologia"
                fill
                className="object-cover"
              />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Section 3: Tech */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] mb-32 bg-gray-50/50 dark:bg-white/[0.02] py-24 -mx-5 sm:-mx-8 lg:-mx-16 xl:-mx-32 2xl:-mx-[150px]">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <BlurFade delay={0.3} inView>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl lg:order-1 order-2">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                  alt="Painel de tecnologia"
                  fill
                  className="object-cover"
                />
              </div>
            </BlurFade>
            <BlurFade delay={0.4} inView className="lg:order-2 order-1">
              <div className="space-y-6">
                <h3 className="font-display text-2xl sm:text-3xl text-foreground dark:text-white font-bold">
                  Tecnologia à serviço da segurança jurídica
                </h3>
                <div className="space-y-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                  <p className="text-brand-green font-semibold uppercase tracking-widest text-sm">Respiramos tecnologia!</p>
                  <p>
                    Nossa equipe é formada por profissionais com vivência em startups, adquirentes e cartórios. Solucionar problemas e simplificar soluções é o que move nosso dia a dia.
                  </p>
                  <p>
                    Quando nos deparamos com as dores das serventias, percebemos que poderíamos ajudar a trazer agilidade, facilidade e simplificar, através da nossa experiência, a rotina dos cartórios no Brasil.
                  </p>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Section 4: Conclusion */}
      <section className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
          <BlurFade delay={0.3} inView>
            <div className="space-y-6">
              <h3 className="font-display text-2xl sm:text-3xl text-foreground dark:text-white font-bold">
                Sempre juntos
              </h3>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                <p>Sabemos da importância dos cartórios para o Brasil.</p>
                <p>
                  Sem vocês, a garantia de segurança jurídica no país seria nula. Cartórios são instituições imprescindíveis para que a sociedade cresça de maneira sustentável. Por isto, trabalhamos dia e noite desenvolvendo soluções tecnológicas com delegatários e seus prepostos.
                </p>
                <p>
                  Compartilhe suas dores conosco e estaremos prontos para ajudá-lo a resolvê-las!
                </p>
                <p className="text-foreground dark:text-white font-bold text-xl pt-4">
                  Conte sempre com a ParceleCart!
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={0.4} inView>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
                alt="Parceria e colaboração"
                fill
                className="object-cover"
              />
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
