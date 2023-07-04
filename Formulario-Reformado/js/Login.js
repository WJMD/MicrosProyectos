// Obtener el modal de inicio de sesión
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal de inicio de sesión
var btn = document.getElementById("myBtn");

// Obtener el elemento de cierre del modal de inicio de sesión
var span = document.getElementsByClassName("close")[0];

// Obtener el modal de registro
var modalRegistrar = document.getElementById("Modal-Registrar");

// Función para cerrar ambos modales
function closeAllModals() {
  modal.style.display = "none";
  modalRegistrar.style.display = "none";
}

// Función para abrir el modal de registro y cerrar el modal de inicio de sesión
function openModal() {
  modal.style.display = "none";
  modalRegistrar.style.display = "block";
}

// Función para cerrar el modal de registro y abrir el modal de inicio de sesión
function closeModal() {
  modalRegistrar.style.display = "none";
  modal.style.display = "block";
}

// Abrir el modal de inicio de sesión al hacer clic en el botón
btn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar los modales al presionar la tecla 'Esc'
document.onkeydown = function(event) {
  event = event || window.event;
  if (event.keyCode === 27) {
    closeAllModals();
  }
};

// Cerrar el modal de inicio de sesión al hacer clic en el elemento de cierre
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal de registro al hacer clic fuera del contenido del modal
window.onclick = function(event) {
  if (event.target === modalRegistrar) {
    modalRegistrar.style.display = "none";
  }
}
