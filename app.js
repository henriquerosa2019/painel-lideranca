// Database of 7 Days - 2 Messages Per Day + Tactical Strategies
const messagesData = {
  1: { // Segunda-feira
    dayName: "Segunda-feira",
    morning: {
      category: "Foco & Ação",
      target: "Com o Time",
      headline: "A Retomada do Leme",
      message: "Hoje, você não precisa consertar toda a desmotivação do time em um dia. Escolha ouvir mais do que cobrar. Pessoas desmotivadas costumam estar, na verdade, sem clareza ou sem voz. Seja a líder que dá rumo simples e previsível: foque em uma única prioridade clara para a equipe hoje.",
      tactical: "Faça um alinhamento de 10 minutos focado apenas na meta #1 do dia. Elimine 2 reuniões desnecessárias da agenda da sua equipe."
    },
    night: {
      category: "Blindagem Emocional",
      target: "Autovalidação & Chefia",
      headline: "Seu Valor Não Depende de Aplausos",
      message: "O silêncio ou a frieza da alta gestão não diminuem o valor da sua competência. Você foi a escolha natural para este cargo por mérito real, não por favor. Seu trabalho é entregar soluções consistentes, não implorar por aprovação. Respire fundo: o expediente acabou e sua paz não é negociável.",
      tactical: "Feche a tampa do computador e não cheque e-mails ou mensagens corporativas no celular até as 08h de amanhã."
    }
  },
  2: { // Terça-feira
    dayName: "Terça-feira",
    morning: {
      category: "Gestão do Ritmo",
      target: "Com o Time",
      headline: "Separação Saudável de Papéis",
      message: "Você não pode querer o resultado mais do que o seu próprio time quer. Seu papel hoje não é carregar a equipe nas costas, mas sim remover os obstáculos do caminho deles e dar as ferramentas. Dê autonomia com acompanhamento, não com sobrecarga própria.",
      tactical: "Ao receber uma dúvida de um liderado, devolva perguntando: 'O que você sugere que façamos primeiro?'. Ensine-os a pensar e decidir."
    },
    night: {
      category: "Comunicação Executiva",
      target: "Autovalidação & Chefia",
      headline: "Fatos Falam Mais que Desgaste",
      message: "Se a diretoria não vê o esforço nos bastidores, mostre os fatos de forma executiva, sem carência emocional. Resultados documentados falam por si. Lembre-se: gerência é maratona, não corrida de cem metros. Descanse seu corpo hoje para ter lucidez amanhã.",
      tactical: "Anote 3 entregas tangíveis da semana em formato de tópicos curtos. Guarde para reportar quando for oportuno, sem pedir validação."
    }
  },
  3: { // Quarta-feira
    dayName: "Quarta-feira",
    morning: {
      category: "Cultura & Vínculo",
      target: "Com o Time",
      headline: "O Poder das Microvitórias",
      message: "Comemore as microvitórias do seu time hoje, por menores que pareçam. Quem está desmotivado precisa voltar a experimentar a sensação de vencer. Um elogio sincero e específico a um colaborador muda a dinâmica do ambiente mais rápido do que um discurso longo.",
      tactical: "Envie uma mensagem individual no privado para um liderado agradecendo especificamente por uma entrega bem feita esta semana."
    },
    night: {
      category: "Postura & Firmeza",
      target: "Autovalidação & Chefia",
      headline: "Você Não É o Seu Crachá",
      message: "Você não precisa da simpatia da chefia para ser uma líder de alto calibre; você precisa de clareza, limites e alinhamento de expectativas. Se a cobrança for injusta, responda com dados e alternativas viáveis, nunca com desgaste emocional interno.",
      tactical: "Quando sentir a garganta fechar com uma cobrança brusca, tome um copo d'água antes de responder. Responda do córtex, não da amígdala."
    }
  },
  4: { // Quinta-feira
    dayName: "Quinta-feira",
    morning: {
      category: "Alinhamento & Postura",
      target: "Com o Time",
      headline: "Gentileza com Pessoas, Firmeza com Processos",
      message: "Liderança não é agradar a todos, é inspirar respeito pela coerência. Se houver ruídos, fofocas ou resistências no time, chame para conversas individuais francas e serenas. Firmeza com o processo, gentileza com a pessoa. O clima muda quando a postura do líder é estável.",
      tactical: "Se alguém trouxer um problema sem solução, estabeleça o padrão: 'Entendido. Traga 2 alternativas viáveis para conversarmos às 15h'."
    },
    night: {
      category: "Saúde Física & Mental",
      target: "Autovalidação & Chefia",
      headline: "Limites São a Sua Armadura",
      message: "A exaustão que você sente é o corpo cobrando os limites que você ainda não colocou no trabalho. Dizer 'não' para demandas inviáveis ou prazos absurdos da chefia faz parte da sua função de gestora estratégica. Salvar sua saúde física é o primeiro dever da sua liderança.",
      tactical: "Pratique a frase mágica para prazos absurdos: 'Para priorizarmos esta nova entrega com excelência, qual das metas atuais devemos postergar?'."
    }
  },
  5: { // Sexta-feira
    dayName: "Sexta-feira",
    morning: {
      category: "Fechamento Positivo",
      target: "Com o Time",
      headline: "Reconhecimento e Ciclo Concluído",
      message: "Encerre a semana destacando o que deu certo, não apenas o que faltou. O time precisa ir para o descanso sentindo que o esforço valeu a pena. Agradeça a colaboração de cada um e deixe claro que segunda-feira é uma nova oportunidade.",
      tactical: "Faça uma rodada rápida de 5 minutos de 'destaques da semana' antes das 16h para que todos saiam com sensação de progresso."
    },
    night: {
      category: "Desconexão Total",
      target: "Autovalidação & Chefia",
      headline: "Sua Noite de Sexta É Sagrada",
      message: "Você sobreviveu a mais uma semana intensa e entregou o seu melhor sob condições desafiadoras. Nenhum e-mail urgente da diretoria vale sua noite de sono ou sua saúde mental. Desligue as notificações corporativas: este fim de semana é para você se reconectar consigo mesma.",
      tactical: "Coloque o aplicativo de mensagens de trabalho no modo 'Silenciar até segunda às 08h'. Sinta o alívio imediato no corpo."
    }
  },
  6: { // Sábado
    dayName: "Sábado",
    morning: {
      category: "Identidade Pessoal",
      target: "Espaço Pessoal",
      headline: "Quem É Você Além do Trabalho?",
      message: "Hoje o dia é todinho seu. Lembre-se de quem você era antes desse cargo existir: seus gostos, seu riso, seus momentos de silêncio. Um líder exausto não tem criatividade para resolver problemas. Permita-se não pensar em metas hoje.",
      tactical: "Dedique pelo menos 1 hora para uma atividade sem tela: caminhada ao ar livre, café gostoso ou um banho relaxante sem pressa."
    },
    night: {
      category: "Acolhimento & Descanso",
      target: "Recuperação Profunda",
      headline: "Você Não É Fraca por Sentir Cansaço",
      message: "Acolha seus sentimentos sem se julgar fraca. O que você está enfrentando é uma das transições profissionais mais difíceis que existem. Ter dúvidas e cansaço é humano; persistir com dignidade é sua força. Cuide do seu sono esta noite.",
      tactical: "Escreva num papel qualquer pensamento repetitivo sobre trabalho que surgir e diga a si mesma: 'Isso é problema de segunda-feira'."
    }
  },
  0: { // Domingo
    dayName: "Domingo",
    morning: {
      category: "Visão & Perspectiva",
      target: "Longo Prazo",
      headline: "Essa Fase É Temporária",
      message: "Essa fase difícil não é permanente, é apenas uma etapa de consolidação do seu novo patamar profissional. Você está desenvolvendo casca, maturidade executiva e resiliência que ninguém poderá tirar de você.",
      tactical: "Não deixe a ansiedade do domingo à tarde roubar seu presente. Viva o domingo até a hora de deitar."
    },
    night: {
      category: "Estratégia & Preparação",
      target: "Proteção de Energia",
      headline: "No Comando da Sua Postura",
      message: "Entre na nova semana sabendo exatamente o que está e o que não está sob o seu controle. O humor da chefia e a atitude inicial do time você não controla; sua reação, seus limites de horário e sua clareza de entrega você controla. Você está no comando.",
      tactical: "Defina apenas 3 grandes objetivos para a sua semana amanhã. O resto é ruído."
    }
  }
};

// Application State
let selectedDay = new Date().getDay();
let selectedPeriod = new Date().getHours() < 14 ? 'morning' : 'night';
let speechSynth = window.speechSynthesis;
let isSpeaking = false;

// DOM Elements
const dayButtons = document.querySelectorAll('.day-btn');
const tabMorning = document.getElementById('tab-morning');
const tabNight = document.getElementById('tab-night');
const cardCategory = document.getElementById('card-category');
const cardTarget = document.getElementById('card-target');
const cardHeadline = document.getElementById('card-headline');
const quoteText = document.getElementById('quote-text');
const tacticalText = document.getElementById('tactical-text');
const btnAudio = document.getElementById('btn-audio');
const audioLabel = document.getElementById('audio-label');
const btnCopy = document.getElementById('btn-copy');
const copyLabel = document.getElementById('copy-label');
const btnWhatsapp = document.getElementById('btn-whatsapp');
const btnThemeToggle = document.getElementById('btn-theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const currentDateBadge = document.getElementById('current-date-badge');
const greetingText = document.getElementById('greeting-text');

// Splash / Cover DOM Elements
const splashScreen = document.getElementById('splash-screen');
const btnEnterApp = document.getElementById('btn-enter-app');
const btnShowCover = document.getElementById('btn-show-cover');

// Journal DOM Elements
const journalToggle = document.getElementById('journal-toggle');
const journalContent = document.getElementById('journal-content');
const journalArrow = document.getElementById('journal-arrow');
const winInput = document.getElementById('win-input');
const releaseInput = document.getElementById('release-input');
const btnSaveJournal = document.getElementById('btn-save-journal');
const saveStatus = document.getElementById('save-status');

// Initialize App
function initApp() {
  updateDateBadge();
  setupEventListeners();
  loadSavedTheme();
  renderContent();
  loadJournalForSelectedDay();
  registerServiceWorker();
}

function updateDateBadge() {
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const todayStr = new Intl.DateTimeFormat('pt-BR', options).format(new Date());
  currentDateBadge.textContent = todayStr.toUpperCase();

  const hour = new Date().getHours();
  if (hour < 12) {
    greetingText.textContent = "Bom dia, Líder. Comece seu dia com foco e serenidade.";
  } else if (hour < 18) {
    greetingText.textContent = "Boa tarde. Mantenha o equilíbrio e seus limites firmes.";
  } else {
    greetingText.textContent = "Boa noite. Hora de blindar sua mente e desacelerar.";
  }
}

function renderContent() {
  // Update Day Buttons active state
  dayButtons.forEach(btn => {
    const day = parseInt(btn.getAttribute('data-day'));
    if (day === selectedDay) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update Period Tabs active state
  if (selectedPeriod === 'morning') {
    tabMorning.classList.add('active');
    tabNight.classList.remove('active');
  } else {
    tabNight.classList.add('active');
    tabMorning.classList.remove('active');
  }

  // Fetch Message Data
  const dayData = messagesData[selectedDay];
  const content = dayData[selectedPeriod];

  // Update DOM with smooth fade animation
  const quoteCard = document.getElementById('quote-card');
  quoteCard.style.opacity = '0.5';
  quoteCard.style.transform = 'translateY(4px)';

  setTimeout(() => {
    cardCategory.textContent = content.category;
    cardTarget.textContent = content.target;
    cardHeadline.textContent = content.headline;
    quoteText.textContent = content.message;
    tacticalText.textContent = content.tactical;

    quoteCard.style.opacity = '1';
    quoteCard.style.transform = 'translateY(0)';
  }, 120);

  // Stop any active speech synthesis
  if (speechSynth && speechSynth.speaking) {
    speechSynth.cancel();
    isSpeaking = false;
    audioLabel.textContent = "Ouvir";
  }
}

function setupEventListeners() {
  // Day Selector Click
  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedDay = parseInt(btn.getAttribute('data-day'));
      renderContent();
      loadJournalForSelectedDay();
    });
  });

  // Period Tabs Click
  tabMorning.addEventListener('click', () => {
    selectedPeriod = 'morning';
    renderContent();
  });

  tabNight.addEventListener('click', () => {
    selectedPeriod = 'night';
    renderContent();
  });

  // Audio Speech Synthesis
  btnAudio.addEventListener('click', handleSpeechSynthesis);

  // Copy Message to Clipboard
  btnCopy.addEventListener('click', handleCopyMessage);

  // WhatsApp Share
  btnWhatsapp.addEventListener('click', handleWhatsappShare);

  // Theme Toggle
  btnThemeToggle.addEventListener('click', toggleTheme);

  // Journal Toggle (Accordion)
  journalToggle.addEventListener('click', () => {
    journalContent.classList.toggle('collapsed');
    const isCollapsed = journalContent.classList.contains('collapsed');
    journalArrow.style.transform = isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
  });

  // Journal Save
  btnSaveJournal.addEventListener('click', saveJournalEntry);

  // Splash Screen Cover Handlers
  const btnCloseSplash = document.getElementById('btn-close-splash');

  const closeSplash = () => {
    if (splashScreen) {
      splashScreen.classList.add('hidden');
      sessionStorage.setItem('cover_seen', 'true');
    }
  };

  const openSplash = () => {
    if (splashScreen) {
      splashScreen.classList.remove('hidden');
    }
  };

  if (btnEnterApp) {
    btnEnterApp.addEventListener('click', closeSplash);
    btnEnterApp.addEventListener('touchend', (e) => {
      e.preventDefault();
      closeSplash();
    });
  }

  if (btnCloseSplash) {
    btnCloseSplash.addEventListener('click', closeSplash);
    btnCloseSplash.addEventListener('touchend', (e) => {
      e.preventDefault();
      closeSplash();
    });
  }

  if (btnShowCover) {
    btnShowCover.addEventListener('click', openSplash);
  }

  // Close splash screen if clicked outside card
  splashScreen.addEventListener('click', (e) => {
    if (e.target === splashScreen) {
      closeSplash();
    }
  });

  // If already seen in this session, hide immediately
  if (sessionStorage.getItem('cover_seen') === 'true') {
    splashScreen.classList.add('hidden');
  }
}

// Text-to-speech functionality
function handleSpeechSynthesis() {
  if (!('speechSynthesis' in window)) {
    alert("Seu navegador não suporta leitura de voz.");
    return;
  }

  if (isSpeaking) {
    speechSynth.cancel();
    isSpeaking = false;
    audioLabel.textContent = "Ouvir";
    return;
  }

  const currentContent = messagesData[selectedDay][selectedPeriod];
  const textToRead = `${currentContent.headline}. ${currentContent.message} Dica tática: ${currentContent.tactical}`;

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.95; // Slightly calmer, articulate pacing

  utterance.onstart = () => {
    isSpeaking = true;
    audioLabel.textContent = "Pausar";
  };

  utterance.onend = () => {
    isSpeaking = false;
    audioLabel.textContent = "Ouvir";
  };

  utterance.onerror = () => {
    isSpeaking = false;
    audioLabel.textContent = "Ouvir";
  };

  speechSynth.speak(utterance);
}

// Copy to Clipboard
function handleCopyMessage() {
  const currentContent = messagesData[selectedDay][selectedPeriod];
  const textToCopy = `✨ ${currentContent.headline} (${messagesData[selectedDay].dayName})\n\n"${currentContent.message}"\n\n💡 Ação Tática: ${currentContent.tactical}\n\n— Bússola da Líder`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    copyLabel.textContent = "Copiado! ✓";
    setTimeout(() => {
      copyLabel.textContent = "Copiar";
    }, 2000);
  }).catch(() => {
    copyLabel.textContent = "Erro";
  });
}

// WhatsApp Share
function handleWhatsappShare() {
  const currentContent = messagesData[selectedDay][selectedPeriod];
  const shareText = `*Bússola da Líder | ${messagesData[selectedDay].dayName}*\n\n*${currentContent.headline}*\n\n"${currentContent.message}"\n\n💡 _Dica Tática:_ ${currentContent.tactical}`;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  window.open(url, '_blank');
}

// Theme handling
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  themeIcon.textContent = newTheme === 'light' ? '☀️' : '🌙';
  localStorage.setItem('lead_app_theme', newTheme);
}

function loadSavedTheme() {
  const saved = localStorage.getItem('lead_app_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  themeIcon.textContent = saved === 'light' ? '☀️' : '🌙';
}

// Journal Storage
function saveJournalEntry() {
  const win = winInput.value.trim();
  const release = releaseInput.value.trim();

  const entry = {
    win,
    release,
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem(`lead_journal_day_${selectedDay}`, JSON.stringify(entry));

  saveStatus.textContent = "Salvo com sucesso! ✨";
  setTimeout(() => {
    saveStatus.textContent = "";
  }, 2500);
}

function loadJournalForSelectedDay() {
  const data = localStorage.getItem(`lead_journal_day_${selectedDay}`);
  if (data) {
    try {
      const parsed = JSON.parse(data);
      winInput.value = parsed.win || "";
      releaseInput.value = parsed.release || "";
    } catch (e) {
      winInput.value = "";
      releaseInput.value = "";
    }
  } else {
    winInput.value = "";
    releaseInput.value = "";
  }
}

// Service Worker for offline PWA
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(err => {
        console.log('SW registration note:', err);
      });
    });
  }
}

// Start application
initApp();
