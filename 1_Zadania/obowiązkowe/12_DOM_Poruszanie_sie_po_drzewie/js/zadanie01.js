// Zadanie 1
const buttons = Array.from(document.querySelectorAll(".button"));

buttons.forEach(button => {
  button.addEventListener("click", function() {
    if (!this.nextElementSibling) {
      return;
    }
    this.nextElementSibling.hidden = !this.nextElementSibling.hidden;
  });
});