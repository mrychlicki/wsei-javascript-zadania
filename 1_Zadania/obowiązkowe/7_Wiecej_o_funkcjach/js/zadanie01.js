/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */
// Zadanie 1
// Definicja funkcji sortArray
function sortArray() {
    // Definicja zmiennej points i przypisanie do niej tablicy wartości
    var points = [41, 3, 6, 1, 114, 54, 64];
  
    // Wywołanie metody sort, sortującej elementy w tablicy z opcjonalnym argumentem w postaci funkcji
    points.sort(function(a, b) {
      // Metoda zwraca ujemną, zerową lub dodatnią wartość odejmowania sąsiednich wartości 
      return a - b;
    });
  
    // Zwrócenie posortowanej tablicy points
    return points;
  }
  
  // Wywołanie funkcji sortArray
  sortArray();