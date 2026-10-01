// Bússola da Líder - Controle de Aplicação (31 Dias do Mês)
// Utiliza os dados de monthMessagesData definidos em messages.js

// Estado da Aplicação
const todayObj = new Date();
const currentDayOfMonth = todayObj.getDate(); // 1 a 31
const currentMonth = todayObj.getMonth();
const currentYear = todayObj.getFullYear();

let selectedDay = Math.min(Math.max(currentDayOfMonth, 1), 31);
let selectedPeriod = todayObj.getHours() < 14 ? 'morning' : 'night';
let speechSynth = window.speechSynthesis;
let isSpeaking = false;

// Elementos DOM
const daySelectorContainer = document.getElementById('day-selector');
const phaseIndicator = document.getElementById('phase-indicator');
const dayCounter = document.getElementById('day-counter');
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
const btnCloseSplash = document.getElementById('btn-close-splash');
const btnShowCover = document.getElementById('btn-show-cover');

// Journal DOM Elements
const journalToggle = document.getElementById('journal-toggle');
const journalContent = document.getElementById('journal-content');
const journalArrow = document.getElementById('journal-arrow');
const winInput = document.getElementById('win-input');
const releaseInput = document.getElementById('release-input');
const btnSaveJournal = document.getElementById('btn-save-journal');
const saveStatus = document.getElementById('save-status');

// Inicialização
function initApp() {
  updateDateBadge();
  build31DaySelector();
  setupEventListeners();
  loadSavedTheme();
  renderContent();
  loadJournalForSelectedDay();
  registerServiceWorker();
  scrollToSelectedDay();
}

function updateDateBadge() {
  const options = { weekday: 'short', day: 'numeric', month: 'short' };
  const todayStr = new Intl.DateTimeFormat('pt-BR', options).format(todayObj);
  currentDateBadge.textContent = todayStr.toUpperCase();

  const hour = todayObj.getHours();
  if (hour < 12) {
    greetingText.textContent = "Bom dia, Líder. Comece seu dia com foco e serenidade.";
  } else if (hour < 18) {
    greetingText.textContent = "Boa tarde. Mantenha o equilíbrio e seus limites firmes.";
  } else {
    greetingText.textContent = "Boa noite. Hora de blindar sua mente e desacelerar.";
  }
}

// Constrói os 31 botões do mês com dia numérico e dia da semana abreviado
function build31DaySelector() {
  daySelectorContainer.innerHTML = '';

  for (let day = 1; day <= 31; day++) {
    const btn = document.createElement('button');
    btn.className = 'day-btn';
    btn.setAttribute('data-day', day);

    // Calcular dia da semana para este dia no mês atual
    const tempDate = new Date(currentYear, currentMonth, day);
    const weekdayShort = new Intl.DateTimeFormat('pt-BR', { weekday: 'short' })
      .format(tempDate)
      .replace('.', '')
      .toUpperCase();

    btn.innerHTML = `
      <span class="day-num">${day}</span>
      <span class="day-sub">${weekdayShort}</span>
    `;

    if (day === currentDayOfMonth) {
      btn.classList.add('is-today');
      btn.title = 'Hoje';
    }

    if (day === selectedDay) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', () => {
      selectedDay = day;
      renderContent();
      loadJournalForSelectedDay();
      updateDayButtonsActive();
    });

    daySelectorContainer.appendChild(btn);
  }
}

function updateDayButtonsActive() {
  const allBtns = daySelectorContainer.querySelectorAll('.day-btn');
  allBtns.forEach(b => {
    const d = parseInt(b.getAttribute('data-day'));
    if (d === selectedDay) {
      b.classList.add('active');
      b.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    } else {
      b.classList.remove('active');
    }
  });
}

function scrollToSelectedDay() {
  setTimeout(() => {
    const activeBtn = daySelectorContainer.querySelector(`.day-btn[data-day="${selectedDay}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, 200);
}

function renderContent() {
  updateDayButtonsActive();

  // Abas de período (Manhã vs Noite)
  if (selectedPeriod === 'morning') {
    tabMorning.classList.add('active');
    tabNight.classList.remove('active');
  } else {
    tabNight.classList.add('active');
    tabMorning.classList.remove('active');
  }

  // Buscar dados dos 31 dias (fallback de segurança caso algum dia não exista)
  const dayData = monthMessagesData[selectedDay] || monthMessagesData[1];
  const content = dayData[selectedPeriod];

  // Indicador de Fase e Contador
  if (phaseIndicator) {
    phaseIndicator.textContent = dayData.phase || `Fase da Jornada`;
  }
  if (dayCounter) {
    dayCounter.textContent = `Dia ${selectedDay} de 31`;
  }

  // Animação suave de transição no card
  const quoteCard = document.getElementById('quote-card');
  quoteCard.style.opacity = '0.4';
  quoteCard.style.transform = 'translateY(4px)';

  setTimeout(() => {
    cardCategory.textContent = content.category;
    cardTarget.textContent = content.target;
    cardHeadline.textContent = content.headline;
    quoteText.textContent = content.message;
    tacticalText.textContent = content.tactical;

    quoteCard.style.opacity = '1';
    quoteCard.style.transform = 'translateY(0)';
  }, 100);

  // Parar qualquer áudio em reprodução ao trocar
  if (speechSynth && speechSynth.speaking) {
    speechSynth.cancel();
    isSpeaking = false;
    audioLabel.textContent = "Ouvir";
  }
}

function setupEventListeners() {
  // Troca de Período (Manhã / Noite)
  tabMorning.addEventListener('click', () => {
    selectedPeriod = 'morning';
    renderContent();
  });

  tabNight.addEventListener('click', () => {
    selectedPeriod = 'night';
    renderContent();
  });

  // Narração em Áudio
  btnAudio.addEventListener('click', handleSpeechSynthesis);

  // Copiar Mensagem
  btnCopy.addEventListener('click', handleCopyMessage);

  // Compartilhar WhatsApp
  btnWhatsapp.addEventListener('click', handleWhatsappShare);

  // Alternar Tema (Dark / Light)
  btnThemeToggle.addEventListener('click', toggleTheme);

  // Caderno de Descompressão (Accordion)
  journalToggle.addEventListener('click', () => {
    journalContent.classList.toggle('collapsed');
    const isCollapsed = journalContent.classList.contains('collapsed');
    journalArrow.style.transform = isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
  });

  // Salvar Diário
  btnSaveJournal.addEventListener('click', saveJournalEntry);

  // Controle da Capa / Splash Screen
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

  if (splashScreen) {
    splashScreen.addEventListener('click', (e) => {
      if (e.target === splashScreen) {
        closeSplash();
      }
    });

    if (sessionStorage.getItem('cover_seen') === 'true') {
      splashScreen.classList.add('hidden');
    }
  }
}

// Leitura em voz alta
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

  const dayData = monthMessagesData[selectedDay] || monthMessagesData[1];
  const currentContent = dayData[selectedPeriod];
  const textToRead = `Dia ${selectedDay}. ${currentContent.headline}. ${currentContent.message} Dica tática: ${currentContent.tactical}`;

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = 'pt-BR';
  utterance.rate = 0.95;

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

// Copiar para Área de Transferência
function handleCopyMessage() {
  const dayData = monthMessagesData[selectedDay] || monthMessagesData[1];
  const currentContent = dayData[selectedPeriod];
  const textToCopy = `✨ Bússola da Líder | Dia ${selectedDay} de 31\n📌 ${dayData.phase}\n\n*${currentContent.headline}*\n"${currentContent.message}"\n\n💡 Ação Tática: ${currentContent.tactical}\n\n— Bússola da Líder`;

  navigator.clipboard.writeText(textToCopy).then(() => {
    copyLabel.textContent = "Copiado! ✓";
    setTimeout(() => {
      copyLabel.textContent = "Copiar";
    }, 2000);
  }).catch(() => {
    copyLabel.textContent = "Erro";
  });
}

// Compartilhar no WhatsApp
function handleWhatsappShare() {
  const dayData = monthMessagesData[selectedDay] || monthMessagesData[1];
  const currentContent = dayData[selectedPeriod];
  const shareText = `*Bússola da Líder | Dia ${selectedDay} de 31*\n_${dayData.phase}_\n\n*${currentContent.headline}*\n\n"${currentContent.message}"\n\n💡 _Dica Tática:_ ${currentContent.tactical}`;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  window.open(url, '_blank');
}

// Temas (Escuro / Claro)
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

// Caderno de Descompressão Diário (por dia do mês)
function saveJournalEntry() {
  const win = winInput.value.trim();
  const release = releaseInput.value.trim();

  const entry = {
    win,
    release,
    updatedAt: new Date().toISOString()
  };

  localStorage.setItem(`lead_journal_day_m_${selectedDay}`, JSON.stringify(entry));

  saveStatus.textContent = "Salvo com sucesso! ✨";
  setTimeout(() => {
    saveStatus.textContent = "";
  }, 2500);
}

function loadJournalForSelectedDay() {
  const data = localStorage.getItem(`lead_journal_day_m_${selectedDay}`);
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

// Service Worker (PWA offline)
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(err => {
        console.log('SW registration note:', err);
      });
    });
  }
}

// Inicializar aplicação
initApp();
