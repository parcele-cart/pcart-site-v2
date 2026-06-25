import type { MetadataRoute } from "next";

const siteUrl = "https://parcelecart.com.br";

// Rotas estáticas do site. Ao criar uma nova página pública, adicione aqui.
const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/sobre-nos", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contato", priority: 0.8, changeFrequency: "monthly" },
  { path: "/suporte", priority: 0.6, changeFrequency: "monthly" },
  { path: "/ouvidoria", priority: 0.5, changeFrequency: "yearly" },
  { path: "/termos-de-credenciamento", priority: 0.4, changeFrequency: "yearly" },
  { path: "/codigo-de-etica", priority: 0.4, changeFrequency: "yearly" },
  { path: "/politica-de-pld-cft", priority: 0.4, changeFrequency: "yearly" },
  { path: "/politica-de-privacidade", priority: 0.4, changeFrequency: "yearly" },
  { path: "/politica-de-seguranca-da-informacao-e-cibernetica", priority: 0.4, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    priority,
    changeFrequency,
  }));
}
