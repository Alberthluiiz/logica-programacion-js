/* 2. **Calificación.** 
Dada una nota del 0 al 10, muestra: `"Sobresaliente"` 
(9 a 10), `"Aprobado"`
(7 a 8.9), `"Supletorio"` 
(5 a 6.9) o `"Reprobado"` 
(menos de 5). 
Si la nota no está entre 0 y 10, muestra `"Nota inválida"`.
*/

let nota = 6.99;

if (nota >= 9 && nota <= 10) {
  console.log("Sobresaliente");
} else if (nota >= 7 && nota < 9) {
  console.log("Aprobado");
} else if (nota >= 5 && nota < 7) {
  console.log("Supletorio");
} else if (nota < 5) {
  console.log("Reprobado");
} else {
  console.log("Nota inválida");
}
