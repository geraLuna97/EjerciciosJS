'use strict'

/*
    1 Pida 6 numeros y los meta en un array
    2. Moestrar el array entrero (todos sus elementos) en el cuerpo de la pagina y en la consola
    3.Ordenarlo y mostrarlo
    4.Invertir su orden y mostrarlo
    5.Mostrar cuentos elementos tiene el array
    6.busqueda de un valor introducido por el usuarip, que nos diga si lo encuentra y su indice
    (se valora el uso de funciones)
*/ 
//var numeros = new Array (6);
//Pedir 6 numeros

function mostrarArray(elementos,textoCustom =""){
    // Mostrar array en HTML
    document.write("<h1> Contendio el array "+ textoCustom +"</h1>");
    document.write("<ul>")
    elementos.forEach((elemento,index) => {
        document.write("<li>" + elemento + "</li>");    
    });
    document.write("</ul>");
}
var numeros = [];

for(var i =0; i<=5; i++){
    //numeros[i] = parseInt(prompt("Ingresa un numero "+i,0)); funciona con la primera manera de ARRAY(6)
    numeros.push(parseInt(prompt("Ingresa un numero "+i,0)));
}
//mostrr en el cuerpo de la pagina 

mostrarArray(numeros);

//Imprimir en consola
console.log(numeros);

//Ordenar 
numeros.sort(function(a, b){return a-b});
console.log(numeros);
mostrarArray(numeros,"ordenados");

// Invertir y mostrar
numeros.reverse();
mostrarArray(numeros,'revertido');

// cuantos elementos tiene un array
document.write("<h1>El array tiene</h1>" + numeros.length+ " elementos");

// Buscar elementos en un array

var busqueda = parseInt(prompt("Ingres el elemento a buscar: ",0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h1>Encontrado </h1>");
    document.write("<h1>Posicion de la busqueda:"+ posicion+ "</h1>");
}else{
    document.write("<h1>NO ENCONTRADO</h1>");
}
