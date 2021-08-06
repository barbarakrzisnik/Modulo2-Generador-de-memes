// Elementos del HTML

// Botones navegador
const panelImagen = document.getElementById("contenedor-panel-imagen")
const panelTexto = document.getElementById("contenedor-panel-texto")
const botonImagen = document.getElementById("nav-boton-imagen")
const botonTexto = document.getElementById("nav-boton-texto")





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
