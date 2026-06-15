import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, MessageCircle, CheckCircle2 } from "lucide-react"
import { salesPhone } from "@/lib/phone"
import { salesEmail } from "@/lib/email"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const productLinks = [
    { label: "Como Funciona", href: "/#como-funciona", isExternal: false },
    { label: "Diferenciais", href: "/sobre-nos", isExternal: false },
    { label: "Perguntas frequentes", href: "/#faq", isExternal: false },
    { label: "Conteúdo/Blog", href: "/blog", isExternal: false },
    { label: "Falar com o time", href: "/contato", isExternal: true },
  ]

  const supportLinks = [
    { label: "Whatsapp do time", href: salesPhone.whatsapp, isExternal: true },
    { label: "E-mail comercial", href: salesEmail.mailto, isExternal: false },
    { label: "Suporte ao cliente", href: "/contato", isExternal: false },
  ]

  const institutionalLinks = [
    { label: "Termos de Credenciamento", href: "/termos-de-credenciamento", isExternal: false },
    { label: "Política de privacidade (LGPD)", href: "/politica-de-privacidade", isExternal: false },
    { label: "Segurança Cibernética", href: "/politica-de-seguranca-da-informacao-e-cibernetica", isExternal: false },
    { label: "Política PLD-CFT", href: "/politica-de-pld-cft", isExternal: false },
    { label: "Código de Ética", href: "/codigo-de-etica", isExternal: false },
  ]

  return (
    <footer className="bg-[#fcfcfc] dark:bg-[#050505] border-t border-foreground/5 dark:border-white/5">
      <div className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-20">
        <div className="footer-grid">

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
            <p className="text-[15px] leading-relaxed text-gray-500 dark:text-gray-400">
              A infraestrutura de pagamentos feita para cartório.
            </p>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-green flex-shrink-0" />
              <span className="text-[15px] text-gray-500 dark:text-gray-400">Operando desde 2022</span>
            </div>
          </div>

          {/* Column 2: Navegação */}
          <div>
            <h4 className="text-sm font-bold text-foreground dark:text-white mb-8 relative inline-block">
              Navegação
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

          {/* Column 3: Contato */}
          <div>
            <h4 className="text-sm font-bold text-foreground dark:text-white mb-8 relative inline-block">
              Contato
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
                <span className="font-semibold text-foreground/70 dark:text-white/60">PCART SOLUÇÕES EM PAGAMENTO S.A.</span> | CNPJ: 46.037.774/0001-98 
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600">
                &copy; {currentYear} ParceleCart · Em conformidade com a Lei 14.382 e o Provimento 127 do CNJ · PCI DSS Certified
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              {[ 
                { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
                { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
                { icon: <MessageCircle className="h-5 w-5" />, href: salesPhone.whatsapp, label: "WhatsApp" },
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
