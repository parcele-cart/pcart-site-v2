import { InstitutionalHeader } from "@/components/sections/institutional-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { ContactForm } from "@/components/forms/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ouvidoria — ParceleCart",
  description: "Canal direto de ouvidoria da ParceleCart para sugestões, reclamações ou elogios.",
};

export default function OuvidoriaPage() {
  return (
    <main className="min-h-screen">
      <InstitutionalHeader 
        title="Ouvidoria" 
        subtitle="INSTITUCIONAL PARCELECART"
        centered
      />
      
      <div className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Side: Info */}
          <BlurFade delay={0.4} inView>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-brand-green" />
                <span className="text-brand-green font-bold tracking-widest text-xs uppercase">OUVIDORIA</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground dark:text-white leading-tight">
                Canal Direto de Ouvidoria
              </h2>
              
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                Este é o nosso canal direto para sugestões, reclamações ou elogios. 
                Sua opinião é fundamental para mantermos a excelência em nossos serviços para cartórios.
              </p>
            </div>
          </BlurFade>

          {/* Right Side: Form */}
          <BlurFade delay={0.5} inView>
            <div className="bg-white dark:bg-white/5 border border-foreground/5 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-brand-green/5">
              <ContactForm origin="Ouvidoria" />
            </div>
          </BlurFade>
        </div>
      </div>
    </main>
  );
}
