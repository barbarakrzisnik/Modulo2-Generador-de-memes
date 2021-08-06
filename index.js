// Elementos del HTML

// Botones navegador
const panelImagen = document.getElementById("contenedor-panel-imagen")
const panelTexto = document.getElementById("contenedor-panel-texto")
const botonImagen = document.getElementById("nav-boton-imagen")
const botonTexto = document.getElementById("nav-boton-texto")
const botonModoOscuro = document.getElementById("nav-boton-modo-oscuro")


//Elementos para modo oscuro
const body = document.querySelector("body")
const header = document.querySelector("header")


// Funcionamiento boton Imagen
const mostrarPanelImagen = () => {
    panelImagen.classList.remove("ocultar-panel")
    panelTexto.classList.add("ocultar-panel")
  }
  
botonImagen.onclick = mostrarPanelImagen


// // Funcionamiento boton Texto
const mostrarPanelTexto = () => {
    panelImagen.classList.add("ocultar-panel")
    panelTexto.classList.remove("ocultar-panel")
  }
  
botonTexto.onclick = mostrarPanelTexto

//Funcionamiento boton Modo Oscuro
const activarModoOscuro = () => {
    body.classList.toggle("modo-oscuro-gris-claro")
    header.classList.toggle("modo-oscuro-gris-oscuro")
    panelTexto.classList.toggle("modo-oscuro-gris-medio")
    panelImagen.classList.toggle("modo-oscuro-gris-medio")
}

botonModoOscuro.onclick = activarModoOscuro