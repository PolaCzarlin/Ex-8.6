var a = prompt('Podaj wartość a: ');
var b = prompt('Podaj wartość b: ');

var value = (a*a) + (2*a*b) -(b*b)
console.log('The score is: ' + value);

if (value > 0) {
    console.log('Wynik jest dodatni');
} else if (value < 0) {
    console.log('Wynik jest ujemny');
} else {
    console.log('wynik jest równy 0');
}



