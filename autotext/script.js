const speedEl = document.getElementById("speed");
const sentenceEl = document.getElementById("sentence");
const outText = document.getElementById("outtext");
const btn = document.getElementById("btn");

let idx = 1;
let speed = 300 / speedEl.value;

function getText() {
  outText.innerHTML = sentenceEl.value;
}
btn.addEventListener("click", getText);

function writeText() {
  outText.innerHTML = outText.slice(0, idx);

  idx++;

  if (idx > outText.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
