let state = {
  categoryIndex: 0,
  questionIndex: -1,
  selectedTeam: 0,
  timerSeconds: 15,
  timerLeft: 15,
  timerId: null,
  soundOn: true,
  teams: [
    { name: "Equipo 1", score: 0 },
    { name: "Equipo 2", score: 0 }
  ]
};

const $ = (id) => document.getElementById(id);

const categorySelect = $("categorySelect");
const teamsContainer = $("teamsContainer");
const questionText = $("questionText");
const answerText = $("answerText");
const answerBox = $("answerBox");
const timer = $("timer");

function init() {
  GAME_DATA.forEach((c, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = c.title;
    categorySelect.appendChild(opt);
  });

  loadCategory(0);
  bind();
  render();
}

function bind() {
  categorySelect.addEventListener("change", e => loadCategory(+e.target.value));

  $("nextBtn").addEventListener("click", next);
  $("prevBtn").addEventListener("click", prev);
  $("showAnswerBtn").addEventListener("click", showAnswer);

  $("correctBtn").addEventListener("click", () => score(1));
  $("wrongBtn").addEventListener("click", () => score(0));

  $("team1Btn").addEventListener("click", () => selectTeam(0));
  $("team2Btn").addEventListener("click", () => selectTeam(1));

  $("startTimerBtn").addEventListener("click", startTimer);
}

function loadCategory(i) {
  state.categoryIndex = i;
  state.questionIndex = -1;
  stopTimer();
  render();
}

function getQuestions() {
  return GAME_DATA[state.categoryIndex].questions;
}

function next() {
  const q = getQuestions();
  state.questionIndex = (state.questionIndex + 1) % q.length;
  showQuestion();
}

function prev() {
  const q = getQuestions();
  state.questionIndex = (state.questionIndex - 1 + q.length) % q.length;
  showQuestion();
}

function showQuestion() {
  const q = getQuestions()[state.questionIndex];
  questionText.textContent = q.q;
  answerText.textContent = q.a;
  answerBox.style.display = "none";
  resetTimer();
}

function showAnswer() {
  answerBox.style.display = "block";
}

function selectTeam(i) {
  state.selectedTeam = i;
  render();
}

function score(val) {
  const team = state.teams[state.selectedTeam];
  team.score += val;
  render();
}

function render() {
  const teams = state.teams;

  teamsContainer.innerHTML = teams.map((t, i) => `
    <button onclick="selectTeam(${i})">
      ${t.name} - ${t.score}
    </button>
  `).join("");

  timer.textContent = state.timerLeft;
}

function startTimer() {
  stopTimer();
  state.timerLeft = state.timerSeconds;

  state.timerId = setInterval(() => {
    state.timerLeft--;
    if (state.timerLeft <= 0) {
      stopTimer();
    }
    render();
  }, 1000);
}

function resetTimer() {
  stopTimer();
  state.timerLeft = state.timerSeconds;
  render();
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

init();
