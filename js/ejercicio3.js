//EJERCICIO 3

var arreglo = [1, 2, 3, 4, 5, 6];
var suma = 0;
var i = 0;

while(i < arreglo.length) {
    console.log(Math.pow(arreglo[i],2));
    i++;
}

// OTRA FORMA: 

var arreglo = [1, 2, 3, 4, 5, 6];
var suma = 0;
var i = 0;

while(i < arreglo.length) {
    console.log(arreglo[i] * arreglo[i]);
    i++;
}