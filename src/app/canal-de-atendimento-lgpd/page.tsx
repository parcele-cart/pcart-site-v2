import { InstitutionalHeader } from "@/components/sections/institutional-header";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canal de Atendimento LGPD — ParceleCart",
  description: "Entre em contato conosco para exercer seus direitos de privacidade.",
};

export default function LgpdContactPage() {
  return (
    <main className="min-h-screen">
      <InstitutionalHeader 
        title="Canal de Atendimento LGPD" 
        centered
      />
      
      <div className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Side: Info */}
          <BlurFade delay={0.4} inView>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-brand-green" />
                <span className="text-brand-green font-bold tracking-widest text-xs uppercase">LGPD</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground dark:text-white leading-tight">
                Deseja conhecer ou excluir seus dados armazenados?
              </h2>
              
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                Entre em contato conosco através deste formulário para conhecer quais dados armazenamos e, caso desejar, solicitar a exclusão dos seus dados.
              </p>
            </div>
          </BlurFade>

          {/* Right Side: Form */}
          <BlurFade delay={0.5} inView>
            <div className="bg-white dark:bg-white/5 border border-foreground/5 dark:border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-brand-green/5">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/70 dark:text-gray-400 ml-1">Nome</label>
                    <input 
                      type="text" 
                      placeholder="João Silva"
                      className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-foreground/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all placeholder:text-gray-400"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/70 dark:text-gray-400 ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="exemplo@email.com.br"
                      className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-foreground/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/70 dark:text-gray-400 ml-1">Telefone</label>
                    <input 
                      type="tel" 
                      placeholder="(11) 91234-5678"
                      className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-foreground/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all placeholder:text-gray-400"
                    />
                  </div>
                  
                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/70 dark:text-gray-400 ml-1">Assunto</label>
                    <input 
                      type="text" 
                      placeholder="Ex. Receber uma proposta"
                      className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-foreground/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/70 dark:text-gray-400 ml-1">Mensagem</label>
                  <textarea 
                    placeholder="Escreva aqui sua mensagem"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-foreground/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all placeholder:text-gray-400 resize-none"
                  />
                </div>

                <Button className="w-full sm:w-auto h-12 px-8 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl text-base font-semibold shadow-lg shadow-brand-blue/20 transition-all active:scale-[0.98]">
                  Enviar mensagem
                </Button>
              </form>
            </div>
          </BlurFade>
        </div>
      </div>
    </main>
  );
}
