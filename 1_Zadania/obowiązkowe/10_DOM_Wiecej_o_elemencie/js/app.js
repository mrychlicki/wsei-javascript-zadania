document.addEventListener("DOMContentLoaded", function() {
    /*
      Poniżej napisz kod rozwiązujący zadania
       */
    // Zadanie 0
    var DOM_li = document.querySelectorAll(".ex5 ul li");
    for (var i = 0; i < DOM_li.length; i++) {
      var x = i + 1;
      if (x % 2 == 0) {
        DOM_li[i].style["background-color"] = "green";
      }
      if (x == 5) {
        DOM_li[i].classList.add("big");
      }
      if (x % 3 == 0) {
        DOM_li[i].style["border-bottom"] = "2px solid red";
      }
    }
  
    // Zadanie 1
    var DOM_chrome = document.querySelector(".chrome");
    DOM_chrome.nextSibling.nextSibling.innerText = "Chrome";
    DOM_chrome.style.width = "100px";
    var DOM_edge = document.querySelector(".edge");
    DOM_edge.nextSibling.nextSibling.setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");
    DOM_edge.style.backgroundImage = "url('./assets/img/edge.png')";
    var DOM_firefox = document.querySelector(".firefox");
    DOM_firefox.nextSibling.nextSibling.setAttribute("href", "https://www.mozilla.org/pl/firefox/new/");
    DOM_firefox.nextSibling.nextSibling.innerText = "Firefox";
    DOM_firefox.style.backgroundImage = "url('./assets/img/firefox.png')";
  
    // Zadanie 2
    var DOM_spanName = document.getElementById("name");
    var DOM_spanColor = document.getElementById("fav_color");
    var DOM_spanMeal = document.getElementById("fav_meal");
    DOM_spanName.innerHTML = "Mateusz Rychlicki";
    DOM_spanColor.innerHTML = "Fioletowy";
    DOM_spanMeal.innerHTML = "Barszcz z uszkami";
  
    // Zadanie 3
    document.querySelector(".ex3 ul").classList.add("menu");
    var DOM_liEx3 = document.querySelectorAll(".ex3 ul li");
    for (let index = 0; index < DOM_liEx3.length; index++) {
      DOM_liEx3[index].classList.add("menuElement");
      if (DOM_liEx3[index].classList.contains("error")) {
        DOM_liEx3[index].classList.remove("error");
      }
    }
  
    // Zadanie 4
    var DOM_liEx4 = document.querySelectorAll(".ex4 ul li");
    var counter = 1;
    for (let index = 0; index < DOM_liEx4.length; index++) {
      DOM_liEx4[index].dataset.id = counter;
      counter++;
    }
  });