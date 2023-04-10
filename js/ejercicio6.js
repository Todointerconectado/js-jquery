// * #6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] 
// * Determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

const imprimir = document.querySelector('.busqueda');


let colors = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

function buscar() {
    let color  = prompt("Ingresa un color");
    return colors.some( element => element === color )
        ? `El color "${color.toUpperCase()}" se encuentra dentro del array.`
        : `El color "${color.toUpperCase()}" no se encuentra dentro del array.`;
}

imprimir.append(buscar());