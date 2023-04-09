/*   Ejercicio #5. 
  *  Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].

  *  a. Obtener aquellos nombres con al menos 6 letras.
  *  b. Obtener los nombres que comienzan con "M".
  *  c. Ordenar alfabéticamente y mostrar por consola.
  *  d. Generar un array que contenga solo las iniciales
  *     Ejemplo: ["F", "L", "E", "M",... ].
  *  f. Generar un array que contenga todos los nombres en mayúscula.
  *  g. Queremos saber si alguno de estos nombres comienza con "J”
*/

const array = [
  "Florencia", "Lucas" , "Ezequiel",
  "Matias"   , "Bruno" , "Gustavo" ,
  "Martin"   , "hector", "maria"   ,
];

// * 5.a. Obtener aquellos nombres con al menos 6 letras.
function names_less_than_6 () {
  // element toma el valor de cada string del array midiendo su longitud y evaluando cuales son mayores o igual a 6.
  let resultant = array.filter(element => element.length >= 6); // Arrow Function 
  return resultant;
}
console.log("5.a. Obtener aquellos nombres con al menos 6 letras.:");
console.table(names_less_than_6());


// * 5.b. Obtener los nombres que comienzan con "M".
function names_with_M () {
  // element toma el valor de cada string del array y evaluamos el primer indice, si es igual a 'M' mayúscula como minúscula lo guarda en el nuevo array resultant.
  let resultant = array.filter( element => element[0].toLowerCase() == 'm');
  return resultant;
}
console.log('5.b. Obtener los nombres que comienzan con "M":');
console.table(names_with_M());


// * 5.c. Ordenar alfabéticamente y mostrar por consola.
function ordenar_alfabeticamente () {
  let resultant = array.sort( (a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) { return 0; }
    if (a > b ) { return 1; }
    return -1;
  });
  return resultant;
}
console.log("5.c. Ordenar alfabéticamente y mostrar por consola:");
console.table(ordenar_alfabeticamente());


// * 5.d. Generate an array containing only the initials
function initials_array() {

  // * We generate a new array: resultant from array.map()
  // * In map() we apply an arrow function with the parameter: first_letter
  // * We return the first letter of each element of the array

  let resultant = array.map(first_letter => first_letter[0]);

  return resultant;
}
console.log("5.d. Generate an array containing only the initials of the former array:");
console.table(initials_array());


// * 5.f. Generar un array que contenga todos los nombres en mayúscula.
function names_upperCase () {
  let resultant = array.map( element => element.toLocaleUpperCase());
  return resultant;
}
console.log("5.f. Generar un array que contenga todos los nombres en mayúscula:");
console.table(names_upperCase());


// * 5.g. Queremos saber si alguno de estos nombres comienza con "J”
function names_first_letter_J () {
  let resultant = array.find( element => element[0] == 'J' );

  return resultant 
    ? 'Existe un nombre con su inicial con "J"'
    : 'No se encuentran nombres con su inicial "J"';
}
console.log('5.g. Queremos saber si alguno de estos nombres comienza con "J":');
console.log('\t %c Resultado:', 'background: blue; color: white', names_first_letter_J());