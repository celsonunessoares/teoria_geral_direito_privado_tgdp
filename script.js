
        /* ==========================================================================
       QUESTION DATABASE (100 Scenario-based Questions following FGV standards)
       Topics Covered:
       - Meios de Resolução de Conflitos (Autotutela, Autocomposição, Heterocomposição)
       - Direito Público vs Privado e Autonomia Privada
       - LINDB: Vacatio legis, Vigência, Lei Nova, Correção do Texto Legal
       - LINDB: Ab-rogação x Derrogação
       - LINDB: Repristinação (Art. 2º, §3º)
       - LINDB: Obrigatoriedade da Lei (Art. 3º)
       - LINDB: Lacunas e Aplicação da Norma (Arts. 4º e 5º)
       - LINDB: Ato Jurídico Perfeito, Direito Adquirido e Coisa Julgada (Art. 6º)
       - LINDB: Prova de Fatos e Leis Estrangeiras (Arts. 13 e 14)
       - LINDB: Sentença Estrangeira e Homologação pelo STJ (Art. 15)
       ========================================================================== */

        const questionsData = [
            // --- MEIOS DE RESOLUÇÃO DE CONFLITOS (1-12) ---
            {
                id: 1,
                topic: "Meios de Conflito",
                difficulty: "Médio",
                text: "Mário e Roberto celebraram contrato de compra e venda de imóvel com cláusula compromissória estipulando que eventuais conflitos seriam resolvidos por um tribunal arbitral. Surgido um litígio, Roberto recusou-se a dialogar e Mário acionou o árbitro indicado. Considerando as formas de resolução de conflitos, a arbitragem é classificada juridicamente como:",
                options: [
                    "Autotutela, pois as partes estipularam a solução contratualmente.",
                    "Autocomposição, pois exige o consentimento prévio de ambos os contratantes.",
                    "Heterocomposição, pois o conflito é decidido vinculativamente por um terceiro.",
                    "Autotutela jurisdicional, por dispensar a intervenção do Poder Judiciário estatal."
                ],
                correct: 2,
                explanation: "A arbitragem é forma de heterocomposição: as partes submetem o conflito à decisão vinculante de um terceiro imparcial, o árbitro. Diferentemente da autocomposição, a solução não é construída por consenso durante o litígio; tampouco há imposição unilateral própria da autotutela."
            },
            {
                id: 2,
                topic: "Meios de Conflito",
                difficulty: "Médio",
                text: "Um fazendeiro, ao perceber que vizinhos invadiram sua propriedade durante a madrugada para abrir uma trilha não autorizada, utiliza moderadamente a força de seus funcionários para repelir imediatamente os invasores no exato momento da agressão. Nos termos do ordenamento civil brasileiro, a conduta do fazendeiro configura:",
                options: [
                    "Autotutela legítima, admitida de forma excepcional pela lei sob a forma de desforço imediato.",
                    "Heterocomposição privada, autorizada por se tratar de direito real de propriedade indisponível.",
                    "Autocomposição forçada, válida pelo fato de a reação ter ocorrido sem excesso de força física.",
                    "Ato ilícito indisponível, uma vez que a autotutela é vedada de forma absoluta no Direito brasileiro."
                ],
                correct: 0,
                explanation: "O art. 1.210, § 1º, do Código Civil admite, em caráter excepcional, a defesa imediata da posse e o desforço, desde que o possuidor aja logo e sem exceder o indispensável. Como a reação descrita é imediata e moderada, enquadra-se nessa hipótese legal."
            },
            {
                id: 3,
                topic: "Meios de Conflito",
                difficulty: "Difícil",
                text: "Ana e Carlos estão em litígio sobre a divisão de bens em uma dissolução de sociedade conjugal. O magistrado encaminhou o processo ao Centro Judiciário de Solução de Conflitos (CEJUSC). Durante as sessões, o facilitador não proferiu decisões vinculantes nem propôs soluções, limitando-se a restabelecer a comunicação entre as partes para que elas criassem o próprio acordo. Essa atividade configura:",
                options: [
                    "Conciliação, pois o terceiro sugere soluções práticas para a controvérsia patrimonial.",
                    "Mediação, pois o facilitador auxilia a restabelecer a comunicação sem impor ou propor soluções.",
                    "Arbitragem estatal, ante a ausência de poder decisório impositivo do mediador judicial.",
                    "Heterocomposição guiada, tendo em vista a condução do procedimento por agente público do Poder Judiciário."
                ],
                correct: 1,
                explanation: "A situação caracteriza mediação: o mediador facilita a comunicação para que as próprias partes formulem uma solução, sem decidir o conflito nem propor diretamente seus termos. Na conciliação, por sua vez, o conciliador pode sugerir alternativas."
            },
            {
                id: 4,
                topic: "Meios de Conflito",
                difficulty: "Médio",
                text: "Sobre as diferenças estruturais entre autocomposição e heterocomposição na Teoria Geral do Direito Privado, assinale a afirmativa correta:",
                options: [
                    "Na autocomposição, a decisão vinculante deriva obrigatoriamente da sentença proferida por juiz de Direito.",
                    "Na heterocomposição, a solução final depende do consenso absoluto alcançado voluntariamente entre os litigantes.",
                    "A principal diferença reside no fato de que na autocomposição as partes constroem a solução, enquanto na heterocomposição um terceiro decide.",
                    "A arbitragem é espécie de autocomposição, ao passo que a mediação judicial integra a heterocomposição impositiva."
                ],
                correct: 2,
                explanation: "Na autocomposição, a solução depende da manifestação de vontade das partes, como na negociação, na conciliação e na mediação. Na heterocomposição, jurisdição ou arbitragem, um terceiro decide o conflito de modo vinculante; por isso, a alternativa que atribui a decisão às partes na autocomposição é a correta."
            },
            {
                id: 5,
                topic: "Meios de Conflito",
                difficulty: "Difícil",
                text: "Determinado credor de obrigação de pagar quantia certa, diante do inadimplemento do devedor, retém por conta própria veículo de propriedade do devedor sem autorização judicial ou previsão contratual expressa, visando forçar o pagamento. Sob a ótica jurídica dos meios de resolução de litígios, tal atitude representa:",
                options: [
                    "Exercício regular do direito de autotutela, plenamente franqueado ao credor garantido.",
                    "Autocomposição coercitiva, haja vista a legitimidade da satisfação do crédito vencido.",
                    "Autotutela arbitrária e ilícita, caracterizando eventual exercício arbitrário das próprias razões.",
                    "Heterocomposição extrajudicial permitida subsidiariamente pelo Código Civil brasileiro."
                ],
                correct: 2,
                explanation: "A autotutela somente é admitida nas hipóteses excepcionais previstas em lei. A retenção unilateral do veículo, sem autorização ou fundamento legal, não se enquadra nessas hipóteses e não pode ser justificada como meio privado de cobrança."
            },
            {
                id: 6,
                topic: "Meios de Conflito",
                difficulty: "Médio",
                text: "Dois empresários do setor de logística controvertem sobre o descumprimento de cláusula contratual. Sem intermédio de advogados, juízes ou terceiros mediadores, realizam reuniões diretas e assinam um termo de transação prevendo concessões mútuas. O meio de resolução de conflitos utilizado foi:",
                options: [
                    "Negociação direta, modalidade de autocomposição.",
                    "Conciliação extrajudicial, modalidade de heterocomposição.",
                    "Arbitragem informal, espécie de autotutela homologada.",
                    "Jurisdição voluntária, modalidade de autocomposição estatal."
                ],
                correct: 0,
                explanation: "A negociação direta é autocomposição porque são as próprias partes que, sem decisão de terceiro, discutem e eventualmente ajustam a solução do conflito."
            },
            {
                id: 7,
                topic: "Meios de Conflito",
                difficulty: "Difícil",
                text: "Empresa multinacional e concessionária pública convencionam submeter divergências contratuais à arbitragem nos termos da Lei nº 9.307/1996. Proferida a sentença arbitral que condenou a concessionária, esta pretende recorrer ao Poder Judiciário sob a alegação de que apenas a jurisdição estatal compõe a heterocomposição vinculante. Segundo o ordenamento jurídico, a alegação da concessionária está:",
                options: [
                    "Correta, pois a arbitragem produz parecer meramente opinativo que necessita de homologação prévia pelo TJ.",
                    "Incorreta, pois a sentença arbitral produz os mesmos efeitos da sentença judicial, sendo espécie de heterocomposição.",
                    "Correta, visto que a arbitragem enquadra-se como autocomposição e pode ser rescindida unilateralmente.",
                    "Incorreta, porque a arbitragem constitui forma de autotutela homologada obrigatoriamente pelo STF."
                ],
                correct: 1,
                explanation: "Nos termos do art. 31 da Lei nº 9.307/1996, a sentença arbitral produz entre as partes e seus sucessores os efeitos da sentença judicial e, quando condenatória, constitui título executivo. A decisão é proferida pelo árbitro, o que caracteriza heterocomposição privada."
            },
            {
                id: 8,
                topic: "Meios de Conflito",
                difficulty: "Médio",
                text: "Considere as seguintes assertivas sobre os meios de resolução de conflitos:\nI. A autotutela é a regra geral no direito privado moderno.\nII. A conciliação e a mediação são institutos pertencentes à autocomposição.\nIII. A jurisdição estatal é uma forma heterocompositiva de solução de controvérsias.\nEstá correto o que se afirma em:",
                options: [
                    "I e II, apenas.",
                    "II e III, apenas.",
                    "I e III, apenas.",
                    "I, II e III."
                ],
                correct: 1,
                explanation: "A assertiva I está incorreta porque a autotutela é excepcional, não o meio ordinário de solução de conflitos. As assertivas II e III, conforme formuladas no enunciado, descrevem corretamente as demais formas de resolução."
            },
            {
                id: 9,
                topic: "Meios de Conflito",
                difficulty: "Médio",
                text: "Na conciliação, diferentemente da mediação, o papel do terceiro facilitador caracteriza-se por:",
                options: [
                    "Proibir qualquer concessão recíproca entre as partes litigantes.",
                    "Sugerir soluções práticas para o conflito, sendo recomendada onde não há vínculo anterior.",
                    "Decidir obrigatoriamente a controvérsia por meio de laudo irrecorrível.",
                    "Exercer autotutela delegada por autoridade de polícia administrativa."
                ],
                correct: 1,
                explanation: "A conciliação é especialmente adequada a conflitos sem vínculo anterior relevante entre as partes. O conciliador pode sugerir opções de acordo, mas a decisão de aceitá-las permanece com os litigantes."
            },
            {
                id: 10,
                topic: "Meios de Conflito",
                difficulty: "Difícil",
                text: "Acerca dos meios alternativos e adequados de solução de controvérsias no direito civil brasileiro, assinale a afirmativa correta:",
                options: [
                    "Os direitos indisponíveis jamais podem ser objeto de autocomposição, sob pena de nulidade absoluta.",
                    "A transação celebrada em autocomposição exige homologação judicial para ter validade entre as partes.",
                    "A arbitragem pode versar sobre direitos patrimoniais disponíveis, sendo vedada sobre direitos indisponíveis.",
                    "A mediação impede definitivamente o acesso subsequente das partes à jurisdição estatal."
                ],
                correct: 2,
                explanation: "O art. 1º da Lei nº 9.307/1996 permite que pessoas capazes submetam à arbitragem litígios relativos a direitos patrimoniais disponíveis. Esses requisitos afastam a aplicação da arbitragem a direitos indisponíveis."
            },
            {
                id: 11,
                topic: "Meios de Conflito",
                difficulty: "Médio",
                text: "Em matéria de possessória, a legítima defesa da posse prevista no Art. 1.210 do Código Civil autoriza a vítima de turbação a manter-se na posse por sua própria força. Trata-se de exemplo de:",
                options: [
                    "Heterocomposição compulsória.",
                    "Autocomposição administrativa.",
                    "Autotutela juridicamente autorizada.",
                    "Jurisdição contenciosa delegada."
                ],
                correct: 2,
                explanation: "O art. 1.210, § 1º, do Código Civil autoriza, em situação possessória excepcional, a reação imediata do possuidor, desde que ocorra logo e sem excesso. A legítima defesa da posse é, portanto, hipótese legal de autotutela."
            },
            {
                id: 12,
                topic: "Meios de Conflito",
                difficulty: "Difícil",
                text: "Quando as partes envolvidas em um litígio aceitam submeter sua controvérsia à decisão de um tribunal judicial estatal, submetendo-se ao imperativo da tutela jurisdicional, o princípio incidente quanto à natureza do meio de conflito é a:",
                options: [
                    "Autotutela substitutiva do Estado.",
                    "Heterocomposição estatal sob o monopólio da jurisdição.",
                    "Autocomposição involuntária coercitiva.",
                    "Mediação compulsória com eficácia probatória."
                ],
                correct: 1,
                explanation: "A jurisdição estatal é heterocomposição pública: um juiz, terceiro investido de poder jurisdicional, resolve o conflito por decisão vinculante, em vez de deixar sua solução exclusivamente à vontade das partes."
            },

            // --- DIREITO PÚBLICO X DIREITO PRIVADO & AUTONOMIA PRIVADA (13-22) ---
            {
                id: 13,
                topic: "Direito Público x Privado",
                difficulty: "Médio",
                text: "A distinção entre Direito Público e Direito Privado tem origem histórica tradicional, contudo a doutrina contemporânea destaca que essa divisão não é absoluta. No âmbito do Direito Privado moderno, a autonomia privada exercida pelos particulares:",
                options: [
                    "Garante liberdade irrestrita e absoluta de contratar, imune a limitações legislativas.",
                    "Convive com limites legais, boa-fé objetiva, função social e valores constitucionais.",
                    "Aplica-se exclusivamente aos negócios jurídicos praticados diretamente com a Administração Pública.",
                    "Prevalece invariavelmente sobre todas as normas de ordem pública da Constituição da República."
                ],
                correct: 1,
                explanation: "A autonomia privada permite que as pessoas organizem seus interesses, mas seu exercício se submete à lei, à boa-fé, à função social e aos valores constitucionais. Por isso, não é um poder absoluto."
            },
            {
                id: 14,
                topic: "Direito Público x Privado",
                difficulty: "Médio",
                text: "Analise o processo evolutivo do Estado estudado na Teoria Geral do Direito Privado:\nEstado Liberal ➔ Estado Social ➔ Estado Constitucional.\nCom base nessa evolução, assinale a opção que reflete o papel da autonomia privada no Estado Constitucional:",
                options: [
                    "Laissez-faire absoluto com total ausência do Estado nas relações contratuais de direito privado.",
                    "Supressão integral do direito de propriedade privada em prol de interesses estatais coletivos.",
                    "Relativização da autonomia privada pela incidência direta de direitos fundamentais e normas protetivas.",
                    "Subordinação dos contratos privados exclusivamente às regras do Direito Administrativo disciplinar."
                ],
                correct: 2,
                explanation: "A constitucionalização do Direito Civil faz com que princípios constitucionais e direitos fundamentais também orientem as relações privadas. A autonomia privada deve ser exercida dentro desses parâmetros, inclusive em respeito à dignidade da pessoa humana."
            },
            {
                id: 15,
                topic: "Direito Público x Privado",
                difficulty: "Difícil",
                text: "Determinada cláusula contratual celebrada entre duas empresas prevê a renúncia antecipada ao direito de recorrer ao Poder Judiciário em caso de fraude deliberada por uma das partes. À luz dos limites da autonomia privada e das normas de ordem pública, essa cláusula é:",
                options: [
                    "Válida, pois no Direito Privado prevalece soberana a vontade das partes sem exceções.",
                    "Nula, por violar a ordem pública, a boa-fé objetiva e os preceitos fundamentais imperativos.",
                    "Anulável, caso comprovado que a empresa lesionada não contava com assessoria jurídica na assinatura.",
                    "Eficaz, desde que ratificada posteriormente perante cartório de títulos e documentos."
                ],
                correct: 1,
                explanation: "A autonomia privada não autoriza afastar normas cogentes nem estipular objeto ilícito. A liberdade contratual encontra limites legais e principiológicos, entre eles a boa-fé e a função social do contrato."
            },
            {
                id: 16,
                topic: "Direito Público x Privado",
                difficulty: "Médio",
                text: "São disciplinas representativas do núcleo tradicional do Direito Privado e do Direito Público, respectivamente:",
                options: [
                    "Direito Penal e Direito Tributário.",
                    "Direito Civil e Direito Constitucional.",
                    "Direito Administrativo e Direito Empresarial.",
                    "Direito Processual Civil e Direito Civil."
                ],
                correct: 1,
                explanation: "Em classificação didática, o Direito Civil e o Direito Empresarial integram o núcleo do Direito Privado; o Direito Constitucional, o Administrativo, o Penal e o Tributário integram o Direito Público. A classificação organiza os ramos, sem eliminar suas interações."
            },
            {
                id: 17,
                topic: "Direito Público x Privado",
                difficulty: "Difícil",
                text: "A fórmula sintética de memorização do Direito Privado moderno consolidada pela doutrina é composta por:",
                options: [
                    "Autonomia absoluta + supremacia do interesse público + intervenção estatal ostensiva.",
                    "Autonomia privada + limites jurídicos + valores constitucionais.",
                    "Laissez-faire + autotutela ilimitada + ausência de intervencionismo.",
                    "Livre iniciativa + repristinação tácita + derrogação compulsória."
                ],
                correct: 1,
                explanation: "A compreensão contemporânea do Direito Privado combina autonomia privada, limites jurídicos e incidência de valores constitucionais. A liberdade dos particulares, portanto, convive com deveres e garantias do ordenamento."
            },
            {
                id: 18,
                topic: "Direito Público x Privado",
                difficulty: "Médio",
                text: "Em um contrato de adesão, uma empresa inseriu cláusula que estipulava a perda total das prestações pagas pelo consumidor em caso de resolução contratual. Essa cláusula atenta contra a boa-fé e a função social. Trata-se da demonstração de que:",
                options: [
                    "O Direito Privado contemporâneo não tolera qualquer limitação à liberdade negocial.",
                    "A autonomia privada sofre temperamentos por normas de proteção imperativas da legislação.",
                    "A relação jurídica passa a ser regida integralmente pelas regras do Direito Penal econômico.",
                    "Os contratos civis tornaram-se atos administrativos unilaterais desprovidos de consenso."
                ],
                correct: 1,
                explanation: "A autonomia contratual é limitada por normas cogentes e pelos deveres decorrentes da boa-fé objetiva e da função social do contrato. Assim, a vontade das partes não prevalece contra esses parâmetros jurídicos."
            },
            {
                id: 19,
                topic: "Direito Público x Privado",
                difficulty: "Difícil",
                text: "A respeito da superação da dicotomia rígida entre Direito Público e Direito Privado, assinale a opção correta:",
                options: [
                    "O surgimento de institutos como a função social da propriedade extinguiu formalmente o Direito Privado.",
                    "O Direito Público e o Privado dialogam e interpenetram-se, fenômeno visível na constitucionalização do Direito Civil.",
                    "A autonomia privada foi eliminada do Código Civil de 2002 em razão do dirigismo contratual estrito.",
                    "O Direito Empresarial passou a integrar o Direito Público por regulamentar a atividade econômica."
                ],
                correct: 1,
                explanation: "A distinção entre Direito Público e Privado não é absoluta: valores constitucionais também incidem nas relações entre particulares. Essa incidência é expressão da constitucionalização do Direito Civil."
            },
            {
                id: 20,
                topic: "Direito Público x Privado",
                difficulty: "Médio",
                text: "No modelo do Estado Liberal, o primado orientador das relações privadas assentava-se eminentemente sobre:",
                options: [
                    "A intervenção estatal direta para assegurar a igualdade material dos vulneráveis.",
                    "A autonomia privada quase irrestrita e a força vinculante absoluta do contrato (pacta sunt servanda).",
                    "A vinculação do contrato aos direitos fundamentais sociais e ambientais.",
                    "A submissão obrigatória de todos os negócios privados ao crivo prévio do Poder Judiciário."
                ],
                correct: 1,
                explanation: "No Estado Liberal, ganhavam relevo o individualismo, o voluntarismo e a autonomia privada, com intervenção estatal mais restrita nas relações econômicas e sociais."
            },
            {
                id: 21,
                topic: "Direito Público x Privado",
                difficulty: "Médio",
                text: "Na transição do Estado Liberal para o Estado Social, a alteração mais marcante na teoria dos contratos civis foi:",
                options: [
                    "A proibição da celebração de contratos entre pessoas físicas sem autorização governamental.",
                    "A limitação da autonomia privada por meio de leis interventivas para proteger partes hipossuficientes.",
                    "A abolição total da propriedade privada urbana e rural.",
                    "A equiparação automática dos contratos privados às decisões judiciais transitadas em julgado."
                ],
                correct: 1,
                explanation: "No Estado Social, amplia-se a atuação estatal nas relações econômicas e privadas, inclusive para conter abusos e proteger partes em posição de vulnerabilidade. Essa atuação não elimina a autonomia privada, mas a submete a limites jurídicos."
            },
            {
                id: 22,
                topic: "Direito Público x Privado",
                difficulty: "Difícil",
                text: "Sob a ótica do Direito Privado contemporâneo, a função social do contrato e da propriedade atua como:",
                options: [
                    "Mecanismo de aniquilação da propriedade privada.",
                    "Pressuposto de validade e eficácia das prerrogativas individuais, limitando o exercício abusivo do direito.",
                    "Regra aplicável estritamente às empresas públicas e sociedades de economia mista.",
                    "Mecanismo de repristinação automática de normas contratuais revogadas."
                ],
                correct: 1,
                explanation: "A função social condiciona o exercício de direitos e da autonomia privada à observância dos valores jurídicos e sociais que estruturam a convivência. Assim, o interesse individual não é considerado de forma isolada."
            },

            // --- LINDB: ESTRUTURA, FUNÇÃO E DIMENSÕES (23-30) ---
            {
                id: 23,
                topic: "LINDB - Conceito",
                difficulty: "Médio",
                text: "A Lei de Introdução às Normas do Direito Brasileiro (LINDB - Decreto-Lei nº 4.657/1942) desempenha no sistema jurídico a função de norma de sobredireito. Isso significa que a LINDB:",
                options: [
                    "É um código de conduta destinado exclusivamente ao regramento do Direito do Consumidor.",
                    "Consiste em uma norma sobre normas, regulando a vigência, aplicação, interpretação e eficácia das demais leis.",
                    "Contém disposições penais incriminadoras aplicáveis às autoridades administrativas do Estado.",
                    "Aplica-se unicamente às relações jurídicas firmadas no âmbito do Direito Internacional Público."
                ],
                correct: 1,
                explanation: "A LINDB é norma de sobredireito, pois reúne regras que orientam a vigência, a aplicação, a interpretação e a integração de outras normas jurídicas. Seu objeto, portanto, ultrapassa a disciplina de uma única área do direito."
            },
            {
                id: 24,
                topic: "LINDB - Dimensões",
                difficulty: "Médio",
                text: "A doutrina organiza o estudo da LINDB em três dimensões didáticas: TEMPO, MENTE e ESPAÇO. Assinale a alternativa que associa corretamente a dimensão de MENTE ao seu conteúdo correspondente:",
                options: [
                    "Vigência, vacatio legis e efeitos retroativos da lei nova no tempo.",
                    "Integração de lacunas (analogia, costumes, princípios gerais) e critérios hermenêuticos.",
                    "Regras de Direito Internacional Privado e elementos de conexão territorial.",
                    "Prazos de prescrição e decadência dos direitos reais de garantia."
                ],
                correct: 1,
                explanation: "A dimensão relativa à interpretação e à integração do ordenamento abrange, entre outros temas, os critérios dos arts. 4º e 5º da LINDB: integração diante de lacunas e aplicação da lei segundo seus fins sociais e o bem comum."
            },
            {
                id: 25,
                topic: "LINDB - Dimensões",
                difficulty: "Médio",
                text: "A dimensão do ESPAÇO disciplinada na LINDB abrange precipuamente matérias relativas a:",
                options: [
                    "Período de vacatio legis de decretos regulamentares municipais.",
                    "Conflitos de leis no espaço e normas de Direito Internacional Privado.",
                    "Aplicação analógica de leis penais e tributárias benéficas.",
                    "Requisitos formais de validade do ato jurídico perfeito interno."
                ],
                correct: 1,
                explanation: "A dimensão espacial da LINDB trata da aplicação da lei no espaço e de conflitos de leis com elemento estrangeiro, matéria disciplinada especialmente nos arts. 7º a 19."
            },
            {
                id: 26,
                topic: "LINDB - Dimensões",
                difficulty: "Médio",
                text: "Quanto à dimensão do TEMPO na LINDB, seu núcleo normativo central trata da:",
                options: [
                    "Uso dos costumes para suprir omissões legislativas no processo civil.",
                    "Vigência, vacatio legis, obrigatoriedade, revogação e eficácia da lei nova.",
                    "Validade dos contratos internacionais celebrados em alto-mar.",
                    "Competência do Superior Tribunal de Justiça para julgar recursos ordinários."
                ],
                correct: 1,
                explanation: "A dimensão temporal compreende a publicação, a vigência, a revogação e a aplicação da lei no tempo, temas tratados principalmente nos arts. 1º, 2º e 6º da LINDB."
            },
            {
                id: 27,
                topic: "LINDB - Função",
                difficulty: "Difícil",
                text: "A LINDB incide transversalmente sobre os diversos ramos do Direito brasileiro. Sobre sua abrangência de aplicação, assinale a afirmativa correta:",
                options: [
                    "Aplica-se exclusivamente às normas do Direito Civil e do Direito Empresarial.",
                    "Suas regras sobre vigência e hermenêutica estendem-se ao Direito Público, inclusive ao Direito Administrativo.",
                    "É norma de eficácia restrita às controvérsias julgadas pela Justiça Federal de primeira instância.",
                    "Não possui aplicação perante órgãos e tribunais do Poder Executivo em processos administrativos."
                ],
                correct: 1,
                explanation: "A LINDB contém regras gerais de aplicação do direito que alcançam diferentes ramos do ordenamento. A Lei nº 13.655/2018, em particular, introduziu disposições voltadas à segurança jurídica e à aplicação do direito público."
            },
            {
                id: 28,
                topic: "LINDB - Estrutura",
                difficulty: "Médio",
                text: "A sigla LINDB refere-se ao Decreto-Lei nº 4.657/1942. A alteração de sua nomenclatura oficial de 'Lei de Introdução ao Código Civil' para 'Lei de Introdução às Normas do Direito Brasileiro' objetivou expressar:",
                options: [
                    "A restrição de seu alcance apenas aos conflitos de leis no âmbito comercial.",
                    "O caráter geral e transversal do diploma como norma reguladora de todo o ordenamento jurídico.",
                    "A revogação tácita de todos os seus dispositivos sobre regramento de vacatio legis.",
                    "A transferência da competência legislativa civil do Governo Federal para os Estados-Membros."
                ],
                correct: 1,
                explanation: "A Lei nº 12.376/2010 alterou a denominação da antiga Lei de Introdução ao Código Civil para Lei de Introdução às Normas do Direito Brasileiro. A mudança explicita que suas regras orientam a aplicação de todo o ordenamento, e não apenas do Código Civil."
            },
            {
                id: 29,
                topic: "LINDB - Dimensões",
                difficulty: "Difícil",
                text: "Relacione as dimensões da LINDB com os respectivos institutos legalmente previstos:\n1. TEMPO\n2. MENTE\n3. ESPAÇO\n( ) Art. 4º (lacunas, analogia e costumes)\n( ) Art. 1º (vacatio legis e entrada em vigor)\n( ) Art. 13 (prova de fatos ocorridos no exterior)\nA sequência correta, de cima para baixo, é:",
                options: [
                    "2, 1, 3.",
                    "1, 2, 3.",
                    "3, 1, 2.",
                    "2, 3, 1."
                ],
                correct: 0,
                explanation: "A sequência associa cada dispositivo à sua matéria: o art. 4º trata da integração diante de lacunas; o art. 1º, da vigência no tempo; e o art. 13, da prova de fatos ocorridos no exterior. Assim, a correspondência indicada é 2, 1 e 3."
            },
            {
                id: 30,
                topic: "LINDB - Função",
                difficulty: "Médio",
                text: "Norma de sobredireito é o conceito que qualifica o estatuto jurídico da LINDB. Trata-se de uma conceituação que indica que a lei:",
                options: [
                    "Prevalece hierarquicamente sobre a Constituição da República de 1988.",
                    "Contém regramento disciplinador das próprias normas jurídicas e de sua incidência.",
                    "Depende de regulamentação por decreto do Poder Executivo para surtir efeitos jurídicos.",
                    "Substitui imperativamente todos os códigos de processo em trâmite no País."
                ],
                correct: 1,
                explanation: "Norma de sobredireito estabelece critérios para a aplicação de outras normas, inclusive quanto à sua vigência, interpretação e integração. É esse caráter orientador que distingue a LINDB de regras voltadas diretamente a uma relação jurídica específica."
            },

            // --- VACATIO LEGIS & ART. 1º LINDB (31-44) ---
            {
                id: 31,
                topic: "Vacatio Legis",
                difficulty: "Médio",
                text: "Uma lei federal ordinária de grande relevância social foi promulgada e publicada no Diário Oficial da União sem conter qualquer cláusula expressa estipulando a data de sua entrada em vigor. Nos termos do Art. 1º da LINDB, na ausência de disposição em contrário, a lei começará a vigorar em todo o país:",
                options: [
                    "Na data exata de sua publicação oficial.",
                    "30 (trinta) dias depois de sua publicação oficial.",
                    "45 (quarenta e cinco) dias depois de oficialmente publicada.",
                    "3 (três) meses após sua homologação pelo Congresso Nacional."
                ],
                correct: 2,
                explanation: "O art. 1º da LINDB estabelece, como regra geral e salvo disposição em contrário, que a lei começa a vigorar em todo o país 45 dias depois de oficialmente publicada. O prazo diverso fixado pela própria lei prevalece."
            },
            {
                id: 32,
                topic: "Vacatio Legis",
                difficulty: "Médio",
                text: "Determinada lei brasileira possui vigência admitida no exterior. Suponha que essa lei não tenha estipulado prazo específico em seu texto para vigoração fora do território nacional. Nos termos do Art. 1º, § 1º da LINDB, a obrigatoriedade da lei brasileira no exterior inicia-se:",
                options: [
                    "45 dias após a publicação oficial.",
                    "60 dias após a publicação oficial.",
                    "3 (três) meses depois de oficialmente publicada.",
                    "1 (um) ano após a publicação oficial."
                ],
                correct: 2,
                explanation: "O art. 1º, § 1º, da LINDB prevê que, nos Estados estrangeiros, a obrigatoriedade da lei brasileira, quando admitida, começa três meses depois da publicação oficial. O texto estabelece meses, não um prazo fixo de 90 dias."
            },
            {
                id: 33,
                topic: "Vacatio Legis",
                difficulty: "Difícil",
                text: "Uma lei federal foi publicada no Diário Oficial com período estipulado de vacatio legis de 60 dias. Decorridos 20 dias da publicação original (ou seja, ainda durante a vacatio legis), o legislador publicou uma nova edição oficial do texto da lei para corrigir erros ortográficos e conceituais materiais. Segundo o Art. 1º, § 3º da LINDB:",
                options: [
                    "O prazo de vacatio legis do texto corrigido continua fluindo a partir da primeira publicação original.",
                    "O prazo referente à parte corrigida começará a correr da nova publicação.",
                    "A lei torna-se nula e deverá passar por novo processo legislativo integral no Senado.",
                    "Ocorre repristinação automática de todas as leis que haviam sido revogadas no texto anterior."
                ],
                correct: 1,
                explanation: "Conforme o art. 1º, § 3º, da LINDB, se o texto legal for republicado para correção antes de entrar em vigor, o prazo de vigência referente ao texto corrigido começa a correr a partir da nova publicação."
            },
            {
                id: 34,
                topic: "Vacatio Legis",
                difficulty: "Difícil",
                text: "Uma lei federal entrou em vigor e permaneceu produzindo efeitos regulares por seis meses. Após esse período de plena vigência, constatou-se a necessidade de realizar correções técnicas no texto legislativo. De acordo com o Art. 1º, § 4º da LINDB, as correções ao texto de lei já em vigor:",
                options: [
                    "Retroagem à data da publicação original para convalidar os atos pretéritos.",
                    "Consideram-se lei nova, devendo cumprir novo trâmite ou prazo de vigência.",
                    "São consideradas meras retificações administrativas sem necessidade de nova lei.",
                    "Restaura a eficácia das leis revogadas anteriormente pelo fenômeno da derrogação."
                ],
                correct: 1,
                explanation: "O art. 1º, § 4º, da LINDB determina que correções feitas ao texto de lei já em vigor são consideradas lei nova. A correção, portanto, não se confunde com simples republicação durante a vacatio legis."
            },
            {
                id: 35,
                topic: "Vacatio Legis",
                difficulty: "Médio",
                text: "A respeito do instituto da vacatio legis, assinale a afirmativa correta:",
                options: [
                    "Trata-se do período compreendido entre a sanção do Presidente da República e a promulgação da norma.",
                    "Consiste no intervalo temporal entre a publicação oficial da lei e sua efetiva entrada em vigor.",
                    "Indica a fase em que a lei já em vigor é submetida a processo de revogação por caducidade.",
                    "Representa a exceção na qual uma lei estrangeira é aplicada em território nacional sem homologação."
                ],
                correct: 1,
                explanation: "Vacatio legis é o intervalo entre a publicação oficial da lei e o início de sua vigência. Nesse período, a norma ainda não se torna obrigatória, salvo regra legal específica em sentido diverso."
            },
            {
                id: 36,
                topic: "Vacatio Legis",
                difficulty: "Difícil",
                text: "O trâmite normativo de uma lei segue rigorosamente a sequência lógica de atos estipulada pela doutrina e pela LINDB. Assinale a sequência cronológica correta:",
                options: [
                    "VIGÊNCIA ➔ PUBLICAÇÃO ➔ VACATIO LEGIS ➔ OBRIGATORIEDADE.",
                    "PUBLICAÇÃO ➔ VACATIO LEGIS ➔ VIGÊNCIA ➔ OBRIGATORIEDADE.",
                    "VACATIO LEGIS ➔ PUBLICAÇÃO ➔ OBRIGATORIEDADE ➔ VIGÊNCIA.",
                    "SANÇÃO ➔ VIGÊNCIA ➔ VACATIO LEGIS ➔ PUBLICAÇÃO."
                ],
                correct: 1,
                explanation: "A sequência é publicação, vacatio legis, início da vigência e, então, obrigatoriedade da lei. A publicação inaugura o prazo; a norma passa a vincular seus destinatários quando entra em vigor."
            },
            {
                id: 37,
                topic: "Vacatio Legis",
                difficulty: "Médio",
                text: "Uma lei estadual dispôs expressamente em seu texto: 'Esta lei entra em vigor 15 dias após a sua publicação'. Omitiu-se qualquer menção à incidência da LINDB. O prazo de vigência será de:",
                options: [
                    "45 dias, pois a LINDB prevalece imperativamente sobre leis estaduais.",
                    "15 dias, prevalecendo a disposição expressa em contrário constante na própria lei.",
                    "3 meses, por aplicação analógica da regra de obrigatoriedade no exterior.",
                    "Imediato no dia da publicação, reputando-se nula a estipulação de 15 dias."
                ],
                correct: 1,
                explanation: "O prazo de 45 dias previsto no art. 1º da LINDB é subsidiário, pois se aplica salvo disposição em contrário. Como a lei fixou expressamente 15 dias, prevalece o prazo nela estabelecido."
            },
            {
                id: 38,
                topic: "Vacatio Legis",
                difficulty: "Difícil",
                text: "Considere hipoteticamente que a Lei X foi publicada no dia 1º de junho sem fixar data de vigência. De acordo com a LINDB, e considerando a contagem de prazos em dias na legislação civil (excluindo o dia do começo e incluindo o do vencimento), a lei entrará em vigor no Brasil em:",
                options: [
                    "15 de julho (45 dias após 1º de junho).",
                    "16 de julho.",
                    "1º de setembro (3 meses).",
                    "Na data da primeira reiteração oficial."
                ],
                correct: 0,
                explanation: "Na ausência de prazo próprio, o art. 1º da LINDB estabelece vacatio legis de 45 dias. A contagem deve observar o critério temporal expresso no enunciado; não se aplica, nessa hipótese interna, o prazo de três meses previsto para a obrigatoriedade no exterior."
            },
            {
                id: 39,
                topic: "Vacatio Legis",
                difficulty: "Médio",
                text: "Sobre a obrigatoriedade da lei durante o período de vacatio legis, assinale a opção correta:",
                options: [
                    "A lei publicada em vacatio legis já deve ser cumprida obrigatoriamente pelos cidadãos sob pena de multa.",
                    "A lei publicada mas ainda em vacatio legis não é dotada de obrigatoriedade jurídica e não pode ser aplicada ao caso concreto.",
                    "A lei em vacatio legis revoga imediatamente todas as leis anteriores que sejam incompatíveis.",
                    "O juiz deve aplicar a lei em vacatio legis caso o autor comprove urgência no pedido liminar."
                ],
                correct: 1,
                explanation: "Durante a vacatio legis, a lei publicada ainda não entrou em vigor e, por isso, não rege obrigatoriamente os fatos ocorridos nesse intervalo. Até o início de sua vigência, aplica-se a norma então vigente."
            },
            {
                id: 40,
                topic: "Vacatio Legis",
                difficulty: "Difícil",
                text: "Diferencie a regra geral do prazo de vacatio legis da LINDB praticada no Brasil e no exterior:\nI. No Brasil: 45 dias após a publicação oficial, salvo cláusula em contrário.\nII. No exterior: 3 meses após a publicação oficial, quando admitida a obrigatoriedade da lei brasileira.\nSobre essas afirmações, assinale a alternativa correta:",
                options: [
                    "Apenas a assertiva I está correta.",
                    "Apenas a assertiva II está correta.",
                    "Ambas as assertivas I e II estão corretas.",
                    "Ambas as assertivas I e II estão incorretas."
                ],
                correct: 2,
                explanation: "As assertivas correspondem ao art. 1º, caput, da LINDB, que prevê 45 dias no Brasil salvo disposição contrária, e ao § 1º, que prevê três meses no exterior quando admitida a obrigatoriedade da lei brasileira."
            },
            {
                id: 41,
                topic: "Vacatio Legis",
                difficulty: "Médio",
                text: "Uma lei instituiu prazo de vacatio legis de 90 dias. Durante o 89º dia após a publicação, o cidadão João praticou conduta que seria vedada pela nova legislação. Nesse caso:",
                options: [
                    "João cometeu ilícito, pois a vacatio legis gera eficácia preventiva.",
                    "João agiu licitamente perante a lei nova, pois esta ainda não estava em vigor na data do fato.",
                    "João responderá criminalmente por aplicação do efeito retroativo automático.",
                    "A lei nova terá seu prazo suspenso por mais 45 dias."
                ],
                correct: 1,
                explanation: "No 89º dia, a lei com vacatio de 90 dias ainda não está em vigor. Assim, a conduta é apreciada segundo a legislação vigente na data do fato, sem aplicação antecipada da lei nova."
            },
            {
                id: 42,
                topic: "Vacatio Legis",
                difficulty: "Difícil",
                text: "Em relação ao § 3º do Art. 1º da LINDB, na hipótese de republicação parcial de uma lei para correção de texto durante a vacatio legis:",
                options: [
                    "O prazo de vacatio de todo o diploma recomeça integralmente, inclusive dos artigos não alterados.",
                    "O prazo referente ao texto corrigido recomeça a correr da nova publicação.",
                    "O diploma inteiro entra em vigor imediatamente para evitar insegurança jurídica.",
                    "A lei antiga revogada é repristinada até que o Congresso aprove a correção."
                ],
                correct: 1,
                explanation: "O art. 1º, § 3º, da LINDB prevê que, republicado o texto para correção antes do início da vigência, o prazo recomeça a partir da nova publicação quanto ao texto corrigido. A regra não reinicia o prazo dos trechos que não foram objeto da correção."
            },
            {
                id: 43,
                topic: "Vacatio Legis",
                difficulty: "Médio",
                text: "Uma lei federal entra em vigor na data da sua publicação quando contiver expressamente a cláusula 'Esta lei entra em vigor na data de sua publicação'. Essa disposição:",
                options: [
                    "É inconstitucional, pois a LINDB exige obrigatoriamente vacatio legis mínima de 45 dias.",
                    "É válida, pois a LINDB admite expressamente a ressalva 'salvo disposição em contrário'.",
                    "Aplica-se unicamente se houver ratificação por decreto do Poder Executivo.",
                    "Gera vacatio de 3 dias úteis por força dos costumes jurídicos regionais."
                ],
                correct: 1,
                explanation: "A expressão salvo disposição em contrário, constante do art. 1º da LINDB, permite que a própria lei fixe outro marco de vigência, inclusive a data da publicação. Por isso, a cláusula expressa de vigência imediata é válida."
            },
            {
                id: 44,
                topic: "Vacatio Legis",
                difficulty: "Médio",
                text: "Se uma lei for republicada após já estar em pleno vigor para sanar ambiguidade gramatical em determinado artigo, juridicamente essa republicação é considerada pela LINDB como:",
                options: [
                    "Ato retroativo com efeitos ex tunc convalidantes.",
                    "Lei nova.",
                    "Repristinação interpretativa.",
                    "Ab-rogação da lei antiga."
                ],
                correct: 1,
                explanation: "O art. 1º, § 4º, da LINDB qualifica como lei nova a correção feita em texto legal que já esteja em vigor. Não se trata de mera retificação sujeita à regra de republicação durante a vacatio legis."
            },

            // --- AB-ROGAÇÃO X DERROGAÇÃO & REVOGAÇÃO DA LEI (45-58) ---
            {
                id: 45,
                topic: "Revogação da Lei",
                difficulty: "Médio",
                text: "Determinada lei municipal continha 50 artigos regendo a postulação de alvarás de funcionamento. Em 2024, foi publicada uma nova lei municipal que expressamente declarou revogados apenas os Arts. 10 a 20 da lei anterior, mantendo os demais hígidos. Do ponto de vista da técnica jurídica, ocorreu o fenômeno da:",
                options: [
                    "Ab-rogação.",
                    "Derrogação.",
                    "Repristinação.",
                    "Anulabilidade legislativa."
                ],
                correct: 1,
                explanation: "Derrogação é a revogação parcial de uma lei; ab-rogação é sua revogação total. Como apenas parte do diploma deixa de vigorar, a hipótese descrita é de derrogação."
            },
            {
                id: 46,
                topic: "Revogação da Lei",
                difficulty: "Médio",
                text: "Suponha que a Lei Geral de Licitações (Lei nº 14.133/2021) revogou inteiramente e sem ressalvas os diplomas anteriores que tratavam da matéria (Lei nº 8.666/1993 e Lei nº 10.520/2002). A retirada total de um diploma legal do ordenamento jurídico por uma lei nova é denominada:",
                options: [
                    "Derrogação.",
                    "Ab-rogação.",
                    "Repristinação tácita.",
                    "Caducidade jurisdicional."
                ],
                correct: 1,
                explanation: "Ab-rogação designa a revogação total de uma lei por norma posterior. Se a revogação alcança somente alguns dispositivos, trata-se de derrogação."
            },
            {
                id: 47,
                topic: "Revogação da Lei",
                difficulty: "Difícil",
                text: "A Lei X dispõe sobre os critérios para concessão de alvará ambiental. Três anos depois, é editada a Lei Y que regulamenta inteiramente toda a matéria tratada na Lei X, estabelecendo novo regime jurídico completo, porém sem conter cláusula expressa declarando a revogação da Lei X. Nos termos do Art. 2º, § 1º da LINDB, verifica-se:",
                options: [
                    "Revogação expressa por caducidade temporária.",
                    "Revogação tácita (ou indireta), pois a lei nova regulou inteiramente a matéria da lei anterior.",
                    "Subsistência concomitante de ambas as leis em regime de ultratividade coercitiva.",
                    "Nulidade da Lei Y por descumprimento da cláusula de revogação obrigatória."
                ],
                correct: 1,
                explanation: "Nos termos do art. 2º, § 1º, da LINDB, a lei posterior revoga a anterior quando o declare expressamente, quando haja incompatibilidade entre elas ou quando a nova lei regule inteiramente a matéria antes disciplinada."
            },
            {
                id: 48,
                topic: "Revogação da Lei",
                difficulty: "Difícil",
                text: "A Lei Geral A regula os contratos administrativos em sentido amplo. Posteriormente, surge a Lei Especial B que disciplina especificamente os contratos de parceria público-privada. Segundo o Art. 2º, § 2º da LINDB, a edição da Lei Especial B:",
                options: [
                    "Revoga automaticamente a Lei Geral A em sua totalidade pelo critério da especialidade.",
                    "Não revoga nem modifica a Lei Geral A, salvo se houver disposição ou incompatibilidade manifesta.",
                    "Torna a Lei Geral A anulável perante o Poder Judiciário.",
                    "Gera a ab-rogação recíproca de ambos os diplomas contratuais."
                ],
                correct: 1,
                explanation: "O art. 2º, § 2º, da LINDB dispõe que a lei nova com disposições gerais ou especiais paralelas às já existentes não revoga nem modifica, por si só, a lei anterior. As normas podem coexistir quando não houver incompatibilidade ou revogação nos termos do § 1º."
            },
            {
                id: 49,
                topic: "Revogação da Lei",
                difficulty: "Médio",
                text: "Nos termos do Art. 2º da LINDB, salvo se tiver sido destinada à vigência temporária, a lei permanece em vigor até que:",
                options: [
                    "Decorra o prazo prescricional quinquenal estabelecido pelo Supremo Tribunal Federal.",
                    "Outra lei a modifique ou a revogue.",
                    "Haja parecer administrativo desfavorável do Ministério da Justiça.",
                    "Complete dez anos de publicação sem aplicação prática pelos tribunais."
                ],
                correct: 1,
                explanation: "Segundo o art. 2º da LINDB, salvo se destinada à vigência temporária, a lei permanece em vigor até que outra a modifique ou revogue. Essa é a regra de continuidade das leis."
            },
            {
                id: 50,
                topic: "Revogação da Lei",
                difficulty: "Médio",
                text: "Uma norma jurídica que possui em seu texto data fixada de término de sua vigência (ex.: lei orçamentária anual ou lei para vigorar durante estado de calamidade) é classificada como:",
                options: [
                    "Lei de vacatio perene.",
                    "Lei temporária.",
                    "Lei repristinada imperativa.",
                    "Lei de sobredireito abstrato."
                ],
                correct: 1,
                explanation: "A lei temporária contém prazo de vigência previamente delimitado. Alcançado o termo final previsto, cessa sua vigência conforme a própria disciplina legal, sem que seja necessária uma lei revogadora."
            },
            {
                id: 51,
                topic: "Revogação da Lei",
                difficulty: "Difícil",
                text: "A respeito das formas de revogação da lei (expressa e tácita), assinale a afirmativa correta:",
                options: [
                    "A revogação expressa ocorre quando a lei nova é incompatível com a anterior, sem mencioná-la expressamente.",
                    "A revogação tácita decorre da declaração explícita no texto da lei nova que indica o diploma revogado.",
                    "A revogação expressa decorre de declaração categórica na lei nova, enquanto a tácita ocorre por incompatibilidade ou regulamentação integral da matéria.",
                    "Tanto a revogação expressa quanto a tácita exigem decisão liminar do Superior Tribunal de Justiça."
                ],
                correct: 2,
                explanation: "A revogação é expressa quando a lei posterior declara que revoga a anterior. É tácita quando decorre de incompatibilidade entre as normas ou da regulação integral da matéria pela lei nova, conforme o art. 2º, § 1º, da LINDB."
            },
            {
                id: 52,
                topic: "Revogação da Lei",
                difficulty: "Médio",
                text: "Lembrando o macete doutrinário de memorização sobre a extinção das normas no tempo, correlacione corretamente os vocábulos:\n'ab' e 'der'.",
                options: [
                    "ab = acaba tudo (revogação total) | der = derruba parte (revogação parcial).",
                    "ab = abrogação parcial | der = derrogação total e irrestrita.",
                    "ab = abolição no exterior | der = derrogação no território nacional.",
                    "ab = abertura de vacatio | der = derrogação temporária."
                ],
                correct: 0,
                explanation: "A distinção é pelo alcance da revogação: ab-rogação extingue integralmente a lei anterior; derrogação afasta apenas parte dela. A hipótese narrada, por atingir o diploma inteiro, corresponde à ab-rogação."
            },
            {
                id: 53,
                topic: "Revogação da Lei",
                difficulty: "Difícil",
                text: "Considere que a Lei A trata do procedimento ordinário do direito imobiliário. A Lei B posterior edita norma sobre a cobrança de aluguel residencial sem contudo revogar expressamente a Lei A. Ocorre que o Art. 5º da Lei B traz redação diametralmente oposta ao Art. 12 da Lei A. Qual a consequência jurídica sobre o Art. 12 da Lei A?",
                options: [
                    "Foi ab-rogado inteiramente com toda a Lei A.",
                    "Foi derogado em razão de sua incompatibilidade direta com o Art. 5º da Lei B.",
                    "Permanecerá vigente, prevalecendo sobre a Lei B pelo critério da antiguidade.",
                    "Entrará automaticamente em estado de vacatio legis estendida."
                ],
                correct: 1,
                explanation: "A lei nova afastou apenas o dispositivo da Lei A incompatível com a disciplina posterior. Como os demais dispositivos não foram revogados, a hipótese é de derrogação, isto é, revogação parcial."
            },
            {
                id: 54,
                topic: "Revogação da Lei",
                difficulty: "Médio",
                text: "O desuso de uma lei por longo período ou o não cumprimento deliberado pela sociedade (denominado costume contra legem) tem o condão de revogar formalmente uma lei no ordenamento jurídico brasileiro?",
                options: [
                    "Sim, pois os costumes prevalecem sobre a lei escrita nos termos da LINDB.",
                    "Não, pois no Brasil a lei só se revoga por outra lei, nos termos do Art. 2º da LINDB.",
                    "Sim, desde que haja parecer declaratório homologado pelo Congresso Nacional.",
                    "Não, a menos que o desuso complete mais de 50 anos ininterruptos."
                ],
                correct: 1,
                explanation: "A continuidade prevista no art. 2º da LINDB significa que a lei permanece em vigor até ser modificada ou revogada por outra lei, ressalvadas as leis temporárias. O desuso ou um costume contrário, por si só, não revoga a lei."
            },
            {
                id: 55,
                topic: "Revogação da Lei",
                difficulty: "Difícil",
                text: "Na antinomia entre uma norma anterior especial e uma norma posterior geral, se a norma geral posterior não contiver disposição expressa revogatória e nem for incompatível com a especial, o que ocorre?",
                options: [
                    "A norma anterior especial é ab-rogada imediatamente.",
                    "A norma anterior especial permanece em vigor (a lei geral posterior não revoga a especial pré-existente).",
                    "A norma posterior geral torna-se nula de pleno direito.",
                    "Ocorre a repristinação da lei geral mais antiga."
                ],
                correct: 1,
                explanation: "O art. 2º, § 2º, da LINDB permite a coexistência de lei geral e lei especial quando a norma nova apenas acrescente disposições paralelas. Se houver incompatibilidade ou regulação integral da matéria, deve-se examinar a revogação nos termos do § 1º."
            },
            {
                id: 56,
                topic: "Revogação da Lei",
                difficulty: "Médio",
                text: "A revogação de uma lei produz efeitos regra geral ex nunc (não retroativos). Isso significa que a revogação:",
                options: [
                    "Destrói todos os efeitos jurídicos consumados no passado sob o império da lei revogada.",
                    "Aplica-se para o futuro, preservando os fatos ocorridos durante a vigência da lei revogada.",
                    "Obriga os cidadãos a devolverem valores recebidos licitamente na vigência pretérita.",
                    "Restaura automaticamente as obrigações extintas pela lei nova."
                ],
                correct: 1,
                explanation: "A revogação encerra a vigência da lei para o futuro, sem atingir automaticamente situações protegidas constituídas sob a lei anterior. O art. 6º da LINDB resguarda o ato jurídico perfeito, o direito adquirido e a coisa julgada."
            },
            {
                id: 57,
                topic: "Revogação da Lei",
                difficulty: "Difícil",
                text: "Qual das seguintes hipóteses representa caso legítimo de ab-rogação de uma lei civil no Brasil?",
                options: [
                    "A publicação de provimento administrativo do Conselho Nacional de Justiça sobre certidões.",
                    "A aprovação de nova lei federal ordinária que expressamente revoga todos os artigos da lei anterior.",
                    "A edição de portaria ministerial desregulamentando atividade comercial.",
                    "A celebração de convenção coletiva de trabalho incompatível com o Código Civil."
                ],
                correct: 1,
                explanation: "A revogação total, assim como a parcial, decorre de norma posterior apta a disciplinar a matéria, e não de simples desuso. O art. 2º da LINDB regula a substituição ou a extinção da vigência da lei anterior."
            },
            {
                id: 58,
                topic: "Revogação da Lei",
                difficulty: "Médio",
                text: "Se uma lei for declarada inconstitucional com eficácia ex tunc pelo Supremo Tribunal Federal em Ação Direta de Inconstitucionalidade (ADI), a situação distingue-se da revogação por outra lei porque a declaração de inconstitucionalidade:",
                options: [
                    "Gera apenas derrogação parcial por tempo determinado.",
                    "Retira a norma do sistema desde sua origem por vício de nulidade, enquanto a revogação retira norma válida a partir de sua vigência.",
                    "Submete-se às regras de vacatio legis do Art. 1º da LINDB.",
                    "Equipara-se ao instituto da arbitragem internacional compulsória."
                ],
                correct: 1,
                explanation: "A revogação ocorre quando uma norma posterior encerra a vigência de uma norma antes válida. A declaração de inconstitucionalidade, por sua vez, reconhece incompatibilidade com a Constituição; os institutos têm fundamentos distintos, e os efeitos temporais da decisão podem depender do caso e de eventual modulação."
            },

            // --- REPRISTINAÇÃO - ART. 2º, §3º (59-68) ---
            {
                id: 59,
                topic: "Repristinação",
                difficulty: "Difícil",
                text: "A Lei A regulava as normas sobre licenciamento comercial. Em 2010, foi editada a Lei B que revogou integralmente a Lei A. Em 2022, adveio a Lei C que revogou inteiramente a Lei B, sem contiver em seu texto qualquer menção sobre a restauração da Lei A. Com base no Art. 2º, § 3º da LINDB, qual é a situação jurídica da Lei A?",
                options: [
                    "A Lei A retorna automaticamente a vigorar a partir da publicação da Lei C.",
                    "A Lei A permanece revogada, pois no direito brasileiro a repristinação não é automática.",
                    "A Lei A passa a vigorar provisoriamente sob período de vacatio de 45 dias.",
                    "A Lei A converte-se em costume jurídico de aplicação compulsória pelo magistrado."
                ],
                correct: 1,
                explanation: "O art. 2º, § 3º, da LINDB estabelece que a lei revogada não volta a vigorar apenas porque perdeu vigência a lei que a revogara. Sem disposição em contrário, não há repristinação automática."
            },
            {
                id: 60,
                topic: "Repristinação",
                difficulty: "Médio",
                text: "O instituto jurídico da repristinação compreende-se conceitualmente como:",
                options: [
                    "A revogação parcial promovida por medida provisória não convertida em lei.",
                    "A restauração ou retorno à vigência de uma lei anteriormente revogada, em razão da revogação da lei revogadora.",
                    "O período compreendido entre a sanção e a publicação oficial do texto legislativo.",
                    "A eficácia extraterritorial das leis estrangeiras de direito privado."
                ],
                correct: 1,
                explanation: "Repristinação é o restabelecimento da vigência de uma lei anteriormente revogada, em razão de evento normativo posterior. Pela regra do art. 2º, § 3º, da LINDB, esse retorno não ocorre automaticamente."
            },
            {
                id: 61,
                topic: "Repristinação",
                difficulty: "Difícil",
                text: "Para que ocorra legalmente o efeito repristinatório de uma lei anteriormente revogada no sistema jurídico brasileiro, é indispensável que:",
                options: [
                    "Haja parecer favorável da Advocacia-Geral da União ratificado pelo Senado Federal.",
                    "A lei revogadora da lei revogadora contenha previsão expressa determinando o retorno da lei antiga.",
                    "A lei antiga tenha sido revogada por derrogação parcial em período inferior a 3 anos.",
                    "O Superior Tribunal de Justiça homologue o pedido formulado pelas partes no processo civil."
                ],
                correct: 1,
                explanation: "A regra do art. 2º, § 3º, da LINDB é a não restauração automática da lei revogada. A própria lei nova pode, contudo, determinar expressamente o restabelecimento de sua vigência."
            },
            {
                id: 62,
                topic: "Repristinação",
                difficulty: "Médio",
                text: "Examine a seguinte cadeia legislativa hipotética:\n1. Lei Alfa é editada em 2000.\n2. Lei Beta revoga a Lei Alfa em 2010.\n3. Lei Gama revoga a Lei Beta em 2020 contendo a seguinte disposição: 'Fica expressamente restaurada a eficácia e vigência da Lei Alfa de 2000'.\nNessa situação concreta, operou-se o instituto da:",
                options: [
                    "Ab-rogação tácita imprópria.",
                    "Repristinação expressa.",
                    "Derrogação compulsória indireta.",
                    "Vacatio legis suplementar."
                ],
                correct: 1,
                explanation: "Como a Lei Gama determinou expressamente a restauração da Lei Alfa, o retorno de sua vigência decorre de disposição legal específica, admitida pela ressalva do art. 2º, § 3º, da LINDB."
            },
            {
                id: 63,
                topic: "Repristinação",
                difficulty: "Difícil",
                text: "Não se deve confundir o efeito repristinatório decorrente do controle de constitucionalidade com a repristinação legislativa da LINDB. Quando o Supremo Tribunal Federal declara a inconstitucionalidade com eficácia ex tunc de uma lei revogadora (Lei B), o retorno da lei anterior (Lei A) ocorre porque:",
                options: [
                    "O STF aplica o Art. 2º, § 3º da LINDB sob o regime da derrogação temporária.",
                    "A lei revogadora inconstitucional é nula desde a origem, logo nunca teve aptidão jurídica para revogar a lei anterior.",
                    "A repristinação no direito constitucional é sempre expressa mediante emenda à Constituição.",
                    "O STJ homologa a sentença estrangeira correspondente aos direitos adquiridos."
                ],
                correct: 1,
                explanation: "No controle de constitucionalidade, o reconhecimento da invalidade da lei revogadora pode produzir efeito repristinatório, restabelecendo a lei anterior. Esse efeito não se confunde com a repristinação automática vedada pelo art. 2º, § 3º, da LINDB e pode ser afastado nos termos definidos na decisão."
            },
            {
                id: 64,
                topic: "Repristinação",
                difficulty: "Médio",
                text: "Caso a Lei N1 seja revogada pela Lei N2 e esta venha a ser revogada pela Lei N3 sem nada dispor sobre N1, assinale a consequência jurídica exata:",
                options: [
                    "N1 volta a vigorar imediatamente.",
                    "N1 permanece revogada.",
                    "N2 continua em vigor parcialmente.",
                    "N1 e N2 passam a vigorar simultaneamente."
                ],
                correct: 1,
                explanation: "Como a nova lei não determinou o restabelecimento da Lei N1, permanece a regra do art. 2º, § 3º, da LINDB: a revogação da lei revogadora, por si só, não restaura a lei anterior."
            },
            {
                id: 65,
                topic: "Repristinação",
                difficulty: "Difícil",
                text: "Julgue o item a seguir com base no estudo da LINDB:\n'No ordenamento jurídico brasileiro vigora a regra geral da repristinação automática das leis, salvo quando a lei revogadora declarar expressamente o contrário.' Essa afirmação está:",
                options: [
                    "Correta, consoante o disposto no Art. 1º da LINDB.",
                    "Incorreta, pois vigora a regra de que a repristinação NÃO é automática, exigindo previsão expressa.",
                    "Correta, desde que a lei seja de natureza de Direito Público.",
                    "Incorreta, porque o instituto da repristinação foi totalmente abolido do Direito Brasileiro."
                ],
                correct: 1,
                explanation: "A assertiva inverte a regra do art. 2º, § 3º, da LINDB. No direito brasileiro, a lei revogada não recupera automaticamente a vigência quando deixa de vigorar a lei que a revogou."
            },
            {
                id: 66,
                topic: "Repristinação",
                difficulty: "Médio",
                text: "Um estudante do exame de ordem formulou o seguinte esquema mental: 'Lei A morre ao ser revogada pela Lei B. Se a Lei B morrer pela edição da Lei C, a Lei A não ressuscita sozinha'. Esse esquema sintetiza com precisão:",
                options: [
                    "O princípio da ultratividade do direito adquirido.",
                    "A vedações da repristinação automática no Art. 2º, § 3º da LINDB.",
                    "A regra do prazo de 3 meses para a vacatio legis no exterior.",
                    "O critério da analogia juris para preenchimento de lacunas."
                ],
                correct: 1,
                explanation: "A sequência apresentada representa a regra de não repristinação automática: a perda de vigência da lei revogadora não basta para restaurar a lei que ela havia revogado."
            },
            {
                id: 67,
                topic: "Repristinação",
                difficulty: "Difícil",
                text: "A respeito da repristinação e do direito intertemporal, assinale a afirmativa correta:",
                options: [
                    "A repristinação tácita é presumida em todos os contratos de compra e venda imobiliária.",
                    "A lei revogada pode voltar a vigorar se houver disposição expressa na lei nova determinando sua restauração.",
                    "Uma portaria ministerial pode promover a repristinação de uma lei federal expressamente revogada.",
                    "A revogação parcial (derrogação) gera repristinação obrigatória após decorridos 45 dias."
                ],
                correct: 1,
                explanation: "A lei anteriormente revogada somente volta a vigorar quando houver previsão que determine esse restabelecimento, ressalvadas hipóteses específicas reconhecidas pelo ordenamento, como os efeitos do controle de constitucionalidade."
            },
            {
                id: 68,
                topic: "Repristinação",
                difficulty: "Médio",
                text: "Se uma norma regulamentar de caráter temporário atinge seu termo final e perde a vigência, as normas gerais que regiam a matéria antes de sua publicação:",
                options: [
                    "Continuam revogadas, dependendo de nova lei aprovação no Congresso.",
                    "Voltam a incidir regularmente, pois a norma temporária apenas suspendia sua aplicação durante seu período predeterminado.",
                    "São repristinadas por decisão do Superior Tribunal de Justiça.",
                    "Tornam-se eivas de nulidade ex tunc."
                ],
                correct: 1,
                explanation: "A lei temporária ou excepcional cessa de vigorar quando termina o prazo ou a situação para a qual foi editada. A continuidade de normas gerais que não haviam sido revogadas não configura repristinação; esta pressupõe o restabelecimento de lei antes revogada."
            },

            // --- OBRIGATORIEDADE DA LEI - ART. 3º LINDB (69-74) ---
            {
                id: 69,
                topic: "Art. 3º LINDB",
                difficulty: "Médio",
                text: "Um cidadão descumpriu regra referente ao pagamento de taxa municipal de licenciamento ambiental. Em sua defesa administrativa, alegou que residia em zona rural isolada, sem acesso à internet ou diário oficial, e que por isso desconhecia a existência da norma sancionada. De acordo com o Art. 3º da LINDB:",
                options: [
                    "O desconhecimento da lei justifica o descumprimento e extingue a sanção administrativa.",
                    "Ninguém se escusa de cumprir a lei, alegando que não a conhece.",
                    "O cidadão terá direito a prazo suplementar de vacatio legis proporcional à distância da zona rural.",
                    "A lei municipal perde obrigatoriedade em relação a munícipes sem acesso à informação digital."
                ],
                correct: 1,
                explanation: "O art. 3º da LINDB dispõe que ninguém pode deixar de cumprir a lei sob a alegação de que não a conhece. A regra impede que o desconhecimento seja invocado, por si só, como justificativa para afastar a obrigatoriedade legal."
            },
            {
                id: 70,
                topic: "Art. 3º LINDB",
                difficulty: "Difícil",
                text: "O princípio constante do Art. 3º da LINDB ('Ninguém se escusa de cumprir a lei, alegando que não a conhece') fundamenta-se juridicamente em qual exigência do sistema social?",
                options: [
                    "Na presunção de que todos os brasileiros possuem curso superior de Direito.",
                    "Na necessidade de assegurar a segurança jurídica, a eficácia do ordenamento e a igualdade de aplicação das normas.",
                    "No primado da autotutela das obrigações contratuais privadas.",
                    "Na irretroatividade das decisões do Superior Tribunal de Justiça."
                ],
                correct: 1,
                explanation: "Se o desconhecimento da lei pudesse afastar livremente o dever de cumpri-la, a aplicação uniforme do ordenamento ficaria comprometida. Por isso, o art. 3º da LINDB não admite essa alegação como escusa geral."
            },
            {
                id: 71,
                topic: "Art. 3º LINDB",
                difficulty: "Médio",
                text: "No direito penal e penal militar, o erro de proibição e o erro de direito podem minorar ou isentar a pena sob certas condições restritas. Contudo, na esfera das obrigações civis gerais e da LINDB, a regra estrita do Art. 3º estabelece que:",
                options: [
                    "O desconhecimento da lei civil exime a parte de indenizar os danos causados a terceiros.",
                    "A alegação de ignorância da lei publicada não afasta sua obrigatoriedade vinculante.",
                    "A vacatio legis suspende-se perante pessoas analfabetas funcionais.",
                    "O juiz deve perdoar as dívidas fiscais dos devedores que comprovarem ignorância."
                ],
                correct: 1,
                explanation: "O art. 3º da LINDB estabelece que a alegação de desconhecimento não afasta o dever de cumprir a lei. A regra se aplica de modo geral, sem prejuízo de hipóteses específicas previstas no próprio ordenamento."
            },
            {
                id: 72,
                topic: "Art. 3º LINDB",
                difficulty: "Médio",
                text: "Para que a lei se torne obrigatória para todos os indivíduos, cumprindo a exigência contida no Art. 3º da LINDB, é pressuposto indispensável que a norma tenha sido previamente:",
                options: [
                    "Homologada por cartório de registro de títulos e documentos.",
                    "Oficialmente publicada nos órgãos de imprensa oficial do Estado.",
                    "Submetida a plebiscito popular de confirmação.",
                    "Traduzida para idioma estrangeiro em três vias."
                ],
                correct: 1,
                explanation: "A publicação oficial torna a lei pública e, uma vez iniciada sua vigência, permite que sua obrigatoriedade seja exigida de seus destinatários. O art. 3º da LINDB afasta a alegação geral de desconhecimento como justificativa para não cumpri-la."
            },
            {
                id: 73,
                topic: "Art. 3º LINDB",
                difficulty: "Difícil",
                text: "Em matéria de vício do negócio jurídico, a legislação civil admite excepcionalmente o erro de direito (Art. 139, III do CC) como causa de anulação do contrato, desde que não implique recusa à aplicação da lei e seja o motivo único ou principal do negócio. Com base nessa premissa e no Art. 3º da LINDB, assinale a alternativa correta:",
                options: [
                    "O erro de direito anula a obrigação legal, tornando o descumprimento da lei legítimo.",
                    "O erro de direito como vício de consentimento no contrato não revoga nem descumpre o Art. 3º da LINDB, pois a lei continua sendo obrigatória.",
                    "O Art. 3º da LINDB foi implicitamente derogado pelo Código Civil de 2002.",
                    "Qualquer descumprimento contratual fundamentado em erro de direito gera repristinação."
                ],
                correct: 1,
                explanation: "O erro de direito pode viciar a manifestação de vontade no negócio jurídico, nos termos do art. 139, III, do Código Civil, quando não implicar recusa à aplicação da lei e constituir o motivo único ou principal do negócio. Isso não afasta a obrigatoriedade geral estabelecida pelo art. 3º da LINDB."
            },
            {
                id: 74,
                topic: "Art. 3º LINDB",
                difficulty: "Médio",
                text: "A máxima latina 'Nemo jus ignorare censetur' encontra expressão legal direta no seguinte dispositivo da LINDB:",
                options: [
                    "Art. 1º",
                    "Art. 2º, § 3º",
                    "Art. 3º",
                    "Art. 6º"
                ],
                correct: 2,
                explanation: "O art. 3º da LINDB exprime a regra de que ninguém pode escusar-se do cumprimento da lei alegando desconhecê-la. O brocardo citado sintetiza essa vedação."
            },

            // --- MENTE: INTEGRALIZAÇÃO E INTERPRETAÇÃO - ARTS. 4º E 5º (75-84) ---
            {
                id: 75,
                topic: "Arts. 4º e 5º LINDB",
                difficulty: "Médio",
                text: "Ao julgar uma demanda relativa a novos modelos de negócios tecnológicos, o magistrado verificou que não existe qualquer dispositivo legal regulando especificamente o contrato firmado entre os litigantes (lacuna na lei). Nos termos do Art. 4º da LINDB, diante do silêncio da lei, o juiz deverá decidir o caso recorrendo sucessivamente a:",
                options: [
                    "Jurisprudência estrangeira, equidade pessoal e vontade do réu.",
                    "Analogia, costumes e princípios gerais de direito.",
                    "Doutrina acadêmica, regimento interno do tribunal e arbitragem.",
                    "Despacho executivo, resoluções administrativas e decretos do Prefeito."
                ],
                correct: 1,
                explanation: "O art. 4º da LINDB determina que, quando a lei for omissa, o juiz decida segundo a analogia, os costumes e os princípios gerais de direito. Esses instrumentos integram o ordenamento para resolver o caso concreto."
            },
            {
                id: 76,
                topic: "Arts. 4º e 5º LINDB",
                difficulty: "Médio",
                text: "O magistrado de determinada comarca, ao proferir sentença em ação sobre obrigação contratual bancária, fundamentou sua decisão no Art. 5º da LINDB. O comando normativo contido no Art. 5º determina expressamente que na aplicação da lei o juiz atenderá aos:",
                options: [
                    "Precedentes dos tribunais superiores e ao parecer do Ministério Público.",
                    "Fins sociais a que ela se dirige e às exigências do bem comum.",
                    "Usos comerciais e ao valor venal dos bens móveis.",
                    "Requisitos formais da vacatio legis em território nacional."
                ],
                correct: 1,
                explanation: "O art. 5º da LINDB orienta a aplicação da lei: o juiz deve atender aos fins sociais a que ela se dirige e às exigências do bem comum. É esse o critério indicado no enunciado."
            },
            {
                id: 77,
                topic: "Arts. 4º e 5º LINDB",
                difficulty: "Difícil",
                text: "Diferencie a finalidade jurídica do Art. 4º da finalidade jurídica do Art. 5º da LINDB, nos moldes da jurisprudência e da doutrina de Teoria Geral do Direito Privado:",
                options: [
                    "O Art. 4º destina-se à revogação parcial de leis; o Art. 5º cuida da vacatio legis no exterior.",
                    "O Art. 4º destina-se à integração do ordenamento diante de lacunas da lei; o Art. 5º orienta a hermenêutica/aplicação da lei existente.",
                    "O Art. 4º cuida do efeito imediato das decisões judiciais; o Art. 5º autoriza a autotutela irrestrita.",
                    "O Art. 4º é norma de direito internacional; o Art. 5º destina-se à homologação de sentença pelo STJ."
                ],
                correct: 1,
                explanation: "O art. 4º da LINDB trata da integração do ordenamento quando há omissão legal, por meio da analogia, dos costumes e dos princípios gerais. O art. 5º orienta a aplicação e a interpretação da lei existente à luz de seus fins sociais e do bem comum."
            },
            {
                id: 78,
                topic: "Arts. 4º e 5º LINDB",
                difficulty: "Difícil",
                text: "Determinada controvérsia sobre devolução de cheques e tarifas em praça do interior de São Paulo foi resolvida pelo juiz com base na prática reiterada, constante e pública observada pelos comerciantes locais, haja vista a ausência de lei ou regra analógica específica. O instrumento de integração utilizado foi:",
                options: [
                    "Analogia legis.",
                    "Costume jurídico (secundum legem / praeter legem).",
                    "Princípio geral da irretroatividade.",
                    "Ato jurídico perfeito de ordem pública."
                ],
                correct: 1,
                explanation: "Na falta de lei aplicável e de regra analógica pertinente, a prática reiterada e socialmente reconhecida como obrigatória pode funcionar como costume praeter legem, instrumento de integração previsto no art. 4º da LINDB."
            },
            {
                id: 79,
                topic: "Arts. 4º e 5º LINDB",
                difficulty: "Médio",
                text: "Consiste na aplicação de uma norma jurídica estipulada para uma hipótese legislada a um caso não previsto em lei, que contudo guarda com aquela uma relação de semelhança e a mesma razão jurídica (ubi eadem ratio, ibi eadem juris dispositio). Trata-se do conceito de:",
                options: [
                    "Analogia.",
                    "Repristinação.",
                    "Derrogação.",
                    "Homologação."
                ],
                correct: 0,
                explanation: "Analogia é o emprego, para um caso sem disciplina legal específica, da solução prevista para hipótese semelhante, quando houver identidade de razão jurídica. Ela supre uma lacuna; não se confunde com repristinação ou revogação."
            },
            {
                id: 80,
                topic: "Arts. 4º e 5º LINDB",
                difficulty: "Difícil",
                text: "Pode o magistrado eximir-se de proferir julgamento em um processo civil sob a alegação de que a legislação é obscura, lacunosa ou manifestamente omissa sobre o tema debatido?",
                options: [
                    "Sim, o juiz pode proferir despacho de não liquidação e arquivar o processo sem resolução do mérito.",
                    "Não, o juiz não se exime de decidir alegando lacuna ou obscuridade da lei, devendo integrar o sistema pelos meios do Art. 4º da LINDB.",
                    "Sim, desde que encaminhe os autos para manifestação prévia do Congresso Nacional.",
                    "Não, devendo obrigatoriamente aplicar a analogia e, na sua ausência, declarar a autotutela das partes."
                ],
                correct: 1,
                explanation: "O juiz não pode deixar de julgar sob a alegação de lacuna ou obscuridade. Deve decidir o caso e, diante de omissão legal, recorrer aos meios de integração do art. 4º da LINDB; a vedação ao non liquet também consta do art. 140 do CPC."
            },
            {
                id: 81,
                topic: "Arts. 4º e 5º LINDB",
                difficulty: "Médio",
                text: "Os Princípios Gerais de Direito, indicados no Art. 4º da LINDB para suprir as omissões da lei, consubstanciam-se em:",
                options: [
                    "Cláusulas estipuladas unilateralmente pelos bancos nos contratos padrão.",
                    "Ideias fundamentais e valores informadores da ordem jurídica que orientam todo o sistema legal.",
                    "Regras administrativas editadas pelos tribunais locais de segunda instância.",
                    "Prazos processuais contados em dias úteis no Código de Processo Civil."
                ],
                correct: 1,
                explanation: "Os princípios gerais de direito são diretrizes fundamentais que informam e orientam o sistema jurídico e podem ser utilizados para integrar a lei omissa, conforme o art. 4º da LINDB."
            },
            {
                id: 82,
                topic: "Arts. 4º e 5º LINDB",
                difficulty: "Difícil",
                text: "Ao interpretar um contrato de locação sob a égide do Art. 5º da LINDB, o juiz afastou o despejo imediato de uma entidade beneficente sem fins lucrativos que prestava atendimento médico gratuito à comunidade, concedendo prazo razoável para desocupação com amparo nos fins sociais da norma. Essa postura hermenêutica do magistrado traduz a aplicação do método de interpretação:",
                options: [
                    "Gramatical ou literal estrito.",
                    "Sociológico e teleológico (voltado às exigências do bem comum e fins sociais).",
                    "Histórico evolutivo absolutista.",
                    "Exclusivamente analógico infraconstitucional."
                ],
                correct: 1,
                explanation: "A interpretação teleológica considera a finalidade da norma; a sociológica a compreende em seu contexto social. Ambas se harmonizam com o art. 5º da LINDB, que determina atenção aos fins sociais e ao bem comum."
            },
            {
                id: 83,
                topic: "Arts. 4º e 5º LINDB",
                difficulty: "Médio",
                text: "Assinale a opção que indica a ordem de métodos de integração da lei previstos expressamente no texto do Art. 4º da LINDB:",
                options: [
                    "1º Principios gerais; 2º Analogia; 3º Costumes.",
                    "1º Analogia; 2º Costumes; 3º Princípios gerais de direito.",
                    "1º Costumes; 2º Doutrina; 3º Jurisprudência.",
                    "1º Equidade; 2º Analogia; 3º Jurisprudência estatal."
                ],
                correct: 1,
                explanation: "O art. 4º da LINDB enumera, nessa ordem, analogia, costumes e princípios gerais de direito como recursos para decidir quando a lei for omissa. A alternativa reproduz a sequência do dispositivo."
            },
            {
                id: 84,
                topic: "Arts. 4º e 5º LINDB",
                difficulty: "Médio",
                text: "Não se confunde analogia com interpretação extensiva. A analogia destina-se a suprir uma lacuna da lei (ausência de norma). Já a interpretação extensiva ocorre quando:",
                options: [
                    "A lei diz menos do que pretendia, devendo o intérprete ampliar o alcance do texto para abranger a hipótese.",
                    "A lei é revogada por costume contra legem em tempo inferior ao da vacatio legis.",
                    "A sentença arbitral é submetida ao STJ para homologação prévia.",
                    "O juiz aplica norma inconstitucional com efeitos ex nunc."
                ],
                correct: 0,
                explanation: "Na interpretação extensiva, há norma aplicável, mas seu texto deve ser compreendido em alcance compatível com a finalidade normativa. Na analogia, falta regra para o caso e integra-se a lacuna com a disciplina de hipótese semelhante."
            },

            // --- TEMPO: ATO JURÍDICO PERFEITO, DIREITO ADQUIRIDO E COISA JULGADA - ART. 6º LINDB (85-92) ---
            {
                id: 85,
                topic: "Art. 6º LINDB",
                difficulty: "Médio",
                text: "A lei em vigor possui efeito imediato e geral. Todavia, o Art. 6º da LINDB estipula que a aplicação da lei nova no tempo deverá respeitar imperativamente três garantias fundamentais da segurança jurídica. Trata-se do denominado trio do Art. 6º, composto por:",
                options: [
                    "Autotutela, autocomposição e heterocomposição.",
                    "Ato jurídico perfeito, direito adquirido e coisa julgada.",
                    "Analogia, costumes e princípios gerais de direito.",
                    "Ab-rogação, derrogação e repristinação."
                ],
                correct: 1,
                explanation: "O art. 6º da LINDB determina que a lei em vigor tem efeito imediato e geral, respeitados o ato jurídico perfeito, o direito adquirido e a coisa julgada. A mesma proteção está prevista no art. 5º, XXXVI, da Constituição Federal."
            },
            {
                id: 86,
                topic: "Art. 6º LINDB",
                difficulty: "Difícil",
                text: "Em 2015, João assinou e quitou integralmente um contrato de financiamento de imóvel sob o império da Lei A, realizando a escritura pública. Em 2024, entra em vigor a Lei B alterando os requisitos formais de validade dos contratos imobiliários e exigindo nova certidão cartorária retroativa sob pena de nulidade. A pretensão de aplicar a Lei B ao contrato de João é indevida porque violaria o instituto do:",
                options: [
                    "Direito adquirido à repristinação.",
                    "Ato jurídico perfeito (ato já consumado segundo a lei vigente ao tempo em que se efetuou).",
                    "Princípio do desforço imediato derivado da heterocomposição.",
                    "Direito de vacatio legis do promitente comprador."
                ],
                correct: 1,
                explanation: "Nos termos do art. 6º, § 1º, da LINDB, ato jurídico perfeito é o já consumado segundo a lei vigente quando foi praticado. A lei posterior deve respeitar essa situação constituída."
            },
            {
                id: 87,
                topic: "Art. 6º LINDB",
                difficulty: "Difícil",
                text: "Servidor público preencheu integralmente no ano de 2020 todos os requisitos legais previstos na lei para requerer a sua aposentadoria por tempo de serviço. Em 2022, antes que ele desse entrada no requerimento formal, entrou em vigor uma Reforma da Previdência que aumentou em 5 anos o requisito temporal. Segundo a jurisprudência consolidada e o Art. 6º, § 2º da LINDB, o servidor possui:",
                options: [
                    "Mera expectativa de direito sem proteção jurídica perante a lei nova.",
                    "Direito adquirido, pois já havia preenchido todos os requisitos legais exigidos para o exercício do direito.",
                    "Coisa julgada administrativa impeditiva de qualquer alteração legislativa posterior.",
                    "Direito à repristinação da lei antiga por meio do STJ."
                ],
                correct: 1,
                explanation: "O art. 6º, § 2º, da LINDB considera adquirido o direito cujo titular já possa exercer, bem como aquele cujo exercício tenha termo prefixo ou condição preestabelecida inalterável. A análise depende do preenchimento dos requisitos sob a lei aplicável."
            },
            {
                id: 88,
                topic: "Art. 6º LINDB",
                difficulty: "Médio",
                text: "Uma decisão judicial em processo civil transitou em julgado em 2021, fixando a condenação do réu. Em 2023, foi promulgada lei nova eliminando a responsabilidade civil para aquele tipo de conduta. O autor da ação exigiu a execução do valor. O réu argumentou que a lei nova extinguiu a dívida. Com base no Art. 6º, § 3º da LINDB, a alegação do réu é improcedente em razão da:",
                options: [
                    "Coisa julgada (decisão judicial de que já não cabe recurso).",
                    "Vacatio legis especial concedida pela LINDB ao autor.",
                    "Analogia legis aplicável aos casos pendentes de arbitragem.",
                    "Ab-rogação tácita do provimento jurisdicional ex tunc."
                ],
                correct: 0,
                explanation: "O art. 6º, § 3º, da LINDB define coisa julgada como a decisão judicial de que já não cabe recurso. A proteção impede que a lei nova, por si só, desfaça a decisão transitada em julgado."
            },
            {
                id: 89,
                topic: "Art. 6º LINDB",
                difficulty: "Médio",
                text: "Qual é a regra geral do ordenamento jurídico brasileiro referente à aplicação da lei no tempo?",
                options: [
                    "Efeito retroativo irrestrito (as leis sempre retroagem para alterar o passado).",
                    "Efeito imediato e geral (a lei nova aplica-se a partir de sua vigência para o futuro, respeitando os atos passados protegidios).",
                    "Efeito ultrativo perpétuo de todas as leis revogadas.",
                    "Efeito repristinatório diferido por 3 meses."
                ],
                correct: 1,
                explanation: "O caput do art. 6º da LINDB prevê a aplicação imediata e geral da lei em vigor, preservando o ato jurídico perfeito, o direito adquirido e a coisa julgada. Essa proteção delimita a incidência da lei nova sobre situações anteriores."
            },
            {
                id: 90,
                topic: "Art. 6º LINDB",
                difficulty: "Difícil",
                text: "Distinga 'Direito Adquirido' de 'Mera Expectativa de Direito':",
                options: [
                    "No direito adquirido os requisitos do surgimento do direito foram totalmente preenchidos; na expectativa de direito há apenas uma esperança subordinada a requisitos futuros não preenchidos.",
                    "No direito adquirido há dependência de homologação pelo STJ; na expectativa de direito há decisão judicial irrecorrível.",
                    "Ambos gozam do mesmo nível de proteção constitucional perante as leis novas.",
                    "A mera expectativa de direito decorre do ato jurídico perfeito consumado."
                ],
                correct: 0,
                explanation: "Direito adquirido é aquele cujos requisitos legais já foram preenchidos e que se incorporou à esfera jurídica do titular. Expectativa de direito é a possibilidade de aquisição futura ainda dependente de requisito não satisfeito."
            },
            {
                id: 91,
                topic: "Art. 6º LINDB",
                difficulty: "Médio",
                text: "Macete de memorização cobrado em provas para o Art. 6º da LINDB:\nArt. 6º = A + D + C.\nAs letras correspondem, respectivamente, a:",
                options: [
                    "Ab-rogação + Derrogação + Caducidade.",
                    "Ato jurídico perfeito + Direito adquirido + Coisa julgada.",
                    "Analogia + Doutrina + Costumes.",
                    "Autotutela + Desforço + Conciliação."
                ],
                correct: 1,
                explanation: "O art. 6º da LINDB protege três situações: ato jurídico perfeito, direito adquirido e coisa julgada. Essa correspondência explica a alternativa que reúne esses institutos."
            },
            {
                id: 92,
                topic: "Art. 6º LINDB",
                difficulty: "Difícil",
                text: "Um contrato de prestação de serviços continuados firmado sob a égide da Lei X previa parcelas mensais vincendas durante 5 anos. No 2º ano, surge a Lei Y alterando a taxa de juros futura de mora dos pagamentos do ano subsequente. Tratando-se de efeitos futuros de contratos em curso (efeitos pendentes), a incidência da lei nova sem retroatividade às parcelas passadas traduz o conceito de:",
                options: [
                    "Retroatividade máxima inconstitucional.",
                    "Retroatividade mínima (ou aplicação imediata às prestações futuras do negócio em curso).",
                    "Repristinação tácita diferida.",
                    "Heterocomposição contratual sumária."
                ],
                correct: 1,
                explanation: "A lei nova pode ter aplicação imediata aos efeitos futuros de uma relação jurídica em curso, sem por isso desfazer prestações já consumadas. A incidência deve respeitar os limites do art. 6º da LINDB, especialmente a proteção do ato jurídico perfeito."
            },

            // --- ESPAÇO: PROVA DO FATO, LEI ESTRANGEIRA E SENTENÇA ESTRANGEIRA - ARTS. 13, 14 E 15 (93-100) ---
            {
                id: 93,
                topic: "Arts. 13, 14 e 15 LINDB",
                difficulty: "Médio",
                text: "Em um litígio de direito empresarial julgado perante a Justiça brasileira, debate-se a comprovação de um contrato verbal celebrado na França. Nos termos do Art. 13 da LINDB, a prova dos fatos ocorridos em país estrangeiro rege-se quanto ao ônus e aos meios de produzir a prova pela:",
                options: [
                    "Lei brasileira exclusivamente, vedada qualquer consulta à legislação do local do ato.",
                    "Lei do país em que ocorreu o fato, ressalvando-se que os tribunais brasileiros não admitem provas que a lei brasileira desconheça.",
                    "Regra estipulada pela Corte Interamericana de Direitos Humanos.",
                    "Decisão discricionária irrecorrível do embaixador do Brasil no exterior."
                ],
                correct: 1,
                explanation: "O art. 13 da LINDB determina que a prova dos fatos ocorridos em país estrangeiro se rege pela lei lá vigente quanto ao ônus e aos meios de produção, vedando aos tribunais brasileiros provas que a lei brasileira desconheça."
            },
            {
                id: 94,
                topic: "Arts. 13, 14 e 15 LINDB",
                difficulty: "Médio",
                text: "Durante o trâmite de uma ação probatória na 2ª Vara Cível do Rio de Janeiro, o réu invocou em sua defesa o texto de uma legislação da Alemanha. O magistrado brasileiro declarou desconhecer a referida lei estrangeira. Segundo o Art. 14 da LINDB, o juiz poderá:",
                options: [
                    "Extinguir o processo imediatamente sem julgamento do mérito por falta de jurisdição.",
                    "Exigir de quem a invoca a prova do texto e da vigência da lei estrangeira.",
                    "Aplicar compulsoriamente os costumes locais do município do Rio de Janeiro.",
                    "Remeter os autos do processo para julgamento perante o Tribunal de Haia."
                ],
                correct: 1,
                explanation: "Conforme o art. 14 da LINDB, se o juiz não conhecer a lei estrangeira invocada, poderá exigir da parte que a alegou prova de seu texto e de sua vigência."
            },
            {
                id: 95,
                topic: "Arts. 13, 14 e 15 LINDB",
                difficulty: "Difícil",
                text: "Para que uma sentença judicial proferida por tribunal da Itália tenha eficácia e possa ser executada no Brasil, o Art. 15 da LINDB elenca os requisitos formais. Com a atualização da Constituição Federal de 1988 (Art. 105, I, 'i'), qual órgão judiciário brasileiro possui a competência constitucional exclusiva para realizar a HOMOLOGAÇÃO de sentença estrangeira?",
                options: [
                    "Supremo Tribunal Federal (STF).",
                    "Superior Tribunal de Justiça (STJ).",
                    "Conselho Nacional de Justiça (CNJ).",
                    "Tribunal Regional Federal da 1ª Região (TRF-1)."
                ],
                correct: 1,
                explanation: "Após a Emenda Constitucional nº 45/2004, compete ao Superior Tribunal de Justiça homologar sentenças estrangeiras e conceder exequatur às cartas rogatórias, nos termos do art. 105, I, i, da Constituição Federal."
            },
            {
                id: 96,
                topic: "Arts. 13, 14 e 15 LINDB",
                difficulty: "Difícil",
                text: "Memorização essencial ressaltada no quadro final de estudo da LINDB para os artigos 13, 14 e 15:\n- Art. 13 ➔ _________\n- Art. 14 ➔ _________\n- Art. 15 ➔ _________\nAssinale a alternativa que preenche correta e respectivamente as lacunas:",
                options: [
                    "FATO estrangeiro | LEI estrangeira | SENTENÇA estrangeira.",
                    "LEI estrangeira | SENTENÇA estrangeira | FATO estrangeiro.",
                    "SENTENÇA estrangeira | FATO estrangeiro | LEI estrangeira.",
                    "VACATIO estrangeira | REPRISTINAÇÃO estrangeira | DERROGAÇÃO estrangeira."
                ],
                correct: 0,
                explanation: "A distinção corresponde aos dispositivos da LINDB: o art. 13 trata da prova de fato ocorrido no exterior; o art. 14, da prova do texto e da vigência de lei estrangeira; e o art. 15, da execução de sentença estrangeira, observada a competência constitucional do STJ para homologação."
            },
            {
                id: 97,
                topic: "Arts. 13, 14 e 15 LINDB",
                difficulty: "Médio",
                text: "Em matéria de prova de fatos ocorridos no exterior (Art. 13 da LINDB), imagine que em determinado país seja permitida a obtenção de prova probatória mediante tortura ou violação da intimidade psíquica. Se uma das partes apresentar essa prova em tribunal brasileiro, o magistrado:",
                options: [
                    "Deverá admiti-la obrigatoriamente por ter sido produzida sob a lei do país do fato.",
                    "Não poderá admiti-la, pois os tribunais brasileiros não admitem provas desconhecidas ou repudiadas pelo direito brasileiro e pela ordem pública.",
                    "Deverá remeter a prova para ser homologada previamente pelo STJ.",
                    "Poderá admiti-la unicamente se o réu for estrangeiro não domiciliado no Brasil."
                ],
                correct: 1,
                explanation: "O art. 13 da LINDB admite a prova de fatos ocorridos no exterior segundo a lei do lugar, mas ressalva que os tribunais brasileiros não aceitarão meios de prova desconhecidos pela lei brasileira. Essa é a limitação expressa relevante para o caso."
            },
            {
                id: 98,
                topic: "Arts. 13, 14 e 15 LINDB",
                difficulty: "Difícil",
                text: "Assinale a opção que indica requisitos indispensáveis previstos no Art. 15 da LINDB para a execução no Brasil de sentença proferida no exterior:",
                options: [
                    "Haver sido proferida por autoridade competente, citação regular das partes ou revelia legal, trânsito em julgado e tradução por intérprete autorizado.",
                    "Aprovação prévia por maioria qualificada do Congresso Nacional.",
                    "Registro compulsório no Ministério das Relações Exteriores em até 30 dias.",
                    "Depósito prévio de caução em valor correspondente ao quádruplo do débito litigioso."
                ],
                correct: 0,
                explanation: "O art. 15 da LINDB enumera requisitos para a execução de sentença estrangeira no Brasil, incluindo competência da autoridade de origem, citação ou revelia, trânsito em julgado, formalidades exigidas no país de origem e tradução oficial. A homologação compete atualmente ao STJ, conforme a Constituição Federal."
            },
            {
                id: 99,
                topic: "Arts. 13, 14 e 15 LINDB",
                difficulty: "Médio",
                text: "Se uma parte em processo judicial alegar o teor do direito estrangeiro (ex.: direito civil da Argentina) e o juiz exigir a prova desse texto e vigência, essa prova poderá ser realizada por meio de:",
                options: [
                    "Certidões consulares, pareceres de juristas especializados ou exemplares oficiais da legislação daquele país.",
                    "Exclusivamente depoimento pessoal oral do embaixador estrangeiro em audiência no STJ.",
                    "Certidão do cartório de notas da comarca do foro da capital do Estado.",
                    "Auto de arrematação extrajudicial."
                ],
                correct: 0,
                explanation: "O art. 14 da LINDB permite que o juiz exija da parte que invoca lei estrangeira a prova de seu texto e de sua vigência. Essa demonstração pode apoiar-se em fontes oficiais ou outros elementos idôneos, conforme o caso."
            },
            {
                id: 100,
                topic: "Arts. 13, 14 e 15 LINDB",
                difficulty: "Difícil",
                text: "Suponha que uma sentença homologada proveniente do exterior ofenda abertamente a soberania nacional, os bons costumes e a ordem pública brasileira. Qual é o impedimento legal para sua eficácia no Brasil?",
                options: [
                    "O Art. 17 da LINDB estabelece expressamente que as leis, atos e sentenças de outro país não terão eficácia no Brasil quando ofenderem a soberania nacional, a ordem pública e os bons costumes.",
                    "A sentença dependerá apenas de autorização do prefeito da cidade de execução.",
                    "Não há qualquer impedimento, pois o direito internacional sobrepõe-se à ordem pública interna.",
                    "A sentença sofrerá repristinação ex officio pelo Tribunal Regional Federal."
                ],
                correct: 0,
                explanation: "O art. 17 da LINDB impede que leis, atos, sentenças estrangeiras ou declarações de vontade produzam efeitos no Brasil quando ofenderem a soberania nacional, a ordem pública ou os bons costumes. A norma estabelece o limite de ordem pública à eficácia interna desses atos."
            }
        ];

        /* ==========================================================================
           APPLICATION STATE MANAGEMENT & PERSISTENCE (localStorage)
           ========================================================================== */

        const STORAGE_KEY = "simulado_lindb_fgv_state_v2";
        const STATE_SCHEMA_VERSION = 3;

        function shuffleItems(items) {
            const shuffled = [...items];
            for (let index = shuffled.length - 1; index > 0; index--) {
                const randomIndex = Math.floor(Math.random() * (index + 1));
                [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
            }
            return shuffled;
        }

        function createQuizState() {
            const questionOrder = questionsData.map(question => question.id);
            const optionOrders = {};
            let previousCorrectPosition = -1;

            questionOrder.forEach(questionId => {
                const question = questionsData.find(item => item.id === questionId);
                const optionOrder = shuffleItems(question.options.map((_, index) => index));
                const correctPosition = optionOrder.indexOf(question.correct);

                if (correctPosition === previousCorrectPosition) {
                    const availablePositions = optionOrder
                        .map((_, index) => index)
                        .filter(index => index !== previousCorrectPosition);
                    const replacementPosition = shuffleItems(availablePositions)[0];
                    [optionOrder[correctPosition], optionOrder[replacementPosition]] =
                        [optionOrder[replacementPosition], optionOrder[correctPosition]];
                }

                optionOrders[questionId] = optionOrder;
                previousCorrectPosition = optionOrder.indexOf(question.correct);
            });

            return {
                schemaVersion: STATE_SCHEMA_VERSION,
                currentIndex: 0,
                questionOrder,
                optionOrders,
                userAnswers: {},
                results: {}
            };
        }

        function isValidPermutation(order, expectedValues) {
            return Array.isArray(order)
                && order.length === expectedValues.length
                && new Set(order).size === expectedValues.length
                && expectedValues.every(value => order.includes(value));
        }

        // Application State Object
        let state = createQuizState();

        function normalizeState(raw) {
            if (!raw || typeof raw !== 'object') return null;

            const questionIds = questionsData.map(question => question.id);
            const hasCanonicalQuestionOrder = Array.isArray(raw.questionOrder)
                && raw.questionOrder.every((questionId, index) => questionId === questionIds[index]);
            const hasValidQuestionOrder = isValidPermutation(raw.questionOrder, questionIds);
            const hasValidOptionOrders = hasValidQuestionOrder && questionsData.every(question =>
                isValidPermutation(raw.optionOrders?.[question.id], question.options.map((_, index) => index))
            );
            const needsMigration = raw.schemaVersion !== STATE_SCHEMA_VERSION
                || !hasCanonicalQuestionOrder
                || !hasValidOptionOrders;
            const quizState = !needsMigration
                ? {
                    questionOrder: raw.questionOrder,
                    optionOrders: raw.optionOrders
                }
                : createQuizState();
            const sourceOrder = hasValidQuestionOrder ? raw.questionOrder : questionIds;
            const oldIndex = Number.isInteger(raw.currentIndex) ? raw.currentIndex : 0;
            const currentQuestionId = sourceOrder[Math.max(0, Math.min(oldIndex, sourceOrder.length - 1))];
            const currentIndex = Math.max(0, quizState.questionOrder.indexOf(currentQuestionId));
            const userAnswers = raw.userAnswers && typeof raw.userAnswers === 'object' ? raw.userAnswers : {};
            const results = raw.results && typeof raw.results === 'object' ? raw.results : {};

            if (needsMigration) {
                questionsData.forEach(question => {
                    const oldOptionOrder = hasValidOptionOrders
                        ? raw.optionOrders[question.id]
                        : question.options.map((_, index) => index);
                    const newOptionOrder = quizState.optionOrders[question.id];

                    if (Number.isInteger(userAnswers[question.id])) {
                        const originalOption = oldOptionOrder[userAnswers[question.id]];
                        userAnswers[question.id] = newOptionOrder.indexOf(originalOption);
                    }
                    if (results[question.id] && Number.isInteger(results[question.id].selected)) {
                        const originalOption = oldOptionOrder[results[question.id].selected];
                        results[question.id].selected = newOptionOrder.indexOf(originalOption);
                    }
                });
            }

            return {
                schemaVersion: STATE_SCHEMA_VERSION,
                currentIndex,
                questionOrder: quizState.questionOrder,
                optionOrders: quizState.optionOrders,
                userAnswers,
                results
            };
        }

        // Load State from LocalStorage
        function loadSavedState() {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    const normalized = normalizeState(parsed);
                    if (normalized) {
                        state = normalized;
                    }
                } catch (e) {
                    console.error("Erro ao carregar estado do localStorage", e);
                }
            }
        }

        // Save State to LocalStorage
        function saveState() {
            const normalizedState = normalizeState(state);
            if (!normalizedState) return;

            state = normalizedState;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            updateMetricsUI();
        }

        // Calculate Score Statistics
        function getStats() {
            const total = questionsData.length;
            const answeredKeys = Object.keys(state.results);
            const answeredCount = answeredKeys.length;
            let correctCount = 0;
            let errorCount = 0;

            answeredKeys.forEach(qId => {
                if (state.results[qId].isCorrect) {
                    correctCount++;
                } else {
                    errorCount++;
                }
            });

            const remainingCount = total - answeredCount;
            const progressPct = ((answeredCount / total) * 100).toFixed(1);
            const correctPct = answeredCount > 0 ? ((correctCount / answeredCount) * 100).toFixed(1) : "0.0";
            const errorPct = answeredCount > 0 ? ((errorCount / answeredCount) * 100).toFixed(1) : "0.0";
            const overallPct = answeredCount > 0 ? ((correctCount / total) * 100).toFixed(1) : "0.0";

            return {
                total,
                answeredCount,
                correctCount,
                errorCount,
                remainingCount,
                progressPct,
                correctPct,
                errorPct,
                overallPct
            };
        }

        /* ==========================================================================
           UI RENDERING & DOM INTERACTION
           ========================================================================== */

        // DOM Elements
        const elQuestionText = document.getElementById("question-text");
        const elOptionsContainer = document.getElementById("options-container");
        const elBadgeQuestionNum = document.getElementById("badge-question-num");
        const elBadgeDifficulty = document.getElementById("badge-difficulty");
        const elBadgeTopic = document.getElementById("badge-topic");
        const elQuestionStatusTag = document.getElementById("question-status-tag");
        const elExplanationBox = document.getElementById("explanation-box");
        const elExplanationTitle = document.getElementById("explanation-title");
        const elExplanationText = document.getElementById("explanation-text");

        const elBtnPrev = document.getElementById("btn-prev-q");
        const elBtnNext = document.getElementById("btn-next-q");
        const elBtnSubmit = document.getElementById("btn-submit-answer");

        // Metrics elements
        const elStatProgressPct = document.getElementById("stat-progress-pct");
        const elProgressBarFill = document.getElementById("progress-bar-fill");
        const elStatAnsweredCount = document.getElementById("stat-answered-count");
        const elStatRemainingCount = document.getElementById("stat-remaining-count");
        const elStatCorrectCount = document.getElementById("stat-correct-count");
        const elStatCorrectPct = document.getElementById("stat-correct-pct");
        const elStatErrorCount = document.getElementById("stat-error-count");
        const elStatErrorPct = document.getElementById("stat-error-pct");
        const elStatOverallPct = document.getElementById("stat-overall-pct");

        // Views & Modals
        const elViewQuestion = document.getElementById("view-question");
        const elViewResult = document.getElementById("view-result");
        const elModalGrid = document.getElementById("modal-grid");
        const elGridButtonsContainer = document.getElementById("grid-buttons-container");
        const elModalConfirmReset = document.getElementById("modal-confirm-reset");

        // Render Current Question
        function renderQuestion(index) {
            if (index < 0 || index >= questionsData.length) return;

            state.currentIndex = index;
            saveState();

            const q = questionsData.find(question => question.id === state.questionOrder[index]);
            const optionOrder = state.optionOrders[q.id];
            const correctOption = optionOrder.indexOf(q.correct);
            const answeredResult = state.results[q.id];
            const isAnswered = !!answeredResult;
            const selectedOption = isAnswered ? answeredResult.selected : state.userAnswers[q.id];
            const answeredCount = Object.keys(state.results).length;

            // Update Header Badges
            const displayedQuestionNumber = String(index + 1).padStart(2, "0");
            elBadgeQuestionNum.innerText = `Questão ${displayedQuestionNumber} de ${questionsData.length}`;
            elBadgeDifficulty.innerText = `Nível ${q.difficulty}`;
            elBadgeTopic.innerText = q.topic || "LINDB";

            // Status Tag
            if (isAnswered) {
                elQuestionStatusTag.classList.remove("hidden");
                if (answeredResult.isCorrect) {
                    elQuestionStatusTag.className =
                        "text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-sm";
                    elQuestionStatusTag.innerHTML =
                        `<i class="fa-solid fa-circle-check text-emerald-600"></i> Respondida: CORRETA`;
                } else {
                    elQuestionStatusTag.className =
                        "text-[11px] font-bold px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-300 shadow-sm";
                    elQuestionStatusTag.innerHTML =
                        `<i class="fa-solid fa-circle-xmark text-rose-600"></i> Respondida: INCORRETA`;
                }
            } else {
                elQuestionStatusTag.classList.add("hidden");
            }

            // Question Text
            elQuestionText.innerHTML = `<span class="font-bold text-slate-900 mr-2">${displayedQuestionNumber}.</span> ${q.text}`;
            elQuestionText.classList.add("animate-[fadeIn_.2s_ease]", "transition-all");

            // Options Rendering
            elOptionsContainer.innerHTML = "";
            const letters = ["A", "B", "C", "D"];

            q.options.forEach((optText, optIdx) => {
                const optionBtn = document.createElement("button");
                optionBtn.type = "button";

                let btnClasses =
                    "option-card w-full text-left p-4 rounded-xl border flex items-start gap-3 transition-all relative ";

                if (isAnswered) {
                    optionBtn.classList.add("disabled");
                    optionBtn.disabled = true;

                    if (optIdx === correctOption) {
                        // Correct Option
                        btnClasses +=
                            "bg-emerald-50/90 border-emerald-500 text-emerald-950 font-medium ring-2 ring-emerald-500/20";
                    } else if (optIdx === selectedOption && !answeredResult.isCorrect) {
                        // User Wrong Selection
                        btnClasses +=
                            "bg-rose-50/90 border-rose-400 text-rose-950 font-medium ring-2 ring-rose-400/20";
                    } else {
                        // Neutral/Disabled
                        btnClasses += "bg-slate-50 border-slate-200 text-slate-500 opacity-60";
                    }
                } else {
                    // Unanswered state
                    if (selectedOption === optIdx) {
                        btnClasses +=
                            "bg-blue-50/80 border-fgv-accent text-slate-900 font-medium shadow-sm ring-2 ring-blue-500/20";
                    } else {
                        btnClasses +=
                            "bg-white border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-50/80";
                    }
                }

                optionBtn.className = btnClasses;

                // Letter Badge
                let letterBg = "bg-slate-100 text-slate-700 border-slate-300";
                if (isAnswered) {
                    if (optIdx === correctOption) letterBg =
                        "bg-emerald-600 text-white border-emerald-700 font-bold";
                    else if (optIdx === selectedOption && !answeredResult.isCorrect) letterBg =
                        "bg-rose-600 text-white border-rose-700 font-bold";
                } else if (selectedOption === optIdx) {
                    letterBg = "bg-fgv-accent text-white border-blue-700 font-bold";
                }

                optionBtn.innerHTML = `
          <span class="w-7 h-7 rounded-lg text-xs flex items-center justify-center font-bold border flex-shrink-0 ${letterBg}">
            ${letters[optIdx]}
          </span>
          <span class="text-sm leading-relaxed pt-0.5">${q.options[optionOrder[optIdx]]}</span>
        `;

                optionBtn.addEventListener("click", () => {
                    if (isAnswered) return;
                    state.userAnswers[q.id] = optIdx;
                    saveState();
                    renderQuestion(state.currentIndex);
                });

                elOptionsContainer.appendChild(optionBtn);
            });

            // Submit Button State
            if (isAnswered) {
                elBtnSubmit.disabled = true;
                elBtnSubmit.classList.add("hidden");
            } else {
                elBtnSubmit.classList.remove("hidden");
                elBtnSubmit.disabled = (selectedOption === undefined);
            }

            // Prev / Next Buttons
            elBtnPrev.disabled = (index === 0);
            const canAdvance = isAnswered || selectedOption !== undefined;
            elBtnNext.disabled = !canAdvance;
            elBtnNext.title = !canAdvance ? 'Selecione uma alternativa antes de continuar' : 'Avançar para a próxima questão';
            elBtnNext.innerHTML = (index === questionsData.length - 1) ?
                `Finalizar <i class="fa-solid fa-flag-checkered"></i>` :
                `Próxima <i class="fa-solid fa-arrow-right"></i>`;

            // Explanation Box
            if (isAnswered) {
                elExplanationBox.classList.remove("hidden");
                if (answeredResult.isCorrect) {
                    elExplanationBox.className =
                        "mt-6 p-5 rounded-2xl border bg-emerald-50/80 border-emerald-200 text-emerald-900";
                    elExplanationTitle.className = "flex items-center gap-2 font-bold text-sm text-emerald-800 mb-2";
                    elExplanationTitle.innerHTML =
                        `<i class="fa-solid fa-circle-check text-emerald-600"></i> Resposta CORRETA! (Sua escolha: Alternativa ${letters[selectedOption]})`;
                } else {
                    elExplanationBox.className =
                        "mt-6 p-5 rounded-2xl border bg-rose-50/80 border-rose-200 text-rose-900";
                    elExplanationTitle.className = "flex items-center gap-2 font-bold text-sm text-rose-800 mb-2";
                    elExplanationTitle.innerHTML =
                        `<i class="fa-solid fa-circle-xmark text-rose-600"></i> Resposta INCORRETA. (Você marcou ${letters[selectedOption]}, Correta: ${letters[correctOption]})`;
                }

                elExplanationText.innerHTML = `
          <p class="font-semibold text-slate-800 mb-1">Fundamentação da resposta</p>
          <p class="text-slate-700 leading-relaxed text-sm">${q.explanation}</p>
        `;
            } else {
                elExplanationBox.classList.add("hidden");
            }

            // Check if view should switch
            elViewQuestion.classList.remove("hidden");
            elViewResult.classList.add("hidden");
        }

        // Submit Answer Event
        function handleAnswerSubmit() {
            const q = questionsData.find(question => question.id === state.questionOrder[state.currentIndex]);
            const chosen = state.userAnswers[q.id];
            const correctOption = state.optionOrders[q.id].indexOf(q.correct);

            if (chosen === undefined) {
                elBtnSubmit.disabled = true;
                return;
            }

            const isCorrect = (chosen === correctOption);
            state.results[q.id] = {
                isCorrect,
                selected: chosen
            };

            delete state.userAnswers[q.id];
            saveState();
            renderQuestion(state.currentIndex);

            if (window.innerWidth < 768) {
                elExplanationBox.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        }

        // Metrics Dashboard UI Update
        function updateMetricsUI() {
            const stats = getStats();

            elStatProgressPct.innerText = `${stats.progressPct}%`;
            elProgressBarFill.style.width = `${stats.progressPct}%`;

            elStatAnsweredCount.innerText = `${stats.answeredCount} de ${stats.total} respondidas`;
            elStatRemainingCount.innerText = `${stats.remainingCount} restantes`;

            elStatCorrectCount.innerText = stats.correctCount;
            elStatCorrectPct.innerText = `${stats.correctPct}% dos respondidos`;

            elStatErrorCount.innerText = stats.errorCount;
            elStatErrorPct.innerText = `${stats.errorPct}% dos respondidos`;

            elStatOverallPct.innerText = `${stats.overallPct}%`;
        }

        // Populate Navigation Modal Grid
        function renderGridModal() {
            elGridButtonsContainer.innerHTML = "";
            const letters = ["A", "B", "C", "D"];

            state.questionOrder.forEach((questionId, idx) => {
                const q = questionsData.find(question => question.id === questionId);
                const btn = document.createElement("button");
                btn.type = "button";

                const answered = state.results[q.id];
                let btnClasses =
                    "w-10 h-10 rounded-xl text-xs font-bold transition flex flex-col items-center justify-center border relative ";

                if (idx === state.currentIndex) {
                    btnClasses += "ring-2 ring-fgv-accent shadow-md ";
                }

                if (answered) {
                    if (answered.isCorrect) {
                        btnClasses += "bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600";
                    } else {
                        btnClasses += "bg-rose-500 text-white border-rose-600 hover:bg-rose-600";
                    }
                } else {
                    btnClasses += "bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200";
                }

                btn.className = btnClasses;
                const displayedQuestionNumber = String(idx + 1).padStart(2, "0");
                btn.innerText = displayedQuestionNumber;
                btn.setAttribute("aria-label", `Ir para a questão ${displayedQuestionNumber}`);

                btn.addEventListener("click", () => {
                    renderQuestion(idx);
                    elModalGrid.classList.add("hidden");
                });

                elGridButtonsContainer.appendChild(btn);
            });
        }

        // Final Completion Screen
        function showFinalResults() {
            const stats = getStats();

            document.getElementById("res-total").innerText = stats.total;
            document.getElementById("res-correct").innerText = stats.correctCount;
            document.getElementById("res-errors").innerText = stats.errorCount;
            document.getElementById("res-pct").innerText = `${stats.overallPct}%`;

            const feedbackBox = document.getElementById("res-feedback-box");
            const pct = parseFloat(stats.overallPct);

            let msgTitle = "";
            let msgDesc = "";
            let boxBg = "";

            if (pct >= 80) {
                msgTitle = "Desempenho consistente";
                msgDesc =
                    "Seu resultado indica domínio consistente dos temas avaliados neste simulado. Para consolidá-lo, revise as questões que errou e retome, em especial, os dispositivos da LINDB relacionados a esses pontos. O desempenho nesta atividade é uma referência de estudo, não uma previsão de aprovação.";
                boxBg = "bg-emerald-50 border-emerald-200 text-emerald-900";
            } else if (pct >= 60) {
                msgTitle = "Boa base, com pontos a consolidar";
                msgDesc =
                    "O resultado revela uma base em desenvolvimento. Releia as explicações das questões incorretas e priorize repristinação, vigência da lei e aplicação da lei no espaço; depois, refaça questões desses temas para verificar a compreensão. Uma pontuação isolada não determina aprovação.";
                boxBg = "bg-blue-50 border-blue-200 text-blue-900";
            } else {
                msgTitle = "Uma oportunidade para fortalecer a base";
                msgDesc =
                    "Retome os fundamentos antes de uma nova rodada: vigência e revogação das leis (arts. 1º e 2º da LINDB), integração e interpretação (arts. 4º e 5º) e direito intertemporal (art. 6º). Em seguida, revise as questões e resolva novos itens, conferindo a justificativa de cada resposta. Este resultado orienta o estudo; não define seu potencial.";
                boxBg = "bg-amber-50 border-amber-200 text-amber-900";
            }

            feedbackBox.className = `p-5 rounded-2xl mb-8 text-left border ${boxBg}`;
            feedbackBox.innerHTML = `
        <h4 class="font-bold text-base mb-1">${msgTitle}</h4>
        <p class="text-xs leading-relaxed opacity-90">${msgDesc}</p>
      `;

            elViewQuestion.classList.add("hidden");
            elViewResult.classList.remove("hidden");
        }

        // Reset Simulado Logic
        function resetSimulado() {
            localStorage.removeItem(STORAGE_KEY);
            state = createQuizState();
            saveState();
            renderQuestion(0);
            elModalConfirmReset.classList.add("hidden");
        }

        /* ==========================================================================
           EVENT LISTENERS & BINDINGS
           ========================================================================== */

        document.addEventListener("DOMContentLoaded", () => {
            loadSavedState();
            updateMetricsUI();
            renderQuestion(state.currentIndex);

            // Submit Button
            elBtnSubmit.addEventListener("click", handleAnswerSubmit);

            // Prev / Next Navigation
            elBtnPrev.addEventListener("click", () => {
                if (state.currentIndex > 0) {
                    renderQuestion(state.currentIndex - 1);
                }
            });

            elBtnNext.addEventListener("click", () => {
                const currentQuestion = questionsData.find(question => question.id === state.questionOrder[state.currentIndex]);
                const currentSelection = state.userAnswers[currentQuestion.id];
                const currentResult = state.results[currentQuestion.id];
                const canProceed = currentResult || currentSelection !== undefined;

                if (!canProceed) {
                    return;
                }

                if (state.currentIndex < questionsData.length - 1) {
                    renderQuestion(state.currentIndex + 1);
                } else {
                    showFinalResults();
                }
            });

            // Grid Navigation Modal
            document.getElementById("btn-grid-modal").addEventListener("click", () => {
                renderGridModal();
                elModalGrid.classList.remove("hidden");
            });

            document.getElementById("btn-close-grid").addEventListener("click", () => {
                elModalGrid.classList.add("hidden");
            });

            document.getElementById("btn-close-grid-footer").addEventListener("click", () => {
                elModalGrid.classList.add("hidden");
            });

            // Reset Modal
            document.getElementById("btn-reset-simulado").addEventListener("click", () => {
                elModalConfirmReset.classList.remove("hidden");
            });

            document.getElementById("btn-cancel-reset").addEventListener("click", () => {
                elModalConfirmReset.classList.add("hidden");
            });

            document.getElementById("btn-confirm-reset").addEventListener("click", resetSimulado);

            // Final View Buttons
            document.getElementById("btn-review-all").addEventListener("click", () => {
                renderQuestion(0);
            });

            document.getElementById("btn-restart-final").addEventListener("click", () => {
                elModalConfirmReset.classList.remove("hidden");
            });
        });
    