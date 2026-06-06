let state = {
  categoryIndex: 0,
  topicFilter: "all",
  questionIndex: -1,
  questionsQueue: [],
  askedCount: 0,
  totalQuestions: 0,
  selectedTeam: 0,
  timerSeconds: 15,
  timerLeft: 15,
  timerId: null,
  soundOn: true,
  teams: [
    { name: "Team A", score: 0, color: "#00d9ff" },
    { name: "Team B", score: 0, color: "#ff3df2" }
  ],
  finalists: [],
  finalCategoryIndex: 0,
  buzzerOpen: false,
  buzzedTeam: null
};

const $ = (id) => document.getElementById(id);

const categorySelect = $("categorySelect");
const topicSelect = $("topicSelect");
const teamsContainer = $("teamsContainer");
const categoryTitle = $("categoryTitle");
const matchName = $("matchName");
const visual = $("visual");
const questionType = $("questionType");
const questionText = $("questionText");
const answerBox = $("answerBox");
const answerText = $("answerText");
const questionProgress = $("questionProgress");
const roundTopic = $("roundTopic");
const progressFill = $("progressFill");
const timer = $("timer");
const selectedTeamName = $("selectedTeamName");
const currentWinner = $("currentWinner");
const finalistsList = $("finalistsList");
const buzzerStatus = $("buzzerStatus");

/* =========================
   🔀 SHUFFLE
========================= */
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* =========================
   🔊 SOUND
========================= */
function beep(type = "correct") {
  if (!state.soundOn) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();

  function tone(freq, start, duration, volume = 0.22, wave = "sine", endFreq = null) {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = wave;
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
    if (endFreq) {
      osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + start + duration);
    }

    gain.gain.setValueAtTime(0.0001, ctx.currentTime + start);
    gain.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);

    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + duration + 0.03);
  }

  if (type === "correct") {
    tone(523, 0.00, 0.18, 0.24, "triangle");
    tone(659, 0.13, 0.20, 0.24, "triangle");
    tone(784, 0.27, 0.25, 0.26, "triangle");
    tone(1046, 0.42, 0.36, 0.30, "triangle");
  } else if (type === "wrong") {
    tone(260, 0.00, 0.24, 0.28, "sawtooth", 150);
    tone(180, 0.22, 0.30, 0.26, "sawtooth", 95);
    tone(110, 0.50, 0.35, 0.22, "square", 70);
  } else if (type === "laugh") {
    tone(330, 0.00, 0.10, 0.20, "square");
    tone(250, 0.12, 0.10, 0.20, "square");
    tone(330, 0.24, 0.10, 0.20, "square");
    tone(250, 0.36, 0.14, 0.20, "square");
  } else if (type === "buzz") {
    tone(1200, 0.00, 0.08, 0.34, "square");
    tone(650, 0.08, 0.08, 0.34, "square");
    tone(1200, 0.16, 0.08, 0.34, "square");
    tone(650, 0.24, 0.12, 0.32, "square");
  } else if (type === "tick") {
    tone(900, 0.00, 0.055, 0.11, "square");
  } else if (type === "timerStart") {
    tone(700, 0.00, 0.10, 0.16, "triangle");
    tone(920, 0.12, 0.10, 0.16, "triangle");
  } else {
    tone(520, 0.00, 0.20, 0.18, "sine");
  }
}

/* =========================
   INIT
========================= */
function init() {
  GAME_DATA.forEach((cat, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = cat.title;
    categorySelect.appendChild(option);
  });

  loadCategory(0);
  bindEvents();
  render();
}

/* =========================
   EVENTS
========================= */
function bindEvents() {
  categorySelect.addEventListener("change", (e) => loadCategory(Number(e.target.value)));
  if (topicSelect) topicSelect.addEventListener("change", (e) => loadTopic(e.target.value));

  $("setupBtn").addEventListener("click", openSetup);
  $("saveSetupBtn").addEventListener("click", saveSetup);
  $("soundBtn").addEventListener("click", toggleSound);

  $("nextBtn").addEventListener("click", nextQuestion);
  $("showAnswerBtn").addEventListener("click", showAnswer);
  $("correctBtn").addEventListener("click", markCorrect);
  $("wrongBtn").addEventListener("click", markWrong);
  $("plusBtn").addEventListener("click", () => changeScore(1));
  $("minusBtn").addEventListener("click", () => changeScore(-1));
  $("resetScoreBtn").addEventListener("click", resetScore);
  $("startTimerBtn").addEventListener("click", startTimer);

  $("addWinnerBtn").addEventListener("click", addCurrentWinnerToFinal);
  $("finalModeBtn").addEventListener("click", startFinalMode);
  $("championBtn").addEventListener("click", showChampion);
  $("closeChampionBtn").addEventListener("click", closeChampion);
}

/* =========================
   LOAD CATEGORY (🔥 RANDOM)
========================= */
function loadCategory(index) {
  stopTimer();

  const cat = GAME_DATA[index];

  state.categoryIndex = index;
  state.topicFilter = "all";
  state.questionIndex = -1;

  const active = getActiveQuestions(cat);

  // 🔥 RANDOM + NO REPETICIÓN
  state.questionsQueue = shuffleArray(active);
  state.totalQuestions = active.length;
  state.askedCount = 0;

  state.selectedTeam = 0;

  state.teams = cat.defaultTeams.map((name, i) => ({
    name,
    score: 0,
    color: i === 0 ? "#00d9ff" : "#ff3df2"
  }));

  state.timerLeft = state.timerSeconds;

  answerBox.classList.add("hidden");
  visual.textContent = "⚡";
  questionText.textContent = "Presiona “Siguiente” para comenzar";
  questionType.textContent = "Inicio";

  render();
}

/* =========================
   NEXT QUESTION (NO REPETICIÓN)
========================= */
function nextQuestion() {
  if (!state.questionsQueue.length) {
    questionText.textContent = "🏁 No hay más preguntas";
    return;
  }

  const q = state.questionsQueue.shift();
  state.askedCount++;

  clearQuestionFeedback();
  openBuzzer();

  visual.textContent = q.visual;
  questionType.textContent = q.type;
  questionText.textContent = q.q;
  answerText.textContent = q.a;

  answerBox.classList.add("hidden");

  state.timerLeft = state.timerSeconds;

  render();
  startTimer(true);
}

/* =========================
   PREV (DESACTIVADO)
========================= */
function prevQuestion() {
  beep("wrong");
  alert("Modo aleatorio: no se puede retroceder.");
}

/* =========================
   RENDER
========================= */
function render() {
  const cat = GAME_DATA[state.categoryIndex];

  categoryTitle.textContent = cat.title;
  matchName.textContent = cat.match;

  roundTopic.textContent = state.topicFilter;

  timer.textContent = state.timerLeft;
  timer.classList.toggle("warning", state.timerLeft <= 5 && state.timerLeft > 0);

  teamsContainer.innerHTML = "";

  state.teams.forEach((team, i) => {
    const card = document.createElement("button");
    card.className = `team-card ${state.selectedTeam === i ? "selected" : ""}`;
    card.style.setProperty("--team-color", team.color);

    card.innerHTML = `
      <div class="team-name">${team.name}</div>
      <div class="team-score">${team.score}</div>
    `;

    card.onclick = () => {
      state.selectedTeam = i;
      beep("tick");
      render();
    };

    teamsContainer.appendChild(card);
  });

  selectedTeamName.textContent =
    state.teams[state.selectedTeam]?.name || "Sin equipo";

  currentWinner.textContent = getWinnerText();

  // 📊 PROGRESO REAL
  const total = state.totalQuestions;
  const current = state.askedCount;

  questionProgress.textContent = `Pregunta ${current} de ${total}`;

  const pct = total ? (current / total) * 100 : 0;
  progressFill.style.width = `${pct}%`;

  renderFinalists();
}

/* =========================
   HELPERS
========================= */
function getActiveQuestions(cat) {
  if (!cat?.questions) return [];
  if (state.topicFilter === "all") return cat.questions;
  return cat.questions.filter(q => q.type === state.topicFilter);
}

/* =========================
   RESTO (SIN CAMBIOS IMPORTANTES)
========================= */
// 👉 Aquí puedes dejar intactas tus funciones:
showAnswer,
markCorrect,
markWrong,
changeScore,
startTimer,
stopTimer,
openSetup,
saveSetup,
toggleSound,
resetScore,
getWinner,
getWinnerText,
addCurrentWinnerToFinal,
renderFinalists,
startFinalMode,
showChampion,
closeChampion,
startConfetti,
showQuestionFeedback,
clearQuestionFeedback,
handleMouseBuzzer,
loadTopic

/* =========================
   START
========================= */
init();
