var miVariable = 5;

var campoTexto = document.getElementById("miTxt");

function miFuncion() {
    var texto = campoTexto.value;
    alert(texto);
    console.log(texto);
}

function borrar(){
    campoTexto.value = "";
}