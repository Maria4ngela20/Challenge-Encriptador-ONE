var btnencriptar = document.querySelector(".btn_encriptar");
var btndesencriptar = document.querySelector(".btn_desencriptar");
var imagen = document.querySelector(".container-img");
var contenedor = document.querySelector(".container-parrafo");
var resultado = document.querySelector(".txt-resultado");

btnencriptar.onclick = encriptar;
btndesencriptar.onclick = desencriptar;

function encriptar() {
    ocultarA();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    ocultarA();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".txt_encriptar")
    return cajatexto.value;
}

function ocultarA() {
    imagen.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i+1
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i+4
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i+3
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i+3
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i+3
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn_copiar");
    btnCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".txt-resultado").textContent;
        navigator.clipboard.writeText(contenido);
        // console.log("hola");
    })