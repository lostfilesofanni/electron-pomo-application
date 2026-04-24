const startBtn = document.getElementById("startBtn");
const illustration = document.getElementById("illustration");
const timerDisplay = document.getElementById("timer");

let timeLeft = 25 * 60;
let timerInterval = null;

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timerDisplay.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  if (timerInterval) return;

  illustration.src = "resources/pomoillu2.png";

  startBtn.textContent = "Running...";
  startBtn.disabled = true;

  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "Done ✨";
    }
  }, 1000);
});

updateDisplay();