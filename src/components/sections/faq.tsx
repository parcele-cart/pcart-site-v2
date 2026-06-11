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

type FAQItem = {
  question: string
  answer: string
  action?: {
    title: string
    url: string
  }
}

const faqItems: FAQItem[] = [
  {
    question: "Quanto custa para o cartório?",
    answer:
      "Sem mensalidade, sem aluguel de maquininha, sem fidelidade e sem volume mínimo. Conforme o Provimento 127, o Pix é gratuito para o usuário e o cartório pode repassar os custos das demais transações ao usuário final — operando, na prática, sem custo recorrente. Você só paga quando recebe.",
    action: {
      title: "Solicitar proposta",
      url: "/contato",
    },
  },
  {
    question: "Já temos Pix e maquininha — para que mudar?",
    answer:
      "Pix estático exige conciliação manual. Maquininha de varejo não calcula repasse de taxas, não segrega por atribuição e não integra com seu sistema de gestão. A ParceleCart faz tudo isso, com Pix gratuito.",
  },
  {
    question: "A taxa de cartão vai encarecer para o cliente?",
    answer:
      "O Provimento 127 do CNJ autoriza o repasse e garante a gratuidade do Pix. O usuário vê o valor antes de confirmar e escolhe como pagar — incluindo Pix gratuito. Quem opta pelo cartão geralmente prefere isso a desistir do ato.",
    action: {
      title: "Ver legislação aplicável",
      url: "/#diferenciais",
    },
  },
  {
    question: "Posso escolher absorver ou repassar as taxas?",
    answer:
      "Sim. A configuração é sua — você pode, por exemplo, absorver no débito e repassar no crédito. O sistema aplica a regra automaticamente a cada transação, sem erro de cálculo.",
  },
  {
    question: "Como o repasse de taxas é calculado?",
    answer:
      "Cálculo automático, sem intervenção humana. A ParceleCart identifica o meio de pagamento, aplica a taxa configurada e exibe o valor final ao usuário antes da confirmação — inclusive em ITBI e ITCMD.",
  },
  {
    question: "Meu sistema de gestão integra?",
    answer:
      "Integração ativa com os principais sistemas notariais e registrais via API — Siscart, 4 Hands, CSI, Inova, VizWise, Minerva e outros. Se o seu ainda não está na lista, a gente conversa com o fornecedor.",
    action: {
      title: "Conhecer integrações",
      url: "/contato",
    },
  },
  {
    question: "Quanto tempo leva para começar a usar?",
    answer:
      "Você fala com o time, a gente configura o sistema com as suas preferências e você já pode enviar links de pagamento no mesmo dia — enquanto a maquininha chega.",
  },
  {
    question: "As taxas são iguais para qualquer cartório?",
    answer:
      "Sim. Taxas padronizadas e iguais para qualquer serventia, de qualquer estado e porte. Sem letras miúdas.",
    action: {
      title: "Solicitar proposta de taxas",
      url: "/contato",
    },
  },
  {
    question: "Operando desde 2022 — como confiar?",
    answer:
      "Desenhada a partir do Provimento 127 e da Lei 14.382. Certificação PCI DSS. Sem fidelidade — se não funcionar, você sai a qualquer momento, sem multa.",
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
                <h2 className="font-bold text-4xl sm:text-4xl lg:text-4xl text-foreground dark:text-white leading-[1.1] tracking-tight">
                  Perguntas que todos <span className="text-brand-green italic">os cartórios</span> fazem.
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                  Tudo o que você precisa saber antes de modernizar os pagamentos do seu cartório com a ParceleCart.
                </p>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-lg font-light text-foreground dark:text-white">Mais dúvidas?</span>
                <Button variant="outline" size="lg" asChild className="group rounded-full px-8 border-gray-200 dark:border-gray-800 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300">
                  <a href="/contato" className="flex items-center gap-2 text-base font-medium">
                    Fale com o time
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <BlurFade delay={0.4} inView>
              <Accordion type="single" className="w-full border-t border-gray-200 dark:border-gray-800">
                {faqItems.map((item: FAQItem, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-gray-200 dark:border-gray-800 py-2 md:py-4"
                  >
                    <AccordionTrigger hideChevron className="hover:no-underline py-6">
                      <FAQTrigger question={item.question} index={i} />
                    </AccordionTrigger>
                    <AccordionContent className="pl-10 md:pl-20 pr-4 md:pr-12 pb-8">
                      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {item.answer}
                      </p>
                      {item.action && (
                        <a
                          href={item.action.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-brand-green font-medium text-base md:text-lg hover:gap-3 transition-all duration-300 group"
                        >
                          {item.action.title}
                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                      )}
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
