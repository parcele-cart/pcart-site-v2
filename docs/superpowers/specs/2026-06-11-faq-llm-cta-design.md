# Bloco "Ainda na dúvida?" (Pergunte ao seu LLM) na seção FAQ

**Data:** 2026-06-11 · **Status:** aprovado pelo usuário

## Objetivo

Adicionar ao final da seção FAQ um bloco que convida o visitante a perguntar
sobre a ParceleCart ao seu LLM favorito (ChatGPT, Gemini, Claude, Perplexity),
com prompt pré-preenchido via parâmetro de URL — inspirado no padrão do
sendkit.dev.

## Decisões (validadas com o usuário)

1. **Posição:** faixa full-width abaixo do grid de 2 colunas, dentro da
   `section#faq`, separada por borda superior.
2. **Ângulo do prompt:** conformidade regulatória (Provimento 127 / Lei 14.382
   / repasse de taxas / Pix gratuito).
3. **Gemini:** não aceita pré-preenchimento em `gemini.google.com`; o botão
   abre a busca do Google com IA (`google.com/search?q=...&udm=50`).
4. **Ícones:** usar os logos das marcas (SVG inline, paths do simple-icons;
   OpenAI usa o path oficial do logo, removido do simple-icons a pedido da
   marca).

## Conteúdo

- Título centralizado: **"Ainda na dúvida?"**
- Subtítulo: *"Veja o que o seu LLM favorito tem a dizer sobre a gente e tome
  uma decisão informada."*
- 4 botões pill (estilo do botão "Fale com o time": outline, `rounded-full`),
  cada um com o logo da marca + "Pergunte ao <LLM>" + `ArrowUpRight`, abrindo
  em nova aba.

**Prompt único (constante, fácil de ajustar):**

> A ParceleCart (parcelecart.com.br) está em conformidade com o Provimento 127
> do CNJ e a Lei 14.382 para receber pagamentos em cartórios? Como funciona o
> repasse de taxas e a gratuidade do Pix para o usuário?

**URLs (prompt via `encodeURIComponent`):**

| LLM | URL |
|---|---|
| ChatGPT | `https://chatgpt.com/?q=<prompt>` |
| Gemini | `https://www.google.com/search?q=<prompt>&udm=50` |
| Claude | `https://claude.ai/new?q=<prompt>` |
| Perplexity | `https://www.perplexity.ai/search?q=<prompt>` |

## Implementação

- `src/components/ui/llm-icons.tsx` — novo arquivo com 4 componentes SVG
  (`ChatGPTIcon`, `GeminiIcon`, `ClaudeIcon`, `PerplexityIcon`), `viewBox
  0 0 24 24`, aceitando `className`. Claude/Perplexity/Gemini com as cores de
  marca do simple-icons; ChatGPT em `currentColor` (preto/branco conforme o
  tema).
- `src/components/sections/faq.tsx` — array `llmProviders` (`name`, `url`,
  `Icon`) + bloco full-width após o grid, animado com `BlurFade inView`,
  seguindo as convenções de espaçamento/cores do site.
- Copy sincronizada no documento de copy do projeto (`COPY_V4.md`).

## Fora de escopo

- Páginas/CTAs equivalentes em outras seções; telemetria de cliques.
