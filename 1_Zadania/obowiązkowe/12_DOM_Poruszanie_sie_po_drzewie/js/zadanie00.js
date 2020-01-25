// Zadanie 0
const task1 = document.querySelector(".first :nth-child(1)").children[2];

console.log(task1);

const task2 = document.getElementById("second").parentElement.children[3];

console.log(task2);

const helper_task3 = document.querySelector("[data-ex=third]").parentElement.parentElement.lastElementChild.children[0];

const task3 = helper_task3.children[Math.floor(helper_task3.childElementCount / 2)];

console.log(task3);

const task4 = document.querySelector("div.forth").parentElement.querySelectorAll("article:first-of-type p")[1];

console.log(task4);