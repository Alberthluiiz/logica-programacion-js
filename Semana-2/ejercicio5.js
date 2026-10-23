/* Suma acumulada. 
Usa un bucle para sumar todos los números del 1 al 100 y muestra el total.
(El resultado debe ser 5050.)
 */

let total = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log(`La suma acumulada del 1 al 100 es: ${total}`);
