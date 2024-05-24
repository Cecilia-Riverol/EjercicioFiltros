// Tenemos un array  de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]


//Vamos a sacar los productos

// Agarro con ID
const lista = document.getElementById("lista-de-productos");
const input = document.querySelector('.input');
const btnFiltrar = document.getElementById('Filtrar');


// Mostrar mi producto
productos.forEach(producto => {
  const card = document.createElement("div");
  card.classList.add("producto");

  const titulo = document.createElement("p");
  titulo.textContent = producto.nombre;
  titulo.classList.add("titulo");

  const imagen = document.createElement("img");
  imagen.src = producto.img;  // Corregido aquí
  imagen.classList.add("img"); //Cambios calse para poder sacar la imagen

  card.appendChild(titulo); //Trato de acomodar todo bien y bonito
  card.appendChild(imagen);  // Corregido aquí
  lista.appendChild(card);  // Añadir el card al contenedor
});