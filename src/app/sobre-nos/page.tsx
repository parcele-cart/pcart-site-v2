import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const FAQ = dynamic(
  () => import("@/components/sections/faq").then((mod) => mod.FAQ),
  { loading: () => <div className="min-h-150" /> },
);

export const metadata: Metadata = {
  title: "Sobre Nós — ParceleCart",
  description: "Conheça a história da ParceleCart: tecnologia de ponta criada por quem entende de cartórios.",
};

export default function SobreNosPage() {
  return (
    <main className="min-h-screen bg-background relative pt-32 pb-24">
      {/* Background pattern - ultra subtle */}
      <div
        className="absolute inset-0 z-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">

        {/* Section 1: Hero */}
        <section className="mb-24 lg:mb-40 pt-10">
          <div className="max-w-4xl mx-auto mb-16 lg:mb-24 text-center flex flex-col items-center">
            <BlurFade inView>
              <Badge variant="neon" className="mb-8 uppercase tracking-widest px-4 py-1">
                Quem somos
              </Badge>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-foreground dark:text-white font-bold leading-tight tracking-tight">
                Prazer, somos a <span className="text-brand-green">ParceleCart</span>.
              </h1>
            </BlurFade>
          </div>

          <BlurFade delay={0.2} inView>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl lg:rounded-[3rem] shadow-2xl border border-foreground/5 dark:border-white/5">
              <Image
                src="/images/about-01.webp"
                alt="Terminal ParceleCart"
                fill
                className="object-cover"
                priority
              />
            </div>
          </BlurFade>
        </section>

        {/* Section 2: Bento Grid (Origin & Tech) */}
        <section className="mb-24 lg:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">

            {/* Bento Item 1 (Text Box) */}
            <div className="md:col-span-5 flex flex-col justify-center p-8 lg:p-12 rounded-3xl lg:rounded-[3rem] bg-gray-50/50 dark:bg-white/[0.02] border border-foreground/5 dark:border-white/5">
              <BlurFade inView>
                <h3 className="font-display text-3xl sm:text-4xl text-foreground dark:text-white font-bold mb-6 leading-tight">
                  Conhecemos<br />suas dores
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                  <p>
                    Durante nossos primeiros anos neste mercado, precisamos explicar diversas vezes aos usuários do cartório em que trabalhamos os motivos pelos quais não aceitávamos cartão de crédito.
                  </p>
                  <p>
                    Quando o CNPJ publicou o Provimento nº 127/22, o Oficial Registrador responsável pelo cartório prontamente nos avisou e incentivou o desenvolvimento de uma solução específica para cartórios.
                  </p>
                </div>
              </BlurFade>
            </div>

            {/* Bento Item 2 (Image Box) */}
            <div className="md:col-span-7 relative aspect-[4/3] md:aspect-auto overflow-hidden rounded-3xl lg:rounded-[3rem] shadow-xl border border-foreground/5 dark:border-white/5">
              <BlurFade delay={0.1} inView className="w-full h-full">
                <Image
                  src="/images/about-02.png"
                  alt="Trabalhando em tecnologia"
                  fill
                  className="object-cover"
                />
              </BlurFade>
            </div>

            {/* Bento Item 3 (Image Box) */}
            <div className="md:col-span-8 relative aspect-[16/9] md:aspect-auto overflow-hidden rounded-3xl lg:rounded-[3rem] shadow-xl border border-foreground/5 dark:border-white/5">
              <BlurFade delay={0.2} inView className="w-full h-full">
                <Image
                  src="/images/about-03.png"
                  alt="Painel de tecnologia"
                  fill
                  className="object-cover object-center"
                />
              </BlurFade>
            </div>

            {/* Bento Item 4 (Text Box) */}
            <div className="md:col-span-4 flex flex-col justify-center p-8 lg:p-12 rounded-3xl lg:rounded-[3rem] bg-gray-50/50 dark:bg-white/[0.02] border border-foreground/5 dark:border-white/5">
              <BlurFade delay={0.3} inView>
                <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  Code
                </div>
                <h3 className="font-display text-2xl sm:text-3xl text-foreground dark:text-white font-bold mb-6 leading-tight">
                  Respiramos<br />tecnologia
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  <p>
                    Nossa equipe é formada por profissionais com vivência em startups, adquirentes e cartórios. Solucionar problemas e simplificar soluções é o que move nosso dia a dia.
                  </p>
                  <p>
                    Percebemos que poderíamos ajudar a trazer agilidade, facilidade e simplificar a rotina dos cartórios no Brasil.
                  </p>
                </div>
              </BlurFade>
            </div>

          </div>
        </section>

        {/* Section 4: Conclusion */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <BlurFade inView>
                <div className="relative aspect-[4/3] rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl border border-foreground/5 dark:border-white/5">
                  <Image
                    src="/images/about-04.png"
                    alt="Parceria e colaboração"
                    fill
                    className="object-cover"
                  />
                </div>
              </BlurFade>
            </div>
            <div className="order-1 lg:order-2">
              <BlurFade delay={0.1} inView>
                <div className="space-y-8">
                  <h3 className="font-display text-4xl sm:text-5xl text-foreground dark:text-white font-bold leading-tight">
                    Sempre<br />juntos.
                  </h3>
                  <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    <p>Sabemos da importância dos cartórios para o Brasil. Sem vocês, a garantia de segurança jurídica no país seria nula.</p>
                    <p>
                      Cartórios são instituições imprescindíveis para que a sociedade cresça de maneira sustentável. Por isto, trabalhamos dia e noite desenvolvendo soluções tecnológicas com delegatários e seus prepostos.
                    </p>
                    <p>
                      Compartilhe suas dores conosco e estaremos prontos para ajudá-lo a resolvê-las!
                    </p>
                    <p className="text-foreground dark:text-white font-bold text-2xl pt-6 border-t border-foreground/10 dark:border-white/10">
                      Conte sempre com a <span className="text-brand-green">ParceleCart</span>!
                    </p>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

      </div>

      <div className="relative z-10 content-auto">
        <FAQ />
      </div>
    </main>
  );
}
