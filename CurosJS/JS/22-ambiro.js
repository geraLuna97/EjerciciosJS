'use strict'
// Variables declaradas dentro de la funcion solo se utilizan en tal funcion

function holaMundo(texto){
    var hola_mundo = "Texto dentro de la funcion"
    console.log(texto);
    console.log(hola_mundo);
    console.log( typeof numero.toString());
}

var texto = "Hola Mundo soy una variable Global";
var numero = 12;
holaMundo(texto)
