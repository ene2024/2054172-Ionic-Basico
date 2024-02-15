function login(){
    var av=document.getElementById("aviso")
    av.style.display="block";
    registro();
}

function registro(){
    var av=document.getElementById("aviso")
    var txt = document.getElementById("texto").value;
    av.textContent += " " + txt;
}