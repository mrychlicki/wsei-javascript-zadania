// Zadanie 3
Hello();
function Hello() {
  console.log("Cześć");
}
Hello();
// funkcja może zostać wywołana przed definicją

x();
var x = function Hi() {
  console.log("Witaj");
};
x();
// Wyrażenie funkcyjne nie może być wywołane przed definicją
