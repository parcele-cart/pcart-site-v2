"use client"

import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"

const listaCompleta = [
  "2 TN SAO PAULO SP", "9 TN SAO PAULO SP", "19 TN SAO PAULO SP", "30 TN SAO PAULO SP", "11 TN SAO PAULO SP",
  "1 RI BAURU SP", "TN RI MARICA RJ", "22 TN SAO PAULO SP", "2 TN RIBEIRAO PRETO SP", "6 TN SAO PAULO SP",
  "3 TN SOROCABA SP", "RCPN TN BARUERI SP", "2 TN PT AMERICANA SP", "RI RTDPJ BARRA DO GARCA MT", "3 TN PR SÃO CAETANO DO SUL SP",
  "10 TN SAO PAULO", "4 TN SOROCABA SP", "1 TN SAO JOSE DOS CAMPOS SP", "TN RCPN BELVAL SP", "4 TN SAO PAULO SP",
  "1 TN JUNDIAI SP", "1 TN PT SANTANA DE PARNAIBA SP", "8 TN SAO PAULO SP", "2 TN SÃO JOSE RIO PRETO SP", "1 TN PT FRANCA SP",
  "8 TN SANTOS SP", "RCPN RI RTDPJ EMBU DAS ARTES SP", "5 TN SAO PAULO SP", "3 TN BELEM PA", "24 TN SAO PAULO SP",
  "4 TN SANTO ANDRE SP", "13 TN RCPN SAO PAULO SP", "1 RI RTPJ CAMPO VERDE MT", "9 TN CURITIBA PR", "2 TN PT OURINHOS SP",
  "4 TN CURITIBA PR", "7 TN RIO DE JANEIRO RJ", "2 TN SÃO BERNARDO DO CAMPO SP", "TN PT ITAPETININGA SP", "TN RCPN UBERABA PR",
  "RI REGENTE FEIJO SP", "6 TN MANAUS AM", "3 RI LONDRINA PR", "TN PT ESTRELA DOESTE SP", "6 TN CAMPO GRANDE MS",
  "TN RCPN DUQUE DE CAXIAS RJ", "12 TN SAO PAULO SP", "2 TN PT IBIRACI MG", "RCPN NOVA IGUACU RJ", "4 RCPN RIO DE JANEIRO RJ",
  "2 TN PT JAU SP", "1 TN SAO PAULO SP"
]

// Split into 2 rows
const metade = Math.ceil(listaCompleta.length / 2)
const linha1 = listaCompleta.slice(0, metade)
const linha2 = listaCompleta.slice(metade)

function MarqueeCard({ text }: { text: string }) {
  return (
    <div className="flex items-center rounded-full border border-foreground/10 dark:border-white/10 bg-background dark:bg-[#0A0F14] shadow-sm px-5 py-2.5 hover:border-brand-green/40 hover:shadow-brand-green/10 hover:shadow-md transition-all duration-300 gap-2 select-none">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-green/60 shrink-0" />
      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap">{text}</span>
    </div>
  )
}

interface InfiniteMarqueeProps {
  items: string[]
  reverse?: boolean
  speed?: number
}

function InfiniteMarquee({ items, reverse = false, speed = 40 }: InfiniteMarqueeProps) {
  // Repeat items enough times to guarantee seamless fill at any viewport width
  const repeated = [...items, ...items, ...items, ...items]

  const trackStyle: React.CSSProperties = {
    animationDuration: `${speed}s`,
    animationDirection: reverse ? "reverse" : "normal",
  }

  return (
    <div className="group flex overflow-hidden [--gap:0.75rem] gap-[var(--gap)]">
      {/* Two tracks side-by-side so one always fills the screen */}
      {[0, 1].map((n) => (
        <div
          key={n}
          aria-hidden={n === 1}
          className="flex shrink-0 items-center gap-[var(--gap)] animate-marquee group-hover:[animation-play-state:paused]"
          style={trackStyle}
        >
          {repeated.map((text, i) => (
            <MarqueeCard key={`${n}-${i}`} text={text} />
          ))}
        </div>
      ))}
    </div>
  )
}

export function Partners() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background dark:from-brand-black via-background dark:via-[#0A0F14] to-background dark:to-brand-black z-0" />

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={6}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[160%] skew-y-12 text-brand-green/40"
        )}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-5 sm:px-8">
          <BlurFade inView>
            <Badge variant="neon" className="mb-4">
              Ecossistema
            </Badge>
          </BlurFade>

          <BlurFade delay={0.1} inView>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground dark:text-white mb-4">
              Cartórios e parceiros que confiam na ParceleCart
            </h2>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 mb-8">
              Presença consolidada junto a serventias extrajudiciais e entidades de classe por meio do nosso ecossistema de pagamentos.
            </p>
          </BlurFade>

        </div>

        {/* Marquee rows */}
        <div className="relative space-y-3">
          {/* Edge fade masks */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-background dark:from-[#0A0F14] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-background dark:from-[#0A0F14] to-transparent" />

          <InfiniteMarquee items={linha1} speed={220} />
          <InfiniteMarquee items={linha2} reverse speed={270} />
        </div>
      </div>
    </section>
  )
}
