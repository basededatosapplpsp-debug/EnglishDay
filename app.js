let state = {
  categoryIndex: 0,
  topicFilter: "all",
  questionIndex: -1,
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
  buzzedTeam: null,
  usedQuestions: [] // 👈 NUEVO: evita repetir preguntas en las 150
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
   AUDIO
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
    tone(523, 0.00, 0.18);
    tone(659, 0.13, 0.20);
    tone(784, 0.27, 0.25);
    tone(1046, 0.42, 0.36);
  } else if (type === "wrong") {
    tone(260, 0.00, 0.24, 0.28, "sawtooth", 150);
    tone(180, 0.22, 0.30, 0.26, "sawtooth", 95);
    tone(110, 0.50, 0.35, 0.22, "square", 70);
  } else if (type === "buzz") {
    tone(1200, 0.00, 0.08, 0.34, "square");
    tone(650, 0.08, 0.08, 0.34, "square");
  } else if (type === "tick") {
    tone(900, 0.00, 0.05, 0.12, "square");
  } else if (type === "timerStart") {
    tone(700, 0.00, 0.10, 0.16);
    tone(920, 0.12, 0.10, 0.16);
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

  if (topicSelect) {
    topicSelect.addEventListener("change", (e) => loadTopic(e.target.value));
  }

  $("nextBtn").addEventListener("click", nextQuestion);
  $("prevBtn").addEventListener("click", prevQuestion);
  $("showAnswerBtn").addEventListener("click", showAnswer);
  $("correctBtn").addEventListener("click", markCorrect);
  $("wrongBtn").addEventListener("click", markWrong);
  $("resetScoreBtn").addEventListener("click", resetScore);
  $("startTimerBtn").addEventListener("click", startTimer);

  document.addEventListener("mousedown", handleMouseBuzzer);
}

/* =========================
   CATEGORY
========================= */

function loadCategory(index) {
  stopTimer();

  const cat = GAME_DATA[index];

  state.categoryIndex = index;
  state.topicFilter = "all";
  state.questionIndex = -1;
  state.usedQuestions = []; // 👈 reset preguntas usadas

  state.teams = cat.defaultTeams.map((name, i) => ({
    name,
    score: 0,
    color: i === 0 ? "#00d9ff" : "#ff3df2"
  }));

  answerBox.classList.add("hidden");
  visual.textContent = "⚡";
  questionText.textContent = "Presiona “Siguiente” para iniciar";

  render();
}

/* =========================
   QUESTIONS (SIN REPETIR)
========================= */

function getActiveQuestions(cat) {
  if (!cat?.questions) return [];

  let list = state.topicFilter === "all"
    ? cat.questions
    : cat.questions.filter(q => q.type === state.topicFilter);

  // evitar repetidas
  list = list.filter((q, i) => {
    const key = q.q + q.a;
    return !state.usedQuestions.includes(key);
  });

  return list;
}

function markQuestionUsed(q) {
  const key = q.q + q.a;
  if (!state.usedQuestions.includes(key)) {
    state.usedQuestions.push(key);
  }
}

/* =========================
   NAV
========================= */

function nextQuestion() {
  const cat = GAME_DATA[state.categoryIndex];
  const list = getActiveQuestions(cat);

  if (!list.length) {
    alert("No hay más preguntas disponibles");
    return;
  }

  state.questionIndex = Math.floor(Math.random() * list.length);
  setQuestion();
}

function prevQuestion() {
  nextQuestion();
}

/* =========================
   SET QUESTION
========================= */

function setQuestion() {
  const cat = GAME_DATA[state.categoryIndex];
  const list = getActiveQuestions(cat);
  const q = list[state.questionIndex];

  if (!q) return;

  markQuestionUsed(q);

  visual.textContent = q.visual;
  questionType.textContent = q.type;
  questionText.textContent = q.q;
  answerText.textContent = q.a;
  answerBox.classList.add("hidden");

  startTimer(true);
}

/* =========================
   ANSWER
========================= */

function showAnswer() {
  answerBox.classList.remove("hidden");
}

function markCorrect() {
  changeScore(1);
  showAnswer();
  beep("correct");
}

function markWrong() {
  showAnswer();
  beep("wrong");
}

function changeScore(delta) {
  const team = state.teams[state.selectedTeam];
  if (!team) return;
  team.score += delta;
  render();
}

/* =========================
   TIMER
========================= */

function startTimer(auto = false) {
  stopTimer();

  state.timerLeft = state.timerSeconds;
  render();

  beep(auto ? "timerStart" : "tick");

  state.timerId = setInterval(() => {
    state.timerLeft--;

    if (state.timerLeft <= 0) {
      stopTimer();
      beep("wrong");
      return;
    }

    render();
  }, 1000);
}

function stopTimer() {
  clearInterval(state.timerId);
  state.timerId = null;
}

/* =========================
   BUZZER SIMPLE
========================= */

function handleMouseBuzzer(e) {
  if (e.button !== 0) return;

  const teamIndex = state.selectedTeam === 0 ? 1 : 0;
  state.selectedTeam = teamIndex;

  beep("buzz");
  render();
}

/* =========================
   RENDER
========================= */

function render() {
  const cat = GAME_DATA[state.categoryIndex];

  categoryTitle.textContent = cat.title;
  matchName.textContent = cat.match;

  timer.textContent = state.timerLeft;

  teamsContainer.innerHTML = "";

  state.teams.forEach((t, i) => {
    const div = document.createElement("div");
    div.className = "team-card";
    div.style.borderColor = t.color;
    div.innerHTML = `${t.name} - ${t.score}`;
    teamsContainer.appendChild(div);
  });

  questionProgress.textContent =
    `Usadas: ${state.usedQuestions.length}`;
}

/* =========================
   RESET
========================= */

function resetScore() {
  state.teams.forEach(t => t.score = 0);
  state.usedQuestions = [];
  render();
}

/* =========================
   START
========================= */

init();
