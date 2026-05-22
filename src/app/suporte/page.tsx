import { InstitutionalHeader } from "@/components/sections/institutional-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { ContactForm } from "@/components/forms/contact-form";
import { CalendarDays, MessageCircle, Phone, ArrowRight, InfoIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suporte — ParceleCart",
  description: "Entre em contato conosco através dos nossos canais de atendimento ou envie uma mensagem.",
};

const listChannels = [
  {
    number: "01",
    title: "Suporte e Contato",
    description: "Atendimento suporte@parcelecart.com.br ou (11) 96398-2811.",
    icon: InfoIcon,
    action: "Entrar em contato",
    link: "mailto:suporte@parcelecart.com.br",
  },
  {
    number: "02",
    title: "WhatsApp",
    description: "Atendimento imediato e simplificado via chat.",
    icon: MessageCircle,
    action: "Iniciar chat",
    link: "https://wa.me/5511963982811",
  },
  {
    number: "03",
    title: "Telefone",
    description: "Suporte especializado por voz em horário comercial.",
    icon: Phone,
    action: "Ligar agora",
    link: "tel:+5511963982811",
  },
];

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-background dark:bg-brand-black">
      <InstitutionalHeader
        title="Suporte especializado"
        subtitle="Atendimento rápido e humanizado para auxiliar sua operação sempre que precisar."
        centered
      />

      <div className="px-5 sm:px-8 lg:px-0 xl:px-32 2xl:px-[150px] py-16 lg:py-24 space-y-24 lg:space-y-40">

        {/* 3 Individual Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {listChannels.map((channel, i) => (
            <BlurFade key={channel.title} delay={0.2 + i * 0.1} inView>
              <div className="group bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/8 rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center gap-6 shadow-sm hover:shadow-xl hover:shadow-brand-green/8 dark:hover:shadow-brand-green/5 hover:-translate-y-1 transition-all duration-500 h-full">
                {/* Icon */}
                <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 rounded-full bg-brand-green/10 dark:bg-brand-green/10 border border-brand-green/20 group-hover:bg-brand-green dark:group-hover:bg-brand-green/20 group-hover:shadow-[0_0_24px_rgba(94,242,117,0.35)] transition-all duration-500" />
                  <channel.icon className="w-8 h-8 text-brand-green group-hover:text-white dark:group-hover:text-brand-green transition-colors duration-500 z-10" strokeWidth={1.5} />
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-white dark:bg-zinc-800 border border-brand-green/30 dark:border-brand-green/20 flex items-center justify-center text-[10px] font-bold font-display text-brand-green shadow z-20">
                    {channel.number}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-display font-bold text-zinc-900 dark:text-white tracking-tight">
                    {channel.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={channel.link}
                  className="inline-flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest group/link mt-2"
                >
                  {channel.action}
                  <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Large Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start relative">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

          <BlurFade delay={0.4} inView>
            <div className="space-y-8 relative z-10">
              <div className="inline-flex items-center gap-2">
                <div className="w-10 h-px bg-brand-green" />
                <span className="text-brand-green font-bold tracking-widest text-xs uppercase">OU ENTÃO</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-display font-bold text-foreground dark:text-white leading-[0.95] tracking-tighter">
                Mande um <br />
                <span className="text-brand-green italic">e-mail agora</span>.
              </h2>

              <p className="text-gray-500 dark:text-gray-400 text-lg lg:text-xl leading-relaxed max-w-sm">
                Seu cartório merece um atendimento especializado. Preencha os dados e retornaremos em instantes.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-white/5 rounded-[3rem] p-8 sm:p-12 lg:p-16 shadow-2xl shadow-brand-green/5 backdrop-blur-sm relative z-10">
              <ContactForm origin="Contato" />
            </div>
          </BlurFade>
        </div>
      </div>
    </main>
  );
}
