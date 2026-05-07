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
  finalists: [],
  buzzerOpen: false,
  buzzedTeam: null
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
const buzzerStatus = $("buzzerStatus");

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

  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("mousedown", handleMouseBuzzer);
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
  closeBuzzer();
  if (buzzerStatus) buzzerStatus.classList.add("hidden");
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
  closeBuzzer();
  stopTimer();
  changeScore(1);
  showAnswer();
  beep("correct");
  showQuestionFeedback("correct", "✅ CORRECT!");
}

function markWrong() {
  closeBuzzer();
  stopTimer();
  showAnswer();
  beep("wrong");
  setTimeout(() => beep("laugh"), 420);
  showQuestionFeedback("wrong", "❌ WRONG!");
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
  closeBuzzer();
  if (buzzerStatus) buzzerStatus.classList.add("hidden");
  stopTimer();
  render();
}

function startTimer(auto = false) {
  stopTimer();
  state.timerLeft = state.timerSeconds;
  render();

  beep(auto ? "timerStart" : "tick");

  state.timerId = setInterval(() => {
    state.timerLeft -= 1;

    if (state.timerLeft > 0) {
      beep("tick");
    }

    if (state.timerLeft <= 0) {
      state.timerLeft = 0;
      closeBuzzer();
      stopTimer();
      beep("wrong");
      showQuestionFeedback("wrong", "⏰ TIME OUT!");
    }

    render();
  }, 1000);
}

function stopTimer() {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
}

function openBuzzer() {
  state.buzzerOpen = true;
  state.buzzedTeam = null;
  if (buzzerStatus) {
    buzzerStatus.textContent = "";
    buzzerStatus.className = "top-buzzer hidden";
    buzzerStatus.classList.add("hidden");
  }
}

function closeBuzzer() {
  state.buzzerOpen = false;
}

function handleMouseBuzzer(e) {
  const clickedButton = e.button;

  if (clickedButton === 2) {
    e.preventDefault();
  }

  const clickedInsideControls = e.target.closest("button, select, input, dialog, .team-card, .host-controls, .score-actions, .top-actions, .final-panel");
  if (clickedInsideControls) return;

  if (!state.buzzerOpen || state.buzzedTeam !== null) return;
  if (clickedButton !== 0 && clickedButton !== 2) return;

  const teamIndex = clickedButton === 2 ? 0 : 1;
  const team = state.teams[teamIndex];
  if (!team) return;

  state.selectedTeam = teamIndex;
  state.buzzedTeam = teamIndex;
  state.buzzerOpen = false;
  stopTimer();

  if (buzzerStatus) {
    buzzerStatus.textContent = `🚨 TURNO PARA ${team.name}`;
    buzzerStatus.className = `top-buzzer team-${teamIndex + 1}`;
  }

  showBuzzCenterFlash(team.name, teamIndex);
  beep("buzz");
  render();
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

function clearQuestionFeedback() {
  const card = $("questionCard");
  card.classList.remove("correct-flash", "wrong-flash");

  card.querySelectorAll(".feedback-badge, .card-confetti, .wrong-overlay").forEach(el => el.remove());
}

function showQuestionFeedback(type, message) {
  const card = $("questionCard");
  clearQuestionFeedback();

  const badge = document.createElement("div");
  badge.className = `feedback-badge ${type} show`;
  badge.textContent = message;
  card.appendChild(badge);

  if (type === "correct") {
    card.classList.add("correct-flash");
    launchCardConfetti(card);
  } else {
    card.classList.add("wrong-flash");
    const overlay = document.createElement("div");
    overlay.className = "wrong-overlay show";
    overlay.textContent = "✖";
    card.appendChild(overlay);
  }

  setTimeout(() => {
    badge.remove();
    card.classList.remove("correct-flash", "wrong-flash");
    card.querySelectorAll(".wrong-overlay").forEach(el => el.remove());
  }, 1150);
}

function launchCardConfetti(card) {
  const canvas = document.createElement("canvas");
  canvas.className = "card-confetti";
  card.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  const rect = card.getBoundingClientRect();
  canvas.width = Math.floor(rect.width);
  canvas.height = Math.floor(rect.height);

  const colors = ["#00d9ff", "#ff3df2", "#ffd166", "#22c55e", "#ffffff"];
  const pieces = Array.from({ length: 95 }, () => ({
    x: canvas.width / 2 + (Math.random() - 0.5) * 140,
    y: canvas.height / 2 + (Math.random() - 0.5) * 40,
    vx: (Math.random() - 0.5) * 10,
    vy: -Math.random() * 9 - 3,
    size: 5 + Math.random() * 8,
    rot: Math.random() * Math.PI,
    spin: (Math.random() - 0.5) * 0.32,
    color: colors[Math.floor(Math.random() * colors.length)],
    gravity: 0.32 + Math.random() * 0.18
  }));

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pieces.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rot += p.spin;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.55);
      ctx.restore();
    });

    frame++;
    if (frame < 90) {
      requestAnimationFrame(draw);
    } else {
      canvas.remove();
    }
  }

  draw();
}


function showBuzzCenterFlash(teamName, teamIndex) {
  const oldFlash = document.querySelector(".buzz-center-flash");
  if (oldFlash) oldFlash.remove();

  const flash = document.createElement("div");
  flash.className = `buzz-center-flash team-${teamIndex + 1}`;
  flash.innerHTML = `
    <div class="buzz-center-card">
      <span>🚨</span>
      <strong>${teamName}</strong>
      <small>¡Presionó primero!</small>
    </div>
  `;

  document.body.appendChild(flash);

  setTimeout(() => {
    flash.classList.add("hide");
  }, 850);

  setTimeout(() => {
    flash.remove();
  }, 1250);
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
