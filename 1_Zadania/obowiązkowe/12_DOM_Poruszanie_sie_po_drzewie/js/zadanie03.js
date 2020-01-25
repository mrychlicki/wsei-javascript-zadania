// Zadanie 3
const divs = Array.from(document.querySelectorAll(".listContainer"));

divs.forEach(div => {
  div.addEventListener("mouseover", function() {
    this.querySelector(".list").style = "color: green";
    this.querySelector(".list").children[0].style = "color: red";
    this.querySelector(".list").lastElementChild.style = "color: blue";
  });

  div.addEventListener("mouseleave", function() {
    this.querySelector(".list").style = "";
    this.querySelector(".list").children[0].style = "";
    this.querySelector(".list").lastElementChild.style = "";
  });
});