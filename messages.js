// Banco de Mensagens Completo para os 31 Dias do Mês (62 Mensagens Inéditas)
const monthMessagesData = {
  1: {
    phase: "Fase 1: Blindagem & Primeiros Limites",
    title: "O Leme É Seu, Mas o Peso Não",
    morning: {
      category: "Foco & Ação",
      target: "Com o Time",
      headline: "Uma Prioridade por Vez",
      message: "Hoje você não precisa resolver a desmotivação acumulada de meses do time em oito horas. Escolha ouvir antes de cobrar. Pessoas desmotivadas costumam estar, na verdade, sem clareza de rumo. Dê a eles hoje uma única meta simples, previsível e viável.",
      tactical: "Faça um alinhamento rápido de 10 minutos focando apenas no objetivo #1 do dia. Cancele qualquer reunião de alinhamento redundante."
    },
    night: {
      category: "Blindagem Emocional",
      target: "Autovalidação & Chefia",
      headline: "Seu Valor Não Depende de Aplauso",
      message: "A frieza ou a cobrança seca da diretoria falam da pressa e do estresse deles, não da sua capacidade. Você assumiu porque era a pessoa mais preparada. Seu papel é entregar qualidade com serenidade, não implorar por aprovação. O expediente acabou e sua saúde é inegociável.",
      tactical: "Feche o computador agora. Não abra e-mails ou mensagens corporativas no celular até as 08h de amanhã."
    }
  },
  2: {
    phase: "Fase 1: Blindagem & Primeiros Limites",
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
  3: {
    phase: "Fase 1: Blindagem & Primeiros Limites",
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
  4: {
    phase: "Fase 1: Blindagem & Primeiros Limites",
    title: "O Silêncio da Diretoria",
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
  5: {
    phase: "Fase 1: Blindagem & Primeiros Limites",
    title: "O Combustível das Microvitórias",
    morning: {
      category: "Cultura & Vínculo",
      target: "Com o Time",
      headline: "Celebre o Progresso Invisível",
      message: "Um time desmotivado esqueceu a sensação de vencer. Aponte hoje uma microvitória que passou batida: um relatório no prazo, um cliente bem atendido, um colega ajudado. O reconhecimento pontual devolve o ânimo mais rápido que discursos inflamados.",
      tactical: "Envie uma mensagem curta no privado para um colaborador: 'Obrigada pelo cuidado na entrega X, fez a diferença!'."
    },
    night: {
      category: "Desconexão Total",
      target: "Autovalidação & Chefia",
      headline: "Sexta-Feira: O Expediente Fechou",
      message: "Você sobreviveu a mais uma semana sob fogo cruzado. Nenhum e-mail urgente da diretoria vale sua noite de sono ou sua saúde mental. Desligue as notificações corporativas: este fim de semana é para você se reconectar consigo mesma.",
      tactical: "Ative o modo 'Não Perturbe' ou silencie grupos de trabalho até segunda-feira de manhã."
    }
  },
  6: {
    phase: "Fase 1: Blindagem & Primeiros Limites",
    title: "Identidade Além do Cargo",
    morning: {
      category: "Saúde & Identidade",
      target: "Espaço Pessoal",
      headline: "Quem É Você Além do Crachá?",
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
  },
  7: {
    phase: "Fase 1: Blindagem & Primeiros Limites",
    title: "O Mapa do Controle",
    morning: {
      category: "Visão & Perspectiva",
      target: "Longo Prazo",
      headline: "Essa Tempestade Vai Passar",
      message: "Essa fase turbulenta não é o seu destino, é apenas a curva de aprendizado da sua nova autoridade. Você está desenvolvendo musculatura emocional que fará de você uma gestora brilhante no longo prazo.",
      tactical: "Não deixe a ansiedade da tarde de domingo antecipar o estresse de segunda. Desfrute o momento presente."
    },
    night: {
      category: "Estratégia & Preparação",
      target: "Proteção de Energia",
      headline: "No Comando da Sua Postura",
      message: "Entre na nova semana sabendo exatamente o que está e o que não está sob o seu controle. O humor da chefia e a resistência do time você não controla; sua clareza, seus limites de horário e sua postura calma você controla perfeitamente.",
      tactical: "Defina apenas 3 metas nucleares para a semana. Tudo o que vier além disso será tratado como bônus."
    }
  },
  8: {
    phase: "Fase 2: Reconectando com o Time",
    title: "A Arte de Dizer Não",
    morning: {
      category: "Foco & Alinhamento",
      target: "Com o Time",
      headline: "Proteja o Foco da Equipe",
      message: "Ser uma boa gerente significa ser um escudo para o seu time. Quando a chefia pedir mais demandas impossíveis, não repasse o pânico para a equipe. Pergunte à chefia: 'Para priorizarmos esta nova entrega, qual das atuais devemos pausar?'.",
      tactical: "Pratique essa resposta estratégica antes da reunião de alinhamento com a diretoria."
    },
    night: {
      category: "Blindagem Emocional",
      target: "Autovalidação & Chefia",
      headline: "Dizer Não É Liderança Estratégica",
      message: "Dizer 'sim' para tudo não demonstra capacidade, demonstra falta de limites. A exaustão que você sente é o resultado de engolir expectativas irreais. Impor limites com dados preserva o projeto e a sua saúde.",
      tactical: "Respire fundo por 4 segundos, segure por 4 e solte por 6. Acalme o sistema nervoso antes de dormir."
    }
  },
  9: {
    phase: "Fase 2: Reconectando com o Time",
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
  10: {
    phase: "Fase 2: Reconectando com o Time",
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
  11: {
    phase: "Fase 2: Reconectando com o Time",
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
  12: {
    phase: "Fase 2: Reconectando com o Time",
    title: "Filtrando as Críticas da Chefia",
    morning: {
      category: "Comunicação Executiva",
      target: "Com o Time",
      headline: "Separe o Grão da Palha",
      message: "Quando receber um feedback duro da diretoria, separe a emoção da informação técnica. Ignore o tom ríspido e fique apenas com os dados úteis. Corrija o processo sem punir o seu valor pessoal.",
      tactical: "Responda a cobranças ácidas com termos neutros: 'Entendido. Vamos ajustar os pontos X e Y até quinta-feira'."
    },
    night: {
      category: "Blindagem Emocional",
      target: "Autovalidação & Chefia",
      headline: "O Estresse Deles Não É Seu",
      message: "Executivos estressados frequentemente despejam suas próprias ansiedades sobre a gerência média. Não absorva a toxidade alheia como se fosse sua culpa. Você é profissional, não para-raios emocional.",
      tactical: "Coloque uma música instrumental relaxante e faça 5 minutos de respiração diafragmática profunda."
    }
  },
  13: {
    phase: "Fase 2: Reconectando com o Time",
    title: "Sexta de Reconhecimento",
    morning: {
      category: "Cultura & Vínculo",
      target: "Com o Time",
      headline: "Feche a Semana com Luz",
      message: "Agradeça ao time pelos desafios superados nesses últimos dias. Reconhecer o esforço alheio dissolve rancores e constrói lealdade genuína. Mostre que você está ao lado deles, não acima deles.",
      tactical: "Antes das 17h, faça um agradecimento coletivo sincero destacando 2 coisas boas conquistadas."
    },
    night: {
      category: "Desconexão Total",
      target: "Autovalidação & Chefia",
      headline: "Portas Fechadas, Mente Leve",
      message: "Duas semanas completadas na nova rota. Você está resistindo, aprendendo e construindo. Nenhum problema corporativo pode ultrapassar a porta da sua casa esta noite.",
      tactical: "Desconecte seu e-mail do celular durante o fim de semana. Você merece esse refúgio sagrado."
    }
  },
  14: {
    phase: "Fase 2: Reconectando com o Time",
    title: "O Silêncio que Regenera",
    morning: {
      category: "Saúde & Descanso",
      target: "Espaço Pessoal",
      headline: "O Silêncio É o Maior Luxo",
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
  },
  15: {
    phase: "Fase 3: Firmeza Executiva com a Chefia",
    title: "Metade do Caminho: Celebrando a Resistência",
    morning: {
      category: "Visão & Força",
      target: "Com o Time",
      headline: "15 Dias de Firmeza",
      message: "Hoje completamos a metade deste primeiro ciclo. Olhe para trás: você enfrentou situações que pareciam insuportáveis e continuou de pé. A tempestade não te derrubou. Traga essa certeza para a sua reunião de hoje.",
      tactical: "Compartilhe com a equipe uma visão positiva para os próximos 15 dias: 'Estamos afinando o ritmo juntos'."
    },
    night: {
      category: "Autovalidação",
      target: "Chefia & Carreira",
      headline: "Maturidade Não Se Compra",
      message: "A casca executiva que você está criando nestes 15 dias vale mais que qualquer curso de liderança. Você está vivendo na prática a gestão real. Sinta orgulho da sua própria resiliência.",
      tactical: "Escreva num caderno 3 coisas difíceis que você já resolveu com sucesso neste cargo."
    }
  },
  16: {
    phase: "Fase 3: Firmeza Executiva com a Chefia",
    title: "Feedback com Empatia e Firmeza",
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
  17: {
    phase: "Fase 3: Firmeza Executiva com a Chefia",
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
  18: {
    phase: "Fase 3: Firmeza Executiva com a Chefia",
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
  19: {
    phase: "Fase 3: Firmeza Executiva com a Chefia",
    title: "O Efeito Contágio da Líder",
    morning: {
      category: "Postura & Energia",
      target: "Com o Time",
      headline: "Sua Serenidade Inspira Confiança",
      message: "O time lê a linguagem corporal da gerente o tempo todo. Se você aparentar desespero, eles entrarão em pânico. Se você mantiver a voz calma e passos firmes, eles se acalmarão. Sua serenidade é o farol deles.",
      tactical: "Fale 10% mais pausadamente nas reuniões de hoje. Respirar no meio das frases transmite enorme autoridade."
    },
    night: {
      category: "Paz & Autocuidado",
      target: "Vida Pessoal",
      headline: "Desacelerar o Ritmo Cardíaco",
      message: "Você sustentou a barra com elegância e equilíbrio hoje. Agora é hora de desarmar a armadura executiva e voltar a ser apenas você: livre, amada e em paz.",
      tactical: "Coloque uma roupa confortável e aconchegante assim que chegar em casa."
    }
  },
  20: {
    phase: "Fase 3: Firmeza Executiva com a Chefia",
    title: "Sexta de Fechamento Consciente",
    morning: {
      category: "Fechamento Positivo",
      target: "Com o Time",
      headline: "Evolução Invisível",
      message: "Compare o clima do seu time hoje com o primeiro dia que você assumiu. Houve avanços reais na clareza e no ritmo, mesmo que pequenos. Reconheça essa trajetória na frente de todos.",
      tactical: "Elogie a evolução de um processo que antes estava engasgado e que agora flui melhor."
    },
    night: {
      category: "Desconexão Total",
      target: "Autovalidação & Chefia",
      headline: "Fim de Semana É Sagrado",
      message: "Três semanas de liderança superadas. Você está vencendo a fase mais crítica da curva. Permita-se curtir sua vida pessoal com intensidade e leveza.",
      tactical: "Guarde o notebook na mochila e coloque-o fora do seu campo de visão no quarto."
    }
  },
  21: {
    phase: "Fase 3: Firmeza Executiva com a Chefia",
    title: "O Reencontro Consigo Mesma",
    morning: {
      category: "Lazer & Renovação",
      target: "Espaço Pessoal",
      headline: "Alimente Sua Alma",
      message: "Hoje não é dia de pensar em metas corporativas, métricas ou demandas da diretoria. É dia de rir com quem você ama, provar algo gostoso e lembrar que a vida é muito maior que o ambiente de trabalho.",
      tactical: "Faça algo puramente por prazer hoje: cozinhar seu prato favorito, ouvir música ou visitar um lugar bonito."
    },
    night: {
      category: "Paz Interior",
      target: "Recuperação Profunda",
      headline: "Acolha Sua Própria Jornada",
      message: "Você é uma mulher admirável que teve a coragem de dar um passo gigante na carreira. Honre sua própria coragem. Seu futuro guarda vitórias que você nem imagina ainda.",
      tactical: "Agradeça mentalmente por 3 bênçãos concretas da sua vida fora da empresa."
    }
  },
  22: {
    phase: "Fase 4: Liderança Sustentável & Saúde Plena",
    title: "A Última Reta do Mês",
    morning: {
      category: "Visão & Estratégia",
      target: "Com o Time",
      headline: "Comece com Intenção Clara",
      message: "Entramos na última fase deste mês de consolidação. Você não é mais a novata no cargo; você já aprendeu a dinâmica da cadeira. Comece a semana com postura de quem domina o terreno.",
      tactical: "Defina claramente as entregas finais para fechar o mês com a sensação de dever cumprido."
    },
    night: {
      category: "Blindagem Emocional",
      target: "Autovalidação & Chefia",
      headline: "Firmeza na Rota",
      message: "Se surgir pressão de final de mês da diretoria, mantenha a calma. Crises de fechamento são rotineiras em qualquer empresa. Não deixe o nervosismo deles roubar sua estabilidade.",
      tactical: "Beba um copo de água fresca e repita mentalmente: 'Uma coisa de cada vez. Eu tenho o controle do meu ritmo'."
    }
  },
  23: {
    phase: "Fase 4: Liderança Sustentável & Saúde Plena",
    title: "Lidando com Resistências Passivas",
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
  24: {
    phase: "Fase 4: Liderança Sustentável & Saúde Plena",
    title: "Crie Seus Próprios Indicadores de Vitória",
    morning: {
      category: "Cultura & Reconhecimento",
      target: "Com o Time",
      headline: "Elogie o Esforço Sincero",
      message: "A cultura de um time muda quando os membros percebem que seu esforço é visto. Elogie a dedicação de quem se desdobrou esta semana. A gratidão da líder gera engajamento espontâneo.",
      tactical: "Diga a um liderado hoje: 'Vi o quanto você se dedicou naquela entrega, muito obrigada!'."
    },
    night: {
      category: "Blindagem Emocional",
      target: "Autovalidação & Chefia",
      headline: "Seja Sua Própria Juíza",
      message: "Não passe o dia esperando o aval da chefia. Se você sabe que entregou o seu melhor, que conduziu as pessoas com justiça e que protegeu o resultado, sinta-se vitoriosa. Essa é a verdadeira autoliderança.",
      tactical: "Dê a si mesma uma nota 10 pelo seu compromisso ético e durma com a mente tranquila."
    }
  },
  25: {
    phase: "Fase 4: Liderança Sustentável & Saúde Plena",
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
  26: {
    phase: "Fase 4: Liderança Sustentável & Saúde Plena",
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
  27: {
    phase: "Fase 4: Liderança Sustentável & Saúde Plena",
    title: "Sexta de Balanço: O Time Está Andando",
    morning: {
      category: "Fechamento de Ciclo",
      target: "Com o Time",
      headline: "Olhe a Distância Percorrida",
      message: "O time que parecia desgovernado há 4 semanas agora tem rotina, previsibilidade e confiança na sua liderança. Foi o seu trabalho nos bastidores que possibilitou isso. Celebre com eles.",
      tactical: "Encerre a semana mais cedo se possível e deseje a todos um descanso merecido."
    },
    night: {
      category: "Desconexão Total",
      target: "Autovalidação",
      headline: "Sua Vitória É Real",
      message: "Quatro semanas completadas com maestria. Você passou pela fase mais dura da tempestade. O pior já ficou para trás. Comemore essa conquista pessoal esta noite.",
      tactical: "Abra um vinho gostoso, faça seu jantar favorito ou celebre com quem esteve ao seu lado nessa jornada."
    }
  },
  28: {
    phase: "Fase 4: Liderança Sustentável & Saúde Plena",
    title: "O Prazer da Leveza",
    morning: {
      category: "Renovação",
      target: "Espaço Pessoal",
      headline: "A Leveza É Sua por Direito",
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
  },
  29: {
    phase: "Fase 4: Liderança Sustentável & Saúde Plena",
    title: "Domingo de Vitória: Olhe Onde Você Chegou",
    morning: {
      category: "Perspectiva & Futuro",
      target: "Vida & Carreira",
      headline: "A Nova Mulher Líder",
      message: "A mulher insegura e estressada do início do mês deu lugar a uma gestora experiente, que conhece seus limites, sabe dizer não e lidera pelo exemplo. A transformação foi profunda e irreversível.",
      tactical: "Olhe-se no espelho e diga com convicção: 'Eu tenho orgulho da líder que estou me tornando'."
    },
    night: {
      category: "Preparação Serena",
      target: "Proteção de Energia",
      headline: "Sem Medo do Amanhã",
      message: "Você não tem mais medo das reuniões duras ou dos e-mails ríspidos. Você aprendeu que eles não têm o poder de diminuir quem você é. Amanhã começa um novo ciclo com total serenidade.",
      tactical: "Durma cedo, sabendo que você domina as ferramentas e a postura necessárias."
    }
  },
  30: {
    phase: "Fase 4: Liderança Sustentável & Saúde Plena",
    title: "A Consolidação da Sua Autoridade",
    morning: {
      category: "Maturidade Executiva",
      target: "Com o Time",
      headline: "A Cadeira É Definitivamente Sua",
      message: "Você não é mais a substituta temporária; você é a gerente de fato e de direito. O time respeita o seu comando porque você foi justa, consistente e presente em todos os momentos difíceis.",
      tactical: "Conduza o alinhamento com a certeza serena de quem construiu a própria autoridade no dia a dia."
    },
    night: {
      category: "Autovalidação",
      target: "Chefia & Empresa",
      headline: "Seu Lugar Está Conquistado",
      message: "A diretoria pode ou não expressar elogios verbais, mas eles sabem que a equipe está rodando sob seu comando firme e seguro. Seu trabalho fala por você. Descanse com dignidade.",
      tactical: "Guarde as anotações do mês como prova viva de tudo o que você é capaz de superar."
    }
  },
  31: {
    phase: "Fase 4: Liderança Sustentável & Saúde Plena",
    title: "Fechamento de Mês: Sua Nova Postura, Sua Nova Paz",
    morning: {
      category: "Triunfo & Gratidão",
      target: "Com o Time",
      headline: "Um Mês de Transformação Completa",
      message: "Completamos 31 dias de uma travessia histórica. O que antes parecia um fardo esmagador se transformou em maturidade, competência e liderança de alto nível. Agradeça ao time e a si mesma por essa vitória maiúscula.",
      tactical: "Faça uma celebração simbólica com o time: um café compartilhado ou 5 minutos de agradecimento mútuo."
    },
    night: {
      category: "Consagração Pessoal",
      target: "Paz Perpétua",
      headline: "Você Venceu o Mês. O Futuro É Seu",
      message: "Você provou que é possível liderar sem perder a alma, sem destruir a saúde física e sem depender da aprovação alheia. Você encontrou a sua Bússola interior. Mantenha essa luz acesa em todos os dias que virão.",
      tactical: "Dê um abraço apertado em si mesma ou celebre este marco com quem você ama. Você merece tudo de melhor!"
    }
  }
};
