import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { TextAnimate } from "@/components/ui/text-animate";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato — ParceleCart",
  description:
    "Entre em contato conosco. Tire suas dúvidas sobre pagamentos para cartórios, parcelamento e soluções de fintech.",
  keywords: ["contato ParceleCart", "suporte", "dúvidas", "fintech cartório"],
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContatoPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0} inView>
          <Badge variant="neon" className="mb-6">
            Demo
          </Badge>
        </BlurFade>

        <TextAnimate
          as="h1"
          by="word"
          animation="blurInUp"
          duration={0.4}
          className="font-display text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[1.1] text-foreground dark:text-white mb-6"
        >
          ./contato
        </TextAnimate>
      </div>
    </main>
  );
}
