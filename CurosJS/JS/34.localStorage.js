'use strict'
//Localstorage

// Comprobar disponibilidad de localStorage

if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con Localstorage");
}

//Guardar datos
localStorage.setItem("titulo","Curso de Symfony de Victor Robles" );

//REcuperar elemneto
document.querySelector("#peliculas","Curso de Symfony de Victor Robles");

//Guardar objetos
var usuario = {
    nombre: "Gerrdo Luna",
    email: "geralunap@hotmail.com",
    web: "geraluna.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar Objeto
var usrjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#datos").append(userjs.web + "-" + userjs.nombre);
localStorage.clear();
///Importante ver el capitulo anterior para borrar elementos con el localStorage