// Zadanie 5
window.addEventListener("DOMContentLoaded", () => {
    const boxes = Array.from(document.querySelectorAll(".box"));
  
    boxes.forEach(box => {
      box.addEventListener("click", function() {
        const randomColor = () => {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
  
          return `background: rgb(${r}, ${g}, ${b})`;
        };
  
        this.style = randomColor();
      });
    });
  });