// Zadanie 2
var DOM_table = document.querySelector("#orders");
var DOM_button = document.getElementById("addBtn");
DOM_button.addEventListener("click", addNewItem);

function addNewItem() {
    let orderNr = document.getElementById("orderId").value;
    let item = document.getElementById("item").value;
    let quantity = document.getElementById("quantity").value;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = orderNr;
    let td2 = document.createElement("td");
    td2.innerHTML = item;
    let td3 = document.createElement("td");
    td3.innerHTML = quantity;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    DOM_table.appendChild(tr);
}