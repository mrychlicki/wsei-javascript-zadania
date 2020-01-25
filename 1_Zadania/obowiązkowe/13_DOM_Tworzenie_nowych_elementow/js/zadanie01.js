// Zadanie 1
var DOM_button = document.querySelector(".button");
var elementCounter = 0;
DOM_button.addEventListener("click", newListElement);

function newListElement() {
    var DOM_list = document.querySelector(".menu");
    var DOM_element = document.createElement("li");
    DOM_element.innerHTML = "Element " + (elementCounter + 1) + " - w chwili dodania było " + elementCounter + " elementów";
    DOM_list.appendChild(DOM_element);
    elementCounter++;
}