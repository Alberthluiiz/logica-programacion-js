// for: cuando sabes cuántas veces repetir
for (let i = 1; i <= 5; i++) {
  console.log(`Vuelta número ${i}`);
}

// while: cuando repites MIENTRAS algo sea verdad
let intentos = 0;
while (intentos < 3) {
  intentos++;
  console.log(`Intento ${intentos}`);
}

// for...of: para recorrer un arreglo
const videojuegos = ["Super Mario Bros", "Minecraft", "Call of Duty"];
for (const juego of videojuegos) {
  console.log(juego);
}
