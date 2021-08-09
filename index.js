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
const imagenDelUsuario = document.getElementById("imagen")
const resultadoTextoSuperior = document.getElementById("resultado-texto-superior")
const resultadoTextoInferior = document.getElementById("resultado-texto-inferior")

// Panel imagen
const panelImagen = document.getElementById("contenedor-panel-imagen")
const inputUrl = document.getElementById("input-url")
const inputColorFondoImagen = document.getElementById("input-color-fondo-imagen")
const resultadoColorFondoImagen = document.getElementById("resultado-color-imagen")
const inputModoMezcla = document.getElementById("input-modo-mezcla")
const botonRestablecerFiltros = document.getElementById("boton-restablecer-filtros")

//Filtros
const inputBrillo = document.getElementById("input-filtro-brillo")
const inputOpacidad = document.getElementById("input-filtro-opacidad")
const inputContraste = document.getElementById("input-filtro-contraste")
const inputDesenfoque = document.getElementById("input-filtro-desenfoque")
const inputEscalaDeGrises = document.getElementById("input-filtro-escala-de-grises")
const inputSepia = document.getElementById("input-filtro-sepia")
const inputHue = document.getElementById("input-filtro-hue")
const inputSaturado = document.getElementById("input-filtro-saturado")
const inputNegativo = document.getElementById("input-filtro-negativo")



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
const inputContornoNinguno = document.getElementById("input-contorno-ninguno")
const inputContornoClaro = document.getElementById("input-contorno-claro")
const inputContornoOscuro = document.getElementById("input-contorno-oscuro")
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
    inputContornoNinguno.classList.toggle("modo-oscuro-gris-claro")
    inputContornoOscuro.classList.toggle("modo-oscuro-gris-claro")
    inputContornoClaro.classList.toggle("modo-oscuro-gris-claro")
    inputEspaciado.classList.toggle("modo-oscuro-gris-claro")
    inputInterlineado.classList.toggle("modo-oscuro-gris-claro")

}

botonModoOscuro.onclick = activarModoOscuro

// Funcionamiento Panel de imagen

// URL de imagen

inputUrl.oninput = () => {
    imagenDelUsuario.src = inputUrl.value 
}

//Color y modo de capas

inputColorFondoImagen.oninput = () => {
    contenedorImagen.style.backgroundColor = (inputColorFondoImagen.value)
    resultadoColorFondoImagen.textContent = inputColorFondoImagen.value

}
// inputModoMezcla.oninput = () => {
//     if (inputModoMezcla.value = "Aclarar") {
//         imagenDelUsuario.style.mixBlendMode = ("lighten")
// }


// Filtos
// inputBrillo.oninput = () => {
//     imagenDelUsuario.style.filter = `brightness(${inputBrillo.value})`
// }

// inputOpacidad.oninput = () => {
//     imagenDelUsuario.style.filter = `opacity(${inputOpacidad.value})`
// }

// inputContraste.oninput = () => {
//     imagenDelUsuario.style.filter = `contrast(${inputContraste.value})`
// }

// inputDesenfoque.oninput = () => {
//     imagenDelUsuario.style.filter = `blur(${inputDesenfoque.value}px)`
// }

// inputEscalaDeGrises.oninput = () => {
//     imagenDelUsuario.style.filter = `greyscale(${inputEscalaDeGrises.value})`
// }


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

// Espaciado

inputEspaciado.oninput = () => {

    resultadoTextoSuperior.style.paddingTop = inputEspaciado.value + "px"
    resultadoTextoSuperior.style.paddingBottom = inputEspaciado.value + "px"
    resultadoTextoInferior.style.paddingTop = inputEspaciado.value + "px"
    resultadoTextoInferior.style.paddingBottom = inputEspaciado.value + "px"
}

// Interlineado

inputInterlineado.oninput = () => {
    resultadoTextoSuperior.style.lineHeight = inputInterlineado.value 
    resultadoTextoInferior.style.lineHeight = inputInterlineado.value 
}




//_______________________________________________________

// Que apararezcan texto superior e inferior / NO FUNCIONA
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

// Botones de contorno / NO FUNCIONA

// inputContornoOscuro.onclick = () => {
//     resultadoTextoSuperior.style.webkitTextStroke = "2px black"
//     resultadoTextoInferior.style.webkitTextStroke = "2px black"
// }

// inputContornoNinguno.onclick = () => {
//     resultadoTextoSuperior.style.webkitTextStroke = "2px transparent"
//     resultadoTextoInferior.style.webkitTextStroke = "2px transparent"
// }

// inputContornoClaro.onclick = () => {
//     resultadoTextoSuperior.style.webkitTextStroke = "2px white"
//     resultadoTextoInferior.style.webkitTextStroke = "2px white"
// }