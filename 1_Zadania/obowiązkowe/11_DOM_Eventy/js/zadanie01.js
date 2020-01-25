// Zadanie 1
var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

window.addEventListener('DOMContentLoaded', () => {
  menu.classList.add("menu");
  paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
})


// querySelector nie znajduje elementów w momencie wykonania skryptu, ponieważ nie ma ich jeszcze w DOMie
