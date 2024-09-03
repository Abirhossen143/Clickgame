const stats = document.querySelector(".stats");
const btnStart = document.querySelector("button[name=start]");
const btnClick = document.querySelector("button[name=click]");

const winscore = 10;
let count = 0;
btnStart.addEventListener("click", () => {
  start();
});
btnClick.addEventListener("click", () => {
  count++;
  stats.textContent = count;
});
const start = () => {
  count = 0;
  stats.textContent = count;
  btnClick.removeAttribute("disabled");
  startcounting();
};
const startcounting = () => {
  setTimeout(function () {
    if (isWin()) {
      stats.textContent = "you won";
    } else {
      stats.textContent = "you lose";
    }
    btnclick.setAttribute("disabled", true);
  }, 2000);
};
const isWin = () => {
  if (count < winscore) {
    return false;
  } else {
    return true;
  }
};
