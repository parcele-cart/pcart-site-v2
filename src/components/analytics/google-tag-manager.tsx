import { GoogleTagManager as NextGoogleTagManager } from "@next/third-parties/google";

/**
 * Google Tag Manager (via pacote oficial @next/third-parties).
 *
 * Carrega APENAS o container do GTM. As tags de GA4, Google Ads e quaisquer
 * outras devem ser configuradas DENTRO do painel do GTM — não no código —
 * para evitar disparo duplicado e centralizar o gerenciamento.
 *
 * O componente oficial cuida do script base E do fallback <noscript>,
 * posicionando ambos no lugar correto e de forma otimizada para o App Router.
 * Para disparar eventos customizados use `sendGTMEvent` de "@next/third-parties/google".
 *
 * O container ID vem de NEXT_PUBLIC_GTM_ID. Se a variável não estiver
 * definida, nada é renderizado (ambientes de dev/preview ficam sem tracking).
 */
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export function GoogleTagManager() {
  if (!GTM_ID) return null;
  return <NextGoogleTagManager gtmId={GTM_ID} />;
}
