//EJERCICIO 4

let arreglo = [1, -4, 12, 0, -3, 29, -150];
let suma = 0;
function positiveSum(arreglo){
    let positivos = arreglo.filter(element => element > 0);
    console.log(positivos);
    positivos.forEach(element => suma += element);
    console.log(suma);
}
positiveSum(arreglo);