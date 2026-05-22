import { InstitutionalHeader } from "@/components/sections/institutional-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Segurança da Informação — ParceleCart",
  description: "Conheça nossas diretrizes de segurança da informação e cibernética.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function SecurityPolicyPage() {
  return (
    <main className="min-h-screen">
      <InstitutionalHeader
        title="Política de Segurança da Informação e Cibernética (PSI)"
        lastUpdated="11 de dezembro de 2023"
      />

      <div className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-12">
        <div className="w-full text-foreground/90 dark:text-gray-300 space-y-12 leading-relaxed text-base sm:text-lg">

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">1. SOBRE A POLÍTICA DE SEGURANÇA DA INFORMAÇÃO E CIBERNÉTICA</h2>
            <p className="mb-4">
              A Política de Segurança da Informação e Cibernética (PSI) é o documento que orienta e estabelece as diretrizes corporativas da PCART SOLUCOES EM PAGAMENTO LTDA para a proteção dos ativos de informação e a prevenção da responsabilidade legal para todos os usuários. Deve, portanto, ser cumprida e aplicada em todas as áreas da instituição.
            </p>
            <p>
              A PSI segue as leis vigentes no Brasil e foi elaborada com base nas recomendações propostas pela norma ABNT NBR ISO/IEC 27002:2013, reconhecida mundialmente como um código de prática para a gestão da segurança da informação.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">2. CONCEITOS E DEFINIÇÕES</h2>
            <div className="space-y-4">
              <p><strong>Ativo:</strong> todo e qualquer bem da PCART SOLUCOES EM PAGAMENTO LTDA que possui valor econômico, incluindo a informação, e todo o recurso utilizado para o seu tratamento, tráfego e armazenamento.</p>
              <p><strong>Ativo Crítico e Sensível:</strong> todo ativo considerado essencial para a PCART SOLUCOES EM PAGAMENTO LTDA, cujo acesso por pessoas não autorizadas ou a falta de acesso por quem é permitido podem causar danos à instituição.</p>
              <p><strong>Cavalo de Troia (Trojan horse):</strong> programa malicioso que cria abertura para outros programas e invasões indesejadas.</p>
              <p><strong>Código Executável:</strong> arquivo interpretado pelo computador como um comando de execução para determinadas funções. Código Malicioso: programa que possibilita ações danosas, como vírus, worms, trojans, spywares, malware, botnet, ransomware, entre outros.</p>
              <p><strong>Colaborador Interno:</strong> qualquer pessoa que execute atividade profissional e que possua algum tipo de contrato de trabalho com a PCART SOLUCOES EM PAGAMENTO LTDA (Exemplos: funcionários e estagiários).</p>
              <p><strong>Colaborador Externo:</strong> qualquer pessoa contratada por empresa terceirizada que execute alguma atividade profissional nas dependências da PCART SOLUCOES EM PAGAMENTO LTDA, sem vínculo empregatício (Exemplos: consultores e prestadores de serviços).</p>
              <p><strong>Confidencialidade:</strong> garantia de que o acesso à informação seja obtido somente por pessoas autorizadas.</p>
              <p><strong>Comunicadores Instantâneos:</strong> aplicativos que permitem interatividade, troca de conversas e conteúdos em tempo real. Ex. WhatsApp, Telegram, outros.</p>
              <p><strong>Custodiante:</strong> quem detém a guarda da informação, mas não é necessariamente seu proprietário.</p>
              <p><strong>Cyberbullying:</strong> prática negativa de assédio moral que afeta o psicológico de outra pessoa por meio de recursos tecnológicos, como publicações na internet e o envio de fotos e vídeos com mensagens ofensivas pelo celular ou qualquer outro dispositivo móvel.</p>
              <p><strong>Dados Pessoais:</strong> informação relacionada a pessoa natural/física identificada ou identificável.</p>
              <p><strong>Dados Pessoais Sensíveis:</strong> dado pessoal sobre origem racial, ou étnica, convicção religiosa, opinião política, filiação à sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural.</p>
              <p><strong>Disponibilidade:</strong> garantia de que os usuários autorizados obtenham, sempre que necessário, acesso à informação e aos ativos correspondentes.</p>
              <p><strong>GPE:</strong> Gerência de Pessoas.</p>
              <p><strong>GTI:</strong> Gerência de Tecnologia de Informação.</p>
              <p><strong>Informação:</strong> todo e qualquer conteúdo ou dado que tenha valor para alguma organização ou pessoa. Ela pode estar guardada para o uso restrito ou exposta ao público para consulta ou aquisição.</p>
              <p><strong>Informação Sensível:</strong> toda informação sigilosa que, se divulgada, pode resultar em danos e/ou, prejuízos de qualquer ordem, perda de vantagem, inclusive financeira, bem como impacto negativo para a PCART SOLUCOES EM PAGAMENTO LTDA.</p>
              <p><strong>Integridade:</strong> capacidade de garantir que a informação esteja mantida em seu estado original, conforme foi concebida, a fim de protegê-la contra alterações indevidas, intencionais ou acidentais na guarda ou transmissão.</p>
              <p><strong>Parceiros:</strong> Empresas, órgãos públicos e demais instituições que possuem contrato com a PCART SOLUCOES EM PAGAMENTO LTDA com objetivos em comum, unindo esforços em suas competências e expertises, sem que haja remuneração, mas apenas empenho de serviços por cada parte.</p>
              <p><strong>Peer to Peer:</strong> arquitetura de redes de computadores em que cada um dos pontos funciona como cliente e servidor possibilitando o compartilhamento de arquivos.</p>
              <p><strong>Segurança da Informação:</strong> preservação da confidencialidade, integridade e disponibilidade da informação.</p>
              <p><strong>Spam:</strong> e-mails não solicitados e normalmente enviados para um grande número de pessoas.</p>
              <p><strong>Usuário:</strong> todo funcionário, prestador de serviço, estagiário e afins que tenham acesso aos recursos tecnológicos oferecidos pela PCART SOLUCOES EM PAGAMENTO LTDA.</p>
              <p><strong>Vírus:</strong> programa malicioso que se propaga e infecta o computador.</p>
              <p><strong>Worm:</strong> programa semelhante ao vírus, que infecta o sistema, tendo como característica a autorreplicação.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">3. OBJETIVOS</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>Estabelecer diretrizes e normas que permitam aos funcionários, prestadores de serviços, estagiários e afins da PCART SOLUCOES EM PAGAMENTO LTDA seguir padrões de comportamento desejáveis e aceitáveis, de acordo com a legalidade e as boas práticas mundiais, a fim de mitigar riscos técnicos e jurídicos;</li>
              <li>Nortear a definição de procedimentos específicos de Segurança da Informação e a implementação de controles e processos para o atendimento de seus requisitos;</li>
              <li>Preservar a confidencialidade, a integridade e a disponibilidade das informações da PCART SOLUCOES EM PAGAMENTO LTDA;</li>
              <li>Prevenir possíveis incidentes e responsabilidade legal da instituição e de seus funcionários, prestadores de serviços, estagiários e afins;</li>
              <li>Garantir a normalidade e a continuidade das atividades da PCART SOLUCOES EM PAGAMENTO LTDA, protegendo os processos críticos contra falhas ou desastres significativos;</li>
              <li>Atender aos requisitos legais, regulamentares e contratuais pertinentes à atividade da PCART SOLUCOES EM PAGAMENTO LTDA;</li>
              <li>Minimizar os riscos de danos, perdas financeiras, participação no mercado, confiança de clientes e de parceiros ou qualquer outro impacto negativo nas atividades da PCART SOLUCOES EM PAGAMENTO LTDA resultante de uma falha de segurança;</li>
              <li>Assegurar o treinamento contínuo e atualizado das políticas e dos procedimentos de Segurança da Informação, enfatizando as obrigações das pessoas em relação à respectiva segurança;</li>
              <li>Garantir que todas as responsabilidades da Segurança da Informação sejam claramente definidas preservadas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">4. APLICAÇÃO DA POLÍTICA DE SEGURANÇA DA INFORMAÇÃO E CIBERNÉTICA</h2>
            <p className="mb-4">
              Todas as normas aqui estabelecidas devem ser aplicadas por toda a rede e seguidas por todos os funcionários, prestadores de serviços, estagiários e afins para a proteção da informação e para o uso de recursos tecnológicos.
            </p>
            <p>
              Esta PSI compromete e responsabiliza cada usuário a manter-se atualizado sobre este documento e as normas relacionadas, buscando orientação do gestor ou da Gerência de Tecnologia da Informação (GTI) sempre que não estiver absolutamente seguro quanto à aquisição e/ou ao descarte de informações.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">5. PRINCÍPIOS DA POLÍTICA DE SEGURANÇA DA INFORMAÇÃO E CIBERNÉTICA</h2>
            <p className="mb-4">
              Os equipamentos de informática, de comunicação, os sistemas e as informações devem ser utilizados para a realização de atividades profissionais, com senso de responsabilidade e preceitos éticos comuns à sociedade e dentro da legalidade.
            </p>
            <p className="mb-4">
              Respeitar a privacidade dos usuários, agindo de forma ética e atendendo aos princípios da Lei Geral de Proteção de Dados Pessoais.
            </p>
            <p>
              A PCART SOLUCOES EM PAGAMENTO LTDA reserva-se o direito de monitorar e registrar todo e qualquer uso das informações geradas, armazenadas ou veiculadas na instituição. Para tanto, são criados e implantados controles apropriados, trilhas de auditoria ou registros de atividades em todos os pontos e sistemas que a PCART SOLUCOES EM PAGAMENTO LTDA julgar necessário para reduzir os riscos, pautando-se na ética e na legalidade de forma a detalhar as ações na Norma de Monitoramento de Ativos.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">6. REQUISITOS DA POLÍTICA DE SEGURANÇA DA INFORMAÇÃO E CIBERNÉTICA</h2>
            <div className="space-y-4">
              <p>A PSI deve ser comunicada a todos os funcionários, prestadores de serviços, estagiários e afins visando à efetividade e à real cultura de uso ético e legal dos recursos tecnológicos, bem como a Segurança da Informação da PCART SOLUCOES EM PAGAMENTO LTDA.</p>
              <p>Sempre que uma parceria ou contratação de empresa terceirizada envolver acesso a informações e/ou recursos tecnológicos da PCART SOLUCOES EM PAGAMENTO LTDA, a gerência contratante deverá informar à GTI.</p>
              <p>A PSI e as Normas serão revisadas e atualizadas com periodicidade mínima de um ano ou sempre que houver um fato novo e relevante, conforme análise e decisão do Comitê Consultivo.</p>
              <p>Todos os contratos da PCART SOLUCOES EM PAGAMENTO LTDA devem constar o anexo ou a cláusula de confidencialidade para garantir o acesso aos ativos de informação.</p>
              <p>A responsabilidade em relação à Segurança da Informação deve ser atribuída na fase de contratação, de forma a ser incluída nos contratos e monitorada durante a sua vigência.</p>
              <p>Para funcionários, prestadores de serviços, estagiários e afins, contratados em período anterior à publicação desta política, e que não tenham assinado os respectivos documentos, deverá ser entregue um Termo de Ciência e Responsabilidade da PSI para a respectiva assinatura de forma física ou eletrônica.</p>
              <p>Todos os funcionários, prestadores de serviços, estagiários e afins que tenham acesso a informações da PCART SOLUCOES EM PAGAMENTO LTDA, devem passar por treinamento e conscientização sobre os procedimentos de segurança e o uso correto dos ativos oferecidos pela instituição. A finalidade é minimizar possíveis riscos de segurança, explicitar as responsabilidades e comunicar os procedimentos para a notificação de incidentes.</p>
              <p>Todos os requisitos de Segurança da Informação e os aspectos legais, incluindo a necessidade de planos de contingência, devem ser identificados na fase de levantamento de um projeto ou sistema. Também devem ser justificados, acordados, documentados, implementados e testados durante a fase de execução.</p>
              <p>Serão criados e implementados também controles apropriados e trilhas de auditoria ou registros de atividades em todos os pontos e sistemas que a PCART SOLUCOES EM PAGAMENTO LTDA julgar necessário para reduzir os riscos dos ativos de informação.</p>
              <p>Os ambientes de produção e de desenvolvimento tecnológico devem ser segregados e rigidamente controlados.</p>
              <p>Um plano de contingência e continuidade do negócio deverá ser implementado e testado anualmente. O objetivo é reduzir riscos de perda de confidencialidade, integridade e disponibilidade dos ativos de informação, por meio da combinação de ações de prevenção e recuperação.</p>
              <p>Os ativos críticos ou sensíveis devem ser mantidos em áreas seguras, protegidas por um perímetro de segurança definido, com barreiras de segurança apropriadas aos riscos identificados, além de ter o acesso controlado, registrado e monitorado.</p>
              <p>Todo ativo de informação deve ser protegido de divulgação, modificação, furto ou roubo por meio da aplicação de controles.</p>
              <p>Devem ser estabelecidas e comunicadas normas e responsabilidades pela propriedade e custódia dos ativos de informação. Bem como ser estabelecidos procedimentos e responsabilidades específicas para o uso e o gerenciamento dos ativos de informação oferecidos pela PCART SOLUCOES EM PAGAMENTO LTDA, quando estiverem fora das instalações da instituição.</p>
              <p>Todas as pessoas devem ser distintamente identificadas. Sejam visitantes, alunos, estagiários, parceiros, funcionários ou prestadores de serviços. Os dados coletados e armazenados devem ser segmentados a fim de que sejam aplicados controles especiais e sejam adequados às legislações pertinentes sobre a proteção de dados pessoais. Devem, ainda, ser estabelecidas regras para a coleta, o armazenamento e o tratamento de dados pessoais por meio de norma específica.</p>
              <p>O uso de dispositivos móveis, assim como comunicadores instantâneos devem ser devidamente regrados em normativos próprios, atendendo sempre aos princípios da privacidade, respeito ao usuário e à necessidade da coleta de autorização, quando aplicável, devendo ser informado na Política de Privacidade, informações sobre as condições de tratamento.</p>
              <p>Quando razões tecnológicas ou determinações superiores tornarem impossível a aplicação desta norma, ou ainda o uso apropriado de controles mínimos adequados à garantia da segurança dos ativos de informação, o responsável e/ou solicitante deverá documentá-las imediatamente à GTI. Dessa forma será possível adotar medidas alternativas para minimizar riscos, bem como organizar um plano de ação para corrigi-los, monitorá-los ou eliminá-los.</p>
              <p>A PCART SOLUCOES EM PAGAMENTO LTDA exonera-se de toda e qualquer responsabilidade decorrente do uso indevido, negligente e/ou imprudente dos recursos e serviços concedidos aos usuários. Reservando-se o direito de tomar as medidas administrativas e judiciais cabíveis contra os infratores, bem como analisar dados e evidências para a obtenção de provas a serem usadas em processos investigatórios e judiciais.</p>
              <p>Esta atualização da PSI será implementada na PCART SOLUCOES EM PAGAMENTO LTDA por meio de procedimentos específicos e obrigatórios a todos os funcionários, prestadores de serviços, estagiários e afins, independentemente do nível hierárquico ou função na instituição.</p>
              <p>Todo incidente que afete a Segurança da Informação deverá ser comunicado inicialmente à GTI, que, se julgar necessário, deverá encaminhar posteriormente ao Comitê de Segurança da Informação para análise.</p>
              <p>Toda e qualquer atividade que não estejam tratadas nesta política ou normativos específicos, devem ser realizados apenas após consulta e autorização do gestor da área.</p>
              <p>O não cumprimento dos requisitos previstos nesta PSI e nas Normas de Segurança da Informação acarretará violação às regras internas da instituição, e o usuário estará sujeito a medidas administrativas e legais cabíveis.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">7. MONITORAMENTO E AUDITORIA</h2>
            <div className="space-y-4">
              <p>Para garantir as regras mencionadas nesta PSI, bem como para fins de segurança e prevenção à fraude a PCART SOLUCOES EM PAGAMENTO LTDA reserva-se o direito de:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Implantar sistemas de monitoramento de acesso às estações de trabalho, servidores internos e externos, correio eletrônico, navegação, internet, dispositivos móveis ou wireless, entre outros componentes da rede. A informação gerada por esses sistemas de monitoramento poderá ser usada para identificar usuários e respectivos acessos efetuados;</li>
                <li>Inspecionar qualquer arquivo que esteja em rede, no disco local da estação ou em qualquer outro ambiente para assegurar o rígido cumprimento desta PSI;</li>
                <li>Instalar sistemas de proteção e detecção de invasão para garantir a segurança das informações e dos perímetros de acesso;</li>
                <li>Instalar câmeras em suas dependências.</li>
              </ul>
              <p>Os funcionários, prestadores de serviços, estagiários e afins tomam ciência de que ambientes, recursos tecnológicos, telefones, sistemas, computadores, dispositivos móveis e redes da instituição estão sujeitos a monitoramento e a gravação, atendendo à conformidade legal.</p>
              <p>O uso de dispositivos móveis pessoais, deverá ser objeto de norma própria, no entanto, o colaborador ou prestador de serviços tomam ciência, neste ato, de que ao aceitar ou optar pelo uso de dispositivos pessoais para fins corporativos, a PCART SOLUCOES EM PAGAMENTO LTDA poderá auditar e inspecionar os recursos de TIC (Tecnologia de Informação e Comunicação) que estiverem em suas dependências ou que interajam com seus ambientes lógicos, sempre que considerar necessário, atentando-se à não discriminação e à proporcionalidade devida, respeitando a razoabilidade e privacidade.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">8. RESPONSABILIDADES ESPECÍFICAS</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">8.1. Dos Usuários em geral</h3>
                <p className="mb-4">Funcionários, prestadores de serviços, estagiários e afins da PCART SOLUCOES EM PAGAMENTO LTDA, em qualquer nível hierárquico, na sua esfera de competência, serão responsáveis por cumprir e zelar pela materialização e realização eficaz das normas e princípios da segurança da informação. Em atenção especial ao compromisso com os critérios legais e éticos que envolvam a instituição.</p>
                <p className="mb-4">É de inteira responsabilidade do usuário qualquer prejuízo ou dano sofrido ou causado a PCART SOLUCOES EM PAGAMENTO LTDA e/ou a terceiros, em decorrência da não obediência às diretrizes e às normas aqui referidas.</p>
                <p className="mb-4">É também de responsabilidade do profissional o uso de senha segura, devendo alterá-la conforme periodicidade determinada pela PCART SOLUCOES EM PAGAMENTO LTDA.</p>
                <p className="mb-4 font-bold text-foreground dark:text-white">Cabe a todos os usuários as seguintes práticas:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cumprir fielmente políticas, normas e procedimentos de Segurança da Informação, incluindo regras estabelecidas neste documento;</li>
                  <li>Buscar orientação do superior quando houver dúvidas relacionadas à Segurança da Informação;</li>
                  <li>Assinar o Termo de Responsabilidade, formalizando a ciência da PSI e das Normas de Segurança da Informação, bem como assumindo a responsabilidade pelo seu cumprimento;</li>
                  <li>Proteger as informações contra o acesso, a modificação, a divulgação ou a destruição não autorizada pela PCART SOLUCOES EM PAGAMENTO LTDA;</li>
                  <li>Assegurar que os recursos tecnológicos sejam utilizados apenas para fins profissionais aprovados e de interesse da instituição;</li>
                  <li>Prezar pela segurança das informações confidenciais, incluindo todo e quaisquer dados pessoais a que tiverem acesso;</li>
                  <li>Atender à Lei Geral de Proteção de Dados Pessoais, protegendo os dados a que tiver acesso ou que venha a manuseá-los, sempre em conformidade às regras da PCART SOLUCOES EM PAGAMENTO LTDA.</li>
                  <li>Comunicar imediatamente à GTI sobre qualquer descumprimento ou violação da PSI e/ou de suas Normas e Procedimentos; à GEP, quando se tratar de infrações administrativas causadas por funcionários, prestadores de serviços, estagiários e afins; além de outras áreas, quando for necessário.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">8.2 Dos Gestores/Gerentes</h3>
                <p className="mb-4 font-bold text-foreground dark:text-white">Cabe a todo gestor de área:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Garantir a implementação de mecanismos necessários para o descarte seguro das informações;</li>
                  <li>Manter postura em relação à Segurança da Informação e servir de modelo de conduta para os funcionários, prestadores de serviços, estagiários e afins sob a sua gestão;</li>
                  <li>Cumprir esta política, as normas e os procedimentos de Segurança da Informação;</li>
                  <li>Garantir acesso e conhecimento a esta política, bem como as normas e os procedimentos aqui estabelecidos;</li>
                  <li>Inserir em contratos com prestadores de serviços, clientes, terceirizados e parceiros, quando estes necessitarem ter contato com informações da PCART SOLUCOES EM PAGAMENTO LTDA, cláusula de responsabilidade, de Proteção de Dados Pessoais, de ciência da PSI e de confidencialidade, exigindo o repasse das obrigações a seus próprios empregados e colaboradores.</li>
                  <li>Solicitar previamente a permissão de acesso à GTI elencando os ativos de informação que serão oferecidos a terceiros;</li>
                  <li>Adaptar as normas, processos, procedimentos e sistemas sob sua responsabilidade para atender à PSI;</li>
                  <li>Observar e zelar pela aplicação das regras e legislação de Proteção de Dados Pessoais;</li>
                  <li>Comunicar imediatamente à GTI toda e qualquer violação de Segurança da Informação, incluindo violação de dados pessoais, que deverá informar à GEP a ocorrência de infrações provenientes de funcionários, bem como informar as demais áreas quando houver necessidades específicas.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">8.3. Dos Proprietários de Ativos de Informação</h3>
                <p className="mb-4">O proprietário da informação pode ser um gerente ou coordenador de uma determinada área ou projeto, e será o responsável pela manutenção, revisão e cancelamento de autorização à determinada informação ou conjunto de informações pertencentes a PCART SOLUCOES EM PAGAMENTO LTDA ou sob a sua guarda.</p>
                <p className="mb-4 font-bold text-foreground dark:text-white">Cabe ao proprietário da informação:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Elaborar, para toda informação sob a sua responsabilidade, matriz que relaciona cargos e funções da PCART SOLUCOES EM PAGAMENTO LTDA às autorizações de acesso concedidas;</li>
                  <li>Manter registro e controle atualizados de todas as autorizações de acessos concedidas determinando, sempre que necessário, a pronta suspensão do acesso ou a alteração da autorização concedida;</li>
                  <li>Reavaliar as autorizações de acesso, sempre que necessário ou solicitado, cancelando aquelas que não se fizerem mais necessárias;</li>
                  <li>Observar e zelar pela aplicação das regras e legislação de Proteção de Dados Pessoais;</li>
                  <li>Participar, sempre que convocado, das reuniões do Comitê de Segurança da Informação prestando esclarecimentos quando solicitado.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">8.4. Da Gerência de Tecnologia da Informação</h3>
                <p className="mb-4">A Gerência de Tecnologia da Informação (GTI) será responsável pela gestão do uso de tecnologias necessárias ao bom andamento dos negócios da PCART SOLUCOES EM PAGAMENTO LTDA e de ações preventivas.</p>
                <p className="mb-4">Também oficializou uma equipe de Segurança da Informação para o planejamento e execução de ações preventivas para o tratamento de incidentes, a fim de garantir um nível maior de segurança.</p>
                <p className="mb-4 font-bold text-foreground dark:text-white">Cabe à GTI:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Apresentar as atualizações da PSI e das Normas de Segurança da Informação ao Comitê de Segurança da Informação para aprovação e posterior publicação;</li>
                  <li>Propor as metodologias e processos específicos para a Segurança da Informação, como a avaliação de risco;</li>
                  <li>Propor e apoiar iniciativas que visem à segurança dos ativos de informação da PCART SOLUCOES EM PAGAMENTO LTDA;</li>
                  <li>Promover com a GEP, a GMS e a GCR a conscientização dos funcionários, prestadores de serviços, estagiários e afins quanto à relevância da Segurança da Informação para as atividades da PCART SOLUCOES EM PAGAMENTO LTDA por meio de campanhas, palestras, treinamentos, entre outros meios;</li>
                  <li>Apoiar a avaliação e a adequação dos controles específicos da Segurança da Informação para novos sistemas ou serviços;</li>
                  <li>Desenvolver normas e regras específicas conforme à Lei de Proteção de Dados Pessoais;</li>
                  <li>Promover adequação dos recursos técnicos e de infraestrutura necessários para atender à Lei de Proteção de Dados Pessoais;</li>
                  <li>Indicar o encarregado pela Proteção de Dados Pessoais;</li>
                  <li>Analisar criticamente incidentes com o Comitê Consultivo;</li>
                  <li>Manter a comunicação efetiva com o Comitê Consultivo para mantê-lo informado sobre assuntos relacionados ao tema e que afetem ou tenham potencial para afetar a PCART SOLUCOES EM PAGAMENTO LTDA;</li>
                  <li>Outras responsabilidades a serem formalizadas em norma específica.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">8.5. Do Comitê Consultivo</h3>
                <p className="mb-4">O Comitê Consultivo deve ter um perfil multidisciplinar e contar com a participação de gestores de diferentes áreas da PCART SOLUCOES EM PAGAMENTO LTDA. Deve ser formado por um representante das principais instâncias da instituição, Entre elas a própria GTI.</p>
                <p className="mb-4">Pode, ainda, utilizar especialistas internos ou externos para apoiarem nos assuntos que exijam conhecimento técnico específico.</p>
                <p className="mb-4">O Comitê Consultivo deve reunir-se formalmente, no mínimo, uma vez a cada seis meses. Reuniões adicionais devem ser realizadas sempre que for necessário deliberar algum incidente grave ou definição relevante para a PCART SOLUCOES EM PAGAMENTO LTDA.</p>
                <p className="mb-4 font-bold text-foreground dark:text-white">São atribuições do Comitê Consultivo:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Propor investimentos relacionados à Segurança da Informação com o objetivo de maximizar a redução de riscos;</li>
                  <li>Propor alterações nas versões da PSI e a inclusão, eliminação ou alteração de normas complementares;</li>
                  <li>Discutir e propor iniciativas para aprimorar, melhorar e dar continuidade à segurança das informações;</li>
                  <li>Avaliar os incidentes de segurança e propor ações corretivas;</li>
                  <li>Discutir e propor medidas cabíveis no processo disciplinar para os casos de descumprimento da PSI e/ou das Normas de Segurança da Informação complementares.</li>
                  <li>Deliberar sobre questões relacionadas à Proteção de Dados Pessoais.</li>
                </ul>
                <p className="mt-4 text-sm italic">As atas e os resumos das reuniões do Comitê Consultivo ficarão sob a responsabilidade da GTI.</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">8.6. Da Assessoria Jurídica</h3>
                <p className="mb-4">A PCART SOLUCOES EM PAGAMENTO LTDA, quando solicitado pela GTI, contará com apoio jurídico da Assessoria para análise, parecer e estudo de casos.</p>
                <p className="mb-4">Para questões voltadas à tecnologia, como a Segurança da Informação, contratos de tecnologia, Proteção de Dados Pessoais, entre outros assuntos, a PCART SOLUCOES EM PAGAMENTO LTDA terá o apoio de um escritório terceirizado ou profissional de Direito especializado em direito digital, que terá as seguintes funções:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Dar apoio, respaldo e embasamento legal para ações voltadas à Segurança da Informação, à exposição na mídia, ao uso dos recursos tecnológicos e à proteção de dados pessoais;</li>
                  <li>Acompanhar incidentes;</li>
                  <li>Orientar a melhor forma de coletar e preservar uma prova eletrônica, com o propósito de manter sua eficácia para o uso em juízo, quando necessário;</li>
                  <li>Elaborar e revisar documentos jurídicos relacionados a contratos de tecnologia e Segurança da Informação;</li>
                  <li>Acompanhar o processo disciplinar, validando as sanções e exceções, quando houver;</li>
                  <li>Revisar periodicamente e sugerir adaptações a esta Política e a normas de Segurança da Informação, de acordo com as necessidades e o perfil de incidentes causados ao longo do tempo;</li>
                  <li>Analisar e adequar toda e qualquer regulamentação interna a fim de que esteja alinhada à Constituição Federal, ao Código Civil, ao Marco Civil da Internet e, à Lei Anticorrupção e à Lei de Geral de Proteção de Dados Pessoais;</li>
                  <li>Analisar e promover o compliance a projetos de leis, quando aprovado, e que impactem no negócio da PCART SOLUCOES EM PAGAMENTO LTDA e no uso dos recursos tecnológicos e da legislação pertinente a sua área de atuação;</li>
                  <li>Atender e propor demandas judiciais.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">8.7. Da Gerência de Pessoal</h3>
                <p className="mb-4 font-bold text-foreground dark:text-white">Cabe à Gerência de Pessoal (GEP):</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Atribuir, na fase de contratação dos funcionários, prestadores de serviços, estagiários e afins, e formalizar nos contratos individuais de trabalho, a responsabilidade quanto ao cumprimento da PSI e sua responsabilidade para com a Proteção de Dados Pessoais;</li>
                  <li>Colher e arquivar a assinatura do Termo de Responsabilidade e ciência da Política e Normas de Segurança da Informação dos profissionais já contratados;</li>
                  <li>Comunicar formalmente e imediatamente à GTI toda e qualquer alteração no quadro funcional da instituição, contratações, demissões, alterações de cargos, funções, entre outros, no prazo mínimo de 24 horas, e de imediato em casos específicos, a fim de evitar acessos não autorizados e/ou desnecessários;</li>
                  <li>Receber da GTI informações sobre violações da Política e Normas e promover as tratativas e a instauração de processo disciplinar, quando cabível;</li>
                  <li>Apoiar e promover com a GTI ações de conscientização e de capacitação em Segurança da Informação e Proteção de Dados Pessoais para todos os profissionais da PCART SOLUCOES EM PAGAMENTO LTDA;</li>
                  <li>Zelar e promover a devida proteção de dados pessoais, em conformidade com as normas internas e legislação pertinentes.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">9. DA PROTEÇÃO DE DADOS PESSOAIS</h2>
            <div className="space-y-4">
              <p>A PCART SOLUCOES EM PAGAMENTO LTDA em atendimento e respeito à Lei Geral de Proteção de Dados Pessoais deverá garantir a disponibilidade, integridade e confidencialidade dos dados pessoais, em todo seu ciclo de vida, sendo esta categoria de dados tratados de forma permanente como dados confidenciais.</p>
              <p>Todo tratamento de dados pessoais deverá estar atrelado a uma finalidade específica, informada ao titular e devidamente atrelada a uma ou mais bases legais previstas nos artigos 7º e 11º da Lei Geral de Proteção de Dados Pessoais, atentandose aos princípios da necessidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação e prestação de contas.</p>
              <p>O detalhamento dos requisitos e regras para tratamento de dados pessoais serão disponibilizados em norma específica, sendo necessário que todos os colaboradores e prestadores de serviços tomem ciência e sejam sensibilizados sobre o tema e a respectiva norma.</p>
              <p>Toda e qualquer alteração ou criação de sistemas, serviços ou produtos que envolvam tratamento de dados pessoais deverão aplicar o “Privacy by Design / Privacidade desde a concepção”.</p>
              <p>Além dos princípios mencionados a PCART SOLUCOES EM PAGAMENTO LTDA deverá elaborar um plano de response à violação de dados pessoais, elaborar o Relatório de Impacto sempre que necessário, utilizar processo de anonimização e pseudonimização sempre que necessário, fazer registro das operações de tratamento de dados pessoais, utilizar protocolos de criptografia na transmissão e armazenamento de dados pessoais, bem como implementar um sistema de gestão de dados pessoais.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">10. DAS DISPOSIÇÕES FINAIS</h2>
            <div className="space-y-4">
              <p>As infrações a esta PSI e às Normas de Segurança da Informação serão passíveis de processo disciplinar, podendo resultar de mera advertência até demissão por justa causa.</p>
              <p>A qualquer tempo, e em qualquer um dos casos previstos, prevalecendo o descumprimento das regras expostas, a GTI poderá bloquear temporariamente o acesso do usuário e comunicar os motivos ao profissional e ao gestor da área.</p>
              <p>O uso de qualquer recurso da PCART SOLUCOES EM PAGAMENTO LTDA para atividades ilegais é motivo de demissão por justa causa e a instituição vai cooperar ativamente com as autoridades.</p>
              <p>A PSI da PCART SOLUCOES EM PAGAMENTO LTDA será complementada por Normas de Segurança da Informação que tratem assuntos relacionados ao uso de correio eletrônico, rede corporativa, internet, Proteção de Dados Pessoais, entre outros. E serão consideradas partes integrantes desta PSI.</p>
              <p>Esta PSI e as Normas de Segurança da Informação estarão disponíveis em documentos internos, em local de fácil localização e acesso restrito.</p>
              <p>Normas específicas relacionadas a questões técnicas e confidenciais, e que requeiram acesso por equipes e pessoas específicas, devem ser colocadas à disposição apenas a pessoas autorizadas. Assim como a ética, a segurança deve ser entendida como parte fundamental da cultura interna da PCART SOLUCOES EM PAGAMENTO LTDA.</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
