// Seleccionar elementos del DOM
const encabezado = document.getElementById("miEncabezado");
const lista = document.getElementById("listaTareas");
const botonAgregar = document.getElementById("btnAgregar");
const botonColor = document.getElementById("cambiarColor");

// Cambiar el contenido del encabezado
encabezado.querySelector("h1").textContent = "¡Hola, DOM en acción!";

// Agregar una nueva tarea a la lista
botonAgregar.addEventListener("click", () => {
  const nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = "Nueva tarea agregada con JavaScript";
  lista.appendChild(nuevaTarea);
});

// Cambiar color de fondo del body
botonColor.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f0f8ff";
});

// Eliminar la última tarea si hay más de 3
if (lista.children.length > 2) {
  lista.removeChild(lista.lastElementChild);
}