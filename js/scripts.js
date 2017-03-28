// plik scripts.js

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 15);
var triangle3Area = getTriangleArea(25, 15);
var a = prompt('Podaj wartość a');
var h = prompt('Podaj wartość h');
var triangleArea = getTriangleArea (a, h);

function getTriangleArea(a, h) {
    if ((a > 0) && (h > 0)) {
        //obie wartości dodatnie wykonanie funkcji
        return a * h / 2;
    } else {
        // jedna z wartości nie spełnia warunku liczby dodatniej.
        return 'Nieprawidłowe dane'
    }  
}
alert ('Wynik - pole trójkąta dla podstawy równej: ' + a  + ' i wysokości równej: '+ h + ' wynosi ' + triangleArea);
console.log('Wynik - pole trójkąta dla podstawy równej: ' + a  + ' i wysokości równej: '+ h + ' wynosi ' + triangleArea);
