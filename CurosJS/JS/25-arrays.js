'use strict'

// Arrays, Arreglos, Matrices


var nombres =["Gerardo","Luna","Perales","Es Guapo",12 ] ;

var lenguajes = new Array("PHP", "JS", "GO", "Java", "C#");

/*
console.log(nombres[2]); // Acceder al array entre corchetes
console.log(lenguajes.length);


var elemento = parseInt(prompt("Que elemento del array quieres", 0));
if(elemento >= nombres.length){
    alert("Introduce el umero correcto menor que: " + nombres.length);
}else{
    alert("El usuario seleccionado es" + nombres[elemento]);
}
alert(nombres[elemento]);
*/


document.write("<h1> Lenguajes de programacion 2021</h1>");
document.write("<ul>");

// for(var i =0; i< lenguajes.length; i++){
//     document.write( "<li>" + lenguajes[i] + "</li>")
// }

lenguajes.forEach((elemento,indice) => { // tiene 3 parametros 
    document.write( "<li>" + indice + "-"+ "elementos" + elemento + "</li>")
});

document.write("</ul>");
