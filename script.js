const card = document.getElementById("card");
const loveScreen = document.getElementById("loveScreen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");
const heartsContainer = document.getElementById("hearts-container");

/* START MUSIC (MOBILE SAFE) */
document.body.addEventListener("click", () => {
  music.volume = 0.5;
  music.play();
}, { once: true });

/* HEART BURST */
function createHearts(count = 12) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = (window.innerHeight - 50) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

/* LOOP HEARTS (SOFT BACKGROUND EFFECT) */
setInterval(() => {
  createHearts(5);
}, 1800);

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  music.play();
  createHearts(25); // BIG EXPLOSION

  card.style.transform = "scale(0)";
  card.style.opacity = "0";

  setTimeout(() => {
    loveScreen.classList.add("active");
  }, 400);
});

/* NO BUTTON (SMART ESCAPE INSIDE SCREEN) */
function runAway() {
  const padding = 20;
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;

  const maxX = window.innerWidth - cardWidth - padding;
  const maxY = window.innerHeight - cardHeight - padding;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  card.style.position = "absolute";
  card.style.left = x + "px";
  card.style.top = y + "px";
}

noBtn.addEventListener("click", runAway);
noBtn.addEventListener("mouseover", runAway);
noBtn.addEventListener("touchstart", runAway);