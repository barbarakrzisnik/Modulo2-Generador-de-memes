// Elementos del HTML

// Botones navegador
const panelTexto = document.getElementById("contenedor-panel-texto")
const botonImagen = document.getElementById("nav-boton-imagen")
const botonTexto = document.getElementById("nav-boton-texto")
const botonModoOscuro = document.getElementById("nav-boton-modo-oscuro")

// Panel imagen
const panelImagen = document.getElementById("contenedor-panel-imagen")
const inputUrl = document.getElementById("input-url")
const inputModoMezcla = document.getElementById("input-modo-mezcla")
const botonRestablecerFiltros = document.getElementById("boton-restablecer-filtros")

//Panel Texto
const inputTextoSuperior = document.getElementById("input-texto-superior")
const inputTextoInferior = document.getElementById("input-texto-inferior")
const inputTipoFuente = document.getElementById("input-fuente")
const inputTamanioFuente = document.getElementById("input-tamanio-fuente")
const inputAlineadoIzquierda = document.getElementById("input-alineado-izquierda")
const inputAlineadoCentro = document.getElementById("input-alineado-centro")
const inputAlineadoDerecha = document.getElementById("input-alineado-derecha")
const botonContornoNinguno = document.getElementById("input-contorno-ninguno")
const botonContornoClaro = document.getElementById("input-contorno-claro")
const botonContornoOscuro = document.getElementById("input-contorno-oscuro")
const inputEspaciado = document.getElementById("input-espaciado")
const inputInterlineado = document.getElementById("input-interlineado")

//Clases para modo oscuro
const body = document.querySelector("body")
const header = document.querySelector("header")
const contenedorColorImagen = document.querySelector(".panel-imagen-contenedor-fondo-color")
const contenedorModoMezcla = document.querySelector(".panel-imagen-contenedor-fondo-mezcla")
const contenedorColorTexto = document.querySelector(".panel-texto-color-contenedor")
const contenedorColorFondoTexto = document.querySelector(".panel-texto-color-contenedor-fondo")



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
    botonImagen.classList.toggle("modo-oscuro-gris-oscuro")
    botonTexto.classList.toggle("modo-oscuro-gris-oscuro")
    botonModoOscuro.classList.toggle("modo-oscuro-gris-oscuro")
    inputUrl.classList.toggle("modo-oscuro-gris-claro")
    contenedorColorImagen.classList.toggle("modo-oscuro-gris-claro")
    contenedorModoMezcla.classList.toggle("modo-oscuro-gris-claro")
    inputModoMezcla.classList.toggle("modo-oscuro-gris-claro")
    botonRestablecerFiltros.classList.toggle("modo-oscuro-gris-claro")
    inputTextoSuperior.classList.toggle("modo-oscuro-gris-claro")
    inputTextoInferior.classList.toggle("modo-oscuro-gris-claro")
    inputTipoFuente.classList.toggle("modo-oscuro-gris-claro")
    inputTamanioFuente.classList.toggle("modo-oscuro-gris-claro")
    inputAlineadoIzquierda.classList.toggle("modo-oscuro-gris-claro")
    inputAlineadoCentro.classList.toggle("modo-oscuro-gris-claro")
    inputAlineadoDerecha.classList.toggle("modo-oscuro-gris-claro")
    contenedorColorTexto.classList.toggle("modo-oscuro-gris-claro")
    contenedorColorFondoTexto.classList.toggle("modo-oscuro-gris-claro")
    botonContornoNinguno.classList.toggle("modo-oscuro-gris-claro")
    botonContornoOscuro.classList.toggle("modo-oscuro-gris-claro")
    botonContornoClaro.classList.toggle("modo-oscuro-gris-claro")
    inputEspaciado.classList.toggle("modo-oscuro-gris-claro")
    inputInterlineado.classList.toggle("modo-oscuro-gris-claro")

}

botonModoOscuro.onclick = activarModoOscuro

