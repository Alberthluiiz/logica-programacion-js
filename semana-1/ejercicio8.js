// Enunciado: Calcula tu edad en meses y en días aproximados.” Pista: piensa cuántos meses tiene un año y cuántos días, y usa lo que aprendiste en el ejercicio 3

console.log("Ejercicio 8");

const edad = 25;
const edadMeses = edad * 12;
const edadDias = Math.round(edad * 365.25);

console.log(`Tengo aproximadamente ${edadMeses} meses de edad`);
console.log(`Tengo aproximadamente ${edadDias} días de edad`);
