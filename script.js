document.addEventListener('DOMContentLoaded', () => {
  const farmingTopics = window.farmingTopics || {};
  const messagesEl = document.getElementById('messages');
  const formEl = document.getElementById('chat-form');
  const inputEl = document.getElementById('user-input');
  const newChatEl = document.getElementById('new-chat');
  const clearChatEl = document.getElementById('clear-chat');
  const chatListEl = document.getElementById('chat-list');
  const geoBtn = document.getElementById('geo-btn');
  const geoText = document.getElementById('geo-text');
  const dateBtn = document.getElementById('date-btn');
  const dateText = document.getElementById('date-text');

  let userContext = {
    userName: null,
    experience: 'beginner',
    gardenType: 'backyard',
    location: null,
    climate: null,
    hemisphere: 'northern',
    season: null,
    month: new Date().getMonth(),
    history: [], // Recent user queries
    mentions: new Set(), // Topics or crops mentioned
    currentCrop: null // The crop currently being discussed
  };

  // --- WELCOME SCREEN LOGIC ---
  const welcomeScreen = document.getElementById('welcome-screen');
  const onboardingForm = document.getElementById('onboarding-form');
  const appHeader = document.querySelector('.site-header');
  const appMain = document.querySelector('.app-layout');
  const brandLink = document.getElementById('brand-link');
  const themeToggle = document.getElementById('theme-toggle');

  // Theme Logic
  function initTheme() {
    const savedTheme = localStorage.getItem('sfa_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);
  }

  function updateThemeUI(theme) {
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const themeText = themeToggle.querySelector('.theme-text');
    if (theme === 'dark') {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Light';
    } else {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Dark';
    }
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('sfa_theme', newTheme);
    updateThemeUI(newTheme);
  });

  initTheme();

  function checkFirstTime() {
    const profile = localStorage.getItem('sfa_profile');
    if (profile) {
      const data = JSON.parse(profile);
      Object.assign(userContext, data);
      showMainApp();
    }
  }

  function showWelcomeScreen() {
    welcomeScreen.classList.remove('hidden-at-start');
    appHeader.classList.add('hidden-at-start');
    appMain.classList.add('hidden-at-start');
  }

  function showMainApp() {
    welcomeScreen.classList.add('hidden-at-start');
    appHeader.classList.remove('hidden-at-start');
    appMain.classList.remove('hidden-at-start');
  }

  brandLink.addEventListener('click', () => {
    showWelcomeScreen();
  });

  onboardingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('user-name').value;
    const experience = onboardingForm.querySelector('input[name="experience"]:checked').value;
    const gardenType = onboardingForm.querySelector('input[name="garden-type"]:checked').value;

    userContext.userName = name;
    userContext.experience = experience;
    userContext.gardenType = gardenType;

    localStorage.setItem('sfa_profile', JSON.stringify({
      userName: name,
      experience: experience,
      gardenType: gardenType
    }));

    showMainApp();
    providePersonalizedWelcome();
  });

  function providePersonalizedWelcome() {
    const name = userContext.userName || 'Gardener';
    const exp = userContext.experience;
    const type = userContext.gardenType;

    let advice = `Hello ${name}! It's great to meet a ${exp} gardener focusing on ${type} gardening. `;
    
    if (exp === 'beginner') {
      advice += "Since you're just starting out, I recommend beginning with easy-to-grow crops like Lettuce, Radishes, or Basil. They're very forgiving and grow quickly!";
    } else {
      advice += "As an experienced gardener, you might enjoy exploring succession planting or advanced pest management strategies to maximize your yield.";
    }

    if (type === 'balcony') {
      advice += "\n\nFor your balcony garden, focus on vertical space and container-friendly varieties like 'Tiny Tim' tomatoes or dwarf peppers.";
    } else if (type === 'indoor') {
      advice += "\n\nIndoor gardening is all about light! Make sure your plants are near a south-facing window or use grow lights.";
    }

    addMessage('assistant', advice, ["Best beginner crops", "Balcony garden tips", "Soil health basics"]);
  }

  checkFirstTime();

  let chats = loadChats();
  let currentChatId = chats.length ? chats[0].id : createChat().id;
  renderSidebar();
  renderMessages();
  detectSeason(); // Initial detection

  geoBtn.addEventListener('click', () => {
    geoText.textContent = 'Detecting...';
    if (!navigator.geolocation) {
      geoText.textContent = 'Not Supported';
      return;
    }
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      userContext.hemisphere = latitude >= 0 ? 'northern' : 'southern';
      
      // Basic climate zone detection by latitude
      const absLat = Math.abs(latitude);
      if (absLat < 23.5) userContext.climate = 'tropical';
      else if (absLat < 35) userContext.climate = 'subtropical';
      else if (absLat < 50) userContext.climate = 'temperate';
      else userContext.climate = 'cold';

      try {
        // Using a free reverse geocoding API (no key required for basic use)
        const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
        const data = await res.json();
        userContext.location = `${data.city || data.locality}, ${data.countryCode}`;
        geoText.textContent = userContext.location;
        
        detectSeason(); // Ensure season is correct for the hemisphere
        provideAutomatedAdvice('location');
      } catch (err) {
        userContext.location = `${latitude.toFixed(2)}, ${longitude.toFixed(2)}`;
        geoText.textContent = userContext.location;
        provideAutomatedAdvice('location');
      }
    }, () => {
      geoText.textContent = 'Access Denied';
    });
  });

  dateBtn.addEventListener('click', () => {
    detectSeason(true);
  });

  // --- GARDEN TOOLS LOGIC ---
  const modalOverlay = document.getElementById('modal-overlay');
  const estimatorBtn = document.getElementById('estimator-btn');
  const checklistBtn = document.getElementById('checklist-btn');
  const urbanBtn = document.getElementById('urban-btn');
  const problemSolverBtn = document.getElementById('problem-solver-btn');
  const gameBtn = document.getElementById('game-btn');
  const journalBtn = document.getElementById('journal-btn');
  const estimatorModal = document.getElementById('estimator-modal');
  const checklistModal = document.getElementById('checklist-modal');
  const urbanModal = document.getElementById('urban-modal');
  const problemSolverModal = document.getElementById('problem-solver-modal');
  const gameModal = document.getElementById('game-modal');
  const journalModal = document.getElementById('journal-modal');
  const closeBtns = document.querySelectorAll('.close-modal');
  const cropInput = document.getElementById('crop-input');
  const cropList = document.getElementById('crop-list');
  const calculateBtn = document.getElementById('calculate-btn');
  const estimatorResult = document.getElementById('estimator-result');
  const plantDateInput = document.getElementById('plant-date');
  const taskCheckboxes = document.querySelectorAll('#task-list input[type="checkbox"]');
  const journalText = document.getElementById('journal-text');

  // Urban Mini-Chatbot Elements
  const urbanMessagesEl = document.getElementById('urban-messages');
  const urbanChips = document.querySelectorAll('.urban-chip');

  // Problem Solver Elements
  const problemMessagesEl = document.getElementById('problem-messages');
  const problemChips = document.querySelectorAll('.problem-chip');

  // Growing Tips Game Elements
  const quizStartView = document.getElementById('quiz-start-view');
  const quizGameView = document.getElementById('quiz-game-view');
  const quizResultView = document.getElementById('quiz-result-view');
  const startQuizBtn = document.getElementById('start-quiz-btn');
  const restartQuizBtn = document.getElementById('restart-quiz-btn');
  const nextQBtn = document.getElementById('next-q-btn');
  const quizQuestionEl = document.getElementById('quiz-question');
  const quizOptionsEl = document.getElementById('quiz-options');
  const quizFeedbackEl = document.getElementById('quiz-feedback');
  const feedbackTextEl = document.getElementById('feedback-text');
  const currentQEl = document.getElementById('current-q');
  const totalQEl = document.getElementById('total-q');
  const quizScoreEl = document.getElementById('quiz-score');
  const quizMaxScoreEl = document.getElementById('quiz-max-score');
  const quizCommentaryEl = document.getElementById('quiz-commentary');

  let currentQuestionIndex = 0;
  let quizScore = 0;
  let gameQuestions = []; // Questions for the current session

  // Initialize crop datalist
  function initCropList() {
    cropList.innerHTML = '';
    Object.entries(farmingTopics).forEach(([key, obj]) => {
      if (obj.harvestDays) {
        const option = document.createElement('option');
        option.value = key.charAt(0).toUpperCase() + key.slice(1);
        cropList.appendChild(option);
      }
    });
  }
  initCropList();

  // Modal handlers
  function openModal(modal) {
    modalOverlay.classList.add('active');
    modal.classList.add('active');
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    estimatorModal.classList.remove('active');
    checklistModal.classList.remove('active');
    urbanModal.classList.remove('active');
    problemSolverModal.classList.remove('active');
    gameModal.classList.remove('active');
    journalModal.classList.remove('active');
    estimatorResult.classList.add('hidden');
  }

  estimatorBtn.addEventListener('click', () => openModal(estimatorModal));
  checklistBtn.addEventListener('click', () => openModal(checklistModal));
  urbanBtn.addEventListener('click', () => openModal(urbanModal));
  problemSolverBtn.addEventListener('click', () => openModal(problemSolverModal));
  gameBtn.addEventListener('click', () => {
    resetQuiz();
    openModal(gameModal);
  });
  journalBtn.addEventListener('click', () => {
    // Load journal content
    journalText.value = localStorage.getItem('sfa_journal') || '';
    openModal(journalModal);
  });
  
  // Journal Auto-Save
  journalText.addEventListener('input', () => {
    localStorage.setItem('sfa_journal', journalText.value);
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  closeBtns.forEach(btn => btn.addEventListener('click', closeModal));

  // Harvest Estimator Calculation
  calculateBtn.addEventListener('click', () => {
    const cropName = cropInput.value.trim().toLowerCase();
    const plantDateValue = plantDateInput.value;

    if (!cropName || !plantDateValue) {
      alert('Please enter both a crop name and a planting date.');
      return;
    }

    const topicKey = Object.keys(farmingTopics).find(key => 
      key.toLowerCase() === cropName || 
      (farmingTopics[key].keywords && farmingTopics[key].keywords.some(kw => kw.toLowerCase() === cropName))
    );

    const topic = farmingTopics[topicKey];
    if (!topic || !topic.harvestDays) {
      estimatorResult.innerHTML = `<strong>Sorry!</strong> I don't have harvest data for "${cropName}". Try something like Tomato, Carrot, or Basil.`;
      estimatorResult.classList.remove('hidden');
      return;
    }

    const [minDays, maxDays] = topic.harvestDays;
    const plantDate = new Date(plantDateValue);
    
    const minHarvestDate = new Date(plantDate);
    minHarvestDate.setDate(plantDate.getDate() + minDays);
    
    const maxHarvestDate = new Date(plantDate);
    maxHarvestDate.setDate(plantDate.getDate() + maxDays);

    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    estimatorResult.innerHTML = `
      <div style="text-align: center;">
        <strong>${cropName.charAt(0).toUpperCase() + cropName.slice(1)}</strong><br>
        <div class="days-badge">⏱️ ${minDays}–${maxDays} days</div>
      </div>
      <div class="harvest-date-bubble">
        <div style="font-size: 0.9rem; color: var(--green-700); margin-bottom: 0.4rem;">📅 Estimated Harvest Window:</div>
        <strong>${minHarvestDate.toLocaleDateString(undefined, options)}</strong><br>
        to<br>
        <strong>${maxHarvestDate.toLocaleDateString(undefined, options)}</strong>
      </div>
    `;
    estimatorResult.classList.remove('hidden');
  });

  const checklistProgress = document.getElementById('checklist-progress');
  const progressText = document.getElementById('progress-text');

  // Checklist Persistence
  function loadChecklist() {
    const saved = localStorage.getItem('sfa_checklist');
    if (saved) {
      const states = JSON.parse(saved);
      taskCheckboxes.forEach(cb => {
        cb.checked = !!states[cb.dataset.task];
      });
    }
    updateProgress(false); // Update UI without triggering confetti on load
  }

  function saveChecklist() {
    const states = {};
    taskCheckboxes.forEach(cb => {
      states[cb.dataset.task] = cb.checked;
    });
    localStorage.setItem('sfa_checklist', JSON.stringify(states));
    updateProgress(true);
  }

  function updateProgress(canConfetti = true) {
    const total = taskCheckboxes.length;
    const checked = Array.from(taskCheckboxes).filter(cb => cb.checked).length;
    const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);
    
    if (checklistProgress) checklistProgress.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${percentage}%`;

    if (percentage === 100 && canConfetti) {
      triggerConfetti();
    }
  }

  function triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2e7d32', '#81c784', '#a5d6a7', '#ffffff'],
        zIndex: 2000
      });
    }
  }

  taskCheckboxes.forEach(cb => {
    cb.addEventListener('change', saveChecklist);
  });

  loadChecklist();

  // Urban Mini-Chatbot Logic
  function addUrbanMessage(role, content) {
    const row = document.createElement('div');
    row.className = 'message ' + role;
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = role === 'assistant' ? '🏙️' : '🧑';
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Convert **text** to <strong>text</strong> and \n to <br>
    let formattedContent = content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
      
    bubble.innerHTML = formattedContent;
    row.appendChild(avatar);
    row.appendChild(bubble);
    urbanMessagesEl.appendChild(row);
    urbanMessagesEl.scrollTo({ top: urbanMessagesEl.scrollHeight, behavior: 'smooth' });
  }

  function handleUrbanQuery(query) {
    const text = query.toLowerCase();
    let reply = "";
    
    // Simple matching for urban topics
    if (text.includes('apartment') || text.includes('small space')) {
      const topic = farmingTopics.urbanGardening;
      reply = `${topic.responses.overview}\n\n**Tips:**\n- ${topic.responses.tips.join('\n- ')}`;
    } else if (text.includes('container') || text.includes('pot')) {
      const topic = farmingTopics.containerGardening;
      reply = `${topic.responses.overview}\n\n**Tips:**\n- ${topic.responses.tips.join('\n- ')}`;
    } else if (text.includes('indoor plant care') || text.includes('houseplant care')) {
      const topic = farmingTopics.houseplants;
      reply = `${topic.responses.overview}\n\n**Tips:**\n- ${topic.responses.tips.join('\n- ')}`;
    } else if (text.includes('window')) {
      const topic = farmingTopics.windowGarden;
      reply = `${topic.responses.overview}\n\n**Tips:**\n- ${topic.responses.tips.join('\n- ')}`;
    } else if (text.includes('houseplant recommendations') || text.includes('picks')) {
      const topic = farmingTopics.houseplants;
      reply = `**Top Picks:**\n- Snake Plant (Indestructible)\n- ZZ Plant (Low Light)\n- Pothos (Vining)\n- Spider Plant (Air Purifying)\n- Peace Lily (Elegant)`;
    } else if (text.includes('solution') || text.includes('optimization')) {
      reply = "For small spaces, think vertical! Use wall-mounted pockets, hanging planters, or tiered shelving units. Also, consider microgreens—they grow in small trays on any bright surface!";
    } else {
      // Fallback to general urban knowledge
      const topic = farmingTopics.urbanGardening;
      reply = `I can help with small space gardening! Try asking about containers, window boxes, or houseplants. \n\n**Quick Tip:** ${topic.responses.tips[0]}`;
    }

    setTimeout(() => {
      addUrbanMessage('assistant', reply);
    }, 500);
  }

  urbanChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.dataset.query;
      addUrbanMessage('user', query);
      handleUrbanQuery(query);
    });
  });

  // Problem Solver Logic
  function addProblemMessage(role, content) {
    const row = document.createElement('div');
    row.className = 'message ' + role;
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = role === 'assistant' ? '🛠️' : '🧑';
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    // Convert **text** to <strong>text</strong> and \n to <br>
    let formattedContent = content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
      
    bubble.innerHTML = formattedContent;
    row.appendChild(avatar);
    row.appendChild(bubble);
    problemMessagesEl.appendChild(row);
    problemMessagesEl.scrollTo({ top: problemMessagesEl.scrollHeight, behavior: 'smooth' });
  }

  function handleProblemQuery(query) {
    const text = query.toLowerCase();
    let reply = "";
    const topic = farmingTopics.troubleshooting;
    
    if (text.includes('yellow')) {
      reply = `**Yellow Leaves Guide:**\n\n${topic.responses.faqs.yellow_leaves}\n\n**Next Steps:**\n- Check if the soil feels soggy.\n- Try adding a balanced liquid fertilizer.`;
    } else if (text.includes('brown') || text.includes('tip')) {
      reply = `**Brown Tips Guide:**\n\n${topic.responses.faqs.brown_tips}\n\n**Next Steps:**\n- Increase watering frequency.\n- If indoors, try misting the leaves for humidity.`;
    } else if (text.includes('pest') || text.includes('bug') || text.includes('ant')) {
      reply = `**Pest Control Guide:**\n\n${topic.responses.faqs.pests}\n\n**Common Signs:**\n${topic.responses.faqs.holes}`;
    } else if (text.includes('wilt')) {
      reply = `**Wilting Guide:**\n\n${topic.responses.faqs.wilting}\n\n**Quick Check:** If the soil is wet but the plant is wilting, stop watering immediately!`;
    } else if (text.includes('white') || text.includes('powder') || text.includes('mold')) {
      reply = `**White Powder/Mildew Guide:**\n\n${topic.responses.faqs.white_powder}\n\n**Solution:** Mix 1 tbsp baking soda with 1 quart water and a drop of dish soap. Spray on leaves.`;
    } else if (text.includes('slow') || text.includes('growth')) {
      reply = `**Slow Growth Guide:**\n\n${topic.responses.faqs.slow_growth}\n\n**Tips:**\n- Ensure it gets at least 6 hours of sun.\n- Check if the plant has outgrown its pot.`;
    } else {
      reply = `I can help with that! ${topic.responses.overview}\n\n**Try asking about:** ${topic.responses.suggestions.join(', ')}`;
    }

    setTimeout(() => {
      addProblemMessage('assistant', reply);
    }, 500);
  }

  problemChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.dataset.query;
      addProblemMessage('user', query);
      handleProblemQuery(query);
    });
  });

  // Growing Tips Game Logic
  function resetQuiz() {
    currentQuestionIndex = 0;
    quizScore = 0;

    // Shuffle and pick 5 new questions each time
    const allQuestions = [...farmingTopics.quizQuestions];
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    gameQuestions = allQuestions.slice(0, 5);

    quizStartView.classList.remove('hidden');
    quizGameView.classList.add('hidden');
    quizResultView.classList.add('hidden');
  }

  function startQuiz() {
    quizStartView.classList.add('hidden');
    quizGameView.classList.remove('hidden');
    showQuestion();
  }

  function showQuestion() {
    const q = gameQuestions[currentQuestionIndex];
    quizQuestionEl.textContent = q.question;
    currentQEl.textContent = currentQuestionIndex + 1;
    totalQEl.textContent = gameQuestions.length;
    
    quizOptionsEl.innerHTML = '';
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.textContent = opt;
      btn.onclick = () => selectOption(idx);
      quizOptionsEl.appendChild(btn);
    });

    quizFeedbackEl.classList.add('hidden');
    quizOptionsEl.classList.remove('disabled');
  }

  function selectOption(index) {
    const q = gameQuestions[currentQuestionIndex];
    const options = quizOptionsEl.querySelectorAll('.quiz-option-btn');
    
    quizOptionsEl.classList.add('disabled');
    
    let feedbackHTML = "";
    if (index === q.correct) {
      quizScore++;
      options[index].classList.add('correct');
      feedbackHTML = `<strong>Correct!</strong> ${q.explanation}`;
    } else {
      options[index].classList.add('wrong');
      options[q.correct].classList.add('correct');
      feedbackHTML = `<strong>Not quite.</strong> ${q.explanation}`;
    }

    // Convert **text** to <strong>text</strong> in explanation if any
    feedbackTextEl.innerHTML = feedbackHTML.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    quizFeedbackEl.classList.remove('hidden');

    // Automatically move to next question after a longer delay (5s) or via button
    clearTimeout(window.quizTimer);
    window.quizTimer = setTimeout(() => {
      nextQuestion();
    }, 5000);
  }

  function nextQuestion() {
    clearTimeout(window.quizTimer);
    currentQuestionIndex++;
    if (currentQuestionIndex < gameQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }

  function showResults() {
    quizGameView.classList.add('hidden');
    quizResultView.classList.remove('hidden');
    
    quizScoreEl.textContent = quizScore;
    quizMaxScoreEl.textContent = gameQuestions.length;

    let commentary = "";
    const percentage = (quizScore / gameQuestions.length) * 100;

    if (percentage === 100) {
      commentary = "Master Gardener! You know your stuff. 🌿✨";
    } else if (percentage >= 80) {
      commentary = "Green Thumb! Great knowledge of farming. 🌱";
    } else if (percentage >= 60) {
      commentary = "Sprouting potential! Keep learning and growing. 🌻";
    } else if (percentage >= 40) {
      commentary = "Good start! There's more to learn about the garden. 🚜";
    } else {
      commentary = "Keep practicing! Every expert was once a beginner. 🍎";
    }

    quizCommentaryEl.textContent = commentary;
  }

  startQuizBtn.addEventListener('click', startQuiz);
  restartQuizBtn.addEventListener('click', resetQuiz);
  nextQBtn.addEventListener('click', nextQuestion);

  function detectSeason(verbose = false) {
    const month = new Date().getMonth();
    const isNorth = userContext.hemisphere === 'northern';
    let season = '';

    if (month >= 2 && month <= 4) season = isNorth ? 'spring' : 'autumn';
    else if (month >= 5 && month <= 7) season = isNorth ? 'summer' : 'winter';
    else if (month >= 8 && month <= 10) season = isNorth ? 'autumn' : 'spring';
    else season = isNorth ? 'winter' : 'summer';

    userContext.season = season;
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    dateText.textContent = `${dateStr} (${season.charAt(0).toUpperCase() + season.slice(1)})`;

    if (verbose) {
      provideAutomatedAdvice('season');
    }
  }

  function provideAutomatedAdvice(trigger) {
    let response = "";
    if (trigger === 'location') {
      const climateKey = `${userContext.climate}Weather`;
      const topic = farmingTopics[climateKey];
      response = `📍 Location detected: ${userContext.location}. You're in a ${userContext.climate} zone. ${topic ? topic.responses.overview : ""}\n\nRecommended for your area: ${topic ? topic.responses.faqs["crops for " + userContext.climate + (userContext.climate === 'cold' ? " weather" : " zones") || userContext.climate + " regions"] || "various regional crops" : ""}.`;
    } else {
      const seasonTopic = farmingTopics[userContext.season === 'summer' || userContext.season === 'spring' ? 'warmSeasonPlanting' : 'coolSeasonPlanting'];
      const calendar = {
        spring: "Prepare soil and plant cool-season crops (kale, peas).",
        summer: "Focus on irrigation and heat protection.",
        autumn: "Harvest and prepare for dormancy.",
        winter: "Plan for next year and prune fruit trees."
      };
      response = `📅 Season detected: ${userContext.season.toUpperCase()}. ${seasonTopic ? seasonTopic.responses.overview : ""} ${calendar[userContext.season]}`;
    }
    
    addMessage('assistant', response);
    
    // Add specific tips as a follow-up
    setTimeout(() => {
      const key = trigger === 'location' ? `${userContext.climate}Weather` : (userContext.season === 'summer' || userContext.season === 'spring' ? 'warmSeasonPlanting' : 'coolSeasonPlanting');
      const topic = farmingTopics[key];
      if (topic && topic.responses.tips) {
        const randomTip = topic.responses.tips[Math.floor(Math.random() * topic.responses.tips.length)];
        addMessage('assistant', `A tip for your current ${trigger}: ${randomTip}`);
      }
    }, 1000);
  }

  formEl.addEventListener('submit', e => {
    e.preventDefault();
    const text = inputEl.value.trim();
    if (!text) return;
    addMessage('user', text);
    inputEl.value = '';
    showTyping();
    setTimeout(() => {
      const reply = generateReply(text);
      hideTyping();
      addMessage('assistant', reply.text, reply.suggestions);
    }, 600 + Math.random() * 900);
  });
  newChatEl.addEventListener('click', () => {
    const chat = createChat();
    currentChatId = chat.id;
    renderSidebar();
    renderMessages();
  });
  clearChatEl.addEventListener('click', () => {
    const chat = getCurrentChat();
    chat.messages = [];
    addSystemWelcome();
    saveChats();
    renderMessages();
  });
  function loadChats() {
    try {
      const raw = localStorage.getItem('sfa_chats');
      if (raw) return JSON.parse(raw);
    } catch {}
    return [];
  }
  function saveChats() {
    localStorage.setItem('sfa_chats', JSON.stringify(chats));
  }
  function createChat() {
    const id = 'chat_' + Date.now();
    const chat = { id, title: 'New Chat', createdAt: Date.now(), messages: [] };
    chats.unshift(chat);
    addSystemWelcome(chat);
    saveChats();
    return chat;
  }
  function getCurrentChat() {
    return chats.find(c => c.id === currentChatId);
  }
  function renderSidebar() {
    chatListEl.innerHTML = '';
    chats.forEach(c => {
      const item = document.createElement('button');
      item.className = 'chat-item' + (c.id === currentChatId ? ' active' : '');
      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = c.title || 'Chat';
      const meta = document.createElement('div');
      meta.className = 'meta';
      const date = new Date(c.createdAt);
      meta.textContent = date.toLocaleString();
      const actions = document.createElement('div');
      actions.className = 'actions';
      const renameBtn = document.createElement('button');
      renameBtn.type = 'button';
      renameBtn.className = 'rename';
      renameBtn.textContent = 'Rename';
      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'delete';
      deleteBtn.textContent = 'Delete';
      actions.appendChild(renameBtn);
      actions.appendChild(deleteBtn);
      item.appendChild(title);
      item.appendChild(meta);
      item.appendChild(actions);
      item.addEventListener('click', () => {
        currentChatId = c.id;
        renderSidebar();
        renderMessages();
      });
      renameBtn.addEventListener('click', e => {
        e.stopPropagation();
        const next = prompt('Rename chat', c.title || 'Chat');
        if (next !== null) {
          const v = next.trim();
          if (v) {
            c.title = v;
            saveChats();
            renderSidebar();
          }
        }
      });
      deleteBtn.addEventListener('click', e => {
        e.stopPropagation();
        const ok = confirm('Delete this chat? This cannot be undone.');
        if (!ok) return;
        chats = chats.filter(x => x.id !== c.id);
        if (currentChatId === c.id) {
          currentChatId = chats.length ? chats[0].id : createChat().id;
        }
        saveChats();
        renderSidebar();
        renderMessages();
      });
      chatListEl.appendChild(item);
    });
  }
  function renderMessages() {
    const chat = getCurrentChat();
    messagesEl.innerHTML = '';
    chat.messages.forEach(m => {
      const row = document.createElement('div');
      row.className = 'message ' + m.role;
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.textContent = m.role === 'assistant' ? '🤖' : m.role === 'typing' ? '…' : '🧑';
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      if (m.role === 'typing') {
        bubble.innerHTML = '<span class="typing"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>';
      } else {
        // Handle line breaks in content
        const textContent = document.createElement('div');
        textContent.innerHTML = m.content.replace(/\n/g, '<br>');
        bubble.appendChild(textContent);
        
        // Add suggestion chips if they exist
        if (m.suggestions && m.suggestions.length) {
          const chipsContainer = document.createElement('div');
          chipsContainer.className = 'chips-container';
          m.suggestions.forEach(s => {
            const chip = document.createElement('button');
            chip.className = 'chip';
            chip.textContent = s;
            chip.addEventListener('click', () => {
              inputEl.value = s;
              formEl.dispatchEvent(new Event('submit'));
            });
            chipsContainer.appendChild(chip);
          });
          bubble.appendChild(chipsContainer);
        }
      }
      row.appendChild(avatar);
      row.appendChild(bubble);
      messagesEl.appendChild(row);
    });
    
    // Smooth scroll to bottom
    setTimeout(() => {
      messagesEl.scrollTo({
        top: messagesEl.scrollHeight,
        behavior: 'smooth'
      });
    }, 10);
  }
  function addMessage(role, content, suggestions = []) {
    const chat = getCurrentChat();
    const msg = { role, content, ts: Date.now() };
    if (suggestions && suggestions.length) {
      msg.suggestions = suggestions;
    }
    chat.messages.push(msg);
    if (role === 'user') {
      if (!chat.title || chat.title === 'New Chat') {
        chat.title = content.slice(0, 32);
      }
      // Update context memory
      userContext.history.push(content.toLowerCase());
      if (userContext.history.length > 5) userContext.history.shift();
      
      // Detect mentioned crops
      const crops = ["tomato", "carrot", "lettuce", "pepper", "onion", "apple", "citrus", "berry", "strawberry", "grape"];
      crops.forEach(c => {
        if (content.toLowerCase().includes(c)) {
          userContext.currentCrop = c;
          userContext.mentions.add(c);
        }
      });
    }
    saveChats();
    renderSidebar();
    renderMessages();
  }
  function showTyping() {
    const chat = getCurrentChat();
    chat.messages.push({ role: 'typing', content: '', ts: Date.now() });
    renderMessages();
  }
  function hideTyping() {
    const chat = getCurrentChat();
    chat.messages = chat.messages.filter(m => m.role !== 'typing');
    renderMessages();
  }
  function addSystemWelcome(targetChat) {
    const chat = targetChat || getCurrentChat();
    chat.messages.push({
      role: 'assistant',
      content: 'Welcome. Ask about crops, soil, irrigation, or pests.',
      ts: Date.now()
    });
  }
  function normalize(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
  }
  function classify(text) {
    const q = normalize(text);
    const words = q.split(/\s+/);
    let best = { key: null, score: 0, matches: [] };
    
    const entries = Object.entries(farmingTopics);
    
    entries.forEach(([key, obj]) => {
      const kws = obj.keywords || [];
      let score = 0;
      const matched = [];
      
      kws.forEach(k => {
        const kw = k.toLowerCase();
        // Exact word match gets higher priority
        if (words.includes(kw)) {
          score += 2;
          matched.push(k);
        } else if (q.includes(kw)) {
          score += 1;
          matched.push(k);
        }
      });
      
      if (score > best.score) {
        best = { key, score, matches: matched };
      }
    });

    return best;
  }

  function templates(obj, text) {
    if (!obj || !obj.responses) return { text: "I'm not sure how to answer that yet.", suggestions: [] };
    const r = obj.responses || {};
    const tip = Array.isArray(r.tips) && r.tips.length ? r.tips[Math.floor(Math.random() * r.tips.length)] : '';
    const faqKeys = r.faqs ? Object.keys(r.faqs) : [];
    const faqMatch = faqKeys.find(k => normalize(text).includes(k.toLowerCase()));
    const faq = faqMatch ? r.faqs[faqMatch] : r.faqs ? r.faqs[faqKeys[0]] : '';
    function phraseKey(k) {
      return (k || '').replace(/([a-z])([A-Z])/g, '$1 $2').replace(/[_-]+/g, ' ').toLowerCase();
    }
    const tipSentence = tip ? `One practical tip: ${tip}` : '';
    const faqSentence = faq ? (faqMatch ? `About ${phraseKey(faqMatch)}: ${faq}` : `${faq}`) : '';
    const overviewSentence = r.overview || '';
    const body = [overviewSentence, tipSentence, faqSentence].filter(Boolean).join('\n\n');
    const suggestions = r.suggestions || (Array.isArray(r.tips) ? r.tips.slice(0, 3) : []);
    return { text: body || 'Here are a few practical pointers to get you started.', suggestions };
  }

  function commonPatterns(text) {
    const q = normalize(text);
    if (q.match(/\b(when|best time)\b.*\bplant\b/)) return 'plantingSchedules';
    if (q.match(/\b(how often|frequency)\b.*\bwater|irrigate\b/)) return 'irrigationScheduling';
    if (q.match(/\bsoil\b.*\bpH\b/)) return 'pHManagement';
    if (q.match(/\bcompost\b|c:n\b|greens\b|browns\b/)) return 'composting';
    if (q.match(/\bpest\b|aphid|whitefly|caterpillar|bug\b/)) return 'aphids';
    if (q.match(/\bourban\b|balcony|container\b/)) return 'urbanGardening';
    if (q.match(/\bcool\b.*season\b/)) return 'coolSeasonPlanting';
    if (q.match(/\bwarm\b.*season\b/)) return 'warmSeasonPlanting';
    if (q.match(/\bcold\b|\bwinter\b|\bfrost\b|\bfreezing\b/)) return 'coldWeather';
    if (q.match(/\bhot\b|\bsummer\b|\bheat\b/)) return 'hotWeather';
    if (q.match(/\btropical\b|\bhumid\b|\brainy\b/)) return 'tropicalWeather';
    if (q.match(/\bdry\b|\barid\b|\bdesert\b|\bdrought\b/)) return 'aridWeather';
    if (q.match(/\bcoastal\b|\bbeach\b|\bsalt\b|\bocean\b/)) return 'coastalWeather';
    return null;
  }

  function smallTalk(text) {
    const q = normalize(text);
    if (q.match(/\b(hi|hello|hey)\b/)) {
      return { text: 'Hi! Tell me what you’re growing and your goal.' };
    }
    if (q.match(/\bthank(s| you)\b/)) {
      return { text: 'You’re welcome! Happy growing.' };
    }
    if (q.match(/\bwho are you\b|\byou\b.*assistant\b/)) {
      return { text: 'I’m your Smart Farm Assistant, here to help with crops, soil, water, and pests.' };
    }
    if (q.match(/\bhelp\b/)) {
      return { text: 'Share crop, location, and growth stage; I’ll guide planting, irrigation, nutrition, and pest steps.' };
    }
    return null;
  }

  function pickTopic(text) {
    const forced = commonPatterns(text);
    if (forced && farmingTopics[forced]) return forced;
    
    const cls = classify(text);
    if (cls.score >= 1 && farmingTopics[cls.key]) return cls.key;
    
    return 'fallback';
  }

  function generateReply(text) {
    const st = smallTalk(text);
    if (st) return st;

    const q = normalize(text);
    
    // Conversation Memory: Handle "it" or "that" referring to previous crop
    if (q.match(/\b(it|that|those|them)\b/) && userContext.currentCrop) {
      const cls = classify(text);
      if (cls.score < 1) {
        text = text + " " + userContext.currentCrop;
      }
    }

    // Context-aware checks
    if (q.match(/\b(where am i|my location|my city|where i live)\b/) && !q.includes('advice')) {
      return { text: userContext.location ? `You are in ${userContext.location}. This is a ${userContext.climate} zone.` : "I haven't detected your location yet. Click the location pin in the header!" };
    }
    
    // Comprehensive "Advice for my location/weather" check
    if (q.match(/\badvice\b.*\b(location|weather|climate|area|region|here|my zone)\b/) || 
        q.match(/\bwhat\b.*\b(plant|grow)\b.*\b(location|weather|climate|area|region|here|my zone)\b/)) {
      
      if (!userContext.location || !userContext.climate) {
        return { 
          text: "I'd love to help! Since I don't know where you are yet, could you click the location pin 📍 and calendar 📅 in the header? Then I can give you advice for your exact spot.",
          suggestions: ["How do I detect my location?", "What's a climate zone?"]
        };
      }

      const climateKey = `${userContext.climate}Weather`;
      const climateTopic = farmingTopics[climateKey];
      const seasonTopic = farmingTopics[userContext.season === 'summer' || userContext.season === 'spring' ? 'warmSeasonPlanting' : 'coolSeasonPlanting'];
      
      let intro = `Since you're in **${userContext.location}**, here's what I recommend for your **${userContext.climate}** climate and the **${userContext.season}** season:\n\n`;
      
      let body = "";
      if (climateTopic) {
        body += `**For your area:** ${climateTopic.responses.overview}\n`;
        const regionalCrops = climateTopic.responses.faqs["crops for " + userContext.climate + (userContext.climate === 'cold' ? " weather" : " zones") || userContext.climate + " regions"];
        if (regionalCrops) body += `You might want to try growing: ${regionalCrops}\n\n`;
      }
      
      if (seasonTopic) {
        body += `**Right now (${userContext.season}):** It's a great time for ${userContext.season === 'summer' || userContext.season === 'spring' ? 'warm-weather' : 'cool-weather'} plants. ${seasonTopic.responses.overview}`;
      }

      return { 
        text: intro + body,
        suggestions: climateTopic ? climateTopic.responses.suggestions : ["What else can I grow?", "How's the soil here?"]
      };
    }

    if (q.match(/\b(climate|zone|weather)\b/)) {
      if (userContext.climate) {
        const topic = farmingTopics[`${userContext.climate}Weather`];
        const res = templates(topic, text);
        res.text = `As we found earlier, you're in a ${userContext.climate} zone. ` + res.text;
        return res;
      }
      return { text: "I'm not sure about your climate zone yet. Please click the location pin in the header to help me provide better advice." };
    }

    const key = pickTopic(text);
    
    if (key === 'fallback') {
      return {
        text: "I'm sorry, I didn't quite catch that. Could you try asking about a specific crop (like tomatoes or apples), soil, or pests? I'm still learning!",
        suggestions: ["How do I grow tomatoes?", "Tell me about soil", "What to plant now?"]
      };
    }

    const obj = farmingTopics[key];
    const out = templates(obj, text);
    
    // Personalize based on current crop
    if (userContext.currentCrop && !q.includes(userContext.currentCrop) && key !== 'fallback') {
      out.text = `Since you mentioned ${userContext.currentCrop} earlier, here's some related info: ` + out.text;
    }

    const chat = getCurrentChat();
    chat.lastTopicKey = key;
    saveChats();
    
    // Add dynamic suggestions based on the topic
    if (obj.responses && obj.responses.suggestions) {
      out.suggestions = obj.responses.suggestions;
    }

    return out;
  }
});
