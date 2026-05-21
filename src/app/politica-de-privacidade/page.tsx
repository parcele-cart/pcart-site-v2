import { InstitutionalHeader } from "@/components/sections/institutional-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — ParceleCart",
  description: "Leia a nossa política de privacidade e saiba como tratamos seus dados.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <InstitutionalHeader 
        title="Política de Privacidade" 
        lastUpdated="14 de dezembro de 2023"
      />
      
      <div className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-12">
        <div className="w-full text-foreground/90 dark:text-gray-300 space-y-12 leading-relaxed text-base sm:text-lg">
          
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">1. DISPOSIÇÕES PRELIMINARES</h2>
            <p className="mb-4">
              A ParceleCart reconhece a importância da privacidade e da proteção de dados pessoais para os seus usuários e, por isso, desejamos que você se familiarize com a forma que tratamos os seus dados pessoais, em atendimento à Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais – LGPD).
            </p>
            <p className="mb-4">
              Esta Política de Privacidade e de Proteção de Dados Pessoais descreve todo tratamento que ocorre na organização, bem como as finalidades específicas para as práticas adotadas, o que permite os fundamentos da privacidade e da autodeterminação informativa sejam cumpridos.
            </p>
            <p className="mb-4">
              Por isso, elencamos abaixo as atividades que podem implicar em tratamento de dados pessoais no âmbito da nossa organização.
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-3">
              <li>Da prestação de serviços no âmbito da Plataforma ParceleCart: dados pessoais poderão ser tratados para viabilizar a prestação de serviços de pagamento e de parcelamento das custas e emolumentos cartoriais.</li>
              <li>Realização de processos seletivos, contratação e manutenção de vínculo de prestadores de serviços e colaboradores: no contexto de relações de prestação de serviços ou de atividades de recrutamento de colaboradores, dados pessoais poderão ser tratados para fins de comunicação, seleção, manutenção de banco de currículos e/ou cumprimento de obrigações trabalhistas e fiscais.</li>
              <li>Da divulgação de atividades desempenhadas pela ParceleCart nas mídias sociais: dados pessoais de colaboradores também poderão ser tratados, mediante consentimento do titular, com o objetivo de informar ao público as atividades desempenhadas e os serviços prestados por esta plataforma.</li>
            </ul>
            <p className="mb-4">
              Em observância ao que determina a LGPD, a ParceleCart torna pública a identidade do seu Encarregado pelo tratamento de dados pessoais (ou Data Protection Officer - DPO), para envio de eventual comunicação, pedidos de esclarecimentos ou exercício de quaisquer dos direitos previstos nesta Política:
            </p>
            <p className="mb-4">
              <strong>Encarregado (DPO):</strong> Gabriel Correa de Lemos Whately<br />
              <strong>E-mail do Encarregado:</strong> gabriel@cartco.com.br
            </p>
            <p>
              Titulares de dados pessoais de outras operações de tratamento realizadas pela ParceleCart que não estejam contempladas nesta Política também poderão entrar em contato com DPO para vindicar maiores informações sobre os tratamentos realizados, em prestígio à autodeterminação informativa.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">2. DOS CONCEITOS LEGAIS</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li><strong>Titular:</strong> Conforme a LGPD, é a pessoa natural a quem se referem os dados pessoais que são objeto de tratamento.</li>
              <li><strong>Dado Pessoal:</strong> De acordo com a LGPD, toda informação relacionada à pessoa natural identificada ou identificável é considerada dado pessoal.</li>
              <li><strong>Dado Pessoal Sensível:</strong> O dado pessoal sensível é aquele que trata sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato, saúde ou vida sexual, dado genético ou biométrico.</li>
              <li><strong>Dado Anonimizado:</strong> Trata-se de informação que perde a possibilidade de vinculação com seu titular.</li>
              <li><strong>Dado Pseudonimizado:</strong> O dado pseudonimizado é aquele que passou por processo com o fito de impossibilitar sua associação com o seu titular, sendo mantida pelo controlador separadamente.</li>
              <li><strong>Controlador:</strong> Trata-se da pessoa natural ou jurídica a quem competem as decisões referentes ao tratamento de dados pessoais.</li>
              <li><strong>Co-controlador:</strong> Quando dois ou mais responsáveis determinarem conjuntamente as finalidades e os meios do tratamento.</li>
              <li><strong>Operador:</strong> É a pessoa que realiza o tratamento de dados pessoais em nome do controlador.</li>
              <li><strong>Autoridade Nacional de Proteção de Dados (ANPD):</strong> Órgão responsável por zelar, implementar e fiscalizar o cumprimento da LGPD.</li>
              <li><strong>Encarregado:</strong> Pessoa indicada para atuar como canal de comunicação entre controlador, titulares e ANPD.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">3. DO TRATAMENTO DE DADOS PESSOAIS E DOS PRINCÍPIOS LEGAIS</h2>
            <p>
              De acordo com a LGPD, tratamento é toda operação realizada com dados pessoais. O tratamento realizado por este escritório observa os princípios de Finalidade, Adequação, Necessidade, Livre Acesso, Qualidade dos Dados, Transparência, Segurança, Prevenção, Não discriminação e Responsabilização.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">4. DAS BASES LEGAIS PARA O TRATAMENTO DE DADOS PESSOAIS</h2>
            <p className="mb-4">
              A ParceleCart promove operações de tratamento amparadas no art. 7º, V, da LGPD, necessárias para a execução dos serviços elencados em nossos Termos de Credenciamento.
            </p>
            <p>
              Dentre os interesses legítimos encontram-se: personalizar a experiência, gerar relatórios estatísticos, melhorar mecanismos de segurança e detectar fraudes.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">5. DAS PRINCIPAIS CATEGORIAS DE DADOS PESSOAIS E SUAS FINALIDADES</h2>
            <p className="mb-2"><strong>a) Dados cadastrais:</strong> Nome, e-mail, endereço, data de nascimento, CPF/CNPJ, gênero e dados de cartão (processamento efêmero).</p>
            <p className="mb-2"><strong>b) Dados de identificação digital:</strong> Geolocalização, IP, data e hora e características do dispositivo.</p>
            <p className="mb-2"><strong>c) Dados relacionados ao exercício de direitos:</strong> Nome, CPF/CNPJ, RG, telefone e e-mail.</p>
            <p className="text-sm italic mt-4 text-gray-500">Observação: Os dados de cartão de crédito não ficam armazenados em nossa base de dados.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">6. DOS DIREITOS DOS TITULARES DE DADOS PESSOAIS</h2>
            <p className="mb-4">
              O exercício dos direitos dispostos na LGPD deve ser encaminhado ao e-mail: <strong className="text-foreground dark:text-white">gabriel@cartco.com.br</strong>.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos dados</li>
              <li>Correção de dados incompletos ou inexatos</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Portabilidade dos dados</li>
              <li>Eliminação dos dados tratados com consentimento</li>
              <li>Informação sobre compartilhamento</li>
              <li>Revogação do consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">7. DA ELIMINAÇÃO DE DADOS PESSOAIS</h2>
            <p>
              Os dados pessoais serão excluídos quando a finalidade for alcançada, houver revogação do consentimento ou determinação da autoridade competente. Poderão ser conservados para cumprimento de obrigação legal ou regulatória.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">8. DO COMPARTILHAMENTO DOS DADOS PESSOAIS</h2>
            <p>
              Os dados poderão ser compartilhados com parceiros como Phoebus e EntrePay para combater fraudes, automatizar processamento e obter relatórios.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">9. POLÍTICA DE COOKIES</h2>
            <p>
              Utilizamos cookies necessários (essenciais para o site) e cookies analíticos/de desempenho (para melhorar a experiência e analisar problemas técnicos). É possível desativar cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">10. TRANSFERÊNCIA INTERNACIONAL DE DADOS PESSOAIS</h2>
            <p>
              Os dados poderão ser compartilhados com destinatários fora do país, com sede nos Estados Unidos, para execução de operações de pagamento junto aos parceiros mencionados.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">11. DAS BOAS PRÁTICAS DE SEGURANÇA DA INFORMAÇÃO</h2>
            <p>
              Garantimos que os dados sejam tratados de forma íntegra e segura. Em caso de incidente de segurança, a ocorrência será comunicada à ANPD e ao titular quando houver risco relevante.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">12. INSTRUÇÕES DE SEGURANÇA WEB</h2>
            <p>
              Sugerimos que não clique em links de e-mails desconhecidos, mantenha antivírus atualizado e não instale programas de fontes suspeitas.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">13. DA ATUALIZAÇÃO DESTA POLÍTICA DE PRIVACIDADE</h2>
            <p>
              Esta política poderá ser alterada a qualquer tempo. Dúvidas podem ser encaminhadas para: <strong className="text-foreground dark:text-white">gabriel@cartco.com.br</strong>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
