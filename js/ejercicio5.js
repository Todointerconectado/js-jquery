/*   Ejercicio #5. 
  *  Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].

  *  a. Obtener aquellos nombres con al menos 6 letras.
  *  b. Obtener los nombres que comienzan con "M".
  *  c. Ordenar alfabéticamente y mostrar por consola.
  *  d. Generar un array que contenga solo las iniciales
  *  e. Ejemplo: ["F", "L", "E", "M",... ].
  *  f. Generar un array que contenga todos los nombres en mayúscula.
  *  g. Queremos saber si alguno de estos nombres comienza con "J”
*/

const array = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];

function names_less_than_6 () {
    let resultant = array.filter(p => p.length > 6);
    return resultant;
}

console.table(names_less_than_6());