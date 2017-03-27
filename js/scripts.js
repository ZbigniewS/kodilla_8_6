// plik scripts.js

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 15);
var triangle3Area = getTriangleArea(25, 15);
// var a = prompt('Podaj wartość a');
// var h = prompt('Podaj wartość h');

function getTriangleArea(a, h) {
    if ((a > 0) && (h > 0)) {
        //obie wartości dodatnie wykonanie funkcji
        triangleArea = a * h / 2;
    } else {
        // jedna z wartości nie spełnia warunku liczby dodatniej.
        console.log('Nieprawidłowe dane')
    }
    return triangleArea;
    
}
console.log(getTriangleArea(5, 6));
console.log(getTriangleArea(10, 15));
console.log(getTriangleArea(5, 15));
console.log(getTriangleArea(25, 15));
console.log('Wynik - pole trójkąta dla podanych danych wynosi ' + triangleArea);
//console.log('Wynik - pole trójkąta dla podanych danych wynosi ' + triangleArea);
