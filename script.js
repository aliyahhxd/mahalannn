const card = document.getElementById("card");
const loveScreen = document.getElementById("loveScreen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  card.style.transform = "translate(-50%, -50%) scale(0)";
  card.style.opacity = "0";

  setTimeout(() => {
    loveScreen.classList.add("active");
  }, 400);
});

/* NO BUTTON ESCAPES */
function runAway() {
  const x = Math.random() * (window.innerWidth - 300);
  const y = Math.random() * (window.innerHeight - 300);

  card.style.left = x + "px";
  card.style.top = y + "px";
}

/* works on phone + PC */
noBtn.addEventListener("click", runAway);
noBtn.addEventListener("mouseover", runAway);
noBtn.addEventListener("touchstart", runAway);