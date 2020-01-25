// Zadanie 4
var DOM_button = document.getElementById("remove");
DOM_button.addEventListener("click", removeChilds);

function removeChilds() {
    var foo = document.querySelector(".list");
    foo.innerHTML = "";
}