// Enunciado: Declara una variable utilizando const, intenta cambiar su valor y explica con tus palabras el error que muestra JavaScript.


console.log("Ejercicio 7");

const nombre = "Luis Guillen";

console.log(`El nombre es: ${nombre}`);

// Intentamos cambiar el valor de la variable constante
nombre = "María García"; // Esto causa un TypeError (ver explicación abajo)

console.log(`El nuevo nombre es: ${nombre}`);

// Explicación: Se produce un TypeError en la línea donde intentamos asignar
// "María García" a nombre, porque una variable declarada con const no puede
// cambiar de valor. JavaScript ejecuta las líneas anteriores y se detiene al
// encontrar el error, por eso el último console.log no se muestra. Para poder
// cambiar el nombre habría que declarar la variable usando let.