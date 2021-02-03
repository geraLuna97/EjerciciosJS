'use strict'

/* Calculadora  
pida los numeros por pantalla
que si metemos mal numeros nos los vuelva a pedir
que nos muestre en el body en una alerta y por la consola el resultado de sumar
restar multriplicar y dividir esas 2 sifras
*/

var numero2 = parseInt(prompt("Ingresa el segundo numero",0));
var numero1 = parseInt(prompt("Ingresa el primer numero",0));


while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){

     numero2 = parseInt(prompt("Ingresa el segundo numero",0));
     numero1 = parseInt(prompt("Ingresa el primer numero",0));
    
}

var resultado = "La SUMA es:" + (numero1 + numero2) + "<br/>" +
"La RESTA es:" + (numero1 - numero2) + "<br/>" +
"La MULTIPLICAION es:" + (numero1 * numero2) + "<br/>" +
"La DIVICION es:" + (numero1 / numero2) + "<br/>"; 

var resultadoCMS = "La SUMA es: " + (numero1 + numero2) + "\n" +
"La RESTA es: " + (numero1 - numero2) + "\n" +
"La MULTIPLICAION es: " + (numero1 * numero2) + "\n" +
"La DIVICION es: " + (numero1 / numero2) + "\n";

document.write(resultado);
alert(resultadoCMS);
console.log(resultadoCMS);