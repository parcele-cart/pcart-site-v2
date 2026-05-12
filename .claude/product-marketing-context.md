# Product Marketing Context — ParceleCart

*Last updated: 2026-02-25 (rev 2)*

## Product Overview
**One-liner:** Fintech especializada em soluções de pagamento para serventias extrajudiciais, criada para modernizar como os cartórios recebem, repassam e conciliam pagamentos com conformidade ao Provimento nº 127/2022 do CNJ.
**What it does:** A ParceleCart atua como subcredenciadora, conectando cartórios a meios eletrônicos (Pix, cartões de crédito e débito, boleto) por meio de maquininhas (POS), links de pagamento e APIs. Automatiza o cálculo do repasse de taxas para o usuário final, a segregação de recebíveis por atribuição em múltiplos domicílios bancários e a conciliação financeira — eliminando trabalho manual e garantindo rastreabilidade regulatória.
**Product category:** Subcredenciadora de pagamentos / Fintech para o setor extrajudicial
**Product type:** SaaS + hardware (POS)
**Business model:** Por uso/comissão. Sem mensalidade, sem aluguel de equipamento, sem fidelidade (tempo mínimo de permanência), sem volume mínimo transacionado.

---

## Target Audience
**Target organizations:** Serventias extrajudiciais (cartórios) de todos os tipos. Prioridade: Notas, Protesto e Registro de Imóveis. Também atende Registro Civil.
**Decision-makers:** Decisão conjunta entre o titular (tabelião ou registrador) e o responsável financeiro/administrativo da serventia.
**Primary use case:** Substituir meios de pagamento manuais (Pix estático, boleto, cheque, dinheiro) por uma solução eletrônica completa que automatiza o repasse de taxas, a conciliação e a segregação de recebíveis por atribuição.
**Jobs to be done:**
- Aceitar pagamentos eletrônicos (cartão, Pix QR Code) sem complicação jurídica ou operacional
- Calcular e repassar automaticamente as taxas de cartão ao usuário final (conforme Prov. 127)
- Conciliar e separar recebíveis por atribuição (Notas, Protesto, RI, RT...) em contas distintas
- Oferecer parcelamento de tributos (ITBI, ITCMD) e emolumentos, convertendo atos que não seriam praticados por falta de liquidez do usuário final
**Use cases:**
- Tabelionato que quer parar de operar só no dinheiro/boleto e modernizar o caixa
- Cartório de notas e protesto que precisa liquidar valores de cada operação em contas distintas, conforme atribuição
- Serventia que quer integrar pagamentos ao seu sistema de gestão via API e eliminar conciliação manual
- Cartório que quer aumentar seu faturamento oferecendo parcelamento aos seus clientes e evitando retrabalhos de atos nao concluidos por forma de pagamento.

---

## Personas

| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| Tabelião / Registrador (titular) | Conformidade regulatória, reputação, não ter problema com o CNJ, controle de custos | Entender se a solução é homologada e adequada ao Provimento 127; garantir que a serventia não absorva custos de transação | Produto criado especificamente para o setor, em conformidade com o CNJ; repasse automático de taxas ao usuário final elimina custo para a serventia; Pix QR Code gratuito sem taxa operacional |
| Financeiro / Administrativo | Fechamento correto, conciliação, menos retrabalho | Conciliar Pix estático, boleto e dinheiro manualmente todo mês | Automação completa da conciliação, comprovantes com número de pedido e taxas discriminadas |
| Escrevente | Concluir o atendimento sem atrito, não devolver usuário por falta de forma de pagamento | Usuário final que não tem o valor total disponível no momento — ato não se concretiza, gera retrabalho e frustração | Parcelamento que viabiliza a conclusão de atos (incluindo ITBI e ITCMD) que não seriam praticados sem essa possibilidade — mais atos concluídos por atendimento |

---

## Problems & Pain Points
**Core problem:** Cartórios não conseguiam aceitar pagamentos eletrônicos com facilidade por complexidades operacionais únicas do setor — especialmente o cálculo do repasse das taxas de cartão e a segregação de recebíveis por atribuição.
**Why alternatives fall short:**
- Gateways tradicionais (Stone, Cielo, Safra, Rede, InfinitePay): não conhecem o setor, pedem documentos que cartório não tem (ex: "contrato social"), não calculam repasse, não segregam domicílios por atribuição
- ParcelaExpress (concorrente nichado): taxas variáveis por porte/atribuição/região, sem Pix QR Code gratuito, sem liquidação em múltiplos domicílios livres, exige fidelidade
- Status quo (Pix estático + boleto + dinheiro): conciliação 100% manual, sem rastreabilidade, sem flexibilidade para o usuário final pagar parcelado
**What it costs them:** Horas de trabalho manual em conciliação todo mês, erros de fechamento, perda de usuários que preferem pagar com cartão, risco de não-conformidade regulatória.
**Emotional tension:** Medo de escolher uma solução que gere problema com o CNJ e clientes; frustração com o retrabalho da conciliação manual; desconfiança em fintechs "de fora" que não entendem como funciona um cartório.

---

## Competitive Landscape
**Direct (nichos extrajudiciais):**
- ParcelaExpress — taxas variam por porte/atribuição/região, exige fidelidade, sem Pix QR Code gratuito, UI mais complexa
- Giro Pagamentos — concorrente nichado, menos recursos conhecidos

**Traditional (gateways/credenciadoras genéricas):**
- Stone, Cielo, Safra, Rede, InfinitePay — não conhecem o setor extrajudicial, sem cálculo de repasse, sem segregação por atribuição, processo de credenciamento inadequado para serventias

**Indirect (status quo):**
- Pix estático + boleto + dinheiro + cheque — conciliação manual, sem parcelamento, sem rastreabilidade automatizada

---

## Differentiation
**Key differentiators:**
- Único com taxas padronizadas para todos os cartórios (sem variação por porte, atribuição ou região)
- Pix QR Code gratuito
- Liquidação de recebíveis em múltiplos domicílios bancários livres (segregação por atribuição)
- Parcelamento com cálculo automático do repasse de taxas ao usuário final — inclusive para tributos como ITBI e ITCMD
- Número de pedido registrado na maquininha e no link — simplifica radicalmente a conciliação
- Todas as taxas discriminadas no comprovante de pagamento
- Sem fidelidade, sem volume mínimo, sem mensalidade, sem aluguel de equipamento
- Integração via API com os principais sistemas de gestão de atos notariais e registrais
- UI/UX clean e minimalista — mais fácil de usar que concorrentes
- Certificação PCI DSS — padrão internacional de segurança para transações com cartão, garantindo proteção dos dados e conformidade com as melhores práticas do mercado financeiro

**How we do it differently:** A ParceleCart foi construída do zero para o setor extrajudicial — não é uma solução genérica adaptada. Entende as especificidades jurídicas, operacionais e regulatórias de um cartório que outros players desconhecem.

**Why that's better:** Elimina o retrabalho da conciliação manual, garante conformidade com o CNJ, flexibiliza o pagamento para o usuário final sem criar complexidade para o cartório.

**Why customers choose us:** Especialização real no setor + modelo sem amarras (sem fidelidade, sem mensalidade) + taxas padronizadas e previsíveis.

---

## Objections

| Objection | Response |
|-----------|----------|
| "Já tenho Pix, não preciso de mais nada" | Pix estático exige conciliação manual. A ParceleCart adiciona QR Code dinâmico com número de pedido, cálculo de repasse automático e separação por domicílio — o Pix vira rastreável e integrável |
| "A taxa vai encarecer para o cliente" | O Provimento 127 permite o repasse explicitamente. O usuário vê o valor cheio antes de pagar, escolhe o meio, e o cartório não absorve o custo |
| "Nunca ouvi falar de vocês — como confiar?" | Nascemos do Provimento 127 — criados especificamente para esse mercado, atendemos cartórios em todo o Brasil |
| "Já uso a ParcelaExpress e não vou trocar por causa das taxas" | Nossas taxas são padronizadas independente de porte/região; temos Pix gratuito, sem fidelidade, liquidação livre e UI mais simples — avalie o custo total, não só a taxa de cartão |

**Anti-persona:** Cartório com volume muito baixo de atos transacionados (não compensa a operação).

---

## Switching Dynamics
**Push (o que frustra quem usa o concorrente):**
- Taxas da ParcelaExpress variam por porte/atribuição/região — imprevisíveis e potencialmente injustas
- Exigência de fidelidade (tempo mínimo de permanência) — sensação de estar "preso"
- Falta de Pix QR Code gratuito
- Limitações na segregação de domicílios bancários

**Pull (o que atrai para a ParceleCart):**
- Taxas padronizadas e previsíveis para qualquer cartório
- Pix QR Code gratuito
- Liquidação livre em múltiplos domicílios
- Sem fidelidade, sem mensalidade, sem aluguel
- UI mais clean e fácil de usar
- Integração API mais completa

**Habit (o que mantém no concorrente):**
- Setup já feito, equipe já treinada
- Relacionamento estabelecido com ParcelaExpress
- Medo de migração gerar problema operacional

**Anxiety (o que preocupa na troca):**
- "As taxas de cartão da ParceleCart são um pouco maiores — vale a pena trocar?"
- Incerteza sobre o processo de migração
- Dúvida se a integração com o sistema atual vai funcionar

---

## Customer Language

**How they describe the problem:**
*(Ainda não rastreado formalmente — oportunidade de coleta)*

**Termos do setor que devem ser usados naturalmente:**
- Serventia / serventia extrajudicial
- Atos / prática de atos notariais e registrais
- Atribuições (Notas, Protesto, Registro de Imóveis, Registro de Títulos, Registro Civil)
- Domicílio bancário
- Conciliação
- Repasse de taxas
- Provimento nº 127/2022 do CNJ
- Tabelião / registrador / titular
- Escrevente
- Usuário final (não "cliente" — o cidadão que vai ao cartório)
- Parcelamento com repasse
- ITBI (Imposto sobre Transmissão de Bens Imóveis)
- ITCMD (Imposto sobre Transmissão Causa Mortis e Doação)
- PCI DSS / certificação PCI

**Words to avoid:**
- "Contrato social" (cartório não tem)
- Linguagem genérica de fintech sem contexto cartorial
- "Loja" / "estabelecimento comercial" (cartório é serventia pública)

---

## Brand Voice
**Tone:** Profissional e confiável, sem ser engessado
**Style:** Especialista + acessível — domínio técnico do setor extrajudicial comunicado de forma clara e direta, sem jargão desnecessário
**Personality:** Especialista, transparente, sem amarras, moderno

---

## Proof Points
**Metrics:** Não divulgados publicamente (cartórios ativos em todo o Brasil)
**Coverage:** Cobertura nacional — atende serventias em todos os estados
**Value themes:**
| Theme | Proof |
|-------|-------|
| Especialização real no setor | Produto criado a partir do Provimento 127/2022; processo de credenciamento adequado para serventias |
| Sem surpresas financeiras | Taxas padronizadas, discriminadas no comprovante, Pix gratuito |
| Sem amarras | Sem fidelidade, sem mensalidade, sem volume mínimo, sem aluguel |
| Conciliação automatizada | Número de pedido no comprovante, segregação por domicílio, integração API |
| Segurança e conformidade financeira | Certificação PCI DSS — padrão internacional de segurança para transações com cartão |

---

## Goals
**Business goal:** Ganhar market share convertendo cartórios que já usam concorrentes (especialmente ParcelaExpress e gateways tradicionais).
**Conversion action:** Solicitar proposta / orçamento
**Current metrics:** Em construção — base de cartórios ativos crescendo, cobertura nacional
