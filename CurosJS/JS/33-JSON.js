'use strict'
// JSON - JavaScript Objet notation

// esto es un objeto con documentos dentro
var pelicula ={
    titulo : 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais: "Francia"},
    pelicula
];

console.log(peliculas);


var caja_peliculas = document.querySelector("#peliculas")
for(var index in peliculas)
{
    var p =document.createElement("p");
    p.append(peliculas[index].titulo + "-" + peliculas[index].year);
    caja_peliculas.append(p);
}
