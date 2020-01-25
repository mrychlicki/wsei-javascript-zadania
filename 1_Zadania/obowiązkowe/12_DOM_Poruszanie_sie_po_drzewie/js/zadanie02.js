// Zadanie 2
const buttons = Array.from(document.querySelectorAll(".button"));

buttons.forEach(button => {
  button.addEventListener("click", function() {
    this.parentElement.style = `background: #${Math.floor(Math.random() * 16777215).toString(16)}`;
  });
});