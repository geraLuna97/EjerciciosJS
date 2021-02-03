'use strict'
// Pruebas con let y var

//Prueba con var
var numero = 40;
console.log(numero); // valor 40 

if (true){
    var numero = 50;
    console.log(numero); // valor 50

}

console.log(numero); // valor 50

//Prueba con let
var texto = "Curso JS";

console.log(texto);

if(true){
    let texto = "Curso 5 gerardo luna" // la funcion de let hace que sea una variable local aqui se muestra un claro ejemplo en, let es un alcanze limitado y var es una variable global
    console.log(texto);
}

console.log(texto); //valo js

