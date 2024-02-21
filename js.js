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

var articuloInput=document.getElementById("tipo");
var montoInput=document.getElementById("monto");


var articulo = '';
var monto = 0;
var total = 0;

var seccionTicket=document.getElementById('ticket');

function agregar(){
    articulo = articuloInput.value;
    monto = parseInt(montoInput.value);

    let elementoTicket = document.createElement('p');

    elementoTicket.innerHTML = articulo + ' ........ $' + monto;

    seccionTicket.appendChild(elementoTicket);

    eliminar();

    var botonTotal = document.getElementById("boton-total");
    botonTotal.style.display="block";
    var ticketMostrar = document.getElementById("ticket");
    ticketMostrar.style.display="flex";
    total += monto;
}

function eliminar(){
    articuloInput.value=" ";
    montoInput.value=" ";
}

function fcnTotal(){
    let elementoTicket = document.createElement('p');
    let barra = document.createElement('p');
    barra.innerHTML = '________________';
    seccionTicket.appendChild(barra);
    elementoTicket.innerHTML = '=>   Total  ' + total + '$';
    seccionTicket.appendChild(barra);
    seccionTicket.appendChild(elementoTicket);
}