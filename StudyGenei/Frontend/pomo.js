const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const progressCircle = document.getElementById("progress");
const customMinutes = document.getElementById("customMinutes");

let duration = parseInt(customMinutes.value) * 60;
let timeLeft = duration;
let interval = null;

const radius = 100;
const circumference = 2 * Math.PI * radius;
progressCircle.style.strokeDasharray = circumference;
progressCircle.style.strokeDashoffset = circumference;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;

  // update circle
  const offset = circumference - (timeLeft / duration) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

startBtn.addEventListener("click", () => {
  if (interval) return;
  interval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(interval);
      interval = null;
      alert("Time's up!");
    }
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  duration = parseInt(customMinutes.value) * 60;
  timeLeft = duration;
  updateDisplay();
});

customMinutes.addEventListener("change", () => {
  duration = parseInt(customMinutes.value) * 60;
  timeLeft = duration;
  updateDisplay();
});

updateDisplay();