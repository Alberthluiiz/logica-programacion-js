/* Tu ejercicio 1. 1. En 
index.html agrega: un 
[1]… como tus
<h1 id="tienda">, un 
<p class="lema"> y tres
<li class="prenda"> dentro de un 
<ul> (poncho, anaco, alpargatas). 
2. En el h1, el párrafo y todas las prendas, y muéstralos con 
app.js selecciona console.log. 
3. Muestra en consola cuántas prendas hay y el texto de la segunda.
Pistas: el texto de un elemento está en 
elemento.textContent. La segunda posición de una lista
es [1].
Está bien si: en consola ves los elementos, el número 3 y la palabra “anaco”.
 */
const tienda = document.querySelector("#tienda");
const lema = document.querySelector(".lema");
const catalogo = document.querySelectorAll(".prenda");

console.log(tienda);
console.log(lema);
console.log(catalogo);

console.log("El arreglo tiene [" + catalogo.length + "] elementos");

console.log(catalogo[0]);
console.log(catalogo[1]);
console.log(catalogo[2]);
