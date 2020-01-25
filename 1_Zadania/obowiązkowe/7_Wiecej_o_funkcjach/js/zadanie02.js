function callOtherFunction(nameOfFunction) {
  console.log("Cześć jestem funkcją o nazwie 'callOtherFunction' i wywołuję funkcję, którą ktoś mi wrzucił jako parametr");

  var randomNumber1 = Math.random() * 20;
  var randomNumber2 = Math.random() * 10;
  nameOfFunction(randomNumber1, randomNumber2);
}
// Zadanie 2
callOtherFunction(function(a, b) {
  console.log("Pierwsza liczba:", a);
  console.log("Druga liczba", b);
  console.log("Wynik", a + b);
  console.log("Wynik odejmowania: ", a - b);
  console.log("Wynik dzielenia: ", a / b);
  console.log("Wynik mnożenia: ", a * b);
  console.log("Liczba pierwsza do potęgi 2", a ** 2);
  console.log("Liczba druga do potęgi 2", b ** 2);
});