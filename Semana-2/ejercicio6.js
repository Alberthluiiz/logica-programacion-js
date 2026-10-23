/* Recorre tu lista. 
Toma tu arreglo de videojuegos y muéstralos numerados 
(1. Super Mario Bros, 2. ...) usando un bucle, 
sin escribir videojuegos[0], [1], [2] a mano. */

const videojuegos = ["Super Mario Bros", "Minecraft", "Call of Duty"];

for (let i = 0; i < videojuegos.length; i++) {
  console.log(`${i + 1}. ${videojuegos[i]}`);
}
