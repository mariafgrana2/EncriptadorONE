const textArea = document.querySelector('#mensajeInicial');
const mensaje = document.querySelector('#mensajeFinal');
const btnCopiar = document.querySelector(".btn-copiar");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    actualizarPantalla();
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    actualizarPantalla();
    return stringDesencriptada
}


btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(mensaje.value)
        .then(() => { 
})
        .catch(err => {
            console.error("Error al copiar:", err);
        });
});


function actualizarPantalla(){
    document.querySelector("#alerta").style.display="none";
    document.querySelector("#alertaImagen").style.display="none";
    document.querySelector("#alertaTitulo").style.display="none";
    document.querySelector("#alertaDescripcion").style.display="none";
    document.querySelector("#mensajeFinal").style.display="block";
    document.querySelector("#copiar").style.display="block";
    document.querySelector("#limpiar").style.display="block";
}
