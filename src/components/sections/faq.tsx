"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  useAccordionItem,
} from "@/components/ui/accordion"
import { Plus, Minus, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const faqItems = [
  {
    question: "O cartório paga mensalidade ou aluguel de máquina?",
    answer:
      "Não. A ParceleCart não cobra mensalidade, aluguel de equipamento ou qualquer taxa fixa. Nossa remuneração ocorre exclusivamente pelas taxas que incidem sobre as transações realizadas — você só paga quando recebe.",
  },
  {
    question: "Quanto tempo leva para o cartório começar a usar a plataforma?",
    answer:
      "O processo de credenciamento leva entre 3 e 7 dias úteis a partir da assinatura do formulário. Após isso, o seu cartório já está apto a receber por todos os meios de pagamento disponíveis.",
  },
  {
    question: "Como as taxas de parcelamento são calculadas e aplicadas?",
    answer:
      "O cálculo é automático. Tanto a máquina (POS) quanto o link de pagamento calculam e aplicam as taxas ao valor total em tempo real, sem necessidade de cálculo manual pela equipe do cartório. Nenhum erro. Nenhum retrabalho.",
  },
  {
    question:
      "Posso escolher se o cartório absorve as taxas ou as repassa ao usuário final?",
    answer:
      'Sim. Via o aplicativo "Taxas ao Portador", você configura a opção de repasse para pagamentos de débito e crédito de acordo com a política do seu cartório. A escolha é sua.',
  },
  {
    question: "Quando o cartório recebe os valores das transações?",
    answer:
      "Todos os valores transacionados são depositados no próximo dia útil (D+1), diretamente no domicílio bancário correspondente a cada atribuição do cartório.",
  },
  {
    question:
      "O repasse de taxas ao usuário final é permitido pela legislação?",
    answer:
      "Sim. O Provimento CNJ n. 127, de 02 de setembro de 2022, autoriza expressamente o repasse de taxas de parcelamento ao usuário final para pagamentos em débito e crédito. Para pagamentos via PIX, o repasse não é permitido.",
  },
  {
    question: "Quais meios de pagamento estão disponíveis para o cartório?",
    answer:
      "A ParceleCart oferece PIX (por QR Code e link de pagamento), cartão de débito, cartão de crédito à vista e parcelado em até 21 vezes, e boleto bancário — disponíveis presencialmente no POS, de forma digital pelo link de pagamento, ou integrados via API.",
  },
  {
    question:
      "Existe volume mínimo de transações para usar a plataforma?",
    answer:
      "Não. Não há volume mínimo exigido. O cartório começa a usar imediatamente após o credenciamento, sem nenhum compromisso de volume ou metas de transação.",
  },
  {
    question:
      "A plataforma é certificada e segura para dados financeiros do cartório?",
    answer:
      "Sim. A ParceleCart possui certificação PCI-DSS, que é o padrão internacional de segurança para processamento de dados de pagamento. Todos os servidores estão hospedados no Brasil, em conformidade com a LGPD.",
  },
  {
    question:
      "Como funciona a integração com os sistemas que o cartório já utiliza?",
    answer:
      "A integração é feita via API com os principais sistemas de gestão notarial e registral do mercado, incluindo Siscart, 4 Hands, CSI, Inova e VizWise. O processo é conduzido pela nossa equipe técnica e leva minutos — sem impacto na operação do cartório e sem necessidade de equipe de TI própria.",
  },
]

function FAQTrigger({ question, index }: { question: string; index: number }) {
  const { isOpen } = useAccordionItem()
  
  return (
    <div className="flex items-start justify-between w-full gap-4 md:gap-8 group">
      <div className="flex items-start gap-4 md:gap-8">
        <span className="text-xs md:text-sm font-mono text-gray-400 mt-1.5 md:mt-2 shrink-0">
          {(index + 1).toString().padStart(2, '0')}
        </span>
        <span className={cn(
          "text-lg md:text-xl lg:text-2xl font-medium text-left transition-colors duration-300",
          isOpen ? "text-brand-green" : "text-foreground dark:text-white group-hover:text-brand-green/80"
        )}>
          {question}
        </span>
      </div>
      <div className="mt-1 md:mt-2 shrink-0">
        {isOpen ? (
          <Minus className="h-5 w-5 md:h-6 md:w-6 text-brand-green" />
        ) : (
          <Plus className="h-5 w-5 md:h-6 md:w-6 text-gray-400 group-hover:text-brand-green transition-colors" />
        )}
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:col-span-5 h-full">
            <div className="lg:sticky lg:top-32 space-y-6 md:space-y-8">
              <Badge variant="neon" className="px-4 py-1">
                FAQ
              </Badge>
              
              <div className="space-y-4 md:space-y-6">
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground dark:text-white leading-[1.1] tracking-tight">
                  Perguntas que todo <span className="text-brand-green italic">tabelião</span> faz.
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                  Tudo o que você precisa saber antes de modernizar os pagamentos do seu cartório com a ParceleCart.
                </p>
              </div>

              <Button variant="outline" size="lg" asChild className="group rounded-full px-8 border-gray-200 dark:border-gray-800 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300">
                <a href="/contato" className="flex items-center gap-2 text-base font-medium">
                  Fale com um Especialista
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.4} inView>
              <Accordion type="single" className="w-full border-t border-gray-200 dark:border-gray-800">
                {faqItems.map((item, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`item-${i}`} 
                    className="border-b border-gray-200 dark:border-gray-800 py-2 md:py-4"
                  >
                    <AccordionTrigger hideChevron className="hover:no-underline py-6">
                      <FAQTrigger question={item.question} index={i} />
                    </AccordionTrigger>
                    <AccordionContent className="pl-10 md:pl-20 pr-4 md:pr-12 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed pb-8">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
