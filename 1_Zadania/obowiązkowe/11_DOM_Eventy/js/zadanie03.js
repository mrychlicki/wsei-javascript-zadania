// Zadanie 3
window.addEventListener("DOMContentLoaded", () => {
    const buttons = [document.getElementById("button1"), document.getElementById("button2"), document.getElementById("button3")];
    const counters = Array.from(document.querySelectorAll(".counter"));
  
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const value = parseInt(counters[index].innerText);
        counters[index].innerText = 1 + value;
      });
    });
  });