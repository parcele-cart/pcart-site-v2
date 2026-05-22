import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { label: "Solução", href: "/#solucao", isExternal: false },
    { label: "Como Funciona", href: "/#como-funciona", isExternal: false },
    { label: "FAQ", href: "/#faq", isExternal: false },
    { label: "Sobre Nós", href: "/sobre-nos", isExternal: false },
    { label: "Acessar Plataforma", href: "https://portal.parcelecart.com.br", isExternal: true },
  ]

  const supportLinks = [
    { label: "Fale com um Especialista", href: "/contato", isExternal: false },
    { label: "Suporte", href: "/suporte", isExternal: false },
    { label: "Ouvidoria", href: "/ouvidoria", isExternal: false },
  ]

  const institutionalLinks = [
    { label: "Termos de Credenciamento", href: "/termos-de-credenciamento", isExternal: false },
    { label: "Política de Privacidade", href: "/politica-de-privacidade", isExternal: false },
    { label: "Segurança Cibernética", href: "/politica-de-seguranca-da-informacao-e-cibernetica", isExternal: false },
    { label: "Política PLD-CFT", href: "/politica-de-pld-cft", isExternal: false },
    { label: "Código de Ética", href: "/codigo-de-etica", isExternal: false },
  ]

  return (
    <footer className="bg-[#fcfcfc] dark:bg-[#050505] border-t border-foreground/5 dark:border-white/5">
      <div className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-dark-theme.png"
                alt="ParceleCart"
                width={180}
                height={40}
                className="h-10 w-auto hidden dark:block opacity-90 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/images/logo-light-theme.png"
                alt="ParceleCart"
                width={180}
                height={40}
                className="h-10 w-auto block dark:hidden opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400 max-w-xs">
              Tecnologia de ponta em pagamentos eletrônicos para a rotina extrajudicial brasileira.
              Segurança jurídica e eficiência operacional em cada transação.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="text-sm font-bold text-foreground dark:text-white mb-8 relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-brand-green" />
            </h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    className="text-[15px] text-gray-500 dark:text-gray-400 hover:text-brand-green dark:hover:text-brand-green transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-brand-green mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Canais */}
          <div>
            <h4 className="text-sm font-bold text-foreground dark:text-white mb-8 relative inline-block">
              Atendimento
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-brand-green" />
            </h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link?.isExternal ? "_blank" : undefined}
                    className="text-[15px] text-gray-500 dark:text-gray-400 hover:text-brand-green dark:hover:text-brand-green transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-brand-green mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Institucional */}
          <div>
            <h4 className="text-sm font-bold text-foreground dark:text-white mb-8 relative inline-block">
              Institucional
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-brand-green" />
            </h4>
            <ul className="space-y-4">
              {institutionalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-gray-500 dark:text-gray-400 hover:text-brand-green dark:hover:text-brand-green transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-brand-green mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-foreground/5 dark:border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="space-y-4">
              <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed max-w-2xl">
                <span className="font-semibold text-foreground/70 dark:text-white/60">PCART SOLUÇÕES EM PAGAMENTO S.A.</span> | CNPJ: 46.037.774/0001-98 <br className="hidden sm:block" />
                Av. São Gabriel, 201, Cj 105 - Jardim Paulista, São Paulo/SP - CEP 01435-001
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600">
                &copy; {currentYear} ParceleCart | Desenvolvida com muito empenho especialmente para cartórios!
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
                { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
                { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
                { icon: <MessageCircle className="h-5 w-5" />, href: "https://api.whatsapp.com/send/?phone=5511914379025", label: "WhatsApp" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-foreground/10 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-brand-green hover:border-brand-green/50 hover:bg-brand-green/5 transition-all duration-300 hover:scale-105"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
