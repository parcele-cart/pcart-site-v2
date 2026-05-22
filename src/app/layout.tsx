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

export const metadata: Metadata = {
  title: "ParceleCart — Pagamentos eletrônicos para cartórios",
  description:
    "Pix, cartão parcelado em até 21x e boleto para cartórios. Repasse automático de taxas, segregação por atribuição e integração com os principais sistemas cartoriais.",
  keywords: [
    "pagamentos cartórios",
    "parcelamento cartório",
    "pix cartório",
    "fintech cartório",
    "ParceleCart",
  ],
  robots: {
    index: false,
    follow: false,
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
        className={`${inter.variable} ${dmSans.variable} antialiased selection:bg-brand-blue-light/30 selection:text-foreground dark:text-white cursor-none`}
        suppressHydrationWarning
      >
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
