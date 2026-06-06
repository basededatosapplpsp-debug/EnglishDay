let state = {
  questionIndex: -1,
  questionsQueue: [],
  currentQuestion: null,
  selectedTeam: 0,
  timerSeconds: 15,
  timerLeft: 15,
  timerId: null,
  soundOn: true,
  teams: [
    { name: "Equipo 1", score: 0, color: "#00d9ff" },
    { name: "Equipo 2", score: 0, color: "#ff3df2" }
  ]
};

const $ = (id) => document.getElementById(id);

const visual = $("visual");
const questionType = $("questionType");
const questionText = $("questionText");
const answerBox = $("answerBox");
const answerText = $("answerText");
const questionProgress = $("questionProgress");
const progressFill = $("progressFill");
const timer = $("timer");
const teamsContainer = $("teamsContainer");
const selectedTeamName = $("selectedTeamName");

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
   INIT GAME
========================= */
function init() {
  state.questionsQueue = shuffleArray(GAME_DATA[0].questions);
  renderTeams();
  nextQuestion();
}

/* =========================
   NEXT QUESTION (NO REPITE)
========================= */
function nextQuestion() {
  if (state.questionsQueue.length === 0) {
    questionText.textContent = "🏁 No hay más preguntas";
    return;
  }

  state.currentQuestion = state.questionsQueue.shift();
  state.questionIndex++;

  const q = state.currentQuestion;

  visual.textContent = q.visual;
  questionType.textContent = q.type;
  questionText.textContent = q.q;
  answerText.textContent = q.a;

  answerBox.classList.add("hidden");

  resetTimer();
  startTimer();

  updateProgress();
}

/* =========================
   PREV (DESACTIVADO)
========================= */
function prevQuestion() {
  alert("En este modo no se puede retroceder.");
}

/* =========================
   PROGRESO
========================= */
function updateProgress() {
  const total = GAME_DATA[0].questions.length;
  const current = state.questionIndex + 1;

  questionProgress.textContent = `Pregunta ${current} de ${total}`;
  progressFill.style.width = `${(current / total) * 100}%`;
}

/* =========================
   SHOW ANSWER
========================= */
function showAnswer() {
  answerBox.classList.remove("hidden");
}

/* =========================
   SCORE
========================= */
function changeScore(teamIndex, value) {
  state.teams[teamIndex].score += value;
  renderTeams();
}

/* =========================
   TEAMS
========================= */
function renderTeams() {
  teamsContainer.innerHTML = "";

  state.teams.forEach((team, i) => {
    const div = document.createElement("button");
    div.className = "team-card";
    div.style.setProperty("--team-color", team.color);

    div.innerHTML = `
      <div class="team-name">${team.name}</div>
      <div class="team-score">${team.score}</div>
    `;

    div.onclick = () => {
      state.selectedTeam = i;
      selectedTeamName.textContent = team.name;
    };

    teamsContainer.appendChild(div);
  });

  selectedTeamName.textContent =
    state.teams[state.selectedTeam].name;
}

/* =========================
   TIMER
========================= */
function startTimer() {
  stopTimer();
  state.timerLeft = state.timerSeconds;

  state.timerId = setInterval(() => {
    state.timerLeft--;
    timer.textContent = state.timerLeft;

    if (state.timerLeft <= 0) {
      stopTimer();
      questionText.textContent = "⏰ Tiempo terminado";
    }
  }, 1000);
}

function resetTimer() {
  stopTimer();
  state.timerLeft = state.timerSeconds;
  timer.textContent = state.timerLeft;
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

/* =========================
   BUTTON EVENTS
========================= */
document.getElementById("nextBtn").addEventListener("click", nextQuestion);

document.getElementById("showAnswerBtn").addEventListener("click", showAnswer);

document.getElementById("correctBtn").addEventListener("click", () => {
  changeScore(state.selectedTeam, 1);
  nextQuestion();
});

document.getElementById("wrongBtn").addEventListener("click", () => {
  changeScore(state.selectedTeam, -1);
  nextQuestion();
});

document.getElementById("plusBtn").addEventListener("click", () => {
  changeScore(state.selectedTeam, 1);
});

document.getElementById("minusBtn").addEventListener("click", () => {
  changeScore(state.selectedTeam, -1);
});

document.getElementById("resetScoreBtn").addEventListener("click", () => {
  state.teams.forEach(t => t.score = 0);
  renderTeams();
});

/* =========================
   START
========================= */
init();
