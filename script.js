const form = document.querySelector("#wishForm");
const river = document.querySelector("#river");
const emptyState = document.querySelector("#emptyState");
const totalLabel = document.querySelector("#wishTotal");
const wishText = document.querySelector("#wishText");
const charCount = document.querySelector("#charCount");
const toast = document.querySelector("#toast");

let selectedStyle = "lotus";
let total = 0;
const styles = {
  lotus: { emoji: "🪷", className: "lotus" },
  banana: { emoji: "🌼", className: "banana" },
  gold: { emoji: "✨", className: "gold" }
};

document.querySelectorAll(".krathong-option").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".krathong-option").forEach((item) => {
      item.classList.remove("selected");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("selected");
    button.setAttribute("aria-pressed", "true");
    selectedStyle = button.dataset.style;
  });
});

wishText.addEventListener("input", () => {
  charCount.textContent = `${wishText.value.length}/120`;
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#wishName").value.trim();
  const wish = wishText.value.trim();

  if (!name || !wish) {
    showToast("กรุณากรอกชื่อและคำอธิษฐานให้ครบ");
    return;
  }

  const item = document.createElement("div");
  item.className = "floating-krathong";
  const left = 8 + Math.random() * 75;
  const top = 12 + Math.random() * 68;
  item.style.left = `${left}%`;
  item.style.top = `${top}%`;
  item.style.animationDelay = `${Math.random() * -5}s`;

  const emoji = document.createElement("span");
  emoji.className = "krathong-emoji";
  emoji.textContent = styles[selectedStyle].emoji;

  const candle = document.createElement("div");
  candle.className = "krathong-candle";
  candle.textContent = "•";

  const nameLabel = document.createElement("div");
  nameLabel.className = "krathong-name";
  nameLabel.textContent = name;

  const wishLabel = document.createElement("div");
  wishLabel.className = "krathong-wish";
  wishLabel.textContent = `“${wish}”`;

  item.append(emoji, candle, nameLabel, wishLabel);
  river.appendChild(item);
  emptyState.hidden = true;

  total += 1;
  totalLabel.textContent = `${total} กระทง`;
  form.reset();
  charCount.textContent = "0/120";
  showToast("ลอยกระทงเรียบร้อยแล้ว ขอให้คำอธิษฐานเป็นจริง ✨");
});

