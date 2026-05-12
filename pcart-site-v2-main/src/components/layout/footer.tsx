import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logotipo parcelecart branco.png"
                alt="ParceleCart"
                width={160}
                height={36}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-base text-gray-500 max-w-sm">
              Plataforma de pagamentos eletrônicos exclusiva para cartórios
              brasileiros. Pix, cartão parcelado em até 21x e boleto com repasse
              automático de taxas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-base font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-2">
              <li>
                <a href="#solucao" className="text-base text-gray-500 hover:text-white transition-colors">
                  Solução
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-base text-gray-500 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="text-base text-gray-500 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a href="/contato" className="text-base text-gray-500 hover:text-white transition-colors">
                  Fale com um Especialista
                </a>
              </li>
              <li>
                <a href="https://portal.parcelecart.com.br" className="text-base text-gray-500 hover:text-white transition-colors">
                  Acessar Plataforma
                </a>
              </li>
            </ul>

            <h4 className="text-base font-semibold text-white mb-4 mt-8">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacidade" className="text-base text-gray-500 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/termos" className="text-base text-gray-500 hover:text-white transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} ParceleCart. Todos os direitos
            reservados. Certificação PCI-DSS. Servidores no Brasil, em
            conformidade com a LGPD.
          </p>
        </div>
      </div>
    </footer>
  )
}
