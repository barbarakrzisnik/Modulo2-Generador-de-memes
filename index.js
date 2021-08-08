// Elementos del HTML

// Botones navegador
const panelTexto = document.getElementById("contenedor-panel-texto")
const botonImagen = document.getElementById("nav-boton-imagen")
const botonTexto = document.getElementById("nav-boton-texto")
const botonModoOscuro = document.getElementById("nav-boton-modo-oscuro")

//Canvas
const botonDescargarImagen = document.getElementById("boton-descargar-imagen")
const contenedorMeme = document.getElementById("contenedor-canvas")
const contenedorImagen = document.getElementById("contenedor-imagen")
const resultadoTextoSuperior = document.getElementById("resultado-texto-superior")
const resultadoTextoInferior = document.getElementById("resultado-texto-inferior")

// Panel imagen
const panelImagen = document.getElementById("contenedor-panel-imagen")
const inputUrl = document.getElementById("input-url")
const inputModoMezcla = document.getElementById("input-modo-mezcla")
const botonRestablecerFiltros = document.getElementById("boton-restablecer-filtros")

//Panel Texto
//Parrafos
const inputTextoSuperior = document.getElementById("input-texto-superior")
const inputTextoInferior = document.getElementById("input-texto-inferior")

//Posibles input
const checkboxTextoSuperior = document.getElementById("input-checkbox-texto-superior")
const checkboxTextoInferior = document.getElementById("input-checkbox-texto-inferior")
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
const inputColorTexto = document.getElementById("input-color-texto")
const inputColorTextoFondo = document.getElementById("input-color-texto-fondo")

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

// Funcionamiento de URL de imagen

inputUrl.oninput = () => {
    contenedorImagen.src = inputUrl.value 
}

// Funcionamiento Panel de texto

//Entrada de texto
inputTextoSuperior.oninput = () => {
    resultadoTextoSuperior.textContent = inputTextoSuperior.value
}

inputTextoInferior.oninput = () => {
    resultadoTextoInferior.textContent = inputTextoInferior.value
}

//Tipo de fuente
inputTipoFuente.oninput = () => {
    resultadoTextoSuperior.style.fontFamily = inputTipoFuente.value 
    resultadoTextoInferior.style.fontFamily = inputTipoFuente.value 
    
}

//Tamanio de fuente
inputTamanioFuente.oninput = () => {
    resultadoTextoSuperior.style.fontSize = inputTamanioFuente.value + "px"
    resultadoTextoInferior.style.fontSize = inputTamanioFuente.value + "px"
    
}

//Alineacion de texto

inputAlineadoIzquierda.onclick = () => {
    resultadoTextoSuperior.style.textAlign = "left"
    resultadoTextoInferior.style.textAlign = "left"
}

inputAlineadoCentro.onclick = () => {
    resultadoTextoSuperior.style.textAlign = "center"
    resultadoTextoInferior.style.textAlign = "center"
}

inputAlineadoDerecha.onclick = () => {
    resultadoTextoSuperior.style.textAlign = "right"
    resultadoTextoInferior.style.textAlign = "right"
}

// Color de texto / Color fondo texto
inputColorTexto.oninput = () => {
    resultadoTextoSuperior.style.color = inputColorTexto.value
    resultadoTextoInferior.style.color = inputColorTexto.value
}

inputColorTextoFondo.oninput = () => {
    resultadoTextoSuperior.style.backgroundColor = inputColorTextoFondo.value
    resultadoTextoInferior.style.backgroundColor = inputColorTextoFondo.value
}




//_______________________________________________________

// Que apararezcan texto superior e inferior - NO FUNCIONA
// checkboxTextoSuperior.oninput = () => {
//     if (checkboxTextoSuperior.checked = true) {
//       resultadoTextoSuperior.style.display = "none"
//     }

// }

//Funcionamiento boton de descarga / NO FUNCIONA

// botonDescargarImagen.onclick = () => {
//     domtoimage.toBlob(contenedorMeme)
//     .then(function (blob) {
//     window.saveAs(blob, 'mi-meme.png');
// });
// }
 

 