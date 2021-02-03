'use strict'

// Funciones grupo de ordenes agrupado con un nombre en concreto puede ser reutilizado 

//Defino la funcion

// primero va el nombre de la variable y entre parentesis los parametros importante!!!!!!

// el parametro de mostrar es un parametro opcional
function porConsola(numero1,numero2){
    console.log("Suma:" + (numero1+numero2));
    console.log("Resta:" + (numero1-numero2));
    console.log("Multiplicacion:" + (numero1*numero2));
    console.log("Divicion:" + (numero1/numero2));
    console.log("************************");
}

function porPantalla(numero1,numero2){
    document.write("Suma:" + (numero1+numero2) + "<br>");
    document.write("Resta:" + (numero1-numero2) + "<br>");
    document.write("Multiplicacion:" + (numero1*numero2)+ "<br>");
    document.write("Divicion:" + (numero1/numero2)+ "<br>");
    document.write("************************ <br>");
}


function calculadora(numero1,numero2, mostrar = false){
    // conjunto de instrucciones a ejecutar

    if(mostrar == false){
        porConsola(numero1,numero2);
    }else{
        porPantalla(numero1,numero2);
    }

}


// Llamar la funcion y entre parentesis igual los parametros
calculadora(12,8);
calculadora(2,8,true);
calculadora(20,8,true);



// invocar o llamar funcion
/* for(var i =1; i <=10; i++){
    console.log(i);
    calculadora(i,8);
} */

// Parametros 

