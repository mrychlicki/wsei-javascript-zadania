/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */
// Zadanie 0
// Definicja funkcji jeden
function jeden() {
    // Definicja zmiennej zmienna1 oraz przypisanie wartości 1
    var zmienna1 = 1;
  
    // Funkcja dwa, zagnieżdżona w funkcji jeden
    function dwa() {
      // Wyświetlenie w konsoli wartości zmiennej zmienna1
      console.log(zmienna1);
  
      // Definicja zmiennej zmienna2 oraz przypisanie wartości 3
      var zmienna2 = 3;
    }
  
    // Wywowałanie funkcji dwa
    dwa();
  
    // Wyświetlenie w konsoli wartości zmiennej zmienna2, zwróci ReferenceError, ponieważ zmienna ta została zdefioniowana wewnątrz funkcji dwa i nie jest dostępna poza nią
    console.log(zmienna2);
  }
  
  // Wywołanie funkcji jeden
  jeden();