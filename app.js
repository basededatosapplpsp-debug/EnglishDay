let state = {
  categoryIndex: 0,
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
  finalists: []
};

const $ = (id) => document.getElementById(id);

const categorySelect = $("categorySelect");
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

function beep(type = "correct") {
  if (!state.soundOn) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  if (type === "correct") {
    osc.frequency.setValueAtTime(660, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(990, ctx.currentTime + 0.16);
  } else if (type === "wrong") {
    osc.frequency.setValueAtTime(220, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.22);
  } else if (type === "tick") {
    osc.frequency.setValueAtTime(880, ctx.currentTime);
  } else {
    osc.frequency.setValueAtTime(520, ctx.currentTime);
  }

  gain.gain.setValueAtTime(0.0001, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.25, ctx.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.28);

  osc.start();
  osc.stop(ctx.currentTime + 0.3);
}

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

function bindEvents() {
  categorySelect.addEventListener("change", (e) => loadCategory(Number(e.target.value)));
  $("setupBtn").addEventListener("click", openSetup);
  $("saveSetupBtn").addEventListener("click", saveSetup);
  $("soundBtn").addEventListener("click", toggleSound);

  $("prevBtn").addEventListener("click", prevQuestion);
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

function loadCategory(index) {
  stopTimer();
  const cat = GAME_DATA[index];
  state.categoryIndex = index;
  state.questionIndex = -1;
  state.selectedTeam = 0;
  state.teams = cat.defaultTeams.map((name, i) => ({
    name,
    score: 0,
    color: i === 0 ? "#00d9ff" : "#ff3df2"
  }));
  state.timerLeft = state.timerSeconds;
  answerBox.classList.add("hidden");
  visual.textContent = "⚡";
  questionText.textContent = "Presiona “Iniciar ronda” para comenzar";
  questionType.textContent = "Vocabulary";
  render();
}

function render() {
  const cat = GAME_DATA[state.categoryIndex];

  categoryTitle.textContent = cat.title;
  matchName.textContent = cat.match;
  categorySelect.value = state.categoryIndex;
  roundTopic.textContent = cat.topics.join(" • ");

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
    card.addEventListener("click", () => {
      state.selectedTeam = i;
      beep("tick");
      render();
    });
    teamsContainer.appendChild(card);
  });

  selectedTeamName.textContent = state.teams[state.selectedTeam]?.name || "Sin equipo";
  currentWinner.textContent = getWinnerText();

  const total = cat.questions.length;
  const current = Math.max(0, state.questionIndex + 1);
  questionProgress.textContent = `Pregunta ${current} de ${total}`;
  const pct = total ? (current / total) * 100 : 0;
  progressFill.style.width = `${pct}%`;

  renderFinalists();
}

function setQuestion() {
  const cat = GAME_DATA[state.categoryIndex];
  const q = cat.questions[state.questionIndex];
  if (!q) return;

  visual.textContent = q.visual;
  questionType.textContent = q.type;
  questionText.textContent = q.q;
  answerText.textContent = q.a;
  answerBox.classList.add("hidden");
  state.timerLeft = state.timerSeconds;
  stopTimer();
  beep("start");
  render();
}

function nextQuestion() {
  const cat = GAME_DATA[state.categoryIndex];
  state.questionIndex = (state.questionIndex + 1) % cat.questions.length;
  setQuestion();
}

function prevQuestion() {
  const cat = GAME_DATA[state.categoryIndex];
  if (state.questionIndex <= 0) {
    state.questionIndex = cat.questions.length - 1;
  } else {
    state.questionIndex -= 1;
  }
  setQuestion();
}

function showAnswer() {
  answerBox.classList.remove("hidden");
  beep("tick");
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
  team.score = Math.max(0, team.score + delta);
  render();
}

function resetScore() {
  state.teams.forEach(t => t.score = 0);
  state.questionIndex = -1;
  visual.textContent = "⚡";
  questionText.textContent = "Presiona “Iniciar ronda” para comenzar";
  questionType.textContent = "Vocabulary";
  answerBox.classList.add("hidden");
  stopTimer();
  render();
}

function startTimer() {
  stopTimer();
  state.timerLeft = state.timerSeconds;
  render();

  state.timerId = setInterval(() => {
    state.timerLeft -= 1;
    if (state.timerLeft <= 5 && state.timerLeft > 0) beep("tick");
    if (state.timerLeft <= 0) {
      state.timerLeft = 0;
      stopTimer();
      beep("wrong");
    }
    render();
  }, 1000);
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function openSetup() {
  $("team1Input").value = state.teams[0]?.name || "";
  $("team2Input").value = state.teams[1]?.name || "";
  $("timerInput").value = state.timerSeconds;
  $("setupDialog").showModal();
}

function saveSetup(e) {
  e.preventDefault();
  const t1 = $("team1Input").value.trim() || "Team A";
  const t2 = $("team2Input").value.trim() || "Team B";
  const seconds = Number($("timerInput").value) || 15;

  state.teams[0].name = t1;
  state.teams[1].name = t2;
  state.timerSeconds = Math.min(60, Math.max(5, seconds));
  state.timerLeft = state.timerSeconds;

  $("setupDialog").close();
  render();
}

function toggleSound() {
  state.soundOn = !state.soundOn;
  $("soundBtn").textContent = state.soundOn ? "🔊 Sonido" : "🔇 Silencio";
  if (state.soundOn) beep("correct");
}

function getWinner() {
  if (!state.teams.length) return null;
  const sorted = [...state.teams].sort((a,b) => b.score - a.score);
  if (sorted.length > 1 && sorted[0].score === sorted[1].score) return null;
  return sorted[0];
}

function getWinnerText() {
  const winner = getWinner();
  return winner ? `${winner.name} (${winner.score} pts)` : "Empate o sin puntaje";
}

function addCurrentWinnerToFinal() {
  const winner = getWinner();
  if (!winner) {
    beep("wrong");
    alert("Todavía hay empate o no hay puntaje. Define un ganador primero.");
    return;
  }

  if (!state.finalists.includes(winner.name)) {
    state.finalists.push(winner.name);
  }
  beep("correct");
  render();
}

function renderFinalists() {
  finalistsList.innerHTML = "";
  if (state.finalists.length === 0) {
    finalistsList.innerHTML = `<div class="finalist">Aún no hay clasificados</div>`;
    return;
  }

  state.finalists.forEach((name, i) => {
    const div = document.createElement("div");
    div.className = "finalist";
    div.textContent = `${i + 1}. ${name}`;
    finalistsList.appendChild(div);
  });
}

function startFinalMode() {
  const finalIndex = GAME_DATA.findIndex(c => c.id === "final");
  loadCategory(finalIndex);

  if (state.finalists.length >= 2) {
    state.teams[0].name = state.finalists[0];
    state.teams[1].name = state.finalists[1];
  }

  beep("correct");
  render();
}

function showChampion() {
  const winner = getWinner();
  if (!winner) {
    beep("wrong");
    alert("No hay campeón todavía. Revisa el puntaje final.");
    return;
  }

  $("championName").textContent = winner.name;
  $("championOverlay").classList.remove("hidden");
  startConfetti();
  beep("correct");
  setTimeout(() => beep("correct"), 260);
}

function closeChampion() {
  $("championOverlay").classList.add("hidden");
}

function startConfetti() {
  const canvas = $("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const pieces = Array.from({ length: 160 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    size: 4 + Math.random() * 8,
    speed: 2 + Math.random() * 5,
    angle: Math.random() * Math.PI,
    spin: Math.random() * 0.2,
    color: ["#00d9ff", "#ff3df2", "#ffd166", "#22c55e", "#ffffff"][Math.floor(Math.random()*5)]
  }));

  let frames = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p => {
      p.y += p.speed;
      p.x += Math.sin(p.angle) * 2;
      p.angle += p.spin;

      ctx.save();
      ctx.translate(p.x,p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size/2,-p.size/2,p.size,p.size*1.6);
      ctx.restore();

      if (p.y > canvas.height) p.y = -20;
    });

    frames++;
    if (frames < 420 && !$("championOverlay").classList.contains("hidden")) {
      requestAnimationFrame(draw);
    }
  }
  draw();
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (key === "arrowright") nextQuestion();
  if (key === "arrowleft") prevQuestion();
  if (key === " ") {
    e.preventDefault();
    showAnswer();
  }
  if (key === "1") { state.selectedTeam = 0; render(); beep("tick"); }
  if (key === "2") { state.selectedTeam = 1; render(); beep("tick"); }
  if (key === "c") markCorrect();
  if (key === "x") markWrong();
  if (key === "t") startTimer();
});

init();
