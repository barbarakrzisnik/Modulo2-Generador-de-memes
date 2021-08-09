///////////////// Elementos del HTML /////////////////

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

///////////////// Panel imagen /////////////////

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



///////////////// Panel Texto /////////////////

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
const resultadoColorTexto = document.getElementById("resultado-color-texto")
const inputColorTextoFondo = document.getElementById("input-color-texto-fondo")
const resultadoColorFondoTexto = document.getElementById("resultado-color-fondo-texto")


///////////////// Clases para modo oscuro /////////////////
const body = document.querySelector("body")
const header = document.querySelector("header")
const contenedorColorImagen = document.querySelector(".panel-imagen-contenedor-fondo-color")
const contenedorModoMezcla = document.querySelector(".panel-imagen-contenedor-fondo-mezcla")
const contenedorColorTexto = document.querySelector(".panel-texto-color-contenedor")
const contenedorColorFondoTexto = document.querySelector(".panel-texto-color-contenedor-fondo")


///////////////// FUNCIONAMIENTO 


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
botonModoOscuro.onclick = () => {
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

//Funcionamiento boton de descarga / NO FUNCIONA

botonDescargarImagen.onclick = () => {
    domtoimage.toBlob(contenedorMeme)
    .then(function (blob) {
    window.saveAs(blob, 'mi-meme.png');
});
}

///////////////// Funcionamiento Panel de imagen /////////////////

// URL de imagen

inputUrl.oninput = () => {
    imagenDelUsuario.src = inputUrl.value 
}

//Color de fondo

inputColorFondoImagen.oninput = () => {
    contenedorImagen.style.backgroundColor = (inputColorFondoImagen.value)
    resultadoColorFondoImagen.textContent = inputColorFondoImagen.value
}

//Modo mezcla

inputModoMezcla.onchange = () => {
    if (inputModoMezcla === "Aclarar") {
        imagenDelUsuario.style.backgroundBlendMode = "lighten"
    }
    else {
        imagenDelUsuario.style.backgroundBlendMode = "none"
    }
}

//Filtros

const agregarFiltros = () => {
    const brightness = inputBrillo.value
    const opacity = inputOpacidad.value
    const blur = inputDesenfoque.value
    const contrast = inputContraste.value
    const grayscale = inputEscalaDeGrises.value
    const hue = inputHue.value
    const sepia = inputSepia.value
    const saturate = inputSaturado.value
    const invert = inputNegativo.value
    imagenDelUsuario.style.filter = `brightness(${brightness}) opacity(${opacity}) blur(${blur}px) contrast(${contrast}%) grayscale(${grayscale}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturate}%) invert(${invert})`
}

inputBrillo.onchange = agregarFiltros
inputOpacidad.onchange = agregarFiltros
inputContraste.onchange = agregarFiltros
inputDesenfoque.onchange = agregarFiltros
inputEscalaDeGrises.onchange = agregarFiltros
inputHue.onchange = agregarFiltros
inputSepia.onchange = agregarFiltros
inputSaturado.onchange = agregarFiltros
inputNegativo.onchange = agregarFiltros

//Restablecer filtros

botonRestablecerFiltros.onclick = () => {
    inputBrillo.value = 1
    inputOpacidad.value = 1
    inputContraste.value = 0
    inputDesenfoque.value = 0
    inputEscalaDeGrises.value = 0
    inputSepia.value = 0
    inputHue.value = 0
    inputSaturado.value = 100
    inputNegativo.value = 0
    imagenDelUsuario.style.filter = "none"
}

///////////////// Funcionamiento Panel de texto /////////////////

//Entrada de texto
inputTextoSuperior.oninput = () => {
    resultadoTextoSuperior.textContent = inputTextoSuperior.value
}

inputTextoInferior.oninput = () => {
    resultadoTextoInferior.textContent = inputTextoInferior.value
}

// Checked

checkboxTextoSuperior.onchange = () => {
    if (checkboxTextoSuperior.checked) {
        resultadoTextoSuperior.style.display = "none"
    }
    else {
        resultadoTextoSuperior.style.display = "block"
    }
}

checkboxTextoInferior.onchange = () => {
    if (checkboxTextoInferior.checked) {
        resultadoTextoInferior.style.display = "none"
    }
    else {
        resultadoTextoInferior.style.display = "block"
    }
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
    resultadoColorTexto.textContent = inputColorTexto.value
}

inputColorTextoFondo.oninput = () => {
    resultadoTextoSuperior.style.backgroundColor = inputColorTextoFondo.value
    resultadoTextoInferior.style.backgroundColor = inputColorTextoFondo.value
    resultadoColorFondoTexto.textContent = inputColorTextoFondo.value
}

// Contorno

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


///////////////// RESPONSIVE






