

//EJERCICIO 2 (a)
function ejercicio_2a () {
    let numeros = [1, 2, 3, 4, 5, 6];
    let i = 0;

    while(i < numeros.length){
        console.log(numeros[i]);
        i++
    }
}


//EJERCICIO 2 (b)
let numeros = [1, 2, 3, 4, 5, 6];
for(let i = 0; i < numeros.length; ++i){
    console.log(numeros[i]);
}


//EJERCICIO 2 (c)
var arreglo = [1, 2, 3, 4, 5, 6];
var suma = 1;

for(var i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
}


//EJERCICIO 2 (d)
var arreglo = [1, 2, 3, 4, 5, 6];
var suma = 0;
var i = 0;

while(i < arreglo.length) {
    console.log(arreglo[i] + 1);
    i++;
}


//EJERCICIO 2 (e)
var arreglo = [1, 2, 3, 4, 5, 6];
var arreglo2 = [];
var suma = 0;
var i = 0;

while(i < arreglo.length) {
    arreglo2[i] = (arreglo[i] + 1);
    i++;
}
console.log(arreglo2);


//EJERCICIO 2 (f)
var arreglo = [1, 2, 3, 4, 5, 6];
var sumaArreglo = 0;
var i = 0;

while(i < arreglo.length) {
    sumaArreglo += arreglo[i];
    i++
}

console.log(sumaArreglo/arreglo.length);