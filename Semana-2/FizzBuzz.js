/* Reto final: FizzBuzz
Muestra los números del 1 al 30, pero:

si el número es múltiplo de 3, muestra "Fizz";
si es múltiplo de 5, muestra "Buzz";
si es múltiplo de 3 y de 5, muestra "FizzBuzz".
Es un ejercicio clásico de entrevistas: une condicionales, bucles y %. */

for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
