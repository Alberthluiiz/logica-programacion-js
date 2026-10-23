/* Calculadora con funciones. 
Rehaz tu ejercicio 3 creando las funciones sumar, restar, multiplicar y dividir. 
Si dividen entre 0, la función debe devolver un mensaje de error en vez 
del resultado. */

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir entre 0.";
  }
  return a / b;
}
