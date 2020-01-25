// Zadanie 0
function Basket() {
    this.products = [];
    this.sum = 0;
    return this;
  }
  Basket.prototype.addProduct = function addProduct(name, price) {
    var product = {
      name: name,
      price: price
    };
    this.products.push(product);
  };
  Basket.prototype.showBasket = function showBasket() {
    var totalPrice = 0;
    for (const element in this.products) {
      console.log(this.products[element].name + ", price: " + this.products[element].price);
      totalPrice = totalPrice + this.products[element].price;
    }
    console.log("Total price to pay: " + totalPrice);
  };
  var aliceBasket = new Basket();
  aliceBasket.addProduct("pomidor", 10);
  aliceBasket.addProduct("arbuz", 40);
  aliceBasket.showBasket();
  
  var bruceBasket = new Basket();
  bruceBasket.addProduct("rice", 10);
  bruceBasket.addProduct("grzyby mun", 50);
  bruceBasket.addProduct("tofu", 20);
  bruceBasket.showBasket();
  
  // Zadanie 2
  function Calculator() {
    this.operations = [];
    return this;
  }
  Calculator.prototype.add = function(num1, num2) {
    let result = num1 + num2;
    this.operations.push("added " + num1 + " to " + num2 + " got result " + result);
  };
  Calculator.prototype.multiply = function(num1, num2) {
    let result = num1 * num2;
    this.operations.push("multiplied " + num1 + " to " + num2 + " got result " + result);
  };
  Calculator.prototype.subtract = function(num1, num2) {
    let result = num1 - num2;
    this.operations.push("subtracted " + num1 + " to " + num2 + " got result " + result);
  };
  Calculator.prototype.divide = function(num1, num2) {
    let result = num1 / num2;
    this.operations.push("divided " + num1 + " to " + num2 + " got result " + result);
  };
  Calculator.prototype.printOperations = function() {
    for (const element in this.operations) {
      console.log(this.operations[element]);
    }
  };
  Calculator.prototype.clearOperations = function() {
    this.operations = [];
  };