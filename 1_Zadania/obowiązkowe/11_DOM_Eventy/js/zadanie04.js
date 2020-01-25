// Zadanie 4
window.addEventListener("DOMContentLoaded", () => {
    const buttons = Array.from(document.querySelectorAll("button"));
    const counter = document.querySelector(".counter");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = parseInt(counter.innerText);
        counter.innerText = 1 + value;
      });
    });
  });