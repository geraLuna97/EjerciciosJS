'use strict'
var categorias = ['Accion','Comedia','Terror'];
var peliculas = ['Toy Story','Cars','Shrek'];

var cine = [categorias,peliculas];

// console.log(cine[0][1]);

//peliculas.push("Batman");  a;ade un alemento a array seleccionado

// var elemento = "";


// do{
//     elemento = prompt("Introduce tu pelicula:");
//     peliculas.push(elemento);
// }while( elemento != "Acabar");

// peliculas.pop();

// console.log(peliculas);


var indice = peliculas.indexOf('Cars'); // busca con el indexof

if(indice > -1){
    peliculas.splice(indice,1);// empalma o remplaca dependiendo
}

var peliculas_string = peliculas.join(); // une un array

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);