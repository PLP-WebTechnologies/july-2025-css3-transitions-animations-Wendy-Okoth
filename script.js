// =============================
// Part 2: JavaScript Functions
// =============================

// Function 1: Calculate Total
function showTotal() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let total = num1 + num2;

  document.getElementById("total-result").textContent = `Total is: ${total}`;
}

// Attach event listener to the Calculate Total button
document.getElementById("calcBtn").addEventListener("click", showTotal);

// Function 2: Greet user
function greetUser(name) {
  return `Hello, I'm ${name}! Welcome to the page.`;
}

document.getElementById("greetBtn").addEventListener("click", () => {
  let message = greetUser("Wendy");
  document.getElementById("greetOutput").textContent = message;
});

// =============================
// Part 3: Trigger CSS animations via JS
// =============================

// Animate box when clicked
const box = document.getElementById("animateBox");
box.addEventListener("click", () => {
  box.style.transform = "rotate(360deg)";
  setTimeout(() => {
    box.style.transform = "rotate(0deg)";
  }, 500);
});

// Flip card
document.getElementById("flipBtn").addEventListener("click", () => {
  const cardInner = document.getElementById("cardInner");
  cardInner.style.transform = 
    cardInner.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
});

// Modal popup
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeModal = document.getElementById("closeModal");

modalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Click outside modal closes it
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

