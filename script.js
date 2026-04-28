const card = document.getElementById("card");
const loveScreen = document.getElementById("loveScreen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("bgMusic");

/* 🎵 MUSIC AUTOPLAY FIX */
window.addEventListener("load", () => {
  music.volume = 0.5;

  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      console.log("Autoplay blocked — waiting for interaction");
    });
  }
});

/* ANY TAP STARTS MUSIC */
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

/* 💖 YES BUTTON */
yesBtn.addEventListener("click", () => {
  music.play(); // ensure music plays

  card.style.transform = "translate(-50%, -50%) scale(0)";
  card.style.opacity = "0";

  setTimeout(() => {
    loveScreen.classList.add("active");
  }, 400);
});

/* 😭 NO BUTTON ESCAPES */
function runAway() {
  const x = Math.random() * (window.innerWidth - 300);
  const y = Math.random() * (window.innerHeight - 300);

  card.style.left = x + "px";
  card.style.top = y + "px";
}

noBtn.addEventListener("click", runAway);
noBtn.addEventListener("mouseover", runAway);
noBtn.addEventListener("touchstart", runAway);