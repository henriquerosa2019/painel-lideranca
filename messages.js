// Bússola da Líder - Matriz de Mensagens Alinhadas ao Calendário Real
// Garante que Segundas-feiras sempre tenham mensagens de início de semana, 
// Sextas-feiras sempre tenham mensagens de fechamento e fins de semana sejam de descanso,
// progredindo estrategicamente ao longo das semanas do mês.

const leadershipMatrix = {
  // Semana 1: Blindagem & Primeiros Limites
  1: {
    phase: "Fase 1: Blindagem & Primeiros Limites",
    0: { // Domingo
      weekdayName: "Domingo",
      title: "O Ponto de Partida e a Calma",
      morning: {
        category: "Visão & Perspectiva",
        target: "Espaço Pessoal",
        headline: "Essa Tempestade É uma Fase",
        message: "Essa fase turbulenta não é o seu destino final, é apenas a curva de aprendizado da sua nova autoridade. Você está desenvolvendo musculatura emocional que fará de você uma gestora brilhante no longo prazo.",
        tactical: "Aproveite a luz do domingo. Não deixe a ansiedade da semana que chega roubar a paz do seu momento presente."
      },
      night: {
        category: "Estratégia & Preparação",
        target: "Proteção de Energia",
        headline: "No Comando da Sua Postura",
        message: "Entre na nova semana sabendo exatamente o que está e o que não está sob o seu controle. O humor da chefia e a resistência do time você não controla; sua clareza, seus limites de horário e sua postura calma você controla perfeitamente.",
        tactical: "Defina apenas 3 metas nucleares para a semana. Tudo o que vier além disso será tratado como bônus."
      }
    },
    1: { // Segunda-feira
      weekdayName: "Segunda-feira",
      title: "A Retomada do Leme",
      morning: {
        category: "Foco & Ação",
        target: "Com o Time",
        headline: "Segunda-feira: Uma Prioridade por Vez",
        message: "Hoje começa a semana e você não precisa resolver a desmotivação acumulada de meses do time em oito horas. Escolha ouvir antes de cobrar. Pessoas desmotivadas costumam estar, na verdade, sem clareza de rumo. Dê a eles hoje uma única meta simples, previsível e viável.",
        tactical: "Faça um alinhamento rápido de 10 minutos focando apenas no objetivo #1 do dia. Cancele qualquer reunião redundante."
      },
      night: {
        category: "Blindagem Emocional",
        target: "Autovalidação & Chefia",
        headline: "Segunda Concluída: Seu Valor Não Depende de Aplausos",
        message: "Primeiro dia da semana superado. A frieza ou a cobrança seca da diretoria falam da pressa e do estresse deles, não da sua capacidade. Você assumiu porque era a pessoa mais preparada. Seu papel é entregar qualidade com serenidade, não implorar por aprovação.",
        tactical: "Feche o computador agora. Não abra e-mails ou mensagens corporativas no celular até as 08h de amanhã."
      }
    },
    2: { // Terça-feira
      weekdayName: "Terça-feira",
      title: "A Armadilha de Fazer Sozinha",
      morning: {
        category: "Gestão do Ritmo",
        target: "Com o Time",
        headline: "Não Carregue o Time nas Costas",
        message: "Você não pode querer o resultado mais do que o seu próprio time quer. Seu trabalho como gerente não é executar as tarefas por eles, mas destravar o caminho e orientar a rota. Dê autonomia com acompanhamento, não com sobrecarga própria.",
        tactical: "Quando alguém trouxer uma dúvida, devolva: 'Qual é o seu primeiro passo sugerido?'. Treine a independência da equipe."
      },
      night: {
        category: "Comunicação Executiva",
        target: "Autovalidação & Chefia",
        headline: "Fatos Falam Mais Alto que Desgaste",
        message: "Se a diretoria não vê o esforço nos bastidores, mostre os fatos de forma executiva, sem carência emocional. Resultados documentados falam por si. Lembre-se: gerência é maratona, não corrida de cem metros. Descanse seu corpo hoje para ter lucidez amanhã.",
        tactical: "Anote apenas 3 entregas tangíveis do dia. Guarde em uma pasta de evidências para o relatório semanal."
      }
    },
    3: { // Quarta-feira
      weekdayName: "Quarta-feira",
      title: "Ex-Colegas, Novos Liderados",
      morning: {
        category: "Relações & Postura",
        target: "Com o Time",
        headline: "Firmeza Sem Arrogância",
        message: "É natural sentir certo distanciamento de quem antes era seu par. Não tente 'compensar' sendo permissiva demais para agradar. A equipe não precisa de uma amiga conivente na gerência; precisa de uma líder confiável, justa e coerente.",
        tactical: "Trate todos com o mesmo nível de transparência e respeito. Elogie publicamente, alinhe desvios no privado."
      },
      night: {
        category: "Paz Mental",
        target: "Autovalidação & Chefia",
        headline: "Você Não Precisa Agradar a Todos",
        message: "A transição de colega para líder sempre gera desconforto em quem ficou para trás. O incômodo de alguns colegas não é sobre você, é sobre as frustrações deles. Siga com gentileza e firmeza. Sua consciência limpa vale mais que a aprovação geral.",
        tactical: "Tome um banho morno com intenção de descarrego. Deixe o trabalho escorrer pelo ralo com a água."
      }
    },
    4: { // Quinta-feira
      weekdayName: "Quinta-feira",
      title: "Traduzindo a Pressão da Chefia",
      morning: {
        category: "Comunicação & Clareza",
        target: "Com o Time",
        headline: "Comunique o Porquê",
        message: "Quando a chefia repassa demandas bruscas, filtre a agressividade antes de falar com o time. Explique 'por que' aquilo precisa ser feito e 'qual' é o impacto real. O time se move quando entende o sentido do esforço.",
        tactical: "Traduza um pedido caótico da diretoria em 3 passos simples antes de repassar à equipe."
      },
      night: {
        category: "Blindagem Emocional",
        target: "Autovalidação & Chefia",
        headline: "Não Espere Validação da Frieza",
        message: "Líderes de topo costumam ter pouco tempo e inteligência emocional reduzida. Não meça seu sucesso pela quantidade de elogios que recebe da sua chefia. Crie suas próprias métricas de vitória interna e durma com a certeza do seu empenho.",
        tactical: "Escreva em um post-it: 'Minha competência é comprovada por resultados, não pela simpatia alheia'."
      }
    },
    5: { // Sexta-feira
      weekdayName: "Sexta-feira",
      title: "Fechamento de Ciclo & Desconexão",
      morning: {
        category: "Cultura & Vínculo",
        target: "Com o Time",
        headline: "Sexta-feira: Celebre o Progresso Invisível",
        message: "Um time desmotivado esqueceu a sensação de vencer. Aponte hoje uma microvitória que passou batida nesta semana: um relatório no prazo, um cliente bem atendido, um colega ajudado. O reconhecimento pontual devolve o ânimo.",
        tactical: "Envie uma mensagem curta no privado para um colaborador agradecendo por uma entrega bem feita."
      },
      night: {
        category: "Desconexão Total",
        target: "Autovalidação & Chefia",
        headline: "Sexta-Feira: O Expediente Fechou",
        message: "Você sobreviveu a mais uma semana sob fogo cruzado. Nenhum e-mail urgente da diretoria vale sua noite de sono ou sua saúde mental. Desligue as notificações corporativas: este fim de semana é para você se reconectar consigo mesma.",
        tactical: "Ative o modo 'Não Perturbe' ou silencie grupos de trabalho até segunda-feira de manhã."
      }
    },
    6: { // Sábado
      weekdayName: "Sábado",
      title: "Identidade Além do Cargo",
      morning: {
        category: "Saúde & Identidade",
        target: "Espaço Pessoal",
        headline: "Sábado: Quem É Você Além do Crachá?",
        message: "Hoje o dia é todinho seu. Lembre-se de quem você era antes desse cargo existir: seus gostos, seu riso, seus momentos de silêncio. Um líder exausto não tem criatividade para resolver problemas. Permita-se não pensar em metas hoje.",
        tactical: "Tire pelo menos 2 horas longe de qualquer tela. Caminhe ao ar livre, leia algo leve ou descanse sem culpa."
      },
      night: {
        category: "Acolhimento & Descanso",
        target: "Recuperação Profunda",
        headline: "Sentir Cansaço Não É Fraqueza",
        message: "Acolha seus sentimentos sem se julgar fraca. O que você está enfrentando é uma das transições profissionais mais difíceis que existem. Ter dúvidas e cansaço é humano; persistir com dignidade é sua força. Cuide do seu sono esta noite.",
        tactical: "Beba um chá relaxante (camomila ou erva-doce) e deite-se 30 minutos mais cedo."
      }
    }
  },

  // Semana 2: Conexão com o Time Sem Sobrecarga
  2: {
    phase: "Fase 2: Reconectando com o Time",
    0: { // Domingo
      weekdayName: "Domingo",
      title: "Perspectiva de Longo Prazo",
      morning: {
        category: "Visão Serena",
        target: "Espaço Pessoal",
        headline: "Cultive a Calma Interior",
        message: "A maturidade de uma líder não se mede na ausência de problemas, mas na serenidade com que ela escolhe não se desesperar. Seu domingo pertence à sua renovação.",
        tactical: "Faça uma caminhada ou passe um tempo com quem você ama sem falar sobre prazos ou trabalho."
      },
      night: {
        category: "Estratégia & Preparação",
        target: "Proteção de Energia",
        headline: "Preparação Sem Ansiedade",
        message: "Entre na nova semana sabendo que você não precisa ter todas as respostas de antemão. Seu discernimento e calma serão suficientes para cada situação que surgir.",
        tactical: "Anote apenas as 3 prioridades essenciais para amanhã e desligue a mente corporativa."
      }
    },
    1: { // Segunda-feira
      weekdayName: "Segunda-feira",
      title: "Segunda de Blindagem & Foco",
      morning: {
        category: "Foco & Alinhamento",
        target: "Com o Time",
        headline: "Segunda-feira: Proteja o Foco da Equipe",
        message: "Uma nova semana começa hoje. Ser uma boa gerente significa ser um escudo para o seu time. Quando a chefia pedir demandas impossíveis, não repasse o pânico para a equipe. Pergunte: 'Para priorizarmos esta nova entrega, qual das atuais devemos pausar?'.",
        tactical: "Pratique essa resposta estratégica antes de qualquer reunião com a diretoria."
      },
      night: {
        category: "Blindagem Emocional",
        target: "Autovalidação & Chefia",
        headline: "Segunda Concluída: Dizer Não É Liderança",
        message: "Primeiro dia da semana superado com firmeza. Dizer 'sim' para tudo não demonstra capacidade, demonstra falta de limites. A exaustão que você sente é o resultado de engolir expectativas irreais. Impor limites com dados preserva o projeto e a sua saúde.",
        tactical: "Respire fundo por 4 segundos, segure por 4 e solte por 6. Deixe o peso do dia no escritório."
      }
    },
    2: { // Terça-feira
      weekdayName: "Terça-feira",
      title: "Desarmando Ruídos e Fofocas",
      morning: {
        category: "Cultura & Postura",
        target: "Com o Time",
        headline: "Luz nos Cantos Escuros",
        message: "Rádio-peão e desmotivação se alimentam de falta de informação. Se notar boatos ou descontentamento subterrâneo, convoque conversas diretas e serenas. A verdade dita com calma desmantela intrigas instantaneamente.",
        tactical: "Faça uma pergunta aberta em 1-on-1: 'O que está travando o seu dia a dia que eu posso ajudar a resolver?'."
      },
      night: {
        category: "Autovalidação",
        target: "Chefia & Pares",
        headline: "Sua Consciência É o Seu Travesseiro",
        message: "Você não controla o que cochicham nos corredores ou nas salas de reunião. Você controla sua entrega impecável, sua retidão ética e o respeito aos liderados. Quem trabalha com verdade dorme em paz.",
        tactical: "Anote uma preocupação em um papel e rasgue-a: simbolize o desapego do que não depende de você."
      }
    },
    3: { // Quarta-feira
      weekdayName: "Quarta-feira",
      title: "Desfazendo a Síndrome da Impostora",
      morning: {
        category: "Confiança & Liderança",
        target: "Com o Time",
        headline: "Você Merece Esta Cadeira",
        message: "Você não chegou até aqui por sorte ou acaso. A antiga titular saiu e a empresa confiou em VOCÊ. Se a voz da autocrítica tentar sussurrar que você não dá conta, lembre-se das entregas brilhantes que te trouxeram a esta promoção.",
        tactical: "Entre na sala de reuniões com postura ereta, ombros relaxados e queixo firme. A linguagem corporal molda a mente."
      },
      night: {
        category: "Blindagem Emocional",
        target: "Autovalidação & Chefia",
        headline: "Aprenda no Processo, Sem Punição",
        message: "Ninguém nasce gerente pronto. Todos os diretores acima de você também cometeram erros e tiveram dias de pânico no início. Seja paciente com o seu tempo de maturação.",
        tactical: "Agradeça a si mesma por ter tido a coragem de assumir a responsabilidade onde outros recuaram."
      }
    },
    4: { // Quinta-feira
      weekdayName: "Quinta-feira",
      title: "Delegar com Confiança",
      morning: {
        category: "Gestão & Autonomia",
        target: "Com o Time",
        headline: "Deixe o Time Experimentar",
        message: "Centralizar tudo é a rota expressa para o burnout. Delegue tarefas com escopo fechado e prazos claros. Se o colaborador fizer 80% tão bem quanto você faria, já é uma vitória extraordinária.",
        tactical: "Passe hoje uma tarefa que você costuma centralizar para alguém da equipe. Explique o objetivo e combine o retorno."
      },
      night: {
        category: "Saúde & Limites",
        target: "Autovalidação & Chefia",
        headline: "O Gargalo Não É Você",
        message: "Quando você para de ser a resolvedora de todos os pequenos problemas, o time amadurece e você ganha fôlego para pensar estrategicamente. Menos urgência, mais clareza.",
        tactical: "Evite checar o status da tarefa delegada a cada hora. Dê espaço para a confiança respirar."
      }
    },
    5: { // Sexta-feira
      weekdayName: "Sexta-feira",
      title: "Sexta de Reconhecimento Coletivo",
      morning: {
        category: "Cultura & Vínculo",
        target: "Com o Time",
        headline: "Sexta-feira: Feche a Semana com Luz",
        message: "Agradeça ao time pelos desafios superados nesses últimos dias. Reconhecer o esforço alheio dissolve rancores e constrói lealdade genuína. Mostre que você está ao lado deles, não acima deles.",
        tactical: "Antes das 17h, faça um agradecimento coletivo sincero destacando 2 coisas boas conquistadas."
      },
      night: {
        category: "Desconexão Total",
        target: "Autovalidação & Chefia",
        headline: "Sexta-Feira: Portas Fechadas, Mente Leve",
        message: "Mais uma semana de liderança superada. Você está resistindo, aprendendo e construindo. Nenhum problema corporativo pode ultrapassar a porta da sua casa esta noite.",
        tactical: "Desconecte seu e-mail corporativo durante o fim de semana. Você merece esse refúgio sagrado."
      }
    },
    6: { // Sábado
      weekdayName: "Sábado",
      title: "O Silêncio que Regenera",
      morning: {
        category: "Saúde & Descanso",
        target: "Espaço Pessoal",
        headline: "Sábado: O Silêncio É o Maior Luxo",
        message: "A mente que gerencia pessoas e atende pressões precisa de momentos de absoluto silêncio para não colapsar. Desligue as notificações, esqueça as cobranças e saboreie o seu café da manhã sem pressa.",
        tactical: "Faça uma refeição inteira sem olhar para o celular ou para a televisão."
      },
      night: {
        category: "Autovalidação",
        target: "Recuperação Profunda",
        headline: "Você É Forte Pela Sua Constância",
        message: "Não é a força bruta que vence, é a constância serena. Cada dia que você mantém a dignidade sob pressão, seu caráter de líder se consolida. Durma com o coração tranquilo.",
        tactical: "Deite-se em um quarto escuro e silencioso, agradecendo pelo seu corpo que te sustenta firme."
      }
    }
  },

  // Semana 3: Firmeza Executiva com a Chefia
  3: {
    phase: "Fase 3: Firmeza Executiva com a Chefia",
    0: { // Domingo
      weekdayName: "Domingo",
      title: "Clareza Estratégica",
      morning: {
        category: "Perspectiva Serena",
        target: "Vida Pessoal",
        headline: "Domingo: Recarregue Suas Baterias",
        message: "Você já superou os maiores sustos da transição de cargo. Agora você está consolidando seu estilo de liderança. Respire fundo e aproveite seu dia.",
        tactical: "Faça algo puramente relaxante: um bom livro, um filme ou uma conversa agradável."
      },
      night: {
        category: "Preparação Serena",
        target: "Proteção de Energia",
        headline: "Sem Medo da Nova Semana",
        message: "Você não tem mais medo das reuniões duras ou dos e-mails ríspidos. Você aprendeu que eles não têm o poder de diminuir quem você é. Amanhã começa a semana com total serenidade.",
        tactical: "Durma cedo, sabendo que você domina as ferramentas e a postura necessárias."
      }
    },
    1: { // Segunda-feira
      weekdayName: "Segunda-feira",
      title: "Segunda de Firmeza & Resistência",
      morning: {
        category: "Visão & Força",
        target: "Com o Time",
        headline: "Segunda-feira: A Força da Sua Trajetória",
        message: "Começa mais uma semana. Olhe para trás: você enfrentou situações que pareciam insuportáveis e continuou de pé. A tempestade não te derrubou. Traga essa certeza para o alinhamento de hoje com a sua equipe.",
        tactical: "Compartilhe uma visão positiva com o time: 'Estamos afinando nosso ritmo a cada dia'."
      },
      night: {
        category: "Autovalidação",
        target: "Chefia & Carreira",
        headline: "Segunda Vencida: Maturidade Não Se Compra",
        message: "Primeiro dia vencido com excelência. A casca executiva que você está criando vale mais que qualquer teoria. Você está vivendo na prática a gestão real. Sinta orgulho da sua resiliência.",
        tactical: "Escreva em um caderno 3 coisas difíceis que você já resolveu com sucesso neste cargo."
      }
    },
    2: { // Terça-feira
      weekdayName: "Terça-feira",
      title: "Feedback com Gentileza e Firmeza",
      morning: {
        category: "Alinhamento & Gestão",
        target: "Com o Time",
        headline: "Gentileza Firme",
        message: "Se algum liderado está atrasando entregas ou contaminando o clima, converse no privado hoje. Não use tom acusatório. Comece dizendo: 'Percebi uma mudança no seu ritmo e quero entender o que está acontecendo'. Firmeza no padrão, gentileza na abordagem.",
        tactical: "Evite adiar conversas difíceis. Conversas não tidas viram crises desnecessárias."
      },
      night: {
        category: "Blindagem Emocional",
        target: "Autovalidação & Chefia",
        headline: "Você Não É Responsável Pelo Mau Humor Deles",
        message: "Alguns dias a chefia estará impaciente e o time estará resistente. Lembre-se: o seu papel é ser o ponto de estabilidade e lucidez, não o receptáculo de amargura de ninguém.",
        tactical: "Faça um escalda-pés ou tome um banho quente e expire todo o peso acumulado do dia."
      }
    },
    3: { // Quarta-feira
      weekdayName: "Quarta-feira",
      title: "Priorizar Para Não Colapsar",
      morning: {
        category: "Gestão do Caos",
        target: "Com o Time",
        headline: "Quando Tudo É Urgente, Nada É Urgente",
        message: "A alta gestão costuma rotular tudo como 'para ontem'. Sua maior contribuição como gerente é definir o que é realmente vital e o que pode esperar. Defenda o foco da sua equipe com unhas e dentes.",
        tactical: "Categorize as demandas do dia em: 1) Urgente & Importante; 2) Importante mas programável; 3) Ruído."
      },
      night: {
        category: "Saúde & Limites",
        target: "Autovalidação & Chefia",
        headline: "Produtividade Sustentável",
        message: "Trabalhar até a exaustão física não é sinal de dedicação, é sinal de alerta. Você precisa do seu corpo são para pensar criticamente. Limitar o horário de saída é ato de liderança inteligente.",
        tactical: "Saia do trabalho exatamente no horário previsto hoje, sem pedir desculpas por cumprir sua jornada."
      }
    },
    4: { // Quinta-feira
      weekdayName: "Quinta-feira",
      title: "Comunicação Baseada em Dados",
      morning: {
        category: "Comunicação Executiva",
        target: "Com a Diretoria",
        headline: "Fale a Língua dos Números",
        message: "Quando for reportar o andamento das tarefas para a chefia, não fale sobre cansaço ou esforço. Mostre números, prazos cumpridos e obstáculos eliminados. Dados neutralizam subjetividades e silenciam cobranças injustas.",
        tactical: "Envie um e-mail de 4 linhas com tópicos objetivos: 'O que entregamos / O que está em andamento / O que precisamos de apoio'."
      },
      night: {
        category: "Blindagem Emocional",
        target: "Autovalidação",
        headline: "Você Não Depende da Simpatia Deles",
        message: "A aprovação da diretoria é volátil e depende do humor do dia. A sua competência técnica e moral é perene. Foco na entrega correta e desapego da aprovação emocional.",
        tactical: "Descanse os olhos de telas por pelo menos 40 minutos antes de dormir."
      }
    },
    5: { // Sexta-feira
      weekdayName: "Sexta-feira",
      title: "Sexta de Estabilidade & Conexão",
      morning: {
        category: "Postura & Energia",
        target: "Com o Time",
        headline: "Sexta-feira: Sua Serenidade Acalma a Equipe",
        message: "O time lê a linguagem corporal da gerente o tempo todo. Se você aparentar desespero, eles entrarão em pânico. Se você mantiver a voz calma e passos firmes, eles se acalmarão. Sua serenidade é o farol deles neste encerramento de semana.",
        tactical: "Fale 10% mais pausadamente nas reuniões de hoje. Respirar no meio das frases transmite autoridade."
      },
      night: {
        category: "Desconexão Total",
        target: "Autovalidação & Chefia",
        headline: "Sexta-Feira: Fim de Semana É Sagrado",
        message: "Mais uma semana de liderança superada sob fogo cruzado. Você está vencendo a fase mais crítica da curva. Permita-se curtir sua vida pessoal com intensidade e leveza.",
        tactical: "Guarde o notebook na mochila e coloque-o fora do seu campo de visão no quarto."
      }
    },
    6: { // Sábado
      weekdayName: "Sábado",
      title: "O Reencontro Consigo Mesma",
      morning: {
        category: "Lazer & Renovação",
        target: "Espaço Pessoal",
        headline: "Sábado: Alimente Sua Alma",
        message: "Hoje não é dia de pensar em metas corporativas, métricas ou demandas da diretoria. É dia de rir com quem você ama, provar algo gostoso e lembrar que a vida é muito maior que o ambiente de trabalho.",
        tactical: "Faça algo puramente por prazer hoje: cozinhar seu prato favorito, ouvir música ou passear."
      },
      night: {
        category: "Paz Interior",
        target: "Recuperação Profunda",
        headline: "Acolha Sua Própria Jornada",
        message: "Você é uma mulher admirável que teve a coragem de dar um passo gigante na carreira. Honre sua própria coragem. Seu futuro guarda vitórias que você nem imagina ainda.",
        tactical: "Agradeça mentalmente por 3 coisas boas da sua vida fora da empresa."
      }
    }
  },

  // Semana 4: Liderança Sustentável & Saúde Plena
  4: {
    phase: "Fase 4: Liderança Sustentável & Saúde Plena",
    0: { // Domingo
      weekdayName: "Domingo",
      title: "A Bússola Está Calibrada",
      morning: {
        category: "Perspectiva & Futuro",
        target: "Vida & Carreira",
        headline: "Domingo: A Nova Mulher Líder",
        message: "A mulher insegura e estressada do início do cargo deu lugar a uma gestora experiente, que conhece seus limites, sabe dizer não e lidera pelo exemplo. A transformação foi profunda e real.",
        tactical: "Olhe-se no espelho e diga com convicção: 'Eu tenho orgulho da líder que estou me tornando'."
      },
      night: {
        category: "Preparação Serena",
        target: "Proteção de Energia",
        headline: "Dormir com o Coração em Paz",
        message: "A liderança sustentável já faz parte da sua rotina. Entre na semana com leveza e a convicção de que você domina seu trabalho.",
        tactical: "Durma cedo, celebrando a mulher forte e calma que você é."
      }
    },
    1: { // Segunda-feira
      weekdayName: "Segunda-feira",
      title: "Segunda de Comando & Clareza",
      morning: {
        category: "Visão & Estratégia",
        target: "Com o Time",
        headline: "Segunda-feira: A Cadeira É Definitivamente Sua",
        message: "Começamos mais uma semana e você já domina a dinâmica da cadeira de gerência. Não hesite. Comece a semana com a postura firme e serena de quem construiu a autoridade dia a dia.",
        tactical: "Conduza o alinhamento com a certeza serena de quem sabe o que precisa ser entregue."
      },
      night: {
        category: "Blindagem Emocional",
        target: "Autovalidação & Chefia",
        headline: "Segunda Vencida: Firmeza na Rota",
        message: "Primeiro dia da semana concluído com tranquilidade. Se surgir pressão da diretoria, mantenha a calma. Crises são rotineiras; sua postura madura é o diferencial.",
        tactical: "Beba um copo de água fresca e repita: 'Uma coisa de cada vez. Eu tenho o controle do meu ritmo'."
      }
    },
    2: { // Terça-feira
      weekdayName: "Terça-feira",
      title: "Lidando com Resistências",
      morning: {
        category: "Relações & Autoridade",
        target: "Com o Time",
        headline: "Clareza nos Acordos",
        message: "Se alguém ainda demonstrar resistência velada ou lentidão intencional, traga o combinado para a luz. Peça prazos acordados em conjunto e registre por escrito. O profissionalismo protege ambas as partes.",
        tactical: "Finalize combinados com a pergunta: 'Ficou claro para quando precisamos disso e qual é o padrão esperado?'."
      },
      night: {
        category: "Autovalidação",
        target: "Chefia & Pares",
        headline: "Você Não Precisa da Amizade de Todos",
        message: "Gerência requer respeito e alinhamento de entregas, não amizades forçadas. Se alguém optar por manter distância pessoal, respeite, contanto que o trabalho flua com profissionalismo.",
        tactical: "Separe o afeto da entrega funcional. Tire o peso emocional das relações de trabalho."
      }
    },
    3: { // Quarta-feira
      weekdayName: "Quarta-feira",
      title: "O Templo do Seu Corpo",
      morning: {
        category: "Saúde & Performance",
        target: "Equilíbrio Pessoal",
        headline: "Líder Exausta Não Tem Lucidez",
        message: "A dor de cabeça, a tensão nos ombros e a fadiga são os sinais do seu corpo pedindo socorro. Não negligencie água, pausas e almoço decente hoje. Nenhum relatório substitui a sua saúde física.",
        tactical: "Levante da cadeira a cada 90 minutos para esticar o corpo, beber água e respirar fundo por 2 minutos."
      },
      night: {
        category: "Proteção & Repouso",
        target: "Recuperação",
        headline: "Sua Saúde É a Sua Maior Fortuna",
        message: "Se você adoecer, a empresa substituirá sua vaga em duas semanas. Para a sua vida e para quem te ama, você é insubstituível. Coloque sua saúde no topo da hierarquia de prioridades.",
        tactical: "Desconecte aparelhos eletrônicos do quarto e durma em um ambiente totalmente escuro."
      }
    },
    4: { // Quinta-feira
      weekdayName: "Quinta-feira",
      title: "Elogio Público, Correção no Privado",
      morning: {
        category: "Gestão & Confiança",
        target: "Com o Time",
        headline: "Construindo Segurança Psicológica",
        message: "A confiança do time se consolida quando eles sabem que você nunca os humilhará em público. Se houver falhas, corrija a portas fechadas. O time lutará por uma líder que os protege.",
        tactical: "Se alguém cometer um erro, foque na solução: 'Como vamos corrigir isso agora e evitar que se repita?'."
      },
      night: {
        category: "Blindagem & Chefia",
        target: "Autovalidação",
        headline: "Você É a Líder que Você Gostaria de Ter Tido",
        message: "Mesmo sob as cobranças frias da diretoria, você está escolhendo ser uma líder humana e justa. Esse legado ninguém tira de você. Você está mudando a cultura pelo seu exemplo diário.",
        tactical: "Sinta o orgulho sincero de liderar com caráter e empatia."
      }
    },
    5: { // Sexta-feira
      weekdayName: "Sexta-feira",
      title: "Sexta de Balanço: O Time Está Andando",
      morning: {
        category: "Fechamento de Ciclo",
        target: "Com o Time",
        headline: "Sexta-feira: Olhe a Distância Percorrida",
        message: "O time que parecia desgovernado no início agora tem rotina, previsibilidade e confiança na sua liderança. Foi o seu trabalho nos bastidores que possibilitou isso. Celebre com eles neste encerramento de semana.",
        tactical: "Encerre a semana mais cedo se possível e deseje a todos um descanso merecido."
      },
      night: {
        category: "Desconexão Total",
        target: "Autovalidação",
        headline: "Sexta-Feira: Sua Vitória É Real",
        message: "Mais uma semana vencida com maestria. Você passou pela fase mais dura da tempestade. O pior já ficou para trás. Comemore essa conquista pessoal esta noite.",
        tactical: "Abra um vinho gostoso, faça seu jantar favorito ou celebre com quem esteve ao seu lado nessa jornada."
      }
    },
    6: { // Sábado
      weekdayName: "Sábado",
      title: "O Prazer da Leveza",
      morning: {
        category: "Renovação",
        target: "Espaço Pessoal",
        headline: "Sábado: A Leveza É Sua por Direito",
        message: "Respire o ar puro do fim de semana. Você provou a si mesma que é capaz de liderar em meio ao caos. Hoje é dia de se abastecer de beleza, risos e paz.",
        tactical: "Dedique o dia a momentos leves com amigos, família ou consigo mesma."
      },
      night: {
        category: "Paz Profunda",
        target: "Recuperação",
        headline: "O Descanso É Sagrado",
        message: "Durma com a tranquilidade de quem cumpriu o seu dever com dignidade e bravura. Sua alma está renovada para os novos horizontes que se abrem.",
        tactical: "Escreva uma palavra que resuma a sua força hoje: 'Resiliência', 'Coragem' ou 'Paz'."
      }
    }
  },

  // Semana 5: Fechamento de Mês & Novos Ciclos
  5: {
    phase: "Fase 5: Fechamento & Consagração",
    0: { // Domingo
      weekdayName: "Domingo",
      title: "Um Mês de Transformação Completa",
      morning: {
        category: "Triunfo & Gratidão",
        target: "Com o Time",
        headline: "Domingo: Horizonte Iluminado",
        message: "Olhe para a trajetória de superação deste mês. O que antes parecia um fardo esmagador se transformou em maturidade, competência e liderança de alto nível.",
        tactical: "Sorria para si mesma e comemore suas conquistas silenciosas."
      },
      night: {
        category: "Consagração Pessoal",
        target: "Paz Perpétua",
        headline: "Você Venceu o Mês. O Futuro É Seu",
        message: "Você provou que é possível liderar sem perder a alma, sem destruir a saúde física e sem depender da aprovação alheia. Você encontrou a sua Bússola interior. Mantenha essa luz acesa.",
        tactical: "Dê um abraço apertado em si mesma ou celebre este marco com quem você ama."
      }
    },
    1: { // Segunda-feira
      weekdayName: "Segunda-feira",
      title: "A Consolidação da Sua Autoridade",
      morning: {
        category: "Maturidade Executiva",
        target: "Com o Time",
        headline: "Segunda-feira: A Cadeira É Sua de Fato e de Direito",
        message: "Começamos mais uma semana e o respeito do time pelo seu comando é nítido, porque você foi justa, consistente e presente em todos os momentos difíceis. Conduza com serenidade.",
        tactical: "Faça o alinhamento semanal com a tranquilidade de quem conquistou seu espaço."
      },
      night: {
        category: "Autovalidação",
        target: "Chefia & Empresa",
        headline: "Segunda Vencida: Seu Lugar Está Conquistado",
        message: "A diretoria sabe que a equipe roda sob seu comando firme e seguro. Seu trabalho fala por você. Descanse com a cabeça erguida e o coração calmo.",
        tactical: "Guarde as vitórias do mês como prova viva de tudo o que você é capaz de superar."
      }
    },
    2: { // Terça-feira
      weekdayName: "Terça-feira",
      title: "Harmonia e Foco",
      morning: {
        category: "Gestão Serena",
        target: "Com o Time",
        headline: "Rumo Firme e Previsível",
        message: "A previsibilidade que você trouxe ao time substituiu a ansiedade por confiança. Continue liderando com clareza de metas e respeito ao tempo das pessoas.",
        tactical: "Agradeça a um membro da equipe pela consistência demonstrada."
      },
      night: {
        category: "Equilíbrio",
        target: "Autovalidação",
        headline: "Seu Ritmo É Saudável",
        message: "Você aprendeu a não correr no ritmo da ansiedade alheia. Seu ritmo é o da eficácia serena. Durma em paz.",
        tactical: "Desconecte-se cedo e reserve a noite para o seu bem-estar."
      }
    },
    3: { // Quarta-feira
      weekdayName: "Quarta-feira",
      title: "Consagração do Processo",
      morning: {
        category: "Cultura & Sucesso",
        target: "Com o Time",
        headline: "Construção Coletiva",
        message: "As microvitórias diárias se somaram e formaram uma equipe sólida e madura. Comemore com eles esse padrão de excelência.",
        tactical: "Compartilhe um indicador positivo recente com toda a equipe."
      },
      night: {
        category: "Paz Interior",
        target: "Autovalidação",
        headline: "Consciência Limpa e Serena",
        message: "Você não sacrificou sua saúde nem seus valores para ter sucesso. Esse é o maior triunfo que uma líder pode ter.",
        tactical: "Agradeça a Deus ou à sua espiritualidade pela força concedida nessa jornada."
      }
    },
    4: { // Quinta-feira
      weekdayName: "Quinta-feira",
      title: "Legado e Futuro",
      morning: {
        category: "Visão & Liderança",
        target: "Com o Time",
        headline: "Olhar para a Frente",
        message: "Com o time estabilizado, você agora tem espaço mental para planejar melhorias reais, inovação e crescimento mútuo.",
        tactical: "Dedique 20 minutos hoje para pensar no futuro do seu setor com tranquilidade."
      },
      night: {
        category: "Confiança",
        target: "Autovalidação",
        headline: "Você Domina Seu Espaço",
        message: "Não há cobrança que possa te abalar quando você sabe exatamente o que está fazendo. Durma com plena segurança.",
        tactical: "Faça uma respiração lenta e acolha a paz da sua mente."
      }
    },
    5: { // Sexta-feira
      weekdayName: "Sexta-feira",
      title: "Sexta de Consagração Final",
      morning: {
        category: "Triunfo & Celebração",
        target: "Com o Time",
        headline: "Sexta-feira: Missão Cumprida",
        message: "Encerramos a semana e o mês com a certeza de que a transformação foi um sucesso absoluto. O time venceu e você liderou com maestria.",
        tactical: "Faça um brinde ou um café da tarde de comemoração com o seu time."
      },
      night: {
        category: "Desconexão Total",
        target: "Autovalidação",
        headline: "Sexta-Feira: O Futuro Brilha",
        message: "Você venceu o maior desafio profissional da sua vida. Agora você é uma gerente consolidada, respeitada e em paz. Desfrute o fim de semana com todo o merecimento.",
        tactical: "Celebre com quem você ama. A vitória é sua!"
      }
    },
    6: { // Sábado
      weekdayName: "Sábado",
      title: "Vida Plena & Leve",
      morning: {
        category: "Plenitude",
        target: "Espaço Pessoal",
        headline: "Sábado: Viver com Leveza",
        message: "Hoje é dia de usufruir a paz que você conquistou. Seu trabalho está seguro, sua equipe está alinhada e você está no comando.",
        tactical: "Viva seu sábado com intensidade, presença e amor."
      },
      night: {
        category: "Descanso Total",
        target: "Recuperação",
        headline: "Dormir Como Uma Vitoriosa",
        message: "Descanse seu corpo e sua alma. Sua mente está serena, seus limites estão protegidos e sua história está apenas começando.",
        tactical: "Durma profundamente sabendo que você é mais do que suficiente."
      }
    }
  }
};

// Função de Busca que Alinha Rigorosamente com o Calendário Real
function getLeadershipMessageForDate(day, month, year) {
  const dateObj = new Date(year, month, day);
  const weekday = dateObj.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  
  // Calcula qual semana do mês este dia pertence (1 a 5)
  const weekNumber = Math.min(Math.floor((day - 1) / 7) + 1, 5);

  const weekObj = leadershipMatrix[weekNumber] || leadershipMatrix[1];
  const dayMessage = weekObj[weekday] || leadershipMatrix[1][weekday];

  return {
    phase: weekObj.phase,
    weekdayName: dayMessage.weekdayName,
    title: dayMessage.title,
    morning: dayMessage.morning,
    night: dayMessage.night
  };
}

// Objeto de Compatibilidade monthMessagesData (gerado dinamicamente para o mês atual)
const todayGlobal = new Date();
const currentGlobalMonth = todayGlobal.getMonth();
const currentGlobalYear = todayGlobal.getFullYear();

const monthMessagesData = {};
for (let d = 1; d <= 31; d++) {
  monthMessagesData[d] = getLeadershipMessageForDate(d, currentGlobalMonth, currentGlobalYear);
}
