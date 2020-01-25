// Zadanie 8
window.addEventListener("DOMContentLoaded", event => {
    const windowWidth = document.getElementById("windowWidth");
    const windowHeight = document.getElementById("windowHeight");
  
    windowWidth.innerText = window.innerWidth;
    windowHeight.innerText = window.innerHeight;
  
    window.addEventListener("resize", () => {
      windowWidth.innerText = window.innerWidth;
      windowHeight.innerText = window.innerHeight;
    });
  });