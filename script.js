const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");
const loveScreen = document.getElementById("loveScreen");

yesBtn.addEventListener("click", () => {
  card.style.transform = "translate(-50%, -50%) scale(0)";
  card.style.opacity = "0";

  setTimeout(() => {
    loveScreen.classList.add("active");
  }, 400);
});

noBtn.addEventListener("click", () => {
  moveCard();
});

noBtn.addEventListener("mouseover", () => {
  moveCard();
});

function moveCard() {
  const x = Math.random() * (window.innerWidth - 300);
  const y = Math.random() * (window.innerHeight - 300);

  card.style.left = x + "px";
  card.style.top = y + "px";
}