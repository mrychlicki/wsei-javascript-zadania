// Zadanie 3
var DOM_button = document.getElementById("remove");
DOM_button.addEventListener("click", removeItem);

function removeItem() {
    DOM_button.parentNode.removeChild(DOM_button);
}