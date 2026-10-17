console.log("Calculadora Basica");

/* Usamos const por que el valor no va a cambiar
usamos let cuando el valor va a modificar o cambiar */
const n1 = 10;
const n2 = 3;

const suma = n1 + n2;
const resta = n1 - n2;
const mul = n1 * n2;
const div = n1 / n2;


console.log(`Suma - ${n1} + ${n2} = ${suma}`);

console.log(`Resta - ${n1} - ${n2} = ${resta}`);

console.log(`mul - ${n1} * ${n2} = ${mul}`);

/* Usamos el toFixed para mostrar solo dos decimales y no mos
ej: sin toFixed 3.33333333333 con toFixed 3.33 */

console.log(`div - ${n1} / ${n2} = ${div.toFixed(2)}`);

console.log(`Resultados de las operaciones`);
