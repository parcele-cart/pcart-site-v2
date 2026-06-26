import { InstitutionalHeader } from "@/components/sections/institutional-header";
import { ombudsmanEmail } from "@/lib/email";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Código de Ética — ParceleCart",
  description: "Leia o nosso código de ética e conduta da ParceleCart.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CodeOfEthicsPage() {
  return (
    <main className="min-h-screen">
      <InstitutionalHeader 
        title="Código de Ética" 
        subtitle="INSTITUCIONAL PARCELECART"
        lastUpdated="14 de dezembro de 2023"
      />
      
      <div className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px] py-12">
        <div className="w-full text-foreground/90 dark:text-gray-300 space-y-12 leading-relaxed text-base sm:text-lg text-justify mx-auto lg:max-w-5xl">
          
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">Capítulo I – Da Aplicabilidade</h2>
            <div className="space-y-4">
              <p><strong>Art. 1º</strong> Aplica-se o disposto neste Código de Ética a todos os integrantes, fixos e temporários, da empresa PCART SOLUCOES EM PAGAMENTO S.A., independentemente do papel exercido, bem como a terceiros que interagem com as empresas integrantes da PCART SOLUCOES EM PAGAMENTO S.A. e que estejam sujeitas aos termos deste Código de Ética por força contratual.</p>
              <p><strong>Art. 2º</strong> Conforme estabelecido no Artigo 1º, o Código de Ética se aplica aos colaboradores da PCART SOLUCOES EM PAGAMENTO S.A. em quaisquer situações que envolvam e/ou impactem outras pessoas da PCART SOLUCOES EM PAGAMENTO S.A. como clientes, fornecedores, prestadores de serviço e parceiros.</p>
              <p><strong>Art. 3º</strong> Para fins deste Código de Ética, considera-se:</p>
              <p>I – Colaboradores e terceiros: todas as pessoas que assumem papéis dentro da Instituição PCART SOLUCOES EM PAGAMENTO S.A.;</p>
              <p><strong>Parágrafo único:</strong> Para todos os efeitos, os termos deste Código de Ética, bem como as políticas a ele relacionadas, serão aplicadas para toda e qualquer pessoa relacionada a PCART SOLUCOES EM PAGAMENTO S.A., nos termos do Artigo 1º.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">Capítulo II – Das vedações</h2>
            <div className="space-y-4">
              <p><strong>Art. 4º</strong> Deve-se avaliar, cuidadosamente, situações que possam caracterizar conduta não aceitável do ponto de vista ético a PCART SOLUCOES EM PAGAMENTO S.A., sendo vedadas especialmente as seguintes condutas:</p>
              <ul className="list-none space-y-4 pl-0">
                <li>I. Omitir ou compactuar com casos de não conformidade com este Código de Ética e/ou com as Políticas a ele relacionadas;</li>
                <li>II. Financiar, custear, patrocinar ou agir de qualquer modo a subvencionar a prática dos atos ilícitos previstos na legislação brasileira e, para o caso de atuação em projetos e/ou residência em outros países, na legislação local.</li>
                <li>III. Tratar de forma desigual ou injusta, seja por interesse pessoal ou de terceiros, qualquer das partes interessadas em função de etnia, gênero, identidade de gênero, orientação sexual, crença, origem, classe social, idade, aparência física, diferenças culturais, pessoas com deficiências ou enfermidades (independentemente de manifestação fenotípica), orientação política ou quaisquer outras formas de discriminação;</li>
                <li>IV. Ofensas, difamação, exploração de qualquer natureza, repressão, intimidação, assédio moral, assédio sexual, preconceito, violência verbal ou não verbal, ou favorecimento nas relações profissionais;</li>
                <li>V. Receber ou fazer pagamentos cuja origem ou destino ferem aos preceitos deste Código e/ou à legislação local, com especial destaque para a Lei Anticorrupção (Lei no 12.846/2013);</li>
                <li>VI. Solicitar, sugerir ou receber vantagens pessoais em nome da PCART SOLUCOES EM PAGAMENTO S.A, sem que haja contrapartidas aos mesmos, atentando-se ao disposto nas Políticas relacionadas a este Código de Ética;</li>
                <li>VII. Fazer uso de informações privilegiadas, obtidas no exercício profissional, em benefício próprio ou de terceiros, bem como não zelar pelo sigilo das informações confidenciais.</li>
              </ul>
              <p><strong>Art. 5º</strong> Deve-se levar em consideração que as condutas descritas acima são exemplificativas, de modo que, além delas, todas as pessoas sujeitas ao presente Código de Ética deverão respeitar e zelar pelas leis e sistemas legais de todos os locais em que a PCART SOLUCOES EM PAGAMENTO S.A. atua e com as políticas aplicáveis a ele, bem como com eventuais acordos celebrados no âmbito da empresa.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">Capítulo III – Do relacionamento</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">Seção I - Com Colaboradores:</h3>
                <div className="space-y-4">
                  <p><strong>Art. 6º</strong> A PCART SOLUCOES EM PAGAMENTO S.A. deve promover o recrutamento, seleção e desenvolvimento dos Colaboradores de forma a dar oportunidade aos interessados participarem de um processo imparcial, sem discriminação de qualquer natureza.</p>
                  <p><strong>Art. 7°</strong> Ao vivenciar ou tomar conhecimento de qualquer ação não alinhada ao acordado no presente Código de Ética, todo Colaborador tem o dever de comunicá-lo por meio do espaço do Canal de Denúncias, resguardando o sigilo e a Política de Não-Retaliação.</p>
                  <p>§1º O Canal de Denúncia deve ser acessível a todos e amplamente divulgado, garantindo o sigilo e o anonimato.</p>
                  <p>§2º Detectada qualquer irregularidade, deverão haver procedimentos que assegurem a pronta interrupção e a tempestiva remediação dos danos gerados.</p>
                  <p>§3º Os relatórios e pareceres elaborados pelo Comitê de Integridade serão encaminhados ao Conselho de Administração para as providências adequadas.</p>
                  <p><strong>Art. 8º</strong> Os Colaboradores devem construir uma postura profissional ética, responder pelos atos de sua responsabilidade e agir cooperativamente.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground dark:text-white mb-4">Seção II - Com Entidades (Parceiros, Fornecedores, Clientes, Órgãos Públicos):</h3>
                <div className="space-y-4">
                  <p><strong>Art. 9º</strong> O relacionamento deve ser baseado em critérios técnicos e profissionais, sem qualquer tipo de discriminação.</p>
                  <p><strong>Art. 10.</strong> Atividades exercidas em regime de livre e leal concorrência, zelando pela imagem e integridade da categoria.</p>
                  <p><strong>Art. 11.</strong> Atividades alinhadas com a legislação específica, acordos e convenções aplicáveis.</p>
                  <p><strong>Art. 12.</strong> Cumprimento rigoroso dos contratos celebrados e respeito às leis e regulamentações vigentes.</p>
                  <p><strong>Art. 13.</strong> Relação transparente com clientes, buscando o melhor desempenho e satisfação.</p>
                  <p><strong>Art. 14.</strong> Registros contábeis precisos e controles internos que assegurem a confiabilidade dos relatórios financeiros.</p>
                  <p><strong>Art. 15.</strong> Atuação leal, vedando o oferecimento ou aceitação de benefícios indevidos ou qualquer forma de suborno a funcionários públicos ou membros de outras instituições.</p>
                  <p>§1º Proibição de oferecer vantagens diretas ou indiretas a terceiros visando influenciar ações oficiais.</p>
                  <p>§2º Proibição do uso da função para obter promessas de benefícios pessoais, exceto presentes ocasionais de valor simbólico ou cortesia de valor razoável.</p>
                  <p><strong>Art. 16.</strong> Observância dos princípios estabelecidos em declarações e convenções internacionais de direitos humanos, trabalho e combate à corrupção (ONU, OIT, OCDE).</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">Capítulo IV – Do Canal de Denúncias</h2>
            <div className="space-y-4">
              <p><strong>Art. 17.</strong> O Comitê de Integridade é o órgão competente para avaliar infrações e elaborar relatórios consultivos ao Conselho de Administração.</p>
              <p>§1º Um representante de gestão de pessoas integrará o comitê para disseminação do conteúdo e treinamentos.</p>
              <p><strong>Art. 18.</strong> Notificações sobre infrações devem ser enviadas para: <strong className="text-foreground dark:text-white">{ombudsmanEmail.upper}</strong>.</p>
              <p>§4º O processo mantém queixas e denúncias de forma anônima e confidencial.</p>
              <p>§6º Não se vislumbra qualquer possibilidade de retaliação ou penalidade a quem realizar denúncia de boa-fé.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">Capítulo V - Dos Critérios e das Sanções</h2>
            <div className="space-y-4">
              <p><strong>Art. 19.</strong> Infrações avaliadas segundo gravidade, reincidência, vantagem auferida, grau de lesão e cooperação do infrator.</p>
              <p><strong>Art. 20.</strong> Sanções disciplinares consistem em: Advertência, Reparação do dano, Afastamento/Suspensão e Desligamento/Encerramento do vínculo contratual.</p>
              <p>§2º É garantido o direito à ampla defesa e recurso ao Conselho de Administração.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-green mb-6">Capítulo VI – Das Disposições Finais</h2>
            <div className="space-y-4">
              <p><strong>Art. 21.</strong> Revogam-se as disposições em contrário.</p>
              <p><strong>Art. 22.</strong> O Código entra em vigor na data de publicação, com ampla divulgação interna.</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
