'use strict'

// Plantillas de texto

var nombre = prompt("Mete tu nombre");
var apellidos = prompt("Mete tus apellidos");

var texto = `
    <h1> hola que tal </h1>
    <h3> Mi nombre es: ${nombre}</h3>
    <h3> Mis apellidos es: ${apellidos}</h3>
    
`;
document.write(texto);