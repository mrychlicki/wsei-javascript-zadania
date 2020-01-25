// Zadanie 5
var DOM_buttons = document.getElementsByClassName("moveBtn");
for (const key in DOM_buttons) {
    if (DOM_buttons.hasOwnProperty(key)) {
        const element = DOM_buttons[key];
        element.addEventListener("click", swapList);
    }
}

function swapList() {
    let list1 = document.getElementById("list1");
    let list2 = document.getElementById("list2");
    if (this.parentElement.parentElement.id == "list1") {
        list2.appendChild(this.parentElement);
    } else {
        list1.appendChild(this.parentElement);
    }

}