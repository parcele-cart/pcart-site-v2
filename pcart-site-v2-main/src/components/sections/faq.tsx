"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlurFade } from "@/components/ui/blur-fade"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

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

export function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <BlurFade inView>
            <Badge variant="neon" className="mb-4">
              Dúvidas frequentes
            </Badge>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              Perguntas que todo tabelião faz
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-xs sm:text-sm lg:text-base text-gray-400">
              Tire suas dúvidas sobre implantação, integração e operação.
            </p>
          </BlurFade>
        </div>

        {/* Accordion */}
        <BlurFade delay={0.3} inView>
          <Accordion type="single">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-white text-left text-base md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>

        {/* Footer CTA */}
        <BlurFade delay={0.4} inView>
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 mb-4">Tem outra dúvida?</p>
            <Button variant="outline" asChild>
              <a href="/contato">Fale com um Especialista</a>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
