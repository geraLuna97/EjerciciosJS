'use strict'

// Funciones Anonimas para hacer callbacks

// var pelicula = function(nombre){
//     return "la pelicula es: " +nombre;
// }

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){

    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;

}

sumame(5,7, function(dato){
    console.log("La suma es dato:", dato);
},

function(dato){
    console.log("la suma por dos es:",(dato*2));
});
// console.log(sumame(4,5));