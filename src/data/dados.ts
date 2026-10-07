/**
 * =============================================================================
 * COMO EDITAR ESTE ARQUIVO (dados.js / dados.ts)
 * =============================================================================
 * 1. Este arquivo concentra TODO o conteúdo editável do projeto.
 * 2. Procure o bloco que deseja alterar (use Ctrl+F com o nome da constante).
 * 3. Modifique somente os textos entre aspas.
 * 4. Para adicionar uma característica nova, copie um objeto inteiro dentro
 *    do array "caracteristicas" e ajuste os campos.
 * 5. Para adicionar uma imagem, coloque o arquivo em "public/images/" e
 *    referencie o caminho (ex.: "/images/minha-imagem.jpg"). Se a imagem não
 *    existir, o site continua funcionando normalmente (os componentes tratam
 *    a ausência de imagem).
 * 6. Salve sempre em UTF-8.
 * 7. Os IDs numéricos (ex.: "conexoes: [2, 9]") ligam uma característica a
 *    outra. Ao copiar um bloco novo, use um ID que ainda não exista.
 * 8. O objeto "config" abaixo liga/desliga seções inteiras do site.
 * =============================================================================
 */

export const config = {
  // Exibe a seção inicial (hero) com título, subtítulo e chamada para ação.
  mostrarInicio: true,
  // Exibe a seção com a grade das 20 características literárias.
  mostrarCaracteristicas: true,
  // Exibe a seção dedicada à linguagem (concisão, discurso indireto livre, silêncio).
  mostrarLinguagem: true,
  // Exibe a seção de estrutura (fragmentação, ciclo, repetição, capítulos).
  mostrarEstrutura: true,
  // Exibe a seção do narrador e da focalização.
  mostrarNarrador: true,
  // Exibe a seção de espaço e tempo narrativo.
  mostrarEspacoTempo: true,
  // Exibe a seção sobre Modernismo, regionalismo, realismo social, símbolos e estilo.
  mostrarModernismo: true,
  // Exibe a seção de conexões (fluxos comparativos + mapa interativo).
  mostrarConexoes: true,
  // Exibe o glossário literário.
  mostrarGlossario: true,
  // Exibe o quiz de características.
  mostrarQuiz: true,
  // Exibe as referências bibliográficas.
  mostrarReferencias: true,
  // Define o layout da grade de características: "grid" (cartões) é o padrão.
  layoutCaracteristicas: "grid" as const,
  // Quantidade de perguntas exibidas por vez no quiz (paginação simples).
  perguntasPorPagina: 10,
};

/* ----------------------------------------------------------------------- */
/* TIPOS                                                                    */
/* ----------------------------------------------------------------------- */

export interface Caracteristica {
  id: number;
  numero: number;
  titulo: string;
  categoria: string;
  resumo: string;
  explicacao: string;
  comoAparece: string;
  importancia: string;
  elementos: string[];
  exemplo: string;
  conexoes: number[];
}

export interface CategoriaMapa {
  id: string;
  nome: string;
  descricao: string;
  caracteristicas: number[];
}

export interface TermoGlossario {
  termo: string;
  definicao: string;
  relacao: string;
  exemplo: string;
}

export interface PerguntaQuiz {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
}

export interface Capitulo {
  nome: string;
  foco: string;
  caracteristicas: string[];
  observacao: string;
}

export interface Referencia {
  tipo: string;
  texto: string;
  url?: string;
}

/* ----------------------------------------------------------------------- */
/* 20 CARACTERÍSTICAS DA OBRA                                               */
/* ----------------------------------------------------------------------- */

export const caracteristicas: Caracteristica[] = [
  {
    id: 1,
    numero: 1,
    titulo: "Regionalismo",
    categoria: "REGIONALISMO",
    resumo:
      "A ambientação no sertão nordestino organiza paisagem, fala e costumes como matéria literária.",
    explicacao:
      "O regionalismo de Vidas Secas não é pitoresco: a paisagem seca, os bichos, os caminhos e os costumes do sertão são incorporados à própria construção da narrativa, moldando enredo, linguagem e comportamento das personagens.",
    comoAparece:
      "Aparece na caatinga, nas fazendas de criação de gado, na seca como força organizadora da vida da família e em uma linguagem que incorpora, com parcimônia, expressões e ritmos da oralidade sertaneja.",
    importancia:
      "É importante porque ancora a obra na geração de 1930 e evita o regionalismo decorativo: aqui a região explica comportamento, silêncio e visão de mundo das personagens.",
    elementos: ["Sertão", "Caatinga", "Oralidade", "Geração de 1930"],
    exemplo:
      "Quando a família atravessa a caatinga em busca de um lugar para viver, a paisagem árida não é pano de fundo: ela determina decisões, ritmo da marcha e o próprio humor dos personagens.",
    conexoes: [13, 14, 17],
  },
  {
    id: 2,
    numero: 2,
    titulo: "Linguagem enxuta",
    categoria: "LINGUAGEM",
    resumo: "A escrita apresenta economia de palavras e descrições precisas, sem adornos.",
    explicacao:
      "Graciliano Ramos elimina adjetivação excessiva, metáforas ornamentais e explicações redundantes. As frases tendem a ser curtas, diretas e construídas por períodos simples, resultando em uma prosa seca que reproduz, no plano estético, a aridez do espaço narrado.",
    comoAparece:
      "Nas descrições de cenas e paisagens, compostas por frases curtas e justapostas, e nas falas das personagens, quase sempre monossilábicas ou incompletas.",
    importancia:
      "Essa concisão não é limitação estilística: é uma escolha deliberada que associa forma e conteúdo, fazendo da própria linguagem um símbolo da escassez que atravessa a obra.",
    elementos: ["Silêncio", "Interioridade", "Dificuldade de comunicação"],
    exemplo:
      "Uma cena de sofrimento é narrada em poucas frases objetivas, sem explicações emocionais extensas — o leitor percebe a dor pela contenção da escrita, não por discursos sobre ela.",
    conexoes: [9, 20, 5],
  },
  {
    id: 3,
    numero: 3,
    titulo: "Narrativa fragmentada",
    categoria: "ESTRUTURA",
    resumo: "A obra é composta por capítulos relativamente autônomos, à maneira de contos ligados.",
    explicacao:
      "Vidas Secas foi originalmente concebida a partir de textos que funcionavam quase como contos independentes, reunidos depois como romance. Cada um dos treze capítulos pode ser lido quase isoladamente, com foco em uma personagem ou episódio específico.",
    comoAparece:
      "Capítulos como “Fabiano”, “Sinha Vitória”, “Baleia” e “Contas” concentram-se em uma personagem ou situação, sem a necessidade estrita de retomar detalhes do capítulo anterior.",
    importancia:
      "Essa fragmentação reforça a sensação de descontinuidade da vida sertaneja retratada e rompe com o modelo de romance linear do século XIX, sendo uma das marcas mais estudadas da obra.",
    elementos: ["Capítulos autônomos", "Descontinuidade", "Composição em mosaico"],
    exemplo:
      "Um crítico já descreveu a obra como um “romance desmontável”: é possível reorganizar mentalmente a ordem de alguns capítulos sem destruir a compreensão do conjunto.",
    conexoes: [4, 19, 16],
  },
  {
    id: 4,
    numero: 4,
    titulo: "Estrutura cíclica",
    categoria: "ESTRUTURA",
    resumo: "A obra começa e termina com a família em marcha, sugerindo um ciclo sem saída definitiva.",
    explicacao:
      "O primeiro capítulo (“Mudança”) narra a chegada da família a uma fazenda; o último (“Fuga”) narra uma nova partida em busca de outro lugar. Essa simetria sugere que a história pode recomeçar indefinidamente.",
    comoAparece:
      "Na repetição da situação de deslocamento, na reaparição de elementos como a fome, a seca e a esperança de uma vida melhor, sempre adiada.",
    importancia:
      "A circularidade transforma a estrutura em comentário sobre a condição social representada: não há progresso linear, apenas repetição de um mesmo padrão de sobrevivência.",
    elementos: ["Retirada", "Repetição", "Fuga", "Permanência"],
    exemplo:
      "Ao final, a família deixa a fazenda tal como havia chegado: sem posses, sem certezas, apenas com a expectativa de encontrar “cidades grandes” — um horizonte tão incerto quanto o inicial.",
    conexoes: [3, 19, 16],
  },
  {
    id: 5,
    numero: 5,
    titulo: "Discurso indireto livre",
    categoria: "NARRADOR",
    resumo: "Pensamentos das personagens se misturam à voz do narrador, sem marcas de citação.",
    explicacao:
      "O discurso indireto livre funde a voz narrativa em terceira pessoa aos pensamentos das personagens, sem verbos de elocução (“ele pensou que”) nem travessões de diálogo. A fronteira entre narrador e consciência da personagem se torna fluida.",
    comoAparece:
      "Em passagens nas quais frases curtas, quase sem nexo lógico aparente, reproduzem o raciocínio truncado de Fabiano ou as dúvidas de Sinha Vitória, sem que o texto marque explicitamente “ele pensou”.",
    importancia:
      "É o recurso que permite ao narrador culto emprestar voz literária a personagens de vocabulário limitado, sem trair a verossimilhança: o leitor acessa uma interioridade que as próprias personagens não conseguiriam verbalizar em voz alta.",
    elementos: ["Interioridade", "Narrador em terceira pessoa", "Verossimilhança"],
    exemplo:
      "Ao observar os filhos brincando, um pensamento confuso sobre o futuro das crianças atravessa a narrativa sem aspas ou verbo introdutório — como se a própria frase do narrador hesitasse junto com a personagem.",
    conexoes: [6, 7, 9],
  },
  {
    id: 6,
    numero: 6,
    titulo: "Foco na interioridade",
    categoria: "FOCALIZAÇÃO",
    resumo: "A narrativa dedica atenção especial aos pensamentos e angústias internas das personagens.",
    explicacao:
      "Ainda que as personagens falem pouco, a narrativa compensa esse silêncio externo com mergulhos frequentes em seus pensamentos, medos, reflexões morais e percepções sobre o mundo.",
    comoAparece:
      "Nos capítulos centrados em uma única personagem, como “Fabiano” e “Sinha Vitória”, que revelam inquietações — vergonha, desejo de dignidade, medo do futuro — raramente expressas em voz alta.",
    importancia:
      "Essa escolha evita que a obra reduza seus personagens a estereótipos regionais; eles ganham complexidade psicológica apesar da pobreza de vocabulário atribuída a eles.",
    elementos: ["Discurso indireto livre", "Psicologismo", "Silêncio externo"],
    exemplo:
      "Fabiano se sente humilhado diante do patrão, mas não verbaliza a indignação; o leitor acompanha esse sentimento apenas pelo acesso que a narrativa concede aos seus pensamentos.",
    conexoes: [5, 15, 20],
  },
  {
    id: 7,
    numero: 7,
    titulo: "Narrador em terceira pessoa",
    categoria: "NARRADOR",
    resumo: "Narrador onisciente que observa a família de fora, mas penetra sua consciência.",
    explicacao:
      "É o único romance de Graciliano Ramos narrado integralmente em terceira pessoa. O narrador mantém certa distância das personagens — necessária para articular uma linguagem culta que elas não dominam —, mas tem acesso privilegiado aos seus pensamentos.",
    comoAparece:
      "Na alternância entre observação externa objetiva (descrição de cenas, ações, paisagem) e mergulhos internos nos pensamentos de cada personagem, capítulo a capítulo.",
    importancia:
      "Essa posição narrativa resolve um problema estético: como narrar a experiência de personagens de fala rarefeita sem artificializar seu discurso. A terceira pessoa com acesso interior permite emprestar forma literária a uma experiência que, de outro modo, permaneceria muda.",
    elementos: ["Discurso indireto livre", "Onisciência", "Distância e aproximação"],
    exemplo:
      "O narrador descreve a postura corporal de Fabiano com precisão quase externa e, na frase seguinte, revela um pensamento íntimo dele — um movimento de aproximação súbita.",
    conexoes: [5, 6, 11],
  },
  {
    id: 8,
    numero: 8,
    titulo: "Descrição objetiva",
    categoria: "ESTILO",
    resumo: "Cenas e ambientes são descritos com precisão quase documental, sem sentimentalismo.",
    explicacao:
      "As descrições evitam comentários emocionais explícitos do narrador. Paisagem, corpo e gesto são apresentados com uma precisão quase fotográfica, deixando o efeito dramático a cargo da própria seleção de detalhes.",
    comoAparece:
      "Em descrições do solo rachado, dos ossos de animais na caatinga, da magreza dos cães e das pessoas — sempre com vocabulário concreto, sem lirismo excessivo.",
    importancia:
      "Esse distanciamento aparente intensifica o impacto emocional por contenção: o leitor é convidado a deduzir o sofrimento a partir de fatos descritos, não de comentários sentimentais.",
    elementos: ["Economia vocabular", "Contenção", "Objetividade"],
    exemplo:
      "A fome da família é sugerida por detalhes físicos — corpos magros, movimentos lentos — e não por frases que declarem diretamente “eles sofriam de fome”.",
    conexoes: [2, 9, 24],
  },
  {
    id: 9,
    numero: 9,
    titulo: "Economia vocabular",
    categoria: "LINGUAGEM",
    resumo: "Vocabulário reduzido e preciso reflete tanto o estilo do autor quanto a condição das personagens.",
    explicacao:
      "Graciliano Ramos é conhecido pela obsessão em cortar palavras supérfluas de seus textos. Em Vidas Secas, essa economia também caracteriza o universo mental das personagens, cujo repertório verbal é limitado pela falta de escolarização e de convívio social amplo.",
    comoAparece:
      "No vocabulário restrito atribuído a Fabiano, que recorre a poucas palavras para expressar sentimentos complexos, e na seleção rigorosa de substantivos e verbos concretos nas descrições.",
    importancia:
      "A escassez vocabular funciona como espelho estético da escassez material e afetiva vivida pela família, reforçando a unidade entre forma e conteúdo.",
    elementos: ["Linguagem enxuta", "Silêncio", "Vocabulário"],
    exemplo:
      "Fabiano tenta, sem sucesso, lembrar palavras difíceis que ouviu uma vez; a lacuna de vocabulário se torna, na narrativa, símbolo de uma exclusão maior.",
    conexoes: [2, 20, 8],
  },
  {
    id: 10,
    numero: 10,
    titulo: "Crítica social integrada à narrativa",
    categoria: "MODERNISMO",
    resumo: "A denúncia social não é discurso explícito, mas decorre da própria construção dos fatos narrados.",
    explicacao:
      "Graciliano evita discursos panfletários. A crítica à exploração do trabalhador rural, ao abuso de autoridade e à desigualdade surge da organização dos episódios — como a cobrança injusta de contas — e não de comentários diretos do narrador.",
    comoAparece:
      "Na cena em que o patrão “erra” os cálculos sempre a seu favor, ou na prisão arbitrária de Fabiano pelo soldado, episódios narrados sem comentário moral explícito do narrador.",
    importancia:
      "Essa estratégia é um traço reconhecido da prosa de 1930: a crítica social se torna característica estética, não discurso político avulso, reforçando o realismo da obra.",
    elementos: ["Realismo social", "Geração de 1930", "Contenção narrativa"],
    exemplo:
      "A disputa de contas entre Fabiano e o patrão é narrada com objetividade; a injustiça fica evidente pela própria lógica dos números, sem necessidade de o narrador declará-la.",
    conexoes: [14, 13, 1],
  },
  {
    id: 11,
    numero: 11,
    titulo: "Relação entre personagem e ambiente",
    categoria: "ESPAÇO",
    resumo: "O ambiente seco molda comportamento, linguagem e perspectiva de mundo das personagens.",
    explicacao:
      "O espaço não é cenário neutro: a aridez do sertão interfere diretamente nas escolhas, no corpo e na psicologia da família, criando uma relação de determinação mútua entre ser humano e meio.",
    comoAparece:
      "No modo como a seca força decisões de deslocamento, no cansaço físico narrado em detalhe, e na maneira como a paisagem hostil é espelhada pela secura emocional das personagens.",
    importancia:
      "Essa relação é central para compreender a obra como regionalista em sentido profundo: a geografia participa da narrativa como força ativa, não apenas decorativa.",
    elementos: ["Sertão", "Determinismo ambiental", "Regionalismo"],
    exemplo:
      "A decisão de abandonar a fazenda não nasce de um desejo abstrato, mas da resposta direta e quase instintiva à escassez de água e pasto.",
    conexoes: [17, 1, 12],
  },
  {
    id: 12,
    numero: 12,
    titulo: "Animalização e humanização",
    categoria: "PERSONAGENS",
    resumo: "A narrativa aproxima comportamento humano e animal, ora rebaixando, ora elevando ambos.",
    explicacao:
      "Personagens humanas são descritas por vezes com traços e reações comparáveis às de animais — resultado da miséria extrema —, enquanto a cadela Baleia recebe tratamento narrativo que lhe atribui afeto, memória e dignidade.",
    comoAparece:
      "Na comparação entre o comportamento de Fabiano e o de um bicho acuado em momentos de medo ou submissão, e no capítulo dedicado a Baleia, que acessa a perspectiva da cadela com a mesma técnica de interiorização usada para os humanos.",
    importancia:
      "Essa inversão de valores é uma das características mais comentadas da obra: evidencia o processo de desumanização produzido pela miséria e amplia, por contraste, a crítica social da narrativa.",
    elementos: ["Baleia", "Desumanização", "Interioridade", "Simbolismo"],
    exemplo:
      "Ao narrar os últimos momentos de Baleia, o texto concede à cadela pensamentos e percepções sensoriais complexas — um recurso raramente oferecido, no mesmo grau, às próprias personagens humanas em determinados momentos.",
    conexoes: [6, 18, 15],
  },
  {
    id: 13,
    numero: 13,
    titulo: "Segunda fase do Modernismo",
    categoria: "MODERNISMO",
    resumo: "A obra integra a geração de 1930, marcada pelo romance regionalista e pela crítica social.",
    explicacao:
      "Vidas Secas (1938) é um marco da chamada segunda fase modernista, período em que o regionalismo se combina a um apuro técnico maior e a um interesse renovado pelos problemas sociais brasileiros.",
    comoAparece:
      "No tratamento da seca, da exploração do trabalhador rural e da desigualdade como temas centrais, somado a um experimentalismo formal discreto (fragmentação, discurso indireto livre).",
    importancia:
      "Situa a obra em diálogo com outros romances de 1930 e demonstra como a estética modernista evoluiu da experimentação inicial (1920) para uma literatura socialmente engajada e tecnicamente refinada.",
    elementos: ["Regionalismo", "Romance de 30", "Crítica social"],
    exemplo:
      "Ao lado de autores como José Lins do Rego e Rachel de Queiroz, Graciliano representa o Nordeste não como cenário exótico, mas como território de problemas sociais concretos.",
    conexoes: [1, 14, 10],
  },
  {
    id: 14,
    numero: 14,
    titulo: "Realismo social",
    categoria: "MODERNISMO",
    resumo: "Pobreza, trabalho e poder aparecem como elementos estruturantes da narrativa, não como pano de fundo.",
    explicacao:
      "A fome, a exploração do vaqueiro pelo patrão, a violência da autoridade pública e a luta pela sobrevivência organizam o enredo e justificam escolhas estilísticas, como a economia da linguagem e a interioridade contida.",
    comoAparece:
      "Nos episódios de prisão arbitrária, na cobrança abusiva de dívidas e no trabalho incessante de Fabiano como vaqueiro, sempre subordinado a decisões de terceiros.",
    importancia:
      "O realismo social de Vidas Secas se diferencia por não depender de discursos diretos: a crítica nasce da organização dos fatos e da precisão da linguagem, o que a tornou referência de técnica realista no romance brasileiro.",
    elementos: ["Crítica social", "Trabalho", "Poder", "Exploração"],
    exemplo:
      "Fabiano é preso sem motivo claro por um soldado; a cena é narrada com objetividade que, paradoxalmente, intensifica a sensação de injustiça.",
    conexoes: [10, 13, 1],
  },
  {
    id: 15,
    numero: 15,
    titulo: "Construção psicológica",
    categoria: "PERSONAGENS",
    resumo: "Personagens de poucas palavras revelam complexidade emocional através da técnica narrativa.",
    explicacao:
      "A psicologia das personagens não é explicada por meio de longos monólogos, mas construída por fragmentos de pensamento, reações físicas e silêncios significativos, captados pelo discurso indireto livre.",
    comoAparece:
      "Nos capítulos individuais dedicados a cada personagem, que revelam camadas de vergonha, desejo de dignidade, ciúme, medo e esperança, mesmo quando a fala é escassa ou inexistente.",
    importancia:
      "Essa construção evita o estereótipo do “sertanejo rude e sem interioridade”, aproximando a obra de uma análise psicológica refinada, qualidade que a crítica frequentemente aproxima do legado de Machado de Assis.",
    elementos: ["Discurso indireto livre", "Interioridade", "Silêncio"],
    exemplo:
      "Sinha Vitória deseja uma cama de couro como a do patrão; esse desejo simples revela, por trás da simplicidade, uma aspiração profunda de dignidade.",
    conexoes: [5, 6, 20],
  },
  {
    id: 16,
    numero: 16,
    titulo: "Tempo narrativo",
    categoria: "TEMPO",
    resumo: "O tempo psicológico prevalece sobre o tempo cronológico, sem datas precisas.",
    explicacao:
      "A narrativa evita marcadores cronológicos exatos (datas, estações nomeadas, durações precisas), privilegiando a percepção subjetiva do tempo pelas personagens — marcada por esperas, repetições e incertezas.",
    comoAparece:
      "Na alternância entre dois períodos de seca, sem indicação precisa de quantos anos se passaram, e na sensação de que o tempo se arrasta nos momentos de espera por chuva.",
    importancia:
      "Essa escolha reforça a exclusão das personagens da “ordem civilizada” do tempo histórico, ao mesmo tempo em que aproxima o leitor da angústia psicológica vivida por elas.",
    elementos: ["Tempo psicológico", "Circularidade", "Elipse narrativa"],
    exemplo:
      "A passagem de meses é sugerida por mudanças na paisagem — pasto seco, depois verde, depois seco novamente — e não por referências de calendário.",
    conexoes: [4, 19, 17],
  },
  {
    id: 17,
    numero: 17,
    titulo: "Espaço narrativo",
    categoria: "ESPAÇO",
    resumo: "O sertão, a fazenda e os caminhos funcionam como forças ativas da narrativa, não apenas cenário.",
    explicacao:
      "O espaço organiza a estrutura da obra: a fazenda representa estabilidade precária; a caatinga e os caminhos representam deslocamento e incerteza; a cidade distante representa uma promessa nunca plenamente alcançada.",
    comoAparece:
      "Na alternância entre os capítulos ambientados na fazenda (trabalho, rotina, pequenas conquistas) e os capítulos de travessia (fome, cansaço, medo do desconhecido).",
    importancia:
      "A geografia sertaneja deixa de ser pano de fundo regionalista e passa a atuar como elemento estrutural, reforçando o caráter literário — e não apenas documental — do regionalismo da obra.",
    elementos: ["Sertão", "Fazenda", "Caminhos", "Regionalismo"],
    exemplo:
      "A casa de taipa abandonada que a família encontra no início simboliza, ao mesmo tempo, abrigo possível e precariedade: um espaço emprestado, nunca definitivamente seu.",
    conexoes: [11, 1, 16],
  },
  {
    id: 18,
    numero: 18,
    titulo: "Simbolismo",
    categoria: "SIMBOLISMO",
    resumo: "Elementos como a seca, o papagaio e Baleia funcionam como símbolos da condição humana retratada.",
    explicacao:
      "Vários elementos concretos da narrativa ganham camadas simbólicas: a seca como símbolo de escassez existencial, o papagaio comido pela família como símbolo da perda da fala e da dignidade, Baleia como símbolo da fronteira entre humano e animal.",
    comoAparece:
      "No episódio em que a família, faminta, come o papagaio que imitava a fala humana — ato que pode ser lido como a perda de um último elo simbólico com a linguagem e a comunicação.",
    importancia:
      "O simbolismo reforça, em nível figurado, as mesmas questões exploradas na linguagem e na estrutura: escassez, silêncio e ciclo, sem exigir explicações diretas do narrador.",
    elementos: ["Papagaio", "Seca", "Baleia", "Interpretação"],
    exemplo:
      "Comer o papagaio falante pode ser interpretado como metáfora da fome silenciando até mesmo a possibilidade da fala — uma leitura possível entre outras, não uma certeza fechada.",
    conexoes: [12, 2, 20],
  },
  {
    id: 19,
    numero: 19,
    titulo: "Repetição",
    categoria: "ESTRUTURA",
    resumo: "Situações, falas e comportamentos se repetem, reforçando a sensação de ciclo.",
    explicacao:
      "Cenas de fome, de deslocamento, de medo da autoridade e de esperança por dias melhores se repetem ao longo da obra, com pequenas variações, construindo um padrão circular de experiência.",
    comoAparece:
      "Na recorrência do tema da seca em diferentes capítulos, na repetição do desejo de Fabiano de ter uma vida diferente, sempre frustrado, e na simetria entre o primeiro e o último capítulo.",
    importancia:
      "A repetição é o mecanismo textual que sustenta a leitura da obra como estrutura cíclica, reforçando a crítica social: a mesma injustiça se repete, geração após geração, sem solução à vista dentro da narrativa.",
    elementos: ["Estrutura cíclica", "Seca", "Permanência"],
    exemplo:
      "A família planeja, mais de uma vez ao longo da obra, uma vida melhor em outro lugar — um desejo que se repete sem nunca se cumprir dentro dos limites da narrativa.",
    conexoes: [4, 3, 16],
  },
  {
    id: 20,
    numero: 20,
    titulo: "Silêncio e dificuldade de comunicação",
    categoria: "LINGUAGEM",
    resumo: "As personagens têm dificuldade de expressar verbalmente seus sentimentos e pensamentos.",
    explicacao:
      "A comunicação entre as personagens é limitada: diálogos são curtos, incompletos ou substituídos por gestos. Essa dificuldade de expressão verbal é compensada narrativamente pelo acesso privilegiado do narrador aos pensamentos íntimos.",
    comoAparece:
      "Em cenas nas quais Fabiano tenta, sem sucesso, formular frases mais elaboradas, ou nas quais marido e mulher se comunicam mais por olhares e silêncios do que por palavras.",
    importancia:
      "O silêncio não representa ausência de vida interior — é justamente o contraste entre silêncio externo e riqueza interna (revelada pelo discurso indireto livre) que confere densidade psicológica à obra.",
    elementos: ["Discurso indireto livre", "Interioridade", "Economia vocabular"],
    exemplo:
      "Fabiano sente orgulho de si mesmo após um dia de trabalho, mas não encontra palavras para expressá-lo a Sinha Vitória; o sentimento permanece acessível apenas ao leitor, via narrador.",
    conexoes: [2, 5, 9],
  },
];

/* ----------------------------------------------------------------------- */
/* MAPA DE CATEGORIAS (mapa mental interativo)                             */
/* ----------------------------------------------------------------------- */

export const categoriasMapa: CategoriaMapa[] = [
  {
    id: "ESTRUTURA",
    nome: "Estrutura",
    descricao:
      "Organização da obra em capítulos autônomos, repetição de motivos e circularidade entre início e fim.",
    caracteristicas: [3, 4, 19],
  },
  {
    id: "LINGUAGEM",
    nome: "Linguagem",
    descricao:
      "Economia vocabular, concisão e silêncio como escolhas estéticas que espelham a condição das personagens.",
    caracteristicas: [2, 9, 20],
  },
  {
    id: "NARRADOR",
    nome: "Narrador",
    descricao:
      "Narrador em terceira pessoa que combina distância e proximidade por meio do discurso indireto livre.",
    caracteristicas: [5, 7],
  },
  {
    id: "FOCALIZAÇÃO",
    nome: "Focalização",
    descricao: "Organização do que o leitor percebe, com ênfase na interioridade de cada personagem.",
    caracteristicas: [6],
  },
  {
    id: "ESPAÇO",
    nome: "Espaço",
    descricao: "O sertão, a fazenda e os caminhos como forças ativas que moldam enredo e comportamento.",
    caracteristicas: [11, 17],
  },
  {
    id: "TEMPO",
    nome: "Tempo",
    descricao: "Predomínio do tempo psicológico sobre o cronológico, reforçando a sensação de ciclo.",
    caracteristicas: [16],
  },
  {
    id: "ESTILO",
    nome: "Estilo",
    descricao: "Precisão, contenção e objetividade descritiva como marcas autorais de Graciliano Ramos.",
    caracteristicas: [8],
  },
  {
    id: "REGIONALISMO",
    nome: "Regionalismo",
    descricao: "Representação do sertão como matéria literária, além da simples ambientação geográfica.",
    caracteristicas: [1],
  },
  {
    id: "MODERNISMO",
    nome: "Modernismo",
    descricao: "Vínculo com a geração de 1930: regionalismo técnico, crítica social e realismo.",
    caracteristicas: [10, 13, 14],
  },
  {
    id: "SIMBOLISMO",
    nome: "Simbolismo",
    descricao: "Elementos concretos que ganham camadas de sentido figurado dentro da narrativa.",
    caracteristicas: [18],
  },
  {
    id: "PERSONAGENS",
    nome: "Construção dos personagens",
    descricao: "Caracterização por meio de silêncio, interioridade e relação entre humano e animal.",
    caracteristicas: [12, 15],
  },
];

/* ----------------------------------------------------------------------- */
/* FLUXOS DE CONEXÃO ENTRE CARACTERÍSTICAS                                  */
/* ----------------------------------------------------------------------- */

export const fluxosConexao = [
  {
    titulo: "Da linguagem ao silêncio interior",
    etapas: ["Linguagem enxuta", "Silêncio", "Dificuldade de comunicação", "Interioridade", "Discurso indireto livre"],
  },
  {
    titulo: "Do espaço à crítica social",
    etapas: ["Regionalismo", "Espaço sertanejo", "Realidade social", "Crítica social", "Geração de 1930"],
  },
  {
    titulo: "Da fragmentação ao ciclo",
    etapas: ["Capítulos fragmentados", "Repetição", "Circularidade", "Sensação de ciclo"],
  },
];

/* ----------------------------------------------------------------------- */
/* LINGUAGEM — conteúdo detalhado                                          */
/* ----------------------------------------------------------------------- */

export const linguagemDetalhe = {
  introducao:
    "A simplicidade aparente da linguagem de Vidas Secas não deve ser confundida com pobreza estilística. Trata-se de uma escolha estética cuidadosamente construída, na qual cada corte de palavra tem função literária.",
  topicos: [
    {
      titulo: "Concisão e frases objetivas",
      texto:
        "Graciliano Ramos é conhecido por revisar obsessivamente seus textos em busca de eliminar excessos. O resultado são períodos curtos, verbos de ação precisos e poucas orações subordinadas, o que confere ritmo seco à leitura.",
    },
    {
      titulo: "Economia verbal e vocabulário",
      texto:
        "O vocabulário é deliberadamente restrito em certos momentos — sobretudo quando associado ao universo mental de Fabiano — para representar, sem artificialismo, os limites de escolarização da personagem.",
    },
    {
      titulo: "Regionalismos comedidos",
      texto:
        "Diferentemente de outros regionalistas que reproduzem amplamente o falar local, Graciliano utiliza marcas de oralidade sertaneja com parcimônia, preferindo sugerir a fala regional a transcrevê-la de forma extensa.",
    },
    {
      titulo: "Descrição como substituto da explicação",
      texto:
        "Em vez de declarar sentimentos, a narrativa descreve gestos, posturas e reações físicas, deixando que o leitor deduza o estado emocional das personagens — recurso típico da contenção estilística do autor.",
    },
    {
      titulo: "Silêncio e dificuldade de comunicação",
      texto:
        "Diálogos truncados e falas monossilábicas revelam não apenas timidez, mas uma condição social de isolamento, reforçada pela ausência de instrução formal.",
    },
    {
      titulo: "Construção dos pensamentos",
      texto:
        "Pensamentos surgem como fragmentos, por vezes contraditórios, sem a fluidez de um raciocínio elaborado — o que aproxima o leitor de uma interioridade verossímil, não idealizada.",
    },
    {
      titulo: "Linguagem e condição das personagens",
      texto:
        "A relação entre pobreza vocabular e pobreza material é central: a limitação da fala espelha a limitação de oportunidades, tornando a linguagem um instrumento de crítica social sem necessidade de discurso explícito.",
    },
  ],
};

export const discursoIndiretoLivre = {
  definicao:
    "O discurso indireto livre é uma técnica narrativa em que os pensamentos ou falas de uma personagem são incorporados ao discurso do narrador, sem verbos introdutórios (“ele pensou que”) e sem marcas gráficas como aspas ou travessões.",
  funcionamento:
    "A fronteira entre a voz do narrador e a consciência da personagem se torna propositalmente ambígua: certas frases podem ser lidas tanto como observação do narrador quanto como pensamento direto da personagem.",
  comoAparece:
    "Em Vidas Secas, esse recurso aparece quando o texto descreve uma cena e, na sequência, desliza para um pensamento da personagem sem qualquer aviso formal, criando um efeito de continuidade entre ação e consciência.",
  importancia:
    "É o principal mecanismo que permite ao narrador culto — com vocabulário e sintaxe elaborados — dar forma literária aos pensamentos de personagens que, na vida narrada, mal conseguem se expressar em voz alta.",
  exemploParafrase:
    "Ao ver a casa abandonada pela primeira vez, a narrativa descreve o ambiente e, em seguida, desliza para a desconfiança de Fabiano quanto a permanecer ali — um pensamento apresentado como se fosse parte da própria descrição, sem introdução explícita.",
};

/* ----------------------------------------------------------------------- */
/* NARRADOR E FOCALIZAÇÃO                                                   */
/* ----------------------------------------------------------------------- */

export const narradorDetalhe = {
  posicao:
    "O narrador de Vidas Secas observa a família a certa distância, com vocabulário e construções sintáticas mais elaborados do que os das personagens — uma terceira pessoa onisciente e seletiva.",
  relacaoComPersonagens:
    "Apesar da diferença de registro, o narrador não ironiza nem rebaixa as personagens; ao contrário, empresta a elas uma dignidade narrativa que a pobreza de linguagem falada não permitiria expressar sozinha.",
  acessoAosPensamentos:
    "O acesso à interioridade é seletivo: cada capítulo tende a focalizar o universo mental de uma personagem por vez, como se o narrador se aproximasse de uma consciência e depois recuasse.",
  distanciaEAproximacao:
    "Esse movimento de aproximação e distanciamento é o que permite à obra equilibrar objetividade descritiva (quando o narrador observa de fora) e profundidade psicológica (quando mergulha nos pensamentos).",
  efeitosNoLeitor:
    "O leitor desenvolve empatia pelas personagens justamente por acessar uma riqueza interior que elas mesmas não conseguem comunicar em diálogo — um contraste que intensifica a crítica social da obra.",
};

export const focalizacaoPersonagens = [
  {
    nome: "Fabiano",
    descricao:
      "A narrativa frequentemente adota a perspectiva de Fabiano para revelar seu conflito entre o desejo de dignidade e a sensação de inferioridade diante de patrões e autoridades, sentimentos que ele mesmo tem dificuldade de nomear.",
  },
  {
    nome: "Sinha Vitória",
    descricao:
      "Sua focalização expõe uma consciência mais prática e analítica, atenta às finanças da família e a pequenos símbolos de conforto (como a cama de couro), revelando uma dimensão de desejo e cálculo diferente da de Fabiano.",
  },
  {
    nome: "As crianças",
    descricao:
      "A percepção do menino mais velho e do menino mais novo é marcada pela incompreensão de palavras e conceitos adultos (como “inferno” ou “safado”), o que evidencia, por contraste, os limites de comunicação dentro da própria família.",
  },
  {
    nome: "Baleia",
    descricao:
      "Em um recurso excepcional, a narrativa concede também à cadela uma focalização própria, com sensações, memórias e afetos — ampliando a reflexão sobre os limites entre percepção humana e animal.",
  },
];

/* ----------------------------------------------------------------------- */
/* ESTRUTURA — fragmentação e ciclo                                        */
/* ----------------------------------------------------------------------- */

export const estruturaFragmentada = {
  introducao:
    "Vidas Secas é organizada em treze capítulos que funcionam quase como unidades narrativas independentes, resultado do processo de composição do livro, inicialmente pensado a partir de textos avulsos.",
  autonomia:
    "Cada capítulo pode concentrar-se em uma personagem (“Fabiano”, “Sinha Vitória”, “Baleia”) ou em um episódio específico (“Cadeia”, “Contas”), com começo, meio e fim relativamente delimitados.",
  continuidade:
    "Apesar dessa autonomia, elementos recorrentes — a fome, a seca, a relação de submissão ao patrão — costuram os capítulos, garantindo unidade temática ao conjunto.",
  conexaoEntreEpisodios:
    "A ordem dos capítulos sugere uma progressão (chegada, adaptação, crise, fuga), mas a independência relativa de cada um permite leituras parciais sem perda total de sentido.",
  sensacaoDeFragmentacao:
    "Essa estrutura em mosaico reforça, no plano formal, a descontinuidade da própria vida retratada: uma existência interrompida pela seca, pela fome e pelo deslocamento constante.",
  porqueImporta:
    "A crítica literária já descreveu a obra como um “romance desmontável” — expressão que resume como a composição fragmentada é, ela mesma, parte do sentido da obra, e não apenas uma técnica decorativa.",
};

export const estruturaCiclica = {
  introducao:
    "A estrutura cíclica de Vidas Secas se manifesta na semelhança entre a situação inicial e a situação final da família: ambas envolvem deslocamento, incerteza e esperança por uma vida melhor.",
  elementos: [
    "O primeiro capítulo narra a chegada da família a uma fazenda após uma seca; o último narra uma nova partida.",
    "A fome e a escassez retornam em diferentes momentos da obra, sem solução definitiva dentro da narrativa.",
    "O desejo de uma vida digna é expresso mais de uma vez, sempre adiado por novas dificuldades.",
  ],
  interpretacao:
    "Essa circularidade pode ser lida como denúncia de um ciclo social sem perspectiva de mudança estrutural — uma interpretação recorrente na crítica, mas não a única possível: outras leituras destacam também a resistência da família em seguir adiante, apesar do ciclo.",
};

/* ----------------------------------------------------------------------- */
/* TEMPO E ESPAÇO                                                           */
/* ----------------------------------------------------------------------- */

export const tempoDetalhe = {
  introducao:
    "Vidas Secas evita marcadores temporais precisos. Não há datas, raramente há referências a durações exatas, e a passagem do tempo é sugerida por mudanças na paisagem ou no comportamento das personagens.",
  tempoHistorico:
    "Refere-se ao contexto externo da obra: o Brasil das décadas de 1920-1930, marcado por secas recorrentes no Nordeste, pela desigualdade agrária e pelas transformações políticas da era Vargas.",
  tempoNarrativo:
    "Refere-se a como a história organiza a passagem do tempo dentro do texto: de forma psicológica, subjetiva, com elipses longas e sem cronologia explícita entre os capítulos.",
  pontos: [
    "Ausência de datas detalhadas, o que retira as personagens da ordem cronológica “civilizada”.",
    "Alternância entre dois períodos de seca, sugerindo repetição mais do que progressão linear.",
    "Sensação de tempo suspenso durante as esperas por chuva, contrastada com momentos de ação rápida (fuga, prisão).",
    "Relação direta entre tempo psicológico e estrutura cíclica: o tempo parece girar em torno de si mesmo, não avançar.",
  ],
};

export const espacoDetalhe = {
  introducao:
    "O espaço em Vidas Secas participa ativamente da narrativa, organizando o comportamento das personagens e a própria estrutura dos capítulos.",
  pontos: [
    {
      titulo: "O sertão",
      texto:
        "Representado pela caatinga seca, o sertão é hostil e, ao mesmo tempo, o único mundo conhecido pela família — fonte de sofrimento, mas também de identidade.",
    },
    {
      titulo: "A fazenda",
      texto:
        "Funciona como espaço de estabilidade provisória: ali a família trabalha, cria expectativas de permanência e vive pequenos momentos de conforto, sempre ameaçados pela seca ou pela autoridade do patrão.",
    },
    {
      titulo: "A casa",
      texto:
        "A casa de taipa abandonada, ocupada no início da obra, simboliza abrigo precário: nunca é totalmente da família, apenas emprestada pelas circunstâncias.",
    },
    {
      titulo: "Os caminhos",
      texto:
        "Os trajetos de travessia marcam os momentos de maior vulnerabilidade da família, quando a ausência de teto e comida é mais evidente — espaços de transição entre uma tentativa de vida fixa e outra.",
    },
  ],
};

/* ----------------------------------------------------------------------- */
/* MODERNISMO, REGIONALISMO E REALISMO SOCIAL                               */
/* ----------------------------------------------------------------------- */

export const regionalismoDetalhe = {
  introducao:
    "Regionalismo literário é a representação artística de uma região específica — seus costumes, paisagem, linguagem e problemas sociais — como matéria de reflexão estética, e não apenas descrição geográfica.",
  pontos: [
    "Na geração de 1930, o regionalismo se associa a um projeto de compreensão crítica do Brasil, superando o exotismo de fases anteriores.",
    "O sertão nordestino de Vidas Secas é representado com rigor e economia, evitando both o pitoresco e o sentimentalismo.",
    "A linguagem incorpora, de forma comedida, a oralidade sertaneja, sem transformar o texto em reprodução dialetal extensa.",
    "Costumes e condições sociais (trabalho no gado, relação com patrões, ausência de escolarização) aparecem como parte da construção das personagens, não como curiosidade externa.",
  ],
};

export const geracao1930Detalhe = {
  introducao:
    "A chamada segunda fase do Modernismo brasileiro (a partir de 1930) é marcada pelo amadurecimento técnico da prosa de ficção e por um interesse renovado nos problemas sociais do país.",
  pontos: [
    "Maior apuro técnico em relação à experimentação inicial da década de 1920, com estruturas narrativas mais elaboradas, como a fragmentação de Vidas Secas.",
    "Aprofundamento psicológico das personagens, mesmo quando pertencentes a camadas populares, rompendo com estereótipos regionalistas anteriores.",
    "Linguagem mais contida e madura, que evita o excesso descritivo em favor da precisão.",
    "Representação de desigualdades sociais (fome, exploração, poder arbitrário) como parte constitutiva da narrativa, não como denúncia externa a ela.",
  ],
};

export const realismoSocialDetalhe = {
  introducao:
    "Em Vidas Secas, elementos sociais como pobreza, exploração do trabalho e abuso de poder não funcionam como temas isolados: eles explicam escolhas de linguagem, estrutura e construção psicológica.",
  pontos: [
    "A pobreza material justifica a economia vocabular atribuída às personagens.",
    "A exploração do trabalho de Fabiano pelo patrão aparece narrada com objetividade, o que intensifica o efeito crítico.",
    "A violência da autoridade pública (prisão arbitrária) é apresentada sem comentário direto do narrador, deixando a injustiça evidente pelos próprios fatos.",
    "A luta pela sobrevivência organiza o ritmo da narrativa, alternando momentos de relativa estabilidade e momentos de urgência.",
  ],
};

/* ----------------------------------------------------------------------- */
/* ANIMALIZAÇÃO, HUMANIZAÇÃO, REPETIÇÃO E SILÊNCIO                         */
/* ----------------------------------------------------------------------- */

export const animalizacaoHumanizacao = {
  introducao:
    "Uma das características mais estudadas de Vidas Secas é a aproximação entre comportamento humano e animal, usada para evidenciar os efeitos da miséria extrema sobre a dignidade humana.",
  pontos: [
    "Em momentos de medo ou submissão, Fabiano é descrito com comparações que o aproximam do comportamento de um animal acuado.",
    "Baleia, a cadela da família, recebe tratamento narrativo humanizado: pensamentos, memórias e afetos lhe são atribuídos com a mesma técnica usada para as personagens humanas.",
    "Essa inversão de valores funciona como crítica indireta: a miséria social rebaixa o humano à condição animal, enquanto a ficção devolve humanidade ao animal.",
  ],
  observacaoSobreBaleia:
    "Baleia é utilizada aqui apenas como exemplo de uma característica literária — a técnica de humanização — e não como objeto de uma biografia da personagem.",
};

export const repeticaoDetalhe = {
  introducao:
    "A repetição em Vidas Secas organiza tanto a estrutura quanto o conteúdo da obra, reforçando a sensação de ciclo sem progresso linear.",
  pontos: [
    "Repetição de situações: episódios de fome e escassez retornam em diferentes capítulos.",
    "Repetição de comportamentos: o desejo de dignidade e a submissão alternam-se repetidamente nas mesmas personagens.",
    "Repetição estrutural: a simetria entre o primeiro e o último capítulo reforça o efeito de ciclo.",
    "Efeito no leitor: a repetição cria expectativa de recomeço constante, sustentando a leitura da obra como crítica a uma condição social sem solução interna.",
  ],
};

export const silencioDetalhe = {
  introducao:
    "O silêncio em Vidas Secas não deve ser entendido apenas como ausência de conversa: é um recurso narrativo com função estética e social.",
  pontos: [
    "A dificuldade de comunicação entre as personagens reflete a falta de acesso à educação formal e ao convívio social amplo.",
    "O silêncio externo contrasta com a riqueza de pensamentos revelada pelo discurso indireto livre, criando tensão entre o que é dito e o que é sentido.",
    "A economia verbal reforça o silêncio como marca estilística, não apenas temática.",
    "O silêncio também é retrato de uma condição social: pessoas sem voz política encontram, na narrativa, uma forma indireta de expressão.",
  ],
};

/* ----------------------------------------------------------------------- */
/* SIMBOLISMO — elementos selecionados                                     */
/* ----------------------------------------------------------------------- */

export const simbolosDetalhe = [
  {
    elemento: "A seca",
    presenca: "Condição climática que organiza o enredo do início ao fim.",
    significado: "Pode ser lida como símbolo de escassez existencial e social, além de fenômeno natural.",
    relacaoComEstrutura: "Justifica a circularidade: a seca retorna, obrigando a família a recomeçar.",
    relacaoComLinguagem: "Associa-se à economia vocabular, como se a aridez do clima se refletisse na aridez da fala.",
    interpretacao:
      "Interpretação recorrente na crítica, mas não unânime — alguns leitores destacam também a seca como força que revela a resistência da família.",
  },
  {
    elemento: "O papagaio comido pela família",
    presenca: "Episódio em que, faminta, a família consome o papagaio que imitava palavras humanas.",
    significado: "Possível símbolo da perda de um elo com a fala e a comunicação diante da necessidade extrema.",
    relacaoComEstrutura: "Reforça o tema da fome como força que organiza decisões ao longo da obra.",
    relacaoComLinguagem: "Dialoga com o tema do silêncio: o único “falante” do grupo é sacrificado pela fome.",
    interpretacao: "Leitura simbólica sugerida pela crítica; não há indicação de que o narrador explique essa leitura de forma direta.",
  },
  {
    elemento: "Baleia",
    presenca: "Cadela da família, com capítulo dedicado à sua perspectiva.",
    significado: "Símbolo do limite entre humanidade e animalidade, e da fidelidade afetiva ausente em outras relações da obra.",
    relacaoComEstrutura: "Seu capítulo funciona como unidade autônoma dentro da fragmentação geral da obra.",
    relacaoComLinguagem: "A narrativa usa para Baleia a mesma técnica de interiorização reservada aos humanos, reforçando a economia do discurso indireto livre.",
    interpretacao: "Amplamente discutida pela crítica como exemplo de humanização, sem consenso total sobre seu significado único.",
  },
  {
    elemento: "A casa de taipa",
    presenca: "Moradia precária ocupada pela família ao longo de boa parte da obra.",
    significado: "Símbolo de abrigo provisório e de uma estabilidade que nunca se torna definitiva.",
    relacaoComEstrutura: "Relaciona-se à estrutura cíclica: a casa é ocupada e, ao final, abandonada novamente.",
    relacaoComLinguagem: "Associa-se à descrição objetiva, já que o espaço é descrito com precisão material, sem idealização.",
    interpretacao: "Leitura amplamente aceita, embora o grau de esperança ou desesperança sugerido varie conforme o leitor.",
  },
];

/* ----------------------------------------------------------------------- */
/* PERSONAGENS COMO CONSTRUÇÃO LITERÁRIA E ESTILO DE GRACILIANO            */
/* ----------------------------------------------------------------------- */

export const personagensConstrucao = {
  introducao:
    "Mais do que indivíduos a serem biografados, as personagens de Vidas Secas funcionam como demonstrações vivas das características literárias da obra.",
  pontos: [
    "Caracterização por ação e silêncio: raramente há descrições psicológicas diretas; o leitor deduz traços de caráter pela observação de comportamentos.",
    "Interioridade acessada seletivamente, capítulo a capítulo, por meio do discurso indireto livre.",
    "Relação estreita com o espaço: a identidade das personagens é inseparável do ambiente sertanejo que habitam.",
    "Função estrutural: cada personagem organiza um ou mais capítulos, reforçando a estrutura fragmentada da obra.",
    "Ausência de nomes próprios nas crianças, o que reforça sua condição de marginalidade dentro da própria narrativa.",
  ],
};

export const estiloGraciliano = {
  introducao:
    "O estilo de Graciliano Ramos em Vidas Secas é frequentemente descrito pela crítica como seco, conciso e contido — qualidades que resultam de um processo rigoroso de revisão e corte.",
  pontos: [
    "Precisão lexical: escolha cuidadosa de palavras concretas, evitando adjetivação excessiva.",
    "Concisão sintática: períodos curtos e diretos, com poucas subordinações.",
    "Subjetividade controlada: a emoção é sugerida, não declarada, por meio de detalhes físicos e silêncios.",
    "Crítica social sem discurso direto: a denúncia emerge da organização dos fatos narrados.",
    "Construção psicológica refinada, frequentemente comparada à tradição realista de Machado de Assis.",
    "Intensidade pela contenção: a economia da linguagem aumenta, por contraste, o impacto emocional das cenas mais marcantes.",
  ],
};

/* ----------------------------------------------------------------------- */
/* GUIA DE LEITURA                                                          */
/* ----------------------------------------------------------------------- */

export const guiaDeLeitura = [
  "Como o narrador apresenta os personagens: de fora, por ações, ou por dentro, por pensamentos?",
  "Como os pensamentos das personagens aparecem no texto — há verbos como “pensou” ou o pensamento se mistura à narração?",
  "O que a escolha de palavras simples revela sobre a condição das personagens?",
  "Por que os capítulos parecem funcionar quase como contos independentes?",
  "Como o ambiente (seca, caminhos, fazenda) interfere nas decisões da família?",
  "Que situações, frases ou comportamentos se repetem ao longo da leitura?",
  "Em que momentos o silêncio entre as personagens comunica mais do que o diálogo?",
  "Onde aparecem marcas de linguagem regional e qual efeito elas produzem?",
  "Que efeito a economia de palavras produz nas cenas de maior tensão emocional?",
  "Como o capítulo final retoma elementos do capítulo inicial, reforçando a estrutura da obra?",
];

/* ----------------------------------------------------------------------- */
/* CAPÍTULOS COMO EXEMPLOS DE CARACTERÍSTICAS                               */
/* ----------------------------------------------------------------------- */

export const capitulos: Capitulo[] = [
  {
    nome: "Mudança",
    foco: "Chegada da família a uma fazenda após período de seca.",
    caracteristicas: ["Espaço narrativo", "Estrutura cíclica", "Descrição objetiva"],
    observacao:
      "Abre a obra estabelecendo o padrão de deslocamento que será espelhado, de forma simétrica, no capítulo final.",
  },
  {
    nome: "Fabiano",
    foco: "Universo mental do vaqueiro diante da autoridade e do desejo de dignidade.",
    caracteristicas: ["Discurso indireto livre", "Foco na interioridade", "Construção psicológica"],
    observacao:
      "Demonstra como a narrativa acessa pensamentos complexos em uma personagem de fala limitada.",
  },
  {
    nome: "Cadeia",
    foco: "Prisão arbitrária de Fabiano por um representante da autoridade.",
    caracteristicas: ["Crítica social integrada à narrativa", "Realismo social", "Narrador em terceira pessoa"],
    observacao:
      "Exemplo de como a injustiça social é sugerida pelos fatos narrados, sem comentário moral explícito do narrador.",
  },
  {
    nome: "Sinha Vitória",
    foco: "Desejos e cálculos práticos da esposa de Fabiano.",
    caracteristicas: ["Focalização", "Construção psicológica", "Simbolismo"],
    observacao: "Revela uma interioridade distinta da de Fabiano, ampliando a complexidade psicológica da obra.",
  },
  {
    nome: "Contas",
    foco: "Disputa de valores entre Fabiano e o patrão.",
    caracteristicas: ["Crítica social integrada à narrativa", "Economia vocabular", "Realismo social"],
    observacao: "A injustiça aparece na própria lógica dos números, sem necessidade de discurso direto.",
  },
  {
    nome: "Baleia",
    foco: "Perspectiva da cadela da família em seus momentos finais.",
    caracteristicas: ["Focalização", "Animalização e humanização", "Simbolismo", "Interioridade"],
    observacao:
      "Demonstra como a técnica de interiorização da obra se estende além das personagens humanas — usada aqui apenas como exemplo da característica, não como biografia da personagem.",
  },
  {
    nome: "Fuga",
    foco: "Nova partida da família em busca de outro lugar para viver.",
    caracteristicas: ["Estrutura cíclica", "Repetição", "Tempo narrativo"],
    observacao: "Fecha a obra retomando a situação de deslocamento do primeiro capítulo, reforçando a circularidade.",
  },
];

/* ----------------------------------------------------------------------- */
/* GLOSSÁRIO LITERÁRIO                                                      */
/* ----------------------------------------------------------------------- */

export const glossario: TermoGlossario[] = [
  {
    termo: "Regionalismo",
    definicao: "Corrente literária que representa esteticamente costumes, linguagem e problemas de uma região específica.",
    relacao: "Vidas Secas retrata o sertão nordestino como espaço que molda comportamento e linguagem das personagens.",
    exemplo: "A caatinga seca e o trabalho com o gado organizam boa parte das decisões da família ao longo da obra.",
  },
  {
    termo: "Modernismo",
    definicao: "Movimento artístico brasileiro iniciado em 1922, dividido por fases, que renovou a linguagem literária nacional.",
    relacao: "Vidas Secas pertence à segunda fase do Modernismo, voltada ao regionalismo crítico e à maturidade técnica.",
    exemplo: "A fragmentação em capítulos e o discurso indireto livre são exemplos desse amadurecimento formal.",
  },
  {
    termo: "Geração de 1930",
    definicao: "Conjunto de escritores da segunda fase modernista voltados ao romance regionalista e à crítica social.",
    relacao: "Graciliano Ramos é um dos nomes centrais dessa geração, ao lado de José Lins do Rego e Rachel de Queiroz.",
    exemplo: "A representação da seca e da desigualdade no Nordeste é um tema recorrente entre esses autores.",
  },
  {
    termo: "Discurso indireto livre",
    definicao: "Técnica narrativa que mescla a voz do narrador aos pensamentos da personagem, sem marcas formais de citação.",
    relacao: "É o principal recurso usado para revelar a interioridade de Fabiano e Sinha Vitória.",
    exemplo: "Uma frase pode começar como observação do narrador e terminar como pensamento da personagem, sem aviso explícito.",
  },
  {
    termo: "Narrador",
    definicao: "Voz responsável por contar a história, podendo ter diferentes graus de conhecimento e proximidade com as personagens.",
    relacao: "Vidas Secas é narrado por uma voz em terceira pessoa, com acesso seletivo à consciência das personagens.",
    exemplo: "O narrador descreve cenas externas e, em seguida, revela pensamentos íntimos de cada personagem.",
  },
  {
    termo: "Focalização",
    definicao: "Perspectiva a partir da qual os fatos narrados são percebidos e organizados para o leitor.",
    relacao: "A obra alterna a focalização entre Fabiano, Sinha Vitória, as crianças e até Baleia.",
    exemplo: "No capítulo dedicado à cadela, a narrativa organiza-se a partir da percepção sensorial do animal.",
  },
  {
    termo: "Narrador em terceira pessoa",
    definicao: "Narrador que se refere às personagens como “ele” ou “ela”, mantendo-se formalmente fora da ação narrada.",
    relacao: "É o único romance de Graciliano Ramos inteiramente narrado dessa forma.",
    exemplo: "Mesmo observando de fora, o narrador consegue aproximar-se dos pensamentos de Fabiano por meio do discurso indireto livre.",
  },
  {
    termo: "Estrutura narrativa",
    definicao: "Modo como os episódios de uma obra são organizados e conectados entre si.",
    relacao: "A estrutura de Vidas Secas é fragmentada em capítulos relativamente autônomos, mas unidos por temas recorrentes.",
    exemplo: "Cada capítulo pode ser lido quase isoladamente, sem perda total da compreensão do conjunto.",
  },
  {
    termo: "Tempo narrativo",
    definicao: "Forma como a passagem do tempo é organizada dentro do texto, podendo divergir do tempo histórico real.",
    relacao: "Em Vidas Secas, o tempo narrativo é psicológico, sem datas precisas, reforçando a sensação de ciclo.",
    exemplo: "A passagem de meses é sugerida por mudanças na paisagem, não por referências de calendário.",
  },
  {
    termo: "Espaço narrativo",
    definicao: "Ambiente em que a ação se desenrola, podendo atuar como elemento ativo da narrativa, além de cenário.",
    relacao: "O sertão, a fazenda e os caminhos moldam diretamente o comportamento da família em Vidas Secas.",
    exemplo: "A decisão de partir nasce da escassez de água e pasto, não de um desejo abstrato de mudança.",
  },
  {
    termo: "Interioridade",
    definicao: "Dimensão psicológica e subjetiva de uma personagem, incluindo pensamentos, emoções e percepções íntimas.",
    relacao: "A interioridade das personagens de Vidas Secas é revelada principalmente pelo discurso indireto livre.",
    exemplo: "Mesmo falando pouco, Fabiano revela, por dentro, conflitos complexos sobre dignidade e submissão.",
  },
  {
    termo: "Simbolismo",
    definicao: "Uso de elementos concretos da narrativa para sugerir sentidos figurados, além do significado literal.",
    relacao: "Elementos como a seca, o papagaio e Baleia ganham, na obra, camadas simbólicas discutidas pela crítica.",
    exemplo: "A seca pode ser lida tanto como fenômeno climático quanto como símbolo de escassez existencial.",
  },
  {
    termo: "Linguagem",
    definicao: "Conjunto de escolhas vocabulares, sintáticas e estilísticas que caracterizam a escrita de um autor ou obra.",
    relacao: "A linguagem de Vidas Secas é marcada pela concisão, economia vocabular e objetividade descritiva.",
    exemplo: "Frases curtas e diretas substituem explicações emocionais extensas ao longo da obra.",
  },
  {
    termo: "Caracterização",
    definicao: "Processo literário de construção de uma personagem, por meio de ações, falas, pensamentos e descrição física.",
    relacao: "As personagens de Vidas Secas são caracterizadas principalmente por comportamento e silêncio, não por descrição extensa.",
    exemplo: "O leitor compreende o orgulho ferido de Fabiano por sua postura corporal, não por uma declaração direta.",
  },
  {
    termo: "Animalização",
    definicao: "Recurso literário que aproxima o comportamento humano de características atribuídas a animais.",
    relacao: "Em momentos de medo e submissão, Fabiano é descrito com comparações que o aproximam de um animal acuado.",
    exemplo: "A comparação reforça o efeito de desumanização provocado pela miséria extrema.",
  },
  {
    termo: "Humanização",
    definicao: "Recurso literário que atribui a um ser não humano características, pensamentos ou emoções humanas.",
    relacao: "Baleia recebe tratamento narrativo humanizado, com pensamentos e afetos atribuídos pela técnica do discurso indireto livre.",
    exemplo: "O capítulo dedicado à cadela organiza-se a partir de sua percepção sensorial e emocional.",
  },
  {
    termo: "Realismo social",
    definicao: "Representação literária de condições sociais concretas, como pobreza, trabalho e desigualdade.",
    relacao: "Em Vidas Secas, o realismo social se integra à estrutura e à linguagem, sem depender de discursos diretos.",
    exemplo: "A disputa de contas entre Fabiano e o patrão evidencia a exploração sem necessidade de comentário do narrador.",
  },
];

/* ----------------------------------------------------------------------- */
/* QUIZ                                                                     */
/* ----------------------------------------------------------------------- */

export const quiz: PerguntaQuiz[] = [
  {
    pergunta: "Qual é a principal função do discurso indireto livre em Vidas Secas?",
    opcoes: [
      "Substituir completamente os diálogos entre personagens",
      "Revelar os pensamentos das personagens sem romper a terceira pessoa nem marcas formais de citação",
      "Introduzir comentários políticos diretos do narrador",
      "Eliminar qualquer acesso à interioridade das personagens",
    ],
    correta: 1,
    explicacao:
      "O discurso indireto livre permite ao narrador culto emprestar forma literária aos pensamentos de personagens de fala limitada, sem usar verbos introdutórios ou aspas.",
  },
  {
    pergunta: "Por que a estrutura de Vidas Secas é frequentemente descrita como fragmentada?",
    opcoes: [
      "Porque o livro foi publicado em partes separadas por diferentes editoras",
      "Porque os capítulos não têm nenhuma relação temática entre si",
      "Porque a obra é composta por capítulos relativamente autônomos, originados de textos que funcionavam quase como contos",
      "Porque faltam páginas na edição original",
    ],
    correta: 2,
    explicacao:
      "A composição em capítulos relativamente independentes, unidos por temas recorrentes, é uma característica central da estrutura da obra.",
  },
  {
    pergunta: "Como o regionalismo se manifesta de forma mais profunda em Vidas Secas?",
    opcoes: [
      "Apenas na descrição geográfica do sertão, sem relação com comportamento ou linguagem",
      "Na forma como o ambiente sertanejo molda comportamento, linguagem e estrutura narrativa",
      "Na reprodução extensa de dialetos regionais em todos os diálogos",
      "Na idealização romântica da vida no campo",
    ],
    correta: 1,
    explicacao:
      "O regionalismo de Graciliano Ramos vai além da ambientação: o espaço sertanejo interfere diretamente em decisões, linguagem e psicologia das personagens.",
  },
  {
    pergunta: "Qual efeito a repetição de situações produz ao longo da narrativa?",
    opcoes: [
      "Transmite progresso linear e solução definitiva para os problemas da família",
      "Reforça a sensação de ciclo e a ausência de mudança estrutural na condição social representada",
      "Serve apenas para alongar o número de páginas do livro",
      "Demonstra falta de planejamento na composição da obra",
    ],
    correta: 1,
    explicacao:
      "A repetição de episódios de fome, deslocamento e submissão sustenta a leitura da obra como estrutura cíclica.",
  },
  {
    pergunta: "Como o espaço narrativo influencia a construção de Vidas Secas?",
    opcoes: [
      "Funciona apenas como pano de fundo decorativo",
      "É irrelevante para as decisões das personagens",
      "Atua como força ativa que organiza decisões, comportamento e estrutura dos capítulos",
      "Aparece apenas no primeiro capítulo da obra",
    ],
    correta: 2,
    explicacao:
      "O sertão, a fazenda e os caminhos moldam diretamente o enredo, sendo mais do que cenário: são elementos estruturantes da narrativa.",
  },
  {
    pergunta: "Qual é a relação entre silêncio e linguagem na obra?",
    opcoes: [
      "O silêncio indica ausência total de vida interior nas personagens",
      "O silêncio externo contrasta com uma interioridade revelada pelo discurso indireto livre, reforçando a densidade psicológica",
      "O silêncio é usado apenas como recurso cômico",
      "O silêncio substitui completamente a necessidade de narrador",
    ],
    correta: 1,
    explicacao:
      "A dificuldade de comunicação verbal das personagens é compensada pelo acesso que o narrador oferece aos seus pensamentos íntimos.",
  },
  {
    pergunta: "Quais características aproximam Vidas Secas da geração de 1930?",
    opcoes: [
      "Experimentalismo radical de vanguarda e ausência total de enredo",
      "Regionalismo técnico, crítica social integrada à narrativa e aprofundamento psicológico",
      "Retorno a modelos narrativos do romantismo brasileiro",
      "Ausência de qualquer relação com problemas sociais brasileiros",
    ],
    correta: 1,
    explicacao:
      "A segunda fase do Modernismo é marcada justamente pela combinação entre regionalismo, apuro técnico e interesse pelos problemas sociais do país.",
  },
  {
    pergunta: "Qual é a função literária da animalização e humanização na obra?",
    opcoes: [
      "Tornar a leitura mais engraçada, sem relação com o restante da narrativa",
      "Evidenciar, por contraste, os efeitos da miséria extrema sobre a dignidade humana",
      "Substituir a necessidade de narrador em terceira pessoa",
      "Eliminar qualquer interpretação simbólica da obra",
    ],
    correta: 1,
    explicacao:
      "A aproximação entre comportamento humano e animal — e a humanização de Baleia — reforça a crítica social por meio da construção literária.",
  },
  {
    pergunta: "Por que a economia vocabular é considerada uma escolha estética, e não apenas uma limitação?",
    opcoes: [
      "Porque reflete diretamente a condição social das personagens e reforça a unidade entre forma e conteúdo",
      "Porque Graciliano Ramos não dominava um vocabulário amplo",
      "Porque o livro foi escrito às pressas",
      "Porque o objetivo era apenas reduzir o número de páginas",
    ],
    correta: 0,
    explicacao:
      "A escassez vocabular funciona como espelho estético da escassez material vivida pela família, sendo uma escolha deliberada do autor.",
  },
  {
    pergunta: "O que caracteriza a posição do narrador em Vidas Secas?",
    opcoes: [
      "Primeira pessoa limitada ao ponto de vista de Fabiano",
      "Narrador onisciente em terceira pessoa, que alterna distância e aproximação por meio do discurso indireto livre",
      "Narrador personagem que participa diretamente dos eventos",
      "Ausência completa de narrador, com apenas diálogos",
    ],
    correta: 1,
    explicacao:
      "É o único romance de Graciliano Ramos narrado integralmente em terceira pessoa, combinando distância e mergulho psicológico.",
  },
];

/* ----------------------------------------------------------------------- */
/* REFERÊNCIAS                                                              */
/* ----------------------------------------------------------------------- */

export const referencias: Referencia[] = [
  {
    tipo: "Edição de referência",
    texto: "RAMOS, Graciliano. Vidas Secas. Rio de Janeiro: Record, 1938 (edição de referência amplamente adotada em escolas e vestibulares).",
  },
  {
    tipo: "Acervo de domínio público",
    texto: "Portal Domínio Público — Ministério da Educação: acervo digital com obras e estudos acadêmicos sobre literatura brasileira.",
    url: "http://www.dominiopublico.gov.br/",
  },
  {
    tipo: "Instituição cultural",
    texto: "Academia Brasileira de Letras — página institucional com conteúdo biográfico e crítico sobre Graciliano Ramos.",
    url: "https://www.academia.org.br/",
  },
  {
    tipo: "Material educacional",
    texto: "Guia do Estudante (Editora Abril) — análise da obra, estrutura narrativa e recursos estilísticos de Vidas Secas.",
    url: "https://guiadoestudante.abril.com.br/estudo/vidas-secas-analise-da-obra-de-graciliano-ramos/",
  },
  {
    tipo: "Material educacional",
    texto: "Brasil Escola (UOL Educação) — artigo crítico sobre estrutura, narrador e discurso indireto livre em Vidas Secas.",
    url: "https://meuartigo.brasilescola.uol.com.br/portugues/vidas-secas-uma-leitura-critica.htm",
  },
];
