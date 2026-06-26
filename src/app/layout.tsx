import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Pointer } from "@/components/ui/pointer";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://parcelecart.com.br";
const siteDescription =
  "Pix, cartão parcelado em até 21x e boleto para cartórios. Repasse automático de taxas, segregação por atribuição e integração com os principais sistemas cartoriais.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ParceleCart — Pagamentos eletrônicos para cartórios",
  description: siteDescription,
  applicationName: "ParceleCart",
  keywords: [
    "pagamentos cartórios",
    "parcelamento cartório",
    "pix cartório",
    "fintech cartório",
    "ParceleCart",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "ParceleCart",
    title: "ParceleCart — Pagamentos eletrônicos para cartórios",
    description: siteDescription,
    images: [
      {
        url: "/images/hero-dashboards.png",
        width: 616,
        height: 410,
        alt: "ParceleCart — pagamentos eletrônicos para cartórios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ParceleCart — Pagamentos eletrônicos para cartórios",
    description: siteDescription,
    images: ["/images/hero-dashboards.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased selection:bg-brand-blue-light/30 selection:text-foreground dark:text-white`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ParceleCart",
              legalName: "PCART SOLUÇÕES EM PAGAMENTO S.A.",
              url: "https://parcelecart.com.br",
              logo: "https://parcelecart.com.br/images/logo-light-theme.png",
              description:
                "Infraestrutura de pagamentos (Pix, cartão parcelado e boleto) para cartórios e serventias extrajudiciais.",
              areaServed: "BR",
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Pointer />
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
