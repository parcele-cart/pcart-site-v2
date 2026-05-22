import { InstitutionalHeader } from "@/components/sections/institutional-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de PLD-CFT — ParceleCart",
  description: "Leia nossa política de Prevenção à Lavagem de Dinheiro e Combate ao Financiamento do Terrorismo (PLD-CFT).",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PLDCFTPage() {
  return (
    <main className="min-h-screen">
      <InstitutionalHeader 
        title="Política de PLD-CFT" 
        subtitle="INSTITUCIONAL PARCELECART"
        lastUpdated="14 de dezembro de 2023"
      />
      
      <div className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-12">
        <div className="w-full text-foreground/90 dark:text-gray-300 space-y-12 leading-relaxed text-base sm:text-lg">
          
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">1. INTRODUÇÃO</h2>
            <div className="space-y-4">
              <p>A política denominada de Prevenção à Lavagem de Dinheiro e Combate ao Financiamento do Terrorismo (“PLD-CFT”) promove a adequação das atividades operacionais da PCART SOLUCOES EM PAGAMENTO S.A., com as diversas normas pertinentes ao Crime de Lavagem de Dinheiro e Financiamento ao Terrorismo, garantindo a conformidade com as leis e regulamentos.</p>
              <p>Ademais, estabelece limites de padrão de prevenção de atividades consideradas ilícitas, efetuando monitoramentos contínuos.</p>
              <p>Cumpre informar que a política supracitada deve ser interpretada em conjunto com o Código de Ética e a Política de Compliance, bem como outras políticas aplicáveis.</p>
              <p>Portanto, o principal propósito da política é a:</p>
              <ul className="list-none space-y-2 pl-0">
                <li>(i) adequação das atividades operacionais e controles internos às normas pertinentes, com a finalidade de detectar e prevenir potenciais atividades de ocultação de origem ilícita de bens, direitos e valores ou crimes a eles relacionados (“PLD-CFT”);</li>
                <li>(ii) acompanhar as operações realizadas no âmbito de suas atividades;</li>
                <li>(iii) às propostas de operações com pessoas politicamente expostas e;</li>
                <li>(iv) prevenção e coibição do financiamento ao terrorismo e da corrupção.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">2. OBJETIVO</h2>
            <p>A PCART SOLUCOES EM PAGAMENTO S.A. implementou a política de PLD-CFT em seus negócios, como forma de conduzir seu estabelecimento com transparência, compromisso e experiência profissional extremamente qualificada.</p>
            <p>A presente política visa estabelecer as diretrizes e as regras que devem ser seguidas pelos colaboradores, prestadores de serviço, sócios e diretores como forma não apenas de identificação, mas possibilitando alinhar as políticas da empresa e de gerenciamento dos negócios da PCART SOLUCOES EM PAGAMENTO S.A..</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">3. APLICABILIDADE</h2>
            <p>Esta Política é aplicável a todas as pessoas vinculadas à PCART SOLUCOES EM PAGAMENTO S.A., em especial aos administradores, colaboradores, estagiários, diretores terceirizados e operadores envolvidos com negócios e atividades da empresa.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">4. VIGÊNCIA, REVOGAÇÃO E CICLO DE REVISÃO</h2>
            <p>Esta política possui vigência de 1 (um) ano e deve ser revisada e aprovada pelo Departamento de Compliance, anualmente ou em prazo inferior, se assim requerido pelo regulador local, no caso de alteração na legislação aplicável, se houver alguma alteração das práticas de negócios da PCART SOLUCOES EM PAGAMENTO S.A. ou arranjo de pagamento que justifiquem, no entender do Compliance, a atualização desta política. Após aprovada, esta política será amplamente divulgada internamente.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">5. DEFINIÇÕES</h2>
            <div className="space-y-4">
              <p><strong>A. Lavagem de Dinheiro</strong> - A expressão “lavagem de dinheiro” consiste na prática de atividades criminosas que visam tornar o dinheiro ilícito em lícito, ou seja, é o processo pelo qual o criminoso transforma recursos ganhos em atividades ilegais em recursos com uma origem aparentemente legal ao ocultar ou dissimular a natureza, origem, localização, disposição, movimentação ou propriedade de bens, direitos ou valores provenientes, direta ou indiretamente, de infração penal.</p>
              <p><strong>B. Financiamento ao Terrorismo</strong> - Consiste na reunião de fundos e/ou capital para realização de atividades terroristas. Esses fundos podem ser provenientes de doações ou ganho de diversas atividades lícitas ou ilícitas tais como tráfico de drogas, prostituição, crime organizado, contrabando, extorsões, sequestros, fraudes, etc.</p>
              <p><strong>C. Pessoa Exposta Politicamente</strong> - Consideram-se pessoas politicamente expostas os agentes públicos que desempenham ou tenham desempenhado nos últimos 5 (cinco) anos, no Brasil ou em países, territórios e dependências estrangeiras, cargos, empregos ou funções públicas relevantes, assim como seus representantes, familiares e outras pessoas de seu relacionamento próximo.</p>
              <p><strong>D. Coligadas</strong> - As sociedades Corretoras de Valores Mobiliários, Corretoras de Seguros, Seguradora, Gestoras de Recursos de Terceiros em que a Companhia tenha influência significativa (art. 243, §1o, da Lei no6.404/76).</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">5.1 ETAPAS DO CRIME DE LAVAGEM DE DINHEIRO</h2>
            <div className="space-y-4">
              <p>O processo de Lavagem de Dinheiro envolve algumas etapas que serão listadas a seguir:</p>
              <p><strong>(i) Colocação:</strong> momento em que o criminoso introduz valores obtidos ilicitamente no sistema econômico através da realização de depósitos, compra de bens, ou até mesmo, instrumentos negociáveis. Basicamente, trata-se de remoção do dinheiro do local em que foi ilegalmente adquirido, com posterior inclusão no mercado financeiro.</p>
              <p><strong>(ii) Ocultação:</strong> é a etapa em que o agente realiza transações suspeitas e caracterizadoras do crime de Lavagem de Dinheiro, consistindo em segregação física entre o agente e o dinheiro ilícito, através de transações para desassociar a fonte ilegal do dinheiro.</p>
              <p><strong>(iii) Integração:</strong> momento em que o dinheiro recebe aparência lícita, integrando definitivamente no sistema econômico e financeiro.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">5.2 INDÍCIOS DE LAVAGEM DE DINHEIRO E FINANCIAMENTO AO TERRORISMO</h2>
            <p className="mb-6">É de importância inestimável que todos os colaboradores, sócios e agentes autônomos tenham conhecimento das operações que configuram indícios de lavagem de dinheiro e financiamento ao terrorismo.</p>
            <p className="mb-4">A lista exposta abaixo possui um rol identificando possíveis indícios que devem ser analisados cautelosamente:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Cujos valores se afigurem objetivamente incompatíveis com a ocupação profissional e a situação financeira patrimonial declarada;</li>
              <li>Realizadas entre as mesmas partes ou em benefício das mesmas partes, nas quais haja seguidos ganhos ou perdas no que se refere a algum dos envolvidos;</li>
              <li>Evidenciem oscilação significativa em relação ao volume e/ou frequência de negócios de qualquer das partes envolvidas;</li>
              <li>Cujos desdobramentos contemplem características que possam constituir artifício para burla da identificação dos efetivos envolvidos e/ou beneficiários respectivos;</li>
              <li>Cujas características e/ou desdobramentos evidenciem atuação, de forma contumaz, em nome de terceiros;</li>
              <li>Que evidenciem mudança repentina e objetivamente injustificada relativamente às modalidades operacionais usualmente utilizadas pelo(s) envolvido(s);</li>
              <li>Realizadas com finalidade de gerar perda ou ganho para as quais falte, objetivamente, fundamento econômico;</li>
              <li>Com a participação de pessoas naturais residentes ou entidades constituídas em países que não aplicam ou aplicam insuficientemente as recomendações do Grupo de Ação Financeira contra a Lavagem de Dinheiro e Combate ao Financiamento do Terrorismo - GAFI;</li>
              <li>Transferências privadas, sem motivação aparente, de recursos e de valores mobiliários;</li>
              <li>Em que não seja possível identificar o beneficiário final;</li>
              <li>Cujo grau de complexidade e risco se afigurem incompatíveis com a qualificação técnica do cliente ou de seu representante;</li>
              <li>Resistência em fornecer as informações necessárias para credenciamento e contratação de serviços;</li>
              <li>Declarar diversas contas bancárias e/ou modificá-las com habitualidade;</li>
              <li>O cliente realiza operações de câmbio sem levar em consideração as taxas de corretagem e cotações oferecidas;</li>
              <li>O cliente de repente realiza diversas operações de câmbio, sem motivo aparente, especialmente se anteriormente havia pouco ou nenhuma atividade na conta;</li>
              <li>Autorizar procurador que não apresente vínculo aparente;</li>
              <li>Resistência em fornecer informações, ou fornecimento de informações incorretas, relativas à identificação ou à operação;</li>
              <li>Variações relevantes da importância segurada sem causa aparente;</li>
              <li>Mudança do titular do negócio ou bem imediatamente anterior a sinistros;</li>
              <li>Pagamento a beneficiário sem aparente relação com o segurado, sem razão justificável; e</li>
              <li>Propostas ou operações incompatíveis com o perfil socioeconômico, capacidade financeira ou ocupação profissional do cliente, beneficiário, terceiros, e outras partes relacionadas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">5.3 IDENTIFICAÇÃO E TRATAMENTO DE INDÍCIOS DE LAVAGEM DE DINHEIRO E FINANCIAMENTO AO TERRORISMO</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">(i) Processo de Identificação “Conheça Seu Cliente”</h3>
                <p>A política denominada Know Your Client (“KYC”) é parte integrante da Política de Prevenção à Lavagem de Dinheiro e Combate ao Financiamento do Terrorismo, conhecida como “PLD-CFT”.</p>
                <p>Esta política estabelece limites de padrão de prevenção de atividades consideradas ilícitas, efetuando monitoramentos contínuos e obtendo informações do dia a dia de todos os seus colaboradores.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">(ii) Processo “Conheça seu Funcionário”</h3>
                <p>A política denominada Know Your Employee (“KYE”) é parte integrante da Política de Prevenção à Lavagem de Dinheiro e Combate ao Financiamento do Terrorismo, conhecida como “PLD-CFT”. Ademais, estabelece limites de padrão de prevenção de atividades consideradas ilícitas, efetuando monitoramentos contínuos e obtendo informações do dia a dia de todos os seus colaboradores.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">(iii) Processo “Conheça Seu Fornecedor”</h3>
                <p>Trata-se de um conjunto de regras e procedimentos que devem ser adotados para identificação e aceitação de fornecedores e prestadores de serviços, prevenindo a contratação de empresas inidôneas ou suspeitas de envolvimento em atividades ilícitas.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">(iv) Processo “Conheça seu Parceiro"</h3>
                <p>Tem como principal objetivo estabelecer diretrizes e procedimentos destinados a conhecer os clientes, parceiros e prestadores de serviço terceirizados, bem como colaboradores, assegurando a diligência na identificação, qualificação e classificação de risco de LDFT nestes relacionamentos.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">5.4 TREINAMENTOS</h2>
            <p>A área de Compliance é responsável por realizar a revisão dos conceitos contidos na Política e incentivar a adoção de medidas cabíveis em casos de suspeita de Lavagem de Dinheiro e Financiamento ao Terrorismo.</p>
            <p>Para isso, são adotados treinamentos esporádicos compostos por parte relevante da empresa, bem como disponibilizado canais para eventuais dúvidas acerca do assunto. No momento de contratação, todo colaborador, sócio ou agente autônomo é obrigado a realizar este treinamento em plataforma on-line interna.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">5.5 AVALIAÇÃO INTERNA DE RISCO</h2>
            <p className="mb-4">Para identificação dos riscos de que trata o caput, a avaliação interna deve considerar, no mínimo, os perfis de risco:</p>
            <ul className="list-none space-y-2 pl-0">
              <li>I - Dos clientes;</li>
              <li>II - Do próprio supervisionado, levando em conta seus modelos de negócio e áreas de atuação;</li>
              <li>III - Das operações, levando em conta suas características, notadamente no que se refere a forma e meio de pagamento, bens, valores, ativos, produtos ou serviços envolvidos;</li>
              <li>IV - Dos funcionários, prestadores de serviços terceirizados e colaboradores de um modo geral.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">6. RESPONSABILIDADES</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">6.1 Diretoria Executiva</h3>
                <p>Responsável por revisar e aprovar diretrizes, supervisionar o cumprimento e prover recursos necessários para a equipe.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">6.2 Comitê de Compliance</h3>
                <p>Responsável por validar normas, aprovar manuais de procedimentos e assegurar a conformidade com a legislação.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">6.3 Compliance</h3>
                <p>Área principal responsável pelo programa: divulgar normas, prover treinamentos, monitorar transações suspeitas e informar ao UIF quando necessário.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">6.4 Área Comercial</h3>
                <p>Aplicar as melhores práticas de KYC e comunicar suspeitas ao Compliance.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">6.5 Colaboradores</h3>
                <p>Comunicar qualquer situação de atipicidade ou suspeição no desempenho de suas atividades.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">6.6 Tecnologia da Informação</h3>
                <p>Garantir a confidencialidade, integridade e disponibilidade da informação e dos sistemas.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">6.7 Recursos Humanos</h3>
                <p>Viabilizar programas de treinamentos periódicos e certificar-se da conclusão do treinamento anual.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">6.8 Diretoria de Prevenção a Fraude</h3>
                <p>Monitorar risco operacional e implementar controles de mitigação de risco transacional.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">6.9 Departamento de Operações/Credenciamento</h3>
                <p>Verificar indícios de irregularidade no cadastro e realizar consultas em listas restritivas (Lista Suja, CEIS, CEPIM, etc).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">7. PESSOAS EXPOSTAS POLITICAMENTE</h2>
            <p>Os clientes devem declarar se são "PEP" durante o cadastro. Representantes, familiares ou pessoas de relacionamento próximo também são monitoradas de forma especial devido ao enquadramento em grupo de alto risco.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">8. RELATÓRIO ANUAL</h2>
            <p>São realizados testes anuais que constam em relatório formalizado pela Diretoria de Compliance e PLD-CFT, ratificado pelo Comitê Executivo e encaminhado à Administração.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">9. PENALIDADES</h2>
            <p>Violações podem resultar em investigação, medidas disciplinares, rescisão contratual e comunicação às autoridades. As sanções podem incluir multas, processos judiciais e restrições de mercado.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">10. SIGILO DAS INFORMAÇÕES</h2>
            <p>Informações sobre indícios de lavagem de dinheiro são confidenciais. A ParceleCart mantém dados por no mínimo dez anos à disposição do Banco Central do Brasil.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">11. ADESÃO</h2>
            <p>Todos os colaboradores devem assinar termo de recebimento e participar dos treinamentos periódicos obrigatórios.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">12. CONSIDERAÇÕES FINAIS</h2>
            <p>Dúvidas ou esclarecimentos devem ser encaminhados para: <strong className="text-foreground dark:text-white">gabriel@cartco.com.br</strong>.</p>
          </section>

        </div>
      </div>
    </main>
  );
}
