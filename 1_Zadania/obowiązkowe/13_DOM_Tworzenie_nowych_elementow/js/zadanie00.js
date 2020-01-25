// Zadanie 0
var buttons = document.getElementsByClassName("deleteBtn");
for (const key in buttons) {
    if (buttons.hasOwnProperty(key)) {
        const element = buttons[key];
        element.addEventListener("click", deleteNode);
    }
}

function deleteNode() {
    let temp = this.parentElement.parentElement;
    temp.parentElement.removeChild(temp);
}